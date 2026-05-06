# Nhà Phố Training Site v5.1

Interactive training cho App Nhà Phố Việt Nam.

## v5.1 — UX fixes

### Issue 1: Nút "Tất cả" giờ click được sau khi đổi role
- Bug cũ: Static HTML button không có click handler
- Fix: Bind handler trong `renderRoleTabs()` với `dataset.bound` flag

### Issue 2: Tooltip không che nút Trước/Tiếp
- Bug cũ: `tt-bottom` ở hotspot dưới → tooltip render dưới phone-frame, đè lên `.phone-nav`
- Fix: Smart auto-flip — nếu `bottom` overflow → swap thành `top`, vị trí relative hotspot
- Verified: 0 overlap issues across 35 steps × 3 modules

### Issue 3: Completion celebration + recommend next module
- Khi user bấm "Tiếp →" ở bước cuối:
  - Modal overlay với 🎉 + confetti animation 60 pieces
  - Stats: số bước đã học + tên module
  - Recommend next module (theo thứ tự trong modules.json) với card icon + name + meta
  - Nếu là module cuối: hiển thị "🎓 Bạn đã hoàn thành tất cả modules có sẵn!"
  - 3 buttons: "🔄 Học lại từ đầu" / "← Về trang chủ" / "Module tiếp theo →"
- Backdrop blur(6px) + dark green tint overlay

### Issue 4: Content quality fixes
- 12 tooltips có ttText > 15 từ → đã rewrite cho ngắn gọn, đúng giới hạn
  - dang_tin: steps 2, 3, 4, 6, 8, 9, 10, 11
  - loc_kho: steps 4, 6, 11
  - bo_suu_tap: step 2
- Tất cả tooltips giờ ≤ 15 từ ttText, ≤ 5 từ ttTitle
- Verified: 35 steps, 0 console errors

## Cấu trúc

```
training-site/
├── index.html              ← Landing
├── training-engine.html    ← Engine — phone +34%, completion overlay, smart tooltip
├── admin-x7q9.html         ← Editor — password gate + image upload + ZIP
├── BRAND.md
├── robots.txt
├── vercel.json
├── data/modules.json       ← Updated tooltip text
└── images/{module}/...
```

## URLs

| URL | Public? |
|---|---|
| `/` | ✓ Landing |
| `/dangtin`, `/lockho`, `/bosutap` | ✓ Short URLs |
| `/training-engine?module=<id>` | ✓ |
| `/admin-x7q9` | ⚠ Password protected |

## 🔐 Admin password

Mặc định: `nhapho2026`

```js
// Console:
await sha256("MAT_KHAU_MOI")
// Replace PASSWORD_HASH trong admin-x7q9.html → re-deploy
```

## Test results

```
✓ Issue 1: Tất cả tab clickable after role switch
✓ Issue 2: Tooltip auto-flip — 0 overlap issues across 35 steps
✓ Issue 3: Completion modal verified (dang_tin → loc_kho rec, bo_suu_tap → all done)
✓ Issue 4: Content audit — 0 tooltips over limit, 0 missing fields
✓ Console errors: 0
```

## Deploy

```bash
cd <giải nén folder>  # vào BÊN TRONG
vercel --prod
```
