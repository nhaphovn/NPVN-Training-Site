# ADR-004: API v1 — Versioning + Integration Contract

> Status: **Accepted**
> Author: Tech Lead
> Date: 2026-05-22
> Stakeholders: PM, Backend Engineer, App Nhà Phố team

---

## Context

Training site hiện có các endpoints không versioned (`/api/upload`, `/api/save`, `/api/manifest`, v.v.).
Khi App Nhà Phố integrate, cần một **stable contract** — thay đổi breaking không được phép mà không bump version.

Đồng thời App cần query:
- Danh sách modules theo role
- Chi tiết module (steps, metadata)
- User progress
- Auth (SSO)

---

## Decision

### URL scheme

```
/api/v1/*        ← stable, integration-ready (Sprint 5+)
/api/*           ← internal/legacy, không guarantee stability
```

### Response envelope

Mọi endpoint `/api/v1/*` trả:

```json
{
  "ok": true,
  "data": { ... },
  "meta": {
    "version": "v1",
    "generatedAt": "2026-05-22T10:00:00Z",
    "requestId": "req_abc123"
  }
}
```

Lỗi:
```json
{
  "ok": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Module không tồn tại"
  },
  "meta": { ... }
}
```

### CORS policy

```
/api/v1/*:
  Access-Control-Allow-Origin: https://khonhapho.com, https://app.nhapho.com
  Access-Control-Allow-Credentials: true
  Access-Control-Allow-Methods: GET, POST, OPTIONS
  Access-Control-Allow-Headers: Content-Type, Authorization, x-tenant, x-role

/api/* (legacy):
  Access-Control-Allow-Origin: *   ← giữ nguyên backward compat
```

### Endpoints Sprint 5

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/v1/modules` | optional | List modules, filter `?role=&status=` |
| GET | `/api/v1/modules/:id` | optional | Chi tiết 1 module |
| GET | `/api/v1/progress` | required | User's progress (all modules) |
| GET | `/api/v1/progress/:moduleId` | required | User's progress (1 module) |
| POST | `/api/v1/progress` | required | Record step/module completion |
| GET | `/api/auth/me` | required | Current user info |

### Rate limiting headers

```
X-RateLimit-Limit: 100        (per minute per IP)
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1716123456 (Unix timestamp)
```

Không enforce server-side chưa (Vercel Edge sẽ add sau) — header đủ để App team biết contract.

---

## Alternatives considered

### A. Header versioning (`Api-Version: 1`)
- **Cons**: khó cache, khó test trong browser, không tường minh trong URL logs
- **Rejected**

### B. Subdomain (`v1.training.nhapho.com`)
- **Cons**: cần DNS management, Vercel routing phức tạp hơn
- **Rejected**

**Chosen: URL prefix `/api/v1/`** — standard, tường minh, dễ cache, dễ test.

---

## Migration plan

| Phase | Endpoints | Note |
|-------|-----------|------|
| Sprint 5 | `/api/v1/modules`, `/api/v1/progress` | New, stable |
| Sprint 6 | `/api/v1/auth/*` | Ổn định auth |
| Sprint 7+ | `/api/v1/analytics`, `/api/v1/recommendations` | Khi có data |
| Future | Deprecate `/api/*` legacy | Thông báo trước 1 sprint |

---

## Status updates

- 2026-05-22: Created + Accepted
