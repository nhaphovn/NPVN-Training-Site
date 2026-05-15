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

---

*Last updated: 2026-05-14 | Version: v13*
