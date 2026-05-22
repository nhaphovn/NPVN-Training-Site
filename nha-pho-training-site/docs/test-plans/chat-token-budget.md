# Test Plan — Chat: Token Budget Rate Limiting
> Sprint 7 Item 2 | QA: qa-reviewer | Date: 2026-05-22

---

## Scope

This test plan covers the replacement of the message-count rate limiter in `api/chat.js` with a token-budget rate limiter, and the corresponding FE display update in `training-engine.html`.

### In scope

1. **BE — `kvAdd(key, amount, ttlSec)`**: new function replacing `kvIncr`. Accumulates tokens via Redis INCRBY + EXPIRE pipeline; in-memory fallback when Upstash not configured.
2. **BE — `kvGet(key)`**: new function for reading current token totals before a request. Returns 0 for unknown keys.
3. **BE — Pre-check logic**: before calling Anthropic, estimate token cost and reject with HTTP 429 if any of the three budget counters would be exceeded.
4. **BE — Token estimation**: `ceil((lastMsg.content.length + systemPrompt.length) / 4) + 50`.
5. **BE — Post-increment**: after receiving Anthropic response, add `usage.input_tokens + usage.output_tokens` (actual) to the three KV counters.
6. **BE — KV key schema change**: `tb:ip:{ip}:h`, `tb:ip:{ip}:d`, `tb:global:{date}` replace the old `rl:ip:{ip}:h`, `rl:ip:{ip}:d`, `rl:global:{date}` keys.
7. **BE — Env vars**: `HOURLY_TOKEN_CAP`, `DAILY_TOKEN_CAP_USER`, `DAILY_TOKEN_GLOBAL` replace the old `DAILY_GLOBAL_CAP`.
8. **BE — Response shape**: `remaining.hour` (tokens left this hour), `remaining.day` (tokens left today), `remaining.hourPct` (integer 0–100) are returned. Old message-count integers removed.
9. **BE — `kvIncr` removal**: the old function must be gone entirely.
10. **FE — Quota display**: replaces raw "Còn N/giờ" count display with percentage-tier status messages. No raw token numbers shown to users.
11. **Regression**: all previously-passing validation paths (message length, abuse detection, allSteps validation, history length) must be unaffected.
12. **Fail-open behavior**: KV errors must not crash requests.
13. **In-memory fallback**: correct accumulation within a single process when Upstash is not configured.

### Out of scope

- Upstash/Vercel KV provisioning and infra setup (DevSecOps owns).
- Token cost optimisation or model selection (out of this sprint).
- Chatbot KB quality and eval scoring (eval-specialist).
- Admin CMS, hotspot rendering, tour-guide engine (separate system modules).
- Auth / ABAC gating (not yet implemented).
- Performance benchmarking under load (not in scope for this gate).
- Migration or cleanup of old `rl:` keys already in Redis (they expire via TTL naturally).

---

## Test approach

**Phase:** Gate 1 — Test plan and cases written before any implementation begins.

**Execution method (Gate 2):** Static code walkthrough first. Then manual API-level testing via `curl` / Hoppscotch against the local Vercel dev server. FE cases executed in-browser with DevTools Network tab open. KV-dependent cases use the in-memory path (no live Upstash required for most cases; Upstash-path integration noted separately).

**Environments:**
- Local dev (Vercel dev server): primary execution environment for all functional, boundary, and regression cases.
- Staging preview branch: secondary confirmation for FE display cases.
- Production smoke: TC-TB-001 and TC-TB-011 after full deploy.

**Tools:**
- REST client (curl / Hoppscotch / Insomnia) for direct API calls.
- Browser DevTools (Network tab) for FE payload and response inspection.
- Browser DevTools (Console) for FE quota display state inspection.
- Local dev console logs for budget counter values during in-memory fallback path.

**Test data requirements:**
- A valid `ANTHROPIC_API_KEY` in the dev environment (for post-increment and actual-token cases).
- A mock/stub mode or manually crafted responses to simulate Anthropic `usage` fields without consuming real credits (recommended for boundary cases).
- No Upstash URL/token set for in-memory fallback cases; Upstash credentials available for KV-path cases.

---

## Risk areas

| # | Risk | Why it is risky |
|---|------|----------------|
| R1 | Post-increment uses estimated tokens instead of actual when `usage` absent | Fallback `|| estimatedInputTokens` and `|| 100` — if Anthropic omits usage, counters are wrong |
| R2 | `remaining.hour` calculated from stale `hourUsed` (pre-call value) | Spec computes remaining as `HOURLY_TOKEN_CAP - hourUsed - actualTokens`; if `hourUsed` is not re-read after the call, it reflects the state before the call, which is correct by design but must be verified |
| R3 | Pre-check estimate much smaller than actual cost — under-blocking | Estimate uses only `lastMsg.content.length + systemPrompt.length`; excludes conversation history tokens sent to Anthropic (`messages.slice(-8)`) |
| R4 | Global cap key uses `today` date string computed once at module load vs. per-request | If the edge function instance spans midnight, the global key might not rotate. Must confirm `today` is computed inside the request handler |
| R5 | `kvAdd` INCRBY returns the new total, but fallback returns `amount` on first call — off-by-one in comparison | On cold start the counter returns `amount` (the just-added tokens), not the prior total; pre-check comparison must use `hourUsed` (from kvGet) not the kvAdd return value |
| R6 | FE displays raw token numbers if `hourPct` missing from response | If BE ships without `hourPct`, FE must degrade gracefully — not show NaN or a raw large number |
| R7 | `kvIncr` partially removed — old `rl:` keys still written | If refactor is incomplete, old keys continue to accumulate and old limits may trigger |
| R8 | Abuse detection short-circuits before pre-check | Correct by spec order, but if order changes during implementation, the abuse check could bypass the budget check |
| R9 | `remaining.hourPct` rounding: `Math.round` may produce 100 when budget is nearly exhausted | At exactly 0 remaining, spec says `Math.max(0, ...)` then `/ HOURLY_TOKEN_CAP * 100` → 0%; confirm no off-by-one |
| R10 | In-memory `memCache` TTL logic: `expiresAt < now` uses strict less-than — key at exact expiry moment treated as still valid | Could cause a one-request over-count at the boundary second |
| R11 | FE still references old `remaining.hour` as message count | If FE is not updated, any display code doing `remaining.hour < 5` (old count logic) will fire incorrectly for token values |

