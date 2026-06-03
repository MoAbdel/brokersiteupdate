import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const routePolicy = require('../lib/seo-route-policy.js');

const root = process.cwd();
const siteOrigin = 'https://www.mothebroker.com';
const auditDir = path.join(root, 'audit');
const defaultPagesCsv =
  'C:/Users/haithem/Downloads/mothebroker.com-Performance-on-Search-2026-05-09/Pages.csv';
const defaultQueriesCsv =
  'C:/Users/haithem/Downloads/mothebroker.com-Performance-on-Search-2026-05-09/Queries.csv';

const pagesCsvPath = process.env.GSC_PAGES_CSV || defaultPagesCsv;
const queriesCsvPath = process.env.GSC_QUERIES_CSV || defaultQueriesCsv;

fs.mkdirSync(auditDir, { recursive: true });

const read = (filePath) => {
  const normalized = filePath.replaceAll('/', path.sep);
  return fs.existsSync(normalized) ? fs.readFileSync(normalized, 'utf8') : '';
};

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === ',' && !quoted) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') index += 1;
      row.push(cell);
      if (row.some((value) => value.length > 0)) rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += char;
  }

  if (cell.length || row.length) {
    row.push(cell);
    if (row.some((value) => value.length > 0)) rows.push(row);
  }

  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])),
  );
};

const toNumber = (value) => Number(String(value).replace('%', '')) || 0;

const parseSitemap = () => {
  const xml = read(path.join(root, 'public', 'sitemap.xml'));
  return new Set(Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => match[1].replace(/\/$/, '')));
};

const parseLuxuryDispositions = () => {
  const source = read(path.join(root, 'lib', 'disposition', 'luxury-urls.ts'));
  const redirects = new Map();
  const redirectBlock = source.match(/export const REDIRECTS[\s\S]*?export const GONE_410/)?.[0] ?? '';

  for (const match of redirectBlock.matchAll(/"from":\s*"([^"]+)"[\s\S]*?"to":\s*"([^"]+)"/g)) {
    redirects.set(match[1], match[2]);
  }

  const goneBlock = source.match(/export const GONE_410[\s\S]*?;/)?.[0] ?? '';
  const gone = new Set(Array.from(goneBlock.matchAll(/"([^"]+)"/g)).map((match) => match[1]));

  return { redirects, gone };
};

const parseMiddlewareRedirects = () => {
  const source = read(path.join(root, 'middleware.ts'));
  const redirects = new Map();
  const blocks = Array.from(
    source.matchAll(/const\s+(?:blogRedirects|pageRedirects|familyRedirects):\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\n\s*\};/g),
  );

  for (const block of blocks) {
    for (const match of block[1].matchAll(/['"]([^'"]+)['"]:\s*['"]([^'"]+)['"]/g)) {
      redirects.set(match[1], match[2]);
    }
  }

  return redirects;
};

const sitemapUrls = parseSitemap();
const { redirects: luxuryRedirects, gone: luxuryGone } = parseLuxuryDispositions();
const middlewareRedirects = parseMiddlewareRedirects();

const toUrlPath = (urlOrPath) => {
  if (urlOrPath.startsWith('http')) {
    const parsed = new URL(urlOrPath);
    return { pathname: parsed.pathname.replace(/\/$/, '') || '/', search: parsed.search };
  }

  const [pathname, search = ''] = urlOrPath.split('?');
  return { pathname: pathname.replace(/\/$/, '') || '/', search: search ? `?${search}` : '' };
};

const dispositionFor = (urlOrPath) => {
  const { pathname, search } = toUrlPath(urlOrPath);

  if (luxuryRedirects.has(pathname)) {
    const target = luxuryRedirects.get(pathname);
    return {
      pathname,
      bucket: 'redirect',
      target,
      sitemapIncluded: false,
      reasons: ['luxury-redirect'],
    };
  }

  if (luxuryGone.has(pathname)) {
    return {
      pathname,
      bucket: '410',
      target: null,
      sitemapIncluded: false,
      reasons: ['luxury-gone'],
    };
  }

  if (middlewareRedirects.has(pathname)) {
    const target = middlewareRedirects.get(pathname);
    return {
      pathname,
      bucket: 'redirect',
      target,
      sitemapIncluded: false,
      reasons: ['middleware-redirect'],
    };
  }

  const policy = routePolicy.getRoutePolicy(pathname, search);
  const url = `${siteOrigin}${pathname === '/' ? '' : pathname}`;

  return {
    pathname,
    bucket: policy.indexingBucket,
    target: policy.redirectTarget,
    sitemapIncluded: sitemapUrls.has(url.replace(/\/$/, '')),
    reasons: policy.reasons,
    robotsDirective: policy.robotsDirective,
  };
};

const checks = [];
const addCheck = (name, passed, details = {}) => {
  checks.push({ name, passed, details });
};

