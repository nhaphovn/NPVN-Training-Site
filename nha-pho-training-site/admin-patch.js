/**
 * admin-patch.js v2 — Inject vào cuối admin-x7q9.html (trước </body>)
 *
 * v2 thay đổi:
 *   • Error handling rõ ràng: phân biệt 404 / 500 / env missing / network
 *   • Không crash khi response không phải JSON
 *   • Hiển thị error message cụ thể trong toast
 *
 * Cách thêm: paste <script src="admin-patch.js"></script> trước </body>
 */

(function() {
'use strict';

// ── Config ──────────────────────────────────────────────────────────
const UPLOAD_API  = '/api/upload';
const SAVE_API    = '/api/save';
const ADMIN_TOKEN = '';  // chỉ điền nếu set ADMIN_SAVE_TOKEN env var

// ── Robust fetch — phân biệt rõ các loại lỗi ────────────────────────
async function fetchJson(url, opts = {}) {
  let res;
  try {
    res = await fetch(url, opts);
  } catch (err) {
    throw new Error(`Network fail: ${err.message}`);
  }

  // Đọc body dưới dạng text trước
  const text = await res.text();

  // Status >= 400: server lỗi
  if (!res.ok) {
    // Thử parse JSON, nếu không được thì dùng text
    let detail;
    try {
      detail = JSON.parse(text);
      throw new Error(`[${res.status}] ${detail.message || detail.error || text.slice(0,200)}`);
    } catch (e) {
      if (e.message.startsWith('[')) throw e; // rethrow our error
      // Không phải JSON → có thể là HTML 404
      if (text.startsWith('<!DOCTYPE') || text.startsWith('<html')) {
        throw new Error(`[${res.status}] API endpoint không tồn tại tại ${url} — kiểm tra api/save.js đã deploy chưa`);
      }
      throw new Error(`[${res.status}] ${text.slice(0,200)}`);
    }
  }

  // Status 2xx: parse JSON
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error(`Response không phải JSON: ${text.slice(0,200)}`);
  }
}

// ── 1. Upload ảnh lên Blob ──────────────────────────────────────────
const _origHandleMediaUpload = window.handleMediaUpload || window.handleImageUpload;

window.handleMediaUpload = window.handleImageUpload = async function(file, row, moduleId) {
  if (_origHandleMediaUpload) await _origHandleMediaUpload.call(this, file, row, moduleId);
  if (!file.type.startsWith('image/')) return;

  const keyInput  = row.querySelector('[data-imgkey]');
  const pathInput = row.querySelector('[data-imgpath]');
  const key       = keyInput?.value?.trim();
  if (!key || !moduleId || moduleId === '_new') return;

  const filename = `${moduleId}_${key}.jpg`.toLowerCase().replace(/[^a-z0-9_\-.]/g, '_');

  try {
    const headers = { 'Content-Type': file.type };
    if (ADMIN_TOKEN) headers['x-admin-token'] = ADMIN_TOKEN;

    const data = await fetchJson(`${UPLOAD_API}?filename=${encodeURIComponent(filename)}`, {
      method: 'POST', headers, body: file,
    });

    if (pathInput) pathInput.value = data.url;
    patchPreviewWithBlobUrl(moduleId, key, data.url);
    if (window.toast) window.toast(`☁️ Blob: ${key}`, 'success');
  } catch (err) {
    console.warn('[patch] Blob upload failed:', err.message);
    if (window.toast) window.toast(`⚠️ Local OK, Blob fail: ${err.message}`, 'warning');
  }
};

// ── 2. Preview phone hiển thị Blob URL ngay ─────────────────────────
const _origRenderPreview = window.renderPreview;
window.renderPreview = function() {
  if (_origRenderPreview) _origRenderPreview.call(this);
  try {
    const phoneBg = document.getElementById('phone-bg');
    if (!phoneBg) return;
    const STATE = window.STATE;
    if (!STATE?.step || !STATE?.module) return;

    const imgKey  = STATE.step.img || STATE.step.imgKey || '';
    const imgPath = (STATE.module.images || {})[imgKey] || '';

    if (imgPath.startsWith('http') && phoneBg.src !== imgPath) {
      phoneBg.src = imgPath;
      const placeholder = document.getElementById('no-img-placeholder');
      if (placeholder) placeholder.hidden = true;
    }
  } catch(e) { /* ignore */ }
};

function patchPreviewWithBlobUrl(moduleId, key, url) {
  try {
    const STATE = window.STATE;
    if (STATE?.module && STATE?.moduleId === moduleId) {
      if (!STATE.module.images) STATE.module.images = {};
      STATE.module.images[key] = url;
      if (window.renderPreview) window.renderPreview();
    }
  } catch(e) { /* ignore */ }
}

// ── 3. Nút "🚀 Lưu lên site" ────────────────────────────────────────
function injectSaveButton() {
  const exportBtn = document.getElementById('btn-export-zip') ||
                    document.querySelector('[id*="export"]') ||
                    document.querySelector('.btn-primary');
  if (!exportBtn) { setTimeout(injectSaveButton, 500); return; }
  if (document.getElementById('btn-save-live')) return;

  const btn = document.createElement('button');
  btn.id = 'btn-save-live';
  btn.className = exportBtn.className;
  btn.title = 'Commit modules.json lên GitHub → Vercel auto-deploy';
  btn.innerHTML = '🚀 Lưu lên site';
  btn.style.cssText = 'background:#00A651;color:white;border:none;margin-left:6px;padding:6px 14px;border-radius:8px;font-weight:600;font-size:.82rem;cursor:pointer';
  btn.addEventListener('mouseenter', () => btn.style.background = '#007A3D');
  btn.addEventListener('mouseleave', () => btn.style.background = '#00A651');

  exportBtn.parentNode.insertBefore(btn, exportBtn.nextSibling);
  btn.addEventListener('click', saveToGithub);
}

async function saveToGithub() {
  const btn = document.getElementById('btn-save-live');
  const STATE = window.STATE;
  if (!STATE?.data) { alert('Chưa load modules.json'); return; }
  if (!confirm('Commit modules.json lên GitHub và deploy lên site?')) return;

  const origText = btn.innerHTML;
  btn.innerHTML = '⏳ Đang lưu...';
  btn.disabled = true;

  STATE.data.lastUpdated = new Date().toISOString().split('T')[0];
  const content = JSON.stringify(STATE.data, null, 2);

  const headers = { 'Content-Type': 'application/json' };
  if (ADMIN_TOKEN) headers['x-admin-token'] = ADMIN_TOKEN;

  try {
    const data = await fetchJson(SAVE_API, {
      method: 'POST', headers,
      body: JSON.stringify({
        content,
        message: `content: update via admin ${new Date().toISOString().slice(0,16)}`,
      }),
    });

    btn.innerHTML = '✅ Đã lưu!';
    btn.style.background = '#2e7d32';
    if (window.toast) window.toast('🚀 Commit OK — Vercel deploy ~1 phút', 'success');
    if (data.commit) console.log('[patch] commit URL:', data.commit);

    setTimeout(() => {
      btn.innerHTML = origText;
      btn.style.background = '#00A651';
      btn.disabled = false;
    }, 4000);

  } catch (err) {
    btn.innerHTML = origText;
    btn.style.background = '#00A651';
    btn.disabled = false;

    // Hiển thị error chi tiết
    const msg = err.message || String(err);
    console.error('[patch] save failed:', msg);

    // Diagnose common issues
    let diagnosis = '';
    if (msg.includes('không tồn tại') || msg.includes('404')) {
      diagnosis = '\n\n💡 api/save.js chưa deploy. Push lên GitHub và đợi Vercel deploy.';
    } else if (msg.includes('not_configured')) {
      diagnosis = '\n\n💡 Vercel env vars chưa set: GITHUB_TOKEN, GITHUB_REPO';
    } else if (msg.includes('unauthorized') || msg.includes('401')) {
      diagnosis = '\n\n💡 Token sai. Check GITHUB_TOKEN có quyền Contents: Read+Write';
    } else if (msg.includes('Network')) {
      diagnosis = '\n\n💡 Mất mạng hoặc browser block. Kiểm tra Network tab DevTools.';
    }

    alert('❌ Lỗi lưu:\n\n' + msg + diagnosis);
  }
}

// ── Boot ──────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSaveButton);
} else {
  setTimeout(injectSaveButton, 800);
}
console.log('[admin-patch v2] Loaded ✅');

})();