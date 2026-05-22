# Tech Spec — Chat: Full Module Context Injection
> Sprint 7 | Item 1 | Owner: BE (api/chat.js) + FE (training-engine.html)
> Status: APPROVED — ready for QA test plan

---

## Problem

Hiện tại `api/chat.js` chỉ nhận `stepGuide` của bước đang xem. Khi user hỏi chéo bước ("bước trước làm gì?", "module này gồm mấy bước?"), AI không có dữ liệu để trả lời chính xác.

## Solution

Client gửi thêm `allSteps` — toàn bộ steps của module hiện tại.  
Server inject toàn bộ steps vào system prompt dưới dạng knowledge reference, đánh dấu bước đang xem.

---

## API Changes

### Request payload (thêm 1 field)

```json
{
  "messages": [...],
  "moduleId": "dang_tin",
  "moduleName": "Đăng tin BĐS",
  "role": "hoc_vien",
  "step": 3,
  "stepName": "Chọn loại hình BĐS",
  "stepTitle": "Bước 3 — Chọn loại hình BĐS",
  "stepGuide": [...],
  "allSteps": [
    {
      "id": 1,
      "name": "Mở tính năng đăng tin",
      "title": "Bước 1 — Mở tính năng đăng tin",
      "guide": [{ "title": "Cách vào", "body": "Từ màn hình chính..." }]
    },
    {
      "id": 2,
      "name": "Điền thông tin",
      "title": "Bước 2 — Điền thông tin cơ bản",
      "guide": [...]
    }
  ]
}
```

**Field `allSteps`:** array of `{ id, name, title, guide[] }` — tất cả steps của module.  
**Field `stepGuide`:** giữ nguyên (backward compat) — là guide của bước hiện tại.  
**Field `step`:** 1-indexed step number đang xem.

### Validation

- `allSteps` là optional. Nếu absent/null → fallback về behavior cũ (chỉ dùng `stepGuide`).
- `allSteps.length` tối đa 30. Nếu vượt → 400 `allSteps_too_long`.
- Mỗi step trong `allSteps`: phải có `id`, `name`, `title`. `guide` optional.

---

## System Prompt Changes

### Trước (hiện tại)

```
# Mẹo trong bước này:
• Tiêu đề: Nội dung...
```

### Sau

```
# Tổng quan module: Đăng tin BĐS (11 bước)
## Bước 1 — Mở tính năng đăng tin
• Cách vào: Từ màn hình chính bấm vào icon Đăng tin...

## Bước 2 — Điền thông tin cơ bản
• Thông tin bắt buộc: Loại hình, diện tích, giá...

## Bước 3 — Chọn loại hình BĐS  ← ĐANG XEM
• Loại hình: Chọn Nhà phố / Chung cư / Đất nền...

...

# Bước người dùng đang xem: Bước 3 — Chọn loại hình BĐS
```

**Rules:**
- Bước đang xem được đánh dấu `← ĐANG XEM` trong danh sách
- Section `# Bước người dùng đang xem` lặp lại ở cuối để model ưu tiên context đó
- Nếu step không có `guide` → bỏ qua, không hiển thị dòng trống
- Nếu `allSteps` absent → fallback giữ nguyên section `# Mẹo trong bước này`

---

## Token Budget

| Trường hợp | Ước tính tokens |
|-----------|----------------|
| Module 11 bước, mỗi bước 2 guide items (~20 words/item) | ~800 tokens |
| Module 12 bước, mỗi bước 4 guide items | ~1600 tokens |
| Max expected | ~2000 tokens |

Haiku context window: 200k tokens → không có risk overflow.  
Cost tăng: ~800 tokens system prompt thêm = $0.000025/request (negligible).

---

## FE Changes (training-engine.html)

Trong `sendChat()`, thêm `allSteps` vào payload:

```js
// Collect all steps: id, name, title, guide only (exclude hotspot/img data)
const allSteps = (STATE.module?.steps || []).map(s => ({
  id: s.id,
  name: s.name,
  title: s.title,
  guide: s.guide || [],
}));

const payload = {
  messages: STATE.history.slice(-8),
  moduleId: STATE.module?.id,
  moduleName: STATE.module?.name,
  role: STATE.role,
  step: STATE.stepIdx + 1,
  stepName: s.name,
  stepTitle: s.title,
  stepGuide: s.guide || [],
  allSteps,               // ← NEW
};
```

---

## BE Changes (api/chat.js)

### 1. Validate allSteps

```js
const { messages, moduleId, moduleName, role, step, stepName, stepTitle, stepGuide, allSteps } = body;

if (allSteps !== undefined && allSteps !== null) {
  if (!Array.isArray(allSteps)) return err(400, 'allSteps must be array');
  if (allSteps.length > 30) return err(400, 'allSteps_too_long');
}
```

### 2. Update buildSystemPrompt()

```js
function buildSystemPrompt({ moduleName, role, step, stepName, stepTitle, stepGuide, allSteps }) {
  let knowledgeSection = '';

  if (Array.isArray(allSteps) && allSteps.length > 0) {
    const lines = [`# Tổng quan module: ${moduleName} (${allSteps.length} bước)`];
    for (const s of allSteps) {
      const marker = s.id === step ? ' ← ĐANG XEM' : '';
      lines.push(`## Bước ${s.id} — ${s.name}${marker}`);
      if (Array.isArray(s.guide) && s.guide.length > 0) {
        for (const g of s.guide) {
          if (g.title && g.body) lines.push(`• ${g.title}: ${g.body}`);
        }
      }
    }
    lines.push(`\n# Bước người dùng đang xem: Bước ${step} — ${stepName}`);
    knowledgeSection = lines.join('\n');
  } else {
    // Fallback: current behavior
    const guideLines = (stepGuide || [])
      .filter(g => g.title && g.body)
      .map(g => `• ${g.title}: ${g.body}`)
      .join('\n');
    knowledgeSection = guideLines
      ? `# Mẹo trong bước này:\n${guideLines}`
      : '';
  }

  return BASE_PROMPT
    .replace('{moduleName}', moduleName || '')
    .replace('{role}', role || '')
    .replace('{step}', step || '')
    .replace('{stepName}', stepName || '')
    .replace('{stepTitle}', stepTitle || '')
    + '\n\n' + knowledgeSection;
}
```

---

## Backward Compatibility

- `allSteps` absent → fallback exact behavior hiện tại. Không breaking.
- Old clients (nếu có) tiếp tục hoạt động bình thường.

---

## Acceptance Criteria

1. User hỏi "module này có mấy bước?" → AI trả lời đúng số bước
2. User ở bước 5 hỏi "bước 2 làm gì?" → AI trả lời đúng nội dung bước 2
3. User ở bước 1 hỏi "bước cuối cùng là gì?" → AI biết và trả lời đúng
4. Nếu `allSteps` absent → behavior cũ không bị ảnh hưởng (backward compat)
5. `allSteps.length > 30` → 400 error
6. Module không có steps → chat vẫn hoạt động bình thường

---

*Spec owner: Tech Lead | Date: 2026-05-22*
