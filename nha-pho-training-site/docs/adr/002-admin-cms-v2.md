# ADR-002: Admin CMS v2 — Content Creation Pipeline Internalized

> Status: **Proposed**
> Author: Tech Lead
> Date: 2026-05-19
> Stakeholders: PM, Frontend Engineer, Backend Engineer, UI/UX Designer

---

## Context

PM mô tả admin v2 vision:
- Admin upload ảnh (đã có via patch)
- Admin **vẽ hotspot inline** (chưa có — đang ở image-manager.html riêng)
- Admin **viết spec** (chưa có proper workflow)
- **Claude chủ động check theo KB trước deploy** (chưa có)

Hiện tại admin-x7q9.html là **content editor** đơn thuần. PM muốn nó thành **content creation pipeline tích hợp**.

Mục tiêu: PM tạo 1 content module mới từ A-Z trong admin, không cần Claude chat, không cần image-manager riêng.

---

## Decision

Refactor admin-x7q9.html thành **Admin CMS v2** với 4 capabilities mới:

### Capability 1 — Hotspot Picker tích hợp
Move logic từ `image-manager.html` vào admin. Inline canvas vẽ hotspot trực tiếp trên step.

```
Step editor (new design):
┌─────────────────────────────────────────────────┐
│  Step 1 — [Tên step]              Status: draft │
├─────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────────────────┐ │
│  │  [Phone     │  │ Text fields:             │ │
│  │   mockup]   │  │  - ttTitle  [______]     │ │
│  │   with      │  │  - ttText   [______]     │ │
│  │   image     │  │  - guide... │ │
│  │   loaded    │  │                           │ │
│  │   + draw    │  │ Hotspot coords (auto):    │ │
│  │   tool]     │  │  x: 200  y: 350           │ │
│  │             │  │  w: 60   h: 80            │ │
│  └─────────────┘  │  scrollY: 270 (auto)      │ │
│                   └──────────────────────────┘  │
│  [Save Step]  [Delete Step]                     │
└─────────────────────────────────────────────────┘
```

User flow:
1. Click "Add step" → empty step
2. Upload ảnh → tự lên Blob → hiển thị trong phone mockup
3. Click & drag trên ảnh → vẽ hotspot → coords tự cập nhật fields
4. Điền text fields
5. Save step → draft

### Capability 2 — AI Review (Claude-powered)
Nút "🤖 Validate with AI" trên mỗi step (và toàn module).

Backend: new endpoint `api/ai-review.js` — Claude API + KB context.

```
PM clicks "Validate with AI" on step:
  → POST /api/ai-review with step content + KB context
  → Claude reads KB markdown + step + checks:
      - ttTitle/ttText word count
      - Content có khớp với KB không?
      - Có info trong step mâu thuẫn KB không?
      - Suggestion improve clarity
  → Returns:
      {
        passed: true/false,
        issues: [...],
        suggestions: [
          { type: "improve", field: "ttText", current: "...", suggested: "..." }
        ]
      }
  → Admin UI shows results với accept/reject buttons cho từng suggestion
  → PM click Accept → apply suggestion vào field
```

### Capability 3 — State Machine UI
Visual state tracker:

```
draft → review → approved → live → deprecated
  ●─────○────────○──────────○──────○
```

Mỗi state có actions tương ứng:
- draft: Edit, Submit for Review, Delete
- review: AI Review, Manual QA Check, Send Back to Draft
- approved: Publish (deploy), Send Back to Review
- live: Take Down, View Analytics
- deprecated: Restore, Delete

Each transition emits event vào `logs/events.jsonl`.

### Capability 4 — New Module Wizard
Wizard flow tạo content module mới:

```
Step 1: Basic info
  - Tour name
  - Tenant (default: nhapho)
  - Industry, Role, Level, Tags (attributes block)

Step 2: Upload screenshots
  - Drag & drop multiple images
  - Auto-name theo convention {tour}_b{NN}_{state}.jpg
  - All upload to Blob

Step 3: For each image, create step
  - Use Capability 1 (hotspot picker + text editor)

Step 4: Module-level guide
  - Module name, description, icon

Step 5: Review & Save Draft
  - Show summary
  - AI Review entire module (Capability 2)
  - Save → status: draft
```

---

## Alternatives considered

