# Tech Spec — Chat: Token Budget Rate Limiting
> Sprint 7 | Item 2 | Owner: BE (api/chat.js) + FE (training-engine.html)
> Status: APPROVED — ready for QA test plan

---

## Problem

Rate limiting hiện tại đếm số tin nhắn (10/giờ · 30/ngày). Hai vấn đề:

1. **In-memory fallback không persistent** — reset mỗi cold start Vercel Edge → user bypass giới hạn sau vài phút
2. **Message count không phản ánh cost** — tin ngắn "ok" và tin dài 500 ký tự tốn cùng 1 slot → không công bằng, không kiểm soát được chi phí API

## Solution

Thay message count bằng **token budget**:
- Mỗi request Anthropic trả về `usage.input_tokens` + `usage.output_tokens`
- Cộng dồn token thực tế vào counter per-IP/hour, per-IP/day, global/day
- Pre-check budget trước khi gọi Anthropic (dùng ước tính nhanh)
- Post-increment bằng actual tokens từ response

## Token Budget Defaults

| Counter | Default | Env var override |
|---------|---------|-----------------|
| Per-IP / giờ | 10,000 tokens | `HOURLY_TOKEN_CAP` |
| Per-IP / ngày | 40,000 tokens | `DAILY_TOKEN_CAP_USER` |
| Global / ngày | 500,000 tokens | `DAILY_TOKEN_GLOBAL` |

**Tham khảo:** tin nhắn trung bình ~150 input tokens + ~200 output tokens ≈ 350 tokens/tin.
- 10,000/giờ ≈ 28 tin/giờ (thoải mái hơn giới hạn cũ 10 tin)
- 40,000/ngày ≈ 114 tin/ngày (thoải mái hơn 30 tin/ngày)
- Global 500,000/ngày ≈ 1,400 tin/ngày (tốt hơn DAILY_GLOBAL_CAP=500 cũ)

---

## BE Changes (api/chat.js)

### 1. Env vars mới

```js
const HOURLY_TOKEN_CAP  = parseInt(process.env.HOURLY_TOKEN_CAP   || '10000', 10);
const DAILY_USER_CAP    = parseInt(process.env.DAILY_TOKEN_CAP_USER || '40000', 10);
const DAILY_GLOBAL_CAP  = parseInt(process.env.DAILY_TOKEN_GLOBAL  || '500000', 10);
```

Xoá: `DAILY_GLOBAL_CAP` cũ (message-based).

### 2. Thay `kvIncr` bằng `kvAdd(key, amount, ttlSec)`

```js
async function kvAdd(key, amount, ttlSec) {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const res = await fetch(`${UPSTASH_URL}/pipeline`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify([
          ['INCRBY', key, String(amount)],
          ['EXPIRE', key, String(ttlSec)],
        ]),
      });
      const data = await res.json();
      return data?.[0]?.result ?? amount;
    } catch {
      return amount; // fail-open
    }
  }
  // In-memory fallback
  const now = Date.now();
  const entry = memCache.get(key);
  if (!entry || entry.expiresAt < now) {
    memCache.set(key, { count: amount, expiresAt: now + ttlSec * 1000 });
    return amount;
  }
  entry.count += amount;
  return entry.count;
}

async function kvGet(key) {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(key)}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      });
      const data = await res.json();
      return parseInt(data?.result || '0', 10);
    } catch { return 0; }
  }
  const now = Date.now();
  const entry = memCache.get(key);
  if (!entry || entry.expiresAt < now) return 0;
  return entry.count;
}
```

### 3. Pre-check logic (trước khi gọi Anthropic)

Ước tính input tokens = `ceil(lastMsg.content.length / 4)` + `ceil(systemPrompt.length / 4)`.
Không cần chính xác — chỉ cần đủ để reject request sẽ vượt budget rõ ràng.

