#!/usr/bin/env node
/**
 * Build prune candidates from a GSC export.
 * Filters for impressions < 10 and clicks = 0 by default.
 * Outputs JSON + CSV with local file mapping.
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const REPORTS_DIR = 'reports';
const DEFAULT_IMPRESSIONS_MAX = 10;
const DEFAULT_CLICKS_MAX = 0;

const getLatestReport = async () => {
  const entries = await fs.readdir(REPORTS_DIR);
  const candidates = entries
    .filter((name) => name.startsWith('gsc-performance-') && name.endsWith('.json'))
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

  const raw = await fs.readFile(reportPath, 'utf8');
  const rows = JSON.parse(raw);

  const candidates = [];

  for (const row of rows) {
    const page = row.keys?.[0];
    if (!page) continue;
    const normalized = normalizeUrl(page);

    const clicks = Number(row.clicks || 0);
    const impressions = Number(row.impressions || 0);

    if (impressions < impressionsMax && clicks <= clicksMax) {
      const pathname = new URL(normalized).pathname;
      const appPath = urlToAppPath(normalized);
      let exists = false;
      try {
        if (appPath) {
          await fs.access(appPath);
          exists = true;
        }
      } catch {
        exists = false;
      }

      candidates.push({
        page: normalized,
        clicks,
        impressions,
        ctr: row.ctr ?? 0,
        position: row.position ?? 0,
        group: groupForPath(pathname),
        appPath,
        exists
      });
    }
  }

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  const reportBase = path.basename(reportPath).replace('.json', '');
  const jsonOut = path.join(REPORTS_DIR, `${reportBase}-prune-candidates.json`);
  const csvOut = path.join(REPORTS_DIR, `${reportBase}-prune-candidates.csv`);

  await fs.writeFile(jsonOut, JSON.stringify(candidates, null, 2), 'utf8');

  const csvLines = [
    'page,clicks,impressions,ctr,position,group,appPath,exists'
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
        item.exists
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
