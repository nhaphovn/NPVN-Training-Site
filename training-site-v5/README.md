# Nhà Phố Training Site v5

Interactive training cho App Nhà Phố Việt Nam. UI/UX overhaul.

## Cấu trúc

```
training-site/
├── index.html              ← Landing
├── training-engine.html    ← Engine — phone +34%, chat panel redesigned
├── admin-x7q9.html         ← Editor — grouped topbar, polished modal, image upload + ZIP
├── BRAND.md                ← Brand guidelines
├── robots.txt
├── vercel.json
├── data/modules.json
└── images/{module}/...
```

## URLs

| URL | Public? |
|---|---|
| `/` | ✓ Landing — clean, no Tài liệu section |
| `/dangtin`, `/lockho`, `/bosutap` | ✓ Short URLs |
| `/training-engine?module=<id>` | ✓ |
| `/admin-x7q9` | ⚠ Password protected |

## ✨ v5 — UI/UX overhaul

### Engine

**Chat panel redesigned hoàn toàn:**
- Header card: icon 💬 gradient + status bar 2 dòng + online indicator dot xanh
- Empty state: 🤖 trong khung gradient + headline + 3 features check + CTA xanh gradient
- Has-key state: hint bar "● API key đã lưu" + suggestion chips
- Has-msg state: message bubbles có gradient + animation slide-in + scrollbar custom
- Send button vuông 40×40 với icon ↑

**Guide card polish:**
- Note `.note` có icon ⚠️ ::before + bg vàng nhạt + border-left orange
- Tip box "💡 LƯU Ý" với label uppercase letterspacing

### Admin

**Topbar grouped:**
- 12 buttons rời rạc → 5 groups có visual divider 1px×20px
- Brand + History + Module + File + Export + Account
- Buttons compact 32px, icon-btn 32×32 cho ↶ ↷ 🚪
- Module dropdown max-width 180px

**Form panel:**
- First h3 "📋 BƯỚC N" với border-bottom + step count badge phải
- Section h3 UPPERCASE green-dark + border-top divider
- Better spacing 18px vertical, input padding 8/11px

**Modal polish:**
- Header: gradient soft tint + emoji + border-bottom
- Body: padding 20/22px riêng (modal-body wrapper)
- Actions footer: separator + bg green-tint
- Backdrop: `rgba(15,31,20,0.55)` + blur(4px)
- Btn-danger margin-right auto đẩy giữa

**Step row + sidebar:**
- "CÁC BƯỚC" header có vertical stripe gradient xanh trái
- Step row hover translateX(2px) animation
- Active state inset shadow 3px stripe + bold name green-darker
- Step number circle border + active green
- Add-step button dashed → solid khi hover

**Preview:**
- Mode toggle "Hotspot/Preview" pill design green-soft
- Preview info trong pill green-tint mono font
- Nav buttons hover green-light bg

### Index

- Removed "🛠 Tài liệu" section (Xem cấu trúc data + Reload)
- Cleaner footer-only landing

## 🔐 Admin password

**Mặc định:** `nhapho2026` (đổi ngay sau deploy)

```js
// Console:
await sha256("MAT_KHAU_MOI")
// Copy hash → replace PASSWORD_HASH trong admin-x7q9.html → re-deploy
```

## Features đã có

- Image upload trực tiếp (resize 390 + JPG 0.85, IndexedDB)
- Export ZIP đầy đủ (📦 ZIP)
- Undo/Redo 30 levels (Ctrl+Z / Ctrl+Shift+Z)
- Search step (`/`)
- Bulk operations (checkboxes + bulk bar)
- Drag-drop hotspot trên phone preview
- Live tooltip auto-flip mobile

## Keyboard shortcuts (admin)

| Phím | Action |
|---|---|
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` / `Ctrl+Y` | Redo |
| `Ctrl+S` | Download JSON |
| `/` | Focus search |
| `Esc` | Clear selection / search |
| `Shift+Click` step | Range select |

## Brand identity

Đọc `BRAND.md`. Color tokens lock:
- `--green: #00A651`
- `--green-dark: #007A3D`
- `--green-darker: #005C2D`
- `--green-tint: #F7FBF8` (page bg)
- `--text: #0F1F14`
- Font: Be Vietnam Pro 300-800

## Deploy

Đảm bảo upload **content** (không phải folder wrapper):
```bash
cd <folder vừa giải nén>  # phải vào BÊN TRONG
vercel --prod
```
