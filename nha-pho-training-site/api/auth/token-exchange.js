// api/auth/token-exchange.js — accept a short-lived token from App Nhà Phố
// POST /api/auth/token-exchange
// Body: { token: "JWT_FROM_APP" }
//
// Flow:
//   1. Verify the incoming token (HS256 with JWT_SIGNING_SECRET, OR call APP_OAUTH_USERINFO_URL)
//   2. Build a nhapho_session JWT (same as callback.js)
//   3. Set nhapho_session cookie
//   4. Return { ok: true, user: { sub, name, role } }
//   On any failure: return { ok: false, error: 'invalid_token' } — always 200
//   so the training engine continues without auth on bad/expired tokens.

import { signJwt, verifyJwt } from '../../lib/auth.js';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const { token } = req.body || {};

  if (!token || typeof token !== 'string') {
    return res.status(200).json({ ok: false, error: 'invalid_token' });
  }

  const secret = process.env.JWT_SIGNING_SECRET;

  try {
    let userinfo = null;

    // Path A — APP_OAUTH_USERINFO_URL is configured: call it to validate the token
    const userinfoUrl = process.env.APP_OAUTH_USERINFO_URL;
    if (userinfoUrl) {
      const uRes = await fetch(userinfoUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (uRes.ok) {
        userinfo = await uRes.json();
      } else {
        console.warn('[token-exchange] userinfo fetch failed:', uRes.status);
        return res.status(200).json({ ok: false, error: 'invalid_token' });
      }
    } else {
      // Path B — verify locally with shared JWT_SIGNING_SECRET
      if (!secret) {
        console.warn('[token-exchange] JWT_SIGNING_SECRET not set and no APP_OAUTH_USERINFO_URL');
        return res.status(200).json({ ok: false, error: 'invalid_token' });
      }
      const payload = verifyJwt(token, secret);
      if (!payload) {
        return res.status(200).json({ ok: false, error: 'invalid_token' });
      }
      userinfo = payload;
    }

    // Require at minimum a subject identifier
    if (!userinfo?.sub) {
      return res.status(200).json({ ok: false, error: 'invalid_token' });
    }

    if (!secret) {
      console.warn('[token-exchange] JWT_SIGNING_SECRET not set — cannot issue session');
      return res.status(200).json({ ok: false, error: 'invalid_token' });
    }

    // Build session JWT (7-day TTL, same shape as callback.js)
    const now = Math.floor(Date.now() / 1000);
    const sessionPayload = {
      sub:    userinfo.sub,
      name:   userinfo.name   || '',
      role:   userinfo.role   || '',
      tenant: userinfo.tenant || 'nhapho',
      level:  userinfo.level  || '',
      iat:    now,
      exp:    now + 60 * 60 * 24 * 7, // 7 days
    };
    if (userinfo.phone) sessionPayload.phone = userinfo.phone;

    const sessionJwt = signJwt(sessionPayload, secret);

    // Set nhapho_session cookie (same flags as callback.js)
    res.setHeader(
      'Set-Cookie',
      `nhapho_session=${sessionJwt}; HttpOnly; Secure; SameSite=Lax; Max-Age=604800; Path=/`
    );

    return res.status(200).json({
      ok:   true,
      user: {
        sub:  sessionPayload.sub,
        name: sessionPayload.name,
        role: sessionPayload.role,
      },
    });
  } catch (err) {
    console.error('[token-exchange]', err);
    // Always 200 — client must continue even if exchange fails
    return res.status(200).json({ ok: false, error: 'invalid_token' });
  }
}
