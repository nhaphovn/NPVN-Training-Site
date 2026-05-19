---
description: Bắt đầu workflow tạo module mới — fetch assets từ Vercel Blob, orchestrate Builder + Validator
argument-hint: <module_id> [vd: quan_ly_ung_vien]
---

You will orchestrate creation of a new training module using assets stored in Vercel Blob.

## Module ID
$ARGUMENTS

## Step-by-step

### 1. Read project conventions
Read `CLAUDE.md` to refresh project rules.

### 2. Fetch manifest from Vercel Blob
```bash
curl -s "https://npvn-training-site.vercel.app/api/manifest?module=$ARGUMENTS" | python -m json.tool
```

Or in Bash:
```bash
MANIFEST=$(curl -s "https://npvn-training-site.vercel.app/api/manifest?module=$ARGUMENTS")
echo "$MANIFEST" | head -50
```

### 3. Check inventory
Parse the response and check:
- `imageCount` → how many screenshots are in Blob
- `hasHotspots` → is hotspot JSON uploaded?
- `hasStepSpec` → is step spec uploaded?

### 4. Report status to PM
```
📊 Inventory cho module "$ARGUMENTS":
   Screenshots:    N ảnh trong Blob
   Hotspot JSON:   ✅ / ❌
   Step Spec:      ✅ / ❌
```

### 5. Handle missing inputs

**Nếu thiếu ảnh** → tell PM:
> Mở https://npvn-training-site.vercel.app/image-manager.html
> Upload ảnh với tên đúng convention: `{module}_b{NN}_{state}.jpg`
> Refresh manifest khi xong.

**Nếu thiếu hotspot JSON** → tell PM:
> Trong image-manager, vẽ hotspot cho từng bước
> Nhấn "💾 Save spec to cloud" để upload JSON lên Blob

**Nếu thiếu step spec** → ask PM:
> Paste step spec vào chat HOẶC upload qua:
> POST /api/spec?module=$ARGUMENTS&kind=stepspec với JSON body

### 6. When all inputs ready
Invoke `module-builder` subagent với module ID = $ARGUMENTS.

### 7. After builder completes
Invoke `content-validator` subagent.

### 8. Final report
```
✅ Module $ARGUMENTS created
   Steps:     N (M có TODO)
   Validator: PASS / N errors
   
🔗 Preview: https://npvn-training-site.vercel.app/?module=$ARGUMENTS
   (chưa deploy — cần /ship để go live)

📋 Next steps:
   /check $ARGUMENTS   →  validate
   /ship               →  deploy
```
