// api/manifest.js — Vercel Edge Function
// GET /api/manifest?module=quan_ly_ung_vien
// Trả về toàn bộ assets cho 1 module (images + specs) từ Vercel Blob

import { list } from '@vercel/blob';

export const config = { runtime: 'edge' };

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS },
  });
}

// Parse pathname như: images/quan_ly_ung_vien/quan_ly_ung_vien_b01_home.jpg
// Trả về: { module, key, type }
function parsePath(pathname) {
  const m = pathname.match(/^(images|specs)\/([^\/]+)\/(.+)$/);
  if (!m) return null;
  const [, type, module, filename] = m;
  // Extract key: bỏ prefix module và extension
  // VD: quan_ly_ung_vien_b01_home.jpg → b01_home
  let key = filename.replace(/\.[^.]+$/, ''); // remove extension
  if (key.startsWith(module + '_')) key = key.slice(module.length + 1);
  return { type, module, filename, key };
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (req.method !== 'GET')   return json({ error: 'method_not_allowed' }, 405);

  const { searchParams } = new URL(req.url);
  const moduleId = searchParams.get('module');

  if (!moduleId) {
    return json({
      error: 'module_required',
      message: 'Thiếu ?module= trong URL',
      hint:   '/api/manifest?module=quan_ly_ung_vien'
    }, 400);
  }

  try {
    // List ảnh
    const imgRes = await list({
      prefix: `images/${moduleId}/`,
      limit:  1000,
    });

    // List specs
    const specRes = await list({
      prefix: `specs/${moduleId}/`,
      limit:  100,
    });

    // Build images array — sort by filename để đúng thứ tự bước
    const images = imgRes.blobs
      .map(b => {
        const p = parsePath(b.pathname);
        return {
          key:       p?.key || b.pathname,
          url:       b.url,
          pathname:  b.pathname,
          size:      b.size,
          uploadedAt: b.uploadedAt,
        };
      })
      .sort((a, b) => a.key.localeCompare(b.key));

    // Build specs — fetch content nếu là JSON nhỏ
    const specs = {};
    for (const b of specRes.blobs) {
      const p = parsePath(b.pathname);
      if (!p) continue;
      if (b.size > 200_000) {
        // File quá lớn — chỉ trả URL
        specs[p.key] = { url: b.url, size: b.size, uploadedAt: b.uploadedAt };
        continue;
      }
      try {
        const r = await fetch(b.url);
        const text = await r.text();
        const parsed = JSON.parse(text);
        specs[p.key] = { content: parsed, url: b.url, size: b.size, uploadedAt: b.uploadedAt };
      } catch (e) {
        specs[p.key] = { url: b.url, error: 'parse_failed: ' + e.message };
      }
    }

    return json({
      module:    moduleId,
      images:    images,
      imageCount: images.length,
      specs:     specs,
      hasHotspots: !!specs.hotspots?.content,
      hasStepSpec: !!specs.stepspec?.content,
      generatedAt: new Date().toISOString(),
    });

  } catch (err) {
    const isToken = err.message?.includes('token') || err.message?.includes('401');
    return json({
      error:   'manifest_failed',
      message: isToken
        ? 'BLOB_READ_WRITE_TOKEN chưa đúng — check Vercel env'
        : err.message,
    }, 500);
  }
}
