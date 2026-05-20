---
description: Chạy chatbot eval — 50 test cases, LLM-as-judge, báo cáo điểm + suggest fix
argument-hint: [module_id để chỉ test 1 module — tiết kiệm cost]
---

You will run the chatbot evaluation pipeline.

## Scope
$ARGUMENTS (if empty, runs ALL 50 cases ~$0.05)

## Workflow

1. **Cost preview**:
   - All 50 cases: ~$0.05
   - Single module: ~$0.01 - $0.02
   - Ask "Tiếp tục không?" if running full eval

2. **Invoke `eval-runner` subagent** with scope

3. **Read eval/report.json** and show breakdown:
   ```
   📊 Eval Report
     Avg score:  X.X / 5.0
     Pass rate:  N/M
     Threshold:  3.5
     Deploy OK:  ✅/❌
   
   By module:
     ✅ dang_tin     4.5
     ✅ loc_kho      4.2
     ❌ ql_khach     3.1   ← needs attention
   ```

4. **For failing module(s)**, list top 3 worst cases with:
   - Question
   - Expected vs actual
   - Suggested KB or test_cases fix

5. **Save report**:
   - Always save to `eval/report.json`
   - Suggest commit if scores improved
