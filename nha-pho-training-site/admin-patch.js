/**
 * admin-patch.js v3
 *
 * v3 thêm:
 *   • Panel "📤 Upload ảnh" — drag & drop trực tiếp lên Blob từ admin
 *   • Fix: lưu proxy URL (/api/img?path=...) thay vì raw blob URL
 *   • Fix: dùng ?module=&key= API thay vì parse filename (đúng với tên dài)
 *   • handleMediaUpload vẫn hoạt động cho step-level upload
 */

(function() {
'use strict';

const UPLOAD_API  = '/api/upload';
const SAVE_API    = '/api/save';
const ADMIN_TOKEN = '';

// ── Robust fetch ────────────────────────────────────────────────────
async function fetchJson(url, opts = {}) {
  let res;
  try { res = await fetch(url, opts); }
  catch (err) { throw new Error(`Network fail: ${err.message}`); }

  const text = await res.text();
  if (!res.ok) {
    let detail;
    try {
      detail = JSON.parse(text);
      throw new Error(`[${res.status}] ${detail.message || detail.error || text.slice(0,200)}`);
    } catch (e) {
      if (e.message.startsWith('[')) throw e;
      if (text.startsWith('<!DOCTYPE') || text.startsWith('<html'))
        throw new Error(`[${res.status}] API chưa deploy tại ${url}`);
      throw new Error(`[${res.status}] ${text.slice(0,200)}`);
    }
  }
  try { return JSON.parse(text); }
  catch (e) { throw new Error(`Response không phải JSON: ${text.slice(0,200)}`); }
}

// ── Upload 1 file lên Blob, trả proxyUrl ───────────────────────────
async function uploadToBlob(file, moduleId, key) {
  const safeKey = key.toLowerCase().replace(/[^a-z0-9_\-]/g, '_');
  const url = `${UPLOAD_API}?module=${encodeURIComponent(moduleId)}&key=${encodeURIComponent(safeKey)}`;
  const headers = { 'Content-Type': file.type || 'image/jpeg' };
  if (ADMIN_TOKEN) headers['x-admin-token'] = ADMIN_TOKEN;
  const data = await fetchJson(url, { method: 'POST', headers, body: file });
  // v3: prefer proxyUrl, fall back to constructing it from pathname
  return data.proxyUrl || `/api/img?path=${data.pathname}`;
}

// ── 1. Patch step-level upload (existing handleMediaUpload) ─────────
const _origHandleMediaUpload = window.handleMediaUpload || window.handleImageUpload;

window.handleMediaUpload = window.handleImageUpload = async function(file, row, moduleId) {
  if (_origHandleMediaUpload) await _origHandleMediaUpload.call(this, file, row, moduleId);
  if (!file.type.startsWith('image/')) return;

  const keyInput  = row.querySelector('[data-imgkey]');
  const pathInput = row.querySelector('[data-imgpath]');
  const key       = keyInput?.value?.trim();
  if (!key || !moduleId || moduleId === '_new') return;

  try {
    const proxyUrl = await uploadToBlob(file, moduleId, key);
    if (pathInput) pathInput.value = proxyUrl;
    patchImages(moduleId, key, proxyUrl);
    if (window.toast) window.toast(`☁️ Uploaded: ${key}`, 'success');
  } catch (err) {
    console.warn('[patch] upload failed:', err.message);
    if (window.toast) window.toast(`⚠️ Upload fail: ${err.message}`, 'warning');
  }
};

// ── 2. renderPreview — hiện proxy URL (bắt đầu bằng /api/) ─────────

// MutationObserver: wire step upload zone whenever #step-img-drop appears in DOM
const _stepDropObserver = new MutationObserver(() => injectStepUpload());
// start observing after DOM is ready
function _startStepObserver() {
  const target = document.getElementById('form-panel') || document.body;
  _stepDropObserver.observe(target, { childList: true, subtree: true });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _startStepObserver);
else _startStepObserver();

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
    // Handle both proxy paths (/api/img?...) and full https URLs
    const isResolvable = imgPath.startsWith('/api/') || imgPath.startsWith('http');
    if (isResolvable && phoneBg.src !== imgPath && !phoneBg.src.endsWith(imgPath)) {
      phoneBg.src = imgPath;
      const ph = document.getElementById('no-img-placeholder');
      if (ph) ph.hidden = true;
    }
  } catch(e) {}
  updatePublishBadge();
};

function patchImages(moduleId, key, url) {
  try {
    const STATE = window.STATE;
    if (STATE?.module && STATE?.moduleId === moduleId) {
      if (!STATE.module.images) STATE.module.images = {};
      STATE.module.images[key] = url;
      if (window.renderPreview) window.renderPreview();
    }
  } catch(e) {}
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
      body: JSON.stringify({ content, message: `content: update via admin ${new Date().toISOString().slice(0,16)}` }),
    });
    btn.innerHTML = '✅ Đã lưu!';
    btn.style.background = '#2e7d32';
    if (window.toast) window.toast('🚀 Commit OK — Vercel deploy ~1 phút', 'success');
    if (data.commit) console.log('[patch] commit:', data.commit);
    setTimeout(() => { btn.innerHTML = origText; btn.style.background = '#00A651'; btn.disabled = false; }, 4000);
  } catch (err) {
    btn.innerHTML = origText; btn.style.background = '#00A651'; btn.disabled = false;
    const msg = err.message || String(err);
    let diagnosis = '';
    if (msg.includes('404') || msg.includes('không tồn tại')) diagnosis = '\n\n💡 api/save.js chưa deploy.';
    else if (msg.includes('not_configured')) diagnosis = '\n\n💡 Chưa set GITHUB_TOKEN / GITHUB_REPO trên Vercel.';
    else if (msg.includes('401') || msg.includes('unauthorized')) diagnosis = '\n\n💡 GITHUB_TOKEN sai hoặc hết hạn.';
    alert('❌ Lỗi lưu:\n\n' + msg + diagnosis);
  }
}

