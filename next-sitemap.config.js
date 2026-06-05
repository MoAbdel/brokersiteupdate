/** @type {import('next-sitemap').IConfig} */
const fsSync = require('node:fs');
const fs = require('node:fs/promises');
const path = require('node:path');
const vercelConfig = require('./vercel.json');
const routePolicy = require('./lib/seo-route-policy.js');

const BUILD_ISO = new Date().toISOString();
const APP_DIR = path.join(process.cwd(), 'app');
const PAGE_FILE_NAMES = ['page.tsx', 'page.jsx', 'page.ts', 'page.js'];
const REDIRECT_SOURCE_TOKEN_PATTERN = /[*():$]/;
const NON_PUBLIC_ROBOTS_DISALLOW = ['/admin/', '/api/', '/dashboard/'];
const {
  ROUTE_POLICY_BUCKETS,
  normalizeRoutePath,
  shouldExcludeFromSitemap,
  getRoutePolicy,
} = routePolicy;

const vercelRedirectSources = new Set(
  (vercelConfig.redirects || [])
    .map((redirect) => redirect.source)
    .filter(
      (source) =>
        typeof source === 'string' &&
        source.startsWith('/') &&
        !REDIRECT_SOURCE_TOKEN_PATTERN.test(source)
    )
    .map((source) => normalizeRoutePath(source))
);

const middlewareRedirectSources = (() => {
  try {
    const middlewarePath = path.join(process.cwd(), 'middleware.ts');
    const middlewareSource = fsSync.readFileSync(middlewarePath, 'utf8');
    return new Set(
      [...middlewareSource.matchAll(/\n\s*'([^']+)':\s*'[^']+'/g)]
        .map((match) => match[1])
        .filter((source) => source.startsWith('/'))
        .map((source) => normalizeRoutePath(source))
    );
  } catch {
    return new Set();
  }
})();

const redirectSourceRoutes = new Set([...vercelRedirectSources, ...middlewareRedirectSources]);

const LUXURY_GONE_410 = (() => {
  try {
    const csvPath = path.join(
      process.cwd(),
      'docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv'
    );
    const lines = fsSync.readFileSync(csvPath, 'utf8').split('\n').slice(1).filter(Boolean);
    const gone = new Set();
    for (const line of lines) {
      const parts = line.split(',');
      const url = parts[0];
      const disposition = parts[3];
      if (disposition === '410' && url) {
        gone.add(normalizeRoutePath(url));
      }
    }
    return gone;
  } catch (err) {
    console.warn('[next-sitemap] Failed to load luxury 410 list:', err.message);
    return new Set();
  }
})();

const LUXURY_REDIRECT_SOURCES = (() => {
  try {
    const csvPath = path.join(
      process.cwd(),
      'docs/superpowers/specs/2026-04-14-luxury-teardown/url-dispositions.csv'
    );
    const lines = fsSync.readFileSync(csvPath, 'utf8').split('\n').slice(1).filter(Boolean);
    const sources = new Set();
    for (const line of lines) {
      const parts = line.split(',');
      const url = parts[0];
      const disposition = parts[3];
      const target = parts[4];
      if (disposition === 'redirect' && target && target.trim() !== '__KEEP__' && url) {
        sources.add(normalizeRoutePath(url));
      }
    }
    return sources;
  } catch (err) {
    console.warn('[next-sitemap] Failed to load luxury redirect list:', err.message);
    return new Set();
  }
})();

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Walk app/<subdir>/ recursively and collect every directory that contains a page.tsx/jsx/ts/js.
// Skips App Router route groups (parens), private folders (underscore), and dynamic segments (brackets).
function enumerateStaticRoutes(subdir) {
  const rootDir = path.join(APP_DIR, subdir);
  if (!fsSync.existsSync(rootDir)) return [];

  const routes = [];
  const walk = (dir, segments) => {
    let entries;
    try {
      entries = fsSync.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    const hasPage = entries.some(
      (e) => !e.isDirectory() && /^page\.(tsx|jsx|ts|js)$/.test(e.name)
    );
    if (hasPage && segments.length > 0) {
      routes.push('/' + segments.join('/'));
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (name.startsWith('(') || name.startsWith('_') || name.startsWith('[') || name.startsWith('.')) {
        continue;
      }
      walk(path.join(dir, name), [...segments, name]);
    }
  };
  walk(rootDir, [subdir]);
  return routes;
}

// Parse lib/all-blog-posts.ts for slug → date mapping so /blog/* entries emit
// accurate lastmod based on the post's publish date rather than file mtime.
const BLOG_POST_DATES = (() => {
  try {
    const content = fsSync.readFileSync(
      path.join(process.cwd(), 'lib', 'all-blog-posts.ts'),
      'utf8'
    );
    const map = {};
    const re = /slug:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'/g;
    let match;
    while ((match = re.exec(content)) !== null) {
      map[match[1]] = match[2];
    }
    return map;
  } catch (err) {
    console.warn('[next-sitemap] Failed to load blog post dates:', err.message);
    return {};
  }
})();

function normalizeDateToIso(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function getExplicitPageLastMod(filePath) {
  try {
    const content = fsSync.readFileSync(filePath, 'utf8');
    const patterns = [
      /\bdateModified:\s*['"]([^'"]+)['"]/,
      /"dateModified"\s*:\s*"([^"]+)"/,
      /\bmodifiedTime:\s*['"]([^'"]+)['"]/,
      /"modifiedTime"\s*:\s*"([^"]+)"/,
    ];

    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (!match?.[1]) continue;
      const normalized = normalizeDateToIso(match[1]);
      if (normalized) return normalized;
    }
  } catch {
    return null;
  }

  return null;
}

