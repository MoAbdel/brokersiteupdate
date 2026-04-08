const ROUTE_POLICY_BUCKETS = {
  INDEXABLE: 'indexable',
  NOINDEX: 'noindex',
  REDIRECT: 'redirect',
  SITEMAP_EXCLUDE: 'sitemap-exclude',
};

const STATIC_REDIRECT_ROUTES = {
  '/heloc-specialist-orange-county': '/heloc-orange-county',
};

const LOW_EQUITY_BLOG_PATTERNS = [
  /^\/blog\/wholesale-mortgage-broker-\d{5}(?:-[a-z0-9-]+)?$/i,
  /^\/blog\/wholesale-mortgage-\d{5}-[a-z0-9-]+$/i,
];

const STRATEGIC_BLOG_ALLOWLIST = new Set([
  '/blog/home-equity-california-guide-2026',
  '/blog/home-equity-washington-guide-2026',
  '/blog/strategic-refinancing-home-equity-2026',
  '/blog/heloan-vs-cash-out-refinance-2026',
  '/blog/heloc-vs-cash-out-refinance-2026',
  '/blog/home-equity-loan-fixed-rate-2026',
  '/blog/home-equity-for-renovations-2026',
  '/blog/home-equity-refinancing-guide-2026',
  '/blog/what-can-you-use-home-equity-for-2026',
  '/blog/hecm-vs-heloc-seniors-2026',
  '/blog/hecm-for-purchase-2026',
  '/blog/proprietary-reverse-mortgage-2026',
  '/blog/reverse-mortgage-complete-guide-2026',
  '/blog/reverse-mortgage-california-guide-2026',
  '/blog/reverse-mortgage-washington-guide-2026',
  '/blog/what-is-reverse-mortgage-complete-guide-2026',
  '/blog/reverse-mortgage-requirements-complete-2026',
  '/blog/reverse-mortgage-payout-options-2026',
  '/blog/reverse-mortgage-myths-debunked-2026',
  '/blog/reverse-mortgage-inheritance-heirs-2026',
  '/blog/wholesale-vs-retail-mortgage-brokers-2026',
  '/blog/wholesale-mortgage-broker-orange-county-2026',
  '/blog/wholesale-mortgage-broker-california-2026',
  '/blog/wholesale-mortgage-broker-washington-2026',
  '/blog/wholesale-mortgage-broker-california-guide-2026',
  '/blog/wholesale-mortgage-broker-california-pillar-2026',
  '/blog/wholesale-mortgage-broker-north-orange-county-2026',
  '/blog/wholesale-mortgage-broker-central-orange-county-2026',
  '/blog/wholesale-mortgage-broker-south-orange-county-2026',
]);

const PROGRAMMATIC_FAMILY_PATTERN =
  /^\/blog\/(?:reverse-mortgage|home-equity|wholesale-mortgage-broker)-[a-z0-9-]+-2026$/i;

const THIN_OVERLAP_ROUTE_PATTERNS = [
  /^\/areas\/[a-z0-9-]+-mortgage-rates$/i,
  /^\/areas\/[a-z0-9-]+-refinance-rates$/i,
];

const NON_CONTENT_PATH_PATTERNS = [
  /\/opengraph-image$/i,
  /^\/robots\.txt$/i,
  /^\/sitemap(?:-[a-z0-9-]+)?\.xml$/i,
  /^\/manifest\.json$/i,
  /^\/.*\.vcf$/i,
  /^\/llms(?:-full)?\.txt$/i,
];

const LOW_YIELD_TOOL_FAMILIES = new Set([
  'bank-statement-loan-estimator',
  'cash-out-limit-calculator',
  'dscr-qualification-calculator',
  'dscr-rent-analyzer',
  'equity-comparison-calculator',
  'max-heloc-calculator',
]);

const PROPERTY_TAX_TOOL_FAMILY = 'property-tax-estimator';

function normalizeRoutePath(routePath) {
  if (!routePath || routePath === '/') {
    return '/';
  }

  const withoutQuery = routePath.split('?')[0];
  return withoutQuery.endsWith('/') ? withoutQuery.slice(0, -1) : withoutQuery;
}