---

## Test cases summary

| ID | Title | Type | Priority |
|----|-------|------|----------|
| TC-TB-001 | Long message consumes more budget than short message | functional | critical |
| TC-TB-002 | Actual tokens from Anthropic usage are used for post-increment, not estimated | functional | critical |
| TC-TB-003 | Pre-check blocks request when hour budget would be exceeded | functional | critical |
| TC-TB-004 | Pre-check blocks request when day budget would be exceeded | functional | critical |
| TC-TB-005 | Global cap blocks request when daily global budget would be exceeded | functional | critical |
| TC-TB-006 | kvGet returns 0 for an unseen key (new IP or new hour) | functional | critical |
| TC-TB-007 | kvAdd accumulates correctly across multiple requests in-memory | functional | critical |
| TC-TB-008 | HOURLY_TOKEN_CAP env var override changes the hour limit | functional | high |
| TC-TB-009 | DAILY_TOKEN_CAP_USER env var override changes the day limit | functional | high |
| TC-TB-010 | Old rl: keys are never written — kvIncr is removed | regression | critical |
| TC-TB-011 | Response contains remaining.hour, remaining.day, remaining.hourPct | functional | critical |
| TC-TB-012 | remaining.hour is a large integer (tokens), not a small count | functional | critical |
| TC-TB-013 | FE quota display: no raw token numbers shown to user | functional | high |
| TC-TB-014 | FE quota display: hourPct > 75 shows no warning | functional | high |
| TC-TB-015 | FE quota display: hourPct < 25 shows warning message | functional | high |
| TC-TB-016 | FE quota display: hourPct 50-75 shows "Còn nhiều quota" | functional | medium |
| TC-TB-017 | FE quota display: hourPct 25-50 shows "Đã dùng khá nhiều" | functional | medium |
| TC-TB-018 | Abuse detection (isAbusive) still blocks repeated messages | regression | critical |
| TC-TB-019 | Message length > 500 chars still returns 400 too_long | regression | critical |
| TC-TB-020 | allSteps validation (> 30 items) still returns 400 | regression | high |
| TC-TB-021 | Fail-open: KV failure does not crash the request | functional | high |
| TC-TB-022 | In-memory fallback: counter accumulates correctly across sequential requests | functional | high |
| TC-TB-023 | Exactly at hour budget limit: last request that fits is accepted | boundary | critical |
| TC-TB-024 | One token over hour budget limit: request is rejected with 429 | boundary | critical |
| TC-TB-025 | Exactly at day budget limit: last request that fits is accepted | boundary | high |
| TC-TB-026 | One token over day budget limit: request is rejected with 429 | boundary | high |
| TC-TB-027 | Global cap: exactly at limit accepted, one over rejected | boundary | high |
| TC-TB-028 | Pre-check estimate vs actual: request accepted by pre-check but actual tokens push counter over — counter accumulates correctly but NO double-block | functional | high |
| TC-TB-029 | kvAdd with Upstash path: INCRBY pipeline called with correct key and amount | integration | high |
| TC-TB-030 | today key uses per-request date computation (not module-load time) | functional | medium |
| TC-TB-031 | remaining values floor at 0 — never negative | boundary | medium |
| TC-TB-032 | hourPct floors at 0 and caps at 100 — no out-of-range value | boundary | medium |
| TC-TB-033 | FE: if hourPct absent from response, display degrades gracefully (no NaN/crash) | regression | medium |
| TC-TB-034 | History length > 20 still returns 400 (regression) | regression | medium |
| TC-TB-035 | Pre-check uses three parallel kvGet calls (Promise.all), not sequential | functional | low |

---

## Pass criteria (BLOCK if not met)

- 100% of critical cases pass (TC-TB-001 through TC-TB-012, TC-TB-018, TC-TB-019, TC-TB-023, TC-TB-024).
- 0 issues of critical or high severity remain open.
- High-severity cases: pass rate >= 95% (at most 1 high-severity failure permitted as tracked debt; 0 preferred).
- Medium and low cases: documented, do not block ship individually, but 3 or more medium failures together constitute a block.
- Old `rl:` key writes must be completely absent (TC-TB-010): this is a zero-tolerance check — any write to an old key is a critical failure regardless of other results.
- `kvIncr` function must not exist anywhere in `api/chat.js` (TC-TB-010 sub-check).
- FE must not display raw token integers to end users (TC-TB-013): this is a critical UX requirement per spec.

---

## Out of scope (explicit)

- We do not test the quality or relevance of the AI chatbot response text.
- We do not test Upstash Redis availability, latency, or billing.
- We do not test the training-engine's hotspot, navigation, or step rendering.
- We do not test other API endpoints (upload, save, manifest, auth, progress).
