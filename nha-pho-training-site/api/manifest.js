// api/manifest.js — Vercel Node Serverless Function
// GET /api/manifest?module=xxx
// List images + specs cho 1 module từ Vercel Blob

import { list } from '@vercel/blob';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store');
}

function parsePath(pathname) {
  const m = pathname.match(/^(images|specs)\/([^\/]+)\/(.+)$/);
  if (!m) return null;
  const [, type, module, filename] = m;
  let key = filename.replace(/\.[^.]+$/, '');
  if (key.startsWith(module + '_')) key = key.slice(module.length + 1);
  return { type, module, filename, key };
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET')   return res.status(405).json({ error: 'method_not_allowed' });

  const moduleId = req.query.module;
  if (!moduleId) {
    return res.status(400).json({
      error: 'module_required',
      message: 'Thiếu ?module= trong URL',
      hint:   '/api/manifest?module=quan_ly_ung_vien'
    });
  }

  try {
    const imgRes  = await list({ prefix: `images/${moduleId}/`, limit: 1000 });
    const specRes = await list({ prefix: `specs/${moduleId}/`,  limit: 100  });

    const images = imgRes.blobs
      .map(b => {
        const p = parsePath(b.pathname);
        return {
          key:        p?.key || b.pathname,
          url:        b.url,
          proxyUrl:   `/api/img?path=${encodeURIComponent(b.pathname)}`,
          pathname:   b.pathname,
          size:       b.size,
          uploadedAt: b.uploadedAt,
        };
      })
      .sort((a, b) => a.key.localeCompare(b.key));

    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    const fetchOpts = blobToken ? { headers: { Authorization: `Bearer ${blobToken}` } } : {};

    const specs = {};
    for (const b of specRes.blobs) {
      const p = parsePath(b.pathname);
      if (!p) continue;
      if (b.size > 200_000) {
        specs[p.key] = { url: b.url, size: b.size, uploadedAt: b.uploadedAt };
        continue;
      }
      try {
        const r = await fetch(b.url, fetchOpts);
        const text = await r.text();
        const parsed = JSON.parse(text);
        specs[p.key] = { content: parsed, url: b.url, size: b.size, uploadedAt: b.uploadedAt };
      } catch (e) {
        specs[p.key] = { url: b.url, error: 'parse_failed: ' + e.message };
      }
    }

    return res.status(200).json({
      module:     moduleId,
      images,
      imageCount: images.length,
      specs,
      hasHotspots: !!specs.hotspots?.content,
      hasStepSpec: !!specs.stepspec?.content,
      generatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[manifest] error:', err);
    const isToken = err.message?.includes('token') || err.message?.includes('401');
    return res.status(500).json({
      error: 'manifest_failed',
      message: isToken
        ? 'BLOB_READ_WRITE_TOKEN chưa đúng'
        : err.message,
    });
  }
}
