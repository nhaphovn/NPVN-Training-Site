// api/auth/_mock-idp/authorize.js — mock IdP authorization endpoint
// GET  /api/auth/_mock-idp/authorize?client_id=...&redirect_uri=...&state=...&code_challenge=...
// POST (via HTML form) with ?action=login&persona=...

import crypto from 'crypto';

function base64url(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Test user personas
const PERSONAS = {
  hoc_vien: {
    sub: 'user_hv_001',
    name: 'Học viên Test',
    role: 'hoc_vien',
    tenant: 'nhapho',
    level: 'beginner',
  },
  dau_chu: {
    sub: 'user_dc_001',
    name: 'Đầu chủ Test',
    role: 'dau_chu',
    tenant: 'nhapho',
    level: 'intermediate',
  },
  quan_ly_phong: {
    sub: 'user_ql_001',
    name: 'Quản lý Test',
    role: 'quan_ly_phong',
    tenant: 'nhapho',
    level: 'advanced',
  },
};

function renderLoginPage(params) {
  const { client_id, redirect_uri, state, code_challenge, code_challenge_method } = params;
  const hidden = [
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
    body {
      font-family: 'Be Vietnam Pro', sans-serif;
      background: #E5EDE5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: #fff;
      border-radius: 16px;
      padding: 40px 32px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    }
    .logo {
      text-align: center;
      margin-bottom: 8px;
    }
    .logo-dot {
      width: 48px;
      height: 48px;
      background: #00A651;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #1A1A1A;
      text-align: center;
      margin-bottom: 6px;
    }
    .notice {
      font-size: 13px;
      color: #007A3D;
      background: #E5EDE5;
      border-radius: 8px;
      padding: 10px 14px;
      text-align: center;
      margin-bottom: 28px;
      font-weight: 500;
    }
    .section-label {
      font-size: 12px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }
    .persona-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .persona-btn {
      display: block;
      width: 100%;
      padding: 14px 18px;
      border-radius: 10px;
      border: 2px solid #E5EDE5;
      background: #fff;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      transition: border-color 0.15s, background 0.15s;
      text-decoration: none;
    }
    .persona-btn:hover {
      border-color: #00A651;
      background: #f0faf5;
    }
    .persona-name {
      font-size: 15px;
      font-weight: 600;
      color: #1A1A1A;
      display: block;
    }
    .persona-sub {
      font-size: 12px;
      color: #666;
      display: block;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <div class="logo-dot">N</div>
      <h1>Nhà Phố Training</h1>
    </div>
    <div class="notice">
      Đây là môi trường test — chọn vai trò để đăng nhập
    </div>
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const {
    action,
    persona,
    client_id,
    redirect_uri,
    state,
    code_challenge,
    code_challenge_method,
  } = req.query;

  // Handle login action (user clicked a persona button)
  if (action === 'login' && persona) {
    const user = PERSONAS[persona];
    if (!user) {
      return res.status(400).json({ error: 'unknown_persona' });
    }

    if (!redirect_uri || !state) {
      return res.status(400).json({ error: 'missing_params' });
    }

    // Generate one-time authorization code
    const code = base64url(crypto.randomBytes(18));

    // Store code in mock_codes cookie
    const cookies = parseCookies(req);
    let mockCodes = {};
    if (cookies['mock_codes']) {
      try {
        mockCodes = JSON.parse(cookies['mock_codes']);
      } catch {
        mockCodes = {};
      }
    }

    // Store code entry with user + PKCE challenge
    mockCodes[code] = {
      ...user,
      challenge: code_challenge,
      challenge_method: code_challenge_method || 'S256',
      created_at: Date.now(),
    };

    // Prune old codes (>10 minutes)
    const now = Date.now();
    for (const [k, v] of Object.entries(mockCodes)) {
      if (now - (v.created_at || 0) > 600_000) delete mockCodes[k];
    }

    res.setHeader('Set-Cookie',
      `mock_codes=${encodeURIComponent(JSON.stringify(mockCodes))}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`
    );

    // Redirect to client's redirect_uri with code + state
    const callbackUrl = new URL(redirect_uri);
    callbackUrl.searchParams.set('code', code);
    callbackUrl.searchParams.set('state', state);

    res.setHeader('Location', callbackUrl.toString());
    return res.status(302).end();
  }

  // Show login page
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(renderLoginPage({
    client_id,
    redirect_uri,
    state,
    code_challenge,
    code_challenge_method,
  }));
}
