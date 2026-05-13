# Nhà Phố Training Site — Brand Guidelines v6

Lock these tokens. Khi build module mới hoặc page mới, dùng đúng các CSS variables này — không tự đổi giá trị.

## Color tokens (v6 — match Nhà Phố Việt Nam logo)

```css
:root {
  /* Brand greens — Nhà Phố Việt Nam logo palette */
  --green: #007B48;            /* Primary brand */
  --green-dark: #006941;       /* Hover, accent secondary */
  --green-darker: #004D2E;     /* Deep emphasis (titles, footer links) */
  --green-bright: #85C441;     /* Highlight / accent (logo lighter green) */
  --green-soft: #E0EEE3;       /* Soft fills (badges, progress pills, active row) */
  --green-light: #EAF4EC;      /* Lighter fills (hover row, tip box) */
  --green-tint: #F4FAF5;       /* Page background — KHÔNG dùng xám */

  /* Accent */
  --gold: #FFD600;             /* Hotspot spotlight only (legacy) */

  /* Status */
  --warn: #f59e0b;
  --warn-bg: #FFF7E0;
  --red: #d33;
  --orange: #f59e0b;

  /* Neutrals */
  --text: #0F1F14;             /* Body text — hơi xanh đen */
  --text-2: #4A5A4F;           /* Secondary */
  --text-3: #88958C;           /* Tertiary, captions */
  --border: #DCE7DE;           /* Default border */
  --border-strong: #B0C2B4;    /* Border emphasis */

  /* Shadows — green-tinted, KHÔNG pure black */
  --shadow-sm: 0 2px 8px rgba(0, 105, 65, .06);
  --shadow-md: 0 4px 16px rgba(0, 105, 65, .10);
  --shadow-lg: 0 12px 40px rgba(0, 105, 65, .15);
}
```

## Typography (v6 — SF Pro Display)

**Font:** SF Pro Display (Apple system font, hosted local trong `fonts/`)

**Weights available:**
- 300 Light
- 400 Regular
- 500 Medium
- 600 Semibold
- 700 Bold
- 800 Heavy

**Total payload:** ~288KB (6 WOFF2 files, Latin + Vietnamese subset)

```css
@font-face {
  font-family: 'SF Pro Display';
  src: url('fonts/SFProDisplay-Regular.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
/* ... etc cho mỗi weight ... */

body {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

**Heading hierarchy:**
- h1 (page title): 28-44px clamp, font-weight 800, letter-spacing -0.02em
- h2 (section): 17-19px, font-weight 700, color `--green-darker`
- h3 (label): 11-14px UPPERCASE letter-spacing .05-.08em, font-weight 700, color `--green-dark`
- h4 (card sub): 14px, font-weight 700

**Body:** 15px / line-height 1.5

## Logo

**Source:** `assets/logo.png` (212×201) → `assets/logo-small.png` (128×121, transparent bg)

**Usage:**
```html
<div class="logo-card">
  <img src="assets/logo-small.png" alt="Nhà Phố">
