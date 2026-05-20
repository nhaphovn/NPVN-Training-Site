# Sprint 3 — Active

> Theme: Content Sprint — Publish 9 draft tours + workflow polish
> Start: 2026-05-20
> Owner: PM + Tech Lead

---

## Goal

PM dùng admin tool (hotspot picker + upload panel) để hoàn thiện 9 draft tours.
Tech Lead hỗ trợ pipeline, fix blockers, và cải thiện admin workflow.

---

## Scope

### Priority 1 — PM UAT & Content Workflow

Trước khi điền nội dung cho 9 modules, PM cần UAT admin end-to-end với 1 module thử:

```
□ PM: Upload ảnh cho 1 draft module (vd: kho_ca_nhan) qua upload panel
□ PM: Vẽ hotspot cho từng step bằng click-drag
□ PM: Điền ttTitle, ttText, guide cho từng step
□ PM: Bấm "Lưu lên site" → verify trên training-engine.html
□ Tech Lead: Fix blockers phát sinh trong UAT
```

### Priority 2 — Publish 9 Draft Tours

Sau khi UAT pass, PM lặp lại cho 9 modules:

| Module | Steps | PM Status |
|--------|-------|-----------|
| `kho_ca_nhan` | 9 | ⏳ chờ PM |
| `dat_lich_dau_khach` | 7 | ⏳ chờ PM |
| `lich_hen_dau_chu` | 5 | ⏳ chờ PM |
| `khach_can_mua_gap` | 7 | ⏳ chờ PM |
| `kho_hang_tu_do` | 6 | ⏳ chờ PM |
| `ma_gioi_thieu` | 5 | ⏳ chờ PM |
| `quan_ly_khach` | 13 | ⏳ chờ PM |
| `thong_bao_vu_chot` | 3 | ⏳ chờ PM |
| `tin_chinh_chu` | 9 | ⏳ chờ PM |

Mỗi module cần:
1. Ảnh upload lên Blob (`images/{module}/{key}.jpg`)
2. Hotspot tọa độ cho từng step (vẽ bằng admin picker)
3. `ttTitle` ≤5 từ, `ttText` ≤15 từ
4. `guide` ≥2 items mỗi step
5. Status đổi thành `"live"` sau khi hoàn tất

### Priority 3 — Admin: Nút "Publish" (draft → live)

Thêm nút **Publish** vào admin step editor để đổi status module từ `draft` → `live` mà không cần sửa JSON tay.

```
□ Tech Lead: spec nút Publish (1 click → confirm → status='live' → save)
□ Frontend Engineer: implement trong admin-patch.js
□ QA: test plan + cases
```

### Priority 4 — Carry-over từ Sprint 2

```
□ Backend Engineer: dry-run guard cho /api/save (?dry_run=1 → validate only, no commit)
□ Tech Lead: PROCESS_LITE.md — pipeline rút gọn cho tiny changes (<5 từ, 1 field)
```

---

## Definition of Done Sprint 3

| Item | Owner | Done? |
|------|-------|-------|
| PM UAT end-to-end 1 module trong admin | PM | ⏳ |
| ≥3 draft modules chuyển sang live | PM + TL | ⏳ |
| Nút Publish trong admin | FE | ⏳ |
| /api/save dry-run guard | BE | ⏳ |
| PROCESS_LITE.md | TL | ⏳ |
| Sprint 3 retro + Sprint 4 plan | TL | ⏳ |

---

## Blockers / Risks

| Risk | Mitigation |
|------|-----------|
| PM chưa có ảnh cho 9 modules | Dùng placeholder ảnh tạm, điền content trước |
| training-engine render lỗi với draft modules | Tech Lead fix ngay khi PM báo |
| admin-patch.js load sai trên prod | Check console sau mỗi push |

---

*Last updated: 2026-05-20*
