---
description: Bắt đầu workflow tạo module mới — orchestrate Builder + Validator + ImageProcessor
argument-hint: <module_id> [vd: quan_ly_khach]
---

You will help PM create a new training module.

## Module ID requested
$ARGUMENTS

## Step-by-step orchestration

1. **Read CLAUDE.md** to refresh project conventions

2. **Check inputs available** in workspace:
   - Look for screenshots in `images/$ARGUMENTS/`
   - Look for hotspot JSON file (often `*.hotspots.json` or pasted in chat)
   - Look for step spec (often in chat or `.md` file)

3. **If any input missing**, ask PM:
   ```
   Để build module này, tôi cần 3 thứ:
   ① Screenshots (đã thấy: X files trong images/$ARGUMENTS/)
   ② Hotspot JSON từ PM Toolkit
   ③ Step Spec (tooltip text + guide content)
   
   Bạn paste ② và ③ vào chat hoặc cho biết file paths.
   ```

4. **Invoke `image-processor` agent** if raw images need resizing/renaming

5. **Invoke `module-builder` agent** with all 3 inputs to create JSON

6. **Invoke `content-validator` agent** to check the new module

7. **Summary report**:
   - Number of steps created
   - TODOs remaining
   - Validation result
   - Next suggested command (`/check` or `/ship`)
