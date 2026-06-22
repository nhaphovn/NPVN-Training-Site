#!/usr/bin/env python3
"""
run_eval.py — Nhà Phố Chatbot Evaluation Pipeline

Workflow:
  1. Load test_cases.json (50 câu hỏi + expected answers)
  2. Gửi từng câu hỏi tới chatbot — model + system prompt PHẢI khớp production
     (CHATBOT_MODEL mặc định đọc từ env MODEL_NAME, fallback claude-haiku-4-5-20251001;
     system prompt port từ buildSystemPrompt() trong api/chat.js — xem cảnh báo trong code)
  3. LLM-as-judge (JUDGE_MODEL, mạnh hơn model bị test) → chấm điểm mỗi câu (1-5)
  4. Output: score tổng + report câu fail

Usage:
  python eval/run_eval.py --key sk-ant-xxx [--kb data/kb/nhapho.md] [--out eval/report.json]
  python eval/run_eval.py --key sk-ant-xxx --module dang_tin   # chỉ test 1 module
  python eval/run_eval.py --key sk-ant-xxx --dry-run            # xem list cases, không call API

LƯU Ý (2026-06-22): test_cases.json chỉ cover 9/25 module hiện có — 16 module mới
(kho_ca_nhan, quan_ly_khach, tai_app_android, tai_app_ios, v.v.) CHƯA có test case.
Eval pass không có nghĩa 16 module đó đã được kiểm chứng.

Cost estimate: ~50 calls × ~500 tokens ≈ ~$0.05 (Haiku rẻ hơn Sonnet 4 đáng kể)

Yêu cầu: pip install anthropic
"""

import argparse
import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from datetime import datetime

import anthropic

# ── Constants ─────────────────────────────────────────────────────────
# CHATBOT_MODEL phải khớp đúng model production trong api/chat.js (biến MODEL_NAME).
# Nếu production đổi model, cập nhật cả 2 nơi — hoặc đọc từ env MODEL_NAME để tránh lệch.
CHATBOT_MODEL  = os.environ.get("MODEL_NAME", "claude-haiku-4-5-20251001")
JUDGE_MODEL    = "claude-sonnet-4-6"   # judge dùng model mạnh hơn model bị test, tránh tự chấm thiên vị
MAX_TOKENS     = 512
PASS_THRESHOLD = 3.5      # điểm tối thiểu để deploy
MAX_WORKERS    = 5        # parallel calls
RETRY_DELAY    = 2        # giây chờ khi rate limit

# ── KB system prompt (inject vào chatbot) ─────────────────────────────
# PHẢI giữ đồng bộ với buildSystemPrompt() trong api/chat.js — nếu sửa rule ở
# production, sửa lại đây. Eval test sai prompt = test sai chatbot.
# Không tự thêm thông tin (hotline, số liệu...) không có trong KB_CONTENT thật.
KB_SYSTEM_TEMPLATE = """Bạn là chatbot hỗ trợ của App Nhà Phố — đồng nghiệp thạo app, trả lời ngắn gọn và thân thiện.

# ĐỊNH DẠNG — tuân thủ tuyệt đối, không ngoại lệ

Chỉ viết đoạn văn thường. KHÔNG dùng bất kỳ ký hiệu gạch đầu dòng nào: -, –, *, •, ✓, ➤, hay emoji đứng đầu dòng.

Câu hỏi thường: 1–2 câu, xong.
Câu hỏi cần giải thích nhiều bước: mỗi bước viết thành 1 câu riêng, cách nhau 1 dòng trắng.

# Vai trò
- Trả lời nhanh điều user chưa biết hoặc không tìm thấy trong hướng dẫn
- Chỉ trả lời thông tin có trong Knowledge Base dưới đây — không bịa

# Phạm vi
- Chỉ về App Nhà Phố Việt Nam
- Ngoài phạm vi → từ chối vui: "Cái đó mình chịu 😅 Hỏi gì về app đi!"

# Cấm tuyệt đối
- KHÔNG bịa giá / số liệu thị trường BĐS, hotline, hay bất kỳ thông tin không có trong KB
- KHÔNG tư vấn pháp lý, đầu tư
- TỪ CHỐI ngay và lịch sự mọi câu hỏi tục tĩu, bậy bạ, xúc phạm

# KNOWLEDGE BASE — NGUỒN SỰ THẬT DUY NHẤT

{kb_content}"""

