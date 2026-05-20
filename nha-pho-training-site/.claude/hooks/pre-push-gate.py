#!/usr/bin/env python3
"""
pre-push-gate.py — Quality gate trước khi push lên main
- HARD BLOCK: modules.json invalid JSON
- HARD BLOCK: live modules có quality.errors > 0
- SOFT WARN: pending QA flag chưa clear
"""
import json
import sys
from pathlib import Path

def read_hook_input():
    try: return json.load(sys.stdin)
    except: return {}

def main():
    data = read_hook_input()
    cmd  = (data.get("tool_input", {}) or {}).get("command", "") or ""

    is_push_main = (
        "git push" in cmd
        and ("origin main" in cmd or "origin HEAD" in cmd or "--all" in cmd)
    )
    if not is_push_main: return 0

    # HARD GATE 1: modules.json must parse
    mp = Path("data/modules.json")
    if mp.exists():
        try:
            d = json.loads(mp.read_text(encoding="utf-8"))
        except Exception as e:
            print(json.dumps({"decision":"block","reason":f"❌ HARD BLOCK: data/modules.json invalid JSON: {e}"}))
            return 0

        # HARD GATE 2: live modules with errors
        live_bad = []
        modules = d.get("modules", {})
        for mid, m in modules.items():
            if m.get("status") == "live":
                q = m.get("quality") or {}
                if q.get("errors", 0) > 0:
                    live_bad.append(f"{mid}: {q['errors']} errors")

        if live_bad:
            msg = "❌ HARD BLOCK: Live modules có errors:\n" + "\n".join(f"  • {x}" for x in live_bad)
            print(json.dumps({"decision":"block","reason":msg}))
            return 0

    # SOFT WARN: pending QA
    flag = Path(".claude/.pending-qa.json")
    if flag.exists():
        try:
            p = json.loads(flag.read_text())
            files = p.get("flagged_files", [])
            if files:
                msg = (f"⚠️  WARN: {len(files)} files chưa QA review.\n"
                       f"   Triết lý balanced: cho phép push, nhưng chạy qa-reviewer sớm.")
                print(json.dumps({"decision":"approve","reason":msg}))
        except: pass

    return 0

if __name__ == "__main__":
    sys.exit(main())
