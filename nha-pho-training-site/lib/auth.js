// lib/auth.js — shared auth helpers
// Uses Node built-in crypto only — no external JWT libraries

import crypto from 'crypto';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function base64url(buf) {
  return buf.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// ---------------------------------------------------------------------------
// JWT — HS256 manual implementation
// ---------------------------------------------------------------------------

/**
 * Sign a payload with HS256, returning a compact JWT string.
 * @param {object} payload
 * @param {string} secret
 * @returns {string} JWT
 */
export function signJwt(payload, secret) {
  const header = base64url(Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const body   = base64url(Buffer.from(JSON.stringify(payload)));
  const sig    = base64url(
    crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest()
  );
  return `${header}.${body}.${sig}`;
}

/**
 * Verify a JWT signed with HS256.
 * Returns the decoded payload object, or null if invalid / expired.
 * @param {string} token
 * @param {string} secret
 * @returns {object|null}
 */
export function verifyJwt(token, secret) {
  if (!token || typeof token !== 'string') return null;

  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [header, body, sig] = parts;

  // Verify signature
  const expected = base64url(
    crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest()
  );
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;

  // Decode payload
  let payload;
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch {
    return null;
  }

  // Check expiry
  if (payload.exp && Date.now() / 1000 > payload.exp) return null;

  return payload;
}

// ---------------------------------------------------------------------------
// Cookie parsing
// ---------------------------------------------------------------------------

/**
 * Parse the Cookie header into a key→value map.
 * @param {object} req  Node IncomingMessage
 * @returns {Record<string,string>}
 */
export function parseCookies(req) {
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
// Session
// ---------------------------------------------------------------------------

/**
 * Read and verify the nhapho_session cookie.
 * Returns decoded user payload or null.
 * @param {object} req
 * @returns {object|null}
 */
export function getSession(req) {
  const secret = process.env.JWT_SIGNING_SECRET;
  if (!secret) {
    console.warn('[auth] JWT_SIGNING_SECRET not set');
    return null;
  }

  const cookies = parseCookies(req);
  const token = cookies['nhapho_session'];
  if (!token) return null;

  return verifyJwt(token, secret);
}

/**
 * Require an authenticated session.
 * If authenticated, returns the user object.
 * If not, sends 401 and returns null — caller must return immediately.
 * @param {object} req
 * @param {object} res
 * @returns {object|null}
 */
export async function requireAuth(req, res) {
  const user = getSession(req);
  if (!user) {
    res.status(401).json({
      ok: false,
      error: 'unauthorized',
      message: 'Login required',
    });
    return null;
  }
  return user;
}
