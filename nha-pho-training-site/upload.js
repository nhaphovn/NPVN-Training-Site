// api/upload.js — Vercel Edge Function
// Upload ảnh lên Vercel Blob Storage, trả về public URL
// Required env var: BLOB_READ_WRITE_TOKEN (set trong Vercel Dashboard)
//
// POST /api/upload?filename=dang_tin_b01_home.jpg
// Body: raw image bytes (multipart/form-data hoặc binary)
// Response: { url, pathname, size }

import { put } from '@vercel/blob';

export const config = { runtime: 'edge' };

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

// Validate file type — chỉ cho ảnh
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_SIZE_MB   = 5;

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
  if (req.method !== 'POST')   return json({ error: 'method_not_allowed' }, 405);

  // Check token (optional — set ADMIN_UPLOAD_TOKEN env var để bảo mật)
  const adminToken = process.env.ADMIN_UPLOAD_TOKEN;
  if (adminToken) {
    const provided = req.headers.get('x-admin-token');
    if (provided !== adminToken) return json({ error: 'unauthorized' }, 401);
  }

  const { searchParams } = new URL(req.url);
  const filename = searchParams.get('filename');

  if (!filename) return json({ error: 'filename_required', message: 'Thiếu ?filename= trong URL' }, 400);

  // Sanitize filename: chỉ cho phép a-z, 0-9, _, -, .
  const clean = filename.replace(/[^a-z0-9_\-\.]/gi, '_').toLowerCase();
  if (!clean.match(/\.(jpg|jpeg|png|webp)$/i)) {
    return json({ error: 'invalid_extension', message: 'Chỉ hỗ trợ jpg, png, webp' }, 400);
  }

  // Read body
  const arrayBuffer = await req.arrayBuffer();
  const sizeBytes   = arrayBuffer.byteLength;

  if (sizeBytes > MAX_SIZE_MB * 1024 * 1024) {
    return json({ error: 'file_too_large', message: `File vượt ${MAX_SIZE_MB}MB` }, 413);
  }
  if (sizeBytes < 100) {
    return json({ error: 'file_empty', message: 'File quá nhỏ hoặc rỗng' }, 400);
  }

  // Detect content type từ magic bytes
  const bytes = new Uint8Array(arrayBuffer.slice(0, 4));
  let contentType = 'image/jpeg';
  if (bytes[0] === 0x89 && bytes[1] === 0x50) contentType = 'image/png';
  else if (bytes[0] === 0xFF && bytes[1] === 0xD8) contentType = 'image/jpeg';
  else if (bytes[0] === 0x52 && bytes[1] === 0x49) contentType = 'image/webp'; // RIFF

  // Path trong blob: images/{module}/{filename}
  // Ví dụ: images/dang_tin/dang_tin_b01_home.jpg
  const parts    = clean.split('_');
  const module   = parts.length >= 2 ? `${parts[0]}_${parts[1]}` : parts[0];
  const blobPath = `images/${module}/${clean}`;

  try {
    const blob = await put(blobPath, arrayBuffer, {
      access:      'public',
      contentType: contentType,
      addRandomSuffix: false,  // giữ tên cố định để overwrite được
    });

    return json({
      ok:       true,
      url:      blob.url,
      pathname: blob.pathname,
      size:     sizeBytes,
      filename: clean,
      module:   module,
    });
  } catch (err) {
    console.error('Blob upload error:', err);
    // Check nếu là token error
    const isToken = err.message?.includes('token') || err.message?.includes('401');
    return json({
      error:   'upload_failed',
      message: isToken
        ? 'BLOB_READ_WRITE_TOKEN chưa đúng — check Vercel Environment Variables'
        : `Upload thất bại: ${err.message}`,
    }, 500);
  }
}
