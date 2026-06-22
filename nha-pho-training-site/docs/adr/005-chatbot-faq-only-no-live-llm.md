# ADR-005: Chatbot là FAQ-only — không gọi LLM lúc runtime

> Status: **Accepted**
> Author: Tech Lead
> Date: 2026-06-22
> Stakeholders: PM, Backend Engineer, Eval Specialist

---

## Context

Chatbot ban đầu (xem `api/chat.js`, commit `fe7b915` "FAQ-first chatbot") được build theo mô hình: FAQ tier 0 (free) → nếu miss → tự động gọi LLM thật (`/api/chat` → Anthropic API), giới hạn bằng quota nhiều lớp (20 lần/user/ngày, 10 lần/giờ/IP, trần global $5/tháng) + circuit breaker.

PM xác nhận lại (2026-06-22): quyết định gốc thực ra là **chatbot không được gọi LLM lúc runtime dưới bất kỳ hình thức nào** — kể cả opt-in (có lúc Tech Lead từng đề xuất nút "Hỏi AI" cho user chủ động bấm, PM bác bỏ ngay). Lý do:

1. User có thể spam chat nhiều câu khác nhau (không cần lặp lại) — quota theo số lần/ngày vẫn để lộ chi phí LLM thật cho mỗi user, không kiểm soát được tổng chi phí khi scale.
2. Sản phẩm không nên lộ khái niệm "AI" cho end-user — đây là 1 trợ lý tra cứu thông tin có sẵn (FAQ), không phải chatbot AI mở.
3. Toàn bộ câu hỏi user có thể hỏi (cả về cách dùng app, và cả câu hỏi ngoài lề như chào hỏi/khiếu nại/hỏi giá) đều có thể dự đoán và chuẩn bị câu trả lời mẫu trước — không cần xử lý real-time bằng LLM.

**Quyết định này chưa từng được ghi ADR khi nó được đưa ra lần đầu** — dẫn tới một audit toàn diện sau đó (2026-06-22) không phát hiện được sai lệch giữa code (quota-based, vẫn tự gọi LLM) và quyết định thật (FAQ-only tuyệt đối), vì audit chỉ kiểm tra code có đúng với chính nó không, không có gì để đối chiếu quyết định nghiệp vụ. ADR này được viết để lấp lỗ hổng đó.

---

## Decision

**Chatbot trên `training-engine.html` chỉ tra cứu `data/faq.json` — không bao giờ gọi `/api/chat` (LLM) lúc runtime, dưới bất kỳ hình thức nào (tự động hay opt-in qua nút bấm).**

### Kiến trúc

```
User gõ câu hỏi
  └─ matchFAQ(question) — 1 pool toàn cục: FAQ.global + tất cả FAQ.modules.*
       ├─ Match (score ≥ threshold) → trả lời ngay từ FAQ
       └─ Không match → trả mẫu câu cố định:
            "Câu này chưa có trong hệ thống hỗ trợ. Bạn thử hỏi lại bằng
             cách khác, hoặc liên hệ nhóm hỗ trợ để được giải đáp nhé!"
            (KHÔNG có lựa chọn gọi AI nào hiển thị cho user)
```

### FAQ phải cover 2 loại câu hỏi

1. **Câu hỏi về cách dùng app** — `FAQ.modules.<module_id>`, gắn với từng content module cụ thể (vd: "cách đổi mật khẩu" → `tai_khoan_ca_nhan`).
2. **Câu hỏi ngoài hướng dẫn** — `FAQ.global`, các pattern lặp lại không liên quan tour cụ thể: chào hỏi, hỏi chatbot là ai/bot hay người, cảm ơn, hỏi giá/tư vấn pháp lý/đầu tư (phải từ chối lịch sự), khiếu nại/phản hồi lỗi, muốn gặp người hỗ trợ thật. Thêm 7 entry (g016–g022) ngày 2026-06-22.

### LLM (Claude/Anthropic) chỉ được dùng OFFLINE, một lần, để build/mở rộng FAQ

Khi cần thêm coverage cho module mới hoặc câu hỏi mới phát hiện qua eval (`eval/run_eval.py`), Tech Lead/Eval Specialist dùng LLM (qua phiên làm việc với Claude Code, hoặc script riêng) để soạn câu trả lời mẫu **grounded từ guide content / KB thật có sẵn** — sau đó ghi tay vào `data/faq.json`, review, publish. Đây là quy trình **build-time**, không phải runtime. `api/chat.js` (endpoint gọi Anthropic) được giữ lại trong code làm hạ tầng cho quy trình này, nhưng **không có route nào trong `training-engine.html` gọi tới nó nữa**.

### Quy tắc khi tạo FAQ — không bịa

- Câu trả lời PHẢI lấy từ guide/KB content đã có, đã được duyệt (không tự suy diễn thông tin chưa xác nhận — vd: không tự ghi hotline nếu không có trong KB, xem incident "1900 0266" bịa trong `eval/run_eval.py` đã fix ngày 2026-06-22).
- Module chưa có guide content thật (status WIP) → KHÔNG tạo FAQ cho module đó, đợi PM cung cấp Step Spec.

---

## Alternatives considered

| Lựa chọn | Vì sao không chọn |
|---|---|
| Quota-based (20 lần/ngày/user) tự động gọi LLM khi FAQ miss | Đã implement rồi loại bỏ (2026-06-22) — không chặn được tổng chi phí khi scale, lộ "AI" ra product |
| Opt-in: nút "Hỏi AI" cho user chủ động bấm khi FAQ miss | Implement rồi loại bỏ ngay (2026-06-22) — PM bác bỏ, vẫn lộ khái niệm AI và vẫn có rủi ro cost nếu nhiều user cùng bấm |
| FAQ-only tuyệt đối, LLM offline build-time only | **Chọn** — chi phí LLM cố định, dự đoán được (chỉ phát sinh khi Tech Lead chủ động mở rộng FAQ), không lộ AI, trải nghiệm vẫn tốt nếu FAQ đủ rộng |

---

## Consequences

**Được:**
- Chi phí LLM = 0 lúc runtime, không phụ thuộc số lượng user hay hành vi spam.
- Trải nghiệm nhất quán — câu trả lời đã được review trước, không có rủi ro hallucination real-time.
- Đơn giản hóa code đáng kể (`training-engine.html` mất ~210 dòng quota/circuit-breaker/LLM-call logic).

**Đánh đổi:**
- Câu hỏi thật sự mới, chưa lường trước → chỉ nhận được mẫu câu chung, không có câu trả lời cụ thể ngay. Cần theo dõi câu hỏi miss (chưa có cơ chế log lại — xem mục Status updates) để biết khi nào cần mở rộng FAQ.
- FAQ coverage phải được duy trì chủ động — module mới PHẢI có FAQ trước khi release (xem `docs/test-plans/admin_image_upload.md` pattern tương tự cho ảnh, cần làm thêm checklist FAQ).

---

## Status updates

- 2026-06-22: ADR viết sau khi PM xác nhận lại quyết định; code đã align (`training-engine.html` commit `063ca06`); thêm FAQ cho 5 module (commit `206684a`) + 7 entry off-topic toàn cục.
- TODO: chưa có cơ chế log câu hỏi FAQ-miss để biết nên mở rộng FAQ ở đâu tiếp theo — đề xuất Eval Specialist thêm vào `logs/events.jsonl` (event `chat.faq_miss`) trong sprint sau.
