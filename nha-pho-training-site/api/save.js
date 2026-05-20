// api/save.js — Vercel Node Serverless Function
// POST /api/save  → commit modules.json lên GitHub repo
// Body: { content: <string>, message: <string optional> }
//
// Required env:
//   GITHUB_TOKEN     — Fine-grained PAT: Contents Read+Write trên repo
//   GITHUB_REPO      — "owner/repo"
//   GITHUB_BRANCH    — optional, default "main"
//   ADMIN_SAVE_TOKEN — optional, để authorize request

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'method_not_allowed' });

  // Auth
  const adminToken = process.env.ADMIN_SAVE_TOKEN;
  if (adminToken && req.headers['x-admin-token'] !== adminToken) {
    return res.status(401).json({ error: 'unauthorized', message: 'Token sai' });
  }

  const GITHUB_TOKEN  = process.env.GITHUB_TOKEN;
  const GITHUB_REPO   = process.env.GITHUB_REPO;
  const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return res.status(500).json({
      error:   'not_configured',
      message: 'Chưa set GITHUB_TOKEN hoặc GITHUB_REPO trong Vercel env vars',
    });
  }

  const { content, message: commitMsg } = req.body || {};

  if (!content) {
    return res.status(400).json({ error: 'content_required', message: 'Thiếu content' });
  }

  // Validate JSON
  try { JSON.parse(content); }
  catch (e) {
    return res.status(400).json({ error: 'invalid_json', message: 'JSON không hợp lệ: ' + e.message });
  }

  const GH_API  = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/modules.json`;
  const headers = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept':        'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type':  'application/json',
    'User-Agent':    'nhapho-training-admin',
  };

  // 1. Get current SHA (cần để update)
  let sha = null;
  try {
    const getRes = await fetch(GH_API + `?ref=${GITHUB_BRANCH}`, { headers });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status !== 404) {
      const err = await getRes.text();
      return res.status(502).json({ error: 'github_get_failed', message: err.slice(0, 300) });
    }
  } catch (e) {
    return res.status(502).json({ error: 'github_network', message: e.message });
  }

  // 2. Encode content → base64
  const encoded = Buffer.from(content, 'utf8').toString('base64');

  // 3. PUT
  const putBody = {
    message: commitMsg || `content: update modules.json via admin ${new Date().toISOString().slice(0,16)}`,
    content: encoded,
    branch:  GITHUB_BRANCH,
    ...(sha ? { sha } : {}),
  };

  try {
    const putRes = await fetch(GH_API, {
      method:  'PUT',
      headers,
      body:    JSON.stringify(putBody),
    });

    const putData = await putRes.json();

    if (!putRes.ok) {
      return res.status(502).json({
        error:   'github_commit_failed',
        message: putData.message || `HTTP ${putRes.status}`,
        detail:  putData,
      });
    }

    return res.status(200).json({
      ok:      true,
      sha:     putData.content?.sha,
      commit:  putData.commit?.html_url,
      message: 'Đã commit modules.json → Vercel đang deploy (~1 phút)',
    });
  } catch (e) {
    return res.status(502).json({ error: 'github_put_failed', message: e.message });
  }
}