function getToolRouteContext(routePath) {
  const match = normalizeRoutePath(routePath).match(/^\/tools\/([^/]+)(?:\/([^/]+))?(?:\/([^/]+))?(?:\/([^/]+))?$/i);

  if (!match) {
    return null;
  }

  const [, family, state, county, city] = match;
  const depth = [state, county, city].filter(Boolean).length;

  return {
    family,
    depth,
    state,
    county,
    city,
  };
}

function isLowEquityBlogRoute(routePath) {
  const normalizedRoutePath = normalizeRoutePath(routePath);

  if (LOW_EQUITY_BLOG_PATTERNS.some((pattern) => pattern.test(normalizedRoutePath))) {
    return true;
  }

  return (
    PROGRAMMATIC_FAMILY_PATTERN.test(normalizedRoutePath) &&
    !STRATEGIC_BLOG_ALLOWLIST.has(normalizedRoutePath)
  );
}

function isThinOverlapRoute(routePath) {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  return THIN_OVERLAP_ROUTE_PATTERNS.some((pattern) => pattern.test(normalizedRoutePath));
}

function isNonContentRoute(routePath) {
  const normalizedRoutePath = normalizeRoutePath(routePath);
  return (
    normalizedRoutePath === '/cookie-policy' ||
    NON_CONTENT_PATH_PATTERNS.some((pattern) => pattern.test(normalizedRoutePath))
  );
}

function getToolRobotsDirective(routePath) {
  const toolRoute = getToolRouteContext(routePath);

  if (!toolRoute) {
    return null;
  }

  if (LOW_YIELD_TOOL_FAMILIES.has(toolRoute.family) && toolRoute.depth >= 1) {
    return 'noindex, follow';
  }

  if (toolRoute.family === PROPERTY_TAX_TOOL_FAMILY && toolRoute.depth >= 2) {
    return 'noindex, follow';
  }

  return null;
}

function getRoutePolicy(routePath, search = '') {
  const normalizedPathname = normalizeRoutePath(routePath);
  const searchText = typeof search === 'string' ? search : '';
  const redirectTarget = STATIC_REDIRECT_ROUTES[normalizedPathname] || null;

  if (redirectTarget) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.REDIRECT,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: null,
      redirectTarget,
      reasons: ['strategic-redirect'],
    };
  }

  if (normalizedPathname === '/guides' && searchText.length > 0) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.NOINDEX,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: 'noindex, nofollow',
      redirectTarget: null,
      reasons: ['query-variant'],
    };
  }

  if (isNonContentRoute(normalizedPathname)) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.NOINDEX,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: 'noindex, nofollow',
      redirectTarget: null,
      reasons: ['non-content'],
    };
  }

  if (isLowEquityBlogRoute(normalizedPathname)) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.NOINDEX,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: 'noindex, nofollow',
      redirectTarget: null,
      reasons: ['low-equity-blog'],
    };
  }

  if (isThinOverlapRoute(normalizedPathname)) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.NOINDEX,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: 'noindex, nofollow',
      redirectTarget: null,
      reasons: ['thin-overlap-route'],
    };
  }

  const toolRobotsDirective = getToolRobotsDirective(normalizedPathname);
  if (toolRobotsDirective) {
    return {
      normalizedPathname,
      indexingBucket: ROUTE_POLICY_BUCKETS.NOINDEX,
      sitemapBucket: ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE,
      robotsDirective: toolRobotsDirective,
      redirectTarget: null,
      reasons: ['localized-tool-route'],
    };
  }

  return {
    normalizedPathname,
    indexingBucket: ROUTE_POLICY_BUCKETS.INDEXABLE,
    sitemapBucket: ROUTE_POLICY_BUCKETS.INDEXABLE,
    robotsDirective: null,
    redirectTarget: null,
    reasons: ['indexable'],
  };
}

function shouldExcludeFromSitemap(routePath, search = '') {
  return getRoutePolicy(routePath, search).sitemapBucket === ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE;
}

function getRobotsDirective(routePath, search = '') {
  return getRoutePolicy(routePath, search).robotsDirective;
}

function getRedirectTarget(routePath) {
  return getRoutePolicy(routePath).redirectTarget;
}

const routePolicy = {
  ROUTE_POLICY_BUCKETS,
  STATIC_REDIRECT_ROUTES,
  normalizeRoutePath,
  getRoutePolicy,
  getRedirectTarget,
  getRobotsDirective,
  shouldExcludeFromSitemap,
};

module.exports = routePolicy;
module.exports.default = routePolicy;
