#!/usr/bin/env node
/**
 * Build a dated SEO audit from the latest GSC exports and internal-link audit.
 *
 * Output:
 * - reports/seo-audit-YYYYMMDD_HHMMSS.json
 * - reports/seo-audit-YYYYMMDD_HHMMSS.md
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import {
  REPORTS_DIR,
  SITE_URL,
  escapeCsv,
  getLatestReport,
  groupForPath,
  normalizeUrl,
} from './lib/gsc-utils.mjs';

const INTERNAL_LINK_AUDIT_PATH = path.join(REPORTS_DIR, 'internal-link-audit.json');
const SITEMAP_PATH = path.join('public', 'sitemap.xml');
const MIN_IMPRESSIONS_LOW_CTR = Number(process.env.SEO_AUDIT_MIN_IMPRESSIONS || 20);
const HIGH_IMPRESSIONS_THRESHOLD = Number(process.env.SEO_AUDIT_HIGH_IMPRESSIONS || 100);
const LOW_CTR_THRESHOLD = Number(process.env.SEO_AUDIT_LOW_CTR || 0.001);
const STRIKING_POSITION_MIN = Number(process.env.SEO_AUDIT_STRIKING_POSITION_MIN || 4);
const STRIKING_POSITION_MAX = Number(process.env.SEO_AUDIT_STRIKING_POSITION_MAX || 15);
const STRIKING_CTR_THRESHOLD = Number(process.env.SEO_AUDIT_STRIKING_CTR || 0.02);
const TOP_QUERY_LIMIT = Number(process.env.SEO_AUDIT_TOP_QUERY_LIMIT || 6);
const CANNIBAL_MIN_QUERY_IMPRESSIONS = Number(process.env.SEO_AUDIT_CANNIBAL_MIN_IMPRESSIONS || 20);
const CANNIBAL_MIN_PAGE_IMPRESSIONS = Number(process.env.SEO_AUDIT_CANNIBAL_MIN_PAGE_IMPRESSIONS || 3);
const MAX_REPORT_ROWS = Number(process.env.SEO_AUDIT_MAX_ROWS || 50);
const BING_TIMEOUT_MS = Number(process.env.SEO_AUDIT_BING_TIMEOUT_MS || 20000);

const normalizeUrlForMap = (url) => {
  const normalized = normalizeUrl(url);
  try {
    const parsed = new URL(normalized);
    if (parsed.pathname !== '/' && parsed.pathname.endsWith('/')) {
      parsed.pathname = parsed.pathname.slice(0, -1);
    }
    return parsed.toString();
  } catch {
    return normalized;
  }
};

const formatPct = (value) => `${(value * 100).toFixed(2)}%`;
const formatNumber = (value) => Math.round(value).toLocaleString('en-US');

const parseDotEnvFile = async (filePath) => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const values = new Map();
    raw.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) return;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim().replace(/^['"]|['"]$/g, '');
      values.set(key, value);
    });
    return values;
  } catch {
    return new Map();
  }
};

const getEnvValue = (dotenvValues, ...keys) => {
  for (const key of keys) {
    if (process.env[key]) return process.env[key];
    const localValue = dotenvValues.get(key);
    if (localValue) return localValue;
  }
  return '';
};

const parseBingDate = (value) => {
  if (!value || typeof value !== 'string') return null;
  const match = value.match(/\/Date\((\d+)/);
  if (!match) return value;

  const timestamp = Number(match[1]);
  if (!Number.isFinite(timestamp)) return value;
  return new Date(timestamp).toISOString();
};

const fetchJson = async (url) => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(BING_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};

const getBingSnapshot = async () => {
  const dotenvValues = await parseDotEnvFile('.env.local');
  const apiKey = getEnvValue(dotenvValues, 'BING_API_KEY', 'BING_WEBMASTER_API_KEY');
  if (!apiKey) {
    return { available: false, reason: 'Bing API key not configured.' };
  }

  const siteUrl = encodeURIComponent(SITE_URL);
  const apiBase = 'https://ssl.bing.com/webmaster/api.svc/json';

  const buildUrl = (endpoint) =>
    `${apiBase}/${endpoint}${endpoint.includes('?') ? '&' : '?'}apikey=${encodeURIComponent(apiKey)}`;

  const dedupeBy = (items, key) => {
    const seen = new Set();
    return items.filter((item) => {
      const value = item?.[key];
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  };

  const snapshot = {
    available: true,
    quota: null,
    crawlStats: [],
    feedStatus: [],
    topPages: [],
    topQueries: [],
    issueCount: null,
    errors: [],
  };

  const requests = [
    ['quota', `GetUrlSubmissionQuota?siteUrl=${siteUrl}`],
    ['crawlStats', `GetCrawlStats?siteUrl=${siteUrl}`],
    ['feeds', `GetFeeds?siteUrl=${siteUrl}`],
    ['pages', `GetPageStats?siteUrl=${siteUrl}`],
    ['queries', `GetQueryStats?siteUrl=${siteUrl}`],
    ['issues', `GetCrawlIssues?siteUrl=${siteUrl}`],
  ];

  const responses = await Promise.all(
    requests.map(async ([key, endpoint]) => {
      try {
        const payload = await fetchJson(buildUrl(endpoint));
        return [key, payload?.d];
      } catch (error) {
        snapshot.errors.push(`${key}: ${error.message || error}`);
        return [key, null];
      }
    })
  );

  responses.forEach(([key, data]) => {
    if (!data) return;

    if (key === 'quota') {
      snapshot.quota = {
        daily: data.DailyQuota ?? null,
        monthly: data.MonthlyQuota ?? null,
      };
      return;
    }

    if (key === 'crawlStats') {
      snapshot.crawlStats = (data || []).slice(0, 7).map((item) => ({
        date: parseBingDate(item.Date),
        crawledPages: item.CrawledPages ?? 0,
        crawlErrors: item.CrawlErrors ?? 0,
        inIndex: item.InIndex ?? 0,
      }));
      return;
    }

    if (key === 'feeds') {
      snapshot.feedStatus = (data || []).map((item) => ({
        url: item.Url,
        status: item.Status,
        submitted: parseBingDate(item.Submitted),
        lastCrawled: parseBingDate(item.LastCrawled),
        urlCount: item.UrlCount ?? 0,
      }));
      return;
    }

    if (key === 'pages') {
      snapshot.topPages = dedupeBy(data || [], 'Query')
        .slice(0, 10)
        .map((item) => ({
          url: item.Query,
          clicks: item.Clicks ?? 0,
          impressions: item.Impressions ?? 0,
          avgPosition: item.AvgPosition ?? null,
        }));
      return;
    }

    if (key === 'queries') {
      snapshot.topQueries = dedupeBy(data || [], 'Query')
        .slice(0, 10)
        .map((item) => ({
          query: item.Query,
          clicks: item.Clicks ?? 0,
          impressions: item.Impressions ?? 0,
          avgPosition: item.AvgPosition ?? null,
        }));
      return;
    }

    if (key === 'issues') {
      snapshot.issueCount = Array.isArray(data) ? data.length : 0;
    }
  });

  return snapshot;
};

const extractPatternSummary = (pages) => {
  const patterns = [
    {
      name: 'Localized Property Tax Tools',
      key: 'localized_property_tax_tools',
      regex: /^\/tools\/property-tax-estimator\/[a-z0-9-]+(?:\/[a-z0-9-]+){1,2}$/i,
    },
    {
      name: 'Localized Cash-Out Tools',
      key: 'localized_cash_out_tools',
      regex: /^\/tools\/cash-out-limit-calculator\/[a-z0-9-]+(?:\/[a-z0-9-]+){0,2}$/i,
    },
    {
      name: 'Localized DSCR Tools',
      key: 'localized_dscr_tools',
      regex: /^\/tools\/(?:dscr-rent-analyzer|dscr-qualification-calculator)\/[a-z0-9-]+(?:\/[a-z0-9-]+){0,2}$/i,
    },
    {
      name: 'Reverse Mortgage Geo Blogs',
      key: 'reverse_geo_blogs',
      regex: /^\/blog\/reverse-mortgage-[a-z0-9-]+-2026$/i,
    },
    {
      name: 'Home Equity Geo Blogs',
      key: 'home_equity_geo_blogs',
      regex: /^\/blog\/home-equity-[a-z0-9-]+-2026$/i,
    },
    {
      name: 'Wholesale Geo Blogs',
      key: 'wholesale_geo_blogs',
      regex: /^\/blog\/wholesale-mortgage-(?:broker-)?[a-z0-9-]+-2026$/i,
    },
  ];

  return patterns.map((pattern) => {
    const matched = pages.filter((page) => pattern.regex.test(page.path));
    const impressions = matched.reduce((sum, page) => sum + page.impressions, 0);
    const clicks = matched.reduce((sum, page) => sum + page.clicks, 0);

    return {
      key: pattern.key,
      name: pattern.name,
      pages: matched.length,
      impressions,
      clicks,
      ctr: impressions > 0 ? clicks / impressions : 0,
      lowCtrPages: matched.filter(
        (page) => page.impressions >= MIN_IMPRESSIONS_LOW_CTR && page.ctr < LOW_CTR_THRESHOLD
      ).length,
    };
  });
};

const buildRecommendations = ({ summary, patternSummary, familySummary, cannibalization }) => {
  const recommendations = [];
  const toolsFamily = familySummary.find((item) => item.family === 'tools');
  const blogFamily = familySummary.find((item) => item.family === 'blog');
  const propertyTaxPattern = patternSummary.find((item) => item.key === 'localized_property_tax_tools');

  if (summary.zeroInboundSitemapEntries >= 500) {
    recommendations.push({
      priority: 'high',
      action: 'Cut the crawl graph down to pages with real distribution.',
      rationale: `${formatNumber(summary.zeroInboundSitemapEntries)} sitemap URLs currently have zero internal links. Indexable pages with no path from the site are weak candidates for sustained ranking and send thin-site signals.`,
    });
  }

  if (propertyTaxPattern && propertyTaxPattern.lowCtrPages >= 25) {
    recommendations.push({
      priority: 'high',
      action: 'Collapse or noindex most localized property-tax estimator pages.',
      rationale: `${formatNumber(propertyTaxPattern.pages)} property-tax tool URLs generated ${formatNumber(propertyTaxPattern.impressions)} impressions at ${formatPct(propertyTaxPattern.ctr)} CTR, with ${formatNumber(propertyTaxPattern.lowCtrPages)} low-CTR pages. Keep state/county hubs indexable, and move city pages to noindex until they earn links or unique copy.`,
    });
  }

  if (blogFamily && blogFamily.zeroClickHighImpressionPages >= 25) {
    recommendations.push({
      priority: 'high',
      action: 'Rewrite titles, intros, and H1s for the existing striking-distance blog winners before publishing more posts.',
      rationale: `${formatNumber(blogFamily.zeroClickHighImpressionPages)} blog URLs already have ${formatNumber(HIGH_IMPRESSIONS_THRESHOLD)}+ impressions with zero clicks. The problem is mostly snippet fit and intent matching, not topic discovery.`,
    });
  }

  if (cannibalization.length >= 10) {
    recommendations.push({
      priority: 'medium',
      action: 'Merge overlapping pages around the same query and redirect the weaker variant.',
      rationale: `${formatNumber(cannibalization.length)} cannibalization clusters are active in the current query export. The strongest conflicts are around DSCR requirements, property-tax county vs city tools, broker-vs-bank, and cash-out seasoning.`,
    });
  }

  if (summary.pagesContaining2025 >= 50) {
    recommendations.push({
      priority: 'medium',
      action: 'Refresh date-sensitive copy on pages still referencing 2025.',
      rationale: `${formatNumber(summary.pagesContaining2025)} page files still contain 2025 references. For pages targeting 2026 queries, stale dates can suppress trust and CTR even when rankings are decent.`,
    });
  }

  return recommendations;
};

const buildMarkdown = (report) => {
  const lines = [];
  lines.push('# SEO Audit');
  lines.push('');
  lines.push(`Generated: ${report.generated}`);
  lines.push(`Page report: \`${report.inputs.pageReport}\``);
  lines.push(`Query report: \`${report.inputs.queryReport}\``);
  lines.push(`Internal link audit: \`${report.inputs.internalLinkAudit}\``);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Pages with impressions: ${formatNumber(report.summary.pagesWithImpressions)}`);
  lines.push(`- Total impressions: ${formatNumber(report.summary.totalImpressions)}`);
  lines.push(`- Total clicks: ${formatNumber(report.summary.totalClicks)}`);
  lines.push(`- Aggregate CTR: ${formatPct(report.summary.aggregateCtr)}`);
  lines.push(`- Sitemap entries: ${formatNumber(report.summary.sitemapEntries)}`);
  lines.push(`- Zero inbound sitemap URLs: ${formatNumber(report.summary.zeroInboundSitemapEntries)}`);
  lines.push(`- One-or-fewer inbound sitemap URLs: ${formatNumber(report.summary.oneOrFewerInboundSitemapEntries)}`);
  lines.push(`- Pages containing "2025": ${formatNumber(report.summary.pagesContaining2025)}`);
  lines.push('');
  lines.push('## Bing Snapshot');
  lines.push('');
  if (!report.bing?.available) {
    lines.push(`- ${report.bing?.reason || 'Bing data unavailable.'}`);
  } else {
    if (report.bing.quota) {
      lines.push(
        `- URL quota: daily ${formatNumber(report.bing.quota.daily || 0)}, monthly ${formatNumber(report.bing.quota.monthly || 0)}`
      );
    }
    if (report.bing.feedStatus?.length) {
      report.bing.feedStatus.forEach((feed) => {
        lines.push(
          `- Feed: ${feed.url} | ${feed.status} | ${formatNumber(feed.urlCount)} URLs | last crawled ${feed.lastCrawled || 'n/a'}`
        );
      });
    }
    if (report.bing.crawlStats?.length) {
      const latest = report.bing.crawlStats[0];
      lines.push(
        `- Latest crawl snapshot: ${latest.date || 'n/a'} | crawled ${formatNumber(latest.crawledPages)} | errors ${formatNumber(latest.crawlErrors)} | in index ${formatNumber(latest.inIndex)}`
      );
    }
    if (report.bing.issueCount !== null) {
      lines.push(`- Crawl issues: ${formatNumber(report.bing.issueCount)}`);
    }
    if (report.bing.errors?.length) {
      report.bing.errors.forEach((error) => lines.push(`- API warning: ${error}`));
    }
  }
  lines.push('');
  lines.push('## Recommendations');
  lines.push('');
  report.recommendations.forEach((item) => {
    lines.push(`- [${item.priority.toUpperCase()}] ${item.action} ${item.rationale}`);
  });
  lines.push('');

  const sections = [
    ['Top High-Impression Zero-Click Pages', report.highImpressionZeroClickPages],
    ['Top CTR < 0.1% Pages', report.lowCtrPages],
    ['Low-Link Underperformers', report.lowLinkUnderperformers],
    ['Cannibalization', report.cannibalization],
  ];

  for (const [heading, items] of sections) {
    lines.push(`## ${heading}`);
    lines.push('');

    if (!items.length) {
      lines.push('- None');
      lines.push('');
      continue;
    }

    items.forEach((item) => {
      if ('query' in item) {
        lines.push(`- ${item.query} | ${formatNumber(item.impressions)} impressions | ${item.severity}`);
        item.pages.slice(0, 3).forEach((page) => {
          lines.push(`  - ${page.path} | ${formatNumber(page.impressions)} impressions | pos ${page.position.toFixed(1)}`);
        });
        return;
      }

      lines.push(
        `- ${item.path} | ${formatNumber(item.impressions)} impressions | ${formatNumber(item.clicks)} clicks | CTR ${formatPct(item.ctr)} | pos ${item.position.toFixed(1)} | links ${item.inboundLinks ?? 'n/a'}`
      );

      if (item.topQueries?.length) {
        item.topQueries.slice(0, 3).forEach((query) => {
          lines.push(
            `  - query: ${query.query} | ${formatNumber(query.impressions)} impressions | pos ${query.position.toFixed(1)}`
          );
        });
      }
    });

    lines.push('');
  }

  lines.push('## Family Summary');
  lines.push('');
  report.familySummary.forEach((item) => {
    lines.push(
      `- ${item.family}: ${formatNumber(item.pages)} pages | ${formatNumber(item.impressions)} impressions | ${formatNumber(item.clicks)} clicks | CTR ${formatPct(item.ctr)} | ${formatNumber(item.lowCtrPages)} low-CTR pages | ${formatNumber(item.zeroClickHighImpressionPages)} zero-click high-impression pages`
    );
  });
  lines.push('');
  lines.push('## Pattern Summary');
  lines.push('');
  report.patternSummary.forEach((item) => {
    lines.push(
      `- ${item.name}: ${formatNumber(item.pages)} pages | ${formatNumber(item.impressions)} impressions | ${formatNumber(item.clicks)} clicks | CTR ${formatPct(item.ctr)} | ${formatNumber(item.lowCtrPages)} low-CTR pages`
    );
  });
  lines.push('');

  return lines.join('\n');
};

const run = async () => {
  const pageReport = await getLatestReport('gsc-performance-');
  const queryReport = await getLatestReport('gsc-query-performance-');

  if (!pageReport) {
    console.error('No page-level GSC report found. Run `npm run gsc:export` first.');
    process.exit(1);
  }

  if (!queryReport) {
    console.error('No query-level GSC report found. Run `npm run gsc:export-queries` first.');
    process.exit(1);
  }

  let internalLinkAudit;
  try {
    internalLinkAudit = JSON.parse(await fs.readFile(INTERNAL_LINK_AUDIT_PATH, 'utf8'));
  } catch {
    console.error('No internal-link audit found. Run `node scripts/internal-link-audit.mjs` first.');
    process.exit(1);
  }

  const [pageRows, queryRows] = await Promise.all([
    fs.readFile(pageReport, 'utf8').then((value) => JSON.parse(value)),
    fs.readFile(queryReport, 'utf8').then((value) => JSON.parse(value)),
  ]);

  const linkMap = new Map(
    (internalLinkAudit.sitemapEntries || []).map((item) => [
      normalizeUrlForMap(item.url),
      {
        inboundLinks: item.inboundLinks,
        appPath: item.appPath,
      },
    ])
  );

  const queryMap = new Map();
  const pageQueryMap = new Map();
  for (const row of queryRows) {
    const url = normalizeUrlForMap(row.keys?.[0] || '');
    const query = row.keys?.[1] || '';
    if (!url || !query) continue;

    const entry = {
      query,
      impressions: Number(row.impressions || 0),
      clicks: Number(row.clicks || 0),
      ctr: Number(row.ctr || 0),
      position: Number(row.position || 0),
    };

    const pageQueries = pageQueryMap.get(url) || [];
    pageQueries.push(entry);
    pageQueryMap.set(url, pageQueries);

    const grouped = queryMap.get(query.toLowerCase()) || [];
    grouped.push({
      url,
      path: new URL(url).pathname,
      impressions: entry.impressions,
      clicks: entry.clicks,
      position: entry.position,
    });
    queryMap.set(query.toLowerCase(), grouped);
  }

  const pages = pageRows.map((row) => {
    const url = normalizeUrlForMap(row.keys?.[0] || '');
    const parsed = new URL(url);
    const pathName = parsed.pathname === '' ? '/' : parsed.pathname;
    const topQueries = (pageQueryMap.get(url) || [])
      .sort((a, b) => b.impressions - a.impressions || a.position - b.position)
      .slice(0, TOP_QUERY_LIMIT);
    const linkData = linkMap.get(url);

    return {
      url,
      path: pathName,
      family: groupForPath(pathName),
      clicks: Number(row.clicks || 0),
      impressions: Number(row.impressions || 0),
      ctr: Number(row.ctr || 0),
      position: Number(row.position || 0),
      inboundLinks: linkData?.inboundLinks ?? null,
      appPath: linkData?.appPath ?? null,
      topQueries,
    };
  });

  const familySummary = [];
  const familyMap = new Map();
  for (const page of pages) {
    const entry = familyMap.get(page.family) || {
      family: page.family,
      pages: 0,
      impressions: 0,
      clicks: 0,
      lowCtrPages: 0,
      zeroClickHighImpressionPages: 0,
      zeroInboundPages: 0,
    };

    entry.pages += 1;
    entry.impressions += page.impressions;
    entry.clicks += page.clicks;
    if (page.impressions >= MIN_IMPRESSIONS_LOW_CTR && page.ctr < LOW_CTR_THRESHOLD) {
      entry.lowCtrPages += 1;
    }
    if (page.impressions >= HIGH_IMPRESSIONS_THRESHOLD && page.clicks === 0) {
      entry.zeroClickHighImpressionPages += 1;
    }
    if (page.inboundLinks === 0) {
      entry.zeroInboundPages += 1;
    }

    familyMap.set(page.family, entry);
  }

  familyMap.forEach((entry) => {
    familySummary.push({
      ...entry,
      ctr: entry.impressions > 0 ? entry.clicks / entry.impressions : 0,
    });
  });
  familySummary.sort((a, b) => b.impressions - a.impressions);

  const highImpressionZeroClickPages = pages
    .filter((page) => page.impressions >= HIGH_IMPRESSIONS_THRESHOLD && page.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position)
    .slice(0, MAX_REPORT_ROWS);

  const lowCtrPages = pages
    .filter((page) => page.impressions >= MIN_IMPRESSIONS_LOW_CTR && page.ctr < LOW_CTR_THRESHOLD)
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position)
    .slice(0, MAX_REPORT_ROWS);

  const strikingDistancePages = pages
    .filter(
      (page) =>
        page.impressions >= MIN_IMPRESSIONS_LOW_CTR &&
        page.position >= STRIKING_POSITION_MIN &&
        page.position <= STRIKING_POSITION_MAX &&
        page.ctr < STRIKING_CTR_THRESHOLD
    )
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position)
    .slice(0, MAX_REPORT_ROWS);

  const lowLinkUnderperformers = pages
    .filter(
      (page) =>
        page.impressions >= HIGH_IMPRESSIONS_THRESHOLD &&
        page.ctr < LOW_CTR_THRESHOLD &&
        page.inboundLinks !== null &&
        page.inboundLinks <= 1
    )
    .sort((a, b) => b.impressions - a.impressions || a.position - b.position)
    .slice(0, MAX_REPORT_ROWS);

  const cannibalization = [];
  queryMap.forEach((items, query) => {
    const significantPages = items
      .filter((item) => item.impressions >= CANNIBAL_MIN_PAGE_IMPRESSIONS)
      .sort((a, b) => b.impressions - a.impressions || a.position - b.position);

    if (significantPages.length < 2) {
      return;
    }

    const totalImpressions = significantPages.reduce((sum, item) => sum + item.impressions, 0);
    if (totalImpressions < CANNIBAL_MIN_QUERY_IMPRESSIONS) {
      return;
    }

    const severity =
      totalImpressions >= 100 ? 'high' : totalImpressions >= 30 ? 'medium' : 'low';

    cannibalization.push({
      query,
      impressions: totalImpressions,
      severity,
      pages: significantPages,
    });
  });
  cannibalization.sort((a, b) => b.impressions - a.impressions);

  const appPageFiles = [];
  const appDir = 'app';
  const walk = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const nextPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(nextPath);
        continue;
      }
      if (entry.isFile() && entry.name === 'page.tsx') {
        appPageFiles.push(nextPath);
      }
    }
  };
  await walk(appDir);

  let pagesContaining2025 = 0;
  for (const filePath of appPageFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    if (content.includes('2025')) {
      pagesContaining2025 += 1;
    }
  }

  const patternSummary = extractPatternSummary(pages);
  const bing = await getBingSnapshot();

  const sitemapStat = await fs.stat(SITEMAP_PATH).catch(() => null);
  const linkAuditStat = await fs.stat(INTERNAL_LINK_AUDIT_PATH).catch(() => null);

  const summary = {
    pagesWithImpressions: pages.length,
    totalImpressions: pages.reduce((sum, page) => sum + page.impressions, 0),
    totalClicks: pages.reduce((sum, page) => sum + page.clicks, 0),
    aggregateCtr:
      pages.reduce((sum, page) => sum + page.impressions, 0) > 0
        ? pages.reduce((sum, page) => sum + page.clicks, 0) /
          pages.reduce((sum, page) => sum + page.impressions, 0)
        : 0,
    sitemapEntries: (internalLinkAudit.sitemapEntries || []).length,
    zeroInboundSitemapEntries: (internalLinkAudit.sitemapEntries || []).filter(
      (item) => item.inboundLinks === 0
    ).length,
    oneOrFewerInboundSitemapEntries: (internalLinkAudit.sitemapEntries || []).filter(
      (item) => item.inboundLinks <= 1
    ).length,
    highImpressionZeroClickPages: highImpressionZeroClickPages.length,
    lowCtrPages: lowCtrPages.length,
    strikingDistancePages: strikingDistancePages.length,
    lowLinkUnderperformers: lowLinkUnderperformers.length,
    cannibalizationClusters: cannibalization.length,
    pagesContaining2025,
    internalLinkAuditOlderThanSitemap:
      Boolean(linkAuditStat && sitemapStat && linkAuditStat.mtimeMs < sitemapStat.mtimeMs),
  };

  const report = {
    generated: new Date().toISOString(),
    thresholds: {
      minImpressionsLowCtr: MIN_IMPRESSIONS_LOW_CTR,
      highImpressions: HIGH_IMPRESSIONS_THRESHOLD,
      lowCtr: LOW_CTR_THRESHOLD,
      strikingPositionMin: STRIKING_POSITION_MIN,
      strikingPositionMax: STRIKING_POSITION_MAX,
      strikingCtr: STRIKING_CTR_THRESHOLD,
      cannibalMinQueryImpressions: CANNIBAL_MIN_QUERY_IMPRESSIONS,
      cannibalMinPageImpressions: CANNIBAL_MIN_PAGE_IMPRESSIONS,
    },
    inputs: {
      pageReport,
      queryReport,
      internalLinkAudit: INTERNAL_LINK_AUDIT_PATH,
      sitemap: SITEMAP_PATH,
    },
    summary,
    bing,
    recommendations: [],
    familySummary,
    patternSummary,
    highImpressionZeroClickPages,
    lowCtrPages,
    strikingDistancePages,
    lowLinkUnderperformers,
    cannibalization: cannibalization.slice(0, MAX_REPORT_ROWS),
  };

  report.recommendations = buildRecommendations({
    summary,
    patternSummary,
    familySummary,
    cannibalization: report.cannibalization,
  });

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  const fileStamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '_');
  const jsonPath = path.join(REPORTS_DIR, `seo-audit-${fileStamp}.json`);
  const mdPath = path.join(REPORTS_DIR, `seo-audit-${fileStamp}.md`);
  const csvPath = path.join(REPORTS_DIR, `seo-audit-low-ctr-${fileStamp}.csv`);

  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2), 'utf8');
  await fs.writeFile(mdPath, buildMarkdown(report), 'utf8');

  const csvLines = [
    'path,impressions,clicks,ctr,position,inboundLinks,topQuery1,topQuery2,topQuery3',
  ];
  report.lowCtrPages.forEach((page) => {
    csvLines.push(
      [
        escapeCsv(page.path),
        page.impressions,
        page.clicks,
        page.ctr,
        page.position,
        page.inboundLinks ?? '',
        escapeCsv(page.topQueries?.[0]?.query || ''),
        escapeCsv(page.topQueries?.[1]?.query || ''),
        escapeCsv(page.topQueries?.[2]?.query || ''),
      ].join(',')
    );
  });
  await fs.writeFile(csvPath, csvLines.join('\n'), 'utf8');

  console.log('SEO audit generated');
  console.log(`JSON: ${jsonPath}`);
  console.log(`MD:   ${mdPath}`);
  console.log(`CSV:  ${csvPath}`);
  console.log(`Pages with impressions: ${summary.pagesWithImpressions}`);
  console.log(`Aggregate CTR: ${formatPct(summary.aggregateCtr)}`);
  console.log(`Zero inbound sitemap URLs: ${summary.zeroInboundSitemapEntries}`);
  console.log(`Cannibalization clusters: ${summary.cannibalizationClusters}`);
  if (bing.available && bing.feedStatus?.length) {
    console.log(`Bing feeds: ${bing.feedStatus.length}`);
  }
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
