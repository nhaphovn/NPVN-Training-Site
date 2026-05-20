# CLAUDE.md — Nhà Phố Training Site

> Đọc file này trước khi làm bất cứ điều gì.
> Cập nhật khi có thay đổi kiến trúc lớn.

---

## 1. TỔNG QUAN DỰ ÁN

| Trường | Giá trị |
|--------|---------|
| **Tên** | Nhà Phố Training Site — Hệ thống đào tạo nội bộ |
| **App** | Kho Nhà Phố / App Nhà Phố Việt Nam (khonhapho.com) |
| **Mục đích** | Training nhân viên dùng app — interactive tour hotspot + chatbot AI |
| **Phiên bản** | v13 |
| **Deploy** | Vercel static hosting (free) |
| **Owner** | PM tại Nhà Phố |

---

## 2. STACK KỸ THUẬT

```
Vanilla HTML / CSS / JS   — không framework, không build tool
Ảnh thật từ app           — base64 inline hoặc file /images/
Hotspot overlay           — tọa độ 390px space, scale theo phone width
Chatbot                   — Claude API (user nhập key) hoặc backend proxy
Font                      — Be Vietnam Pro (CDN Google Fonts)
Brand color               — #00A651 (xanh lá), dark #007A3D, bg #E5EDE5
```

---

## 3. CẤU TRÚC FILE

```
nha-pho-training/
├── CLAUDE.md                   ← file này
├── index.html                  ✅ landing page (chọn role)
│
├── training-engine.html        ⏳ engine đọc JSON (thay 3 file HTML cứng)
├── admin.html                  ⏳ dashboard chỉnh content
│
├── data/
│   └── modules.json            ✅ schema đầy đủ, content 3 modules
│
├── images/
│   ├── dang_tin/               ✅ home.jpg, form.jpg
│   ├── loc_kho/                ✅ 7 ảnh
│   └── bo_suu_tap/             ✅ 10 ảnh
│
├── legacy/                     (3 file HTML cứng cũ — giữ làm reference)
│   ├── dang_tin_responsive.html
│   ├── loc_kho_tai_nguyen_v2_responsive.html
│   └── bo_suu_tap.html
│
└── tools/
    ├── pm_input_toolkit_v3.html
    └── coordinate_picker.html
```

---

## 4. DATA LAYER — modules.json

**Quy tắc vàng:** Content thay đổi → chỉ sửa `data/modules.json`.
Không chạm vào `training-engine.html` trừ khi fix bug logic/render.

### Schema một step

```json
{
  "id": 1,
  "name": "Tên bước ngắn",
  "title": "Bước 1 — Tên hiển thị",
  "sub": "Mô tả hành động (≤20 từ)",
  "tip": "Lưu ý quan trọng nếu có",
  "img": "home",
  "scrollY": 0,
  "hs": { "x": 200, "y": 250, "w": 60, "h": 80 },
  "ttPos": "right",
  "ttTitle": "≤5 từ",
  "ttText": "≤15 từ",
  "guide": [
    { "title": "Tiêu đề mục", "body": "Nội dung giải thích", "note": "Ghi chú nếu có" }
  ]
}
```

---

## 5. QUY TẮC BẮT BUỘC KHI BUILD

```
① Nội dung TỪ STEP_SPEC PM cung cấp — KHÔNG tự bịa
② Thiếu trường → điền "TODO: [field_name]"
③ Số bước = số hotspot trong JSON (không thêm, không bỏ)
④ ttTitle ≤ 5 từ | ttText ≤ 15 từ
⑤ Tooltip NGOÀI phone frame — không che screen
⑥ Ảnh thật làm nền — KHÔNG rebuild UI bằng code
⑦ scrollY = hs_y_390 - 80 (minimum 0)
⑧ Brand color cố định #00A651 — không override
⑨ Responsive 3 breakpoints (desktop ≥1024 / tablet 768-1023 / mobile <768)
⑩ Chatbot system prompt focused theo module hiện tại
```

---

## 6. PHONE MOCKUP SPEC

