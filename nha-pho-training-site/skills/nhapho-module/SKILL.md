---
name: nhapho-module
description: Complete guide for creating new training modules in Nhà Phố Training Site. Use whenever building or extending modules in data/modules.json.
---

# Nhà Phố Module Creation Skill

This skill encodes hard-earned conventions for creating training modules.

## File Layout

```
data/modules.json         ← single source of truth
images/{module}/          ← screenshots per module
   {module}_b01_home.jpg
   {module}_b02_form.jpg
```

## Hotspot Coordinate System

- **Design space**: 390px wide (iPhone width)
- **Display space**: 254px wide on desktop (phone screen rendering)
- **Scale factor**: 254/390 = 0.6513

Coords stored in JSON are in **390px space**:
```json
"hs": { "x": 200, "y": 250, "w": 60, "h": 80 }
```

Engine auto-scales at runtime.

## Auto-Scroll Calculation

When hotspot is below the fold:
```
scrollY = max(0, hs.y - 80)
```
This places hotspot ~80px below the top of visible screen.

## Tooltip Positioning

`ttPos` can be: `right`, `left`, `top`, `bottom`
- Desktop: `right`/`left` preferred (alongside phone)
- Mobile: auto-flips to `bottom` (engine handles this)

## Word Count Rules (HARD LIMITS)

| Field | Max Words |
|-------|-----------|
| `ttTitle` | 5 |
| `ttText` | 15 |

Vietnamese word counting: split by whitespace.
- "Chuyên viên" = 2 words
- "Khách hàng đã mua" = 4 words

## Required Fields per Step

```json
{
  "id": <int>,              // 1-based sequential
  "name": "<string>",        // ≤6 words, used in sidebar
  "title": "<string>",       // full step heading
  "sub": "<string>",         // 1-line description
  "tip": "<string>",         // optional, in guide panel
  "img": "<key>",            // matches modules.{id}.images keys
  "scrollY": <int>,          // auto-compute from hs.y - 80
  "hs": { "x":, "y":, "w":, "h": },
  "ttPos": "right|left|top|bottom",
  "ttTitle": "<≤5 từ>",
  "ttText":  "<≤15 từ>",
  "guide": [
    { "title": "...", "body": "...", "note": "..." }
  ]
}
```

## Guide Items Convention

Each step needs ≥ 2 guide items, typically:
1. **Action explanation** — "Bước này làm gì"
2. **Important note** — "Lưu ý quan trọng"
3. **(Optional)** — Edge cases, tips

## TODO Pattern

When information is missing from PM, NEVER invent. Use:
```json
"ttTitle": "TODO: tooltip title",
"guide": [
  { "title": "TODO: action explanation", "body": "TODO: body text" }
]
```

This lets validator catch missing content before deploy.

## Image Key Conventions

Within a module, use short keys:
- `home`, `form`, `list`, `detail`
- Or `b01_home`, `b02_form` for explicit numbering

Both work — pick one style per module.

## Common Pitfalls

1. **Forgetting scrollY** — engine clamps to 0, but hotspot won't be visible
2. **Wrong coordinate space** — always use 390px design space
3. **Too-long ttText** — validator blocks deploy
4. **Same-text guides** — guide should add info beyond tooltip
5. **Missing image** — `img` key must exist in `images` dict

## Validation Sequence

After creating module:
```
1. Run content-validator (or python eval/validate.py)
2. Fix all ERRORS
3. Auto-fix WARNINGS (scrollY drift)
4. Re-validate
5. /ship
```
