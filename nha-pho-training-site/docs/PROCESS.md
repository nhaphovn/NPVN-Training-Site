# PROCESS.md — Team Agent Workflow

> Mirror sơ đồ product team thật. No bypass, no shortcut.

---

## 4-Phase Flow

```
┌─ PHASE 1: REQUIREMENT ──────────────────────────────────────────────┐
│                                                                       │
│  PM             ──Business Requirements──>  Tech Lead                 │
│                                                  │                    │
│                                                  ↓                    │
│                                            Analyze + Initial Review   │
│                                                  │                    │
│                                                  ↓ pass               │
│  Tech Lead   ←──participate────────  UI/UX Designer (sketch wireframe)│
│                                                  │                    │
│                                                  ↓                    │
│                                            Requirement Review         │
│                              (UI/UX + QA + FE + BE + DevSecOps        │
│                               participate)                            │
│                                                  │                    │
│                                                  ↓ pass               │
│                                            PRD + ADR                  │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ↓
┌─ PHASE 2: DEVELOPMENT (parallel where possible) ───────────────────┐
│                                                                       │
│  UI/UX           Tech Lead          QA Reviewer                       │
│   │                  │                  │                             │
│   ↓                  ↓                  ↓                             │
│  Conduct UI       Design tech       Design test                       │
│   design          solution          cases                             │
│   │                  │                  │                             │
│   ↓                  ↓                  ↓                             │
│  Review design   Review tech       Review test                        │
│                  solution          cases                              │
│   │                  │                  │                             │
│   ↓ pass             ↓ pass             ↓ pass                        │
│  UI drafts       Tech docs         Test plan                          │
│   │                  │                  │                             │
│   └────────┬─────────┘                  │                             │
│            ↓                            │                             │
│       Arrange dev schedule              │                             │
│            ↓                            │                             │
│   FE Engineer + BE Engineer (parallel)  │                             │
│            ↓                            │                             │
│       Self-testing                      │                             │
│            ↓ pass                       │                             │
│       Propose testing  ─────────────────┘                             │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ↓
┌─ PHASE 3: TESTING ────────────────────────────────────────────────────┐
│                                                                       │
│       QA Reviewer ────────> Conduct testing                           │
│                                  │                                    │
│                          ┌───────┴───────┐                            │
│                          ↓ fail          ↓ pass                       │
│                       Fix issues         │                            │
│                       (FE/BE)            │                            │
│                          ↑               │                            │
│                          └───────────────┘                            │
│                                          ↓                            │
│       PM ────────────────────────> Requirement Acceptance Test (UAT)  │
│                                          │                            │
│                          ┌───────────────┤                            │
│                          ↓ fail          ↓ pass                       │
│                       Fix issues         │                            │
│                          ↑               ↓                            │
│                          └────  UI/UX  ────> Design Acceptance Test   │
│                                              │                        │
│                                              ↓ pass                   │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ↓
┌─ PHASE 4: RELEASE ────────────────────────────────────────────────────┐
│                                                                       │
│       FE + BE  ────────> Merge code                                   │
│                              ↓                                        │
│       DevSecOps ────────> Deploy to canary                            │
│                              ↓                                        │
│                          Monitor 30 min                               │
│                              ↓ pass                                   │
│                          Full release                                 │
│                              ↓                                        │
│       Eval Specialist ──> Monitor metrics, suggest improvements       │
│                              ↓                                        │
│                          Feedback to PM ───────> next requirement     │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Quality gates (HARD)

| Gate | Who | Block if | Result |
|------|-----|----------|--------|
| 1. Requirement review | Tech Lead | Spec unclear, infeasible | Send back to PM |
| 2. Solution review | Tech Lead | Design or tech spec flawed | Send back to UI/UX or Tech Lead |
| 3. Code ready | FE/BE self-test | Self-test < 100% | Fix before QA |
| 4. QA test | QA Reviewer | Critical bugs, < 95% pass | Send back to FE/BE |
| 5. UAT | PM | Doesn't match requirement | Send back to FE/BE or QA |
| 6. Design acceptance | UI/UX | Visual drift > 4px or color off | Send back to FE |
| 7. Pre-deploy | DevSecOps | Tests, eval, build fail | Halt deploy |
| 8. Post-deploy monitor | DevSecOps | Error spike, latency drift | Rollback |

---

## Agent invocation order

For a typical new module/feature:

```
1. PM cấp requirement trong VS Code
2. Tech Lead (default) reads → analyzes → invokes:
3.   ui-ux-designer (wireframe)
4. PM + Tech Lead review wireframe
5. Tech Lead writes tech spec, in parallel invoke:
6.   qa-reviewer (test plan + cases)  ← BEFORE coding
7.   ui-ux-designer (Figma high-fidelity)
8. Tech Lead reviews QA plan + Figma
9. After approval, invoke in parallel:
10.   frontend-engineer (implement UI)
11.   backend-engineer (implement API if needed)
12. FE/BE self-test → emit module.implemented event
13. Tech Lead invokes:
14.   qa-reviewer (execute test cases)
15. QA reports → if pass, Tech Lead invokes:
16.   ui-ux-designer (design acceptance test)
17. PM does UAT (manual, in browser)
18. All pass → Tech Lead invokes:
19.   devsecops (canary deploy)
20. DevSecOps monitors → full release
21. Tech Lead invokes:
22.   eval-specialist (measure new module on chatbot)
23. Loop back to PM with metrics
```

---

## Anti-patterns (NEVER do)

❌ FE Engineer modifying api/*.js to "make it work quickly"
❌ Tech Lead skipping ADR for "small" decisions
❌ QA writing test cases AFTER code is ready (bias!)
❌ DevSecOps deploying without canary "because it's small"
❌ Eval Specialist applying KB changes directly
❌ Any agent operating outside its boundaries

---

## Working with the system

PM in VS Code Claude Code:
```
> Tạo module mới Lịch hẹn
```

Tech Lead (default agent) responds:
```
Đã hiểu. Plan:
1. Đọc PROCESS.md
2. Analyze requirement: PM có spec gì sẵn? Ảnh chưa?
3. ...
```

PM doesn't have to invoke agents manually — Tech Lead orchestrates.
If PM wants direct control:
```
> Invoke ui-ux-designer to sketch wireframe for Lịch hẹn
```
