// api/auth/_mock-idp.js — merged mock IdP (authorize + token + userinfo)
// Routes by ?_sub=authorize|token|userinfo
//
// GET  /api/auth/_mock-idp?_sub=authorize&client_id=...&...  → show persona picker
// GET  /api/auth/_mock-idp?_sub=authorize&...&persona=X      → auto-login persona
// POST /api/auth/_mock-idp?_sub=token                        → exchange code for access_token
// GET  /api/auth/_mock-idp?_sub=userinfo                     → return user from access_token
//
// Hobby plan: merges 3 files into 1 to stay under the 12-function limit.

import crypto from 'crypto';

function base64url(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  return Object.fromEntries(
    header.split(';').map(pair => {
      const idx = pair.indexOf('=');
      if (idx === -1) return ['', ''];
      return [pair.slice(0, idx).trim(), decodeURIComponent(pair.slice(idx + 1).trim())];
    }).filter(([k]) => k)
  );
}

// ---------------------------------------------------------------------------
// Personas
// ---------------------------------------------------------------------------

const PERSONAS = {
  hoc_vien: { sub: 'user_hv_001', name: 'Học viên Test', role: 'hoc_vien', tenant: 'nhapho', level: 'beginner' },
  dau_chu:  { sub: 'user_dc_001', name: 'Đầu chủ Test',  role: 'dau_chu',  tenant: 'nhapho', level: 'intermediate' },
  quan_ly_phong: { sub: 'user_ql_001', name: 'Quản lý Test', role: 'quan_ly_phong', tenant: 'nhapho', level: 'advanced' },
};

// ---------------------------------------------------------------------------
// Authorize sub-handler
// ---------------------------------------------------------------------------

