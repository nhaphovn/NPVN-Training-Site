# CLAUDE.md — Section to Append

> Đây là phần BỔ SUNG cho CLAUDE.md hiện tại — paste vào cuối file.
> Sau khi append, restart Claude Code session để load instructions mới.

---

## 14. TEAM AGENT — Product Team Standard

Khi PM giao task, Claude (Orchestrator) đọc CLAUDE.md để biết phải delegate cho ai.

### 7 vai trò + ranh giới

| Agent | Owns | Touches | Doesn't touch |
|-------|------|---------|---------------|
| **Orchestrator** (default chat) | Planning, delegation | Conversation, todo list | Code directly |
| **Module Builder** | Module content | `data/modules.json` content payloads | API, engine, schema |
| **QA Reviewer** | Validation gate | Quality blocks, status field | Content text |
| **Asset Pipeline** | Visual assets | `/api/upload`, Figma export | Content text, validation |
| **Backend Engineer** | Infra & code | `api/*.js`, engine HTML, schema | Content payloads |
| **Deploy Manager** | Production gate | Git operations, status promotion | Content, code |
| **Eval Specialist** | Quality measurement | `eval/*`, suggests KB | KB content (just suggests) |

### Independent QA principle (HARD)

QA Reviewer is invoked as a **fresh subagent**, NEVER by the agent that built the content
in the same conversation pass.

Wrong:
```
PM → "Build module X and validate it"
Orchestrator → module-builder → builder runs validation inline ❌
```

Right:
```
PM → "Build module X"
Orchestrator → module-builder (creates draft)
            → qa-reviewer  (fresh invocation, independent check) ✅
```

### Quality philosophy: balanced

We ship drafts but track debt. Module can be `live` with quality.warnings > 0,
but never with quality.errors > 0 (hard block via pre-push hook).

Debt tracking lives in module's `quality` block. Run `/status` to see total debt.

### State machine (modules)

```
draft → review → approved → live → deprecated
```

Transitions:
- `draft → review`     — QA Reviewer LENIENT, 0 errors
- `review → approved`  — QA Reviewer STRICT, 0 errors
- `approved → live`    — Deploy Manager
- `live → deprecated`  — PM explicit

### When PM says...

| PM says | Orchestrator delegates to |
|---------|---------------------------|
| "Build module X" | Asset Pipeline (if assets needed) → Module Builder → QA Reviewer |
| "Validate everything" | QA Reviewer (all modules, LENIENT) |
| "Ship to production" | Deploy Manager (pre-flight QA STRICT first) |
| "Why module X broken?" | Backend Engineer (debug) |
| "How's chatbot doing?" | Eval Specialist |
| "Add new tenant" | Backend Engineer (schema) → Module Builder (content) |

### Quality gate hooks

- **PostToolUse** on Edit/Write → auto-flag `modules.json` for QA
- **PreToolUse** on `git push origin main` →
  - HARD BLOCK if modules.json invalid JSON
  - HARD BLOCK if any `status=live` module has `quality.errors > 0`
  - SOFT WARN if pending QA flag exists

Hooks live in `.claude/hooks/`. Settings in `.claude/settings.json`.

### Slash commands

| Command | Triggers |
|---------|----------|
| `/new-module <id>` | Asset Pipeline → Module Builder → QA Reviewer |
| `/check [module]` | QA Reviewer (LENIENT) |
| `/ship [module]` | Deploy Manager (QA STRICT → promote → push) |
| `/eval [module]` | Eval Specialist (QUICK mode) |
| `/status` | Orchestrator (read state, list debt) |
