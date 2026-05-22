// api/v1/module.js — Vercel Node Serverless Function
// GET /api/v1/module?id=dang_tin
// Returns full module data including steps (internal fields stripped).
//
// Stripped internal fields per step: hs, img, scrollY, ttPos

import fs from 'fs';
import path from 'path';

const ALLOWED_ORIGINS = [
  'https://khonhapho.com',
  'https://app.nhapho.com',
];

// Step fields that are internal rendering details — excluded from API response
const INTERNAL_STEP_FIELDS = new Set(['hs', 'img', 'scrollY', 'ttPos', 'desc', 'iconImg']);

function setCorsHeaders(req, res) {
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-token');
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
}

function setRateLimitHeaders(res) {
  const resetAt = Math.floor(Date.now() / 1000) + 60;
  res.setHeader('X-RateLimit-Limit', '100');
  res.setHeader('X-RateLimit-Remaining', '99');
  res.setHeader('X-RateLimit-Reset', String(resetAt));
}

function loadModulesData() {
  const filePath = path.join(process.cwd(), 'data', 'modules.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function sanitizeStep(step) {
  // Include only public fields: id, name, title, sub, ttTitle, ttText, guide, tip
  const { id, name, title, sub, ttTitle, ttText, guide, tip } = step;
  const out = { id, name, title, sub, ttTitle, ttText };
  if (guide !== undefined) out.guide = guide;
  if (tip   !== undefined) out.tip   = tip;
  return out;
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);
  setRateLimitHeaders(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const { id } = req.query || {};
  if (!id) {
    return res.status(400).json({
      ok:      false,
      error:   'id_required',
      message: 'Thiếu ?id= trong URL',
      hint:    '/api/v1/module?id=dang_tin',
    });
  }

  try {
    const data = loadModulesData();
    const mod  = data.modules && data.modules[id];

    if (!mod) {
      return res.status(404).json({
        ok:      false,
        error:   'module_not_found',
        message: `Module "${id}" không tồn tại`,
      });
    }

    const steps = Array.isArray(mod.steps)
      ? mod.steps.map(sanitizeStep)
      : [];

    const responseData = {
      id,
      name:        mod.name        || null,
      role:        mod.role        || null,
      icon:        mod.icon        || null,
      description: mod.description || null,
      stepCount:   steps.length,
      status:      mod.status      || 'draft',
      attributes:  mod.attributes  || null,
      steps,
    };

    return res.status(200).json({
      ok:   true,
      data: responseData,
      meta: {
        version:     'v1',
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error('[api/v1/module]', err);
    return res.status(500).json({
      ok:      false,
      error:   err.code || 'internal',
      message: err.message,
    });
  }
}
