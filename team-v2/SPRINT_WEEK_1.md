# Sprint Week 1 — Phase 0 Stabilize + Phase 1 Kickoff

> Sprint goal: Foundation vững + team agent v2 deployed
> Duration: 5 ngày làm việc
> Triết lý: balanced (ship draft, track debt)

---

## Day 1 — Stabilize Production

**Owner**: Claude Code (VS Code) | **Tool**: backend-engineer agent

```
□ Đọc CLAUDE.md + 4 API files hiện tại trong repo
□ Verify Node serverless format đúng (req, res signature)
□ Test 4 endpoints với curl, fix nếu fail:
  curl https://npvn-training-site.vercel.app/api/upload     → 405 JSON
  curl https://npvn-training-site.vercel.app/api/save       → 405 JSON
  curl https://npvn-training-site.vercel.app/api/manifest   → 400 JSON (missing module)
  curl https://npvn-training-site.vercel.app/api/spec       → 400 JSON
□ Verify Vercel env vars: BLOB_READ_WRITE_TOKEN, GITHUB_TOKEN, GITHUB_REPO
□ Commit any fixes với message: "fix(api): node serverless signature"
```

**Done when**: tất cả 4 endpoints trả JSON khi hit từ browser.

---

## Day 2 — Fix Image Display Issue

**Owner**: Claude Code | **Tool**: backend-engineer agent

```
□ Open https://npvn-training-site.vercel.app/?module=loc_kho trong browser
□ F12 → Network tab → tìm request ảnh fail
□ Đọc data/modules.json — kiểm tra path ảnh của loc_kho, bo_suu_tap
□ Compare với dang_tin (đang hoạt động)
□ Root cause analysis (path local? blob URL sai? file thiếu?)
□ Fix:
  - Nếu path /images/... mà file thiếu → upload lên blob, update path
  - Nếu path blob mà URL sai → fix URL trong modules.json
□ Verify cả 3 modules hiển thị ảnh đúng
□ Commit: "fix(content): repair image paths for loc_kho, bo_suu_tap"
```

**Done when**: 3 modules đều hiển thị ảnh khi mở trên production.

---

## Day 3 — Deploy Team Agent v2

**Owner**: PM (bạn) + Claude Code

```
□ PM download team-v2.zip (bundle này) → giải nén
□ Trong VS Code → kéo thả:
  - .claude/agents/* → thay thế các file cũ
  - .claude/settings.json → thay thế file cũ (hoặc tạo mới)
  - .claude/hooks/*.py → tạo folder mới
  - data/SCHEMA_V2.md → tạo mới
  - CLAUDE_UPDATE.md → append vào CLAUDE.md
□ Claude Code:
  - chmod +x .claude/hooks/*.py
  - Test hooks bằng cách edit modules.json giả → verify post-edit-flag.py chạy
□ Restart Claude Code session để load instructions mới
□ Commit: "feat(agents): deploy team v2 with quality gates"
□ Verify pre-push hook bằng cách thử push (không thực sự push) — coi có warn không
```

**Done when**:
- Tất cả 6 agents có file `.md` trong `.claude/agents/`
- Settings.json + 2 hooks scripts hoạt động
- CLAUDE.md có section 14 (team roles)
- Có thể gõ `/check` trong Claude Code và nó delegate đúng cho qa-reviewer

---

## Day 4 — Migrate to Quality Block Schema

**Owner**: Claude Code | **Tools**: backend-engineer → qa-reviewer

```
□ backend-engineer: tạo scripts/add-quality-blocks.js
  - Đọc data/modules.json
  - Cho mỗi module, thêm field "status" và "quality" object nếu chưa có
  - status default: "live" (cho 3 module hiện tại đang chạy production)
  - quality default: {todo_count: 0, eval_score: null, errors: 0, warnings: 0, blocking: []}
  - Write back to modules.json
□ Chạy script: node scripts/add-quality-blocks.js
□ Verify modules.json vẫn parse OK + engine vẫn render OK
□ Invoke qa-reviewer LENIENT mode trên tất cả modules
□ Quality block được populate đúng với debt thực tế
□ Commit: "refactor(schema): add quality + status blocks (v1.5)"
```

**Done when**: 
- Modules.json có quality + status block cho mỗi module
- qa-reviewer output rõ ràng (TODOs, warnings, errors per module)
- Engine vẫn hoạt động bình thường

---

## Day 5 — Slash Commands E2E Test

**Owner**: PM (bạn) | **Tool**: Claude Code

```
□ Test /status — phải hiển thị 3 modules + quality blocks + debt
□ Test /check — qa-reviewer chạy, output báo cáo cho 3 modules
□ Test /eval (sample mode) — chạy 5 cases, không tốn nhiều cost
□ Test /new-module test_module — verify nó hỏi đúng inputs
  (cancel sau khi verify behavior, không cần build thật)
□ Document workflow trong PM_PLAYBOOK.md:
  "Khi muốn X → gõ Y → expected output Z"
□ Backlog cho Sprint Week 2:
  - Module Kho cá nhân (PM cung cấp screenshots)
  - Module Lịch hẹn
  - KB additions cho các gap eval phát hiện
```

**Done when**: PM tự tin sử dụng 5 slash commands mà không cần hỏi.

---

## Sprint retrospective questions (Friday)

1. Production có ổn định cả tuần không?
2. Slash commands có dễ dùng không?
3. Quality debt phát hiện được bao nhiêu?
4. Có bug nào pattern lặp lại không?
5. Sprint Week 2 nên focus gì?

---

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Hook block legitimate push | Med | Med | SOFT warn instead of HARD block |
| Schema change breaks engine | Med | High | Backward compat for 1 version, test on staging |
| QA Reviewer too strict | Low | Med | LENIENT mode default, STRICT only for deploy |
| Vercel Blob quota | Low | Low | Free tier đủ cho hiện tại; monitor |
| Eval cost spike | Low | Low | Default QUICK mode, FULL eval cần confirm |

---

## Definition of Done — Sprint Week 1

- [ ] 4 API endpoints working
- [ ] 3 modules display ảnh đầy đủ
- [ ] Team v2 deployed
- [ ] Quality blocks populated
- [ ] 5 slash commands tested
- [ ] PM playbook documented

Nếu hoàn thành tất cả → Sprint Week 2 sẽ focus content (3 module mới).