# ── Judge prompt ──────────────────────────────────────────────────────
JUDGE_PROMPT = """Bạn là giám khảo đánh giá câu trả lời của chatbot hỗ trợ App Nhà Phố.

CÂU HỎI: {question}
ĐÁP ÁN CHUẨN: {expected}
CÂU TRẢ LỜI CHATBOT: {actual}

Chấm điểm từ 1-5:
5 = Đúng hoàn toàn, đủ thông tin
4 = Đúng cơ bản, thiếu 1 chi tiết nhỏ
3 = Đúng một phần, còn thiếu thông tin quan trọng
2 = Sai một phần hoặc thiếu nhiều
1 = Sai hoàn toàn hoặc hallucination

Trả lời CHÍNH XÁC theo format JSON (không thêm text khác):
{{"score": <số 1-5>, "reason": "<giải thích ngắn 1 câu>"}}"""


# ── Load KB ───────────────────────────────────────────────────────────

def load_kb(kb_path: str | None) -> str:
    if not kb_path:
        return "Knowledge base không được cung cấp."
    p = Path(kb_path)
    if not p.exists():
        print(f"⚠️  KB file không tìm thấy: {kb_path}")
        return ""
    content = p.read_text(encoding="utf-8")
    print(f"✅ KB loaded: {len(content):,} chars từ {kb_path}")
    return content


# ── Single chatbot call ───────────────────────────────────────────────

def call_chatbot(client: anthropic.Anthropic, question: str, system: str) -> str:
    """Gọi chatbot với câu hỏi — retry 1 lần nếu rate limit."""
    for attempt in range(2):
        try:
            msg = client.messages.create(
                model=CHATBOT_MODEL,
                max_tokens=MAX_TOKENS,
                system=system,
                messages=[{"role": "user", "content": question}],
            )
            return msg.content[0].text.strip()
        except anthropic.RateLimitError:
            if attempt == 0:
                print(f"   ⏳ Rate limit — chờ {RETRY_DELAY}s...")
                time.sleep(RETRY_DELAY)
            else:
                return "ERROR: Rate limit exceeded"
        except Exception as e:
            return f"ERROR: {e}"
    return "ERROR: Max retries"


# ── Judge call ────────────────────────────────────────────────────────

def call_judge(client: anthropic.Anthropic, case: dict, actual: str) -> dict:
    """LLM-as-judge: chấm điểm câu trả lời."""
    prompt = JUDGE_PROMPT.format(
        question=case["q"],
        expected=case["expected"],
        actual=actual,
    )
    try:
        msg = client.messages.create(
            model=JUDGE_MODEL,
            max_tokens=100,
            messages=[{"role": "user", "content": prompt}],
        )
        raw = msg.content[0].text.strip()
        # Strip markdown fences if present
        raw = raw.replace("```json", "").replace("```", "").strip()
        return json.loads(raw)
    except json.JSONDecodeError:
        # Fallback: extract score with simple parse
        import re
        m = re.search(r'"score"\s*:\s*(\d)', raw)
        score = int(m.group(1)) if m else 1
        return {"score": score, "reason": raw[:100]}
    except Exception as e:
        return {"score": 1, "reason": f"Judge error: {e}"}


# ── Evaluate single case ──────────────────────────────────────────────

def evaluate_case(client: anthropic.Anthropic, case: dict, system: str) -> dict:
    """Run one full evaluation: chatbot call + judge call."""
    actual = call_chatbot(client, case["q"], system)
    if actual.startswith("ERROR"):
        return {**case, "actual": actual, "score": 0, "reason": actual, "pass": False}

    judgment = call_judge(client, case, actual)
    score  = judgment.get("score", 1)
    reason = judgment.get("reason", "")

    return {
        **case,
        "actual": actual,
        "score":  score,
        "reason": reason,
        "pass":   score >= PASS_THRESHOLD,
    }


# ── Main runner ───────────────────────────────────────────────────────

