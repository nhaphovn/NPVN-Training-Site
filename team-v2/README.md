# Team v2 Bundle — Multi-Agent E-Learning Platform

## Cấu trúc

```
team-v2/
├── README.md                       ← file này
├── CLAUDE_UPDATE.md                ← APPEND vào cuối CLAUDE.md hiện tại
├── SPRINT_WEEK_1.md                ← Plan tuần này, 5 ngày
├── .claude/
│   ├── settings.json               ← Hook config + permissions
│   ├── agents/
│   │   ├── module-builder.md       ← Content creator (draft only)
│   │   ├── qa-reviewer.md          ← Independent QA gate (NEW)
│   │   ├── asset-pipeline.md       ← Figma + Blob (NEW)
│   │   ├── backend-engineer.md     ← API + infra (NEW)
│   │   ├── deploy-manager.md       ← State machine deploy
│   │   └── eval-specialist.md      ← Quality measurement
│   └── hooks/
│       ├── post-edit-flag.py       ← Auto-flag for QA
│       └── pre-push-gate.py        ← Block invalid push
└── data/
    └── SCHEMA_V2.md                ← Multi-tenant schema design
```

## Cách deploy

1. Extract zip ra desktop
2. Mở folder repo trong VS Code (`File → Open Folder`)
3. Kéo từng folder/file từ team-v2/ vào repo:
   - `.claude/*` → root repo
   - `data/SCHEMA_V2.md` → `data/` folder
4. Mở CLAUDE.md hiện tại → scroll xuống cuối → paste nội dung CLAUDE_UPDATE.md vào
5. Save tất cả
6. Trong Claude Code chat:
   ```
   Đọc CLAUDE.md (đặc biệt section 14 mới) và .claude/agents/*.md.
   Tóm tắt cho tôi 7 vai trò agent và cách bạn sẽ delegate.
   ```
7. Verify Claude hiểu đúng team rồi proceed với Sprint Week 1 Day 1

## Thay đổi so với v1

| v1 (cũ) | v2 (mới) |
|---------|----------|
| content-validator | **qa-reviewer** (independent, 2 modes) |
| image-processor | **asset-pipeline** (Figma + Blob) |
| deploy-orchestrator | **deploy-manager** (state machine) |
| - | **backend-engineer** (NEW) |
| eval-runner | **eval-specialist** (refined) |

## Triết lý

- Balanced: ship draft, track debt
- Independent QA: builder ≠ validator
- State machine: draft → review → approved → live
- Quality block trong mỗi module để track debt rõ ràng
