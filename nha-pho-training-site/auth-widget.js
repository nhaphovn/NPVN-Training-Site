'use strict';

// ============================================================
// auth-widget.js — Reusable auth state component
// Usage: import initAuthWidget from './auth-widget.js';
//        initAuthWidget(document.getElementById('auth-widget-mount'));
// ============================================================

const CSS = `
.auth-widget { display:flex; align-items:center; gap:10px; font-size:13px; }
.aw-name { font-weight:600; color:#0F1F14; max-width:140px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.aw-logout { color:#88958C; text-decoration:none; font-size:12px; padding:4px 8px; border-radius:6px; border:1px solid #DCE7DE; transition:all .15s; white-space:nowrap; }
.aw-logout:hover { border-color:#007B48; color:#007B48; }
.aw-login-btn { background:#00A651; color:#fff; text-decoration:none; padding:7px 16px; border-radius:8px; font-weight:700; font-size:13px; transition:background .15s; white-space:nowrap; }
.aw-login-btn:hover { background:#006941; }
`;

const ROLE_LABELS = {
  hoc_vien: 'Hoc vien',
  dau_chu: 'Dau chu',
  quan_ly_phong: 'Quan ly',
};

// Module-level cache
let _cachedUser = null;

function injectCSS() {
  if (document.getElementById('auth-widget-style')) return;
  const style = document.createElement('style');
  style.id = 'auth-widget-style';
  style.textContent = CSS;
  document.head.appendChild(style);
}

function roleLabel(role) {
  const map = {
    hoc_vien: 'Hoc vien',
    dau_chu: 'Dau chu',
    quan_ly_phong: 'Quan ly',
  };
  return map[role] || role;
}

function renderLoggedIn(container, user) {
  container.innerHTML = `
    <div class="auth-widget auth-widget--in">
      <span class="aw-name">${escAttr(user.name || 'Tài khoản')}</span>
      <a href="/api/auth/logout" class="aw-logout">Đăng xuất</a>
    </div>
  `;
}

function renderLoggedOut(container) {
  const loginHref = '/api/auth/login?returnTo=' + encodeURIComponent(location.href);
  container.innerHTML = `
    <div class="auth-widget auth-widget--out">
      <a href="${escAttr(loginHref)}" class="aw-login-btn">Đăng nhập</a>
    </div>
  `;
}

function escAttr(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Returns the cached user object (populated after initAuthWidget resolves),
 * or null if not authenticated / not yet loaded.
 */
export function getUser() {
  return _cachedUser;
}

/**
 * Initialise the auth widget inside containerEl.
 * Calls GET /api/auth/me, then renders the appropriate state.
 * @param {HTMLElement} containerEl
 * @returns {Promise<void>}
 */
export default async function initAuthWidget(containerEl) {
  if (!containerEl) return;
  injectCSS();

  try {
    const resp = await fetch('/api/auth/me', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' },
    });

    if (resp.ok) {
      const data = await resp.json();
      if (data && data.authenticated === true && data.user) {
        _cachedUser = data.user;
        renderLoggedIn(containerEl, data.user);
        return;
      }
    }
  } catch (_e) {
    // Network error or JSON parse failure — treat as logged out
  }

  _cachedUser = null;
  renderLoggedOut(containerEl);
}