const promotedIndexablePaths = [
  '/blog/reverse-mortgage-complete-guide-2026',
  '/blog/reverse-mortgage-inheritance-heirs-2026',
  '/blog/reverse-mortgage-payout-options-2026',
  '/blog/reverse-mortgage-closing-costs-fees-2026',
  '/blog/reverse-mortgage-optimal-timing-age-strategy-2026',
  '/blog/reverse-mortgage-interest-rates-current-2026',
  '/blog/reverse-mortgage-closing-process-timeline-2026',
  '/blog/reverse-mortgage-tax-implications-2026',
  '/blog/home-equity-sharing-vs-heloc-2026',
  '/blog/wholesale-mortgage-broker-los-angeles-guide-2026',
  '/blog/wholesale-mortgage-broker-san-diego-guide-2026',
  '/blog/wholesale-mortgage-broker-sacramento-guide-2026',
];

const sitemapRequiredPaths = [
  '/',
  '/about',
  '/contact',
  '/calculator',
  '/resources',
  '/tools',
  '/tools/property-tax-estimator',
  '/tools/cash-out-limit-calculator',
  '/tools/dscr-qualification-calculator',
  '/tools/dscr-rent-analyzer',
  '/tools/equity-comparison-calculator',
  '/tools/max-heloc-calculator',
  '/tools/bank-statement-loan-estimator',
  '/wholesale-mortgage-broker-california',
  '/wholesale-mortgage-broker-california/mortgage-broker-vs-bank',
];

const redirectResolvedPaths = [
  '/heloc-specialist-orange-county',
  '/articles/newport-beach-mortgage-guide-2026',
  '/blog/home-equity-newport-beach-2026',
  '/blog/home-equity-bellevue-wa-2026',
  '/blog/home-equity-laguna-beach-2026',
  '/blog/reverse-mortgage-bellevue-wa-2026',
  '/blog/wholesale-mortgage-broker-92625',
  '/blog/wholesale-mortgage-broker-92629',
  '/blog/wholesale-mortgage-broker-92651',
  '/blog/wholesale-mortgage-broker-92679',
  '/blog/wholesale-mortgage-broker-bay-area-guide-2026',
  '/reverse-mortgage',
  '/jumbo-loans',
  '/non-qm-loans',
  '/areas/newport-beach-mortgage-broker',
  '/home-equity-refinancing-guide-2026',
  '/sitemap-news.xml',
];

const intentionalNoindexPaths = [
  '/mo-abdel-contact.vcf',
  '/llms.txt',
  '/robots.txt',
  '/sitemap.xml',
  '/guides?category=Refinance',
  '/tools/dscr-rent-analyzer/wa/whitman-county',
  '/tools/property-tax-estimator/wa/stevens-county',
];

const gonePaths = [
  '/tools/cash-out-limit-calculator/ca/santa-clara-county',
  '/tools/max-heloc-calculator/ca/san-mateo-county',
  '/tools/dscr-rent-analyzer/ca/san-francisco-county',
  '/tools/dscr-qualification-calculator/ca/marin-county/mill-valley',
];

const promotedResults = promotedIndexablePaths.map(dispositionFor);
addCheck(
  'promoted pages are indexable',
  promotedResults.every((item) => item.bucket === 'indexable' && item.sitemapIncluded),
  { promotedResults },
);

const sitemapResults = sitemapRequiredPaths.map((routePath) => ({
  routePath,
  sitemapIncluded: sitemapUrls.has(`${siteOrigin}${routePath === '/' ? '' : routePath}`.replace(/\/$/, '')),
}));
addCheck(
  'required hubs and promoted surfaces are in sitemap',
  sitemapResults.every((item) => item.sitemapIncluded),
  { sitemapResults },
);

const redirectResults = redirectResolvedPaths.map(dispositionFor);
addCheck(
  'redirect examples resolve as redirects, not 404 or conflicting 410',
  redirectResults.every((item) => item.bucket === 'redirect'),
  { redirectResults },
);

const noindexResults = intentionalNoindexPaths.map(dispositionFor);
addCheck(
  'intentional noindex examples remain noindex',
  noindexResults.every((item) => item.bucket === 'noindex'),
  { noindexResults },
);

const goneResults = gonePaths.map(dispositionFor);
addCheck(
  'retired 404 examples now resolve as explicit 410 removals',
  goneResults.every((item) => item.bucket === '410'),
  { goneResults },
);

const pages = parseCsv(read(pagesCsvPath));
const queries = parseCsv(read(queriesCsvPath));

const topPagesByImpressions = [...pages]
  .sort((a, b) => toNumber(b.Impressions) - toNumber(a.Impressions))
  .slice(0, 25)
  .map((row) => ({
    url: row['Top pages'],
    clicks: toNumber(row.Clicks),
    impressions: toNumber(row.Impressions),
    ctr: row.CTR,
    position: toNumber(row.Position),
    disposition: dispositionFor(row['Top pages']),
  }));