</div>
```

```css
.logo-card {
  background: var(--white); /* logo có màu xanh sẵn nên cần nền trắng */
  border-radius: 9px;
  display: grid; place-items: center;
  padding: 4px;
  box-shadow: 0 2px 6px rgba(0, 105, 65, .15);
  border: 1px solid var(--green-soft);
}
.logo-card img {
  width: 100%; height: 100%; object-fit: contain;
}
```

**Sizes by context:**
- Index hero: 44×44 (padding 5px)
- Engine topbar: 36×36 (padding 4px)
- Admin topbar: 36×36 (padding 4px)
- Admin login screen: 64×64 (padding 8px, prominent)

## Buttons

**Primary (gradient):**
```css
.btn-primary {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 105, 65, .25);
}
.btn-primary:hover {
  background: linear-gradient(135deg, var(--green-dark) 0%, var(--green-darker) 100%);
  transform: translateY(-1px);
}
```

**Ghost:**
```css
.btn-ghost {
  background: var(--white);
  border: 1.5px solid var(--border-strong);
  color: var(--text);
}
.btn-ghost:hover {
  border-color: var(--green); color: var(--green-dark);
  background: var(--green-light);
}
```

## Component patterns

### Brand strip (ribbon dưới topbar)
```css
header::after {
  content: ''; position: absolute; bottom: -3px; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--green) 0%, var(--green-dark) 50%, var(--green) 100%);
  opacity: .85;
}
```

### Card với accent stripe trái
```css
.card { border: 1px solid var(--border); position: relative; }
.card::before {
  content: ''; position: absolute; left: 0; top: 20px; bottom: 20px; width: 3px;
  background: linear-gradient(180deg, var(--green) 0%, var(--green-dark) 100%);
  border-radius: 0 3px 3px 0;
}
```

### Pill / Badge
```css
.pill {
  background: var(--green-soft); color: var(--green-darker);
  padding: 4px 12px; border-radius: 20px; font-weight: 700;
  border: 1px solid rgba(0, 105, 65, .12);
}
```

### Hotspot spotlight (chỉ engine)

Trong `training-engine.html`, hotspot dùng:
- 4 dim rectangles xung quanh: `rgba(20, 20, 30, 0.55)` (sáng vừa)
- Hotspot border: `2.5px solid var(--green)` (xanh brand thay vì vàng)
- Glow: `0 0 16px 2px rgba(0, 123, 72, 0.55)`
- Pulse 1.8s — animate box-shadow only (no transform)

## Tone & UX writing

- **Tiếng Việt, ngắn gọn, động từ mệnh lệnh**
- **CẤM:** "Xin vui lòng", "Hãy thử", "Lưu ý rằng"
- **Dùng:** "Bấm", "Mở", "Chọn", "Kéo", "Lưu", "Xóa"
- Tooltip title ≤ 5 từ, tooltip text ≤ 15 từ
- Card description ≤ 2 dòng (line-clamp 2)
- Step name sidebar ≤ 30 ký tự (truncate sau)

## Layout

```
Desktop ≥1024px: 3-col grid 280px / 1fr / 380px
Tablet 768-1023px: 2-col, hide sidebar (mobile pills thay)
Mobile <768px: 1-col stack, FAB chat, fixed bottom nav
```

Page max-width: 1400px (engine/admin), 1100px (index).

## DO / DON'T

| ✅ DO | ❌ DON'T |
|---|---|
| `rgba(0, 105, 65, .06)` shadow tinted xanh | `rgba(0,0,0,.06)` pure black |
| `#0F1F14` cho body text | `#1a1a1a` hay `#000` |
| `var(--green-tint)` cho page bg | `#f5f7fa` xám trung tính |
| Gradient `135deg` cho logo + primary btn | Solid green flat |
| `letter-spacing: -0.01em` cho heading lớn | Default tracking |
| Logo ảnh trên nền trắng (card) | Logo trên nền gradient (mất rõ ràng) |
| SF Pro Display weight 600/700 cho heading | Weight 400 cho heading lớn |

## Asset rules

### Module screenshots
- Format: `.jpg` (≤80KB sau optimize)
- Naming: `images/{module}/{key}.jpg`
- Coords: 390px space, scale 0.8718 → 340px screen

### Logo
- Source: `assets/logo.png` (full size, transparent bg)
- Render: `assets/logo-small.png` (128×121, dùng inline)

### Fonts
- Format: WOFF2 only
- Subset: Latin + Vietnamese (U+0020-007E, U+00A0-024F, U+1E00-1EFF, U+2000-206F)
- Source: SF Pro Display OTF (Apple license: free for development & UI use trên macOS/iOS apps; for web we license via subset hosting)

---

**Update log**

- 2026-05-04: v1 — initial brand from training-engine v3 + index v2 + admin v3
- 2026-05-06: v6 — switch to SF Pro Display + Nhà Phố Việt Nam logo palette (#007B48, #006941, #004D2E, #85C441 accent), real logo image
