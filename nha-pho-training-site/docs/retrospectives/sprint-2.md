# Sprint 2 Retrospective

> Date: 2026-05-20
> Author: Tech Lead
> Sprint theme: Fix backlog + Admin CMS v2 Phase 2

---

## Sprint 2 Definition of Done — Final Status

| DoD Item | Status | Notes |
|----------|--------|-------|
| Fix duplicate id=6 trong dang_tin | ✅ | Steps 7-11 renumbered, unique IDs |
| data/kb/nhapho.md tạo mới | ✅ | KB skeleton + đăng tin content; loc_kho/bo_suu_tap còn TODO |
| Document 2 Vercel URLs trong CLAUDE.md | ✅ | Primary + alias, cả 2 projects noted |
| Admin CMS v2: hotspot picker (click-drag) | ✅ | admin-x7q9.html — draw mode trên phone image |
| Admin CMS v2: upload panel (drag-drop Blob) | ✅ | admin-patch.js v3 + api/upload.js fix |
| Dry-run guard cho /api/save | ❌ | Carry to Sprint 3 |
| PROCESS_LITE.md | ❌ | Carry to Sprint 3 |
| PM UAT end-to-end: tạo step mới trong admin | ⏳ | Pending PM test |

---

## What went well

**Admin CMS v2 hoàn thiện hơn nhiều.** Hotspot picker (click-drag) + upload panel (drag-drop) giúp PM tự quản lý content mà không cần Claude can thiệp vào từng ảnh.

**Upload API fix clean.** `?module=&key=` params giải quyết dứt điểm vấn đề multi-word module names. Proxy URL pattern (`/api/img?path=`) nhất quán 100%.

**9 draft modules sẵn sàng nhận content.** Image URLs đã chuẩn format, attributes seeded, chỉ còn PM điền nội dung.

---

## Friction points

**Carry-over items từ Sprint 1.** Dry-run guard và PROCESS_LITE.md chưa làm — deprioritized vì admin features có priority cao hơn. Nên chuyển sang Sprint 3.

**PM UAT chưa confirm.** Upload panel và hotspot picker chưa được PM test end-to-end thực tế. Sprint 3 nên bắt đầu bằng bước này.

---

## Sprint 3 Plan

→ Xem `docs/sprint-current.md`
