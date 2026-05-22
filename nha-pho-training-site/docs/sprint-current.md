# Sprint 6 — Content Completion + UX Polish

> Theme: Hoàn thiện nội dung modules + UX mobile-first
> Start: 2026-05-22
> Owner: Tech Lead orchestrates
> Process: 4-phase nghiêm túc — QA gate TRƯỚC khi code

---

## Sprint 5 Retro (brief)

### Delivered ✅
- Upload service v2 (image + video)
- API v1 modules endpoint
- Auth mock IdP + client
- User progress API (KV-backed)
- Deep link + embed support
- Homepage search + list/grid toggle
- Auth simplification (no role picker)

### Process violations ❌ (ghi nhận, không tái diễn)
- 4 commits push không qua QA gate trước
- 1 feature (admin step-search) thêm ngoài PM spec → phải xóa
- Deploy không qua DevSecOps canary
- Toolbar dùng JS-controlled `hidden` → dễ vỡ, bug production

### Rule chốt cho Sprint 6
```
QA viết test plan → APPROVED → FE/BE code → QA execute → DevSecOps canary → PM UAT
Không có exception nào.
```

---

## Sprint 6 — Items (chờ PM confirm)

> ⚠️ PHASE 1 đang diễn ra — Tech Lead cần PM xác nhận scope trước khi plan tiếp

### Item 0 — DevSecOps: Env vars (không cần spec riêng)
> Effort: XS | Owner: DevSecOps
> Không cần test plan — là config, không phải feature

- [ ] Set `JWT_SIGNING_SECRET` trên Vercel project `npvn-training-site`
- [ ] Create Vercel KV store, set `KV_REST_API_URL` + `KV_REST_API_TOKEN`
- [ ] Set `ADMIN_UPLOAD_TOKEN` để lock down admin

**Blocker:** Progress API không hoạt động cho đến khi KV được set.

---

### Item 1 — Vietnamese search (DEF-S-001 backlog)
> Effort: XS | Owner: FE
> QA viết test plan TRƯỚC khi FE code

Search hiện tại không match khi người dùng gõ không dấu ("dang tin" không tìm được "Đăng tin BĐS").

**Acceptance:** gõ "dang tin" → match "Đăng tin BĐS"

---

### Item 2 — Content module completion (8 draft modules)
> Effort: M | Owner: **PM tự chủ động qua Admin**
> Tech Lead/FE không cần action — PM sẽ request hỗ trợ khi cần

8 modules đang ở trạng thái `draft`:
- `chat_nha_pho` · `qr_code` · `bang_tin` · `kho_quan_tam`
- `tin_hoat_dong` · `quan_ly_phong_nhom` · `tai_khoan_ca_nhan` · `quan_ly_kho_hang`

PM sử dụng `admin-x7q9.html` để upload ảnh + điền hotspot + tooltip trực tiếp.
Tools hỗ trợ: `tools/coordinate_picker.html` (tọa độ hotspot).

---

### Item 3 — Mobile UX
> **DEFERRED** — PM xác nhận chưa cần điều chỉnh hiện tại

---

## Definition of Done Sprint 6

| Item | Phase 1 | QA Plan | Code | QA Pass | UAT | Deploy |
|------|---------|---------|------|---------|-----|--------|
| Env vars setup | ✅ | N/A | ⏳ PM action | N/A | ⏳ | ⏳ |
| Vietnamese search | ✅ | ✅ 16 cases | ✅ | ✅ 16/16 | ⏳ | ✅ `72f4e71` |
| Content modules (8) | ✅ | N/A | PM-owned via Admin | N/A | PM-owned | PM-owned |
| Mobile UX | — | — | — | — | — | DEFERRED |

---

## Process checkpoint — mỗi item PHẢI đi qua:

```
1. Tech Lead viết tech spec (docs/specs/<item>.md)
2. QA Reviewer viết test plan + cases (docs/test-plans/ + test-cases/) ← TRƯỚC khi code
3. Tech Lead approve test plan
4. FE/BE implement song song
5. FE/BE self-test → báo cáo Tech Lead
6. QA execute test cases đã viết từ bước 2
7. QA PASS → PM UAT
8. PM PASS → DevSecOps canary deploy (không bỏ qua)
9. Monitor 30 min → full release
10. Eval Specialist đo lường
```

*Last updated: 2026-05-22*
