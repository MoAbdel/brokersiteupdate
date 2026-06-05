import { test } from 'node:test';
import assert from 'node:assert/strict';
import routePolicy from '../../lib/seo-route-policy.js';

const ORANGE_COUNTY_PROPERTY_TAX_PATH = '/tools/property-tax-estimator/ca/orange-county';

test('Orange County property tax estimator is explicitly indexable', () => {
  const policy = routePolicy.getRoutePolicy(ORANGE_COUNTY_PROPERTY_TAX_PATH);

  assert.equal(policy.indexingBucket, routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE);
  assert.equal(policy.sitemapBucket, routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE);
  assert.equal(policy.robotsDirective, null);
  assert.equal(routePolicy.getRobotsDirective(ORANGE_COUNTY_PROPERTY_TAX_PATH), null);
  assert.equal(routePolicy.shouldExcludeFromSitemap(ORANGE_COUNTY_PROPERTY_TAX_PATH), false);
  assert.equal(
    routePolicy.INDEXABLE_LOCALIZED_TOOL_ALLOWLIST.has(ORANGE_COUNTY_PROPERTY_TAX_PATH),
    true
  );
});

test('non-allowlisted localized property tax pages remain noindex', () => {
  const countyPolicy = routePolicy.getRoutePolicy(
    '/tools/property-tax-estimator/ca/los-angeles-county'
  );
  const cityPolicy = routePolicy.getRoutePolicy(
    '/tools/property-tax-estimator/ca/orange-county/irvine'
  );

  assert.equal(countyPolicy.indexingBucket, routePolicy.ROUTE_POLICY_BUCKETS.NOINDEX);
  assert.equal(countyPolicy.sitemapBucket, routePolicy.ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE);
  assert.match(countyPolicy.robotsDirective, /noindex/i);
  assert.equal(
    routePolicy.shouldExcludeFromSitemap('/tools/property-tax-estimator/ca/los-angeles-county'),
    true
  );

  assert.equal(cityPolicy.indexingBucket, routePolicy.ROUTE_POLICY_BUCKETS.NOINDEX);
  assert.equal(cityPolicy.sitemapBucket, routePolicy.ROUTE_POLICY_BUCKETS.SITEMAP_EXCLUDE);
  assert.match(cityPolicy.robotsDirective, /noindex/i);
  assert.equal(
    routePolicy.shouldExcludeFromSitemap('/tools/property-tax-estimator/ca/orange-county/irvine'),
    true
  );
});
