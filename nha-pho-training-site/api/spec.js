// api/spec.js — Vercel Edge Function
// POST /api/spec?module=xxx&kind=hotspots|stepspec   → save JSON
// GET  /api/spec?module=xxx&kind=hotspots|stepspec   → retrieve JSON
//
// Storage path: specs/{module}/{kind}.json
// Required env: BLOB_READ_WRITE_TOKEN

import { put, list } from '@vercel/blob';

export const config = { runtime: 'edge' };

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS },
  });
}

const VALID_KINDS = ['hotspots', 'stepspec', 'figma'];

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });

  const { searchParams } = new URL(req.url);
  const moduleId = searchParams.get('module');
  const kind     = searchParams.get('kind');

  if (!moduleId) return json({ error: 'module_required' }, 400);
  if (!kind || !VALID_KINDS.includes(kind)) {
    return json({ error: 'invalid_kind', message: `kind phải là một trong: ${VALID_KINDS.join(', ')}` }, 400);
  }

  // Sanitize moduleId — chỉ a-z 0-9 _
  const cleanModule = moduleId.replace(/[^a-z0-9_]/gi, '_').toLowerCase();
  const path = `specs/${cleanModule}/${kind}.json`;

  // ── GET: retrieve ───────────────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const res = await list({ prefix: path, limit: 1 });
      const blob = res.blobs[0];
      if (!blob) return json({ error: 'not_found', message: `Spec '${kind}' chưa tồn tại cho module '${cleanModule}'` }, 404);

      const r = await fetch(blob.url);
      const text = await r.text();
      try {
        return json({ ok: true, module: cleanModule, kind, content: JSON.parse(text), url: blob.url, uploadedAt: blob.uploadedAt });
      } catch {
        return json({ ok: true, module: cleanModule, kind, content: text, url: blob.url, raw: true });
      }
    } catch (err) {
      return json({ error: 'get_failed', message: err.message }, 500);
    }
  }

  // ── POST: save ─────────────────────────────────────────────────────
  if (req.method === 'POST') {
    // Auth (optional)
    const adminToken = process.env.ADMIN_SAVE_TOKEN;
    if (adminToken) {
      if (req.headers.get('x-admin-token') !== adminToken) {
        return json({ error: 'unauthorized' }, 401);
      }
    }

    let body;
    try {
      const text = await req.text();
      body = JSON.parse(text);
    } catch (e) {
      return json({ error: 'invalid_json', message: e.message }, 400);
    }

    const content = JSON.stringify(body, null, 2);

    if (content.length > 500_000) {
      return json({ error: 'too_large', message: 'Spec vượt 500KB' }, 413);
    }

    try {
      const blob = await put(path, content, {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,  // overwrite ok
      });

      return json({
        ok:      true,
        module:  cleanModule,
        kind,
        url:     blob.url,
        size:    content.length,
        message: `Đã lưu spec '${kind}' cho module '${cleanModule}'`,
      });
    } catch (err) {
      return json({ error: 'save_failed', message: err.message }, 500);
    }
  }

  return json({ error: 'method_not_allowed' }, 405);
}
