// api/spec.js — Vercel Node Serverless Function
// POST /api/spec?module=xxx&kind=hotspots|stepspec   → save JSON
// GET  /api/spec?module=xxx&kind=hotspots|stepspec   → retrieve JSON
//
// Path: specs/{module}/{kind}.json

import { put, list } from '@vercel/blob';

const VALID_KINDS = ['hotspots', 'stepspec', 'figma'];

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const moduleId = req.query.module;
  const kind     = req.query.kind;

  if (!moduleId) return res.status(400).json({ error: 'module_required' });
  if (!kind || !VALID_KINDS.includes(kind)) {
    return res.status(400).json({ error: 'invalid_kind', message: `kind phải là: ${VALID_KINDS.join(', ')}` });
  }

  const cleanModule = String(moduleId).replace(/[^a-z0-9_]/gi, '_').toLowerCase();
  const path = `specs/${cleanModule}/${kind}.json`;

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) return res.status(500).json({ error: 'not_configured', message: 'BLOB_READ_WRITE_TOKEN chưa set' });

  // ── GET ─────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const r = await list({ prefix: path, limit: 10 });
      const sorted = r.blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
      const blob = sorted[0];
      if (!blob) {
        return res.status(404).json({ error: 'not_found', message: `Spec '${kind}' chưa tồn tại cho module '${cleanModule}'` });
      }
      const fr   = await fetch(blob.url, { headers: { Authorization: `Bearer ${blobToken}` } });
      const text = await fr.text();
      try {
        return res.status(200).json({ ok: true, module: cleanModule, kind, content: JSON.parse(text), url: blob.url, uploadedAt: blob.uploadedAt });
      } catch {
        return res.status(200).json({ ok: true, module: cleanModule, kind, content: text, url: blob.url, raw: true });
      }
    } catch (err) {
      return res.status(500).json({ error: 'get_failed', message: err.message });
    }
  }

  // ── POST ────────────────────────────────────────
  if (req.method === 'POST') {
    const adminToken = process.env.ADMIN_SAVE_TOKEN;
    if (adminToken && req.headers['x-admin-token'] !== adminToken) {
      return res.status(401).json({ error: 'unauthorized' });
    }

    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); }
      catch (e) { return res.status(400).json({ error: 'invalid_json', message: e.message }); }
    }
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'body_required', message: 'Body phải là JSON' });
    }

    const content = JSON.stringify(body, null, 2);
    if (content.length > 500_000) {
      return res.status(413).json({ error: 'too_large', message: 'Spec vượt 500KB' });
    }

    try {
      const blob = await put(path, content, {
        access:          'private',
        contentType:     'application/json',
        addRandomSuffix: false,
      });
      return res.status(200).json({
        ok:      true,
        module:  cleanModule,
        kind,
        url:     blob.url,
        size:    content.length,
        message: `Đã lưu spec '${kind}' cho module '${cleanModule}'`,
      });
    } catch (err) {
      return res.status(500).json({ error: 'save_failed', message: err.message });
    }
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
