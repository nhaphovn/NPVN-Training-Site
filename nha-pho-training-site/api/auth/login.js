// api/auth/login.js — start OAuth 2.0 + PKCE flow
// GET /api/auth/login

import crypto from 'crypto';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

function base64url(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    // 1. Generate PKCE code_verifier (43 chars of base64url from 32 random bytes)
    const code_verifier = base64url(crypto.randomBytes(32)).slice(0, 43);

    // 2. Generate code_challenge = base64url(SHA256(code_verifier))
    const code_challenge = base64url(
      crypto.createHash('sha256').update(code_verifier).digest()
    );

    // 3. Generate state (16 random bytes, base64url)
    const state = base64url(crypto.randomBytes(16));

    // 4. Read optional params from query
    const returnTo = req.query?.returnTo || null;
    const persona  = req.query?.persona  || null;

    // 5. Store PKCE + returnTo in short-lived cookie (10 minutes)
    const pkcePayload = JSON.stringify({ code_verifier, state, ...(returnTo ? { returnTo } : {}) });
    res.setHeader('Set-Cookie', [
      `nhapho_pkce=${encodeURIComponent(pkcePayload)}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`,
    ]);

    // 6. Build authorization URL
    const clientId = process.env.APP_OAUTH_CLIENT_ID || 'nhapho_training_local';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const origin = `${protocol}://${host}`;
    const redirectUri = `${origin}/api/auth/callback`;

    const usingMock = !process.env.APP_OAUTH_AUTHORIZE_URL;
    let authorizeUrl;
    if (!usingMock) {
      authorizeUrl = new URL(process.env.APP_OAUTH_AUTHORIZE_URL);
    } else {
      authorizeUrl = new URL(`${origin}/api/auth/mock-idp`);
      authorizeUrl.searchParams.set('_sub', 'authorize');
      // Forward persona so mock IdP can auto-select without showing the picker
      if (persona) authorizeUrl.searchParams.set('persona', persona);
    }

    authorizeUrl.searchParams.set('client_id', clientId);
    authorizeUrl.searchParams.set('redirect_uri', redirectUri);
    authorizeUrl.searchParams.set('response_type', 'code');
    authorizeUrl.searchParams.set('scope', 'openid profile');
    authorizeUrl.searchParams.set('state', state);
    authorizeUrl.searchParams.set('code_challenge', code_challenge);
    authorizeUrl.searchParams.set('code_challenge_method', 'S256');

    // 7. Redirect to authorization URL
    res.setHeader('Location', authorizeUrl.toString());
    return res.status(302).end();
  } catch (err) {
    console.error('[api/auth/login]', err);
    return res.status(500).json({ error: 'internal', message: err.message });
  }
}
