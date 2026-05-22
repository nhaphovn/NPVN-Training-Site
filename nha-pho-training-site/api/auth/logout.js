// api/auth/logout.js — clear session and redirect
// GET /api/auth/logout

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  // Clear session cookie (Max-Age=0 expires it immediately)
  res.setHeader('Set-Cookie', [
    'nhapho_session=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/',
    'nhapho_pkce=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/',
  ]);

  res.setHeader('Location', '/');
  return res.status(302).end();
}
