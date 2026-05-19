# Schema v2 — Multi-Tenant E-Learning Platform

> Status: **Draft** (sẽ implement ở Phase 2)
> Author: Tech Lead
> Last updated: 2026-05-19

## Mục tiêu

Chuyển từ single-tenant (chỉ Nhà Phố) → multi-tenant (nhiều ngành môi giới)
mà **không phải rewrite engine, không phải sửa admin**.

## Schema v1 (hiện tại)

```json
{
  "version": "1.0.0",
  "brand": { ... },
  "modules": {
    "dang_tin": { ... },
    "loc_kho":  { ... }
  }
}
```

## Schema v2 (target)

```json
{
  "schemaVersion": 2,
  "version":       "2.0.0",
  "lastUpdated":   "2026-05-19",
  
  "platform": {
    "name":           "Môi giới Training Platform",
    "defaultTenant":  "nhapho",
    "hotline":        "1900 0266"
  },
  
  "tenants": {
    "nhapho": {
      "name":      "Nhà Phố Việt Nam",
      "industry":  "real_estate",
      "active":    true,
      "brand": {
        "primary":   "#00A651",
        "dark":      "#007A3D",
        "bg":        "#E5EDE5",
        "logo":      "https://...",
        "appName":   "Kho Nhà Phố"
      },
      "kb": {
        "file":      "data/kb/nhapho.md",
        "version":   "1.0"
      },
      "modules": {
        "dang_tin": {
          "status":      "live",
          "version":     "1.2.0",
          "createdAt":   "2026-01-15",
          "lastUpdated": "2026-05-10",
          "name":        "Đăng tin BĐS",
          "role":        "Đầu chủ",
          "icon":        "📝",
          "images":      { ... },
          "quality": {
            "todo_count":    0,
            "eval_score":    4.5,
            "errors":        0,
            "warnings":      1,
            "lastReviewed":  "2026-05-10T10:00:00Z",
            "reviewedBy":    "qa-reviewer",
            "approvedAt":    "2026-05-10T10:15:00Z",
            "blocking":      []
          },
          "steps": [ ... ]
        }
      }
    }
  }
}
```

## Key changes

| Field | v1 | v2 | Why |
|-------|----|----|-----|
| Top-level `modules` | yes | no | Moved under `tenants.{id}.modules` |
| `brand` | global | per-tenant | Mỗi ngành brand khác |
| `kb` | implicit (1 file) | per-tenant pointer | KB riêng cho mỗi ngành |
| Module `status` | implicit | explicit state machine | Workflow đa người |
| `quality` block | no | yes | Track debt từ QA Reviewer |

## Module state machine

```
draft       → mới tạo, có TODO
review      → builder xong, đợi QA
approved    → QA pass, sẵn sàng deploy
live        → đang active trên production
deprecated  → tạm ẩn nhưng giữ lịch sử
```

## URL routing

- v1: `/?module=dang_tin` (legacy)
- v2: `/?tenant=nhapho&module=dang_tin`
- v2 default: `/?module=dang_tin` → dùng `platform.defaultTenant`

## Backward compatibility

Engine reads BOTH schemas:
```js
const data = await fetch('/data/modules.json').then(r => r.json());

let modules;
if (data.schemaVersion === 2) {
  const tenantId = urlParams.get('tenant') || data.platform.defaultTenant;
  modules = data.tenants[tenantId].modules;
} else {
  modules = data.modules;  // v1 fallback
}
```

## Migration plan

### Phase 2.1 — Schema design (1 day)
- [x] This document
- [ ] JSON Schema validation file (`data/schema-v2.json`)
- [ ] Test fixtures

### Phase 2.2 — Engine compat (2 days)
- [ ] Update `training-engine.html` to read both v1 and v2
- [ ] Update `admin-x7q9.html` to recognize v2
- [ ] Test with synthetic v2 fixture (don't migrate real data yet)

### Phase 2.3 — Migration script (1 day)
- [ ] `scripts/migrate-v1-to-v2.js`
- [ ] Dry-run mode, diff output
- [ ] Idempotent (running twice = same result)

### Phase 2.4 — Migrate Nhà Phố (1 day)
- [ ] Run migration on staging branch
- [ ] QA Reviewer full validation
- [ ] If clean → merge to main

### Phase 2.5 — Onboard tenant 2 (1 day, when ready)
- [ ] Backend Engineer creates `data/kb/{new_tenant}.md` skeleton
- [ ] Add tenant block to modules.json
- [ ] Module Builder + Asset Pipeline create first module
- [ ] Eval Specialist creates initial test cases

## Open questions

1. **Where to store user progress** when we add learner accounts?
   → Phase 4 problem. Probably Vercel KV or Postgres.

2. **Tenant-specific feature flags?**
   → v3. For now, all tenants same engine.

3. **Cross-tenant content sharing?**
   → Some modules may be reusable (e.g., "Soft skills"). Defer to v3.

## Decision log

- **2026-05-19** TL: Multi-tenant approach > microsites. One engine, one admin, one deploy.
- **2026-05-19** TL: Backward compat for 1 schema version. v3 may drop v1.
- **2026-05-19** PM: Build scaffold first, decide tenant 2 later.