function renderLoginPage(params) {
  const { client_id, redirect_uri, state, code_challenge, code_challenge_method } = params;
  // Include _sub=authorize so persona-click links stay on this route
  const hidden = [
    `_sub=authorize`,
    `client_id=${encodeURIComponent(client_id || '')}`,
    `redirect_uri=${encodeURIComponent(redirect_uri || '')}`,
    `state=${encodeURIComponent(state || '')}`,
    `code_challenge=${encodeURIComponent(code_challenge || '')}`,
    `code_challenge_method=${encodeURIComponent(code_challenge_method || 'S256')}`,
    `action=login`,
  ].join('&');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng nhập — Môi trường Test</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Be Vietnam Pro', sans-serif; background: #E5EDE5; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
    .card { background: #fff; border-radius: 16px; padding: 40px 32px; max-width: 400px; width: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.10); }
    .logo { text-align: center; margin-bottom: 8px; }
    .logo-dot { width: 48px; height: 48px; background: #00A651; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; color: #fff; font-weight: 700; margin-bottom: 12px; }
    h1 { font-size: 20px; font-weight: 700; color: #1A1A1A; text-align: center; margin-bottom: 6px; }
    .notice { font-size: 13px; color: #007A3D; background: #E5EDE5; border-radius: 8px; padding: 10px 14px; text-align: center; margin-bottom: 28px; font-weight: 500; }
    .section-label { font-size: 12px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
    .persona-list { display: flex; flex-direction: column; gap: 10px; }
    .persona-btn { display: block; width: 100%; padding: 14px 18px; border-radius: 10px; border: 2px solid #E5EDE5; background: #fff; cursor: pointer; text-align: left; font-family: inherit; transition: border-color 0.15s, background 0.15s; text-decoration: none; }
    .persona-btn:hover { border-color: #00A651; background: #f0faf5; }
    .persona-name { font-size: 15px; font-weight: 600; color: #1A1A1A; display: block; }
    .persona-sub { font-size: 12px; color: #666; display: block; margin-top: 2px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <div class="logo-dot">N</div>
      <h1>Nhà Phố Training</h1>
    </div>
    <div class="notice">Đây là môi trường test — chọn vai trò để đăng nhập</div>
    <div class="section-label">Chọn vai trò</div>
    <div class="persona-list">
      <a href="?${hidden}&persona=hoc_vien" class="persona-btn">
        <span class="persona-name">Học viên</span>
        <span class="persona-sub">ID: user_hv_001 · Cấp độ: Beginner</span>
      </a>
      <a href="?${hidden}&persona=dau_chu" class="persona-btn">
        <span class="persona-name">Đầu chủ</span>
        <span class="persona-sub">ID: user_dc_001 · Cấp độ: Intermediate</span>
      </a>
      <a href="?${hidden}&persona=quan_ly_phong" class="persona-btn">
        <span class="persona-name">Quản lý phòng</span>
        <span class="persona-sub">ID: user_ql_001 · Cấp độ: Advanced</span>
      </a>
    </div>
  </div>
</body>
</html>`;
}

async function handleAuthorize(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const { action, persona, client_id, redirect_uri, state, code_challenge, code_challenge_method } = req.query;

  if ((action === 'login' || (persona && !action)) && persona) {
    const user = PERSONAS[persona];
    if (!user) return res.status(400).json({ error: 'unknown_persona' });
    if (!redirect_uri || !state) return res.status(400).json({ error: 'missing_params' });

    const code = base64url(crypto.randomBytes(18));

    const cookies = parseCookies(req);
    let mockCodes = {};
    try { mockCodes = cookies['mock_codes'] ? JSON.parse(cookies['mock_codes']) : {}; } catch { mockCodes = {}; }

    mockCodes[code] = { ...user, challenge: code_challenge, challenge_method: code_challenge_method || 'S256', created_at: Date.now() };

    const now = Date.now();
    for (const [k, v] of Object.entries(mockCodes)) {
      if (now - (v.created_at || 0) > 600_000) delete mockCodes[k];
    }

    res.setHeader('Set-Cookie', `mock_codes=${encodeURIComponent(JSON.stringify(mockCodes))}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`);

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const expectedOrigin = `${protocol}://${req.headers.host}`;
    let callbackUrl;
    try {
      callbackUrl = new URL(redirect_uri);
      if (callbackUrl.origin !== expectedOrigin) {
        return res.status(400).json({ error: 'invalid_redirect_uri', message: 'redirect_uri must be same origin' });
      }
    } catch {
      return res.status(400).json({ error: 'invalid_redirect_uri' });
    }
    callbackUrl.searchParams.set('code', code);
    callbackUrl.searchParams.set('state', state);

    res.setHeader('Location', callbackUrl.toString());
    return res.status(302).end();
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(renderLoginPage({ client_id, redirect_uri, state, code_challenge, code_challenge_method }));
}

// ---------------------------------------------------------------------------
// Token sub-handler
// ---------------------------------------------------------------------------

async function handleToken(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { code, code_verifier, grant_type } = req.body || {};

  if (grant_type !== 'authorization_code') return res.status(400).json({ error: 'unsupported_grant_type' });
  if (!code) return res.status(400).json({ error: 'invalid_request', message: 'code required' });
  if (!code_verifier) return res.status(400).json({ error: 'invalid_request', message: 'code_verifier required' });

  try {
    const cookies = parseCookies(req);
    let mockCodes = {};
    try { mockCodes = cookies['mock_codes'] ? JSON.parse(cookies['mock_codes']) : {}; } catch {
      return res.status(400).json({ error: 'invalid_grant', message: 'Malformed mock_codes cookie' });
    }

    const codeEntry = mockCodes[code];
    if (!codeEntry) return res.status(400).json({ error: 'invalid_grant', message: 'Code not found or already used' });

    const computedChallenge = base64url(crypto.createHash('sha256').update(code_verifier).digest());
    if (computedChallenge !== codeEntry.challenge) {
      return res.status(400).json({ error: 'invalid_grant', message: 'PKCE verification failed' });
    }

    delete mockCodes[code];
    res.setHeader('Set-Cookie', `mock_codes=${encodeURIComponent(JSON.stringify(mockCodes))}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`);

    const userPayload = { sub: codeEntry.sub, name: codeEntry.name, role: codeEntry.role, tenant: codeEntry.tenant, level: codeEntry.level };
    const access_token = base64url(Buffer.from(JSON.stringify(userPayload)));

    return res.status(200).json({ access_token, token_type: 'bearer', expires_in: 3600 });
  } catch (err) {
    console.error('[_mock-idp/token]', err);
    return res.status(500).json({ error: 'internal', message: err.message });
  }
}

// ---------------------------------------------------------------------------
// Userinfo sub-handler
// ---------------------------------------------------------------------------

async function handleUserinfo(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'invalid_token', message: 'Bearer token required' });
  }

  const access_token = authHeader.slice(7).trim();
  if (!access_token) return res.status(401).json({ error: 'invalid_token' });

  try {
    const base64 = access_token.replace(/-/g, '+').replace(/_/g, '/');
    const userinfo = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
    if (!userinfo.sub) return res.status(401).json({ error: 'invalid_token', message: 'Missing sub claim' });
    return res.status(200).json(userinfo);
  } catch (err) {
    console.error('[_mock-idp/userinfo]', err);
    return res.status(401).json({ error: 'invalid_token', message: 'Cannot decode access token' });
  }
}

// ---------------------------------------------------------------------------
// Main router
// ---------------------------------------------------------------------------

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const sub = req.query._sub;
  if (sub === 'authorize') return handleAuthorize(req, res);
  if (sub === 'token')     return handleToken(req, res);
  if (sub === 'userinfo')  return handleUserinfo(req, res);

  return res.status(400).json({ error: 'missing_sub', message: 'Require ?_sub=authorize|token|userinfo' });
}
