# Sprint 5 — Integration Foundation

> Theme: API-first · Auth mock · Progress tracking · Upload v2
> Start: 2026-05-22
> Owner: Tech Lead orchestrates · BE + FE implement
> North star: **mỗi item phải packaged độc lập, ghép được với web app Nhà Phố**

---

## Goal

Xây dựng nền tảng tích hợp để training site có thể connect với App Nhà Phố:
- API versioned, clean, CORS-ready cho `khonhapho.com`
- Auth foundation (mock IdP → real OAuth khi App team sẵn sàng)
- User progress tracking (per-user, per-module)
- Upload service tái sử dụng được (image + video)

Mỗi item là một **standalone package** — build xong có thể test độc lập, plug in sau.

---

## Items (theo thứ tự triển khai)

### Item 0 — Hotfix ✅ DONE
- [x] Fix ttText > 15 từ trong `quan_ly_khach` step 6

### Item 1 — Upload Service v2 🔵 NEXT
> Effort: S | Owner: Backend Engineer + Frontend Engineer
> ADR: không cần (refactor, không phải new architecture)

**Deliverables:**
- `api/upload.js` — hỗ trợ video (`mp4/webm/mov`, ≤50MB), ABAC headers
- `upload-service.js` — client module export, dùng được từ admin + training-engine + bất kỳ page nào
- Headers `x-tenant`, `x-role`, `x-module` truyền qua upload request (prep cho ABAC, không enforce chưa)

**Acceptance:** PM upload video thử trong admin, file lưu Blob private store thành công.

---

### Item 2 — API v1 Layer 🔵 TODO
> Effort: S | Owner: Backend Engineer
> ADR: ADR-004 (API versioning) — TL viết trước khi BE code

**Deliverables:**
- `api/v1/modules.js` — GET danh sách modules, filter by `?role=&status=`
- `api/v1/module.js` — GET chi tiết 1 module + steps (không kèm hotspot raw)
- Response envelope chuẩn: `{ ok, data, meta: { version, generatedAt } }`
- CORS header: allow `https://khonhapho.com`, `https://app.nhapho.com` (besides `*`)
- Rate limit header: `X-RateLimit-Limit: 100`, `X-RateLimit-Remaining`

**Integration contract:** App Nhà Phố gọi `/api/v1/modules?role=hoc_vien` → hiện training khuyến nghị.

---

### Item 3 — Auth Module (Mock IdP + Client) 🔵 TODO
> Effort: M | Owner: Backend Engineer
> ADR: ADR-001 (đã approved), implement Stage 1 + 2

**Deliverables:**
- `api/auth/login.js` — redirect to IdP (mock hoặc real tuỳ env var)
- `api/auth/callback.js` — OAuth code exchange, set HttpOnly cookie
- `api/auth/logout.js` — clear cookie + invalidate KV session
- `api/auth/me.js` — GET current user từ session
- `api/auth/_mock-idp/` — mock IdP simulating App Nhà Phố OAuth
- `lib/auth.js` — `requireAuth(req)` middleware helper, dùng trong `/api/v1/*`
- Login page: `login.html` — minimal, brand colors

**Config:** Env var `APP_OAUTH_AUTHORIZE_URL` → nếu set dùng real IdP, không set dùng mock.

---

### Item 4 — User Progress API 🔵 TODO
> Effort: M | Owner: Backend Engineer
> ADR: ADR-003 (Progress storage — Vercel KV)

**Deliverables:**
- `api/v1/progress.js`
  - `POST /api/v1/progress` body `{ moduleId, stepId, action: 'complete' }` → save to KV
  - `GET  /api/v1/progress?moduleId=xxx` → user's progress for that module
  - `GET  /api/v1/progress` → all modules progress (summary)
- KV key scheme: `progress:{userId}:{moduleId}` → `{ steps: [1,2,3], startedAt, completedAt? }`
- Events emitted: `progress.step_completed`, `progress.tour_started`, `progress.tour_completed`
- training-engine.html gọi API này khi user bấm Next/Done

**Dependency:** Item 3 (auth) phải xong trước — `requireAuth` middleware dùng trong endpoint.

---

### Item 5 — Deep Link + Embed Support 🔵 TODO
> Effort: S | Owner: Frontend Engineer

**Deliverables:**
- `training-engine.html` nhận `?token=xxx` query param → set session cookie → học ngay
- `?embed=1` mode: ẩn header/footer, resize-safe cho iframe từ App
- `postMessage` API: emit `{ type: 'step_complete', moduleId, stepId }` cho parent frame
- `index.html` deep link: `?role=hoc_vien` → tự chọn tab role

**Integration UX:** App Nhà Phố mở webview → `training.nhapho.com/training-engine.html?module=dang_tin&token=JWT`

---

## Definition of Done Sprint 5

| Item | Owner | Status |
|------|-------|--------|
| Upload service v2 (image + video) | BE + FE | ⏳ |
| API v1 modules endpoint | BE | ⏳ |
| Auth mock IdP + client | BE | ⏳ |
| User progress API (KV-backed) | BE | ⏳ |
| Deep link + embed support | FE | ⏳ |
| Sprint 5 retro + Sprint 6 plan | TL | ⏳ |

---

## Architecture diagram — integration points

```
┌─────────────────────────────────┐
│  App Nhà Phố (khonhapho.com)    │
│  - Recommend training modules   │
│  - Deep link vào training       │
│  - Show user progress badge     │
└─────────────┬───────────────────┘
              │  HTTPS + JWT
              ▼
┌─────────────────────────────────────────────┐
│  Training Site (npvn-training-site.vercel.app) │
│                                              │
│  /api/v1/modules   ← query catalogue        │
│  /api/v1/progress  ← sync progress          │
│  /api/auth/*       ← SSO via App OAuth      │
│  /api/upload       ← content management     │
│                                              │
│  training-engine.html?module=X&token=JWT    │
│  → ?embed=1 mode for App webview            │
└─────────────────────────────────────────────┘
```

---

## Risks

| Risk | Mitigation |
|------|-----------|
| App team chưa có OAuth endpoints | Mock IdP → zero code change khi App ready |
| Vercel KV cần upgrade plan | Eval KV usage; fallback Blob nếu cần |
| CORS cho khonhapho.com | Verify domain chính xác với App team trước khi hardcode |
| iframe CSP policy của App | Test embed mode với App dev team |

---

*Last updated: 2026-05-22*