const targetForQuery = (query) => {
  const q = query.toLowerCase();
  if (q.includes('proprietary reverse mortgage') || q.includes('jumbo reverse')) return '/blog/proprietary-reverse-mortgage-2026';
  if (q.includes('adu roi') || q.includes('adu loan calculator')) return '/resources/cash-out-adu-calculator';
  if (q.includes('bankruptcy') || q.includes('chapter 7') || q.includes('chapter 13')) return '/blog/refinance-after-bankruptcy-waiting-periods-2026';
  if (q.includes('find a mortgage broker')) return '/';
  if (q.includes('heloc terms') || q.includes('draw period') || q.includes('repayment period')) return '/blog/heloc-draw-period-repayment-guide-2026';
  if (q.includes('credit score')) return '/blog/refinance-credit-requirements-2026';
  if (q.includes('cash out refinance ltv') || q.includes('cash-out refinance maximum ltv')) return '/blog/cash-out-refinance-ltv-limits-by-loan-type-2026';
  if (q.includes('mortgage broker in washington')) return '/blog/wholesale-mortgage-broker-washington-2026';
  if (q.includes('mortgage broker in california')) return '/wholesale-mortgage-broker-california';
  if (q.includes('los angeles mortgage broker')) return '/blog/wholesale-mortgage-broker-los-angeles-guide-2026';
  if (q.includes('wholesale mortgage rates')) return '/blog/wholesale-mortgage-rate-comparison-2026';
  if (q.includes('dscr loan down payment')) return '/blog/dscr-loan-down-payment-requirements-2026';
  if (q.includes('dscr loan for llc')) return '/blog/dscr-loan-llc-entity-structure-2026';
  if (q.includes('irs publication 936') || q.includes('home equity debt interest')) return '/blog/heloc-interest-tax-deduction-rules-2026';
  if (q.includes('upfront mip taxable') || q.includes('hecm') && q.includes('taxable')) return '/blog/reverse-mortgage-tax-implications-2026';
  if (q.includes('reverse mortgage process timeline')) return '/blog/reverse-mortgage-closing-process-timeline-2026';
  if (q.includes('principal limit factor') || q.includes('age 62 percentage')) return '/blog/hecm-principal-limit-factors-2026';
  return null;
};

const topQueriesByImpressions = [...queries]
  .sort((a, b) => toNumber(b.Impressions) - toNumber(a.Impressions))
  .slice(0, 25)
  .map((row) => {
    const target = targetForQuery(row['Top queries']);
    return {
      query: row['Top queries'],
      clicks: toNumber(row.Clicks),
      impressions: toNumber(row.Impressions),
      ctr: row.CTR,
      position: toNumber(row.Position),
      target,
      disposition: target ? dispositionFor(target) : null,
    };
  });

addCheck(
  'top 25 query targets are mapped to indexable sitemap routes',
  topQueriesByImpressions.every(
    (item) => item.target && item.disposition?.bucket === 'indexable' && item.disposition?.sitemapIncluded,
  ),
  { topQueriesByImpressions },
);

addCheck(
  'top 25 page URLs are not accidental noindex pages',
  topPagesByImpressions.every((item) => {
    if (item.disposition.bucket !== 'noindex') return true;
    return item.disposition.reasons?.includes('localized-tool-route');
  }),
  { topPagesByImpressions },
);

const report = {
  generatedAt: new Date().toISOString(),
  pagesCsvPath,
  queriesCsvPath,
  sitemapUrlCount: sitemapUrls.size,
  checks,
  topPagesByImpressions,
  topQueriesByImpressions,
};

const failed = checks.filter((check) => !check.passed);
const jsonPath = path.join(auditDir, 'gsc-may-2026-verification.json');
const markdownPath = path.join(auditDir, 'gsc-may-2026-verification.md');

fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

const lines = [
  '# GSC May 2026 Verification',
  '',
  `Generated: ${report.generatedAt}`,
  `Sitemap URLs: ${report.sitemapUrlCount}`,
  '',
  '## Checks',
  '',
  ...checks.map((check) => `- ${check.passed ? 'PASS' : 'FAIL'}: ${check.name}`),
  '',
  '## Top 25 Queries',
  '',
  ...topQueriesByImpressions.map(
    (item, index) =>
      `${index + 1}. ${item.query} -> ${item.target ?? 'unmapped'} (${item.disposition?.bucket ?? 'unmapped'})`,
  ),
  '',
  '## Top 25 Pages By Impressions',
  '',
  ...topPagesByImpressions.map(
    (item, index) =>
      `${index + 1}. ${item.url} -> ${item.disposition.bucket}${item.disposition.target ? ` to ${item.disposition.target}` : ''}`,
  ),
  '',
];

fs.writeFileSync(markdownPath, `${lines.join('\n')}\n`, 'utf8');

console.log(`Wrote ${path.relative(root, jsonPath)}`);
console.log(`Wrote ${path.relative(root, markdownPath)}`);
console.log(failed.length ? `FAIL ${failed.length} check(s)` : 'PASS all checks');

if (failed.length > 0) {
  process.exitCode = 1;
}
