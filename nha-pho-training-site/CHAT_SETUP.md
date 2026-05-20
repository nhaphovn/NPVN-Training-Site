# Setup AI Chat (Free + Anti-spam)

## Tổng quan

Chat AI ở phải engine giờ **MIỄN PHÍ với user** — server proxy gọi Anthropic API bằng key của admin. Có rate limit chống spam.

## Bước 1: Thêm env vars trên Vercel

Vào Vercel Dashboard → Project → Settings → Environment Variables, thêm:

| Tên | Giá trị | Required |
|---|---|---|
| `ANTHROPIC_API_KEY` | `sk-ant-api03-...` | ✓ Bắt buộc |
| `UPSTASH_REDIS_REST_URL` | `https://xxx.upstash.io` | Recommend |
| `UPSTASH_REDIS_REST_TOKEN` | `AxxxAAAcDFx...` | Recommend |
| `DAILY_GLOBAL_CAP` | `500` | Optional (default 500) |
| `MODEL_NAME` | `claude-haiku-4-5` | Optional (default Haiku) |

Sau khi thêm: **Redeploy** để env vars áp dụng (vào Deployments → ... → Redeploy).

## Bước 2: Setup Upstash Redis (rate limit persistent)

Free, 30 giây setup:

1. Vào https://upstash.com/ → Sign up (Google login)
2. Create Database → Region gần (Singapore cho VN)
3. Chọn "Free" plan (10K commands/day)
4. Vào dashboard → **REST API** tab → copy:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
5. Paste vào Vercel env vars (bước 1)

**Nếu không setup Upstash:** chat vẫn chạy nhưng rate limit dùng in-memory (reset mỗi cold start, anti-spam yếu hơn).

## Bước 3: Test

Sau khi deploy:
```bash
curl -X POST https://npvn-training-site-1yg1.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bước này làm gì?"}],"moduleId":"dang_tin","step":1}'
```

Mong đợi response 200 với `{ "message": "...", "remaining": { "hour": 9, "day": 29 } }`.

## Cấu hình giới hạn (rate limit)

Sửa trong `/api/chat.js` nếu muốn nới/thắt:

```js
// Per IP
if (hourCount > 10) ...    // 10 câu / giờ
if (dayCount > 30) ...     // 30 câu / ngày

// Global
DAILY_GLOBAL_CAP = 500     // Tổng 500 câu / ngày toàn site
```

## Chi phí ước tính

Với Haiku 4.5:
- Mỗi câu user (~50 tokens input + 200 tokens output): ~$0.0003
- 500 câu/ngày: ~$0.15/ngày = **~$5/tháng**
- Vercel Edge Function: **Free** (500K invocations/month free tier)
- Upstash: **Free** (10K commands/day, đủ cho ~3K user calls)

Tổng: **~$5/tháng** cho training site full traffic.

## Anti-spam mechanics

✓ **Per IP per hour**: 10 câu (giòn cho power user)
✓ **Per IP per day**: 30 câu (hard cap)
✓ **Global per day**: 500 câu (tránh runaway cost)
✓ **Input length**: max 500 ký tự
✓ **Output length**: max 400 tokens (giới hạn cost)
✓ **History length**: max 20 messages (tránh prompt injection dài)
✓ **Same message x3**: blocked (chống bot spam)
✓ **System prompt**: chỉ trả lời về app NPVN, từ chối off-topic

## Personality

Trợ lý có character:
- Tiếng Việt thân thiện, hóm hỉnh
- Emoji vừa phải (1-2/câu)
- Câu hỏi off-topic → từ chối khéo, vui vẻ:
  - "Mình chỉ rành App NPVN thôi nha 😅"
  - "Câu đó để Google trả lời nhé 🔍"
- Pro user → tip + shortcut ⚡
- Newbie → bước rõ ràng

Edit system prompt trong `/api/chat.js` function `buildSystemPrompt()` nếu muốn đổi style.

## Troubleshooting

**Chat không hồi đáp:**
- Check Vercel Logs (Dashboard → Deployments → Functions → /api/chat → Logs)
- Verify `ANTHROPIC_API_KEY` còn credit không
- Verify env vars đã set + đã redeploy

**Rate limit fire không đúng:**
- Nếu chưa setup Upstash → reset mỗi cold start
- Setup Upstash để có rate limit persistent

**429 Too Many Requests liên tục:**
- Có thể bị tấn công IP đơn → check Upstash dashboard xem keys nào nhiều count
- Tăng `DAILY_GLOBAL_CAP` hoặc giảm per-IP nếu cần
