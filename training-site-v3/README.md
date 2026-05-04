# Nhà Phố Training Site

Interactive training cho App Nhà Phố Việt Nam.

## Cấu trúc

```
training-site/
├── index.html              ← Landing (16KB)
├── training-engine.html    ← Engine render module (42KB) — có spotlight hotspot
├── admin-x7q9.html         ← Module editor (50KB) — undo/search/bulk ops
├── BRAND.md                ← Brand guidelines (color tokens, typography)
├── robots.txt              ← Block admin from crawlers
├── vercel.json             ← Cache + redirects
├── data/modules.json       ← Source of truth
└── images/{module}/...     ← Background screenshots
```

## URLs sau deploy

| URL | Chức năng | Public? |
|---|---|---|
| `/` | Landing với 3 role tabs + module cards | ✓ |
| `/training-engine?module=dang_tin` | Module Đăng tin | ✓ |
| `/training-engine?module=loc_kho` | Module Lọc kho | ✓ |
| `/training-engine?module=bo_suu_tap` | Module Bộ sưu tập | ✓ |
| `/dangtin`, `/lockho`, `/bosutap` | Short URL redirects | ✓ |
| `/admin-x7q9` | **Editor — chỉ PM bookmark** | ⚠ Hidden |

## Brand identity

Đọc `BRAND.md` cho đầy đủ. Tóm tắt:

| Token | Value | Dùng cho |
|---|---|---|
| `--green` | `#00A651` | Primary brand |
| `--green-dark` | `#007A3D` | Hover, accent |
| `--green-darker` | `#005C2D` | Heading emphasis |
| `--green-tint` | `#F7FBF8` | **Page background** — KHÔNG dùng xám |
| `--gold` | `#FFD600` | Hotspot spotlight only |
| `--text` | `#0F1F14` | Body — hơi xanh đen, KHÔNG `#000` |

Font: Be Vietnam Pro 300-800.

## Features mới (v3)

### Engine
- **Spotlight hotspot:** vùng quanh hotspot bị tối (`rgba(20,20,30,0.85)`), hotspot vàng glow nổi bật
- **Brand:** topbar gradient strip, logo 2-line "Nhà Phố / Training Center"

### Admin
- **Undo/Redo:** snapshot stack 30 entries, Ctrl+Z / Ctrl+Shift+Z
- **Search step:** realtime filter, `/` focus, Esc clear
- **Bulk ops:** checkboxes + bulk bar (Dup/↑/↓/Xóa), shift+click range select
- **Keyboard:** Ctrl+S download, /, Esc

### Index
- Role tabs gradient active state
- Hero gradient với touch vàng radial
- Module cards với accent stripe trái xuất hiện khi hover

## Deploy Vercel

```bash
# Cách 1 — Git
cd training-site
git init && git add . && git commit -m "v3 rebrand"
git remote add origin <repo>
git push -u origin main
# Connect repo trên dashboard.vercel.com

# Cách 2 — CLI
npm install -g vercel
vercel --prod
```

## Workflow update content (PM)

1. Mở `https://<domain>/admin-x7q9` (đã bookmark)
2. Edit text fields, drag hotspot trên phone preview
3. `Ctrl+S` hoặc bấm `⬇ Download` → file `modules.json` mới
4. Replace `data/modules.json` → re-deploy

## Keyboard shortcuts (admin)

| Phím | Action |
|---|---|
| `Ctrl+Z` (Mac: `Cmd+Z`) | Undo (30 levels) |
| `Ctrl+Shift+Z` / `Ctrl+Y` | Redo |
| `Ctrl+S` (Mac: `Cmd+S`) | Download JSON |
| `/` | Focus search |
| `Esc` | Clear selection / clear search |
| `Shift+Click` step | Range select |

## Tested

| | Mobile 380 | Mobile 414 | Tablet 900 | Desktop 1280 |
|---|---|---|---|---|
| index.html | ✓ | ✓ | ✓ | ✓ |
| training-engine × 3 modules | ✓ | ✓ | ✓ | ✓ |
| admin-x7q9.html | — | — | ✓ | ✓ |

Spotlight tested in Chromium. Engine, admin, index hoạt động không lỗi console.
