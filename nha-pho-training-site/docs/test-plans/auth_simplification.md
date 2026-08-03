# Test Plan: Auth Simplification

## Meta
- Feature ID: auth_simplification
- Sprint: 5 (post-ship audit)
- Created: 2026-05-22
- Created by: qa-reviewer
- Gate: 2 (Implementation Review — code already in production)

## Risk note
Shipped to production without QA gate. This test plan is authored retroactively
from the spec to test what should be true, not just what was built.

## Scope

### In scope
- mock-idp.js: Login page renders one button, not three persona pickers
- mock-idp.js: Clicking that button auto-logs in with persona `test`
- mock-idp.js: `test` persona resolves to a real PERSONAS entry with valid fields
- mock-idp.js: Login action triggers authorize flow with persona=test in query
- auth-widget.js: Logged-in state shows only name + logout link (no role badge)
- auth-widget.js: Logged-out state shows login button linking to `/api/auth/login`
- auth-widget.js: Login redirect target is `/api/auth/login`, not `/login.html`
- auth-widget.js: graceful degradation when /api/auth/me is unreachable

### Out of scope
- Full OAuth2/PKCE flow end-to-end (requires live Vercel environment)
- Session cookie security audit (devsecops scope)
- Multiple-persona flows (no longer exposed in UI)
- Token expiry and refresh

## Test types
- [x] Functional: login page renders correctly, widget renders correctly
- [x] Schema validation: PERSONAS.test has all required fields
- [ ] Visual regression: no Figma reference for auth simplification
- [ ] Accessibility: deferred
- [ ] Performance: not applicable
- [x] Security: login href destination correct (not /login.html)
- [ ] Mobile: deferred

## Pass criteria (BLOCK if not met)
- 100% of critical test cases pass
- Login button href is `/api/auth/login`, not `/login.html`
- No role badge rendered in logged-in state
- `PERSONAS.test` contains all 5 required fields

## Out of scope
Full PKCE round-trip, session management, mobile, accessibility.
