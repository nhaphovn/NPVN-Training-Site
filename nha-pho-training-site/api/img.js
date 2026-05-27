// api/img.js — Blob image proxy
// GET /api/img?path=images/dang_tin/home.jpg
// Tries public blob URL first (new uploads), falls back to private (legacy).
// Strips ?download=1 so <img> renders inline instead of triggering download.

import { head } from '@vercel/blob';

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

  // Derive store ID from token (format: vercel_blob_rw_<storeId>_<secret>)
  const parts = token.split('_');
  const storeId = parts[3];
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  // Try public subdomain first (blobs uploaded with access: 'public'),
  // fall back to private subdomain (blobs uploaded with access: 'private').
  let meta;
  for (const subdomain of ['public', 'private']) {
    const blobUrl = `https://${storeId}.${subdomain}.blob.vercel-storage.com/${path}`;
    try {
      meta = await head(blobUrl, { token });
      break;
    } catch (e) {
      const is404 = /not.?found|404/i.test(String(e?.message || e)) || e?.status === 404;
      if (!is404) {
        console.error(`[api/img] head() error (${subdomain}):`, e?.message || e);
        return res.status(502).json({ error: 'blob_error', path, message: String(e?.message || e) });
      }
      // 404 on this subdomain → try the other
    }
  }

  if (!meta) {
    return res.status(404).json({
      error: 'not_found', path,
      message: `Ảnh '${path}' chưa upload lên Blob`,
    });
  }

  // meta.url = direct CDN URL (public blobs: permanent; private blobs: URL is the key)
  // meta.downloadUrl = same but with ?download=1 (forces Content-Disposition: attachment)
  // Always prefer meta.url and strip ?download=1 so <img> renders inline.
  let redirectUrl = meta.url || meta.downloadUrl;
  if (!redirectUrl) {
    return res.status(502).json({ error: 'no_url', path });
  }

  try {
    const u = new URL(redirectUrl);
    u.searchParams.delete('download');
    redirectUrl = u.toString();
  } catch (_) {}

  // Public blob URLs never expire — cache aggressively.
  // Private blob URLs are security-by-obscurity — 1h cache is fine.
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Blob-Path', path);
  return res.redirect(302, redirectUrl);
}
