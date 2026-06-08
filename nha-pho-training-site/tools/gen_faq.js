/**
 * gen_faq.js — One-time FAQ generation from KB
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node tools/gen_faq.js
 *
 * Output:
 *   data/faq_generated.json  <- review, then manually merge into data/faq.json
 *
 * Merge instructions:
 *   1. Review each entry in faq_generated.json
 *   2. Assign correct module key (or "global") in faq.json
 *   3. Rename id from "gen_XXX" to module prefix (e.g., "dt_gen_001")
 *   4. Add "steps": [] field if question is step-specific
 *   5. Delete faq_generated.json after merging
 *
 * Cost estimate: ~$0.01-0.05 for one run (Haiku pricing)
 *
 * Prerequisites:
 *   npm install @anthropic-ai/sdk
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// --- Dependency check ---
let Anthropic;
try {
  const mod = await import('@anthropic-ai/sdk');
  Anthropic = mod.default;
} catch {
  console.error(
    '[gen_faq] Missing dependency: @anthropic-ai/sdk\n' +
    'Run: npm install @anthropic-ai/sdk\n' +
    'Then re-run: ANTHROPIC_API_KEY=sk-... node tools/gen_faq.js'
  );
  process.exit(1);
}

// --- Env check ---
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error(
    '[gen_faq] ANTHROPIC_API_KEY environment variable is required.\n' +
    'Usage: ANTHROPIC_API_KEY=sk-... node tools/gen_faq.js'
  );
  process.exit(1);
}

const MODEL = 'claude-haiku-4-5-20251001';
const DELAY_MS = 500;
const OUTPUT_PATH = path.join(ROOT, 'data', 'faq_generated.json');

// --- Load KB ---
const KB_PATH = path.join(ROOT, 'data', 'kb', 'nhapho.md');
let kbContent;
try {
  kbContent = fs.readFileSync(KB_PATH, 'utf8');
} catch (err) {
  console.error(`[gen_faq] Cannot read KB file at ${KB_PATH}: ${err.message}`);
  process.exit(1);
}

// --- Load existing FAQ (to avoid duplicates) ---
const FAQ_PATH = path.join(ROOT, 'data', 'faq.json');
let existingFaq;
try {
  existingFaq = JSON.parse(fs.readFileSync(FAQ_PATH, 'utf8'));
} catch (err) {
  console.error(`[gen_faq] Cannot read faq.json at ${FAQ_PATH}: ${err.message}`);
  process.exit(1);
}

/**
 * Collect all existing keywords from faq.json into a flat deduplicated list.
 * Used to tell the model what topics are already covered.
 */
function collectExistingKeywords(faq) {
  const kws = new Set();

  const processEntries = (entries) => {
    if (!Array.isArray(entries)) return;
    for (const entry of entries) {
      if (Array.isArray(entry.kw)) {
        for (const k of entry.kw) kws.add(k.toLowerCase());
      }
    }
  };

  // Global entries
  if (Array.isArray(faq.global)) processEntries(faq.global);

  // Module entries
  if (faq.modules && typeof faq.modules === 'object') {
    for (const moduleEntries of Object.values(faq.modules)) {
      processEntries(moduleEntries);
    }
  }

  return [...kws];
}

/**
 * Split KB into sections by ## headings.
 * Returns array of { heading, content } objects.
 * Skips sections that are too short to be useful.
 */
function splitKbIntoSections(kb) {
  const lines = kb.split('\n');
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current && current.lines.length > 3) {
        sections.push({
          heading: current.heading,
          content: current.lines.join('\n').trim(),
        });
      }
      current = { heading: line.replace(/^##\s+/, ''), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    }
  }

  // Push final section
  if (current && current.lines.length > 3) {
    sections.push({
      heading: current.heading,
      content: current.lines.join('\n').trim(),
    });
  }

  return sections;
}

/**
 * Parse the JSON array from the model response.
 * Returns array of entries or null on failure.
 */
function parseModelResponse(text, sectionHeading) {
  // Strip markdown code fences if present
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed)) {
      console.warn(`[gen_faq] Section "${sectionHeading}": response is not an array, skipping`);
      return null;
    }
    return parsed;
  } catch (err) {
    // Attempt to extract the first JSON array from the text
    const match = cleaned.match(/\[[\s\S]*\]/);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // Fall through
      }
    }
    console.warn(`[gen_faq] Section "${sectionHeading}": JSON parse failed — ${err.message}`);
    return null;
  }
}

/**
 * Validate a single generated entry has the required fields with correct types.
 * Returns true if valid, false otherwise.
 */
function isValidEntry(entry) {
  if (!entry || typeof entry !== 'object') return false;
  if (typeof entry.id !== 'string' || !entry.id) return false;
  if (!Array.isArray(entry.kw) || entry.kw.length === 0) return false;
  if (typeof entry.a !== 'string' || !entry.a.trim()) return false;
  return true;
}

