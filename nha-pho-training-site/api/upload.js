// api/upload.js — Vercel Node Serverless Function
// POST /api/upload?module=xxx&key=yyy
// Body: raw image or video bytes
// Headers: content-type (determines image vs video routing)
// Response: { ok, url, proxyUrl, pathname, size, filename, module, key, mediaType }

import { put } from '@vercel/blob';
import { Buffer } from 'buffer';

// --- Type tables ---
const IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);

const IMAGE_EXT_RE = /\.(jpg|jpeg|png|webp)$/i;
const VIDEO_EXT_RE = /\.(mp4|webm|mov)$/i;

const MAX_IMAGE_BYTES = 5  * 1024 * 1024;  //  5 MB
const MAX_VIDEO_BYTES = 50 * 1024 * 1024;  // 50 MB

// Disable body parser — we need raw bytes
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
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, x-admin-token, x-tenant, x-role, x-module'
  );
}

// Sniff image content-type from magic bytes
function sniffImageType(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'image/png';
  if (buf[0] === 0xFF && buf[1] === 0xD8) return 'image/jpeg';
  // WebP: RIFF....WEBP — must check bytes 8-11, not just first 2 (RIFF is also used by AVI/WAV)
  if (buf.length >= 12 && buf[0]===0x52 && buf[1]===0x49 && buf[2]===0x46 && buf[3]===0x46
      && buf[8]===0x57 && buf[9]===0x45 && buf[10]===0x42 && buf[11]===0x50) return 'image/webp';
  return null;
}

