// api/img.js — Blob image redirect
// GET /api/img?path=images/dang_tin/home.jpg
// Calls head() to get signed downloadUrl, then 302-redirects browser to it.
// Browser fetches directly from Vercel Blob CDN — avoids server-side fetch 403.

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

  const blobUrl = `https://${storeId}.private.blob.vercel-storage.com/${path}`;

  let meta;
  try {
    meta = await head(blobUrl, { token });
  } catch (e) {
    const msg = String(e?.message || e);
    const is404 = /not.?found|404/i.test(msg) || e?.status === 404;
    if (is404) {
      return res.status(404).json({
        error: 'not_found', path,
        message: `Ảnh '${path}' chưa upload lên Blob`,
      });
    }
    console.error('[api/img] head() failed:', msg);
    return res.status(502).json({ error: 'blob_error', path, message: msg });
  }

  // downloadUrl: Vercel-signed URL valid for ~60s — redirect browser to it directly.
  // Server-side fetch(downloadUrl) returns 403 (CDN blocks server proxying of signed URLs).
  const downloadUrl = meta.downloadUrl || meta.url;
  if (!downloadUrl) {
    return res.status(502).json({ error: 'no_download_url', path });
  }

  // Short cache on redirect: 60s (signed URL expires, so browser must re-validate)
  res.setHeader('Cache-Control', 'public, max-age=60');
  res.setHeader('X-Blob-Path', path);
  return res.redirect(302, downloadUrl);
}