/**
 * Deduplicate generated entries against existing keyword list.
 * A generated entry is considered duplicate if ANY of its keywords
 * is a substring of (or exact match with) an existing keyword.
 */
function deduplicateEntries(entries, existingKwSet) {
  return entries.filter((entry) => {
    if (!isValidEntry(entry)) return false;

    const entryKws = entry.kw.map((k) => k.toLowerCase());
    for (const ek of entryKws) {
      if (existingKwSet.has(ek)) return false;
    }
    return true;
  });
}

/**
 * Sleep helper.
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- Main ---

async function main() {
  console.log('[gen_faq] Starting FAQ generation from KB...');
  console.log(`[gen_faq] KB file: ${KB_PATH}`);
  console.log(`[gen_faq] Output: ${OUTPUT_PATH}`);
  console.log(`[gen_faq] Model: ${MODEL}`);

  const existingKws = collectExistingKeywords(existingFaq);
  console.log(`[gen_faq] Existing keywords collected: ${existingKws.length}`);

  const sections = splitKbIntoSections(kbContent);
  console.log(`[gen_faq] KB sections found: ${sections.length}`);

  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  const allEntries = [];
  let apiCallCount = 0;
  let genCounter = 1;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    console.log(`[gen_faq] Processing section ${i + 1}/${sections.length}: "${section.heading}"`);

    const existingKwSample = existingKws
      .slice(0, 80)
      .map((k) => `- ${k}`)
      .join('\n');

    const prompt = `You are generating FAQ entries for a Vietnamese real-estate app training chatbot.

KB section:
${section.content}

Already covered topics (avoid duplicates):
${existingKwSample}

Generate 4-6 Q&A pairs for this KB section. Output valid JSON array:
[
  {
    "id": "gen_XXX",
    "kw": ["keyword 1", "keyword 2", "keyword 3"],
    "a": "Câu trả lời ngắn gọn bằng tiếng Việt (≤3 câu)"
  }
]

Rules:
- kw: 3-5 short Vietnamese phrases users would type naturally (5-8 words max each)
- a: concise Vietnamese answer, no bullet points, plain text
- Cover edge cases, error states, and "where is X" questions
- Output ONLY the JSON array, no other text`;

    let rawText = '';
    try {
      const message = await client.messages.create({
        model: MODEL,
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      });
      apiCallCount++;

      rawText = message.content
        .filter((block) => block.type === 'text')
        .map((block) => block.text)
        .join('');
    } catch (err) {
      console.warn(
        `[gen_faq] Section "${section.heading}": API call failed — ${err.message} (skipping)`
      );
      // Continue to next section
      if (i < sections.length - 1) await sleep(DELAY_MS);
      continue;
    }

    const parsed = parseModelResponse(rawText, section.heading);
    if (!parsed) {
      if (i < sections.length - 1) await sleep(DELAY_MS);
      continue;
    }

    // Assign sequential IDs and normalize
    const normalized = parsed.map((entry) => {
      const id = `gen_${String(genCounter).padStart(3, '0')}`;
      genCounter++;
      return {
        id,
        kw: Array.isArray(entry.kw) ? entry.kw.map((k) => String(k)) : [],
        a: typeof entry.a === 'string' ? entry.a.trim() : '',
      };
    });

    const existingKwSet = new Set(existingKws);
    // Also include kws from entries already generated in this run
    for (const e of allEntries) {
      for (const k of e.kw) existingKwSet.add(k.toLowerCase());
    }

    const deduped = deduplicateEntries(normalized, existingKwSet);
    const skipped = normalized.length - deduped.length;

    console.log(
      `[gen_faq]   -> Generated: ${normalized.length}, after dedup: ${deduped.length}` +
        (skipped > 0 ? ` (${skipped} duplicate/invalid removed)` : '')
    );

    allEntries.push(...deduped);

    if (i < sections.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // Write output
  const output = {
    generated_at: new Date().toISOString(),
    note: 'Review these entries before merging into faq.json. Assign to correct module keys.',
    entries: allEntries,
    stats: {
      kb_sections_processed: sections.length,
      entries_generated: allEntries.length,
      api_calls: apiCallCount,
    },
  };

  try {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf8');
  } catch (err) {
    console.error(`[gen_faq] Failed to write output: ${err.message}`);
    process.exit(1);
  }

  console.log('');
  console.log('[gen_faq] Done.');
  console.log(`[gen_faq] Sections processed : ${sections.length}`);
  console.log(`[gen_faq] API calls made      : ${apiCallCount}`);
  console.log(`[gen_faq] Entries generated   : ${allEntries.length}`);
  console.log(`[gen_faq] Output written to   : ${OUTPUT_PATH}`);
  console.log('');
  console.log('[gen_faq] Next steps:');
  console.log('  1. Review data/faq_generated.json');
  console.log('  2. Assign module keys and rename IDs in data/faq.json');
  console.log('  3. Delete data/faq_generated.json after merging');
}

main().catch((err) => {
  console.error('[gen_faq] Fatal error:', err.message);
  process.exit(1);
});
