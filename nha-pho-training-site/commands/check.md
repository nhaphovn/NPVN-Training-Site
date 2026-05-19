---
description: Validate toàn bộ data/modules.json — báo cáo lỗi và TODO còn lại
argument-hint: [module_id optional — vd: dang_tin để chỉ check 1 module]
---

You will run a full content validation pass.

## Scope
$ARGUMENTS (if empty, validate ALL modules)

## Workflow

1. **Invoke `content-validator` subagent** with the scope above

2. **Show validation report** with:
   - ❌ ERRORS grouped by module
   - ⚠️ WARNINGS grouped by module
   - ✅ PASS count per module

3. **Auto-fix offer**:
   - List which WARNINGS can be auto-fixed (e.g., scrollY drift)
   - Ask: "Muốn tôi auto-fix N warnings không?"
   - If yes, invoke validator with `--fix` flag

4. **Block list**:
   - List all ERROR items that need manual content rewrite
   - For each, suggest a fix:
     ```
     [dang_tin/step 7] ttText 18 words
     Current: "Nhấn vào nút này để mở dropdown chọn loại hình..."
     Suggest: "Nhấn để mở danh sách loại hình"  (8 words ✓)
     ```

5. **Final**: Report deploy-readiness:
   - 0 errors → "✅ Sẵn sàng /ship"
   - Errors exist → "❌ Sửa N lỗi trước khi /ship"
