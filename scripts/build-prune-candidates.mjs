#!/usr/bin/env node
/**
 * Build prune candidates from a GSC export.
 * Filters for impressions < 10 and clicks = 0 by default.
 * Outputs JSON + CSV with local file mapping.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const REPORTS_DIR = 'reports';
const APP_DIR = 'app';
const SITE_URL = 'https://www.mothebroker.com';
const DEFAULT_IMPRESSIONS_MAX = 10;
const DEFAULT_CLICKS_MAX = 0;
const DEFAULT_MIN_AGE_DAYS = 30;

const require = createRequire(import.meta.url);
const sitemapConfig = require('../next-sitemap.config.js');

const getLatestReport = async () => {
  const entries = await fs.readdir(REPORTS_DIR);
  const candidates = entries
    .filter((name) =>
      name.startsWith('gsc-performance-') &&
      name.endsWith('.json') &&
      !name.includes('-prune-candidates')
    )
    .map((name) => ({ name, fullPath: path.join(REPORTS_DIR, name) }));

  if (!candidates.length) {
    return null;
  }

  const stats = await Promise.all(
    candidates.map(async (file) => {
      const stat = await fs.stat(file.fullPath);
      return { ...file, mtimeMs: stat.mtimeMs };
    })
  );

  stats.sort((a, b) => b.mtimeMs - a.mtimeMs);
  return stats[0].fullPath;
};

const normalizeUrl = (url) => {
  try {
    const parsed = new URL(url);
    parsed.hash = '';
    parsed.search = '';
    if (parsed.hostname === 'mothebroker.com') {
      parsed.hostname = 'www.mothebroker.com';
    }
    parsed.protocol = 'https:';
    return parsed.toString();
  } catch {
    return url;
  }
};

const isRouteGroup = (segment) => segment.startsWith('(') && segment.endsWith(')');
const isDynamicSegment = (segment) => segment.startsWith('[') && segment.endsWith(']');

const toRoutePath = (filePath) => {
  const relative = path.relative(APP_DIR, filePath);
  const segments = relative.split(path.sep);
  if (segments[segments.length - 1] !== 'page.tsx') {
    return null;
  }
  const routeSegments = segments.slice(0, -1).filter((segment) => {
    if (isRouteGroup(segment)) return false;
    if (isDynamicSegment(segment)) return false;
    return true;
  });
  if (!routeSegments.length) return '/';
  return `/${routeSegments.join('/')}`;
};

const walk = async (dir, results = []) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, results);
      continue;
    }
    if (entry.isFile() && entry.name === 'page.tsx') {
      results.push(fullPath);
    }
  }
  return results;
};

const urlToAppPath = (url) => {
  try {
    const parsed = new URL(url);
    let pathname = parsed.pathname;
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }

    if (pathname === '/') {
      return path.join('app', 'page.tsx');
    }

    const relative = pathname.replace(/^\/+/, '');
    return path.join('app', relative, 'page.tsx');
  } catch {
    return null;
  }
};

const matchesPattern = (pattern, value) => {
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^${escaped.replace(/\*/g, '.*')}$`);
  return regex.test(value);
};

const isExcluded = (pathname, excludePatterns = []) =>
  excludePatterns.some((pattern) => matchesPattern(pattern, pathname));

const groupForPath = (pathname) => {
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/areas/')) return 'areas';
  if (pathname.startsWith('/loan-programs/')) return 'loan-programs';
  if (pathname.startsWith('/guides/')) return 'guides';
  if (pathname.startsWith('/resources/')) return 'resources';
  if (pathname.startsWith('/zip-codes/')) return 'zip-codes';
  if (pathname.startsWith('/neighborhood-guide/')) return 'neighborhood-guide';
  if (pathname.startsWith('/calculator') || pathname.startsWith('/tools/')) return 'tools';
  return 'other';
};

const escapeCsv = (value) => {
  if (value === null || value === undefined) return '';
  const stringValue = String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
};

const run = async () => {
  const reportPath = process.env.GSC_REPORT_PATH || (await getLatestReport());
  if (!reportPath) {
    console.error('No GSC report found. Run npm run gsc:export first.');
    process.exit(1);
  }

  const impressionsMax = Number(
    process.env.GSC_IMPRESSIONS_MAX || DEFAULT_IMPRESSIONS_MAX
  );
  const clicksMax = Number(process.env.GSC_CLICKS_MAX || DEFAULT_CLICKS_MAX);
  const minAgeDays = Number(process.env.GSC_MIN_AGE_DAYS || DEFAULT_MIN_AGE_DAYS);

  const raw = await fs.readFile(reportPath, 'utf8');
  const rows = JSON.parse(raw);
  const gscMap = new Map();
  rows.forEach((row) => {
    const page = row.keys?.[0];
    if (!page) return;
    const normalized = normalizeUrl(page);
    gscMap.set(normalized, {
      clicks: Number(row.clicks || 0),
      impressions: Number(row.impressions || 0),
      ctr: row.ctr ?? 0,
      position: row.position ?? 0
    });
  });

  const pageFiles = await walk(APP_DIR);
  const urlMap = new Map();
  pageFiles.forEach((filePath) => {
    const routePath = toRoutePath(filePath);
    if (!routePath) return;
    const url = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
    urlMap.set(normalizeUrl(url), filePath);
  });

  let additionalUrls = [];
  if (typeof sitemapConfig.additionalPaths === 'function') {
    const entries = await sitemapConfig.additionalPaths(sitemapConfig);
    additionalUrls = entries
      .map((entry) => (typeof entry === 'string' ? entry : entry?.loc))
      .filter(Boolean)
      .map((url) =>
        url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
      );
  }

  const excludePatterns = sitemapConfig.exclude || [];
  const allUrls = new Set();
  for (const url of urlMap.keys()) {
    const pathname = new URL(url).pathname;
    if (!isExcluded(pathname, excludePatterns)) {
      allUrls.add(url);
    }
  }
  additionalUrls.forEach((url) => {
    const normalized = normalizeUrl(url);
    const pathname = new URL(normalized).pathname;
    if (!isExcluded(pathname, excludePatterns)) {
      allUrls.add(normalized);
    }
  });

  const candidates = [];
  for (const url of allUrls) {
    const metrics = gscMap.get(url) || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    if (metrics.impressions >= impressionsMax || metrics.clicks > clicksMax) {
      continue;
    }

    const pathname = new URL(url).pathname;
    const appPath = urlMap.get(url) || urlToAppPath(url);
    let exists = false;
    let ageDays = null;
    try {
      if (appPath) {
        const stat = await fs.stat(appPath);
        exists = true;
        const ageMs = Date.now() - stat.mtimeMs;
        ageDays = Math.floor(ageMs / (1000 * 60 * 60 * 24));
      }
    } catch {
      exists = false;
    }

    if (!exists || ageDays === null || ageDays < minAgeDays) {
      continue;
    }

    candidates.push({
      page: url,
      clicks: metrics.clicks,
      impressions: metrics.impressions,
      ctr: metrics.ctr,
      position: metrics.position,
      group: groupForPath(pathname),
      appPath,
      exists,
      ageDays
    });
  }

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  const reportBase = path.basename(reportPath).replace('.json', '');
  const jsonOut = path.join(REPORTS_DIR, `${reportBase}-prune-candidates.json`);
  const csvOut = path.join(REPORTS_DIR, `${reportBase}-prune-candidates.csv`);

  await fs.writeFile(jsonOut, JSON.stringify(candidates, null, 2), 'utf8');

  const csvLines = [
    'page,clicks,impressions,ctr,position,group,appPath,exists,ageDays'
  ];
  candidates.forEach((item) => {
    csvLines.push(
      [
        escapeCsv(item.page),
        item.clicks,
        item.impressions,
        item.ctr,
        item.position,
        item.group,
        escapeCsv(item.appPath || ''),
        item.exists,
        item.ageDays ?? ''
      ].join(',')
    );
  });
  await fs.writeFile(csvOut, csvLines.join('\n'), 'utf8');

  console.log(`Prune candidates: ${candidates.length}`);
  console.log(`JSON: ${jsonOut}`);
  console.log(`CSV:  ${csvOut}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
