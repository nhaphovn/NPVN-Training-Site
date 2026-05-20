// api/upload.js — Vercel Node Serverless Function
// POST /api/upload?filename=xxx.jpg
// Body: raw image bytes
// Response: { url, pathname, size }

import { put } from '@vercel/blob';
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

  const filename = req.query.filename;
  if (!filename) {
    return res.status(400).json({ error: 'filename_required', message: 'Thiếu ?filename= trong URL' });
  }

  // Sanitize
  const clean = String(filename).replace(/[^a-z0-9_\-\.]/gi, '_').toLowerCase();
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

  // Build blob path: images/{module}/{filename}
  const parts    = clean.split('_');
  const module   = parts.length >= 2 ? `${parts[0]}_${parts[1]}` : parts[0];
  const blobPath = `images/${module}/${clean}`;

  try {
    const blob = await put(blobPath, buffer, {
      access:          'public',
      contentType:     contentType,
      addRandomSuffix: false,
    });

    return res.status(200).json({
      ok:       true,
      url:      blob.url,
      pathname: blob.pathname,
      size:     buffer.length,
      filename: clean,
      module:   module,
    });
  } catch (err) {
    console.error('[upload] error:', err);
    const isToken = err.message?.includes('token') || err.message?.includes('401');
    return res.status(500).json({
      error: 'upload_failed',
      message: isToken
        ? 'BLOB_READ_WRITE_TOKEN chưa đúng — check Vercel env'
        : err.message,
    });
  }
}
