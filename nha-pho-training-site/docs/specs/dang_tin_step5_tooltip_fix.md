# Spec: dang_tin Step 5 — Tooltip Text Improvement

> Sprint 1 Day 4 — pipeline test change
> Author: Tech Lead
> Date: 2026-05-20
> Scope: Content (Level 3 — Step edit)

## Requirement

PM yêu cầu cải thiện tooltip step 5 của tour `dang_tin` cho dễ đọc hơn.

## Current state

```json
{
  "id": 5,
  "ttTitle": "Địa chỉ chi tiết",
  "ttText": "Nhà trong ngõ: \"Ngõ + số + Tên đường\" VD: Ngõ 107 Trần Khát Chân"
}
```

**Vấn đề:**
- Dùng syntax `"Ngõ + số + Tên đường"` — trừu tượng, user phải tự decode
- Hai format trong 1 câu (template + example) gây rối

## Target state

```json
{
  "ttTitle": "Địa chỉ chi tiết",
  "ttText": "Nhà trong ngõ: nhập Ngõ 107 Trần Khát Chân — không nhập số nhà"
}
```

**Lý do:**
- Dùng example thật thay vì template abstract
- Thêm "không nhập số nhà" — lỗi phổ biến của user
- Từ số: 11 từ (≤ 15 từ limit ✓)

## Data model change

File: `data/modules.json`
Path: `modules.dang_tin.steps[4].ttText` (index 4 = step id 5)

Không thay đổi: `ttTitle`, `hs`, `img`, `guide`, bất kỳ field nào khác.

## Events to emit

```json
{"type": "content.updated", "actor": "frontend-engineer", "target": {"tenant": "nhapho", "module": "dang_tin", "step": 5}, "payload": {"field": "ttText", "change": "tooltip_clarity_improvement"}}
```

## Success criteria

1. `ttText` mới ≤ 15 từ
2. Tooltip hiển thị đúng trên production URL
3. Không regression các step khác của dang_tin
4. Không thay đổi bất kỳ field nào khác của step 5