```css
/* Desktop */
--phone-w: 270px;
--screen-w: 254px;
--screen-h: 560px;
--notch: 22px;

/* Mobile */
--phone-w: 230px;
--screen-w: 216px;
--screen-h: 480px;
--notch: 18px;

/* Scale hotspot tọa độ 390px → phone screen */
SCALE = phoneScreenWidth / 390   /* ≈ 0.65 desktop, 0.55 mobile */

/* Dim overlay: 4 rect thay vì box-shadow (tránh browser quirks) */
```

---

## 7. BRAND TOKENS

```css
--color-primary:  #00A651;
--color-dark:     #007A3D;
--color-bg:       #E5EDE5;
--color-white:    #FFFFFF;
--color-text:     #1A1A1A;
--color-muted:    #666666;

--font-family: 'Be Vietnam Pro', sans-serif;
--font-weights: 300 400 500 600 700 800;

/* Tone viết: thân thiện, ngắn, dùng động từ hành động */
/* Cấm: "Xin vui lòng", "Hãy thử", "Lưu ý rằng" */
```

---

## 8. QUY ƯỚC ĐẶT TÊN

### Screenshots từ PM

```
Pattern: [module]_b[NN]_[state].png
Ví dụ:   dang_tin_b03_loai_hinh_open.png
         loc_kho_b06_an_cot.png

- b01, b02... (zero-padded)
- state: open | filled | error | success | empty
- tất cả lowercase, dùng _ không dùng -
```

### Image keys trong modules.json

```
dang_tin:   "home", "form"
loc_kho:    "b01_home", "b02_xem", "b04_an_cot", ...
bo_suu_tap: "b01_list", "b01_feed", "b02_bst", ...
```

### Commit messages

```
feat: add [module_name] module
fix: [bug description] in [module/file]
content: update [module_name] step [N] [field]
refactor: migrate [file] to training-engine
chore: update modules.json schema
```

---

## 9. WORKFLOW BUILD MODULE MỚI

**PM cung cấp 3 thứ:**

```
① Screenshots  — đặt tên đúng quy ước, upload vào /images/[module]/
② JSON hotspot — export từ pm_input_toolkit, paste vào data/modules.json
③ Step Spec    — tooltip text + guide content cho mỗi bước
```

**Claude thực hiện:**

```
① Đọc SKILL.md (xem mục 10)
② Validate input: đủ 3 thứ chưa? Thiếu → hỏi trước, không đoán
③ Thêm module mới vào modules.json (theo schema)
④ Test render qua training-engine.html?module=[id]
⑤ Validate checklist (mục 5) trước khi báo xong
⑥ Export / checkpoint ngay
```

---

## 10. SKILL FILES — ĐỌC TRƯỚC KHI BUILD

| Task | SKILL file cần đọc |
|------|--------------------|
| Build bất kỳ UI nào | `/mnt/skills/public/frontend-design/SKILL.md` |
| Tạo file HTML/module | `/mnt/skills/public/frontend-design/SKILL.md` |
| Export docx/report | `/mnt/skills/public/docx/SKILL.md` |

**Bắt buộc:** `view` SKILL.md trước khi viết code — không bỏ qua dù task nhỏ.

---

## 11. MCP SERVERS

