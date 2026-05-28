// api/img.js — Blob image proxy
// GET /api/img?path=images/dang_tin/home.jpg
//
// Tries public subdomain first (no auth) — works for public stores.
// Falls back to private subdomain with Bearer auth — works for private stores.
// Always pipes bytes server-side; no redirect to avoid auth issues.

export const config = { api: { responseLimit: false } };

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const { path } = req.query;
  if (!path) return res.status(400).json({ error: 'path_required', hint: '/api/img?path=images/dang_tin/home.jpg' });
  if (path.includes('..') || path.startsWith('/')) {
    return res.status(400).json({ error: 'invalid_path' });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(500).json({ error: 'not_configured', message: 'BLOB_READ_WRITE_TOKEN chưa set' });

  // Derive store ID: token format is vercel_blob_rw_<storeId>_<secret>
  const storeId = token.match(/^vercel_blob_rw_([^_]+)/)?.[1];
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  // Try public subdomain without auth — succeeds for public stores.
  // Try private subdomain with Bearer — succeeds for private stores.
  // head() from @vercel/blob SDK uses Bearer internally and cannot distinguish
  // public from private, so we test actual HTTP access instead.
  const candidates = [
    { url: `https://${storeId}.public.blob.vercel-storage.com/${path}`, headers: {} },
    { url: `https://${storeId}.private.blob.vercel-storage.com/${path}`, headers: { Authorization: `Bearer ${token}` } },
  ];

  for (const { url, headers } of candidates) {
    let upstream;
    try {
      upstream = await fetch(url, { headers });
    } catch (e) {
      console.error('[api/img] fetch error:', url, e.message);
      continue;
    }

    if (upstream.status === 404 || upstream.status === 403) continue;

    if (!upstream.ok) {
      console.error('[api/img] upstream error:', upstream.status, url);
      return res.status(502).json({ error: 'upstream_error', status: upstream.status, path });
    }

    const buffer = await upstream.arrayBuffer();
    const ct = upstream.headers.get('content-type') || 'image/jpeg';
    res.setHeader('Content-Type', ct);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('X-Blob-Path', path);
    return res.send(Buffer.from(buffer));
  }

  return res.status(404).json({
    error: 'not_found', path,
    message: `Ảnh '${path}' chưa upload lên Blob`,
  });
}
