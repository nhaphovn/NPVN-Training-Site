# Test Plan: Image Proxy Fix — api/img.js

## Scope

### In scope
- `api/img.js` serverless function: response type, status codes, headers, proxy behavior
- Public blob path (new uploads with `access: 'public'`): 302 redirect to CDN URL
- Private blob path (legacy uploads): server-side proxy returning image bytes with Bearer auth
- Path traversal security validation
- Missing / misconfigured environment variable handling
- End-to-end image render in `training-engine.html` phone mockup for all three live content modules (`dang_tin`, `loc_kho`, `bo_suu_tap`)
- HTTP response headers: `Content-Type` and `Cache-Control`

### Out of scope
- `api/upload.js` upload flow (separate test plan)
- Admin CMS image management UI
- IndexedDB media cache path in `resolveMediaSrc()` (tested by admin test plan)
- Non-image media types (video proxy)
- CDN cache invalidation at Vercel edge
- Authentication / ABAC enforcement on the proxy endpoint (not yet implemented)

---

## Test types

- [x] Functional: does the endpoint return the correct response per the spec
- [x] Schema / protocol: HTTP status codes, header values, response body shape for error cases
- [x] Security: path traversal protection
- [x] Visual: image renders correctly inside the phone mockup on `training-engine.html`
- [x] Configuration: behavior when env vars are absent
- [ ] Performance: out of scope for this fix — no new latency budget introduced
- [ ] Accessibility: not applicable for a proxy endpoint
- [ ] Chatbot: not applicable for this fix

---

## Architecture context

```
Browser
  └─ training-engine.html
       └─ resolveMediaSrc() → returns imgPath from modules.json
            └─ imgPath = "/api/img?path=images/dang_tin/home.jpg"
                 └─ api/img.js (Vercel Node Serverless)
                      ├─ head() on public subdomain → if found: 302 to meta.url (CDN)
                      ├─ head() on private subdomain → if found:
                      │    CURRENT (broken): 302 to meta.url (private, no auth → browser 401)
                      │    PROPOSED FIX:     fetch bytes with Bearer token → pipe to client
                      └─ neither found → 404 JSON
```

### Root cause of bug
`api/img.js` currently issues a `302` redirect to `meta.url` for private blobs.
The browser follows the redirect to the private Vercel Blob CDN URL without a Bearer token and receives an HTTP 401 or 403, so the `<img>` element shows a broken image.

### Proposed fix behavior
For private blobs: fetch bytes server-side with `Authorization: Bearer ${token}`, pipe raw buffer to client with correct `Content-Type` and `Cache-Control: public, max-age=86400`.
For public blobs: continue with 302 redirect to the public CDN URL (no change needed, public URLs are permanently accessible without auth).

---

## Pass criteria (BLOCK if not met)

| # | Criterion | Threshold |
|---|-----------|-----------|
| 1 | All critical test cases pass | 100% |
| 2 | All high severity test cases pass | 100% |
| 3 | No broken images in `dang_tin`, `loc_kho`, `bo_suu_tap` modules | 0 broken |
| 4 | `/api/img` never returns `Content-Type: application/json` for a valid image path | 0 occurrences |
| 5 | `/api/img` never returns a redirect to a private Blob URL that browsers cannot access | 0 occurrences |
| 6 | Path traversal returns HTTP 400 (not 200, not 500) | 100% |

---

## Test environment

| Item | Value |
|------|-------|
| Base URL | `https://npvn-training-site.vercel.app` |
| Tool (API cases) | `curl -v` or Postman / browser DevTools Network tab |
| Tool (UI cases) | Chrome DevTools — Network tab, Console tab |
| Token config | Must be set: `BLOB_READ_WRITE_TOKEN` on Vercel project |
| Executor | QA Reviewer (manual) |
| Execution gate | MUST pass before Tech Lead deploys the fix to production |

---

## Test execution order

Execute in this sequence to maximise signal from early failures:

1. TC-09 (env var missing) — verify on a local/staging environment with token unset
2. TC-05 (path traversal) — security gate first
3. TC-06 (path not found) — error contract
4. TC-01 (content-type API)
5. TC-07 (Cache-Control)
6. TC-08 (Content-Type header for image)
7. TC-03 (public blob redirect)
8. TC-04 (private blob proxy)
9. TC-02 (image renders in browser)
10. TC-10 (all three modules end-to-end)

---

## Out of scope

- Upload pipeline regression (covered by upload test plan)
- CORS headers (already covered in existing suite; headers are set by `setCors()` which is unchanged)
- Vercel Blob SDK internal behavior — treat SDK as a black box; we test at the HTTP boundary
- Rate limiting / throttling behavior
