#!/usr/bin/env node
/**
 * Shared GSC / SEO utilities.
 * Extracted from build-prune-candidates.mjs for reuse across scripts.
 */

import fs from 'node:fs/promises';
import path from 'node:path';

export const SITE_URL = 'https://www.mothebroker.com';
export const REPORTS_DIR = 'reports';
export const APP_DIR = 'app';

/* ─── URL helpers ─────────────────────────────────────────── */

export const normalizeUrl = (url) => {
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

export const urlToAppPath = (url) => {
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

/* ─── Route / filesystem helpers ──────────────────────────── */

export const isRouteGroup = (segment) => segment.startsWith('(') && segment.endsWith(')');
export const isDynamicSegment = (segment) => segment.startsWith('[') && segment.endsWith(']');

export const toRoutePath = (filePath) => {
  const relative = path.relative(APP_DIR, filePath);
  const segments = relative.split(path.sep);
  if (segments[segments.length - 1] !== 'page.tsx') return null;
  const routeSegments = segments.slice(0, -1).filter((segment) => {
    if (isRouteGroup(segment)) return false;
    if (isDynamicSegment(segment)) return false;
    return true;
  });
  if (!routeSegments.length) return '/';
  return `/${routeSegments.join('/')}`;
};

export const walk = async (dir, results = []) => {
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

/* ─── Categorisation ──────────────────────────────────────── */

export const groupForPath = (pathname) => {
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

/* ─── CSV ─────────────────────────────────────────────────── */

export const escapeCsv = (value) => {
  if (value === null || value === undefined) return '';
  const stringValue = String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
};

/* ─── Report discovery ────────────────────────────────────── */

/**
 * Find the latest report file matching a given prefix.
 * @param {string} prefix  e.g. 'gsc-performance-' or 'gsc-query-performance-'
 * @returns {Promise<string|null>} full path or null
 */
export const getLatestReport = async (prefix = 'gsc-performance-') => {
  let entries;
  try {
    entries = await fs.readdir(REPORTS_DIR);
  } catch {
    return null;
  }

  const candidates = entries
    .filter((name) =>
      name.startsWith(prefix) &&
      name.endsWith('.json') &&
      !name.includes('-prune-candidates')
    )
    .map((name) => ({ name, fullPath: path.join(REPORTS_DIR, name) }));

  if (!candidates.length) return null;

  const stats = await Promise.all(
    candidates.map(async (file) => {
      const stat = await fs.stat(file.fullPath);
      return { ...file, mtimeMs: stat.mtimeMs };
    })
  );

  stats.sort((a, b) => b.mtimeMs - a.mtimeMs);
  return stats[0].fullPath;
};