// Derive file extension from content-type
function extForType(ct) {
  const map = {
    'image/jpeg':     '.jpg',
    'image/png':      '.png',
    'image/webp':     '.webp',
    'video/mp4':      '.mp4',
    'video/webm':     '.webm',
    'video/quicktime':'.mov',
  };
  return map[ct] || '';
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'method_not_allowed' });

  // --- ABAC prep — read, log, do NOT enforce yet ---
  const abacTenant = req.headers['x-tenant']  || null;
  const abacRole   = req.headers['x-role']    || null;
  const abacModule = req.headers['x-module']  || null;
  console.log('[upload] ABAC-prep:', { tenant: abacTenant, role: abacRole, module: abacModule });

  // --- Auth ---
  // Fails closed when ADMIN_UPLOAD_TOKEN is set; open when not configured (matches save.js behavior).
  // Set ADMIN_UPLOAD_TOKEN on Vercel to enforce token requirement.
  const adminToken = process.env.ADMIN_UPLOAD_TOKEN;
  if (adminToken && req.headers['x-admin-token'] !== adminToken) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken) {
    return res.status(500).json({
      error:   'not_configured',
      message: 'BLOB_READ_WRITE_TOKEN chưa set trên Vercel',
    });
  }

  // --- Determine media kind from declared Content-Type header ---
  const declaredType = (req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
  const isVideo = VIDEO_TYPES.has(declaredType);
  const isImage = IMAGE_TYPES.has(declaredType);

  // We accept image OR video; unknown types are rejected after body read to avoid wasted work.
  // (We validate extension below too.)

  // --- Resolve blobPath ---
  // Accept:
  //   ?module=dat_lich&key=menu          → images/dat_lich/menu.jpg  (images)
  //                                        videos/dat_lich/menu.mp4  (videos)
  //   ?filename=dat_lich_menu.jpg        → legacy, kept for compat
  const moduleId = req.query.module;
  const keyId    = req.query.key;

  let blobPath, clean;

  if (moduleId && keyId) {
    const safeModule = moduleId.replace(/[^a-z0-9_]/gi, '_').toLowerCase();
    const safeKey    = keyId.replace(/[^a-z0-9_\-\.]/gi, '_').toLowerCase();

    // Determine extension: prefer one already in key, else derive from declared type
    let ext = '';
    if (isVideo) {
      ext = VIDEO_EXT_RE.test(safeKey) ? '' : extForType(declaredType);
    } else {
      ext = IMAGE_EXT_RE.test(safeKey) ? '' : '.jpg';
    }

    clean    = safeKey + ext;
    const folder = isVideo ? 'videos' : 'images';
    blobPath = `${folder}/${safeModule}/${clean}`;

  } else {
    const filename = req.query.filename;
    if (!filename) {
      return res.status(400).json({
        error:   'params_required',
        message: 'Cần ?module=&key= hoặc ?filename=',
      });
    }
    clean = String(filename).replace(/[^a-z0-9_\-\.\/]/gi, '_').toLowerCase();
    if (clean.includes('/')) {
      // If caller already provided a path, respect it; add folder prefix only if missing
      if (isVideo) {
        blobPath = clean.startsWith('videos/') ? clean : `videos/${clean}`;
      } else {
        blobPath = clean.startsWith('images/') ? clean : `images/${clean}`;
      }
    } else {
      // Legacy: derive module from underscore-separated filename
      const parts = clean.replace(/\.[^.]+$/, '').split('_');
      const mod   = parts.slice(0, -1).join('_') || parts[0];
      const folder = isVideo ? 'videos' : 'images';
      blobPath = `${folder}/${mod}/${clean}`;
    }
  }

  // --- Validate extension ---
  const validExt = isVideo ? VIDEO_EXT_RE.test(clean) : IMAGE_EXT_RE.test(clean);
  if (!validExt && !isVideo && !isImage) {
    return res.status(400).json({
      error:   'invalid_type',
      message: 'Chỉ chấp nhận jpg/png/webp (ảnh) hoặc mp4/webm/mov (video)',
    });
  }
  if (!validExt) {
    return res.status(400).json({
      error:   'invalid_extension',
      message: isVideo
        ? 'Video phải là .mp4, .webm hoặc .mov'
        : 'Ảnh phải là .jpg, .png hoặc .webp',
    });
  }

  // --- Read body ---
  let buffer;
  try {
    buffer = await readRawBody(req);
  } catch (e) {
    return res.status(400).json({ error: 'read_failed', message: e.message });
  }

  if (buffer.length < 100) {
    return res.status(400).json({ error: 'file_empty' });
  }

  // --- Size limit (per media type) ---
  if (isVideo && buffer.length > MAX_VIDEO_BYTES) {
    return res.status(413).json({
      error:   'video_too_large',
      message: 'Video vượt 50MB',
    });
  }
  if (!isVideo && buffer.length > MAX_IMAGE_BYTES) {
    return res.status(413).json({
      error:   'file_too_large',
      message: `Vượt ${MAX_IMAGE_BYTES / 1024 / 1024}MB`,
    });
  }

  // --- Resolve final content-type ---
  let contentType = declaredType;
  if (!isVideo) {
    // Prefer magic-byte sniff for images (more reliable than caller's header)
    contentType = sniffImageType(buffer) || declaredType || 'image/jpeg';
  }

  // --- Upload to Vercel Blob ---
  try {
    const blob = await put(blobPath, buffer, {
      access:          'public',
      contentType,
      addRandomSuffix: false,
      allowOverwrite:  true,
    });

    const resolvedModule = moduleId || blobPath.split('/')[1];
    const resolvedKey    = keyId    || clean.replace(/\.[^.]+$/, '');
    const proxyUrl       = `/api/img?path=${blob.pathname}`;

    const responseBody = {
      ok:        true,
      url:       blob.url,
      proxyUrl,
      pathname:  blob.pathname,
      size:      buffer.length,
      filename:  clean,
      module:    resolvedModule,
      key:       resolvedKey,
      mediaType: isVideo ? 'video' : 'image',
    };

    // Add video-specific fields
    if (isVideo) {
      responseBody.videoUrl = blob.url;
    }

    console.log('[upload] success:', { blobPath, size: buffer.length, mediaType: responseBody.mediaType });
    return res.status(200).json(responseBody);

  } catch (err) {
    console.error('[upload] error:', err);
    return res.status(500).json({
      error:   'upload_failed',
      message: err.message,
    });
  }
}
