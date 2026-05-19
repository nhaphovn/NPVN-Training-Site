---
description: Full deploy — validate, commit, push, deploy, verify live. Cảnh báo trước khi push.
argument-hint: [commit message tùy chọn — mặc định auto-generate]
---

You will run the full deploy pipeline.

## Custom message (optional)
$ARGUMENTS

## Workflow

1. **Pre-flight** — invoke `content-validator`. If errors → HALT, do not proceed.

2. **Show changes**:
   ```bash
   git status
   git diff --stat data/modules.json
   ```

3. **Confirm with user** showing:
   - Files changed
   - Number of new/modified steps
   - Commit message (auto-generate if no $ARGUMENTS)

4. **If confirmed**, invoke `deploy-orchestrator` subagent

5. **Wait & verify**:
   - Show Vercel deploy URL
   - Wait 60 seconds
   - Curl production modules.json to confirm `lastUpdated` matches

6. **Final report**:
   ```
   🚀 Deploy thành công!
   
   📊 Summary:
     Commit:    <sha>
     Modules:   <list of changed>
     Steps:     <count>
   
   🔗 Live URLs:
     Home:      https://npvn-training-site.vercel.app/
     Module:    https://npvn-training-site.vercel.app/?module=<id>
   
   📋 Next:
     /eval  → kiểm tra chatbot quality
   ```

## Safety rules
- NEVER skip validator
- NEVER force push
- ALWAYS show diff before commit
- If user types "no" or "cancel" → abort cleanly