```json
{
  "mcpServers": {
    "nhapho": {
      "type": "stdio",
      "command": "python",
      "args": ["servers/nhapho_mcp.py"]
    },
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "fetch": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

### Custom MCP tools (servers/nhapho_mcp.py)

| Tool | Mô tả |
|------|-------|
| `get_step(module, step_id)` | Lấy data một step |
| `update_step(module, step_id, fields)` | Cập nhật fields |
| `validate_module(module_id)` | Chạy checklist (ttTitle ≤5 từ, ttText ≤15 từ, no TODO, guide ≥2 items) |
| `list_todo_steps(module_id?)` | Liệt kê tất cả step còn TODO |

---

## 12. STATUS HIỆN TẠI (v13)

### Hoàn thành ✅
- 3 module HTML (Đăng tin 11b, Lọc kho 12b, Bộ sưu tập 12b)
- index.html landing page
- PM Input Toolkit v3
- KB_NhaPho_FULL.md
- Backend proxy code (chưa deploy)
- modules.json schema + /images/ folder tách riêng
- CLAUDE.md (file này)

### Đang dở ⏳
- `training-engine.html` — engine đọc JSON thay 3 file cứng
- `admin.html` — dashboard chỉnh content
- `servers/nhapho_mcp.py` — custom MCP server
- `scripts/figma_export.py` — auto-export từ Figma

### Roadmap modules
```
Priority 1 — Đầu chủ:    Kho cá nhân (8b), Lịch hẹn & Báo cáo (6b)
Priority 2 — HV/CV:      QL khách + Tự khớp (10b), Chat (8b)
Priority 3 — Trưởng phòng: QL thành viên (10b), QL khách CV (8b), Báo cáo (6b)
```

---

## 13. NGUYÊN TẮC LÀM VIỆC

```
① Input lớn → chia nhỏ tự động, checkpoint sau mỗi phần
② Output mỗi bước là input cho bước sau — không làm lại từ đầu
③ Context gần limit → checkpoint ngay (export file + summary trạng thái)
④ Thiếu thông tin → hỏi rõ, không tự đoán
⑤ Output > 200 lines → chia thành nhiều phần, hỏi trước khi tiếp
⑥ Production-ready code — không prototype, không placeholder logic
```
## 13.5 VOCABULARY CONTRACT — đọc trước mọi task

Training site có **3 levels architecture**. Đừng nhầm.

### Level 1 — System Modules (platform code)

Là **các thành phần của training platform**, có code thật, có infra:

| System Module | Trạng thái | Vị trí code |
|---------------|------------|-------------|
| `tour-guide` | ✅ Live | `training-engine.html` |
| `ai-chat` | ✅ Live | `api/chat.js` + chat panel |
| `admin-cms` | ⚠️ Basic (admin-x7q9.html) | cần nâng cấp |
| `auth` | ❌ Chưa có | roadmap |
| `user-progress` | ❌ Chưa có | roadmap |
| `analytics` | ❌ Chưa có | roadmap |
| `recommendation` | ❌ Chưa có | roadmap |
| `certificate` | ❌ Chưa có | roadmap |
| `assessment` | ❌ Chưa có | roadmap |
| `discussion` | ❌ Chưa có | roadmap |
| `payment` | ❌ Chưa có | roadmap |

System modules cần tech spec + ADR + full pipeline khi build mới.

### Level 2 — Content Modules (data về App được dạy)

Là **các tour hướng dẫn** trong tour-guide engine. Không phải code, là **data** trong `data/modules.json`.

Cũng gọi là "**Tour**" hoặc "**Course**" cho rõ. Trong code có thể vẫn dùng key `modules` (legacy), nhưng trong giao tiếp **luôn nói "content module" / "tour" / "course"**.

| Tenant | Industry | Content Modules đang có |
|--------|----------|-------------------------|
| `nhapho` | real_estate | `dang_tin`, `loc_kho`, `bo_suu_tap` |
| (future) | (other) | (other tours) |

Content modules có lifecycle nhẹ: draft → review → live. Không cần ADR. Theo workflow content creation.

### Level 3 — Steps (bên trong 1 content module)

Mỗi tour có nhiều **step** (hotspot + tooltip + guide). Ví dụ tour `dang_tin` có 11 steps.

Step là **đơn vị nhỏ nhất** — chỉ chứa screenshot, tooltip, hướng dẫn cho 1 màn hình của App.

---

## Khi PM nói "module" — Tech Lead phải hỏi lại

PM nói:
> "Tạo module mới Lịch hẹn"

Tech Lead **bắt buộc clarify**:
> "Bạn muốn:
> (a) Content module / tour mới về tính năng Lịch hẹn của App Nhà Phố? → routine pipeline
> (b) System module mới (vd: tích hợp Google Calendar)? → cần ADR, big effort"

99% trường hợp là (a). Nhưng phải hỏi để chắc.

---

## EDA events — phân biệt theo level

### Level 1 events (system) — quan trọng cho scale
```
auth.user_logged_in
progress.tour_started        ← user mở 1 content module
progress.step_completed
progress.tour_completed
chat.kb_gap_detected
admin.module_published
```

### Level 2 events (content meta) — quy trình build
```
content.tour_drafted         ← PM/TL bắt đầu spec 1 content module mới
content.tour_qa_passed
content.tour_deployed
content.image_uploaded
```

Xem `docs/EVENTS.md` cho danh sách đầy đủ.

---

## ABAC — đúng level

**User attributes** (Level 1, khi có auth):
```json
{ "role": "chuyen_vien", "tenant": "nhapho", "level": "beginner" }
```

**Content module attributes** (Level 2):
```json
{ "industry": "real_estate", "role": ["dau_chu"], "level": "intermediate" }
```

ABAC rule: User access content khi attributes match (xem `docs/ATTRIBUTES.md`).

---

## Roadmap system modules

PM cần decide thứ tự build system modules. Suggestion (priority):

| # | System Module | Khi nào cần | Effort | Block by |
|---|---------------|-------------|--------|----------|
| 1 | `auth` | trước khi track users | M | - |
| 2 | `user-progress` | sau auth | M | auth |
| 3 | `admin-cms v2` | trước khi có multi-author | S | - |
| 4 | `analytics` | sau khi có 100+ users | M | progress |
| 5 | `recommendation` | sau khi có 5+ content modules + attributes data | M | progress + attributes filled |
| 6 | `assessment` | nếu muốn chứng nhận | L | - |
| 7 | `certificate` | sau assessment | S | assessment |
| 8 | `discussion` | nếu cần community | L | auth |
| 9 | `payment` | nếu thương mại | L | auth |

PM brainstorm với Tech Lead khi muốn add system module mới.

## 14. TEAM AGENT v3 — Product Team Standard

### Bạn (default Claude) là Tech Lead

Khi PM gõ trong VS Code Claude Code, mặc định bạn là **Tech Lead**.
Đọc `.claude/agents/tech-lead.md` để hiểu chi tiết vai trò.

Tech Lead orchestrates. Delegate cho specialists đúng lúc. Không tự code production.

### 7 vai trò team

| # | Agent | Lives in | Owns |
|---|-------|----------|------|
| 1 | **tech-lead** | `.claude/agents/tech-lead.md` + CLAUDE.md | Architecture, ADR, orchestration |
| 2 | **qa-reviewer** | `.claude/agents/qa-reviewer.md` | Test plans, test cases, quality gates |
| 3 | **ui-ux-designer** | `.claude/agents/ui-ux-designer.md` | Wireframes, Figma, assets, design system |
| 4 | **frontend-engineer** | `.claude/agents/frontend-engineer.md` | training-engine, admin, content rendering |
| 5 | **backend-engineer** | `.claude/agents/backend-engineer.md` | api/*.js, data layer, integrations |
| 6 | **devsecops** | `.claude/agents/devsecops.md` | Deploy, infra, security, monitoring |
| 7 | **eval-specialist** | `.claude/agents/eval-specialist.md` | Quality measurement, KB/instruction suggestions |

PM là vai trò Product (không phải agent). PM cấp Business Requirements + UAT.

### Quy trình bắt buộc — 4 phases

Đọc `docs/PROCESS.md` để hiểu flow đầy đủ. Tóm tắt:

```
Phase 1 - Requirement: PM → Tech Lead → Review với toàn team → PRD + ADR
Phase 2 - Development: UI/UX + Tech Spec + Test Plan (parallel) → FE+BE implement → self-test
Phase 3 - Testing:     QA executes pre-written cases → UAT (PM) → Design accept (UI/UX)
Phase 4 - Release:     DevSecOps canary → monitor → full release → Eval feedback to PM
```

### Quy tắc bất di bất dịch

```
1. QA viết test plan + cases TRƯỚC khi FE/BE coding.
2. Không bypass quality gate ở mọi phase.
3. Tech Lead viết ADR cho mọi quyết định kiến trúc.
4. Mỗi state change emit event (xem docs/EVENTS.md).
5. Mỗi content có attributes block (xem docs/ATTRIBUTES.md).
6. DevSecOps canary deploy trước full release (không exception).
7. Eval Specialist suggest KB/instruction, KHÔNG tự apply.
```

### Architecture principles (Tech Lead enforces)

- **EDA (Event-Driven)**: Emit event cho mọi state change. Hiện tại append vào `logs/events.jsonl`. Tương lai swap event bus. Xem `docs/EVENTS.md`.
- **ABAC (Attribute-Based)**: Mọi module + content có `attributes` block. Filter/route dựa vào attributes, không hardcode IDs. Xem `docs/ATTRIBUTES.md`.
- **Separation of concerns**: Mỗi agent narrow ownership. Stay in lane.
- **Reversibility**: Mọi action có rollback path. Không force-push.

### Khi PM nói X → Tech Lead làm Y

| PM says | Tech Lead's first action |
|---------|---------------------------|
| "Tạo module mới Lịch hẹn" | Đọc PROCESS.md → analyze requirement → invoke ui-ux-designer (wireframe) + qa-reviewer (test plan draft) |
| "Site bị lỗi X" | Identify owning agent (FE/BE/DevSecOps) → invoke them |
| "Kiến trúc cho feature Y?" | Write ADR draft → review với PM |
| "Deploy module Z" | Verify QA gate passed → invoke devsecops |
| "Chatbot trả lời sai" | Invoke eval-specialist (quick mode) |
| "Status tổng quan?" | Read events.jsonl + sprint-current.md → summary |

### Slash commands (gợi ý, optional)

| Command | Tương đương |
|---------|-------------|
| `/new-feature <id>` | Trigger 4-phase flow cho feature mới |
| `/check [module]` | Invoke qa-reviewer |
| `/ship [module]` | Verify gates → devsecops deploy |
| `/eval [module]` | Invoke eval-specialist quick mode |
| `/status` | Read state → summary |
| `/adr` | Tech Lead drafts new ADR |

---

## 15. FOLDER STRUCTURE (v3)

```
nha-pho-training/
├── CLAUDE.md                        ← project context (you're reading)
├── .claude/
│   ├── settings.json                ← Claude Code permissions
│   ├── agents/                      ← 7 specialist agents
│   │   ├── tech-lead.md
│   │   ├── qa-reviewer.md
│   │   ├── ui-ux-designer.md
│   │   ├── frontend-engineer.md
│   │   ├── backend-engineer.md
│   │   ├── devsecops.md
│   │   └── eval-specialist.md
│   └── hooks/                       ← quality gate enforcement
│       ├── post-edit-flag.py
│       └── pre-push-gate.py
│
├── docs/
│   ├── PROCESS.md                   ← 4-phase flow
│   ├── EVENTS.md                    ← EDA taxonomy
│   ├── ATTRIBUTES.md                ← ABAC taxonomy
│   ├── adr/                         ← Architecture Decision Records
│   │   └── 001-*.md
│   ├── specs/                       ← per-feature tech specs (Tech Lead)
│   ├── design/                      ← per-feature design (UI/UX)
│   ├── test-plans/                  ← per-feature test plans (QA)
│   ├── test-cases/                  ← per-feature test cases (QA)
│   ├── api/                         ← API documentation (BE)
│   ├── design-system.md             ← UI tokens + components (UI/UX)
│   ├── runbook.md                   ← Incident response (DevSecOps)
│   └── sprint-current.md            ← Active sprint tracker
│
├── api/                             ← BE Engineer's domain
│   ├── chat.js
│   ├── upload.js
│   ├── save.js
│   ├── manifest.js
│   └── spec.js
│
├── data/
│   ├── modules.json                 ← FE Engineer's content domain
│   └── kb/                          ← Knowledge base markdown
│       └── nhapho.md
│
├── images/                          ← legacy local images (Blob preferred)
│
├── eval/                            ← Eval Specialist's domain
│   ├── run_eval.py
│   ├── test_cases.json
│   ├── trends.csv
│   ├── reports/                     ← historical eval reports
│   └── suggestions/                 ← KB/instruction tweak suggestions
│
├── logs/
│   └── events.jsonl                 ← EDA event log (append-only)
│
└── training-engine.html, admin-x7q9.html, index.html  ← FE Engineer's domain
```

---

*Last updated: 2026-05-20 | Version: v13*