function resolveAppRouteDir(routePath) {
  if (routePath === '/') {
    return APP_DIR;
  }

  const segments = routePath.replace(/^\//, '').replace(/\/$/, '').split('/').filter(Boolean);
  let currentDir = APP_DIR;

  for (const segment of segments) {
    const literalDir = path.join(currentDir, segment);
    if (fsSync.existsSync(literalDir) && fsSync.statSync(literalDir).isDirectory()) {
      currentDir = literalDir;
      continue;
    }

    let entries;
    try {
      entries = fsSync.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return null;
    }

    const dynamicSegment = entries
      .filter((entry) => entry.isDirectory() && /^\[[^.[\]]+\]$/.test(entry.name))
      .map((entry) => entry.name)
      .sort()[0];

    if (!dynamicSegment) {
      return null;
    }

    currentDir = path.join(currentDir, dynamicSegment);
  }

  return currentDir;
}

function getRoutePageFileCandidates(routePath) {
  const routeDir = resolveAppRouteDir(routePath);
  if (!routeDir) {
    return [];
  }

  return PAGE_FILE_NAMES.map((fileName) => path.join(routeDir, fileName));
}

async function getLastModForRoute(routePath) {
  // Prefer the explicit publish date from lib/all-blog-posts.ts for blog posts —
  // this produces a stable freshness signal that doesn't drift with unrelated file touches.
  const blogMatch = routePath.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch && BLOG_POST_DATES[blogMatch[1]]) {
    return new Date(BLOG_POST_DATES[blogMatch[1]]).toISOString();
  }
  const candidates = getRoutePageFileCandidates(routePath);

  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      const explicitLastMod = getExplicitPageLastMod(candidate);
      if (explicitLastMod) return explicitLastMod;

      const stats = await fs.stat(candidate);
      return stats.mtime.toISOString();
    }
  }

  return BUILD_ISO;
}

async function routeHasPageFile(routePath) {
  const candidates = getRoutePageFileCandidates(routePath);

  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      return true;
    }
  }

  return false;
}