```js
const estimatedInputTokens = Math.ceil((lastMsg.content.length + systemPrompt.length) / 4);
const MIN_OUTPUT_TOKENS = 50; // worst case output lower bound
const estimatedCost = estimatedInputTokens + MIN_OUTPUT_TOKENS;

const keyHour   = `tb:ip:${ip}:h`;
const keyDay    = `tb:ip:${ip}:d`;
const keyGlobal = `tb:global:${today}`;

const [hourUsed, dayUsed, globalUsed] = await Promise.all([
  kvGet(keyHour),
  kvGet(keyDay),
  kvGet(keyGlobal),
]);

if (hourUsed + estimatedCost > HOURLY_TOKEN_CAP) {
  return json({ error: 'rate_limit_hour', message: 'Bạn hỏi hơi nhiều rồi 🐢 (giới hạn theo dung lượng/giờ) — chờ chút quay lại nhé!' }, 429);
}
if (dayUsed + estimatedCost > DAILY_USER_CAP) {
  return json({ error: 'rate_limit_day', message: 'Hôm nay bạn đã dùng nhiều rồi 🌙 mai chúng ta tiếp tục nhé!' }, 429);
}
if (globalUsed + estimatedCost > DAILY_GLOBAL_CAP) {
  return json({ error: 'global_cap', message: 'Trợ lý đang nghỉ do quá tải hôm nay 😴 mai quay lại nhé!' }, 429);
}
```

### 4. Post-increment bằng actual tokens

Sau khi nhận response Anthropic, đọc `usage` và cộng dồn:

```js
const anthropicData = await anthropicRes.json();
const actualTokens = (anthropicData.usage?.input_tokens || estimatedInputTokens)
                   + (anthropicData.usage?.output_tokens || 100);

await Promise.all([
  kvAdd(keyHour,   actualTokens, 3600),
  kvAdd(keyDay,    actualTokens, 86400),
  kvAdd(keyGlobal, actualTokens, 86400),
]);
```

### 5. Response trả về remaining (tokens)

```js
return json({
  message: anthropicData.content?.[0]?.text || '',
  remaining: {
    hour:   Math.max(0, HOURLY_TOKEN_CAP  - hourUsed  - actualTokens),
    day:    Math.max(0, DAILY_USER_CAP    - dayUsed   - actualTokens),
    // percentage for display
    hourPct: Math.round(Math.max(0, HOURLY_TOKEN_CAP - hourUsed - actualTokens) / HOURLY_TOKEN_CAP * 100),
  },
});
```

### 6. Xoá kvIncr cũ

`kvIncr` không còn dùng — xoá function này.

---

## FE Changes (training-engine.html)

`remaining.hour` và `remaining.day` giờ là tokens (số lớn, e.g. 9650) thay vì message count.

FE hiện đang hiển thị: `"Còn 8/giờ · 28/ngày"` — cần đổi sang dạng phần trăm hoặc mô tả:

```js
// Thay vì: "Còn 8/giờ · 28/ngày"
// Hiển thị: "Còn ~92% quota/giờ" hoặc đơn giản ẩn số đi
```

**Option đơn giản nhất:** Hiển thị `remaining.hourPct` dạng thanh màu hoặc text ngắn:
- `> 75%` → không hiển thị gì (quota OK)
- `50–75%` → "Còn nhiều quota 🟢"
- `25–50%` → "Đã dùng khá nhiều 🟡"
- `< 25%` → "Sắp hết quota giờ này ⚠️"

---

## Backward Compatibility

- API response shape giữ nguyên (`message`, `remaining`)
- `remaining.hour` và `remaining.day` đổi unit (từ message count sang tokens) — FE phải update display logic
- Old in-memory keys (`rl:ip:h` etc.) sẽ expire tự nhiên sau TTL, không cần migrate

---

## Note: Persistent storage

Nếu không có `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`, in-memory fallback vẫn hoạt động nhưng reset khi cold start. Để persistent: setup Vercel KV (free tier) → lấy URL + token → set env vars.

---

## Acceptance Criteria

1. Tin nhắn dài (500 ký tự) tốn nhiều budget hơn tin ngắn (10 ký tự)
2. Budget được tính bằng actual tokens từ Anthropic response
3. Khi hết budget giờ → 429 với message tiếng Việt thân thiện
4. Khi hết budget ngày → 429 với message tương ứng
5. Global cap hoạt động đúng
6. Response vẫn trả về `remaining` với đủ fields
7. FE hiển thị quota status theo dạng mới (không hiện số tokens thô)
8. `kvIncr` cũ đã bị xoá hoàn toàn
9. Abuse detection (isAbusive, message length) vẫn hoạt động

---

*Spec owner: Tech Lead | Date: 2026-05-22*
