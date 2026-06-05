import fs from 'node:fs';
import path from 'node:path';
import routePolicy from '../lib/seo-route-policy.js';

const SITE_ORIGIN = 'https://www.mothebroker.com';
const MUST_INDEX_PROPERTY_TAX_PATH = '/tools/property-tax-estimator/ca/orange-county';
const REVERSE_RATES_PATH = '/blog/reverse-mortgage-interest-rates-current-2026';
const MUST_STAY_NOINDEX_PATHS = [
  '/tools/property-tax-estimator/ca/los-angeles-county',
  '/tools/property-tax-estimator/ca/orange-county/irvine',
];

const PRIORITY_SOURCE_FILES = {
  propertyTax: path.join(
    process.cwd(),
    'app',
    'tools',
    'property-tax-estimator',
    '[state]',
    '[county]',
    'page.tsx'
  ),
  reverseRates: path.join(
    process.cwd(),
    'app',
    'blog',
    'reverse-mortgage-interest-rates-current-2026',
    'page.tsx'
  ),
  blogLayout: path.join(process.cwd(), 'app', 'blog', 'layout.tsx'),
  toolLayout: path.join(process.cwd(), 'components', 'tools', 'ToolPageLayout.tsx'),
};

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function normalizeBaseUrl(value) {
  if (!value) return null;
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

function getAttr(tag, attrName) {
  const pattern = new RegExp(`${attrName}\\s*=\\s*["']([^"']*)["']`, 'i');
  return tag.match(pattern)?.[1] || null;
}

function hasMetaRobotsNoindex(html) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  return metaTags.some((tag) => {
    const name = getAttr(tag, 'name');
    const content = getAttr(tag, 'content') || '';
    return name?.toLowerCase() === 'robots' && /noindex/i.test(content);
  });
}

function getCanonicalHref(html) {
  const linkTags = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of linkTags) {
    const rel = getAttr(tag, 'rel') || '';
    if (rel.toLowerCase().split(/\s+/).includes('canonical')) {
      return getAttr(tag, 'href');
    }
  }
  return null;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function parseJsonLdBlocks(html, routePath) {
  const blocks = [];
  const pattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const raw = decodeHtmlEntities(match[1].trim());
    if (!raw) continue;
    try {
      blocks.push(JSON.parse(raw));
    } catch (error) {
      fail(`${routePath} has invalid JSON-LD: ${error.message}`);
    }
  }
  return blocks;
}

function collectSchemaTypes(value, result = []) {
  if (!value) return result;
  if (Array.isArray(value)) {
    for (const item of value) collectSchemaTypes(item, result);
    return result;
  }
  if (typeof value !== 'object') return result;

  const type = value['@type'];
  if (Array.isArray(type)) {
    for (const item of type) result.push(item);
  } else if (type) {
    result.push(type);
  }

  for (const nested of Object.values(value)) {
    if (nested && typeof nested === 'object') collectSchemaTypes(nested, result);
  }

  return result;
}

function countJsonLdType(html, routePath, schemaType) {
  return parseJsonLdBlocks(html, routePath)
    .flatMap((block) => collectSchemaTypes(block))
    .filter((type) => type === schemaType).length;
}

function assertContains(source, needle, label) {
  if (!source.includes(needle)) {
    fail(`${label} is missing required text: ${needle}`);
  }
}

function checkRoutePolicy() {
  const policy = routePolicy.getRoutePolicy(MUST_INDEX_PROPERTY_TAX_PATH);
  if (policy.indexingBucket !== routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} route policy is not indexable`);
  }
  if (policy.sitemapBucket !== routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} route policy is not sitemap-indexable`);
  }
  if (policy.robotsDirective !== null) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} emits robots directive ${policy.robotsDirective}`);
  }
  if (routePolicy.shouldExcludeFromSitemap(MUST_INDEX_PROPERTY_TAX_PATH)) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} is excluded from sitemap by route policy`);
  }

  for (const routePath of MUST_STAY_NOINDEX_PATHS) {
    const noindexPolicy = routePolicy.getRoutePolicy(routePath);
    if (noindexPolicy.indexingBucket !== routePolicy.ROUTE_POLICY_BUCKETS.NOINDEX) {
      fail(`${routePath} should remain noindex unless explicitly allowlisted`);
    }
    if (!/noindex/i.test(noindexPolicy.robotsDirective || '')) {
      fail(`${routePath} should retain a noindex robots directive`);
    }
    if (!routePolicy.shouldExcludeFromSitemap(routePath)) {
      fail(`${routePath} should remain excluded from the sitemap`);
    }
  }
}

