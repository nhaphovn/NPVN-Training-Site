// api/save.js — Vercel Edge Function
// Commit modules.json thẳng lên GitHub repo → Vercel tự deploy
//
// Required env vars:
//   GITHUB_TOKEN   — Fine-grained PAT: Contents: Read+Write trên repo
//   GITHUB_REPO    — "username/repo-name" (VD: "npvn/nha-pho-training")
//   GITHUB_BRANCH  — (optional, default: "main")
//   ADMIN_SAVE_TOKEN — (optional) same token dùng để auth request từ admin


const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status, headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (req.method !== 'POST')   return json({ error: 'method_not_allowed' }, 405);

  // Auth check
  const adminToken = process.env.ADMIN_SAVE_TOKEN;
  if (adminToken) {
    if (req.headers.get('x-admin-token') !== adminToken) {
      return json({ error: 'unauthorized', message: 'Token sai' }, 401);
    }
  }

  const GITHUB_TOKEN  = process.env.GITHUB_TOKEN;
  const GITHUB_REPO   = process.env.GITHUB_REPO;   // "owner/repo"
  const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return json({
      error: 'not_configured',
      message: 'Chưa set GITHUB_TOKEN hoặc GITHUB_REPO trong Vercel env vars',
    }, 500);
  }

  let body;
  try { body = await req.json(); }
  catch { return json({ error: 'bad_json' }, 400); }

  const { content, message: commitMsg } = body;

  if (!content) return json({ error: 'content_required', message: 'Thiếu content' }, 400);

  // Validate JSON trước khi commit
  try { JSON.parse(content); }
  catch (e) { return json({ error: 'invalid_json', message: 'modules.json không hợp lệ: ' + e.message }, 400); }

  const GH_API  = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/modules.json`;
  const headers = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept':        'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type':  'application/json',
  };

  // 1. Lấy SHA của file hiện tại (cần để update)
  let sha = null;
  try {
    const getRes = await fetch(GH_API + `?ref=${GITHUB_BRANCH}`, { headers });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status !== 404) {
      const err = await getRes.text();
      return json({ error: 'github_get_failed', message: err.slice(0, 200) }, 502);
    }
    // 404 = file chưa tồn tại → sẽ tạo mới (sha = null)
  } catch (e) {
    return json({ error: 'github_network', message: e.message }, 502);
  }

  // 2. Encode content → base64
  const encoded = btoa(unescape(encodeURIComponent(content)));

  // 3. Commit
  const putBody = {
    message: commitMsg || `content: update modules.json [admin] ${new Date().toISOString().slice(0,16)}`,
    content: encoded,
    branch:  GITHUB_BRANCH,
    ...(sha ? { sha } : {}),
  };

  try {
    const putRes = await fetch(GH_API, {
      method: 'PUT',
      headers,
      body: JSON.stringify(putBody),
    });

    const putData = await putRes.json();

    if (!putRes.ok) {
      return json({
        error:   'github_commit_failed',
        message: putData.message || putRes.status,
        detail:  putData,
      }, 502);
    }

    return json({
      ok:      true,
      sha:     putData.content?.sha,
      commit:  putData.commit?.html_url,
      message: 'Đã commit modules.json → Vercel đang deploy (~1 phút)',
    });

  } catch (e) {
    return json({ error: 'github_put_failed', message: e.message }, 502);
  }
}