// ── 5. Per-step image upload ─────────────────────────────────────────

async function handleStepImgFile(file) {
  const STATE = window.STATE;
  const moduleId = STATE?.moduleId;
  const stepIdx  = STATE?.stepIdx;
  if (!moduleId || stepIdx == null || !file) return;

  // Auto-name: {module}_b{NN}_{basename}
  const stepNum  = String(stepIdx + 1).padStart(2, '0');
  const baseName = file.name.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  const key      = `b${stepNum}_${baseName}`;

  const drop = document.getElementById('step-img-drop');
  if (drop) { drop.textContent = '⏳ Đang upload...'; drop.classList.remove('over'); }

  try {
    const proxyUrl = await uploadToBlob(file, moduleId, key);

    if (!STATE.module.images) STATE.module.images = {};
    STATE.module.images[key] = proxyUrl;
    if (STATE.step) { STATE.step.img = key; STATE.step.imgKey = key; }

    const dirtyDot = document.getElementById('dirty-dot');
    if (dirtyDot) dirtyDot.style.display = 'block';
    if (STATE.dirty !== undefined) STATE.dirty = true;

    if (window.renderForm)    window.renderForm();
    if (window.renderPreview) window.renderPreview();
    if (window.toast) window.toast(`☁️ ${key}`, 'success');
  } catch (err) {
    const d = document.getElementById('step-img-drop');
    if (d) d.innerHTML = `❌ ${err.message}<input type="file" id="step-img-file" accept="image/*" hidden>`;
    if (window.toast) window.toast(`⚠️ Upload thất bại: ${err.message}`, 'warning');
  }
}

function injectStepUpload() {
  const drop      = document.getElementById('step-img-drop');
  const fileInput = document.getElementById('step-img-file');
  if (!drop || !fileInput || drop.dataset.wired) return;
  drop.dataset.wired = '1';

  drop.addEventListener('click', e => { if (e.target !== fileInput) fileInput.click(); });
  drop.addEventListener('dragover',  e => { e.preventDefault(); drop.classList.add('over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('over'));
  drop.addEventListener('drop', e => {
    e.preventDefault(); drop.classList.remove('over');
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) handleStepImgFile(f);
  });
  fileInput.addEventListener('change', e => {
    const f = e.target.files[0];
    if (f) handleStepImgFile(f);
    fileInput.value = '';
  });
}

// ── 6. Publish badge + button ─────────────────────────────────────────
function updatePublishBadge() {
  const badge = document.getElementById('module-status-badge');
  const btn   = document.getElementById('btn-publish');
  if (!badge || !btn) return;
  const STATE  = window.STATE;
  const mod    = STATE?.data?.modules?.[STATE?.moduleId];
  const status = mod?.status || '';
  badge.className = `status-badge status-${status}`;
  badge.textContent = status === 'live' ? '● LIVE' : status === 'draft' ? 'DRAFT' : status.toUpperCase();
  badge.hidden = !status;
  btn.hidden = status !== 'draft';
}

function injectPublishBadge() {
  if (document.getElementById('module-status-badge')) return;
  const editBtn = document.getElementById('btn-edit-module');
  if (!editBtn) { setTimeout(injectPublishBadge, 500); return; }

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .status-badge {
      display: inline-block;
      font-size: 11px;
      padding: 2px 7px;
      border-radius: 10px;
      font-weight: 700;
      vertical-align: middle;
      margin-left: 6px;
    }
    .status-badge.status-draft { background: #F59E0B; color: #fff; }
    .status-badge.status-live  { background: #00A651; color: #fff; }
    #btn-publish {
      background: #00A651;
      color: #fff;
      border: none;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      margin-left: 6px;
      vertical-align: middle;
    }
    #btn-publish:hover { background: #007A3D; }
  `;
  document.head.appendChild(style);

  // Badge element
  const badge = document.createElement('span');
  badge.id = 'module-status-badge';
  badge.className = 'status-badge';
  badge.hidden = true;
  editBtn.after(badge);

  // Publish button element
  const btn = document.createElement('button');
  btn.id = 'btn-publish';
  btn.textContent = '▶ Publish';
  btn.hidden = true;
  badge.after(btn);

  btn.addEventListener('click', async () => {
    const STATE = window.STATE;
    const moduleId = STATE?.moduleId;
    const mod = STATE?.data?.modules?.[moduleId];
    if (!mod) return;
    const name = mod.name || moduleId;
    if (!confirm(`Publish «${name}»?\nStatus sẽ đổi từ draft → live và tự lưu lên site.`)) return;
    mod.status = 'live';
    updatePublishBadge();
    await saveToGithub();
  });

  updatePublishBadge();
}

// ── Boot ─────────────────────────────────────────────────────────────
function boot() {
  injectSaveButton();
  injectPublishBadge();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else setTimeout(boot, 800);

console.log('[admin-patch v3] Loaded ✅');

})();
