# Test Plan: Homepage Search + List/Grid View Toggle

## Meta
- Feature ID: homepage_search_list_toggle
- Sprint: 5 (post-ship audit)
- Created: 2026-05-22
- Created by: qa-reviewer
- Gate: 2 (Implementation Review — code already in production)

## Risk note
Both features shipped to production without a QA gate. This test plan is written
retroactively. Tests are authored from the spec, not from reading the
implementation first, to avoid confirmation bias where possible.

## Scope

### In scope
- Toolbar visibility lifecycle (hidden on load, shown after data load)
- Search input debounce timing (200ms)
- Search filter correctness: name, description, role fields
- Search match highlight using `<mark>` tag
- Empty state message when search yields zero results
- Empty state message when a role tab yields zero modules
- Grid/List toggle button state (active class management)
- Grid view renders `.modules-grid` with `.module-card` children
- List view renders `.modules-list` with `.module-list-item` children
- Role tab filter combined with search filter
- Deep-link `?role=` parameter still works with toolbar present
- XSS safety: search query not injected unsanitised into DOM
- Regex special characters in search query do not crash the page

### Out of scope
- Visual pixel comparison (no Figma reference provided for this feature)
- Performance measurement (fetch time depends on network)
- Accessibility audit (separate sprint item)
- Mobile touch target sizes (separate sprint item)

## Test types
- [x] Functional: does it do what spec says
- [x] Schema validation: data integrity (highlight function, matchSearch logic)
- [ ] Visual regression: no baseline provided
- [ ] Accessibility: out of scope this cycle
- [ ] Performance: out of scope this cycle
- [x] Security: XSS + regex-injection boundary
- [ ] Chatbot: not affected
- [ ] Mobile: deferred

## Pass criteria (BLOCK if not met)
- 100% of critical test cases pass
- 0 high or critical severity defects open
- No uncaught JS exceptions during normal search flows
- Regex special characters in query do not throw

## Out of scope
Visual regression, accessibility, performance, mobile breakpoint, chatbot eval.
