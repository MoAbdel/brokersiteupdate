#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const BATCH_PATH = path.join(process.cwd(), 'reports', 'generation-batch.json');
const QUEUE_PATH = path.join(process.cwd(), 'reports', 'opportunity-queue.json');
const APPROVED_PATH = path.join(process.cwd(), 'reports', 'generation-batch-approved.json');
const BLOCKED_PATH = path.join(process.cwd(), 'reports', 'generation-batch-blocked.json');
const STRICT = process.env.BATCH_CANNIBAL_STRICT !== 'false';

const TRACK_TERMS = {
  hecm: ['reverse mortgage', 'hecm', 'senior'],
  equity: ['home equity', 'heloc', 'heloan', 'cash out', 'refinance'],
  wholesale: ['wholesale mortgage', 'mortgage broker', 'broker vs bank', 'non-qm', 'bank statement', 'dscr'],
};

const normalize = (v) => (v || '').toLowerCase().trim();

const slugTerms = (slug = '') =>
  slug
    .toLowerCase()
    .replace(/-202\d\b/g, '')
    .split('-')
    .filter((part) => part && !['ca', 'wa', 'the', 'and', 'for'].includes(part))
    .slice(0, 8)
    .map((part) => part.replace(/\s+/g, ' '));

const buildTerms = (item) => {
  const terms = new Set();
  (TRACK_TERMS[item.track] || []).forEach((t) => terms.add(t));
  if (item.hubId) terms.add(normalize(item.hubId).replace(/-/g, ' '));
  if (item.expectedSlug) slugTerms(item.expectedSlug).forEach((t) => terms.add(t));
  if (item.slug) slugTerms(item.slug).forEach((t) => terms.add(t));
  return Array.from(terms).filter(Boolean);
};

const matchAlerts = (alerts, terms) =>
  alerts.filter((a) => {
    const query = normalize(a.query);
    return terms.some((term) => query.includes(term));
  });

const run = async () => {
  let batch;
  let queue;
  try {
    batch = JSON.parse(await fs.readFile(BATCH_PATH, 'utf8'));
  } catch {
    console.error('Missing reports/generation-batch.json. Run `npm run seo:build-batch` first.');
    process.exit(1);
  }
  try {
    queue = JSON.parse(await fs.readFile(QUEUE_PATH, 'utf8'));
  } catch {
    console.error('Missing reports/opportunity-queue.json. Run `npm run seo:opportunity-queue` first.');
    process.exit(1);
  }

  const alerts = Array.isArray(queue.cannibalizationAlerts) ? queue.cannibalizationAlerts : [];
  const items = Array.isArray(batch.items) ? batch.items : [];
  const approved = [];
  const blocked = [];

  for (const item of items) {
    if (item.type !== 'new') {
      approved.push(item);
      continue;
    }
    const terms = buildTerms(item);
    const matched = matchAlerts(alerts, terms);
    const blocking = matched.filter((a) => a.severity === 'high' || a.severity === 'medium');
    if (blocking.length) {
      blocked.push({
        item,
        blockingAlerts: blocking.slice(0, 10).map((a) => ({
          query: a.query,
          severity: a.severity,
          impressions: a.impressions,
          pages: (a.pages || []).slice(0, 2).map((p) => p.url),
        })),
      });
      continue;
    }
    approved.push(item);
  }

  const approvedUrls = approved
    .map((item) => {
      if (item.type === 'refresh') return item.url || null;
      if (item.type === 'new') return item.expectedSlug ? `https://www.mothebroker.com/blog/${item.expectedSlug}` : null;
      return null;
    })
    .filter(Boolean);

  const approvedPayload = {
    generatedAt: new Date().toISOString(),
    sourceBatchGeneratedAt: batch.generatedAt || null,
    strictMode: STRICT,
    approvedCount: approved.length,
    blockedCount: blocked.length,
    items: approved,
    urls: approvedUrls,
  };
  const blockedPayload = {
    generatedAt: new Date().toISOString(),
    blockedCount: blocked.length,
    blocked,
  };

  await fs.writeFile(APPROVED_PATH, JSON.stringify(approvedPayload, null, 2), 'utf8');
  await fs.writeFile(BLOCKED_PATH, JSON.stringify(blockedPayload, null, 2), 'utf8');

  console.log(`Approved batch: ${APPROVED_PATH} (${approved.length} items)`);
  console.log(`Blocked report: ${BLOCKED_PATH} (${blocked.length} items)`);

  if (blocked.length && STRICT) {
    console.error('Blocked items detected under strict mode.');
    process.exit(2);
  }
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
