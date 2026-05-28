// api/img.js — Blob image proxy
// GET /api/img?path=images/dang_tin/home.jpg
//
// Public blobs (upload.js access:'public'): 302 redirect to CDN URL — fast, no server bandwidth.
// Private blobs (legacy uploads):           server-side proxy with Bearer auth — no redirect.
//
// Switching all uploads to access:'public' eliminates the proxy path for new uploads.
// Existing private blobs are proxied until re-uploaded via admin.

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

  // Derive store ID: token format is vercel_blob_rw_<storeId>_<secret>
  const parts = token.split('_');
  const storeId = parts[3];
  if (!storeId) return res.status(500).json({ error: 'bad_token_format' });

  // ── Path 1: Public blob (new uploads) ──────────────────────────────────
  // head() on the public CDN URL — if it exists, redirect browser there directly.
  // Public URLs are permanent, no auth, no server bandwidth.
  const publicUrl = `https://${storeId}.public.blob.vercel-storage.com/${path}`;
  try {
    const meta = await head(publicUrl, { token });
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('X-Blob-Path', path);
    return res.redirect(302, meta.url);
  } catch (e) {
    const is404 = /not.?found|404/i.test(String(e?.message || e)) || e?.status === 404;
    if (!is404) {
      console.error('[api/img] public head() error:', e?.message || e);
      return res.status(502).json({ error: 'blob_error', path, message: String(e?.message || e) });
    }
    // 404 → blob not public, fall through to private proxy
  }

  // ── Path 2: Private blob (legacy uploads) ──────────────────────────────
  // Fetch bytes server-side with Bearer auth then pipe to client.
  // Browser cannot access private blob URLs directly (requires Bearer token).
  const privateUrl = `https://${storeId}.private.blob.vercel-storage.com/${path}`;
  let upstream;
  try {
    upstream = await fetch(privateUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.error('[api/img] fetch failed:', e.message);
    return res.status(502).json({ error: 'fetch_failed', path, message: e.message });
  }

  if (upstream.status === 404) {
    return res.status(404).json({
      error: 'not_found', path,
      message: `Ảnh '${path}' chưa upload lên Blob`,
    });
  }
  if (!upstream.ok) {
    console.error('[api/img] upstream error:', upstream.status, path);
    return res.status(502).json({ error: 'upstream_error', status: upstream.status, path });
  }

  const buffer = await upstream.arrayBuffer();
  const ct = upstream.headers.get('content-type') || 'image/jpeg';
  res.setHeader('Content-Type', ct);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('X-Blob-Path', path);
  return res.send(Buffer.from(buffer));
}
