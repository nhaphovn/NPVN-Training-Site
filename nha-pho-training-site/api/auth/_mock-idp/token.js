// api/auth/_mock-idp/token.js — mock IdP token endpoint
// POST /api/auth/_mock-idp/token
// Body: { code, code_verifier, grant_type, client_id, redirect_uri }

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const { code, code_verifier, grant_type } = req.body || {};

  if (grant_type !== 'authorization_code') {
    return res.status(400).json({ error: 'unsupported_grant_type' });
  }
  if (!code) return res.status(400).json({ error: 'invalid_request', message: 'code required' });
  if (!code_verifier) return res.status(400).json({ error: 'invalid_request', message: 'code_verifier required' });

  try {
    // 1. Read mock_codes cookie
    const cookies = parseCookies(req);
    let mockCodes = {};
    if (cookies['mock_codes']) {
      try {
        mockCodes = JSON.parse(cookies['mock_codes']);
      } catch {
        return res.status(400).json({ error: 'invalid_grant', message: 'Malformed mock_codes cookie' });
      }
    }

    const codeEntry = mockCodes[code];
    if (!codeEntry) {
      return res.status(400).json({ error: 'invalid_grant', message: 'Code not found or already used' });
    }

    // 2. Verify PKCE: base64url(SHA256(code_verifier)) must match stored challenge
    const computedChallenge = base64url(
      crypto.createHash('sha256').update(code_verifier).digest()
    );
    if (computedChallenge !== codeEntry.challenge) {
      return res.status(400).json({ error: 'invalid_grant', message: 'PKCE verification failed' });
    }

    // 3. Code is valid — remove it from cookie (one-time use)
    delete mockCodes[code];
    res.setHeader('Set-Cookie',
      `mock_codes=${encodeURIComponent(JSON.stringify(mockCodes))}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`
    );

    // 4. Build user payload for access_token
    const userPayload = {
      sub: codeEntry.sub,
      name: codeEntry.name,
      role: codeEntry.role,
      tenant: codeEntry.tenant,
      level: codeEntry.level,
    };

    // access_token = base64url JSON of user payload (decoded by userinfo endpoint)
    const access_token = base64url(Buffer.from(JSON.stringify(userPayload)));

    return res.status(200).json({
      access_token,
      token_type: 'bearer',
      expires_in: 3600,
    });
  } catch (err) {
    console.error('[api/auth/_mock-idp/token]', err);
    return res.status(500).json({ error: 'internal', message: err.message });
  }
}
