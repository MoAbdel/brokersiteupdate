#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const QUEUE_PATH = path.join(process.cwd(), 'reports', 'opportunity-queue.json');
const STALE_DAYS = Number(process.env.OPPORTUNITY_QUEUE_STALE_DAYS || 7);

const TRACK_TERMS = {
  hecm: ['reverse mortgage', 'hecm', 'senior'],
  equity: ['home equity', 'heloc', 'heloan', 'cash out', 'refinance'],
  wholesale: ['wholesale mortgage', 'mortgage broker', 'broker vs bank', 'non-qm', 'bank statement', 'dscr'],
};

const usage = () => {
  console.log('Usage:');
  console.log('  node scripts/check-cannibalization-gate.mjs --hub-id CA-SV-A --track hecm');
  console.log('  node scripts/check-cannibalization-gate.mjs --hub-id CA-SV-A --track equity --keywords "palo alto,home equity palo alto"');
};

const parseArg = (args, key) => {
  const idx = args.indexOf(key);
  return idx >= 0 ? args[idx + 1] : null;
};

const normalize = (v) => (v || '').toLowerCase().trim();

const daysOld = (iso) => {
  const t = Date.parse(iso || '');
  if (!Number.isFinite(t)) return null;
  return (Date.now() - t) / (1000 * 60 * 60 * 24);
};

const run = async () => {
  const args = process.argv.slice(2);
  if (!args.length || args.includes('--help')) {
    usage();
    process.exit(args.includes('--help') ? 0 : 1);
  }

  const hubId = parseArg(args, '--hub-id');
  const track = normalize(parseArg(args, '--track'));
  const keywordsCsv = parseArg(args, '--keywords') || '';

  if (!hubId || !track) {
    usage();
    process.exit(1);
  }

  let queue;
  try {
    queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8'));
  } catch {
    console.log('WARN: opportunity-queue.json not found. Run `npm run seo:opportunity-queue` first.');
    process.exit(0);
  }

  const age = daysOld(queue.generated);
  if (age !== null && age > STALE_DAYS) {
    console.log(`WARN: opportunity queue is stale (${Math.floor(age)} days old). Rebuild before generation.`);
  }

  const item = Array.isArray(queue.scoredQueue)
    ? queue.scoredQueue.find((x) => normalize(x.hubId) === normalize(hubId) && normalize(x.track) === track)
    : null;

  if (item && typeof item.score === 'number' && item.score < 20) {
    console.log(`WARN: low opportunity score (${item.score}/100) for ${hubId} ${track}.`);
  }

  const explicitTerms = keywordsCsv
    .split(',')
    .map((s) => normalize(s))
    .filter(Boolean);
  const hubTerms = [normalize(hubId).replace(/-/g, ' ')];
  const terms = Array.from(new Set([...explicitTerms, ...hubTerms, ...(TRACK_TERMS[track] || [])]));

  const alerts = Array.isArray(queue.cannibalizationAlerts) ? queue.cannibalizationAlerts : [];
  const matched = alerts.filter((a) => {
    const query = normalize(a.query);
    return terms.some((t) => t && query.includes(t));
  });

  const blocking = matched.filter((a) => a.severity === 'high' || a.severity === 'medium');
  const warnings = matched.filter((a) => a.severity === 'low');

  if (blocking.length) {
    console.log(`BLOCKED: cannibalization gate failed for ${hubId} ${track}`);
    for (const a of blocking.slice(0, 10)) {
      const pages = Array.isArray(a.pages) ? a.pages.map((p) => p.url).slice(0, 2).join(' | ') : 'n/a';
      console.log(`- [${a.severity}] "${a.query}" -> ${pages}`);
    }
    process.exit(2);
  }

  if (warnings.length) {
    console.log(`WARN: ${warnings.length} low-severity cannibalization alert(s) matched for ${hubId} ${track}.`);
  }

  console.log(`PASS: cannibalization gate passed for ${hubId} ${track}.`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
