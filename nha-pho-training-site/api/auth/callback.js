// api/auth/callback.js — handle OAuth 2.0 callback
// GET /api/auth/callback?code=xxx&state=yyy

import crypto from 'crypto';
import { signJwt, parseCookies } from '../../lib/auth.js';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

function base64url(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function isSameOrigin(url, origin) {
  try {
    const parsed = new URL(url);
    const originParsed = new URL(origin);
    return parsed.origin === originParsed.origin;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const { code, state: stateParam, returnTo, error: oauthError } = req.query;

  // Handle OAuth error from IdP
  if (oauthError) {
    console.error('[api/auth/callback] OAuth error from IdP:', oauthError);
    return res.status(400).json({ error: 'oauth_error', message: oauthError });
  }

  if (!code) return res.status(400).json({ error: 'code_required' });
  if (!stateParam) return res.status(400).json({ error: 'state_required' });

  try {
    // 1. Read PKCE cookie
    const cookies = parseCookies(req);
    const pkceRaw = cookies['nhapho_pkce'];
    if (!pkceRaw) {
      return res.status(400).json({ error: 'pkce_missing', message: 'PKCE cookie missing or expired' });
    }

    let pkceData;
    try {
      pkceData = JSON.parse(decodeURIComponent(pkceRaw));
    } catch {
      return res.status(400).json({ error: 'pkce_invalid' });
    }

    const { code_verifier, state: storedState, returnTo: pkceReturnTo } = pkceData;

    // 2. Verify state (CSRF protection)
    if (stateParam !== storedState) {
      return res.status(400).json({ error: 'state_mismatch', message: 'CSRF state mismatch' });
    }

    // 3. Build origin for internal calls
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host;
    const origin = `${protocol}://${host}`;
    const clientId = process.env.APP_OAUTH_CLIENT_ID || 'nhapho_training_local';
    const redirectUri = `${origin}/api/auth/callback`;

    // 4. Exchange code for token
    let tokenData;
    const tokenUrl = process.env.APP_OAUTH_TOKEN_URL || `${origin}/api/auth/_mock-idp?_sub=token`;

    const tokenRes = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier,
        client_id: clientId,
      }),
    });

    if (!tokenRes.ok) {
      const errBody = await tokenRes.json().catch(() => ({}));
      console.error('[api/auth/callback] token exchange failed:', errBody);
      return res.status(400).json({ error: 'token_exchange_failed', message: errBody.error || 'unknown' });
    }

    tokenData = await tokenRes.json();

    // 5. Fetch userinfo
    const userinfoUrl = process.env.APP_OAUTH_USERINFO_URL || `${origin}/api/auth/_mock-idp?_sub=userinfo`;

    const userinfoRes = await fetch(userinfoUrl, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    if (!userinfoRes.ok) {
      console.error('[api/auth/callback] userinfo fetch failed:', userinfoRes.status);
      return res.status(400).json({ error: 'userinfo_failed' });
    }

    const userinfo = await userinfoRes.json();

    // 6. Build session JWT (7 days TTL)
    const secret = process.env.JWT_SIGNING_SECRET;
    if (!secret) {
      console.error('[api/auth/callback] JWT_SIGNING_SECRET not set');
      return res.status(500).json({ error: 'server_misconfigured' });
    }

    const now = Math.floor(Date.now() / 1000);
    const sessionPayload = {
      sub: userinfo.sub,
      name: userinfo.name,
      role: userinfo.role,
      tenant: userinfo.tenant || 'nhapho',
      level: userinfo.level,
      iat: now,
      exp: now + 60 * 60 * 24 * 7, // 7 days
    };
    if (userinfo.phone) sessionPayload.phone = userinfo.phone;

    const sessionJwt = signJwt(sessionPayload, secret);

    // 7. Set session cookie + clear PKCE cookie
    const cookies_to_set = [
      `nhapho_session=${sessionJwt}; HttpOnly; Secure; SameSite=Lax; Max-Age=604800; Path=/`,
      `nhapho_pkce=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/`,
    ];
    res.setHeader('Set-Cookie', cookies_to_set);

    // 8. Redirect — prefer returnTo from PKCE cookie (set by login.js), fall back to query param
    const returnToResolved = pkceReturnTo || returnTo || null;
    let redirectTarget = '/';
    if (returnToResolved && isSameOrigin(returnToResolved, origin)) {
      redirectTarget = returnToResolved;
    }

    res.setHeader('Location', redirectTarget);
    return res.status(302).end();
  } catch (err) {
    console.error('[api/auth/callback]', err);
    return res.status(500).json({ error: 'internal', message: err.message });
  }
}
