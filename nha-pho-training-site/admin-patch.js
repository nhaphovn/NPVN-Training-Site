/**
 * admin-patch.js — Inject vào cuối admin-x7q9.html (trước </body>)
 *
 * Patch 3 thứ:
 *   1. Upload ảnh → /api/upload → Vercel Blob URL → auto-fill path field
 *   2. Nút "💾 Lưu lên site" → /api/save → GitHub commit → Vercel deploy
 *   3. Preview phone hiển thị blob URL ngay (không cần deploy)
 *
 * Cách thêm: mở admin-x7q9.html → tìm </body> → paste <script src="admin-patch.js"></script> trước đó
 * Hoặc paste nội dung file này trực tiếp vào trong thẻ <script> cuối file
 */

(function() {
'use strict';

// ── Config — tự động detect từ window.location ──────────────────────
const UPLOAD_API = '/api/upload';
const SAVE_API   = '/api/save';
const ADMIN_TOKEN = '';  // Để trống nếu không set ADMIN_SAVE_TOKEN env var

// ── 1. Patch handleMediaUpload để upload lên Blob sau IndexedDB ──────
const _origHandleMediaUpload = window.handleMediaUpload || window.handleImageUpload;

window.handleMediaUpload = window.handleImageUpload = async function(file, row, moduleId) {
  // Chạy original trước (lưu IndexedDB, show thumb)
  if (_origHandleMediaUpload) {
    await _origHandleMediaUpload.call(this, file, row, moduleId);
  }

  // Chỉ upload ảnh (không upload video lên Blob — video giữ IndexedDB)
  if (!file.type.startsWith('image/')) return;

  const keyInput  = row.querySelector('[data-imgkey]');
  const pathInput = row.querySelector('[data-imgpath]');
  const key       = keyInput?.value?.trim();
  if (!key || !moduleId || moduleId === '_new') return;

  // Build filename: {moduleId}_{key}.jpg
  const filename = `${moduleId}_${key}.jpg`.toLowerCase().replace(/[^a-z0-9_\-.]/g, '_');

  try {
    const headers = { 'Content-Type': file.type };
    if (ADMIN_TOKEN) headers['x-admin-token'] = ADMIN_TOKEN;

    const res  = await fetch(`${UPLOAD_API}?filename=${encodeURIComponent(filename)}`, {
      method: 'POST', headers, body: file,
    });
    const data = await res.json();

    if (!res.ok || data.error) throw new Error(data.message || data.error);

    // ✅ Cập nhật path field với Blob URL thật
    if (pathInput) pathInput.value = data.url;

    // ✅ Cập nhật preview phone ngay lập tức
    patchPreviewWithBlobUrl(moduleId, key, data.url);

    // Notification
    if (window.toast) window.toast(`☁️ Đã upload lên Blob: ${key}`, 'success');
    console.log(`[patch] Blob upload OK: ${key} → ${data.url}`);

  } catch (err) {
    // Non-fatal: IndexedDB vẫn hoạt động, chỉ thiếu Blob URL
    console.warn('[patch] Blob upload failed (non-fatal):', err.message);
    if (window.toast) window.toast(`⚠️ Lưu local OK nhưng chưa lên Blob: ${err.message}`, 'warning');
  }
};

// ── 2. Patch renderPreview để nhận Blob URL trong path ───────────────
// renderPreview dùng STATE.imageBaseUrl + imgPath
// Nếu imgPath là http/https → dùng thẳng, không prefix imageBaseUrl
const _origRenderPreview = window.renderPreview;
window.renderPreview = function() {
  if (_origRenderPreview) _origRenderPreview.call(this);

  // Sau khi render xong, check nếu imgPath là absolute URL thì set src trực tiếp
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
  // Cập nhật STATE.module.images nếu đang edit đúng module
  try {
    const STATE = window.STATE;
    if (STATE?.module && STATE?.moduleId === moduleId) {
      if (!STATE.module.images) STATE.module.images = {};
      STATE.module.images[key] = url;
      if (window.renderPreview) window.renderPreview();
    }
  } catch(e) { /* ignore */ }
}

// ── 3. Thêm nút "💾 Lưu lên site" vào topbar ────────────────────────
function injectSaveButton() {
  // Tìm nút Export JSON trong topbar
  const exportBtn = document.getElementById('btn-export-zip') ||
                    document.querySelector('[id*="export"]') ||
                    document.querySelector('.btn-primary');

  if (!exportBtn) { setTimeout(injectSaveButton, 500); return; }
  if (document.getElementById('btn-save-live')) return; // đã inject rồi

  const btn = document.createElement('button');
  btn.id        = 'btn-save-live';
  btn.className = exportBtn.className;
  btn.title     = 'Commit modules.json lên GitHub → Vercel tự deploy (~1 phút)';
  btn.innerHTML = '🚀 Lưu lên site';
  btn.style.cssText = 'background:#00A651;color:white;border:none;margin-left:6px;padding:6px 14px;border-radius:8px;font-weight:600;font-size:.82rem;cursor:pointer';

  btn.addEventListener('mouseenter', () => btn.style.background = '#007A3D');
  btn.addEventListener('mouseleave', () => btn.style.background = '#00A651');

  exportBtn.parentNode.insertBefore(btn, exportBtn.nextSibling);
  btn.addEventListener('click', saveToGithub);
}

async function saveToGithub() {
  const btn = document.getElementById('btn-save-live');

  // Lấy JSON hiện tại từ STATE
  const STATE = window.STATE;
  if (!STATE?.data) {
    if (window.toast) window.toast('Chưa load modules.json', 'error');
    return;
  }

  // Confirm
  if (!confirm('Commit modules.json lên GitHub và deploy lên site?\n\nVercel sẽ deploy tự động sau ~1 phút.')) return;

  // Set loading
  const origText = btn.innerHTML;
  btn.innerHTML  = '⏳ Đang lưu...';
  btn.disabled   = true;

  // Update lastUpdated
  STATE.data.lastUpdated = new Date().toISOString().split('T')[0];

  const content = JSON.stringify(STATE.data, null, 2);
  const headers = { 'Content-Type': 'application/json' };
  if (ADMIN_TOKEN) headers['x-admin-token'] = ADMIN_TOKEN;

  try {
    const res  = await fetch(SAVE_API, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        content,
        message: `content: update modules.json via admin ${new Date().toISOString().slice(0,16)}`,
      }),
    });
    const data = await res.json();

    if (!res.ok || data.error) throw new Error(data.message || data.error);

    btn.innerHTML = '✅ Đã lưu!';
    btn.style.background = '#2e7d32';
    if (window.toast) window.toast('🚀 Đã commit! Vercel deploy trong ~1 phút', 'success');

    // Show link to commit
    if (data.commit) {
      console.log('[patch] GitHub commit:', data.commit);
    }
    setTimeout(() => {
      btn.innerHTML = origText;
      btn.style.background = '#00A651';
      btn.disabled  = false;
    }, 4000);

  } catch (err) {
    btn.innerHTML = origText;
    btn.style.background = '#00A651';
    btn.disabled  = false;
    if (window.toast) window.toast('❌ Lỗi: ' + err.message, 'error');
    console.error('[patch] save failed:', err);
  }
}

// ── 4. Deploy status indicator ────────────────────────────────────────
function injectDeployStatus() {
  if (document.getElementById('deploy-status')) return;
  const el = document.createElement('div');
  el.id = 'deploy-status';
  el.style.cssText = `
    position:fixed;bottom:16px;right:16px;
    background:#1a1a1a;color:#aaa;
    font-size:.72rem;padding:6px 12px;border-radius:8px;
    font-family:'Be Vietnam Pro',sans-serif;
    z-index:9990;display:none;
  `;
  document.body.appendChild(el);
}

function showDeployStatus(msg, ok) {
  const el = document.getElementById('deploy-status');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.style.color = ok ? '#7ec8a3' : '#ff8a65';
  clearTimeout(el._t);
  if (ok) el._t = setTimeout(() => el.style.display = 'none', 8000);
}

// ── Boot ──────────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSaveButton();
    injectDeployStatus();
  });
} else {
  // Nếu DOM đã sẵn sàng
  setTimeout(() => { injectSaveButton(); injectDeployStatus(); }, 800);
}

console.log('[admin-patch] Loaded ✅ — Blob upload + GitHub save enabled');

})();
