// api/img.js — Blob image proxy (private store)
// GET /api/img?path=images/dang_tin/home.jpg
// Fetches from private Vercel Blob store with Bearer auth, pipes bytes to client.

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

  const storeId = token.match(/^vercel_blob_rw_([^_]+)/)?.[1];
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  const blobUrl = `https://${storeId}.private.blob.vercel-storage.com/${path}`;
  let upstream;
  try {
    upstream = await fetch(blobUrl, { headers: { Authorization: `Bearer ${token}` } });
  } catch (e) {
    console.error('[api/img] fetch error:', e.message);
    return res.status(502).json({ error: 'fetch_failed', path, message: e.message });
  }

  if (upstream.status === 404) {
    return res.status(404).json({ error: 'not_found', path, message: `Ảnh '${path}' chưa upload lên Blob` });
  }
  if (!upstream.ok) {
    console.error('[api/img] upstream error:', upstream.status, path);
    return res.status(502).json({ error: 'upstream_error', status: upstream.status, path });
  }

  const buffer = await upstream.arrayBuffer();
  res.setHeader('Content-Type', upstream.headers.get('content-type') || 'image/jpeg');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('X-Blob-Path', path);
  return res.send(Buffer.from(buffer));
}
