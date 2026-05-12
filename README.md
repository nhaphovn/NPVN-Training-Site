# Nhà Phố Training Site v7

Interactive training cho App Nhà Phố Việt Nam — index redesign + video upload support.

## ✨ v7 — Mới nhất

### Index UI redesign (theo mockup PM)
- Background: WHITE thay vì gradient xanh
- Hero: logo Nhà Phố lớn (56×56) + "Nhà Phố Việt Nam / TRANNING CENTER" text
- Headline DARK trên white bg
- Module icons: line green từ project (`dang_tin.png`, `kho_tai_nguyen.png`, `bo_suu_tap.png`)
- Card design: white bg, icon → title → role → desc → divider → "11 bước" pill + "Học ngay→"
- Role tabs: pill design, "Tất cả" active xanh sáng `#85C441` thay vì `#007B48`

### 🎬 Video upload support (admin + engine)

**Schema** — step có thể có:
```json
{
  "mediaType": "video",
  "imgKey": "intro_video",       // also stored in module.images map
  "videoAutoNext": true          // auto next when video ends
}
```

**Admin (`admin-x7q9`):**
- Step form: "MEDIA TYPE" pill toggle (🖼 Ảnh tĩnh / 🎬 Video)
- Switch sang Video → Hotspot section ẩn, "Auto next when ended" checkbox hiện
- Module modal upload accept image/* + video/* (drag-drop hoặc click thumb)
- Video saved to IndexedDB store `np_admin_media` (separate from images store)
- Max video size: 100MB warning
- Video file extensions auto-detected: mp4 / webm / mov / m4v
- Path tự động `/videos/{module}/{key}.{ext}`
- Export ZIP includes both images AND videos

**Engine (`training-engine`):**
- Khi `step.mediaType === 'video'`:
  - Phone screen render `<video>` thay vì `<img>`
  - Custom play/pause overlay button (centered, blur backdrop)
  - Progress bar bottom với time format `0:00 / 0:00`
  - Hotspot + spotlight ẩn
  - User click bất cứ đâu trên video → toggle play/pause
  - Auto-fade controls khi đang play (1.5s)
- Video ended → `videoAutoNext !== false` thì gọi `nextStep()` sau 600ms
- Loads video blob từ IndexedDB nếu có (admin uploaded), else từ path

### v6 features kept
- SF Pro Display fonts (288KB subset Latin+Vietnamese)
- Logo Nhà Phố thật replace "N"
- Brand colors `#007B48` / `#006941` / `#004D2E` / `#85C441`

## Cấu trúc

```
training-site/
├── index.html              ← Landing redesigned
├── training-engine.html    ← Engine với video support
├── admin-x7q9.html         ← Editor với video upload
├── BRAND.md
├── README.md
├── robots.txt
├── vercel.json             ← +videos/ cache rule
├── data/
│   └── modules.json
├── images/                 ← Image assets
├── videos/                 ← (NEW) Video files when uploaded
├── fonts/                  ← SF Pro Display
└── assets/
    ├── logo.png
    ├── logo-small.png
    └── icons/              ← (NEW) 11 module icons
        ├── dang_tin.png
        ├── kho_tai_nguyen.png
        ├── bo_suu_tap.png
        └── ... (8 more for future modules)
```

## URLs

| URL | Public? |
|---|---|
| `/` | ✓ Landing redesigned |
| `/dangtin`, `/lockho`, `/bosutap` | ✓ Short URLs |
| `/training-engine?module=<id>` | ✓ |
| `/admin-x7q9` | ⚠ Password protected |

## Verified test results

```
✓ Engine: phone-bg + phone-video + video-controls elements
✓ Engine image mode (default): bg visible, video hidden
✓ Engine video mode: bg hidden, video + controls visible, hotspot hidden
✓ Admin form: media type radio rendered
✓ Admin form: video toggle hides hotspot section, shows auto-next checkbox
✓ Index redesign matches mockup
✓ Console errors: 0
```

## 🔐 Admin password

Mặc định: `nhapho2026`

```js
await sha256("MAT_KHAU_MOI")
// Replace PASSWORD_HASH trong admin-x7q9.html
```

## Deploy

```bash
unzip training-site-v7.zip
cd <giải nén folder>  # vào BÊN TRONG
vercel --prod
```

## Update log

- **2026-05-07 — v7:** Index redesign + video upload support, custom video controls overlay, auto-next on ended, module icons từ project
- **2026-05-06 — v6:** SF Pro Display + Nhà Phố logo + brand palette migration
- **2026-05-05 — v5.1:** Tooltip auto-flip + completion celebration + content audit
- **2026-05-04 — v5:** Chat panel redesign + admin topbar grouped
- **2026-05-03 — v4:** Admin password gate + image upload + ZIP
- **2026-05-02 — v3:** Phone +34% + brand polish
