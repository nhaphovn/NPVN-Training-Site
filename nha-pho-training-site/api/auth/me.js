// api/auth/me.js — return current session info
// GET /api/auth/me — always 200, never 401

import { getSession } from '../../lib/auth.js';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Cache-Control', 'no-store');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    const user = getSession(req);

    if (!user) {
      return res.status(200).json({ ok: false, authenticated: false });
    }

    return res.status(200).json({
      ok: true,
      authenticated: true,
      user: {
        sub: user.sub,
        name: user.name,
        role: user.role,
        tenant: user.tenant,
      },
    });
  } catch (err) {
    console.error('[api/auth/me]', err);
    // Still return 200 — client uses this to check auth status
    return res.status(200).json({ ok: false, authenticated: false });
  }
}
