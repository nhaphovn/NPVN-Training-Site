# Sprint 1 Retrospective

> Date: 2026-05-20
> Author: Tech Lead
> Sprint theme: Foundation first — no new features, test the pipeline.

---

## Sprint 1 Definition of Done — Final Status

| DoD Item | Status | Notes |
|----------|--------|-------|
| Team v3 + vocabulary patch deployed | ✅ | .claude/agents/ + CLAUDE.md §13.5 committed |
| ADR-001 (auth) + ADR-002 (admin v2) committed | ✅ | docs/adr/001-*.md, 002-*.md |
| All 4 API endpoints work | ✅ | upload, save, manifest, spec — ESM fix + env vars |
| 3 content modules display correctly | ✅ | dang_tin, loc_kho, bo_suu_tap — images via proxy |
| status + attributes seeded on all 3 modules | ✅ | modules.json v10 |
| 1 small change shipped via full 4-phase pipeline | ✅ | dang_tin step 5 ttText — spec→QA→FE→UAT→deploy |
| Events log ≥ 15 entries | ✅ | **18 events** logged |
| Retrospective documented | ✅ | file này |
| Sprint 2 plan agreed | ⏳ | cuối file này |

---

## What went well

**Pipeline proved viable.** 4-phase flow (Spec → QA plan → Implement → Test → UAT → Deploy) chạy mượt cho 1 content change nhỏ. QA bắt được pre-existing bugs (duplicate id=6, KB missing) độc lập, không cần Tech Lead nhắc.

**API + images fixed cleanly.** Root cause rõ: `package.json` thiếu `"type":"module"` → ESM crash. Image proxy pattern (`/api/img`) giải quyết private Blob access một lần, không cần sửa lại.

**2 Vercel projects đồng bộ.** Phát hiện ra site có 2 deployment URLs (nha-pho-training-site + npvn-training-site) — đã sync env vars trên cả 2.

**Admin "Lưu lên site" hoạt động.** PM có thể commit modules.json từ browser, Vercel auto-deploy ~1 phút sau.

---

## Friction points

**Git repo subdirectory.** Repo có `nha-pho-training-site/` là subdirectory — gây lỗi `api/save.js` dùng sai path (`data/modules.json` thay vì `nha-pho-training-site/data/modules.json`). Đã fix, nhưng onboarding agent mới cần biết điều này.

**Test endpoint gây accidental commit.** Dùng payload thật khi test `/api/save` → ghi đè modules.json với `{"test":1}`. Đã restore ngay, nhưng nên có test endpoint riêng hoặc dry-run mode.

**2 deployment URLs chưa documented.** Agent không biết về `npvn-training-site.vercel.app` cho đến khi PM báo lỗi 500. Cần ghi vào CLAUDE.md.

---

## Bugs found (carry to Sprint 2 backlog)

| Bug | Severity | Owner |
|-----|----------|-------|
| Duplicate `id=6` trong dang_tin (2 steps cùng ID) | Medium | Frontend Engineer |
| `data/kb/nhapho.md` chưa tồn tại — chatbot không có KB | High | PM cung cấp content |

---

## Pipeline overhead assessment

Cho 1 content change nhỏ (1 field, 1 step): pipeline mất ~15 phút end-to-end (spec + QA plan + implement + test + deploy). Overhead đáng để establish process.

**Đề xuất cho tiny changes (<5 words thay đổi):** Cho phép "lightweight pipeline" — bỏ tech spec, giữ QA checklist tối giản (3 cases thay 7). Giảm overhead xuống ~5 phút.

---

## Agent utilization

| Agent | Invoked | Notes |
|-------|---------|-------|
| tech-lead | ✅ | Orchestrate, spec, ADR |
| qa-reviewer | ✅ | Test plan + execution — hoạt động tốt |
| frontend-engineer | ✅ | Implement chính xác, self-test đầy đủ |
| backend-engineer | ✅ | API audit + fix |
| devsecops | Inline | Deploy via git push — chưa cần agent riêng |
| eval-specialist | ✅ | Quick mode, phát hiện KB missing |
| ui-ux-designer | ❌ | Không cần cho sprint này |

---

## Sprint 2 Plan

**Theme: Fix backlog + Admin CMS v2 Phase 2 (Hotspot Picker)**

PM quyết định priority (đề xuất của Tech Lead):

### Priority 1 — Fix bugs từ Sprint 1

```
□ Fix duplicate id=6 trong dang_tin (Frontend Engineer)
□ Tạo data/kb/nhapho.md với content về đăng tin địa chỉ (PM cung cấp)
□ Document 2 Vercel URLs trong CLAUDE.md
□ Add dry-run mode hoặc test payload guard cho /api/save
```

### Priority 2 — Admin CMS v2 Phase 2 (ADR-002)

Theo ADR-002 Phase 2: tích hợp hotspot picker vào admin-x7q9.html.

```
□ UI/UX Designer: wireframe hotspot picker inline
□ Frontend Engineer: extract canvas logic từ image-manager.html → embed vào admin step editor
□ Test: PM tạo 1 step mới end-to-end trong admin (upload ảnh → vẽ hotspot → điền text → save)
```

### Priority 3 — Lightweight pipeline mode

```
□ Tech Lead: define "tiny change" criteria (< 5 words, 1 field, no schema change)
□ Tạo docs/PROCESS_LITE.md — pipeline rút gọn cho tiny changes
```

**PM chọn scope Sprint 2 trong session tiếp theo.**
