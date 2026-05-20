# Sprint 1 (REFINED) — Hoàn thiện cấu trúc mới

> Updated: 2026-05-19 sau decisions từ PM
> Goal: KHÔNG thêm tính năng. Hoàn thiện cấu trúc team v3 + ổn định production.
> Outcome: pipeline 4-phase chạy mượt cho 1 thay đổi nhỏ — proof of concept

---

## Sprint Theme

> **Foundation first. No new features. Test the pipeline.**

PM đã quyết:
- ✅ Auth là system module tiếp theo (sau sprint này — ADR-001 đã viết)
- ✅ Admin v2 là refactor không build lại từ đầu — ADR-002 đã viết
- ✅ Sprint này KHÔNG build feature mới — chỉ deploy team v3 + stabilize

---

## Day 1 — Apply patches + deploy team v3

**Owner**: PM + Claude Code (Tech Lead)

```
□ PM download:
  - team-v3.zip (đã có)
  - CLAUDE_v3_VOCABULARY_PATCH.md
  - TECH_LEAD_PATCH_v3_1.md
  - 2 ADR files (mới)

□ Apply patches:
  - INSERT CLAUDE_v3_VOCABULARY_PATCH content vào CLAUDE.md (section 13.5, trước 14)
  - REPLACE section "When invoked" trong .claude/agents/tech-lead.md với TECH_LEAD_PATCH content
  - PUT 2 ADR files vào docs/adr/001-*.md và docs/adr/002-*.md

□ Restart Claude Code session

□ Test understanding với prompt:
  "Phân biệt System Module vs Content Module vs Step cho tôi.
   Cho 3 ví dụ task ứng với 3 levels."
  → Claude phải answer ĐÚNG 3 levels rõ ràng

□ Commit:
  git add CLAUDE.md .claude/agents/tech-lead.md docs/adr/
  git commit -m "feat(team): apply vocabulary patch + add ADR-001 (auth) + ADR-002 (admin v2)"
  git push
```

**DoD Day 1**: Claude trong VS Code phân biệt rõ 3 levels, không nhầm "module" nữa.

---

## Day 2-3 — Phase 0 Stabilize (carry over)

**Owner**: Claude Code, invoke backend-engineer + frontend-engineer

### Day 2: Fix 4 API endpoints
```
□ Tech Lead invokes backend-engineer to audit api/*.js
□ Verify all use Node Serverless format (req, res signature)
□ Test:
  curl https://npvn-training-site.vercel.app/api/upload    → expect 405 JSON
  curl https://npvn-training-site.vercel.app/api/save      → expect 405 JSON
  curl https://npvn-training-site.vercel.app/api/manifest  → expect 400 JSON (missing module)
  curl https://npvn-training-site.vercel.app/api/spec      → expect 400 JSON
□ Verify Vercel env vars all set
□ Fix any failures with proper commits

□ Emit events:
  echo '{"type":"adr.implemented","actor":"backend-engineer","target":{"adr":"none"},"payload":{"endpoint":"/api/upload"}}' >> logs/events.jsonl
```

### Day 3: Fix images + seed attributes
```
□ Tech Lead invokes frontend-engineer
□ Identify why loc_kho, bo_suu_tap ảnh không hiện
□ Root cause + fix (Blob URL? local path? missing file?)
□ For each existing content module, ADD to modules.json:
  {
    "status": "live",
    "attributes": {
      "industry": "real_estate",
      "tenant":   "nhapho",
      "role":     [...],
      "level":    "...",
      "language": "vi",
      "tags":     [...]
    },
    "quality": {
      "errors": 0,
      "warnings": 0,
      "lastReviewed": null
    }
  }
□ Emit content.updated events
□ Commit
```

**DoD Day 2-3**: 4 endpoints work, 3 modules display correctly, all have status + attributes.

---

## Day 4 — Test pipeline với 1 small change

**Owner**: PM + Tech Lead orchestrating full team

