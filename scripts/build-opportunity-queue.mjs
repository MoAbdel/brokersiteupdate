#!/usr/bin/env node
/**
 * Build an opportunity queue for blog generation.
 *
 * Reads GSC page-level (required) and query-level (optional) data,
 * the regional hub map, and the existing blog directory to produce a
 * scored priority queue of pending hub+track pairs, refresh candidates,
 * and cannibalization alerts.
 *
 * Output: reports/opportunity-queue.json
 */

import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import {
  REPORTS_DIR, APP_DIR, SITE_URL,
  normalizeUrl, walk, toRoutePath, getLatestReport
} from './lib/gsc-utils.mjs';

/* ─── Configurable weights (env overrides) ────────────────── */

const W = {
  demand:      Number(process.env.OQ_W_DEMAND      || 25),
  striking:    Number(process.env.OQ_W_STRIKING     || 25),
  ctrHeadroom: Number(process.env.OQ_W_CTR_HEADROOM || 10),
  bizValue:    Number(process.env.OQ_W_BIZ_VALUE    || 20),
  overlapRisk: Number(process.env.OQ_W_OVERLAP_RISK || 15),
  recency:     Number(process.env.OQ_W_RECENCY      || 5),
};

const EXPLORATION_BUDGET = Number(process.env.OQ_EXPLORATION_BUDGET || 0.2);
const REFRESH_MIN_IMPRESSIONS = 20;
const REFRESH_POSITION_MIN = 8;
const REFRESH_POSITION_MAX = 25;
const RECENCY_DAYS = 14;

/* ─── Hub map parser ──────────────────────────────────────── */

const HUB_MAP_PATH = '.claude/skills/equity-hecm-blog-generator/references/regional-hub-map.md';

/**
 * Parse the hub map markdown into structured data.
 * Returns Map<hubId, { hubId, name, region, cities, medianRange, tracks, status }>
 * where status is per-track: { hecm, equity, wholesale } = 'pending'|'complete'
 */
