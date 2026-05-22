# ADR-003: User Progress Storage — Vercel KV

> Status: **Accepted**
> Author: Tech Lead
> Date: 2026-05-22
> Stakeholders: PM, Backend Engineer, DevSecOps

---

## Context

Training site cần track tiến độ học của từng user:
- Step nào đã hoàn thành
- Module nào đang học / đã xong
- Data này phải truy xuất được từ App Nhà Phố (progress badge, recommendation)

Cần storage layer với:
- Low latency reads (user mở module → lấy progress ngay)
- Key-value access pattern (per-user, per-module)
- Không cần relational queries
- Nằm trong Vercel ecosystem (giữ stack đơn giản)

---

## Decision

**Vercel KV (Redis-backed)** cho user progress storage.

### Key scheme

```
progress:{userId}:{moduleId}
→ JSON value:
{
  "completedSteps": [1, 2, 3],
  "lastStepId": 3,
  "startedAt": "2026-05-22T10:00:00Z",
  "completedAt": null          // set khi hoàn thành toàn bộ module
}

progress:{userId}:_summary
→ JSON value:
{
  "modules": {
    "dang_tin":    { "progress": 100, "completedAt": "2026-05-22T..." },
    "loc_kho":     { "progress": 42,  "completedAt": null },
    "chat_nha_pho":{ "progress": 0,   "completedAt": null }
  },
  "lastActive": "2026-05-22T10:30:00Z"
}
```

### API design

```
POST /api/v1/progress
Body: { moduleId, stepId, action: "complete" | "start" }
Auth: requireAuth (JWT cookie)
→ Updates KV, emits EDA event

GET /api/v1/progress?moduleId=dang_tin
Auth: requireAuth
→ Returns { completedSteps, lastStepId, percent }

GET /api/v1/progress
Auth: requireAuth
→ Returns summary across all modules
```

### Events emitted (EDA)

```
progress.tour_started      → khi user bắt đầu module lần đầu
progress.step_completed    → mỗi step hoàn thành
progress.tour_completed    → khi completedSteps.length === totalSteps
```

---

## Alternatives considered

### A. Vercel Blob (JSON file per user)
- **Pros**: đã có, không cần setup thêm
- **Cons**: không phải KV, đọc/ghi chậm, race condition khi concurrent updates, không hỗ trợ atomic operations
- **Rejected**

### B. PlanetScale / Supabase (relational DB)
- **Pros**: full SQL, complex queries
- **Cons**: overkill cho KV access pattern, thêm vendor, thêm phí, thêm complexity
- **Rejected** (revisit nếu cần analytics sau)

### C. localStorage trên client
- **Pros**: zero backend, instant
- **Cons**: không sync cross-device, mất khi clear browser, không App-accessible
- **Rejected**

**Chosen: Vercel KV** — native trong Vercel ecosystem, Redis interface quen thuộc, latency tốt, atomic INCR/SET, free tier đủ dùng.

---

## Consequences

### Pros
- Read latency < 5ms (same region)
- Atomic SET — không race condition
- TTL built-in (dùng cho session cache)
- `@vercel/kv` SDK nhỏ, well-maintained
- Free tier: 256MB storage, 3000 req/day — đủ cho MVP

### Cons
- Vercel KV cần upgrade từ Hobby nếu vượt free tier
- Không có SQL queries (nhưng không cần)
- Thêm env vars: `KV_REST_API_URL`, `KV_REST_API_TOKEN`

### Rollback plan
- Nếu Vercel KV không phù hợp: migrate sang Upstash Redis (same Redis protocol, change 2 env vars, 0 code change vì dùng `@vercel/kv` wrapper)

---

## Environment variables (DevSecOps)

```
KV_REST_API_URL    # Vercel KV endpoint
KV_REST_API_TOKEN  # Vercel KV token
```

Cần set trên **cả 2 Vercel projects** (như đã làm với BLOB_READ_WRITE_TOKEN).

---

## Status updates

- 2026-05-22: Created + Accepted (TL decision, no blockers)
