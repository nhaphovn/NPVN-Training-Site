---
description: Tổng quan project — modules đã có, TODO còn lại, last deploy, eval score gần nhất
---

You will produce a comprehensive project status dashboard.

## Workflow

1. **Read project state**:
   - `git log -5 --oneline` (last commits)
   - `data/modules.json` → list modules + step count
   - `eval/report.json` (if exists) → last eval score
   - `git status` → uncommitted changes

2. **Format dashboard**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🏠 NHÀ PHỐ TRAINING — STATUS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   
   📦 Modules: X (total Y steps)
     ✅ dang_tin       11b   PASS
     ✅ loc_kho        12b   PASS
     ⚠️  quan_ly_khach  10b   3 TODO
     ❌ chat            8b   ttText > 15
   
   🔄 Git Status
     Branch:        main
     Uncommitted:   N files
     Last commit:   "feat: add bo_suu_tap" (2h ago)
   
   📊 Last Eval (3 days ago)
     Avg: 4.2/5.0  Pass: 43/50  ✅ Deploy OK
   
   ⚠️  Pending Actions
     - 3 TODOs trong quan_ly_khach
     - 2 ttText vượt limit trong chat
     - Eval cũ — chạy lại /eval
   
   💡 Suggested next:
     /check ql_khach    →  fix TODOs
     /ship              →  deploy current changes
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

3. Always end with **1-2 concrete next action commands** the PM can run