PM chọn **1 thay đổi rất nhỏ** để test pipeline 4-phase. Đề xuất:
- Sửa lại 1 tooltip trong tour `dang_tin` (vd: step 5)
- HOẶC: Thêm 1 KB entry mới (vd: FAQ về "Mã giới thiệu hết hạn")

```
□ PM gives requirement to Tech Lead in VS Code chat
□ Tech Lead writes:
  - docs/specs/dang_tin_tooltip_fix.md (tech spec) — có thể rất ngắn
□ Tech Lead invokes qa-reviewer:
  - Writes docs/test-plans/dang_tin_tooltip_fix.md
  - Writes docs/test-cases/dang_tin_tooltip_fix.json
□ Tech Lead reviews QA plan
□ Tech Lead invokes frontend-engineer:
  - Implement change in data/modules.json
  - Self-test
  - Emit module.implemented
□ qa-reviewer executes test cases independently
□ PM does UAT (browse in browser, verify visually)
□ Tech Lead invokes devsecops:
  - Verify pre-deploy checklist
  - Push to main
  - Monitor canary 5 min (just for 1 small change)
  - Confirm live
□ Tech Lead invokes eval-specialist (QUICK mode, 5 cases):
  - Run on dang_tin
  - Verify no regression
□ Final: tail logs/events.jsonl → verify all events emitted properly
```

**DoD Day 4**: 1 small change shipped via FULL pipeline. Events traceable. PM happy with flow.

---

## Day 5 — Retrospective + plan Sprint 2

**Owner**: PM + Tech Lead

```
□ Tech Lead reads events.jsonl from the week
□ Tech Lead analyzes:
  - Where did handoffs slow down?
  - Were any agents under/over-utilized?
  - Any conventions emerged that should go into CLAUDE.md?
  - Any ADR-worthy decisions made informally?

□ PM + Tech Lead review:
  - Was the pipeline overhead worth it for the small change?
  - Adjust gate strictness if needed
  - Schedule lighter pipeline for "tiny" changes?

□ Plan Sprint 2 (rough):
  - Begin Admin CMS v2 Phase 2 (Hotspot picker integration)
  - OR begin Auth Phase 1 (mock IdP)
  - PM decides priority

□ Write docs/retrospectives/sprint-1.md
□ Commit
```

**DoD Day 5**: Sprint 1 closes with retrospective + clear Sprint 2 plan.

---

## Sprint 1 — Definition of Done (overall)

- [ ] Team v3 + vocabulary patch deployed
- [ ] ADR-001 (auth) + ADR-002 (admin v2) committed
- [ ] All 4 API endpoints work
- [ ] 3 content modules display correctly with status + attributes
- [ ] 1 small change shipped via full 4-phase pipeline
- [ ] Events log shows ≥ 15 entries from the week
- [ ] Retrospective documented
- [ ] Sprint 2 plan agreed

---

## What we are NOT doing this sprint (explicit)

❌ Not building auth (Sprint 2-3)
❌ Not building admin v2 features (Sprint 2+)
❌ Not adding new content modules (Sprint 2 maybe)
❌ Not changing schema structure
❌ Not setting up Vercel KV (Sprint 2 when auth starts)
❌ Not refactoring training-engine.html

Discipline matters. Stay focused.

---

## Looking ahead — Sprint roadmap (draft)

| Sprint | Theme | Key deliverable |
|--------|-------|-----------------|
| **1 (now)** | Foundation | Team v3 deployed, 1 small change shipped E2E |
| **2** | Admin v2 Phase 2 | Hotspot picker tích hợp vào admin |
| **3** | Admin v2 Phase 3 + 4 | State machine UI + AI Review |
| **4** | Auth Phase 1-2 | Mock IdP + client OAuth implementation |
| **5** | Auth Phase 3 + user-progress | Integration với App khi App ready |
| **6+** | Content expansion | Build 5-10 more content modules using polished pipeline |
| **7+** | Analytics + recommendation | Sau khi có progress data |

PM brainstorm với Tech Lead cuối mỗi sprint để adjust.
