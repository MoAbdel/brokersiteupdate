#!/usr/bin/env node
/**
 * Tiered CTR-based prune candidate script.
 *
 * Unlike build-prune-candidates.mjs (simple threshold: impressions < 10, clicks = 0),
 * this script applies smarter tiering:
 *
 *   Tier 1 — Noindex dead:       impressions >= 50 AND clicks === 0 AND ageDays >= 30
 *   Tier 2 — Striking distance:  clicks >= 1 AND clicks <= 2 AND position < 20 AND impressions >= 20
 *
 * Also processes cannibalization clusters from the latest seo-audit report:
 *   - Winner = most clicks, then best (lowest) position
 *   - Losers marked for merge + redirect
 *
 * Outputs:
 *   reports/noindex-dead-TIMESTAMP.json
 *   reports/striking-distance-keep-TIMESTAMP.json
 *   reports/cannibalization-merges-TIMESTAMP.json
 */

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import {
  REPORTS_DIR, SITE_URL,
  normalizeUrl, groupForPath, getLatestReport
} from './lib/gsc-utils.mjs';

const TIMESTAMP = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '');

/* ─── File-age helper ────────────────────────────────────── */

/**
 * Try to determine the age in days of the page file backing a URL.
 * Returns ageDays (number) or null if the file cannot be found.
 */
const getAgeDays = (pathname) => {
  // Primary path: app/<pathname>/page.tsx
  const candidates = [];

  if (pathname === '/') {
    candidates.push(path.join('app', 'page.tsx'));
  } else {
    const relative = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    candidates.push(path.join('app', relative, 'page.tsx'));

    // Blog posts live under app/blog/[slug]/page.tsx — the dynamic route file
    if (relative.startsWith('blog/')) {
      candidates.push(path.join('app', 'blog', '[slug]', 'page.tsx'));
    }

    // Tools pages may be under dynamic segments
    if (relative.startsWith('tools/')) {
      const segments = relative.split('/');
      // e.g. tools/property-tax-estimator/ca/los-angeles-county/calabasas
      // try progressively collapsing trailing segments to dynamic params
      for (let i = segments.length - 1; i >= 1; i--) {
        const base = segments.slice(0, i).join('/');
        candidates.push(path.join('app', base, '[...slug]', 'page.tsx'));
        candidates.push(path.join('app', base, '[slug]', 'page.tsx'));
      }
    }

    // Area pages may be dynamic
    if (relative.startsWith('areas/')) {
      candidates.push(path.join('app', 'areas', '[slug]', 'page.tsx'));
    }

    // Zip-code pages may be dynamic
    if (relative.startsWith('zip-codes/')) {
      candidates.push(path.join('app', 'zip-codes', '[zip]', 'page.tsx'));
      candidates.push(path.join('app', 'zip-codes', '[slug]', 'page.tsx'));
    }
  }

  for (const candidate of candidates) {
    try {
      const stat = fs.statSync(candidate);
      const ageMs = Date.now() - stat.mtimeMs;
      return Math.floor(ageMs / (1000 * 60 * 60 * 24));
    } catch {
      // try next candidate
    }
  }

  // File not found — assume age >= 30 days per spec
  return null;
};

/* ─── Main ───────────────────────────────────────────────── */

