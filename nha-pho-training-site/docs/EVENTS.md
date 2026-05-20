# EVENTS.md — Event Taxonomy (EDA seed)

> Định nghĩa các loại event hệ thống emit ra `logs/events.jsonl`.
> Hiện tại: append-only file. Tương lai: swap event bus (Vercel Queues, Kafka).
> Đăng ký event mới ở đây TRƯỚC khi emit ra code.

---

## Format

Mọi event:
```json
{
  "ts":         "<ISO 8601 UTC>",
  "type":       "<dot-separated noun.verb>",
  "actor":      "<agent name or system>",
  "target":     { "tenant": "...", "module": "...", "id": "..." },
  "payload":    { ... },
  "attributes": { ... }
}
```

`attributes` block dùng cho ABAC filtering sau này.

---

## Event types

### Module lifecycle
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `module.requested` | PM gives new requirement | pm | `{ summary }` |
| `module.designed` | UI/UX completes Figma | ui-ux-designer | `{ assetsCount, figmaUrl }` |
| `module.specced` | Tech Lead completes tech spec | tech-lead | `{ specPath, adrIds }` |
| `module.test_planned` | QA completes plan + cases | qa-reviewer | `{ planPath, caseCount }` |
| `module.implemented` | FE+BE self-test passes | frontend-engineer / backend-engineer | `{ selfTestPassed }` |
| `module.tested` | QA gate decision | qa-reviewer | `{ passed, failures }` |
| `module.uat_passed` | PM acceptance | pm | `{ notes }` |
| `module.design_accepted` | UI/UX visual acceptance | ui-ux-designer | `{ pixelDiffMax }` |
| `module.deployed` | DevSecOps full release | devsecops | `{ version, sha }` |
| `module.live` | Confirmed live with traffic | devsecops | `{ url }` |
| `module.deprecated` | Removed from rotation | pm | `{ reason }` |

### Architecture
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `adr.created` | New ADR written | tech-lead | `{ id, title, status }` |
| `adr.accepted` | ADR moves to Accepted | tech-lead | `{ id }` |
| `adr.deprecated` | ADR superseded | tech-lead | `{ id, supersededBy }` |

### Quality
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `qa.gate_failed` | Any quality gate blocks | qa-reviewer | `{ gate, reason }` |
| `qa.gate_passed` | Gate passes | qa-reviewer | `{ gate }` |
| `eval.completed` | Eval run finished | eval-specialist | `{ avgScore, passRate, cost }` |
| `eval.gap_found` | KB gap identified | eval-specialist | `{ gapType, suggestion }` |
| `eval.regression` | Score drop > 0.2 | eval-specialist | `{ delta, scope }` |

### Deployment
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `deploy.canary` | Canary started | devsecops | `{ version, percent }` |
| `deploy.released` | Full release | devsecops | `{ version, sha }` |
| `deploy.rolled_back` | Rollback triggered | devsecops | `{ from, to, reason }` |

### Learner (Phase 4 — placeholder)
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `learner.started_module` | User opens module | system | `{ userId, moduleId }` |
| `learner.completed_step` | User passes step | system | `{ userId, moduleId, stepId, duration }` |
| `learner.completed_module` | User finishes module | system | `{ userId, moduleId, totalTime }` |

### Asset / Content
| Type | When | Actor | Payload |
|------|------|-------|---------|
| `asset.uploaded` | New file in Blob | backend / ui-ux-designer | `{ url, size, type }` |
| `content.updated` | modules.json changed | frontend-engineer | `{ moduleId, field, who }` |
| `kb.updated` | KB markdown changed | tech-lead / pm | `{ file, sections }` |

---

## Emit helper

### From Bash (agents)
```bash
emit_event() {
  local TYPE="$1"
  local ACTOR="$2"
  local PAYLOAD="$3"
  mkdir -p logs
  printf '{"ts":"%s","type":"%s","actor":"%s","payload":%s}\n' \
    "$(date -u +%FT%TZ)" "$TYPE" "$ACTOR" "$PAYLOAD" \
    >> logs/events.jsonl
}

# Usage:
emit_event "module.tested" "qa-reviewer" '{"passed":false,"failures":2}'
```

### From JS (API endpoints)
```js
// api/_lib/events.js (Backend Engineer owns)
import fs from 'fs/promises';

export async function emitEvent(type, actor, payload, target = null) {
  const event = {
    ts: new Date().toISOString(),
    type, actor, target, payload,
  };
  // For now: append to local file (won't persist on Vercel functions)
  // Soon: write to Blob storage
  try {
    await fs.appendFile('/tmp/events.jsonl', JSON.stringify(event) + '\n');
  } catch {}
}
```

---

## Querying events

```bash
# Tail recent
tail -50 logs/events.jsonl | jq .

# Filter by type
jq -c 'select(.type == "module.tested")' logs/events.jsonl

# Aggregate by type
jq -r .type logs/events.jsonl | sort | uniq -c | sort -rn
```

---

## Versioning

Events có schema phải stable. Khi cần breaking change:
1. Bump version: `type: "module.tested.v2"`
2. Document migration trong ADR
3. Cũ với mới cùng tồn tại 1 release cycle
4. Cũ deprecated → eventually removed

---

## Roadmap

| Phase | EDA capability |
|-------|----------------|
| Now | Append to JSONL file |
| +3 months | Move to Blob storage daily-rolled files |
| +6 months | Vercel Queues / Pub-Sub for real-time consumers |
| +12 months | Full event bus (Kafka or equivalent) + analytics warehouse |
