// api/auth/_mock-idp/userinfo.js — mock IdP userinfo endpoint
// GET /api/auth/_mock-idp/userinfo
// Header: Authorization: Bearer <access_token>
//
// access_token is base64url-encoded JSON user payload (set by token.js)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'invalid_token', message: 'Bearer token required' });
  }

  const access_token = authHeader.slice(7).trim();
  if (!access_token) {
    return res.status(401).json({ error: 'invalid_token' });
  }

  try {
    // Decode base64url JSON payload (not a real JWT — just raw JSON encoded as base64url)
    // Normalize base64url to standard base64 before decoding
    const base64 = access_token.replace(/-/g, '+').replace(/_/g, '/');
    const json = Buffer.from(base64, 'base64').toString('utf8');
    const userinfo = JSON.parse(json);

    if (!userinfo.sub) {
      return res.status(401).json({ error: 'invalid_token', message: 'Missing sub claim' });
    }

    return res.status(200).json(userinfo);
  } catch (err) {
    console.error('[api/auth/_mock-idp/userinfo]', err);
    return res.status(401).json({ error: 'invalid_token', message: 'Cannot decode access token' });
  }
}
