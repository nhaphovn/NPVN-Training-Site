# Nhà Phố Training Site — Brand Guidelines

Lock these tokens. Khi build module mới hoặc page mới, dùng đúng các CSS variables này — không được tự đổi giá trị.

## Color tokens

```css
:root {
  /* Brand greens — primary palette */
  --green: #00A651;        /* Primary brand */
  --green-dark: #007A3D;   /* Hover, accent secondary */
  --green-darker: #005C2D; /* Deep emphasis (titles, footer links) */
  --green-soft: #E5EDE5;   /* Soft fills (badges, progress pills, active row) */
  --green-light: #F0F7F0;  /* Lighter fills (hover row, tip box) */
  --green-tint: #F7FBF8;   /* Page background — KHÔNG dùng xám trung tính */

  /* Accent */
  --gold: #FFD600;         /* Hotspot spotlight ONLY */
  --gold-soft: #FFF4B8;

  /* Status */
  --warn: #f59e0b;
  --warn-bg: #FFF7E0;
  --red: #d33;             /* Destructive only */
  --orange: #f59e0b;
  --blue: #2563eb;

  /* Neutrals — hơi xanh đen, tránh pure black */
  --text: #0F1F14;         /* Body text, KHÔNG dùng #000 hay #1a1a1a */
  --text-2: #4A5A4F;       /* Secondary text */
  --text-3: #88958C;       /* Tertiary, captions */
  --border: #E1E8E2;       /* Default border */
  --border-strong: #B5C4B8;/* Border emphasis (button outlines) */

  /* Shadows — warm green-tinted, KHÔNG pure black */
  --shadow-sm: 0 2px 8px rgba(0, 90, 45, .06);
  --shadow-md: 0 4px 16px rgba(0, 90, 45, .10);
  --shadow-lg: 0 12px 40px rgba(0, 90, 45, .15);
}
```

## Typography

- **Font:** `Be Vietnam Pro` (300, 400, 500, 600, 700, 800)
- **Body:** 15px / line-height 1.55
- **Heading hierarchy:**
  - h1 (page title): 28-44px clamp, font-weight 800, letter-spacing -0.02em
  - h2 (section): 17-19px, font-weight 700, color `--green-darker`
  - h3 (label): 12-14px UPPERCASE letter-spacing .05-.08em font-weight 700, color `--green-dark` or `--text-3`
  - h4 (card sub): 14px, font-weight 700

## Logo

```html
<div class="logo">
  <span class="logo-dot">N</span>
  <span class="logo-text">
    <strong>Nhà Phố</strong>
    <small>Training Center</small>
  </span>
</div>
```

```css
.logo-dot {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  border-radius: 9px;
  color: var(--white); font-weight: 800; font-size: 15px;
  display: grid; place-items: center;
  box-shadow: 0 2px 6px rgba(0, 122, 61, .3);
}
```

## Buttons

**Primary (gradient):**
```css
.btn-primary {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 122, 61, .25);
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
  border: 1px solid rgba(0, 122, 61, .12);
}
```

### Hotspot spotlight (chỉ engine)

Trong `training-engine.html`, hotspot dùng:
- 4 dim rectangles xung quanh: `rgba(20, 20, 30, 0.85)` (KHÔNG dùng `rgba(0,0,0,X)` — Chromium bug)
- Hotspot border: `3px solid #FFD600`
- Glow: `0 0 24px 4px rgba(255, 214, 0, 0.95)`
- Pulse 1.6s với scale animation off (chỉ animate box-shadow để spotlight không jitter)

## Tone & UX writing

- **Tiếng Việt, ngắn gọn, động từ mệnh lệnh**
- **CẤM:** "Xin vui lòng", "Hãy thử", "Lưu ý rằng", "Vui lòng kích hoạt"
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

Page max-width: 1400px (engine), 1100px (index), 1400px (admin).

## DO / DON'T

| ✅ DO | ❌ DON'T |
|---|---|
| `rgba(0, 90, 45, .06)` shadow tinted xanh | `rgba(0,0,0,.06)` pure black |
| `#0F1F14` cho body text | `#1a1a1a` hay `#000` |
| `var(--green-tint)` cho page bg | `#f5f7fa` xám trung tính |
| Gradient `135deg` cho logo + primary btn | Solid green flat (kém depth) |
| `letter-spacing: -0.01em` cho heading lớn | Default tracking (kém polish) |
| `rgba(20, 20, 30, 0.85)` cho dim overlay | `rgba(0, 0, 0, X)` (Chromium quirk) |

## Asset rules (modules)

- Background images: 1170×2532px (real iPhone screenshot) hoặc max 390 wide scaled
- File format: `.jpg` (≤80KB sau optimize)
- Naming: `[module]/{key}.jpg` — key trong modules.json `images` map
- Hotspot coords: 390px space, scale 0.6513 → 254px screen

---

**Update log**

- 2026-05-04: v1 — extracted from training-engine.html v3 + index v2 + admin v3 rebrand
- Lock: bất kỳ thay đổi color/font/shadow trong tương lai phải update file này TRƯỚC, push qua review, rồi mới apply vào HTML files
