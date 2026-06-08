const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'data', 'modules.json');
const raw = fs.readFileSync(file, 'utf8');
let data;
try {
  data = JSON.parse(raw);
} catch (e) {
  console.log('JSON PARSE ERROR:', e.message);
  process.exit(1);
}

function wordCount(str) {
  if (typeof str !== 'string') return -1;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

const errors = [];
const warnings = [];
const moduleStats = {};

for (const [modKey, mod] of Object.entries(data.modules || {})) {
  const steps = mod.steps || [];
  let cleanCount = 0;
  let totalCount = steps.length;

  for (const step of steps) {
    const id = step.id;
    const loc = `[${modKey}/step ${id}]`;
    let stepHasError = false;

    // Rule 1: No TODO
    const fieldsToCheck = ['title', 'sub', 'tip', 'ttTitle', 'ttText', 'name', 'desc'];
    for (const f of fieldsToCheck) {
      if (typeof step[f] === 'string' && step[f].includes('TODO')) {
        errors.push(`${loc} TODO placeholder in "${f}" — value: "${step[f]}"`);
        stepHasError = true;
      }
    }
    if (Array.isArray(step.guide)) {
      step.guide.forEach((g, gi) => {
        ['title', 'body', 'note'].forEach(gf => {
          if (typeof g[gf] === 'string' && g[gf].includes('TODO')) {
            errors.push(`${loc} TODO placeholder in guide[${gi}].${gf} — value: "${g[gf]}"`);
            stepHasError = true;
          }
        });
      });
    }

    // Rule 2: ttTitle <= 5 words
    if (typeof step.ttTitle === 'string') {
      const wc = wordCount(step.ttTitle);
      if (wc > 5) {
        errors.push(`${loc} ttTitle exceeds 5 words (${wc}) — "${step.ttTitle}"`);
        stepHasError = true;
      }
    } else {
      errors.push(`${loc} ttTitle missing or not a string`);
      stepHasError = true;
    }

    // Rule 3: ttText <= 15 words
    if (typeof step.ttText === 'string') {
      const wc = wordCount(step.ttText);
      if (wc > 15) {
        errors.push(`${loc} ttText exceeds 15 words (${wc}) — "${step.ttText}"`);
        stepHasError = true;
      }
    } else {
      errors.push(`${loc} ttText missing or not a string`);
      stepHasError = true;
    }

    // Rule 4: guide >= 2 items, each with non-empty title + body
    if (!Array.isArray(step.guide) || step.guide.length < 2) {
      errors.push(`${loc} guide array has ${(step.guide||[]).length} items (need >= 2)`);
      stepHasError = true;
    } else {
      step.guide.forEach((g, gi) => {
        if (!g.title || typeof g.title !== 'string' || !g.title.trim()) {
          errors.push(`${loc} guide[${gi}] missing/empty title`);
          stepHasError = true;
        }
        if (!g.body || typeof g.body !== 'string' || !g.body.trim()) {
          errors.push(`${loc} guide[${gi}] missing/empty body`);
          stepHasError = true;
        }
      });
    }

    // Rule 5: suggestedQ array of 2-3 short VN questions, <=10 words each, non-empty
    if (!Array.isArray(step.suggestedQ)) {
      errors.push(`${loc} suggestedQ missing or not an array`);
      stepHasError = true;
    } else {
      if (step.suggestedQ.length < 2 || step.suggestedQ.length > 3) {
        errors.push(`${loc} suggestedQ has ${step.suggestedQ.length} items (need 2-3) — ${JSON.stringify(step.suggestedQ)}`);
        stepHasError = true;
      }
      step.suggestedQ.forEach((q, qi) => {
        if (typeof q !== 'string' || !q.trim()) {
          errors.push(`${loc} suggestedQ[${qi}] empty or not a string — value: ${JSON.stringify(q)}`);
          stepHasError = true;
          return;
        }
        const wc = wordCount(q);
        if (wc > 10) {
          errors.push(`${loc} suggestedQ[${qi}] exceeds 10 words (${wc}) — "${q}"`);
          stepHasError = true;
        }
      });
    }

    // Rule 7: hs coords within 390px space, no negatives, w/h reasonable
    const hs = step.hs;
    if (!hs || typeof hs !== 'object') {
      errors.push(`${loc} hs (hotspot) missing`);
      stepHasError = true;
    } else {
      const { x, y, w, h } = hs;
      [['x', x], ['y', y], ['w', w], ['h', h]].forEach(([k, v]) => {
        if (typeof v !== 'number' || isNaN(v)) {
          errors.push(`${loc} hs.${k} is not numeric — value: ${JSON.stringify(v)}`);
          stepHasError = true;
        }
      });
      if (typeof x === 'number' && x < 0) { errors.push(`${loc} hs.x negative — ${x}`); stepHasError = true; }
      if (typeof y === 'number' && y < 0) { errors.push(`${loc} hs.y negative — ${y}`); stepHasError = true; }
      if (typeof w === 'number' && w < 0) { errors.push(`${loc} hs.w negative — ${w}`); stepHasError = true; }
      if (typeof h === 'number' && h < 0) { errors.push(`${loc} hs.h negative — ${h}`); stepHasError = true; }
      if (typeof x === 'number' && typeof w === 'number' && x + w > 390) {
        errors.push(`${loc} hs.x+w exceeds 390 — x=${x}, w=${w}, sum=${x + w}`);
        stepHasError = true;
      }
      if (typeof y === 'number' && typeof h === 'number') {
        const sum = y + h;
        if (sum > 950) {
          warnings.push(`${loc} hs.y+h is large (${sum}) — y=${y}, h=${h} — verify within scrollable screen space`);
        }
      }
    }

    // Rule 8: scrollY = max(0, hs.y - 80), tolerance ±5
    if (hs && typeof hs.y === 'number' && typeof step.scrollY === 'number') {
      const expected = Math.max(0, hs.y - 80);
      const diff = step.scrollY - expected;
      if (Math.abs(diff) > 5) {
        errors.push(`${loc} scrollY mismatch — got ${step.scrollY}, expected ~${expected} (hs.y=${hs.y}), diff=${diff}`);
        stepHasError = true;
      } else if (diff !== 0) {
        warnings.push(`${loc} scrollY drift ${diff > 0 ? '+' : ''}${diff}px — got ${step.scrollY}, expected ${expected}`);
      }
    } else if (typeof step.scrollY !== 'number') {
      errors.push(`${loc} scrollY missing or not numeric`);
      stepHasError = true;
    }

    // Rule 8b: ttPos valid
    const validPos = ['left', 'right', 'top', 'bottom'];
    if (!validPos.includes(step.ttPos)) {
      warnings.push(`${loc} ttPos "${step.ttPos}" not in standard set ${JSON.stringify(validPos)}`);
    }

    if (!stepHasError) cleanCount++;
  }

  moduleStats[modKey] = { clean: cleanCount, total: totalCount };
}

console.log('=== ERRORS ===');
errors.forEach(e => console.log(e));
console.log(`\nTotal errors: ${errors.length}`);

console.log('\n=== WARNINGS ===');
warnings.forEach(w => console.log(w));
console.log(`\nTotal warnings: ${warnings.length}`);

console.log('\n=== MODULE STATS ===');
let totalSteps = 0, totalClean = 0;
for (const [k, s] of Object.entries(moduleStats)) {
  console.log(`${k}: ${s.clean}/${s.total} clean`);
  totalSteps += s.total;
  totalClean += s.clean;
}
console.log(`\nTOTAL: ${totalClean}/${totalSteps} steps fully clean`);
console.log(`Module count: ${Object.keys(moduleStats).length}`);