// Sitemap exclude patterns. Mirrored for auto-discovered routes (additionalPaths)
// via isExcludedByList() so the same path-level blocklist applies to both
// next-sitemap's built-in discovery and our filesystem-walked enumerations.
const SITEMAP_EXCLUDES = [
  '/admin/*',
    '/api/*',
    '/dashboard/*',
    '/areas/costa-mesa-mortgage-rates',
    '/areas/irvine-neighborhoods/cypress-village-mortgage-broker',
    '/areas/irvine-neighborhoods/turtle-rock-mortgage-broker',
    '/areas/irvine-neighborhoods/university-park-mortgage-broker',
    '/blog/hermosa-beach-mortgage-guide-2026',
    '/blog/home-equity-bellevue-wa-2026',
    '/blog/home-equity-laguna-beach-2026',
    '/blog/home-equity-mercer-island-2026',
    '/blog/home-equity-newport-beach-2026',
    '/blog/lake-forest-mortgage-guide-2026',
    '/blog/dscr-loans-investment-properties-2026',
    '/blog/non-qm-loans-orange-county-guide-2026',
    '/blog/reverse-mortgage-requirements-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors',
    '/blog/san-juan-capistrano-mortgage-guide-2026',
    '/blog/tustin-mortgage-guide-2026',
    '/blog/villa-park-mortgage-guide-2026',
    '/blog/wholesale-mortgage-broker-92625',
    '/blog/wholesale-mortgage-broker-92651',
    '/blog/wholesale-mortgage-broker-92657',
    '/blog/wholesale-mortgage-broker-92660',
    '/blog/wholesale-mortgage-broker-92661',
    '/blog/wholesale-mortgage-broker-92662',
    '/blog/wholesale-mortgage-broker-92663',
    '/blog/wholesale-mortgage-broker-926*',
    '/zip-codes/92625-corona-del-mar-mortgage-broker',
    '/tools/mortgage-calculator',
    '/resources/mortgage-glossary',
    '/_not-found',
    // Feb 2026 GSC remediation – redirect sources
    '/blog/how-does-heloc-work-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors-2026',
    '/blog/reverse-mortgage-irvine-ca-2026',
    '/blog/reverse-mortgage-mission-viejo-ca-2026',
    '/blog/reverse-mortgage-la-jolla-ca-2026',
    '/blog/wholesale-mortgage-broker-92672',
    '/blog/wholesale-mortgage-broker-92662',
    // Exclude redirect source URLs (these 301 to -2026 versions)
    '/blog/200-lender-advantage',
    '/blog/bank-statement-loans-wholesale',
    '/blog/cash-out-refinance-how-it-works',
    '/blog/how-does-heloc-work',
    '/blog/heloc-vs-home-equity-loan',
    '/blog/mortgage-broker-vs-bank',
    '/blog/non-qm-loans-wholesale-broker',
    '/blog/self-employed-mortgage-broker',
    '/blog/what-is-reverse-mortgage',
    '/blog/wholesale-mortgage-broker-orange-county',
    '/blog/wholesale-mortgage-broker-anaheim',
    '/blog/wholesale-mortgage-broker-costa-mesa',
    '/blog/wholesale-mortgage-broker-yorba-linda',
    '/blog/wholesale-mortgage-broker-92603',
    '/blog/wholesale-vs-retail-mortgage',
    '/articles',
    '/articles/*',
    // GSC 404 remediation – these routes 301-redirect, not 200
    '/orange-county-fha-loans',
    '/orange-county-jumbo-loans',
    '/orange-county-conventional-loans',
    '/quiz',
    '/admin',
    // Noindexed thin city pages (Phase 3 cleanup)
    '/areas/dana-point-mortgage-broker',
    '/areas/laguna-niguel-mortgage-broker',
    '/areas/yorba-linda-mortgage-broker',
    '/areas/laguna-beach-mortgage-broker',
    '/areas/laguna-woods-mortgage-broker',
    '/areas/fountain-valley-mortgage-broker',
    '/areas/garden-grove-mortgage-broker',
    '/areas/orange-mortgage-broker',
    '/areas/westminster-mortgage-broker',
    '/areas/fullerton-mortgage-broker',
    '/areas/laguna-niguel-mortgage-rates',
    '/areas/yorba-linda-mortgage-rates',
    '/areas/fountain-valley-mortgage-rates',
    '/areas/garden-grove-mortgage-rates',
    '/areas/santa-ana-refinance-rates',
    // CTR-pruned zero-click pages (2026-03-27)
    '/blog/asset-depletion-loans-guide-2026',
    '/blog/reverse-mortgage-calculator-2026',
    '/blog/when-not-to-get-reverse-mortgage-2026',
    '/blog/equity-extraction-risks-2026',
    '/blog/irvine-mortgage-guide-2026',
    '/guides/fha-loans-orange-county-complete-guide',
    '/guides/mortgage-broker-vs-bank-complete-comparison',
    // Cannibalization cluster losers – 301-redirected (2026-03-26)
    '/blog/mortgage-broker-vs-bank-2026',
    '/blog/dscr-loan-california-requirements-complete-2026',
    '/blog/dscr-loan-requirements-2026',
    '/blog/cash-out-refinance-seasoning-requirements-2026',
    '/blog/wholesale-vs-retail-mortgage-complete-2026',
    '/blog/how-to-get-wholesale-mortgage-rates-2026',
    '/blog/how-mortgage-brokers-get-paid-2026',
    '/blog/reverse-mortgage-surviving-spouse-rights-2026',
    '/blog/reverse-mortgage-couples-age-gap-younger-spouse-2026',
    '/blog/reverse-mortgage-after-bankruptcy-qualification-2026',
    '/blog/reverse-mortgage-social-security-medicare-2026',
    '/blog/refinance-after-late-payments-credit-2026',
    '/blog/home-equity-tax-deduction-2026',
];

