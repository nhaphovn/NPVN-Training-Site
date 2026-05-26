// api/img.js — Private Blob image proxy
// GET /api/img?path=images/dang_tin/home.jpg
// Uses @vercel/blob head() to get a signed downloadUrl, then streams the bytes to client.

import { head } from '@vercel/blob';

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
  if (path.includes('..') || path.startsWith('/')) {
    return res.status(400).json({ error: 'invalid_path' });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(500).json({ error: 'not_configured', message: 'BLOB_READ_WRITE_TOKEN chưa set' });

  // Derive store ID from token — preserve original case (Vercel Blob URLs are case-sensitive)
  const parts = token.split('_');
  const storeId = parts[3];
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  const blobUrl = `https://${storeId}.private.blob.vercel-storage.com/${path}`;

  // Use SDK head() — handles auth correctly and returns a signed downloadUrl
  let meta;
  try {
    meta = await head(blobUrl, { token });
  } catch (e) {
    const msg = String(e?.message || e);
    const is404 = /not.?found|404/i.test(msg) || e?.status === 404;
    if (is404) {
      return res.status(404).json({
        error: 'blob_error', status: 404, path,
        message: `Ảnh '${path}' chưa upload lên Blob`,
      });
    }
    console.error('[api/img] head() failed:', msg);
    return res.status(502).json({ error: 'blob_error', path, message: msg });
  }

  // Fetch via signed downloadUrl (no auth header needed)
  let r;
  try {
    r = await fetch(meta.downloadUrl);
  } catch (e) {
    return res.status(502).json({ error: 'fetch_failed', message: e.message });
  }

  if (!r.ok) {
    return res.status(r.status).json({
      error: 'fetch_failed', path,
      message: `Download URL returned ${r.status}`,
    });
  }

  const buffer = Buffer.from(await r.arrayBuffer());
  const ct = r.headers.get('content-type') || meta.contentType || 'image/jpeg';

  res.setHeader('Content-Type', ct);
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('X-Blob-Path', path);
  res.send(buffer);
}
