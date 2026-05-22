# Auth Module — API Reference

OAuth 2.0 Authorization Code + PKCE flow.
Zero-code switch between mock IdP and real App Nhà Phố OAuth — controlled by env vars only.

---

## Env vars

| Var | Required | Default | Notes |
|-----|----------|---------|-------|
| `JWT_SIGNING_SECRET` | YES | — | HS256 signing key, min 32 chars |
| `APP_OAUTH_CLIENT_ID` | no | `nhapho_training_local` | OAuth client ID |
| `APP_OAUTH_AUTHORIZE_URL` | no | `/api/auth/_mock-idp/authorize` | Real IdP: set this |
| `APP_OAUTH_TOKEN_URL` | no | `/api/auth/_mock-idp/token` | Real IdP: set this |
| `APP_OAUTH_USERINFO_URL` | no | `/api/auth/_mock-idp/userinfo` | Real IdP: set this |

When all three `APP_OAUTH_*` vars are unset, the built-in mock IdP is used automatically.

---

## GET /api/auth/login

Start the OAuth flow.

Generates PKCE (`code_verifier`, `code_challenge` S256), stores in `nhapho_pkce` cookie (HttpOnly, 10 min TTL), then redirects to the authorization URL.

### Response
- `302` Redirect to IdP authorization page
- `500` `{ error, message }` on server error

### Cookies set
- `nhapho_pkce` — HttpOnly, Secure, SameSite=Lax, Max-Age=600

### Example
```
curl -v http://localhost:3000/api/auth/login
# → 302 Location: /api/auth/_mock-idp/authorize?client_id=...
```

---

## GET /api/auth/callback

Handle the OAuth callback after user authenticates.

Verifies state (CSRF), exchanges code + PKCE verifier for tokens, fetches userinfo, issues session JWT.

### Query params
| Param | Required | Notes |
|-------|----------|-------|
| `code` | YES | Authorization code from IdP |
| `state` | YES | Must match stored state |
| `returnTo` | no | Same-origin URL to redirect after login |
| `error` | — | OAuth error from IdP (400 returned) |

### Response
- `302` Redirect to `returnTo` or `/`
- `400` `{ error: 'state_mismatch' | 'pkce_missing' | 'token_exchange_failed' | ... }`
- `500` `{ error: 'internal' | 'server_misconfigured' }`

### Cookies set
- `nhapho_session` — HttpOnly, Secure, SameSite=Lax, Max-Age=604800 (7 days), Path=/
- `nhapho_pkce` — cleared (Max-Age=0)

### Session JWT payload
```json
{
  "sub": "user_hv_001",
  "name": "Học viên Test",
  "role": "hoc_vien",
  "tenant": "nhapho",
  "level": "beginner",
  "iat": 1716000000,
  "exp": 1716604800
}
```

---

## GET /api/auth/logout

Clear session and redirect to `/`.

### Response
- `302` Redirect to `/`

### Cookies cleared
- `nhapho_session` — Max-Age=0
- `nhapho_pkce` — Max-Age=0

### Example
```
curl -v http://localhost:3000/api/auth/logout
# → 302 Location: /
```

---

## GET /api/auth/me

Return current session status. Always 200 — never 401.

### Auth
None required.

### Response
```json
// Authenticated
{ "ok": true, "authenticated": true, "user": { "sub": "...", "name": "...", "role": "...", "tenant": "nhapho" } }

// Not authenticated
{ "ok": false, "authenticated": false }
```

### Example
```
curl http://localhost:3000/api/auth/me
```

---

## GET /api/auth/_mock-idp/authorize

Mock IdP authorization page. Active only when `APP_OAUTH_AUTHORIZE_URL` is not set.

Renders an HTML page with 3 persona buttons:

| Persona | sub | role |
|---------|-----|------|
| Học viên | `user_hv_001` | `hoc_vien` |
| Đầu chủ | `user_dc_001` | `dau_chu` |
| Quản lý | `user_ql_001` | `quan_ly_phong` |

When a persona is selected: generates a one-time `code`, stores it in `mock_codes` cookie, redirects to `redirect_uri?code=...&state=...`.

### Query params (from login.js redirect)
`client_id`, `redirect_uri`, `state`, `code_challenge`, `code_challenge_method`

### Response (initial load)
- `200` HTML login page

### Response (after persona click, `?action=login&persona=...`)
- `302` Redirect to `redirect_uri?code=...&state=...`

---

## POST /api/auth/_mock-idp/token

Mock IdP token endpoint. Verifies code + PKCE, returns access_token.

### Request body (JSON)
```json
{
  "grant_type": "authorization_code",
  "code": "...",
  "code_verifier": "...",
  "client_id": "nhapho_training_local",
  "redirect_uri": "https://..."
}
```

### Response 200
```json
{
  "access_token": "<base64url JSON of user payload>",
  "token_type": "bearer",
  "expires_in": 3600
}
```

### Response 400
```json
{ "error": "invalid_grant", "message": "PKCE verification failed" }
```

---

## GET /api/auth/_mock-idp/userinfo

Mock IdP userinfo endpoint.

### Auth
`Authorization: Bearer <access_token>` (access_token is base64url JSON from token endpoint)

### Response 200
```json
{
  "sub": "user_hv_001",
  "name": "Học viên Test",
  "role": "hoc_vien",
  "tenant": "nhapho",
  "level": "beginner"
}
```

### Response 401
```json
{ "error": "invalid_token", "message": "..." }
```

---

## Events emitted

None currently. Future:
- `auth.user_logged_in` — on successful callback
- `auth.user_logged_out` — on logout

---

## Full flow (mock IdP)

```
Browser                    /api/auth/login         /api/auth/_mock-idp/authorize
  |                              |                           |
  |--- GET /api/auth/login ----->|                           |
  |                      generate PKCE + state               |
  |                      set nhapho_pkce cookie              |
  |<-- 302 → /api/auth/_mock-idp/authorize?... -------------|
  |                                                          |
  |--- GET /api/auth/_mock-idp/authorize ------------------>|
  |<-- 200 HTML (persona buttons) --------------------------|
  |                                                          |
  |--- GET ?action=login&persona=hoc_vien ----------------->|
  |                                              generate code
  |                                              store in mock_codes cookie
  |<-- 302 → /api/auth/callback?code=...&state=... --------|

Browser                    /api/auth/callback      /api/auth/_mock-idp/token  /api/auth/_mock-idp/userinfo
  |--- GET /api/auth/callback?code=...&state=... ---------->|
  |                      verify state                        |
  |                      POST /token (code + verifier) ----->|
  |                                              verify PKCE  |
  |                                              return access_token
  |                      GET /userinfo (Bearer token) ----------------------->|
  |                                                                    decode + return userinfo
  |                      build session JWT                    |
  |                      set nhapho_session cookie            |
  |                      clear nhapho_pkce cookie             |
  |<-- 302 → / --------------------------------------------|
```
