// upload-service.js — Browser client module for /api/upload
// Vanilla JS, no framework, no build step.
// Usage: import UploadService from './upload-service.js';
//        const result = await UploadService.upload({ file, moduleId, token, onProgress });

const IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);

const MAX_IMAGE_BYTES = 5  * 1024 * 1024;  //  5 MB
const MAX_VIDEO_BYTES = 50 * 1024 * 1024;  // 50 MB

/**
 * Detect media category from MIME type string.
 * @param {string} mimeType
 * @returns {'image'|'video'|null}
 */
function detectMediaType(mimeType) {
  const t = (mimeType || '').toLowerCase();
  if (IMAGE_TYPES.has(t)) return 'image';
  if (VIDEO_TYPES.has(t)) return 'video';
  return null;
}

/**
 * Upload a single file to /api/upload using XMLHttpRequest so upload progress
 * is available via the onProgress callback.
 *
 * @param {object}   options
 * @param {File}     options.file        - The File object from an <input type="file">
 * @param {string}   options.moduleId    - Content module ID, e.g. "dang_tin"
 * @param {string}   [options.key]       - Optional blob key override (default: file.name stem)
 * @param {string}   [options.token]     - ADMIN_UPLOAD_TOKEN value (sent as x-admin-token)
 * @param {string}   [options.tenant]    - ABAC prep: tenant identifier
 * @param {string}   [options.role]      - ABAC prep: user role
 * @param {Function} [options.onProgress]- Called with a number 0-100 as upload progresses
 * @param {string}   [options.endpoint]  - Override API endpoint (default: '/api/upload')
 *
 * @returns {Promise<{
 *   ok: boolean,
 *   url?: string,
 *   proxyUrl?: string,
 *   type?: 'image'|'video',
 *   size?: number,
 *   filename?: string,
 *   error?: string,
 *   message?: string
 * }>}
 */
function upload({ file, moduleId, key, token, tenant, role, onProgress, endpoint }) {
  return new Promise((resolve) => {
    // --- Client-side validation ---
    if (!file || !(file instanceof Blob)) {
      return resolve({ ok: false, error: 'invalid_file', message: 'file phải là một File/Blob hợp lệ' });
    }
    if (!moduleId) {
      return resolve({ ok: false, error: 'module_required', message: 'moduleId là bắt buộc' });
    }

    const mediaType = detectMediaType(file.type);
    if (!mediaType) {
      return resolve({
        ok:      false,
        error:   'invalid_type',
        message: 'Chỉ chấp nhận jpg/png/webp (ảnh) hoặc mp4/webm/mov (video)',
      });
    }

    const maxBytes = mediaType === 'video' ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES;
    if (file.size > maxBytes) {
      const limitMB = maxBytes / 1024 / 1024;
      return resolve({
        ok:      false,
        error:   'file_too_large',
        message: `${mediaType === 'video' ? 'Video' : 'Ảnh'} vượt ${limitMB}MB (file hiện tại: ${(file.size / 1024 / 1024).toFixed(1)}MB)`,
      });
    }

    // --- Build query string ---
    // Key defaults to the filename stem (without extension) of the uploaded file
    const resolvedKey = key || file.name.replace(/\.[^.]+$/, '').replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
    const safeModule  = moduleId.replace(/[^a-z0-9_]/gi, '_').toLowerCase();

    const apiBase = endpoint || '/api/upload';
    const url     = `${apiBase}?module=${encodeURIComponent(safeModule)}&key=${encodeURIComponent(resolvedKey)}`;

    // --- Build FormData — server reads raw body, but we post the file as raw ---
    // NOTE: The server uses bodyParser:false and reads the raw stream.
    // We send the raw file bytes directly (not multipart) to match the server contract.
    // XHR will set Content-Type from the File object's type automatically when we send
    // the File directly (not FormData). This lets the server sniff image/video correctly.

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    // Auth + ABAC prep headers
    if (token)    xhr.setRequestHeader('x-admin-token', token);
    if (moduleId) xhr.setRequestHeader('x-module', moduleId);
    if (tenant)   xhr.setRequestHeader('x-tenant', tenant);
    if (role)     xhr.setRequestHeader('x-role', role);

    // Content-Type must match the file so the server routes image vs video correctly
    xhr.setRequestHeader('Content-Type', file.type);

    // --- Progress ---
    if (typeof onProgress === 'function') {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          const percent = Math.round((evt.loaded / evt.total) * 100);
          onProgress(percent);
        }
      });
    }

    // --- Response handlers ---
    xhr.addEventListener('load', () => {
      let body;
      try {
        body = JSON.parse(xhr.responseText);
      } catch {
        return resolve({
          ok:      false,
          error:   'parse_error',
          message: `Server trả về không phải JSON (status ${xhr.status})`,
        });
      }

      if (xhr.status >= 200 && xhr.status < 300 && body.ok) {
        return resolve({
          ok:       true,
          url:      body.url       || null,
          proxyUrl: body.proxyUrl  || null,
          type:     body.mediaType || mediaType,
          size:     body.size      || file.size,
          filename: body.filename  || file.name,
          module:   body.module    || moduleId,
          key:      body.key       || resolvedKey,
        });
      }

      // Error response from server
      return resolve({
        ok:      false,
        error:   body.error   || `http_${xhr.status}`,
        message: body.message || `Upload thất bại (HTTP ${xhr.status})`,
      });
    });

    xhr.addEventListener('error', () => {
      resolve({
        ok:      false,
        error:   'network_error',
        message: 'Không kết nối được server — kiểm tra mạng',
      });
    });

    xhr.addEventListener('timeout', () => {
      resolve({
        ok:      false,
        error:   'timeout',
        message: 'Upload timeout',
      });
    });

    // 5 min timeout for large videos
    xhr.timeout = 5 * 60 * 1000;

    // Send raw file bytes
    xhr.send(file);
  });
}

/**
 * UploadService — default export.
 *
 * @example
 * import UploadService from './upload-service.js';
 *
 * const result = await UploadService.upload({
 *   file:       inputEl.files[0],
 *   moduleId:   'dang_tin',
 *   token:      'my-admin-token',   // optional
 *   onProgress: (pct) => console.log(pct + '%'),
 * });
 *
 * if (result.ok) {
 *   console.log('Uploaded:', result.proxyUrl);
 * } else {
 *   console.error(result.error, result.message);
 * }
 */
const UploadService = {
  upload,

  /** Convenience: check if a file is an accepted image type */
  isImage: (file) => IMAGE_TYPES.has((file?.type || '').toLowerCase()),

  /** Convenience: check if a file is an accepted video type */
  isVideo: (file) => VIDEO_TYPES.has((file?.type || '').toLowerCase()),

  /** Convenience: return human-readable max size string for a file */
  maxSizeLabel: (file) => {
    const mediaType = detectMediaType(file?.type || '');
    if (mediaType === 'video') return '50MB';
    if (mediaType === 'image') return '5MB';
    return 'N/A';
  },
};

export default UploadService;
