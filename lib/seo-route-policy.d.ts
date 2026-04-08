export const ROUTE_POLICY_BUCKETS: {
  readonly INDEXABLE: 'indexable';
  readonly NOINDEX: 'noindex';
  readonly REDIRECT: 'redirect';
  readonly SITEMAP_EXCLUDE: 'sitemap-exclude';
};

export const STATIC_REDIRECT_ROUTES: Record<string, string>;

export type RoutePolicy = {
  normalizedPathname: string;
  indexingBucket: 'indexable' | 'noindex' | 'redirect';
  sitemapBucket: 'indexable' | 'sitemap-exclude';
  robotsDirective: string | null;
  redirectTarget: string | null;
  reasons: string[];
};

export function normalizeRoutePath(routePath: string): string;
export function getRoutePolicy(routePath: string, search?: string): RoutePolicy;
export function getRedirectTarget(routePath: string): string | null;
export function getRobotsDirective(routePath: string, search?: string): string | null;
export function shouldExcludeFromSitemap(routePath: string, search?: string): boolean;

declare const _default: {
  ROUTE_POLICY_BUCKETS: typeof ROUTE_POLICY_BUCKETS;
  STATIC_REDIRECT_ROUTES: typeof STATIC_REDIRECT_ROUTES;
  normalizeRoutePath: typeof normalizeRoutePath;
  getRoutePolicy: typeof getRoutePolicy;
  getRedirectTarget: typeof getRedirectTarget;
  getRobotsDirective: typeof getRobotsDirective;
  shouldExcludeFromSitemap: typeof shouldExcludeFromSitemap;
};

export default _default;
