# Test Plan — Chat: Full Module Context Injection
> Sprint 7 Item 1 | QA: qa-reviewer | Date: 2026-05-22

---

## Scope

This test plan covers the changes introduced by the "Full Module Context Injection" feature for the AI chat assistant in the Nhà Phố Training Site. Specifically:

1. **FE (training-engine.html):** `sendChat()` now collects and sends `allSteps` (all steps of the current module, fields: `id`, `name`, `title`, `guide`) in the chat request payload.
2. **BE (api/chat.js):** `buildSystemPrompt()` now injects all steps into the system prompt with a `← ĐANG XEM` marker on the currently-viewed step. Falls back to old behavior when `allSteps` is absent.
3. **Validation:** `allSteps.length > 30` returns HTTP 400 with code `allSteps_too_long`. `allSteps` must be an array if present.
4. **Backward compatibility:** Requests without `allSteps` must continue to work exactly as before.

---

## Out of scope

- Rate-limiting logic (tested in earlier sprint, unchanged).
- Chat UI rendering, bubble styling, markdown rendering (unchanged).
- `admin.html` / admin-CMS content editing (separate feature).
- Chatbot KB quality and eval scoring (eval-specialist handles this separately).
- Non-chat modules (tour-guide, training-engine hotspot rendering).
- Anthropic model upgrade or prompt-quality A/B testing.
- Authentication and ABAC gating (not yet implemented per roadmap).
- Token cost measurement in production (covered by Tech Lead / DevSecOps monitoring).

---

## Test approach

**Phase:** Gate 2 — Implementation Review (cases are written before FE/BE code is merged).

**Execution method:** Manual API-level testing via direct `fetch` / `curl` calls to the deployed Vercel endpoint AND through the in-browser chat panel on the training-engine page. Each case notes which layer is under test.

**Environments:**
- Local dev (Vercel dev server): primary execution environment.
- Staging (npvn-training-site.vercel.app preview branch): secondary confirmation.
- Production smoke: TC-CMC-001 and TC-CMC-005 only after deploy.

**Tools:**
- Browser DevTools (Network tab) to capture request payload and response.
- Any REST client (curl, Hoppscotch, Insomnia) for direct API calls.
- Browser console to inspect `STATE.module` and `allSteps` value before send.

**Tester role required:** Logged-in as any role (Học viên / Chuyên viên used as default for most cases); role value is carried in payload and not access-gated yet.

---

## Risk areas

| # | Risk | Why it is risky |
|---|------|----------------|
| R1 | `← ĐANG XEM` marker applied to wrong step | `s.id` is compared to `step` (1-indexed); off-by-one if id != position | 
| R2 | Fallback silently broken | Old `stepGuide` path untouched in code, but easy to accidentally break by restructuring `buildSystemPrompt` | 
| R3 | Empty `guide` array produces blank bullets | Code checks `s.guide.length > 0` but individual items may have empty `title` or `body` | 
| R4 | Missing `name` / `title` on a step causes string concat artefact | `undefined` in template literal → "Bước 1 — undefined" in prompt | 
| R5 | `allSteps` with 31 items bypasses length check | Off-by-one on `> 30` vs `>= 30` boundary | 
| R6 | AI answers in wrong language or exceeds sentence limit | System prompt style rules unchanged but new content section may dilute instruction weight | 
| R7 | Conversation history corrupted when `allSteps` added | History array sliced server-side (`messages.slice(-8)`) — extra field on payload should not affect this | 
| R8 | FE sends hotspot/image data inside `allSteps` (bloat) | Spec says strip to `{id, name, title, guide}` only; omission would send large base64 payloads |

---

## Test cases summary

| ID | Title | Type | Priority |
|----|-------|------|----------|
| TC-CMC-001 | User asks total step count — AI answers correctly | functional | critical |
| TC-CMC-002 | User at step 5 asks about step 2 content | functional | critical |
| TC-CMC-003 | User at step 1 asks about the last step | functional | critical |
| TC-CMC-004 | Current step marked with `← ĐANG XEM` in system prompt | integration | critical |
| TC-CMC-005 | `allSteps` absent — fallback to old behavior, no regression | regression | critical |
| TC-CMC-006 | `allSteps` is empty array — graceful handling | boundary | high |
| TC-CMC-007 | `allSteps.length = 31` returns 400 allSteps_too_long | boundary | critical |
| TC-CMC-008 | `allSteps.length = 30` is accepted (boundary pass) | boundary | high |
| TC-CMC-009 | Step with no guide field — skipped, no blank bullets in prompt | functional | high |
| TC-CMC-010 | Step guide items with missing title or body — filtered out | functional | high |
| TC-CMC-011 | Module with only 1 step — chat works, correct marker | functional | high |
| TC-CMC-012 | Step with missing `name` field — no "undefined" in prompt | functional | high |
| TC-CMC-013 | Step with missing `title` field — no "undefined" in prompt | functional | high |
| TC-CMC-014 | AI responds in Vietnamese within 4-5 sentences | functional | medium |
| TC-CMC-015 | Conversation history preserved across turns with `allSteps` | regression | high |
| TC-CMC-016 | FE payload strips hotspot/image data from allSteps | integration | high |
| TC-CMC-017 | `allSteps` is not an array (object sent) — 400 error | boundary | high |
| TC-CMC-018 | `allSteps` is null — treated as absent, fallback behavior | boundary | medium |
| TC-CMC-019 | Out-of-scope question still refused when allSteps present | regression | medium |
| TC-CMC-020 | System prompt does not reveal itself when asked | regression | medium |

---

## Pass criteria (BLOCK if not met)

- 100% of critical cases pass (TC-CMC-001 through TC-CMC-008 inclusive).
- 0 issues of severity critical or high remain open.
- High-severity cases: pass rate >= 95% (at most 1 high-severity failure permitted as tracked debt before ship; 0 preferred).
- Medium cases: documented, do not block ship.
- AI response quality (TC-CMC-014): evaluated subjectively by tester for 3 sample questions; at least 2 of 3 must pass the 4-5 sentence rule.
- No regression on old behavior (TC-CMC-005 must pass cleanly).
- No `undefined` string visible in any AI response for edge-case step data.
