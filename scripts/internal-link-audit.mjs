#!/usr/bin/env node
// Internal link audit:
// - Build a route list from app/*/page.tsx
// - Parse internal hrefs in app/ (tsx files)
// - Count inbound links per route
// - Output reports for sitemap URLs

import fs from 'node:fs/promises';
import path from 'node:path';

const APP_DIR = 'app';
const LINK_SOURCE_DIRS = ['app', 'components'];
const REPORTS_DIR = 'reports';
const SITE_URL = 'https://www.mothebroker.com';
const SITEMAP_PATH = path.join('public', 'sitemap.xml');

const isRouteGroup = (segment) => segment.startsWith('(') && segment.endsWith(')');
const isDynamicSegment = (segment) => segment.startsWith('[') && segment.endsWith(']');

const normalizePath = (value) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith('/')) return null;
  const noHash = trimmed.split('#')[0];
  const noQuery = noHash.split('?')[0];
  if (noQuery !== '/' && noQuery.endsWith('/')) {
    return noQuery.slice(0, -1);
  }
  return noQuery;
};

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
    if (entry.isFile() && entry.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
};

const extractHrefPaths = (content) => {
  const results = [];
  const hrefRegex = /href\s*=\s*(?:\{)?["'](\/[^"']*)["']/g;
  let match = hrefRegex.exec(content);
  while (match) {
    results.push(match[1]);
    match = hrefRegex.exec(content);
  }
  return results;
};

const parseSitemapPaths = async () => {
  const xml = await fs.readFile(SITEMAP_PATH, 'utf8');
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match = regex.exec(xml);
  while (match) {
    const url = match[1];
    if (!url.startsWith(SITE_URL)) {
      match = regex.exec(xml);
      continue;
    }
    const pathname = new URL(url).pathname;
    const normalized = normalizePath(pathname);
    if (normalized) {
      urls.push(normalized);
    }
    match = regex.exec(xml);
  }
  return urls;
};

const run = async () => {
  const linkSourceFiles = [];
  for (const dir of LINK_SOURCE_DIRS) {
    try {
      const files = await walk(dir);
      linkSourceFiles.push(...files);
    } catch {
      // Ignore missing directories
    }
  }

  const tsxFiles = await walk(APP_DIR);
  const pageFiles = tsxFiles.filter((filePath) => filePath.endsWith(`${path.sep}page.tsx`));
  const routeMap = new Map();
  pageFiles.forEach((filePath) => {
    const routePath = toRoutePath(filePath);
    if (!routePath) return;
    routeMap.set(routePath, filePath);
  });

  const sitemapPaths = await parseSitemapPaths();
  const sitemapSet = new Set(sitemapPaths);

  const inboundCounts = new Map();
  routeMap.forEach((_, routePath) => inboundCounts.set(routePath, 0));
  sitemapSet.forEach((routePath) => {
    if (!inboundCounts.has(routePath)) {
      inboundCounts.set(routePath, 0);
    }
  });

  for (const filePath of linkSourceFiles) {
    const content = await fs.readFile(filePath, 'utf8');
    const hrefs = extractHrefPaths(content);
    hrefs.forEach((href) => {
      const normalized = normalizePath(href);
      if (!normalized) return;
      if (!inboundCounts.has(normalized)) return;
      inboundCounts.set(normalized, inboundCounts.get(normalized) + 1);
    });
  }

  const sitemapEntries = Array.from(sitemapSet).map((routePath) => ({
    path: routePath,
    url: `${SITE_URL}${routePath === '/' ? '' : routePath}`,
    inboundLinks: inboundCounts.get(routePath) || 0,
    appPath: routeMap.get(routePath) || null
  }));

  sitemapEntries.sort((a, b) => a.inboundLinks - b.inboundLinks || a.path.localeCompare(b.path));
  const orphaned = sitemapEntries.filter((entry) => entry.inboundLinks === 0);

  await fs.mkdir(REPORTS_DIR, { recursive: true });
  await fs.writeFile(
    path.join(REPORTS_DIR, 'internal-link-audit.json'),
    JSON.stringify({ sitemapEntries, orphaned }, null, 2),
    'utf8'
  );

  const csvLines = ['path,url,inboundLinks,appPath'];
  sitemapEntries.forEach((entry) => {
    csvLines.push(
      [
        entry.path,
        entry.url,
        entry.inboundLinks,
        entry.appPath || ''
      ].join(',')
    );
  });
  await fs.writeFile(path.join(REPORTS_DIR, 'internal-link-audit.csv'), csvLines.join('\n'), 'utf8');

  console.log(`Sitemap entries analyzed: ${sitemapEntries.length}`);
  console.log(`Orphaned entries: ${orphaned.length}`);
  console.log('Reports: reports/internal-link-audit.json, reports/internal-link-audit.csv');
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
