# Nhà Phố Training Site

Interactive training cho App Nhà Phố Việt Nam.

## Cấu trúc

```
training-site/
├── index.html              ← Landing (15KB)
├── training-engine.html    ← Engine render module (40KB)
├── admin-x7q9.html         ← Module editor (60KB) — KHÔNG link từ index
├── robots.txt              ← Block admin from crawlers
├── vercel.json             ← Cache + redirects + rewrites
├── data/modules.json       ← Source of truth
└── images/{module}/...     ← Background screenshots
```

## URLs sau deploy

| URL | Chức năng | Public? |
|---|---|---|
| `/` | Landing page | ✓ |
| `/training-engine?module=dang_tin` | Module Đăng tin | ✓ |
| `/training-engine?module=loc_kho` | Module Lọc kho | ✓ |
| `/training-engine?module=bo_suu_tap` | Module Bộ sưu tập | ✓ |
| `/dangtin`, `/lockho`, `/bosutap` | Short URLs (redirect) | ✓ |
| `/admin-x7q9` | **EDITOR — chỉ PM bookmark** | ⚠ Hidden |

**⚠ QUAN TRỌNG về admin URL:**

`admin-x7q9.html` là URL bí mật — không link từ index, robots.txt block crawl, không lộ trừ khi PM share. Để bảo mật tốt hơn, **PM nên đổi suffix `x7q9` thành chuỗi random của riêng mình** trước khi deploy lần đầu:

```bash
# Đổi tên file
mv admin-x7q9.html admin-<your-random-string>.html
# Update robots.txt
sed -i '' 's/admin-x7q9/admin-<your-random-string>/' robots.txt
# Re-deploy
```

Mọi 6-8 tháng nên đổi suffix lại 1 lần (rotation).

## Deploy Vercel

### Cách 1 — drag & drop
1. Tải `training-site-deploy.zip`, giải nén
2. https://vercel.com/new → kéo folder `deploy-package` vào
3. Bấm Deploy → có URL `xxx.vercel.app` sau ~30s
4. Settings → Domains → đổi tên project

### Cách 2 — Git + auto-deploy
```bash
cd deploy-package
git init && git add . && git commit -m "Initial"
git remote add origin <repo-url>
git push -u origin main
```
Connect repo với Vercel → mỗi `git push` tự deploy.

## Workflow update content (PM)

1. Mở `https://<domain>/admin-x7q9` (đã bookmark)
2. Edit → drag hotspot → fill form (live preview)
3. Bấm `⬇ Download` → file `modules.json` mới
4. Replace file trong thư mục `data/` → re-deploy

### Keyboard shortcuts admin

| Phím | Action |
|---|---|
| `Ctrl+Z` (Mac: `Cmd+Z`) | Undo (lưu 30 lần) |
| `Ctrl+Shift+Z` / `Ctrl+Y` | Redo |
| `Ctrl+S` (Mac: `Cmd+S`) | Download JSON |
| `/` | Focus search step |
| `Esc` | Clear selection / clear search / blur input |
| `Shift+Click` step | Range select (chọn nhiều bước) |

### Bulk operations

Tick checkbox trên các step → bulk bar xuất hiện:
- **⎘ Dup** — nhân bản nhiều bước cùng lúc
- **↑ ↓** — di chuyển nhóm bước
- **🗑 Xóa** — xóa nhiều bước (có confirm)

## Schema modules.json

```json
{
  "version": "1.0",
  "lastUpdated": "2026-05-04",
  "brand": { "name", "app", "hotline", "colors", "font" },
  "roles": {
    "<role_id>": { "name", "icon", "modules": ["<module_id>", ...] }
  },
  "modules": {
    "<module_id>": {
      "name", "role", "icon", "description",
      "images": { "<key>": "/images/<module>/<file>.jpg" },
      "steps": [
        {
          "id": 1,
          "name", "desc",                       // sidebar
          "title", "sub",                       // guide panel header
          "imgKey": "<key>",                    // hoặc "img" — engine support cả 2
          "scrollY": 0,                         // px trong 390 space
          "hs": { "x", "y", "w", "h" },         // hotspot 390 space
          "ttPos": "left|right|top|bottom",
          "ttTitle": "...",                     // ≤ 5 từ
          "ttText": "...",                      // ≤ 15 từ
          "tip": "...",                         // optional
          "guide": [{ "title", "body", "note" }] // note optional
        }
      ]
    }
  }
}
```

## Quy tắc hotspot

- Toạ độ x/y/w/h trong **không gian 390px** (chiều rộng phone gốc)
- Engine scale tự động về 254px screen size
- `scrollY` = số px ảnh nền dịch lên. Rule: `scrollY = max(0, hs.y - 80)` (admin có nút "Auto")

## Engine chatbot

Mỗi module có AI assistant. User nhập API key Claude lần đầu (lưu localStorage). System prompt dynamic theo module + step hiện tại. Model: `claude-sonnet-4-5`.

## Tested

| | Mobile 380 | Mobile 414 | Tablet 900 | Desktop 1280 |
|---|---|---|---|---|
| index.html | ✓ | ✓ | ✓ | ✓ |
| training-engine.html × 3 modules | ✓ | ✓ | ✓ | ✓ |
| admin-x7q9.html | — | — | ✓ | ✓ |

Admin features tested: undo/redo (push, snapshot, restore), search filter, bulk select (toggle, range), bulk delete/duplicate/move, keyboard shortcuts (Ctrl+Z/Y/S, /, Esc).