const run = async () => {
  // 1. Load latest GSC performance report
  const gscPath = process.env.GSC_REPORT_PATH || (await getLatestReport('gsc-performance-'));
  if (!gscPath) {
    console.error('No GSC performance report found. Run npm run gsc:export first.');
    process.exit(1);
  }
  console.log(`GSC report: ${gscPath}`);

  const gscRaw = await fsp.readFile(gscPath, 'utf8');
  const gscRows = JSON.parse(gscRaw);

  // 2. Load latest SEO audit report for cannibalization data
  const auditPath = await getLatestReport('seo-audit-');
  let cannibClusters = [];
  if (auditPath) {
    console.log(`SEO audit:  ${auditPath}`);
    const auditRaw = await fsp.readFile(auditPath, 'utf8');
    const audit = JSON.parse(auditRaw);
    // The key is "cannibalization" (an array of cluster objects)
    cannibClusters = audit.cannibalization || audit.cannibalizationClusters || [];
    if (!Array.isArray(cannibClusters)) cannibClusters = [];
  } else {
    console.warn('No SEO audit report found — skipping cannibalization analysis.');
  }

  // 3. Build URL → metrics map
  const metrics = new Map();
  for (const row of gscRows) {
    const url = row.keys?.[0];
    if (!url) continue;
    const normalized = normalizeUrl(url);
    metrics.set(normalized, {
      url: normalized,
      clicks: Number(row.clicks || 0),
      impressions: Number(row.impressions || 0),
      ctr: row.ctr ?? 0,
      position: row.position ?? 0
    });
  }

  // 4. Apply tiered logic
  const noindexDead = [];
  const strikingDistanceKeep = [];

  for (const [url, m] of metrics) {
    let pathname;
    try {
      pathname = new URL(url).pathname;
    } catch {
      continue;
    }

    const ageDays = getAgeDays(pathname);
    // If file not found, assume age >= 30 days (treat as old enough)
    const effectiveAge = ageDays ?? 30;

    // Tier 1 — Noindex dead: impressions >= 50, clicks === 0, age >= 30
    if (m.impressions >= 50 && m.clicks === 0 && effectiveAge >= 30) {
      noindexDead.push({
        page: url,
        clicks: m.clicks,
        impressions: m.impressions,
        ctr: m.ctr,
        position: m.position,
        group: groupForPath(pathname),
        ageDays: effectiveAge,
        tier: 'noindex-dead'
      });
      continue;
    }

    // Tier 2 — Striking distance keep: 1-2 clicks, position < 20, impressions >= 20
    if (m.clicks >= 1 && m.clicks <= 2 && m.position < 20 && m.impressions >= 20) {
      strikingDistanceKeep.push({
        page: url,
        clicks: m.clicks,
        impressions: m.impressions,
        ctr: m.ctr,
        position: m.position,
        group: groupForPath(pathname),
        ageDays: effectiveAge,
        tier: 'striking-distance-keep'
      });
    }
  }

  // Sort: noindex-dead by impressions desc (worst offenders first)
  noindexDead.sort((a, b) => b.impressions - a.impressions);

  // Sort: striking-distance by position asc (closest to page 1 first)
  strikingDistanceKeep.sort((a, b) => a.position - b.position);

  // 5. Process cannibalization clusters
  const cannibMerges = [];
  for (const cluster of cannibClusters) {
    const { query, impressions: clusterImpressions, severity, pages } = cluster;
    if (!pages || pages.length < 2) continue;

    // Determine winner: most clicks, then best (lowest) position
    const sorted = [...pages].sort((a, b) => {
      if ((b.clicks || 0) !== (a.clicks || 0)) return (b.clicks || 0) - (a.clicks || 0);
      return (a.position || 999) - (b.position || 999);
    });

    const winner = sorted[0];
    const losers = sorted.slice(1);

    cannibMerges.push({
      query,
      clusterImpressions: clusterImpressions || 0,
      severity: severity || 'unknown',
      winner: {
        url: winner.url,
        path: winner.path,
        clicks: winner.clicks || 0,
        impressions: winner.impressions || 0,
        position: winner.position || 0
      },
      losers: losers.map((p) => ({
        url: p.url,
        path: p.path,
        clicks: p.clicks || 0,
        impressions: p.impressions || 0,
        position: p.position || 0,
        action: 'merge-content-then-redirect'
      }))
    });
  }

  // Sort cannib merges by cluster impressions desc
  cannibMerges.sort((a, b) => b.clusterImpressions - a.clusterImpressions);

  // 6. Write output files
  await fsp.mkdir(REPORTS_DIR, { recursive: true });

  const noindexPath = path.join(REPORTS_DIR, `noindex-dead-${TIMESTAMP}.json`);
  const strikingPath = path.join(REPORTS_DIR, `striking-distance-keep-${TIMESTAMP}.json`);
  const cannibPath = path.join(REPORTS_DIR, `cannibalization-merges-${TIMESTAMP}.json`);

  await Promise.all([
    fsp.writeFile(noindexPath, JSON.stringify(noindexDead, null, 2), 'utf8'),
    fsp.writeFile(strikingPath, JSON.stringify(strikingDistanceKeep, null, 2), 'utf8'),
    fsp.writeFile(cannibPath, JSON.stringify(cannibMerges, null, 2), 'utf8')
  ]);

  // 7. Summary
  console.log('\n--- CTR Prune Candidates Summary ---');
  console.log(`Tier 1 — Noindex dead (imp >= 50, clicks = 0, age >= 30d): ${noindexDead.length}`);
  console.log(`Tier 2 — Striking distance keep (1-2 clicks, pos < 20, imp >= 20): ${strikingDistanceKeep.length}`);
  console.log(`Cannibalization clusters for merge+redirect: ${cannibMerges.length}`);
  console.log('');
  console.log(`  ${noindexPath}`);
  console.log(`  ${strikingPath}`);
  console.log(`  ${cannibPath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
