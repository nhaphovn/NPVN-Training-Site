# Sprint 4 — Active

> Theme: Content Deployment + Upload Service v2
> Start: 2026-05-21
> Owner: PM (content) + Tech Lead (infra + reusability)

---

## Goal

PM hoàn thiện và publish 9 draft tours. Tech Lead nâng cấp upload service thành
component tái sử dụng được (image + video, ABAC-ready) theo nguyên tắc reusability.

---

## Scope

### Priority 1 — PM: Publish 9 Draft Tours (carry-over Sprint 3)

Upload đã hoạt động. PM bắt đầu UAT và điền content:

```
□ PM: UAT admin end-to-end với kho_ca_nhan (upload → hotspot → content → Publish)
□ PM: Lặp lại cho 8 module còn lại theo thứ tự ưu tiên dưới
```

| Module | Steps | Role | Priority |
|--------|-------|------|----------|
| `kho_ca_nhan` | 9 | Đầu chủ | 🔴 Cao |
| `dat_lich_dau_khach` | 7 | HV/CV | 🔴 Cao |
| `lich_hen_dau_chu` | 5 | Đầu chủ | 🔴 Cao |
| `khach_can_mua_gap` | 7 | HV/CV | 🟡 Vừa |
| `tin_chinh_chu` | 9 | Đầu chủ | 🟡 Vừa |
| `kho_hang_tu_do` | 6 | HV/CV | 🟡 Vừa |
| `ma_gioi_thieu` | 5 | HV/CV | 🟢 Thấp |
| `quan_ly_khach` | 13 | QL phòng | 🟢 Thấp |
| `thong_bao_vu_chot` | 3 | QL phòng | 🟢 Thấp |

Mỗi module cần:
1. Screenshots upload lên Blob (kéo ảnh vào từng step trong admin)
2. Hotspot vẽ bằng click-drag trong admin
3. `ttTitle` ≤5 từ · `ttText` ≤15 từ · `guide` ≥2 items/step
4. Bấm **▶ Publish** → tự lưu lên site

### Priority 2 — Upload Service v2 (reusability)

Tách upload logic thành module độc lập, tái sử dụng được từ bất kỳ page nào.

**Lý do:** Training site sẽ scale — user có phân quyền sẽ upload ảnh + video
trực tiếp (không chỉ admin). Xây dựng reusable ngay bây giờ.

```
□ Tech Lead: Spec upload-service v2
□ Backend Engineer: Mở rộng api/upload.js — thêm video (mp4/webm, 50MB)
□ Frontend Engineer: Tách uploadToBlob() ra upload-service.js (không trong IIFE)
□ QA: Test plan cho upload-service v2
```

**Deliverables:**
- `api/upload.js` hỗ trợ cả ảnh (`jpg/png/webp`, 5MB) và video (`mp4/webm/mov`, 50MB)
- `upload-service.js` — client module export được, dùng từ admin + training-engine + tương lai
- ABAC hook: header `x-tenant` + `x-role` → validate trước khi upload (prep, không enforce chưa)

### Priority 3 — Fix api/spec.js cho Private Store

`api/spec.js` dùng `access:'public'` → fail trên private store.

```
□ Backend Engineer: Đổi access:'public' → access:'private' trong api/spec.js
□ Backend Engineer: Verify api/manifest.js list() hoạt động với private store
```

### Priority 4 — Admin Polish (từ PM UAT feedback)

Ghi nhận blockers trong quá trình PM UAT Sprint 4. Tech Lead triage và fix ngay.

---

## Definition of Done Sprint 4

| Item | Owner | Done? |
|------|-------|-------|
| PM UAT 1 module hoàn chỉnh | PM | ⏳ |
| ≥5 draft modules chuyển sang live | PM | ⏳ |
| upload-service.js (image + video) | FE + BE | ⏳ |
| api/spec.js fix private store | BE | ⏳ |
| Sprint 4 retro + Sprint 5 plan | TL | ⏳ |

---

## Blockers / Risks

| Risk | Mitigation |
|------|-----------|
| PM chưa có screenshots cho draft modules | Dùng ảnh placeholder tạm; upload thật sau |
| Video upload cần multipart cho file >5MB | BE spec multipart upload nếu cần |
| api/manifest.js list() chưa test với private | BE verify trong Sprint 4 P3 |

---

*Last updated: 2026-05-21*
