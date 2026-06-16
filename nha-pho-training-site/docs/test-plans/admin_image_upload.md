# Test Plan: Admin Image Upload Flow

**Feature:** Upload ảnh trong admin-x7q9.html — 2 luồng: Step Drop Zone + Images Modal  
**Gate:** 2 — thực thi sau khi FE self-test, trước khi release module mới  
**Date:** 2026-06-16  
**Author:** qa-reviewer  
**Lý do tạo:** Post-mortem bug `tai_app_android`/`tai_app_ios` — ảnh không hiện vì `handleStepImgUpload` chỉ lưu IndexedDB, không upload Blob, không cập nhật proxyUrl trong modules.json trước khi Publish.

---

## Scope

### In scope
- **Luồng A — Step Drop Zone** (`handleStepImgUpload`): kéo/thả hoặc click chọn ảnh trực tiếp trong panel bước hiện tại
- **Luồng B — Images Modal** (`handleMediaUpload`): upload qua "Sửa module" → tab Ảnh
- Sau upload: `STATE.module.images[key]` phải là `/api/img?path=...` (proxyUrl), không phải `/images/...` (static path)
- Sau Publish: `modules.json` trên GitHub chứa proxyUrl đúng
- End-to-end verify: mở training site trên **browser chưa có IndexedDB** (incognito/máy khác) → ảnh hiện bình thường
- Regression: module đã có ảnh Blob trước đó không bị mất khi Publish module khác

### Out of scope
- Upload video (luồng khác, test plan riêng)
- Icon module upload (test plan admin_publish_button đã cover)
- Behavior khi BLOB_READ_WRITE_TOKEN bị xóa trong lúc đang dùng admin (covered by image_proxy_fix TC-09)
- CDN cache invalidation
- Concurrent upload (2 tab cùng upload 1 key)

---

## Bối cảnh kỹ thuật — 2 luồng upload

```
Luồng A: Step Drop Zone
  handleStepImgUpload(file)
    → processImageFile() → resize 390px
    → imgDbPut(moduleId/key, blob)       ← IndexedDB local
    → uploadToBlob(blob, moduleId, key)  ← POST /api/upload → Vercel Blob
    → STATE.module.images[key] = proxyUrl
    → setDirty(true)

Luồng B: Images Modal
  handleMediaUpload(file, row, moduleId)
    → processImageFile() → resize
    → imgDbPut(moduleId/key, blob)       ← IndexedDB local
    → uploadToBlob(blob, mid, key)       ← POST /api/upload → Vercel Blob
    → pathInput.value = proxyUrl         ← cập nhật UI input
    (lưu khi saveModuleModal() → STATE.module.images[key] = proxyUrl)
```

**Bug đã sửa (2026-06-16 commit d5b5c7a):** Luồng A trước đây bỏ qua bước `uploadToBlob` và không cập nhật `STATE.module.images[key]`. Fix đã thêm 2 bước này.

---

## Test Cases Summary

| ID | Tiêu đề | Luồng | Priority |
|----|---------|-------|----------|
| UPL-001 | Step Drop Zone: upload ảnh → toast "đã lên Blob" | A | P0 |
| UPL-002 | Step Drop Zone: sau upload, module.images[key] = proxyUrl trong bộ nhớ | A | P0 |
| UPL-003 | Step Drop Zone: upload ảnh step chưa có key → tự tạo key + proxyUrl | A | P0 |
| UPL-004 | Images Modal: upload ảnh → path input hiển thị proxyUrl | B | P0 |
| UPL-005 | Sau Publish: modules.json trên GitHub chứa proxyUrl đúng cho tất cả key | A+B | P0 |
| UPL-006 | **Cross-browser**: mở training site incognito → ảnh hiện (không 404) | E2E | P0 |
| UPL-007 | **New module checklist**: module mới — chạy UPL-006 trước khi báo done | E2E | P0 |
| UPL-008 | Upload Blob thất bại → toast warning, không crash, path giữ nguyên | A | P1 |
| UPL-009 | Regression: module cũ có ảnh Blob không bị xóa sau Publish module khác | Reg | P1 |
| UPL-010 | DevTools Network: POST /api/upload trả 200, không phải 401/500 | A+B | P1 |

---

## Pre-conditions

1. Admin đang chạy tại `https://huongdan.khonhapho.com/admin-x7q9.html` (production) hoặc staging.
2. `BLOB_READ_WRITE_TOKEN` đã set trong Vercel env vars.
3. Có ít nhất 1 module với ít nhất 1 step có `imgKey` đã định nghĩa trong `module.images`.
4. File ảnh test: bất kỳ screenshot app `.jpg` hoặc `.png`, dưới 5MB.
5. Có quyền mở DevTools (F12) trên browser kiểm thử.

---

## Environment

| Thứ | Giá trị |
|-----|---------|
| Browser chính | Chrome/Edge phiên bản mới nhất |
| Browser cross-check (UPL-006) | Incognito Chrome HOẶC máy/thiết bị khác chưa từng mở admin |
| Viewport | ≥ 1024px (admin là desktop tool) |
| Executor | QA Reviewer — thực hiện thủ công |
| Thời điểm thực thi | Sau mỗi lần FE thay đổi admin upload flow; bắt buộc trước release module mới |

---

## Pass Criteria (BLOCK nếu không đạt)

1. **100% P0 cases pass** (UPL-001 đến UPL-007).
2. `STATE.module.images[key]` sau upload PHẢI bắt đầu bằng `/api/img?path=` — không được là `/images/`.
3. Sau Publish, mở incognito → không có ảnh 404 trên Network tab.
4. Không có trường hợp toast "✓ đã lưu" mà thực tế ảnh không lên Blob.
5. P1 cases đạt ≥ 80%.

---

## Quy tắc bổ sung — bắt buộc khi release module mới

```
□ Upload tất cả ảnh của module mới qua admin (Luồng A hoặc B)
□ Verify toast "đã lên Blob ✓" — KHÔNG chấp nhận toast "lưu local"
□ Publish
□ Mở training site trên browser incognito hoặc máy khác
□ Click qua từng step — ảnh hiện = PASS, ảnh 404/trắng = FAIL → không release
```