### A. Build admin v2 từ đầu với React
- **Pros**: modern stack, easier maintain
- **Cons**: rewrite ~3000 lines, mất 2-3 sprint, lost battle-tested patterns
- ❌ Premature

### B. Keep image-manager.html riêng, link sang admin
- **Pros**: less work
- **Cons**: PM phải switch tab, copy paste — bad UX, PM explicitly said tích hợp
- ❌ User wants integrated

### C. Use external CMS (Sanity, Strapi, Contentful)
- **Pros**: feature-rich, multi-author native
- **Cons**: data lock-in, schema không match domain (BĐS tour-guide), cost
- ❌ Not justified for current scale

**Chosen: Refactor existing admin-x7q9.html in-place**, add 4 capabilities incrementally.

---

## Consequences

### Pros
- PM tự chủ tạo content (không phụ thuộc Claude chat)
- AI review tích hợp → catch issues sớm
- Single tool cho whole pipeline → ít context switching
- Reuse existing battle-tested code

### Cons
- admin-x7q9.html sẽ phình to (~5000 lines?). Mitigation: extract JS modules
- Phụ thuộc Claude API → cost cho mỗi AI Review (~$0.001 per check, ok)
- Cần GPU/canvas perf cho hotspot picker

### Risk register

| Risk | Mitigation |
|------|------------|
| Hotspot picker conflicts với existing admin UI | Wrap trong modal/panel, không inline overlay |
| AI Review cho false positives nhiều | Threshold + manual override |
| State machine breaks existing modules (no status field) | Migration script: status default = "live" |
| Image-manager.html bị bỏ rơi → users confused | Redirect to admin, deprecate after 1 sprint |

---

## Implementation phases

### Phase 1 — Foundation (Sprint 1, in flight)
- Apply admin-patch.js v2 ✅ (đã có)
- Stabilize 4 API endpoints ✅ (đang fix)
- Fix images issue ✅ (đang fix)

### Phase 2 — Hotspot picker tích hợp (Sprint 2)
- Frontend Engineer: extract canvas logic từ image-manager.html
- Embed vào admin step editor
- Test: PM tạo 1 step mới end-to-end trong admin

### Phase 3 — State machine (Sprint 2-3)
- Backend Engineer: add `status` field to schema (already designed)
- Frontend Engineer: UI for state transitions
- DevSecOps: hooks block publish nếu state != "approved"

### Phase 4 — AI Review (Sprint 3)
- Backend Engineer: new endpoint `api/ai-review.js`
- Frontend Engineer: UI for suggestions + accept/reject
- Eval Specialist: tune prompt, measure accuracy

### Phase 5 — New Module Wizard (Sprint 4)
- UI/UX Designer: wizard flow design
- Frontend Engineer: implement wizard
- QA Reviewer: test cases for wizard

---

## API contracts (Backend Engineer design)

### POST /api/ai-review
```json
Request: {
  "tenant": "nhapho",
  "module": "lich_hen",
  "scope":  "step" | "module",
  "step_id": 3,                    // if scope=step
  "content": { ...step or module data... }
}

Response: {
  "passed": false,
  "score":  3.5,
  "issues": [
    { "severity": "error", "field": "ttText", "message": "18 words > 15 limit" }
  ],
  "suggestions": [
    { "field": "ttText",
      "current": "Nhấn vào nút này để mở dropdown chọn loại hình bất động sản",
      "suggested": "Nhấn để mở danh sách loại hình",
      "reason": "Shorter, clearer action"
    }
  ],
  "kb_alignment": {
    "matched": ["Dropdown loại hình"],
    "missing": []
  }
}
```

### POST /api/module-publish
```json
Request: {
  "tenant": "nhapho",
  "module": "lich_hen",
  "from_status": "approved",
  "to_status":   "live"
}

Response: {
  "ok": true,
  "commit_url": "https://github.com/.../commit/abc",
  "deploy_url": "https://...vercel.app",
  "events_emitted": ["content.tour_deployed"]
}
```

---

## Open questions

1. Multi-author concurrent editing? — defer, Phase 5+ when team grows
2. Version history per module (rollback content)? — leverage git, no extra UI for now
3. Preview deploy URL trước khi go live? — Phase 3, via DevSecOps canary

---

## Status updates

- 2026-05-19: Created, Proposed
- TBD: PM review + approve
