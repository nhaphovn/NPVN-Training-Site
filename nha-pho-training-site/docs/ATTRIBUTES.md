# ATTRIBUTES.md — Attribute Taxonomy (ABAC seed)

> Mỗi module + content + user (future) đều có `attributes` block.
> Filtering, routing, personalization đều dựa vào đây.
> Gắn từ đầu, dùng từ khi scale.

---

## Module attributes

Mỗi module trong `data/modules.json` có:

```json
"attributes": {
  "industry":  "real_estate",
  "tenant":    "nhapho",
  "role":      ["dau_chu", "chuyen_vien"],
  "level":     "beginner",
  "language":  "vi",
  "platform":  ["ios", "android", "web"],
  "tags":      ["dang_tin", "form", "bds"]
}
```

### Allowed values

#### industry (single)
- `real_estate`
- `insurance`
- `securities`
- `recruitment`
- `marketplace`
- (extend as we onboard)

#### tenant (single)
Same as folder/key: `nhapho`, `baohiem_xyz`, ...

#### role (multi)
Industry-specific. For real estate:
- `hoc_vien`, `chuyen_vien`, `dau_chu`, `tro_ly`, `pho_phong`, `truong_phong`, `admin`

#### level (single)
- `beginner` — new to app
- `intermediate` — knows basics
- `advanced` — power user
- `admin` — for admin/management functions

#### language (single)
- `vi` (default)
- `en` (future)

#### platform (multi)
- `ios`, `android`, `web`, `tablet`

#### tags (multi, free-form but curated)
Functional categories that cut across role/level:
- `dang_tin`, `quan_ly_khach`, `lich_hen`, `bao_cao`, `chat`, `auth`, ...

---

## Content attributes (within modules)

Step-level attributes (less common, only when needed):
```json
{
  "id": 1,
  "name": "...",
  "attributes": {
    "difficulty": "easy",
    "required":   true,
    "estimated_seconds": 30
  }
}
```

---

## User attributes (Phase 4 placeholder)

```json
{
  "userId":     "user_abc",
  "attributes": {
    "tenant":      "nhapho",
    "industry":    "real_estate",
    "role":        "chuyen_vien",
    "level":       "intermediate",
    "language":    "vi",
    "platform":    "ios",
    "joinedAt":    "...",
    "completedModules": ["dang_tin", "loc_kho"]
  }
}
```

---

## ABAC rules (future enforcement)

When we add learner-facing routing:

```js
// Pseudo
function canAccess(user, module) {
  if (user.attributes.tenant !== module.attributes.tenant) return false;
  if (!module.attributes.role.some(r => user.attributes.role === r)) return false;
  if (module.attributes.level > user.attributes.level) return false;
  return true;
}
```

For now (single tenant, no learner accounts):
- All modules visible to all visitors
- But TAG everything correctly so future filter works

---

## Suggested module catalog for next phase (real_estate)

For PM planning ahead:

| module | role | level | tags |
|--------|------|-------|------|
| dang_tin | dau_chu | intermediate | dang_tin, form, bds |
| loc_kho | hoc_vien, chuyen_vien | beginner | search, kho_tai_nguyen |
| bo_suu_tap | hoc_vien, chuyen_vien | beginner | bookmark, collection |
| kho_ca_nhan | dau_chu | intermediate | manage, own_content |
| lich_hen | chuyen_vien | beginner | calendar, schedule |
| quan_ly_khach | chuyen_vien | intermediate | crm, lead_management |
| quan_ly_khach_cua_cv | truong_phong | advanced | crm, oversight |
| bao_cao | truong_phong | advanced | analytics, reporting |
| chat_groups | all | beginner | chat, communication |

---

## Versioning

Attributes schema breaking changes:
1. Add new field as optional (won't break old)
2. Use in code with default
3. Migrate existing data in batch
4. Deprecate old field in next phase

---

## Roadmap

| Phase | ABAC capability |
|-------|-----------------|
| Now (Phase 0-1) | Tag content, no enforcement yet |
| Phase 2 (multi-tenant) | Tenant filter in engine + admin |
| Phase 3 (learner) | Role/level routing per user |
| Phase 4 (personalization) | Recommendation engine using attributes |
