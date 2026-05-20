# Spec: Admin — Nút "Publish" (draft → live)

> Sprint 3 · Author: Tech Lead · Date: 2026-05-20
> Scope: System Module — admin-cms (Level 1)
> Size: Small feature — lightweight pipeline

---

## Requirement

PM cần 1 cách để đổi status module từ `draft` → `live` trong admin mà không cần sửa JSON tay. Hiện tại phải tìm field `"status"` trong JSON editor và gõ `"live"` — dễ nhầm, không trực quan.

---

## UX Flow

```
1. PM đang xem module có status="draft" trong admin
2. Thấy badge "DRAFT" màu cam + nút [Publish] bên cạnh tên module
3. Click [Publish]
4. Confirm dialog: "Publish «Tên module»? Status sẽ đổi từ draft → live và tự lưu lên site."
5. Click OK → status = 'live' → auto-save (gọi saveToGitHub) → badge đổi thành "LIVE" màu xanh
6. Click Cancel → không thay đổi gì
```

---

## UI Placement

Nút đặt trong **module meta bar** — dòng hiển thị tên module + status, nằm ngay trên danh sách steps.

```
┌──────────────────────────────────────────────────────┐
│ [◀ Back]  kho_ca_nhan — Kho cá nhân   [DRAFT] [Publish ▶] │
└──────────────────────────────────────────────────────┘
```

Khi đã `live`:

```
┌──────────────────────────────────────────────────────┐
│ [◀ Back]  kho_ca_nhan — Kho cá nhân          [● LIVE]      │
└──────────────────────────────────────────────────────┘
```

---

## Button States

| Module status | Badge | Button |
|---------------|-------|--------|
| `"draft"` | `DRAFT` (orange) | `[Publish ▶]` (green, enabled) |
| `"live"` | `● LIVE` (green) | không hiện nút Publish |
| `"review"` (future) | `REVIEW` (blue) | `[Publish ▶]` (enabled) |

---

## Data Change

```js
// Trước
STATE.data.modules[moduleId].status = 'draft'

// Sau click OK
STATE.data.modules[moduleId].status = 'live'
// → gọi saveToGitHub() ngay (không chỉ set dirty)
```

`saveToGitHub()` là function đã có trong admin-patch.js — reuse, không viết lại.

---

## Implementation Target

File: `admin-patch.js`

Thêm vào hàm `renderModuleMeta(moduleId)` (hoặc inject vào đúng chỗ trong DOM sau khi module load):
- Badge element với class `status-badge status-{status}`
- Nút `btn-publish` ẩn nếu status không phải `draft`/`review`
- Click handler: `window.confirm(...)` → update state → call `saveToGitHub()`

CSS tokens (reuse brand vars từ CLAUDE.md §7):
```css
.status-badge.status-draft  { background: #F59E0B; color: #fff; }
.status-badge.status-live   { background: #00A651; color: #fff; }
.status-badge.status-review { background: #3B82F6; color: #fff; }
#btn-publish { background: #00A651; color: #fff; border: none; ... }
```

---

## Events to Emit

```json
{"type": "content.tour_published", "actor": "pm", "target": {"tenant":"nhapho","module":"{moduleId}"}, "payload": {"status_before":"draft","status_after":"live"}}
```

Append vào `logs/events.jsonl` — hiện tại chưa có endpoint để emit từ browser, nên **skip** emit trong sprint này. PM báo Tech Lead sau khi publish, Tech Lead append thủ công.

---

## Out of Scope

- Rollback live → draft (có thể thêm Sprint 4)
- Approval workflow / review state (Sprint 4)
- Notification khi publish (Sprint 4)

---

## Success Criteria

1. Badge hiển thị đúng status (draft/live) khi load module trong admin
2. Nút Publish chỉ hiện khi status = `draft`
3. Click OK → confirm → status đổi thành `live` → saveToGitHub() gọi đúng
4. Sau save thành công: badge cập nhật → nút Publish biến mất
5. Click Cancel → state không thay đổi
6. Không regression: các feature khác của admin (edit step, lưu lên site, upload panel) vẫn hoạt động
