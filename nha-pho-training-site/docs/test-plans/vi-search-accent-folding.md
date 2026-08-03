# Test Plan: Vietnamese Accent-Folding Search

## Meta
- Feature ID: vi-search-accent-folding
- Sprint: 6, Item 1
- Created: 2026-05-22
- Created by: qa-reviewer
- Gate: 1 (written BEFORE FE codes any line)

## Problem statement
`matchSearch()` uses `String.prototype.includes()` after `toLowerCase()`. This is
byte-exact comparison and therefore `"dang tin"` does not match `"Đăng tin BĐS"`.
Vietnamese users routinely search without diacritics on mobile keyboards. The fix
adds `stripDiacritics()` using Unicode NFD normalization so both sides of the
comparison are reduced to ASCII before the `includes()` call.

## Scope

### In scope
- `stripDiacritics(s)` pure function: correctness of NFD + diacritic-strip logic
- `matchSearch(m, query)`: accent-folded matching against name, description, role
- Backward compatibility: queries with full diacritics still match
- Case insensitivity preserved post-strip
- `highlight()` unchanged — continues to highlight using the original (un-stripped) query
- Regression: list view, grid view, role filter, empty state, XSS safety, debounce
- Edge cases: empty query, whitespace-only query, very long query, mixed diacritics,
  numeric query, single character, partial word

### Out of scope
- Visual design of the search input (not changed)
- Debounce timing (not changed — covered by existing TC-S-002)
- Backend / API changes (none)
- CSS changes (none)
- Mobile touch targets (separate sprint item)
- Accessibility audit (separate sprint item)
- Performance of NFD normalization at scale (negligible for <200 modules)
- Highlight of the accent-stripped term (spec explicitly says highlight uses query
  as-is; accent-folded highlight is a future enhancement)

## Test types
- [x] Functional: stripDiacritics correctness + matchSearch with accent folding
- [x] Schema validation: matchSearch field coverage (name, description, role)
- [ ] Visual regression: no UI change, no baseline needed
- [ ] Accessibility: out of scope this cycle
- [ ] Performance: negligible impact, out of scope
- [x] Security: XSS in query still escaped; regex-injection in highlight() still safe
- [ ] Mobile: deferred
- [ ] Chatbot: not affected

## Test matrix

| Category          | Cases       | Min severity |
|-------------------|-------------|--------------|
| Functional core   | TC-VS-001 – TC-VS-008 | critical/high |
| Edge cases        | TC-VS-009 – TC-VS-011 | high/normal  |
| Regression        | TC-VS-012 – TC-VS-014 | critical/high |
| Security          | TC-VS-015 – TC-VS-016 | critical/high |

Total: 16 cases. IDs TC-VS-001 through TC-VS-016.

## Pass criteria (BLOCK if not met)
- 100% of critical severity test cases pass
- 0 high or critical severity defects open at gate close
- No uncaught JS exceptions during any search flow
- `highlight()` function is NOT modified (verified by diff)
- `escapeHtml()` function is NOT modified (verified by diff)
- Regex special characters in query do not throw (TC-VS-016)

## Verification method
- Manual browser test in Chrome (latest) on Windows
- Code review of the diff: only `matchSearch()` + new `stripDiacritics()` added,
  no other functions touched
- No build tool required — open index.html directly via local server

## Out of scope
Visual regression, accessibility, performance, mobile breakpoint, chatbot eval.
Backend, CSS, and all files other than `index.html`.