function checkSitemapOutput() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    fail('public/sitemap.xml is missing. Run npm run sitemap before npm run seo:validate.');
    return;
  }

  const sitemap = readText(sitemapPath);
  const mustIndexUrl = `${SITE_ORIGIN}${MUST_INDEX_PROPERTY_TAX_PATH}`;
  if (!sitemap.includes(`<loc>${mustIndexUrl}</loc>`)) {
    fail(`${mustIndexUrl} is missing from public/sitemap.xml`);
  }

  for (const routePath of MUST_STAY_NOINDEX_PATHS) {
    const url = `${SITE_ORIGIN}${routePath}`;
    if (sitemap.includes(`<loc>${url}</loc>`)) {
      fail(`${url} should not be present in public/sitemap.xml`);
    }
  }
}

function checkPrioritySourceFiles() {
  const propertyTax = readText(PRIORITY_SOURCE_FILES.propertyTax);
  const reverseRates = readText(PRIORITY_SOURCE_FILES.reverseRates);
  const blogLayout = readText(PRIORITY_SOURCE_FILES.blogLayout);
  const toolLayout = readText(PRIORITY_SOURCE_FILES.toolLayout);

  assertContains(propertyTax, 'Orange County Property Tax Rate 2026: Estimate Monthly Taxes', 'property tax page');
  assertContains(propertyTax, 'property tax estimate inputs for 2026', 'property tax page');
  assertContains(propertyTax, 'AnswerBlock', 'property tax page');
  assertContains(propertyTax, 'SourceBox', 'property tax page');
  assertContains(propertyTax, 'SemanticInfoTable', 'property tax page');

  if (reverseRates.includes('March 2026')) {
    fail(`${REVERSE_RATES_PATH} still contains stale March 2026 currentness language`);
  }
  assertContains(reverseRates, 'Current Reverse Mortgage Interest Rates 2026: HECM Rate Guide', 'reverse rates page');
  assertContains(reverseRates, 'Current Reverse Mortgage Interest Rates in 2026', 'reverse rates page');
  assertContains(reverseRates, "dateModified: REVIEWED_DATE", 'reverse rates page');
  assertContains(reverseRates, 'Last reviewed', 'reverse rates page');
  assertContains(reverseRates, 'AnswerBlock', 'reverse rates page');
  assertContains(reverseRates, 'SourceBox', 'reverse rates page');
  assertContains(reverseRates, 'SemanticInfoTable', 'reverse rates page');

  const reverseTitleLength = 'Current Reverse Mortgage Interest Rates 2026: HECM Rate Guide'.length;
  if (reverseTitleLength > 75) {
    warn(`${REVERSE_RATES_PATH} title is ${reverseTitleLength} characters`);
  }

  const reverseDescriptionLength =
    'Understand how current HECM rates, expected rate, margin, MIP, and fees affect reverse mortgage proceeds before comparing lenders.'.length;
  if (reverseDescriptionLength > 170) {
    warn(`${REVERSE_RATES_PATH} description is ${reverseDescriptionLength} characters`);
  }

  if (blogLayout.includes('BreadcrumbList')) {
    fail('app/blog/layout.tsx should not emit a generic BreadcrumbList');
  }

  const reverseBreadcrumbSourceCount = (reverseRates.match(/['"]@type['"]:\s*['"]BreadcrumbList['"]/g) || []).length;
  if (reverseBreadcrumbSourceCount !== 1) {
    fail(`${REVERSE_RATES_PATH} source should define exactly one BreadcrumbList, found ${reverseBreadcrumbSourceCount}`);
  }

  const toolBreadcrumbSourceCount = (toolLayout.match(/['"]@type['"]:\s*['"]BreadcrumbList['"]/g) || []).length;
  if (toolBreadcrumbSourceCount !== 1) {
    fail(`ToolPageLayout should define exactly one BreadcrumbList schema builder, found ${toolBreadcrumbSourceCount}`);
  }
}

async function fetchRoute(baseUrl, routePath) {
  const response = await fetch(`${baseUrl}${routePath}`, {
    redirect: 'manual',
    headers: { 'user-agent': 'mothebroker-seo-validate' },
  });
  const html = await response.text();
  return { response, html };
}

function checkSemanticTable(html, routePath) {
  const required = [
    '<table',
    '<caption',
    '<thead',
    '<tbody',
    'scope="col"',
    'scope="row"',
    'Orange County property tax estimate inputs for 2026',
  ];

  for (const needle of required) {
    if (!html.includes(needle)) {
      fail(`${routePath} rendered HTML is missing semantic table marker ${needle}`);
    }
  }
}

async function checkRenderedRoutes() {
  const baseUrl = normalizeBaseUrl(process.env.SEO_VALIDATE_BASE_URL);
  if (!baseUrl) {
    warn('Set SEO_VALIDATE_BASE_URL to enforce rendered header, canonical, and JSON-LD checks.');
    return;
  }

  const mustIndex = await fetchRoute(baseUrl, MUST_INDEX_PROPERTY_TAX_PATH);
  if (mustIndex.response.status >= 400) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} returned HTTP ${mustIndex.response.status}`);
  }
  const robotsHeader = mustIndex.response.headers.get('x-robots-tag') || '';
  if (/noindex/i.test(robotsHeader)) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} returned X-Robots-Tag ${robotsHeader}`);
  }
  if (hasMetaRobotsNoindex(mustIndex.html)) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} rendered a meta robots noindex`);
  }
  const propertyTaxCanonical = getCanonicalHref(mustIndex.html);
  if (propertyTaxCanonical !== `${SITE_ORIGIN}${MUST_INDEX_PROPERTY_TAX_PATH}`) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} canonical is ${propertyTaxCanonical || 'missing'}`);
  }
  checkSemanticTable(mustIndex.html, MUST_INDEX_PROPERTY_TAX_PATH);
  const propertyBreadcrumbCount = countJsonLdType(
    mustIndex.html,
    MUST_INDEX_PROPERTY_TAX_PATH,
    'BreadcrumbList'
  );
  if (propertyBreadcrumbCount !== 1) {
    fail(`${MUST_INDEX_PROPERTY_TAX_PATH} rendered ${propertyBreadcrumbCount} BreadcrumbList blocks`);
  }

  const reverseRates = await fetchRoute(baseUrl, REVERSE_RATES_PATH);
  if (reverseRates.response.status >= 400) {
    fail(`${REVERSE_RATES_PATH} returned HTTP ${reverseRates.response.status}`);
  }
  if (reverseRates.html.includes('March 2026')) {
    fail(`${REVERSE_RATES_PATH} rendered stale March 2026 currentness language`);
  }
  if (hasMetaRobotsNoindex(reverseRates.html)) {
    fail(`${REVERSE_RATES_PATH} rendered a meta robots noindex`);
  }
  const reverseCanonical = getCanonicalHref(reverseRates.html);
  if (reverseCanonical !== `${SITE_ORIGIN}${REVERSE_RATES_PATH}`) {
    fail(`${REVERSE_RATES_PATH} canonical is ${reverseCanonical || 'missing'}`);
  }
  const reverseBreadcrumbCount = countJsonLdType(
    reverseRates.html,
    REVERSE_RATES_PATH,
    'BreadcrumbList'
  );
  if (reverseBreadcrumbCount !== 1) {
    fail(`${REVERSE_RATES_PATH} rendered ${reverseBreadcrumbCount} BreadcrumbList blocks`);
  }

  for (const routePath of MUST_STAY_NOINDEX_PATHS) {
    const noindexRoute = await fetchRoute(baseUrl, routePath);
    const noindexHeader = noindexRoute.response.headers.get('x-robots-tag') || '';
    if (!/noindex/i.test(noindexHeader)) {
      fail(`${routePath} did not return a noindex X-Robots-Tag header`);
    }
  }
}

async function main() {
  checkRoutePolicy();
  checkSitemapOutput();
  checkPrioritySourceFiles();
  await checkRenderedRoutes();

  for (const message of warnings) {
    console.warn(`WARN ${message}`);
  }

  if (failures.length > 0) {
    for (const message of failures) {
      console.error(`FAIL ${message}`);
    }
    process.exit(1);
  }

  console.log('SEO priority validation passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
