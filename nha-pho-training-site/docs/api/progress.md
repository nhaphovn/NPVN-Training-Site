# /api/v1/progress

Tracks per-user learning progress across content modules (tours). Backed by Vercel KV.

## Auth

All requests require a valid `nhapho_session` cookie (JWT signed with `JWT_SIGNING_SECRET`).
Unauthenticated requests receive `401 unauthorized`.

## Required environment variables

| Variable | Where to set |
|---|---|
| `JWT_SIGNING_SECRET` | Both Vercel projects |
| `KV_REST_API_URL` | Both Vercel projects |
| `KV_REST_API_TOKEN` | Both Vercel projects |

Set on **both** `npvn-training-site` and `nha-pho-training-site` Vercel projects — same as `BLOB_READ_WRITE_TOKEN`.

---

## GET /api/v1/progress

### Query params

| Param | Type | Required | Description |
|---|---|---|---|
| `moduleId` | string | No | ID of the content module (e.g. `dang_tin`) |

### Behavior

- `?moduleId=<id>` — returns progress for that single module.
- No query param — returns summary object across all modules the user has touched.

### Response — single module

```json
{
  "ok": true,
  "data": {
    "moduleId": "dang_tin",
    "completedSteps": [1, 2, 3],
    "percent": 27,
    "startedAt": "2026-05-22T08:00:00.000Z",
    "completedAt": null
  },
  "meta": { "version": "v1", "generatedAt": "2026-05-22T08:05:00.000Z" }
}
```

When no progress exists, returns `200` (not 404) with empty defaults:
```json
{
  "ok": true,
  "data": {
    "moduleId": "dang_tin",
    "completedSteps": [],
    "percent": 0,
    "startedAt": null,
    "completedAt": null
  },
  ...
}
```

### Response — summary (no moduleId)

```json
{
  "ok": true,
  "data": {
    "dang_tin":   { "completedSteps": 3, "percent": 27 },
    "loc_kho":    { "completedSteps": 12, "percent": 100 },
    "bo_suu_tap": { "completedSteps": 0, "percent": 0 }
  },
  ...
}
```

---

## POST /api/v1/progress

### Request body

```json
{
  "moduleId": "dang_tin",
  "stepId": 3,
  "action": "complete"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `moduleId` | string | Yes | Content module ID |
| `action` | string | Yes | One of `"complete"`, `"start"`, `"reset"` |
| `stepId` | number | Yes for `"complete"` | Step number within the module |

### Actions

| Action | Description |
|---|---|
| `start` | Create a progress entry if none exists (`completedSteps: [], startedAt: now`). Idempotent. |
| `complete` | Add `stepId` to `completedSteps` (no duplicates). Auto-starts if needed. Sets `completedAt` when all steps are done. |
| `reset` | Delete progress entry. Removes module from summary. |

### Response — complete/start

```json
{
  "ok": true,
  "data": {
    "moduleId": "dang_tin",
    "completedSteps": [1, 2, 3],
    "percent": 27,
    "startedAt": "2026-05-22T08:00:00.000Z",
    "completedAt": null
  },
  "meta": { "version": "v1", "generatedAt": "2026-05-22T08:05:00.000Z" }
}
```

### Response — reset

```json
{
  "ok": true,
  "data": {
    "moduleId": "dang_tin",
    "completedSteps": [],
    "percent": 0,
    "startedAt": null,
    "completedAt": null
  },
  ...
}
```

---

## Error responses

| Status | error code | Cause |
|---|---|---|
| 400 | `moduleId_required` | Missing or non-string `moduleId` |
| 400 | `action_invalid` | `action` not in `["complete","start","reset"]` |
| 400 | `stepId_required` | `action=complete` sent without numeric `stepId` |
| 401 | `unauthorized` | Missing or expired session cookie |
| 405 | `method_not_allowed` | Method other than GET/POST/OPTIONS |
| 500 | `internal` | Unexpected server error |
| 503 | `kv_not_configured` | `@vercel/kv` package not installed |

---

## KV key scheme

| Key | Value | Description |
|---|---|---|
| `progress:{sub}:{moduleId}` | `{ completedSteps, startedAt, completedAt }` | Per-module progress |
| `progress:{sub}:_summary` | `{ [moduleId]: { completedSteps, percent } }` | Aggregated summary |

`{sub}` is the `sub` claim from the JWT (unique user identifier).

---

## EDA events emitted

| Event type | Trigger |
|---|---|
| `progress.tour_started` | POST action=`start` creates a new entry |
| `progress.step_completed` | POST action=`complete` adds a step |
| `progress.tour_completed` | POST action=`complete` fills all steps |
| `progress.tour_reset` | POST action=`reset` |

Events are appended to `logs/events.jsonl` in JSONL format:
```json
{
  "ts": "2026-05-22T08:05:00.000Z",
  "type": "progress.step_completed",
  "actor": "user",
  "target": { "userId": "user_abc123", "moduleId": "dang_tin" },
  "payload": { "stepId": 3, "percent": 27 },
  "attributes": { "tenant": "nhapho" }
}
```

Event emission is best-effort — a failure to write the log does not fail the request.

---

## curl examples

```bash
# Start a module
curl -X POST https://npvn-training-site.vercel.app/api/v1/progress \
  -H "Content-Type: application/json" \
  -b "nhapho_session=<token>" \
  -d '{"moduleId":"dang_tin","action":"start"}'

# Record step completion
curl -X POST https://npvn-training-site.vercel.app/api/v1/progress \
  -H "Content-Type: application/json" \
  -b "nhapho_session=<token>" \
  -d '{"moduleId":"dang_tin","stepId":3,"action":"complete"}'

# Fetch progress for one module
curl https://npvn-training-site.vercel.app/api/v1/progress?moduleId=dang_tin \
  -b "nhapho_session=<token>"

# Fetch all-module summary
curl https://npvn-training-site.vercel.app/api/v1/progress \
  -b "nhapho_session=<token>"

# Reset progress
curl -X POST https://npvn-training-site.vercel.app/api/v1/progress \
  -H "Content-Type: application/json" \
  -b "nhapho_session=<token>" \
  -d '{"moduleId":"dang_tin","action":"reset"}'
```