// Honor SITEMAP_EXCLUDES when filtering auto-enumerated routes in additionalPaths.
// Supports literal paths and trailing-wildcard globs ('/articles/*', '/blog/wholesale-mortgage-broker-926*').
function isExcludedByList(routePath) {
  for (const pattern of SITEMAP_EXCLUDES) {
    if (pattern === routePath) return true;
    if (pattern.endsWith('/*')) {
      const prefix = pattern.slice(0, -2);
      if (routePath === prefix || routePath.startsWith(prefix + '/')) return true;
    } else if (pattern.endsWith('*')) {
      const prefix = pattern.slice(0, -1);
      if (routePath.startsWith(prefix)) return true;
    }
  }
  return false;
}

module.exports = {
  siteUrl: 'https://www.mothebroker.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Next.js 15 App Router only - no pages directory
  outDir: 'public',
  exclude: SITEMAP_EXCLUDES,
  robotsTxtOptions: {
    policies: [
      // ===========================================
      // CORE SEARCH INDEXING AND DISCOVERY
      // ===========================================
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/'
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/'
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'msnbot',
        allow: '/'
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/'
      },
      {
        userAgent: 'Applebot',
        allow: '/'
      },
      // ===========================================
      // AI SEARCH, ANSWER CITATION, AND RETRIEVAL INDEXES
      // These are separate from model-training crawlers.
      // ===========================================
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'MistralAI-Index',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Amzn-SearchBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      // ===========================================
      // USER-TRIGGERED RETRIEVAL
      // These support user-requested answers and are not training crawlers.
      // ===========================================
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'MistralAI-User',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Amzn-User',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      // ===========================================
      // MODEL TRAINING OR BROAD DATA CRAWLERS
      // Preserves the existing owner policy. Change only by owner decision.
      // ===========================================
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'Google-Extended',
        allow: '/'
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/'
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/'
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/'
      },
      {
        userAgent: 'cohere-ai',
        allow: '/'
      },
      { userAgent: 'CCBot', allow: '/' },
      // Additional preview and answer-engine crawlers. Meta entries remain
      // unchanged pending official source verification.
      { userAgent: 'Meta-ExternalAgent', allow: '/' },    // Meta AI / WhatsApp previews
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },  // Meta AI fetcher
      { userAgent: 'Amazonbot', allow: '/' },              // Alexa / Rufus
      { userAgent: 'YouBot', allow: '/' },                 // You.com
      { userAgent: 'FacebookBot', allow: '/' },            // FB/IG/WhatsApp link previews
      // ===========================================
      // INDEXNOW PARTNERS - Allow (Yandex, Seznam)
      // ===========================================
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      },
      {
        userAgent: 'SeznamBot',
        allow: '/'
      },
      // ===========================================
      // LOW-VALUE SCRAPERS - Block
      // ===========================================
      // Non-search image/dataset harvesters that don't drive traffic or AEO
      { userAgent: 'img2dataset', disallow: '/' },
      { userAgent: 'Omgilibot', disallow: '/' },
      // ===========================================
      // BLOCK CHINESE SEARCH ENGINES (low value traffic)
      // ===========================================
      { userAgent: 'Baiduspider', disallow: '/' },
      { userAgent: 'Baiduspider-image', disallow: '/' },
      { userAgent: 'Baiduspider-video', disallow: '/' },
      { userAgent: 'Baiduspider-news', disallow: '/' },
      { userAgent: 'Sogou web spider', disallow: '/' },
      { userAgent: 'Sogou inst spider', disallow: '/' },
      { userAgent: 'Sogou spider2', disallow: '/' },
      { userAgent: 'Sogou blog', disallow: '/' },
      { userAgent: 'Sogou News Spider', disallow: '/' },
      { userAgent: 'Sogou Orion spider', disallow: '/' },
      { userAgent: '360Spider', disallow: '/' },
      { userAgent: 'HaoSouSpider', disallow: '/' },
      { userAgent: 'YisouSpider', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // ===========================================
      // DEFAULT - Allow all others
      // ===========================================
      {
        userAgent: '*',
        allow: '/',
        disallow: NON_PUBLIC_ROBOTS_DISALLOW
      }
    ],
    additionalSitemaps: [
      'https://www.mothebroker.com/sitemap-images.xml'
    ]
  },
  transform: async (config, routePath) => {
    const normalizedRoutePath = normalizeRoutePath(routePath);
    const policy = getRoutePolicy(normalizedRoutePath);

    if (
      redirectSourceRoutes.has(normalizedRoutePath) ||
      policy.indexingBucket === ROUTE_POLICY_BUCKETS.REDIRECT
    ) {
      return null;
    }
    if (LUXURY_GONE_410.has(normalizedRoutePath)) return null;
    if (LUXURY_REDIRECT_SOURCES.has(normalizedRoutePath)) return null;

    if (shouldExcludeFromSitemap(normalizedRoutePath)) {
      return null;
    }

    // Custom priority and change frequency based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    // Home page - highest priority
    if (routePath === '/' || routePath === '') {
      priority = 1.0;
      changefreq = 'daily';
    }

    // Main loan program pages - high priority
    else if (routePath.startsWith('/loan-programs/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // City/area pages - high priority for local SEO
    else if (routePath.startsWith('/areas/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // Guides and resources - high priority content
    else if (routePath.startsWith('/guides/') || routePath.startsWith('/resources/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    // Legal/policy pages - important brand content
    else if (routePath === '/privacy-policy' || routePath === '/terms-of-service') {
      priority = 0.6;
      changefreq = 'monthly';
    }

    // Tools/calculators - medium-high priority
    else if (routePath.startsWith('/calculator') || routePath.startsWith('/tools/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Contact and about pages - important
    else if (routePath === '/contact' || routePath === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Neighborhood guides and luxury markets
    else if (routePath.startsWith('/neighborhood-guide/') || routePath.startsWith('/luxury-markets/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    // Zip code pages - lower priority
    else if (routePath.startsWith('/zip-codes/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    // City-specific loan program pages (e.g., fha-loans-irvine)
    else if (routePath.includes('-irvine') || routePath.includes('orange-county')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    const lastmod = await getLastModForRoute(routePath);

    return {
      loc: routePath,
      changefreq,
      priority,
      lastmod,
      alternateRefs: []
    };
  },

  // Seed the sitemap with every indexable static route. Hardcoded anchors
  // cover the trunk (home, loan-programs hub, legacy landing pages, legal).
  // Blog posts and /areas/* are auto-enumerated from the filesystem so new
  // content surfaces without touching this file — policy filtering in
  // lib/seo-route-policy.js handles exclusions (redirects, noindex clusters,
  // thin-overlap patterns, wholesale-\d{5} programmatic noise, etc.).
  additionalPaths: async (_config) => {
    const STATIC_ANCHORS = [
      // Home
      '/',
      '/about',
      '/contact',
      '/calculator',
      '/tools',
      '/tools/property-tax-estimator/ca/orange-county',

      // Loan programs (hub + all products)
      '/loan-programs',
      '/loan-programs/conventional-loans',
      '/loan-programs/fha-loans',
      '/loan-programs/va-refinance',
      '/loan-programs/jumbo-loans',
      '/loan-programs/heloc',
      '/loan-programs/heloan',
      '/loan-programs/non-qm-loans',
      '/loan-programs/bank-statement-loans',
      '/loan-programs/dscr-investment-loans',
      '/loan-programs/asset-depletion-loans',
      '/loan-programs/usda-rural-loans',
      '/loan-programs/fix-flip-loans',
      '/loan-programs/profit-loss-statement-loans',

      // Content / product landing pages
      '/purchase-loans',
      '/refinance-loans',
      '/luxury-markets',
      '/home-equity-guide',
      '/self-employed-home-loans-california',

      // Legacy SEO landing pages (city × product)
      '/fha-loans-orange-county',
      '/va-loans-orange-county',
      '/conventional-loans-orange-county',
      '/heloc-orange-county',
      '/heloan-orange-county',
      '/non-qm-loans-orange-county',
      '/rate-term-refinance-orange-county',
      '/jumbo-loans-orange-county',

      // Resources hub
      '/resources',
      '/resources/glossary',
      '/resources/document-checklist',
      '/resources/service-providers',
      '/resources/market-data',
      '/resources/comprehensive-mortgage-faq',
      '/resources/down-payment-assistance',
      '/resources/credit-repair',

      // Legal
      '/privacy-policy',
      '/terms-of-service',
    ];

    // Auto-discover blog posts and /areas/* pages from the App Router tree.
    const autoDiscovered = [
      ...enumerateStaticRoutes('blog'),
      ...enumerateStaticRoutes('areas'),
      ...enumerateStaticRoutes('guides'),
      ...enumerateStaticRoutes('resources'),
      ...enumerateStaticRoutes('tools'),
      ...enumerateStaticRoutes('calculator'),
      ...enumerateStaticRoutes('loan-programs'),
      ...enumerateStaticRoutes('neighborhood-guide'),
      ...enumerateStaticRoutes('wholesale-mortgage-broker-california'),
    ];

    // Dedupe + keep only routes whose page file exists AND whose policy permits indexing.
    const seen = new Set();
    const candidates = [];
    for (const routePath of [...STATIC_ANCHORS, ...autoDiscovered]) {
      if (seen.has(routePath)) continue;
      seen.add(routePath);
      const normalized = normalizeRoutePath(routePath);
      if (!(await routeHasPageFile(routePath))) continue;
      if (isExcludedByList(normalized)) continue;
      if (shouldExcludeFromSitemap(normalized)) continue;
      if (redirectSourceRoutes.has(normalized)) continue;
      if (LUXURY_GONE_410.has(normalized)) continue;
      if (LUXURY_REDIRECT_SOURCES.has(normalized)) continue;
      const policy = getRoutePolicy(normalized);
      if (policy.indexingBucket === ROUTE_POLICY_BUCKETS.REDIRECT) continue;
      if (policy.indexingBucket === ROUTE_POLICY_BUCKETS.NOINDEX) continue;
      candidates.push(routePath);
    }

    // Priority/changefreq match the transform() buckets so auto-discovered
    // routes get the same signals as crawled routes.
    const priorityFor = (routePath) => {
      if (routePath === '/') return { priority: 1.0, changefreq: 'daily' };
      if (routePath.startsWith('/loan-programs/')) return { priority: 0.9, changefreq: 'weekly' };
      if (routePath === '/loan-programs') return { priority: 0.9, changefreq: 'weekly' };
      if (routePath.startsWith('/areas/')) return { priority: 0.8, changefreq: 'weekly' };
      if (routePath.startsWith('/blog/')) return { priority: 0.7, changefreq: 'weekly' };
      if (routePath.startsWith('/guides/') || routePath.startsWith('/resources/')) {
        return { priority: 0.8, changefreq: 'weekly' };
      }
      if (routePath === '/privacy-policy' || routePath === '/terms-of-service') {
        return { priority: 0.3, changefreq: 'yearly' };
      }
      if (routePath.includes('orange-county')) return { priority: 0.7, changefreq: 'monthly' };
      return { priority: 0.6, changefreq: 'monthly' };
    };

    const entries = await Promise.all(
      candidates.map(async (routePath) => {
        const { priority, changefreq } = priorityFor(routePath);
        return {
          loc: routePath,
          changefreq,
          priority,
          lastmod: await getLastModForRoute(routePath),
        };
      })
    );

    return entries;
  }
};
