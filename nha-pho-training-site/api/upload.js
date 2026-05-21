// api/upload.js — Vercel Node Serverless Function
// POST /api/upload?filename=xxx.jpg
// Body: raw image bytes
// Response: { url, pathname, size }

import { Buffer } from 'buffer';

const ALLOWED_EXT = /\.(jpg|jpeg|png|webp)$/i;
const MAX_SIZE_MB = 5;

// Disable body parser - we need raw bytes
export const config = {
  api: { bodyParser: false },
};

// Helper: read raw body as Buffer
async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'method_not_allowed' });

  // Optional auth
  const adminToken = process.env.ADMIN_UPLOAD_TOKEN;
  if (adminToken && req.headers['x-admin-token'] !== adminToken) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return res.status(500).json({ error: 'not_configured', message: 'BLOB_READ_WRITE_TOKEN chưa set trên Vercel' });
  }

  // Accept either:
  //   ?module=dat_lich_dau_khach&key=menu        → images/dat_lich_dau_khach/menu.jpg
  //   ?filename=dat_lich_dau_khach_menu.jpg      → legacy, kept for compat
  const moduleId = req.query.module;
  const keyId    = req.query.key;

  let blobPath, clean;
  if (moduleId && keyId) {
    const safeModule = moduleId.replace(/[^a-z0-9_]/gi, '_').toLowerCase();
    const safeKey    = keyId.replace(/[^a-z0-9_\-\.]/gi, '_').toLowerCase();
    const ext        = safeKey.match(/\.(jpg|jpeg|png|webp)$/i) ? '' : '.jpg';
    clean    = safeKey + ext;
    blobPath = `images/${safeModule}/${clean}`;
  } else {
    const filename = req.query.filename;
    if (!filename) {
      return res.status(400).json({ error: 'params_required', message: 'Cần ?module=&key= hoặc ?filename=' });
    }
    clean = String(filename).replace(/[^a-z0-9_\-\.\/]/gi, '_').toLowerCase();
    if (clean.includes('/')) {
      blobPath = clean.startsWith('images/') ? clean : `images/${clean}`;
    } else {
      // Legacy: parse module from underscore-separated filename
      const parts   = clean.replace(/\.[^.]+$/, '').split('_');
      const mod     = parts.slice(0, -1).join('_') || parts[0];
      blobPath = `images/${mod}/${clean}`;
    }
  }

  if (!ALLOWED_EXT.test(clean)) {
    return res.status(400).json({ error: 'invalid_extension', message: 'Chỉ jpg, png, webp' });
  }

  let buffer;
  try {
    buffer = await readRawBody(req);
  } catch (e) {
    return res.status(400).json({ error: 'read_failed', message: e.message });
  }

  if (buffer.length > MAX_SIZE_MB * 1024 * 1024) {
    return res.status(413).json({ error: 'file_too_large', message: `Vượt ${MAX_SIZE_MB}MB` });
  }
  if (buffer.length < 100) {
    return res.status(400).json({ error: 'file_empty' });
  }

  // Detect content type
  let contentType = req.headers['content-type'] || 'image/jpeg';
  if (buffer[0] === 0x89 && buffer[1] === 0x50)      contentType = 'image/png';
  else if (buffer[0] === 0xFF && buffer[1] === 0xD8) contentType = 'image/jpeg';
  else if (buffer[0] === 0x52 && buffer[1] === 0x49) contentType = 'image/webp';

  try {
    // Bypass @vercel/blob SDK: SDK throws "access must be public" client-side for
    // any access !== 'public', before the HTTP call even fires. Private stores need
    // no x-access header — just omit it. REST API v8: pathname goes in URL path.
    const uploadRes = await fetch(`https://blob.vercel-storage.com/${blobPath}`, {
      method: 'PUT',
      headers: {
        'authorization':       `Bearer ${blobToken}`,
        'x-api-version':       '8',
        'x-access':            'private',
        'x-add-random-suffix': '0',
        'content-type':        contentType,
        'x-content-length':    String(buffer.length),
      },
      body: buffer,
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      throw new Error(`Blob API ${uploadRes.status}: ${errText.slice(0, 300)}`);
    }

    const blob = await uploadRes.json();

    const proxyUrl = `/api/img?path=${blob.pathname}`;
    return res.status(200).json({
      ok:       true,
      url:      blob.url,
      proxyUrl,
      pathname: blob.pathname,
      size:     buffer.length,
      filename: clean,
      module:   moduleId || blobPath.split('/')[1],
      key:      keyId    || clean.replace(/\.[^.]+$/, ''),
    });
  } catch (err) {
    console.error('[upload] error:', err);
    return res.status(500).json({
      error:   'upload_failed',
      message: err.message,
    });
  }
}
