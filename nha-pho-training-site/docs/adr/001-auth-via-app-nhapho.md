# ADR-001: Authentication via App Nhà Phố OAuth

> Status: **Proposed**
> Author: Tech Lead
> Date: 2026-05-19
> Stakeholders: PM, Backend Engineer, DevSecOps

---

## Context

Training site cần track individual users (progress, recommendations, certificates).
PM yêu cầu: user đăng nhập bằng tài khoản **App Nhà Phố** (không tạo account riêng).

App Nhà Phố là **Identity Provider (IdP)** — sẽ cung cấp OAuth endpoints khi training site sẵn sàng integrate.

Training site phải:
- Chuẩn bị sẵn phương án phía mình (không phụ thuộc App ready)
- Khi App ready → connect trong < 1 ngày

---

## Decision

Use **OAuth 2.0 Authorization Code flow with PKCE** (RFC 7636).

### Architecture

```
┌──────────────┐                       ┌──────────────┐
│  Training    │                       │  App Nhà Phố │
│  Site        │                       │  (IdP)       │
└──────┬───────┘                       └──────┬───────┘
       │                                       │
       │  1. User clicks "Login with App"     │
       │ ─────────────────────────────────►   │
       │                                       │
       │  2. App shows login screen           │
       │ ◄─────────────────────────────────   │
       │                                       │
       │  3. User authenticates               │
       │     (handled by App)                 │
       │                                       │
       │  4. Redirect back với auth code      │
       │ ◄─────────────────────────────────   │
       │                                       │
       │  5. POST code → token endpoint       │
       │     (PKCE verifier)                  │
       │ ─────────────────────────────────►   │
       │                                       │
       │  6. access_token + id_token + user   │
       │ ◄─────────────────────────────────   │
       │                                       │
       │  7. Set HttpOnly session cookie      │
       │     (signed JWT, KV-backed)          │
       │                                       │
```

### User info schema (agreed contract with App team)

OAuth `userinfo` endpoint trả:
```json
{
  "sub":         "user_abc123",
  "name":        "Nguyen Van A",
  "phone":       "0901234567",
  "tenant":      "nhapho",
  "role":        "chuyen_vien",
  "level":       "intermediate",
  "email":       "...",
  "avatar_url":  "https://...",
  "joined_at":   "2025-01-15T00:00:00Z"
}
```

`tenant`, `role`, `level` map sang ABAC attributes của training site.

### Session storage

- **Cookie**: HttpOnly, Secure, SameSite=Lax, signed JWT
- **Backend**: Vercel KV (Redis) lưu session metadata
- **TTL**: 7 ngày, refresh khi user active
- **Logout**: invalidate KV entry + clear cookie

### Required new system modules

| Module | Files | Owner |
|--------|-------|-------|
| `auth` | `api/auth/login.js`, `api/auth/callback.js`, `api/auth/logout.js`, `api/auth/me.js` | Backend Engineer |
| `auth-ui` | Login button component, `/login` page | Frontend Engineer |
| `session` | Vercel KV setup, JWT signing/verification | Backend Engineer + DevSecOps |

### Environment variables (DevSecOps)

```
APP_OAUTH_CLIENT_ID         # provided by App Nhà Phố team
APP_OAUTH_CLIENT_SECRET     # provided by App
APP_OAUTH_AUTHORIZE_URL     # https://api.nhapho.com/oauth/authorize
APP_OAUTH_TOKEN_URL         # https://api.nhapho.com/oauth/token
APP_OAUTH_USERINFO_URL      # https://api.nhapho.com/oauth/userinfo
APP_OAUTH_REDIRECT_URI      # https://training.nhapho.com/api/auth/callback
JWT_SIGNING_SECRET          # local secret cho cookie signing
KV_URL, KV_TOKEN            # Vercel KV connection
```

---

## Alternatives considered

### A. Tự build login (email + password)
- **Pros**: independent, không phụ thuộc App
- **Cons**: phải maintain password reset, 2FA, security; users phải nhớ password khác; KHÔNG match PM yêu cầu

### B. SSO via SAML
- **Pros**: enterprise-grade
- **Cons**: heavy, App có thể không support; SAML overkill cho mobile app users

### C. Custom token exchange (App gửi token, training verify)
- **Pros**: đơn giản
- **Cons**: không có flow chuẩn, security risks, hard to debug

**Chosen: OAuth 2.0 + PKCE** — industry standard, App teams đã quen, libraries có sẵn.

---

## Consequences

### Pros
- Single Sign-On UX
- Users không cần tạo account mới
- App owns identity (đúng vai trò)
- Standard flow → libraries Node.js có sẵn

### Cons
- Phụ thuộc App team build OAuth endpoints
- Phải có Vercel KV (thêm chi phí ~ $0-10/tháng cho hobby tier)
- Phức tạp hơn email/password

### Migration path
- **Phase 1 (NOW)**: Build mock OAuth server cho dev
- **Phase 2 (App ready)**: Switch env vars → real App endpoints
- **Phase 3 (scale)**: Refresh token rotation, device sessions, MFA hook

---

## Implementation strategy

### Stage 1 — Mock IdP (build NOW, no dependency on App)

Build `api/auth/_mock-idp.js` simulating App OAuth:
- `/api/auth/_mock-idp/authorize` — fake login screen
- `/api/auth/_mock-idp/token` — issue mock tokens
- `/api/auth/_mock-idp/userinfo` — return mock user

Training site uses these endpoints when `APP_OAUTH_AUTHORIZE_URL` not set.

### Stage 2 — Real client implementation

Build production-grade client với:
- PKCE generation (crypto.randomUUID + SHA256)
- State parameter (CSRF protection)
- Token exchange in Edge function
- Session in Vercel KV

### Stage 3 — Switch to App when ready

Set env vars → real endpoints. **Zero code change** if contract matches.

### Stage 4 — User progress

After auth works, add `api/progress/*` endpoints:
- `progress.tour_started`, `progress.step_completed` events
- KV storage: `progress:{userId}:{moduleId}` → completion data

---

## Sprint impact

| Sprint | Auth work |
|--------|-----------|
| Sprint 1 (now) | ADR review + PM approve |
| Sprint 2 | Build mock IdP + client implementation + UI |
| Sprint 3 | User-progress system module + KV setup |
| Sprint X (when App ready) | Connect to real OAuth, deprecate mock |

---

## Open questions for PM

1. ✅ App có sẵn 1 IdP riêng hay dùng Firebase/Auth0 wrap? — PM xác nhận sau với App team
2. ✅ Role mapping App → Training: 1-1 hay khác? — PM cần check với App
3. ✅ Có user nào không có App account mà vẫn cần access (vd: trainer ngoài)? → answer sẽ ảnh hưởng có nên giữ "guest mode" hay không

---

## Status updates

- 2026-05-19: Created, status Proposed
- TBD: PM review + approve
