# Test Plan: dang_tin Step 5 — Tooltip Text Fix

**Feature:** `dang_tin` tour, Step 5 (id=5), field `ttText`
**Spec:** docs/specs/dang_tin_step5_tooltip_fix.md
**Gate:** 2 — Implementation Review
**Date:** 2026-05-20
**Author:** qa-reviewer

---

## Scope

In scope:
- Validate `ttText` of step id=5 in `dang_tin` matches the new value exactly
- Verify word count of new value is within the 15-word limit
- Verify no other field of step 5 was changed (ttTitle, hs, img, scrollY, ttPos, guide, tip)
- Verify no other step in `dang_tin` was changed
- Verify tooltip renders correctly in the training engine UI

Out of scope:
- Changes to other tours (loc_kho, bo_suu_tap) — not touched by this change
- Backend/API behaviour — this is a data-only change
- Chatbot KB evaluation — ttText change is cosmetic, no KB content affected

---

## Test types

- [x] Data validation: field value, word count, unchanged fields
- [x] Regression: all other dang_tin steps unchanged
- [x] Render: tooltip visible, text correct, no overlap with phone frame
- [ ] Accessibility: not in scope for single-field text edit
- [ ] Performance: not in scope

---

## Pass criteria (BLOCK if not met)

1. `ttText` of step 5 equals exactly: `Nhà trong ngõ: nhập Ngõ 107 Trần Khát Chân — không nhập số nhà`
2. Word count of new `ttText` is <= 15 words
3. Zero other fields of step 5 differ from pre-change state
4. Zero other steps in `dang_tin` differ from pre-change state
5. Tooltip renders and is readable in desktop and mobile breakpoints
6. 100% critical test cases pass
