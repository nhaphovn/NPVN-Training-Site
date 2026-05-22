---
name: version-tracking
description: PM may request launching old versions or developing from an old git branch; use annotated git tags
metadata:
  type: feedback
---

PM có thể yêu cầu rollback hoặc develop từ một version cũ. Dùng git annotated tags để đánh dấu mỗi checkpoint.

**Why:** Trong điều kiện thực tế, PM có thể muốn quay lại version ổn định hoặc thử hướng phát triển khác từ điểm cũ.

**How to apply:**
- Tag mỗi sprint milestone: `git tag v<N>-sprint<S>-<item> <commit> -m "<desc>"`
- Khi PM muốn rollback: `git checkout <tag>` để xem, hoặc `git checkout -b branch-from-<tag> <tag>` để phát triển tiếp
- Khi PM muốn deploy version cũ: checkout tag → `npx vercel deploy --prod --yes`
- KHÔNG dùng git reset --hard trên main — luôn tạo branch mới từ tag cũ

## Tags hiện có

| Tag | Commit | Nội dung |
|-----|--------|---------|
| `v6-sprint6-item1` | `9df65e7` | Sprint 6 Item 1: Vietnamese search, auth simplification, toolbar fix |
