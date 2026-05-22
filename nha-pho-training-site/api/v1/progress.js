// api/v1/progress.js — Vercel Node Serverless Function
// GET  /api/v1/progress?moduleId=dang_tin  → fetch progress for one module
// GET  /api/v1/progress                    → fetch summary across all modules
// POST /api/v1/progress                    → record a step/module event

import { readFileSync, appendFileSync } from 'fs';
import { join } from 'path';
import { requireAuth } from '../../lib/auth.js';

// ---------------------------------------------------------------------------
// KV — lazy import with availability guard
// ---------------------------------------------------------------------------

let kv = null;
try {
  const mod = await import('@vercel/kv');
  kv = mod.kv;
} catch {
  // @vercel/kv not installed — all handlers will return 503
  kv = null;
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = [
  'https://khonhapho.com',
  'https://app.nhapho.com',
];

function setCorsHeaders(req, res) {
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
}

// ---------------------------------------------------------------------------
// modules.json loader — cached at cold-start
// ---------------------------------------------------------------------------

let _modulesCache = null;

function loadModules() {
  if (_modulesCache) return _modulesCache;
  const raw = readFileSync(join(process.cwd(), 'data', 'modules.json'), 'utf8');
  _modulesCache = JSON.parse(raw);
  return _modulesCache;
}

function getTotalSteps(moduleId) {
  const data = loadModules();
  const mod = (data.modules || {})[moduleId];
  if (!mod || !Array.isArray(mod.steps)) return 0;
  return mod.steps.length;
}

// ---------------------------------------------------------------------------
// EDA event emitter — append to logs/events.jsonl
// ---------------------------------------------------------------------------

function emitEvent(type, user, moduleId, extra = {}) {
  try {
    const event = {
      ts:      new Date().toISOString(),
      type,
      actor:   'user',
      target:  { userId: user.sub, moduleId },
      payload: extra,
      attributes: { tenant: user.tenant || 'nhapho' },
    };
    appendFileSync(
      join(process.cwd(), 'logs', 'events.jsonl'),
      JSON.stringify(event) + '\n'
    );
  } catch (e) {
    console.warn('[progress] event emit failed:', e.message);
  }
}

// ---------------------------------------------------------------------------
// KV key helpers
// ---------------------------------------------------------------------------

function kvKey(userId, moduleId) {
  return `progress:${userId}:${moduleId}`;
}

function kvSummaryKey(userId) {
  return `progress:${userId}:_summary`;
}

// ---------------------------------------------------------------------------
// Shared response envelope
// ---------------------------------------------------------------------------

function envelope(data) {
  return {
    ok:   true,
    data,
    meta: {
      version:     'v1',
      generatedAt: new Date().toISOString(),
    },
  };
}

// ---------------------------------------------------------------------------
// GET handler
// ---------------------------------------------------------------------------

async function handleGet(req, res, user) {
  const { moduleId } = req.query || {};

  if (moduleId) {
    // Single-module progress
    const raw = await kv.get(kvKey(user.sub, moduleId));
    if (!raw) {
      return res.status(200).json(envelope({
        moduleId,
        completedSteps: [],
        percent:        0,
        startedAt:      null,
        completedAt:    null,
      }));
    }
    const totalSteps = getTotalSteps(moduleId);
    const percent = totalSteps > 0
      ? Math.round((raw.completedSteps.length / totalSteps) * 100)
      : 0;
    return res.status(200).json(envelope({ moduleId, ...raw, percent }));
  }

  // Summary across all modules
  const summary = await kv.get(kvSummaryKey(user.sub));
  return res.status(200).json(envelope(summary || {}));
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

async function handlePost(req, res, user) {
  const { moduleId, stepId, action } = req.body || {};

  // --- input validation ---
  if (!moduleId || typeof moduleId !== 'string') {
    return res.status(400).json({ ok: false, error: 'moduleId_required', message: 'moduleId (string) là bắt buộc' });
  }

  const validActions = ['complete', 'start', 'reset'];
  if (!action || !validActions.includes(action)) {
    return res.status(400).json({
      ok: false,
      error: 'action_invalid',
      message: `action phải là một trong: ${validActions.join(', ')}`,
    });
  }

  if (action === 'complete') {
    if (stepId === undefined || stepId === null || typeof stepId !== 'number') {
      return res.status(400).json({ ok: false, error: 'stepId_required', message: 'stepId (number) là bắt buộc cho action "complete"' });
    }
  }

  // --- load existing progress ---
  const key = kvKey(user.sub, moduleId);
  let progress = await kv.get(key);

  const now = new Date().toISOString();

  if (action === 'reset') {
    await kv.del(key);

    // Update summary — remove this module
    const summaryKey = kvSummaryKey(user.sub);
    const summary = (await kv.get(summaryKey)) || {};
    delete summary[moduleId];
    await kv.set(summaryKey, summary);

    emitEvent('progress.tour_reset', user, moduleId, { stepId: null, percent: 0 });

    return res.status(200).json(envelope({
      moduleId,
      completedSteps: [],
      percent:        0,
      startedAt:      null,
      completedAt:    null,
    }));
  }

  if (action === 'start') {
    if (!progress) {
      progress = { completedSteps: [], startedAt: now, completedAt: null };
      await kv.set(key, progress);
      emitEvent('progress.tour_started', user, moduleId, { stepId: null, percent: 0 });
    }
    // If progress already exists, start is a no-op (idempotent)
    const totalSteps = getTotalSteps(moduleId);
    const percent = totalSteps > 0
      ? Math.round((progress.completedSteps.length / totalSteps) * 100)
      : 0;

    // Update summary
    await updateSummary(user.sub, moduleId, progress.completedSteps, percent);

    return res.status(200).json(envelope({
      moduleId,
      ...progress,
      percent,
    }));
  }

  // action === 'complete'
  if (!progress) {
    // auto-start if not yet started
    progress = { completedSteps: [], startedAt: now, completedAt: null };
  }

  // Add stepId without duplicates
  if (!progress.completedSteps.includes(stepId)) {
    progress.completedSteps.push(stepId);
  }

  const totalSteps = getTotalSteps(moduleId);
  const percent = totalSteps > 0
    ? Math.round((progress.completedSteps.length / totalSteps) * 100)
    : 0;

  // Detect tour completion
  const justCompleted = totalSteps > 0 && progress.completedSteps.length === totalSteps;
  if (justCompleted && !progress.completedAt) {
    progress.completedAt = now;
  }

  await kv.set(key, progress);

  // Update summary
  await updateSummary(user.sub, moduleId, progress.completedSteps, percent);

  // Emit events
  emitEvent('progress.step_completed', user, moduleId, { stepId, percent });
  if (justCompleted) {
    emitEvent('progress.tour_completed', user, moduleId, { stepId, percent: 100 });
  }

  return res.status(200).json(envelope({
    moduleId,
    completedSteps: progress.completedSteps,
    percent,
    startedAt:      progress.startedAt,
    completedAt:    progress.completedAt,
  }));
}

// ---------------------------------------------------------------------------
// Summary updater
// ---------------------------------------------------------------------------

async function updateSummary(userId, moduleId, completedSteps, percent) {
  try {
    const summaryKey = kvSummaryKey(userId);
    const summary = (await kv.get(summaryKey)) || {};
    summary[moduleId] = { completedSteps: completedSteps.length, percent };
    await kv.set(summaryKey, summary);
  } catch (e) {
    console.warn('[progress] summary update failed:', e.message);
  }
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  // KV availability guard
  if (!kv) {
    return res.status(503).json({
      ok:      false,
      error:   'kv_not_configured',
      message: 'Vercel KV chua duoc cai dat. Chay: npm install @vercel/kv',
    });
  }

  // Auth
  const user = await requireAuth(req, res);
  if (!user) return; // 401 already sent

  try {
    if (req.method === 'GET')  return await handleGet(req, res, user);
    if (req.method === 'POST') return await handlePost(req, res, user);
  } catch (err) {
    console.error('[api/v1/progress]', err);
    return res.status(500).json({
      ok:      false,
      error:   err.code || 'internal',
      message: err.message,
    });
  }
}
