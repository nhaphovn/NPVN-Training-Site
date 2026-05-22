---
name: deploy-workflow
description: Vercel deploy must run from repo root (NPVN-Training-Site-main/), not from within the nha-pho-training-site/ subdirectory
metadata:
  type: feedback
---

**Deploy phải chạy từ thư mục cha (repo root), không phải từ trong subdirectory.**

**Why:** `npvn-training-site` Vercel project có `rootDirectory: "nha-pho-training-site"` trong settings (relative to repo root). Nếu chạy từ bên trong `nha-pho-training-site/`, Vercel CLI tạo path double: `nha-pho-training-site/nha-pho-training-site` → deploy fail với "path does not exist".

**How to apply:**

Deploy đúng:
```bash
cd c:\Users\MinhDZZ-PC\Downloads\NPVN-Training-Site-main\NPVN-Training-Site-main
npx vercel deploy --prod --scope technhaphovn-2541s-projects
```

`.vercel/project.json` cần có ở repo root (`NPVN-Training-Site-main/`) — đã được tạo (2026-05-22).

Git push, commit, tag → vẫn chạy từ trong `nha-pho-training-site/` bình thường. Chỉ `vercel deploy` phải chạy từ repo root.

**Production URL:** `https://npvn-training-site.vercel.app` (project duy nhất từ 2026-05-22)
