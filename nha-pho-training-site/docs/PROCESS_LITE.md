# PROCESS_LITE.md — Pipeline rút gọn cho tiny changes

> Dành cho: tiny content changes — thay đổi ≤5 từ, 1 field, không đổi schema
> Full pipeline: xem docs/PROCESS.md

---

## Tiêu chí "tiny change"

Một change được phép dùng PROCESS_LITE nếu **tất cả** điều kiện sau đúng:

| # | Tiêu chí | Ví dụ |
|---|----------|-------|
| 1 | Thay đổi ≤5 từ trong 1 field duy nhất | sửa `ttText` từ 13 từ → 11 từ |
| 2 | Không thêm/xóa step, không đổi schema | không thêm field mới |
| 3 | Chỉ ảnh hưởng 1 module, 1 step | không sửa nhiều step cùng lúc |
| 4 | Không thay đổi hotspot tọa độ (`hs`) | tọa độ đã được PM verify |
| 5 | PM có thể tự verify bằng mắt trong <1 phút | không cần sequence test |

Nếu có bất kỳ điều kiện nào **không** đúng → dùng full pipeline (PROCESS.md).

---

## Lightweight Pipeline — 3 bước

```
Step 1 — PM request (2 phút)
  PM mô tả change ngắn gọn:
  "Sửa module [X], step [N], field [Y]: đổi từ «...» thành «...»"

Step 2 — Tech Lead / FE implement trực tiếp (3 phút)
  • Sửa data/modules.json (hoặc qua admin)
  • Verify: đúng field, đúng step, đúng module
  • Không commit tay — push qua admin "Lưu lên site"
  
Step 3 — PM verify trên prod (2 phút)
  • Mở training-engine.html?module=[X]
  • Xác nhận text hiển thị đúng
  • "OK" → done (không cần file QA plan)
```

**Tổng thời gian mục tiêu: ~7 phút** (full pipeline: ~15 phút)

---

## Không cần trong PROCESS_LITE

- ❌ Tech spec doc (docs/specs/)
- ❌ QA test plan viết trước
- ❌ QA test cases JSON
- ❌ ADR
- ❌ DevSecOps canary

---

## Vẫn bắt buộc

- ✅ PM confirm trước khi change (Step 1 — không tự ý sửa)
- ✅ PM verify trên prod sau khi deploy (Step 3)
- ✅ Validate: `ttTitle` ≤5 từ, `ttText` ≤15 từ
- ✅ 1 sự kiện EDA tối giản (Tech Lead append sau):
  ```json
  {"type":"content.updated","actor":"pm","target":{"module":"X","step":N},"payload":{"field":"Y","change":"tiny_edit"}}
  ```

---

## Ví dụ đúng (dùng PROCESS_LITE)

> PM: "Sửa dang_tin step 5, ttText: bỏ chữ «nhập» đầu câu"
> → 1 từ, 1 field, 1 step → PROCESS_LITE ✅

## Ví dụ sai (phải dùng full pipeline)

> PM: "Sửa lại cả phần guide của 3 bước đầu dang_tin"
> → nhiều steps → full pipeline ❌

> PM: "Thêm field mới vào step schema"
> → schema change → full pipeline ❌

---

*Owner: Tech Lead | Tham chiếu: docs/PROCESS.md §Phase 2*
