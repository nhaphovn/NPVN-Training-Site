// api/v1/modules.js — Vercel Node Serverless Function
// GET /api/v1/modules
// Query params:
//   ?role=hoc_vien   → filter by role (must exist in data.roles[role].modules)
//   ?status=live     → filter by module status ('live' | 'draft'). Default: all.

import fs from 'fs';
import path from 'path';

const ALLOWED_ORIGINS = [
  'https://khonhapho.com',
  'https://app.nhapho.com',
];

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

export default async function handler(req, res) {
  setCorsHeaders(req, res);
  setRateLimitHeaders(res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  try {
    const data = loadModulesData();

    const { role, status } = req.query || {};

    // Resolve role filter: look up allowed module ids from data.roles[role].modules
    let allowedByRole = null;
    if (role) {
      const roleEntry = data.roles && data.roles[role];
      if (!roleEntry) {
        return res.status(400).json({
          ok: false,
          error: 'invalid_role',
          message: `Role "${role}" không tồn tại. Các role hợp lệ: ${Object.keys(data.roles || {}).join(', ')}`,
        });
      }
      allowedByRole = new Set(roleEntry.modules || []);
    }

    // Build summary list — do NOT include full steps array
    const allModules = data.modules || {};
    const total = Object.keys(allModules).length;

    const result = [];

    for (const [id, mod] of Object.entries(allModules)) {
      // Apply role filter
      if (allowedByRole && !allowedByRole.has(id)) continue;

      // Apply status filter
      if (status && mod.status !== status) continue;

      result.push({
        id,
        name:        mod.name        || null,
        role:        mod.role        || null,
        icon:        mod.icon        || null,
        description: mod.description || null,
        stepCount:   Array.isArray(mod.steps) ? mod.steps.length : 0,
        status:      mod.status      || 'draft',
        attributes:  mod.attributes  || null,
      });
    }

    return res.status(200).json({
      ok: true,
      data: result,
      meta: {
        version:     'v1',
        total,
        filtered:    result.length,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error('[api/v1/modules]', err);
    return res.status(500).json({
      ok:      false,
      error:   err.code || 'internal',
      message: err.message,
    });
  }
}
