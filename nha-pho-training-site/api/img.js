// api/img.js — Private Blob image proxy
// GET /api/img?path=images/dang_tin/home.jpg
// Fetches from private Vercel Blob with server-side token, returns with immutable cache.

export const config = { api: { responseLimit: '10mb' } };

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
  // Block path traversal
  if (path.includes('..') || path.startsWith('/')) {
    return res.status(400).json({ error: 'invalid_path' });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(500).json({ error: 'not_configured', message: 'BLOB_READ_WRITE_TOKEN chưa set' });

  // Derive store hostname from token: vercel_blob_rw_STOREID_HASH → storeid.private.blob.vercel-storage.com
  const parts = token.split('_');
  const storeId = parts[3]?.toLowerCase();
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  const blobUrl = `https://${storeId}.private.blob.vercel-storage.com/${path}`;

  let r;
  try {
    r = await fetch(blobUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    return res.status(502).json({ error: 'fetch_failed', message: e.message });
  }

  if (!r.ok) {
    return res.status(r.status).json({
      error: 'blob_error',
      status: r.status,
      path,
      message: r.status === 404 ? `Ảnh '${path}' chưa upload lên Blob` : `Blob trả ${r.status}`,
    });
  }

  const buffer = Buffer.from(await r.arrayBuffer());
  const ct = r.headers.get('content-type') || 'image/jpeg';

  res.setHeader('Content-Type', ct);
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('X-Blob-Path', path);
  res.send(buffer);
}
