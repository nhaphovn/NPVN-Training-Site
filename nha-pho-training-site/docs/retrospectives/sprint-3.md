# Sprint 3 Retrospective

> Closed: 2026-05-21 | Theme: Content Sprint + Workflow Polish

---

## DoD Results

| Item | Owner | Result |
|------|-------|--------|
| Nút Publish (draft → live) | FE | ✅ Shipped |
| /api/save dry-run guard | BE | ✅ Shipped |
| PROCESS_LITE.md | TL | ✅ Shipped |
| Upload ảnh mỗi bước (per-step) | FE + BE | ✅ Shipped |
| Featured toggle trong admin | FE | ✅ Shipped |
| Fix 3 roles + homepage "Tính năng thường dùng" | FE | ✅ Shipped |
| Fix Blob 500 upload → private store | BE | ✅ Shipped (carry-over blocker) |
| PM UAT 1 module end-to-end | PM | ⏳ → Sprint 4 |
| ≥3 draft modules live | PM | ⏳ → Sprint 4 |
| Sprint retro | TL | ✅ This doc |

**Tech DoD: 8/8 ✅ | Content DoD: 0/2 → carry-over PM**

---

## What Went Well

- Pipeline đầy đủ: spec → QA plan → implement → ship, mỗi feature có test case trước
- Publish button (10 QA cases) ship đúng quy trình
- Upload per-step gọn hơn floating panel cũ — UX tốt hơn
- PROCESS_LITE.md chuẩn hóa tiny-change workflow

## What Was Hard

- **Blob private store issue kéo dài 4 iteration:**
  - Iter 1: `access:'public'` → API reject
  - Iter 2: `access:'private'` → SDK throw client-side
  - Iter 3: bypass SDK, sai URL + version
  - Iter 4: đúng URL/version nhưng sai header name (`x-access` vs `x-vercel-blob-access`)
  - Iter 5: upgrade SDK 0.27 → 2.4 — root cause thực sự là SDK cũ chưa có private support
- **Root cause**: package version quá cũ; nên kiểm tra compatibility khi tạo private store

## Action Items → Sprint 4

- [ ] PM: UAT và publish ít nhất 3 module (mang từ Sprint 3 sang)
- [ ] TL: Spec upload-service v2 (image + video, reusable, ABAC-ready)
- [ ] BE: `api/spec.js` dùng `access:'public'` → cần fix cho private store
- [ ] TL: Check `api/manifest.js` list() có hoạt động với private store không

---

*Sprint 3 tech velocity: ~2 ngày thực chiến | Blockers chính: Blob compatibility*