def run_eval(
    api_key: str,
    cases_path: str,
    kb_path: str | None,
    out_path: str,
    module_filter: str | None,
    dry_run: bool,
    verbose: bool,
) -> int:
    """Returns exit code: 0=pass, 1=fail."""

    # Load cases
    cases_file = Path(cases_path)
    if not cases_file.exists():
        print(f"❌ Không tìm thấy {cases_path}")
        return 1

    data  = json.loads(cases_file.read_text(encoding="utf-8"))
    cases = data["cases"]
    threshold = data.get("pass_threshold", PASS_THRESHOLD)

    # Filter by module
    if module_filter:
        cases = [c for c in cases if c.get("module") == module_filter]
        print(f"🔍 Filter module='{module_filter}': {len(cases)} cases")

    if not cases:
        print("⚠️  Không có case nào")
        return 0

    print(f"📋 {len(cases)} cases | threshold: {threshold}")

    if dry_run:
        print("\n[DRY RUN] Cases sẽ được test:")
        for c in cases:
            print(f"  [{c['module']}] #{c['id']}: {c['q'][:60]}...")
        return 0

    # Setup
    client = anthropic.Anthropic(api_key=api_key)
    kb     = load_kb(kb_path)
    system = KB_SYSTEM_TEMPLATE.format(kb_content=kb or "(KB không có)")

    print(f"\n🚀 Bắt đầu eval — {MAX_WORKERS} workers song song\n{'='*60}")
    start = time.time()

    results  = []
    total    = len(cases)
    done     = 0

    # Run parallel
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {
            executor.submit(evaluate_case, client, c, system): c
            for c in cases
        }
        for future in as_completed(futures):
            result = future.result()
            results.append(result)
            done += 1
            icon  = "✅" if result["pass"] else "❌"
            score = result["score"]
            print(f"  {icon} [{done:2d}/{total}] #{result['id']:2d} score={score} | {result['q'][:45]}...")
            if verbose and not result["pass"]:
                print(f"       Expected: {result['expected'][:80]}")
                print(f"       Actual:   {result['actual'][:80]}")
                print(f"       Reason:   {result['reason']}")

    elapsed = time.time() - start

    # Sort by id
    results.sort(key=lambda r: r["id"])

    # ── Stats ──
    scores  = [r["score"] for r in results if r["score"] > 0]
    avg     = sum(scores) / len(scores) if scores else 0
    passed  = sum(1 for r in results if r["pass"])
    failed  = len(results) - passed

    # By module
    by_module = {}
    for r in results:
        m = r.get("module", "?")
        by_module.setdefault(m, []).append(r["score"])
    module_stats = {
        m: round(sum(s) / len(s), 2)
        for m, s in by_module.items()
    }

    print(f"\n{'='*60}")
    print(f"📊 KẾT QUẢ EVAL")
    print(f"   Tổng cases:    {len(results)}")
    print(f"   Pass (≥{threshold}):   {passed} ({100*passed//len(results)}%)")
    print(f"   Fail:          {failed}")
    print(f"   Avg score:     {avg:.2f} / 5.00")
    print(f"   Thời gian:     {elapsed:.1f}s")
    print(f"\n   Theo module:")
    for m, score in sorted(module_stats.items()):
        icon = "✅" if score >= threshold else "❌"
        print(f"     {icon} {m:<20} avg={score:.2f}")

    # Fail list
    fails = [r for r in results if not r["pass"]]
    if fails:
        print(f"\n❌ {len(fails)} câu FAIL:")
        for r in fails:
            print(f"   #{r['id']:2d} [{r['module']}] score={r['score']} | {r['q'][:50]}")
            print(f"       Reason: {r.get('reason','?')[:80]}")

    # ── Export report ──
    report = {
        "run_at":       datetime.now().isoformat(),
        "chatbot_model": CHATBOT_MODEL,
        "judge_model":   JUDGE_MODEL,
        "total":        len(results),
        "passed":       passed,
        "failed":       failed,
        "avg_score":    round(avg, 3),
        "threshold":    threshold,
        "deploy_ok":    avg >= threshold,
        "elapsed_sec":  round(elapsed, 1),
        "module_stats": module_stats,
        "results":      results,
    }
    out_file = Path(out_path)
    out_file.parent.mkdir(parents=True, exist_ok=True)
    out_file.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n💾 Report → {out_path}")

    # ── Exit code ──
    if avg >= threshold:
        print(f"\n🎉 PASS — avg {avg:.2f} ≥ {threshold} → ready to deploy")
        return 0
    else:
        print(f"\n🚫 FAIL — avg {avg:.2f} < {threshold} → chặn deploy")
        return 1


# ── CLI ───────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser(description="Nhà Phố Chatbot Evaluation")
    p.add_argument("--key",     required=False, default=os.environ.get("ANTHROPIC_API_KEY",""),
                   help="Claude API key (hoặc set ANTHROPIC_API_KEY)")
    p.add_argument("--cases",   default="eval/test_cases.json")
    p.add_argument("--kb",      default=None,   help="Path tới KB markdown file")
    p.add_argument("--out",     default="eval/report.json")
    p.add_argument("--module",  default=None,   help="Chỉ test module cụ thể")
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--verbose", action="store_true", help="In expected/actual khi fail")
    args = p.parse_args()

    if not args.key and not args.dry_run:
        print("❌ Cần API key: --key sk-ant-xxx hoặc export ANTHROPIC_API_KEY=...")
        sys.exit(1)

    code = run_eval(
        api_key=args.key,
        cases_path=args.cases,
        kb_path=args.kb,
        out_path=args.out,
        module_filter=args.module,
        dry_run=args.dry_run,
        verbose=args.verbose,
    )
    sys.exit(code)


if __name__ == "__main__":
    main()