const parseHubMap = (content) => {
  const hubs = new Map();
  const lines = content.split('\n').map((l) => l.replace(/\r$/, ''));

  let currentRegion = '';
  let currentRegionNum = '';

  // Parse hub table rows
  const hubTableRe = /^\|\s*(.+?)\s*\|\s*((?:CA|WA)-[\w-]+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|$/;

  for (const line of lines) {
    // Track region headers
    const regionMatch = line.match(/^### Region (\d+):\s*(.+)$/);
    if (regionMatch) {
      currentRegionNum = regionMatch[1];
      currentRegion = regionMatch[2].trim();
      continue;
    }

    // Parse hub table rows
    const hubMatch = line.match(hubTableRe);
    if (hubMatch) {
      const [, name, hubId, citiesStr, medianRange, trackStr] = hubMatch;
      if (hubId.includes('Hub') || hubId.includes('ID')) continue; // header row

      const cityEntries = citiesStr.split(',').map((c) => {
        const m = c.trim().match(/^(.+?)\s*\(\$?([\d.]+)([MK]?)\)$/);
        if (!m) return { name: c.trim(), medianValue: 0 };
        const multiplier = m[3] === 'M' ? 1_000_000 : m[3] === 'K' ? 1_000 : 1;
        return { name: m[1].trim(), medianValue: parseFloat(m[2]) * multiplier };
      });

      const tracks = [];
      if (/HECM/i.test(trackStr)) tracks.push('hecm');
      if (/Equity/i.test(trackStr)) tracks.push('equity');
      if (/Wholesale/i.test(trackStr)) tracks.push('wholesale');

      hubs.set(hubId, {
        hubId,
        name: name.trim(),
        region: currentRegion,
        regionNum: Number(currentRegionNum),
        cities: cityEntries,
        medianRange,
        tracks,
        avgMedianValue: cityEntries.reduce((s, c) => s + c.medianValue, 0) / (cityEntries.length || 1),
      });
    }
  }

  return hubs;
};

/**
 * Parse hub post status from the Generation Status Tracker table.
 * Returns Map<`${hubId}-${track}`, 'complete'|'pending'>
 */
const parseHubStatus = (content) => {
  const statusMap = new Map();
  const lines = content.split('\n').map((l) => l.replace(/\r$/, ''));
  const statusRe = /^\|\s*((?:CA|WA)-[\w-]+)\s*\|\s*(.+?)\s*\|\s*([✅⬜🔄])\s*\|\s*([✅⬜🔄])\s*\|\s*([✅⬜🔄—-])\s*\|$/;

  for (const line of lines) {
    const m = line.match(statusRe);
    if (!m) continue;
    const [, hubId, , hecm, equity, wholesale] = m;
    statusMap.set(`${hubId}-hecm`, hecm === '✅' ? 'complete' : 'pending');
    statusMap.set(`${hubId}-equity`, equity === '✅' ? 'complete' : 'pending');
    if (wholesale !== '—' && wholesale !== '-') {
      statusMap.set(`${hubId}-wholesale`, wholesale === '✅' ? 'complete' : 'pending');
    }
  }
  return statusMap;
};

/* ─── Keyword mapping ─────────────────────────────────────── */

const TRACK_KEYWORDS = {
  hecm: ['reverse mortgage', 'hecm', 'senior', 'retirement', 'home equity conversion'],
  equity: ['home equity', 'heloc', 'heloan', 'cash-out', 'refinance', 'equity'],
  wholesale: ['wholesale mortgage', 'broker', 'wholesale lending', 'wholesale rate'],
};

const inferTrackFromSlug = (slug = '') => {
  const s = slug.toLowerCase();
  if (/(reverse-mortgage|hecm|seniors)/.test(s)) return 'hecm';
  if (/(wholesale|broker-vs-bank|bank-statement|non-qm|dscr|self-employed)/.test(s)) return 'wholesale';
  if (/(home-equity|heloc|heloan|cash-out|refinance)/.test(s)) return 'equity';
  return 'equity';
};

/**
 * Build a map of expected keyword stems for each pending hub+track pair.
 */
const buildTopicKeywordMap = (hubs, pending) => {
  const map = new Map();
  for (const item of pending) {
    const hub = hubs.get(item.hubId);
    if (!hub) continue;
    const cityStems = hub.cities.map((c) => c.name.toLowerCase());
    const trackStems = TRACK_KEYWORDS[item.track] || [];
    map.set(`${item.hubId}-${item.track}`, [...cityStems, ...trackStems]);
  }
  return map;
};

/* ─── Expected CTR by position (industry benchmarks) ──────── */

const expectedCtr = (position) => {
  if (position <= 1) return 0.28;
  if (position <= 2) return 0.15;
  if (position <= 3) return 0.11;
  if (position <= 5) return 0.06;
  if (position <= 10) return 0.025;
  if (position <= 20) return 0.01;
  return 0.005;
};

/* ─── Scoring ─────────────────────────────────────────────── */

/**
 * Score a pending hub+track pair.
 */
const scoreHubItem = (item, hub, pageGsc, queryGsc, keywordMap, existingBlogSlugs) => {
  const keywords = keywordMap.get(`${item.hubId}-${item.track}`) || [];
  const reasons = [];
  let score = 0;

  // 1. Demand Signal (+25): Related pages already have impressions
  let relatedImpressions = 0;
  for (const [url, metrics] of pageGsc) {
    const urlLower = url.toLowerCase();
    const matchesAny = keywords.some((kw) => urlLower.includes(kw.replace(/\s+/g, '-')));
    if (matchesAny) relatedImpressions += metrics.impressions;
  }
  if (relatedImpressions > 0) {
    const demandScore = Math.min(W.demand, (relatedImpressions / 100) * W.demand);
    score += demandScore;
    reasons.push(`demand: +${demandScore.toFixed(1)} (${relatedImpressions} related impressions)`);
  }

  // 2. Striking Distance (+25): Related pages at positions 8-25
  let strikingPages = 0;
  for (const [url, metrics] of pageGsc) {
    const urlLower = url.toLowerCase();
    const matchesAny = keywords.some((kw) => urlLower.includes(kw.replace(/\s+/g, '-')));
    if (matchesAny && metrics.position >= 8 && metrics.position <= 25 && metrics.impressions >= 5) {
      strikingPages++;
    }
  }
  if (strikingPages > 0) {
    const strikingScore = Math.min(W.striking, strikingPages * (W.striking / 3));
    score += strikingScore;
    reasons.push(`striking: +${strikingScore.toFixed(1)} (${strikingPages} pages at pos 8-25)`);
  }

  // 3. CTR Headroom (+10): Related pages with CTR below expected for position
  let ctrGapSum = 0;
  let ctrGapCount = 0;
  for (const [url, metrics] of pageGsc) {
    const urlLower = url.toLowerCase();
    const matchesAny = keywords.some((kw) => urlLower.includes(kw.replace(/\s+/g, '-')));
    if (matchesAny && metrics.position > 0 && metrics.impressions >= 10) {
      const expected = expectedCtr(metrics.position);
      const gap = expected - metrics.ctr;
      if (gap > 0) {
        ctrGapSum += gap;
        ctrGapCount++;
      }
    }
  }
  if (ctrGapCount > 0) {
    const avgGap = ctrGapSum / ctrGapCount;
    const ctrScore = Math.min(W.ctrHeadroom, (avgGap / 0.1) * W.ctrHeadroom);
    score += ctrScore;
    reasons.push(`ctrHeadroom: +${ctrScore.toFixed(1)} (avg gap ${(avgGap * 100).toFixed(1)}%)`);
  }

  // 4. Business Value (+20): Based on median home value of hub cities
  if (hub) {
    // Normalize: $600K = 0, $10M+ = 1
    const normalized = Math.min(1, Math.max(0, (hub.avgMedianValue - 600_000) / 9_400_000));
    const bizScore = normalized * W.bizValue;
    score += bizScore;
    reasons.push(`bizValue: +${bizScore.toFixed(1)} (avg $${(hub.avgMedianValue / 1_000_000).toFixed(1)}M)`);
  }

  // 5. Overlap Risk (-15): Target keywords already ranking on another page
  if (queryGsc) {
    let overlapCount = 0;
    for (const [, qMetrics] of queryGsc) {
      const query = (qMetrics.query || '').toLowerCase();
      const matchesTarget = keywords.some((kw) => query.includes(kw));
      if (matchesTarget && qMetrics.impressions >= 5) overlapCount++;
    }
    if (overlapCount > 0) {
      const overlapPenalty = Math.min(W.overlapRisk, (overlapCount / 5) * W.overlapRisk);
      score -= overlapPenalty;
      reasons.push(`overlapRisk: -${overlapPenalty.toFixed(1)} (${overlapCount} overlapping queries)`);
    }
  }

  // 6. Recency Penalty (-5): Similar page published recently
  const expectedSlugPatterns = buildExpectedSlugs(item);
  for (const slug of existingBlogSlugs) {
    for (const pattern of expectedSlugPatterns) {
      if (slug.includes(pattern)) {
        // Check file age
        try {
          const stat = fsSync.statSync(path.join(APP_DIR, 'blog', slug, 'page.tsx'));
          const ageDays = (Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24);
          if (ageDays < RECENCY_DAYS) {
            score -= W.recency;
            reasons.push(`recency: -${W.recency} (similar page ${slug} is ${Math.floor(ageDays)}d old)`);
          }
        } catch {
          // file doesn't exist, no penalty
        }
      }
    }
  }

  return { score: Math.max(0, Math.min(100, score)), reasons };
};

/* ─── Slug patterns ───────────────────────────────────────── */

const buildExpectedSlugs = (item) => {
  const patterns = [];
  const hubLower = item.hubId.toLowerCase().replace(/_/g, '-');
  const trackSlugMap = { hecm: 'reverse-mortgage', equity: 'home-equity', wholesale: 'wholesale-mortgage-broker' };
  const trackSlug = trackSlugMap[item.track] || item.track;
  patterns.push(`${trackSlug}-${hubLower}`);

  // Also match region-based slugs
  if (item.region) {
    const regionSlug = item.region.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    patterns.push(`${trackSlug}-${regionSlug}`);
  }
  return patterns;
};

const buildExpectedSlug = (item) => {
  const trackSlugMap = { hecm: 'reverse-mortgage', equity: 'home-equity', wholesale: 'wholesale-mortgage-broker' };
  const trackSlug = trackSlugMap[item.track] || item.track;
  const hubLower = item.hubId.toLowerCase().replace(/_/g, '-');
  return `${trackSlug}-${hubLower}-2026`;
};

/* ─── Cannibalization detection ───────────────────────────── */

/**
 * Find queries driving impressions to 2+ pages.
 * Requires query-level GSC data.
 */
const detectCannibalization = (queryRows) => {
  if (!queryRows.length) return [];

  // Group by query
  const queryMap = new Map();
  for (const row of queryRows) {
    const query = row.keys?.[1] || row.keys?.[0];
    const page = row.keys?.[0];
    if (!query || !page) continue;

    if (!queryMap.has(query)) queryMap.set(query, []);
    queryMap.get(query).push({
      page: normalizeUrl(page),
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      position: row.position || 0,
    });
  }

  const alerts = [];
  for (const [query, pages] of queryMap) {
    const significantPages = pages.filter((p) => p.impressions >= 5);
    if (significantPages.length < 2) continue;

    significantPages.sort((a, b) => b.impressions - a.impressions);

    const totalImpressions = significantPages.reduce((s, p) => s + p.impressions, 0);
    const severity = totalImpressions > 100 ? 'high' : totalImpressions > 30 ? 'medium' : 'low';

    alerts.push({
      query,
      impressions: totalImpressions,
      pages: significantPages.map((p) => ({
        url: p.page,
        impressions: p.impressions,
        clicks: p.clicks,
        position: p.position,
      })),
      action: 'investigate',
      severity,
    });
  }

  alerts.sort((a, b) => b.impressions - a.impressions);
  return alerts.slice(0, 50); // Top 50 alerts
};

/* ─── Refresh candidates ──────────────────────────────────── */

/**
 * Flag existing blog pages at positions 8-25 with 20+ impressions.
 */
const identifyRefreshCandidates = (pageGsc) => {
  const candidates = [];
  for (const [url, metrics] of pageGsc) {
    if (
      metrics.position >= REFRESH_POSITION_MIN &&
      metrics.position <= REFRESH_POSITION_MAX &&
      metrics.impressions >= REFRESH_MIN_IMPRESSIONS
    ) {
      const parsed = new URL(url);
      const pathname = parsed.pathname.replace(/\/$/, '');
      if (!pathname.startsWith('/blog/')) continue;

      const slug = pathname.replace('/blog/', '');
      candidates.push({
        url,
        slug,
        track: inferTrackFromSlug(slug),
        position: Math.round(metrics.position * 10) / 10,
        impressions: metrics.impressions,
        clicks: metrics.clicks,
        ctr: Math.round(metrics.ctr * 10000) / 10000,
        action: 'refresh',
        reason: `Position ${metrics.position.toFixed(1)} with ${metrics.impressions} impressions — update content to push into top 5`,
      });
    }
  }
  candidates.sort((a, b) => b.impressions - a.impressions);
  return candidates;
};

/* ─── Exploration budget ──────────────────────────────────── */

const applyExplorationBudget = (scored, budget = EXPLORATION_BUDGET) => {
  const totalSlots = scored.length;
  const explorationSlots = Math.floor(totalSlots * budget);

  // Items with no GSC data (score based only on bizValue)
  const noDataItems = scored.filter((item) =>
    item.reasons.length === 1 && item.reasons[0].startsWith('bizValue:')
  );

  // Mark buckets
  const explorationSet = new Set(
    noDataItems.slice(0, explorationSlots).map((i) => `${i.hubId}-${i.track}`)
  );

  return scored.map((item) => ({
    ...item,
    bucket: explorationSet.has(`${item.hubId}-${item.track}`) ? 'exploration' : 'opportunity',
  }));
};

/* ─── Main ────────────────────────────────────────────────── */

const run = async () => {
  console.log('Opportunity Queue Builder');
  console.log('========================\n');

  // 1. Load page-level GSC data (required)
  const pageReportPath = await getLatestReport('gsc-performance-');
  if (!pageReportPath) {
    console.error('No page-level GSC report found. Run npm run gsc:export first.');
    process.exit(1);
  }
  console.log(`Page GSC: ${pageReportPath}`);

  const pageRows = JSON.parse(await fs.readFile(pageReportPath, 'utf8'));
  const pageGsc = new Map();
  for (const row of pageRows) {
    const page = row.keys?.[0];
    if (!page) continue;
    pageGsc.set(normalizeUrl(page), {
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: row.ctr || 0,
      position: row.position || 0,
    });
  }

  // Extract date range from filename
  const gscDataRange = path.basename(pageReportPath).replace('gsc-performance-', '').replace('.json', '');

  // 2. Load query-level GSC data (optional)
  const queryReportPath = await getLatestReport('gsc-query-performance-');
  let queryRows = [];
  let queryGsc = null;
  let queryDataAvailable = false;

  if (queryReportPath) {
    console.log(`Query GSC: ${queryReportPath}`);
    queryRows = JSON.parse(await fs.readFile(queryReportPath, 'utf8'));
    queryDataAvailable = true;

    queryGsc = new Map();
    for (const row of queryRows) {
      const page = row.keys?.[0];
      const query = row.keys?.[1];
      if (!page || !query) continue;
      const key = `${normalizeUrl(page)}|||${query}`;
      queryGsc.set(key, {
        query,
        page: normalizeUrl(page),
        clicks: row.clicks || 0,
        impressions: row.impressions || 0,
        position: row.position || 0,
      });
    }
  } else {
    console.log('Query GSC: not available (run npm run gsc:export-queries for better scoring)');
  }

  // 3. Load hub map
  let hubMapContent;
  try {
    hubMapContent = await fs.readFile(HUB_MAP_PATH, 'utf8');
  } catch {
    console.error(`Hub map not found at ${HUB_MAP_PATH}`);
    process.exit(1);
  }

  const hubs = parseHubMap(hubMapContent);
  const hubStatus = parseHubStatus(hubMapContent);
  console.log(`Hub map: ${hubs.size} hubs parsed, ${hubStatus.size} status entries\n`);

  // 4. Scan existing blog pages
  const pageFiles = await walk(APP_DIR);
  const existingBlogSlugs = [];
  for (const filePath of pageFiles) {
    const routePath = toRoutePath(filePath);
    if (routePath && routePath.startsWith('/blog/')) {
      existingBlogSlugs.push(routePath.replace('/blog/', ''));
    }
  }
  console.log(`Existing blog pages: ${existingBlogSlugs.length}`);

  // 5. Build pending items list
  const pending = [];
  for (const [hubId, hub] of hubs) {
    for (const track of hub.tracks) {
      const key = `${hubId}-${track}`;
      const status = hubStatus.get(key);
      if (status === 'complete') continue;

      // Also check if page.tsx already exists
      const expectedSlug = buildExpectedSlug({ hubId, track, region: hub.region });
      const slugExists = existingBlogSlugs.some((s) => s.includes(expectedSlug.replace('-2026', '')));
      if (slugExists) continue;

      pending.push({
        hubId,
        track,
        region: hub.region,
        regionNum: hub.regionNum,
        name: hub.name,
        expectedSlug,
      });
    }
  }
  console.log(`Pending hub+track pairs: ${pending.length}\n`);

  // 6. Build keyword map and score
  const keywordMap = buildTopicKeywordMap(hubs, pending);

  const scored = pending.map((item) => {
    const hub = hubs.get(item.hubId);
    const { score, reasons } = scoreHubItem(item, hub, pageGsc, queryGsc, keywordMap, existingBlogSlugs);
    return {
      hubId: item.hubId,
      track: item.track,
      region: item.region,
      regionNum: item.regionNum,
      name: item.name,
      expectedSlug: item.expectedSlug,
      score: Math.round(score * 10) / 10,
      reasons,
    };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Apply exploration budget
  const withBuckets = applyExplorationBudget(scored);

  // 7. Refresh candidates
  const refreshCandidates = identifyRefreshCandidates(pageGsc);
  console.log(`Refresh candidates: ${refreshCandidates.length}`);

  // 8. Cannibalization alerts
  const cannibalizationAlerts = queryDataAvailable ? detectCannibalization(queryRows) : [];
  console.log(`Cannibalization alerts: ${cannibalizationAlerts.length}`);

  // 9. Build output
  const output = {
    generated: new Date().toISOString(),
    gscDataRange,
    queryDataAvailable,
    weights: W,
    refreshCandidates,
    scoredQueue: withBuckets,
    cannibalizationAlerts,
    summary: {
      totalPending: pending.length,
      totalScored: scored.length,
      opportunityBucket: withBuckets.filter((i) => i.bucket === 'opportunity').length,
      explorationBucket: withBuckets.filter((i) => i.bucket === 'exploration').length,
      refreshCandidates: refreshCandidates.length,
      cannibalizationAlerts: cannibalizationAlerts.length,
      topScore: scored[0]?.score ?? 0,
      bottomScore: scored[scored.length - 1]?.score ?? 0,
    },
  };

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  const outPath = path.join(REPORTS_DIR, 'opportunity-queue.json');
  await fs.writeFile(outPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\nOutput: ${outPath}`);
  console.log('\nSummary:');
  console.log(`  Pending:        ${output.summary.totalPending}`);
  console.log(`  Opportunity:    ${output.summary.opportunityBucket}`);
  console.log(`  Exploration:    ${output.summary.explorationBucket}`);
  console.log(`  Refresh:        ${output.summary.refreshCandidates}`);
  console.log(`  Cannibal alerts:${output.summary.cannibalizationAlerts}`);
  console.log(`  Score range:    ${output.summary.bottomScore}-${output.summary.topScore}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
