import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decorateAudienceHeaders, getAudienceContext, isLocalHost } from '@/lib/audience';

const LOW_EQUITY_BLOG_PATTERNS: RegExp[] = [
  /^\/blog\/wholesale-mortgage-broker-\d{5}(?:-[a-z0-9-]+)?$/i,
  /^\/blog\/wholesale-mortgage-\d{5}-[a-z0-9-]+$/i,
];

const THIN_OVERLAP_ROUTE_PATTERNS: RegExp[] = [
  /^\/areas\/[a-z0-9-]+-mortgage-rates$/i,
  /^\/areas\/[a-z0-9-]+-refinance-rates$/i,
];

const LOCALIZED_TOOL_CITY_ROUTE_PATTERN =
  /^\/tools\/(?:bank-statement-loan-estimator|cash-out-limit-calculator|dscr-qualification-calculator|dscr-rent-analyzer|equity-comparison-calculator|max-heloc-calculator|property-tax-estimator)\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/i;

const NON_CONTENT_PATH_PATTERNS: RegExp[] = [
  /\/opengraph-image$/i,
  /^\/robots\.txt$/i,
  /^\/sitemap(?:-[a-z0-9-]+)?\.xml$/i,
  /^\/manifest\.json$/i,
  /^\/.*\.vcf$/i,
  /^\/llms(?:-full)?\.txt$/i,
];

const APPLY_URL = 'https://luminlending-apply-mo-abdel.my1003app.com/register';

function getRobotsDirective(pathname: string, search: string): string | null {
  if (pathname === '/guides' && search.length > 0) {
    return 'noindex, nofollow';
  }

  if (LOW_EQUITY_BLOG_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return 'noindex, nofollow';
  }

  if (THIN_OVERLAP_ROUTE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return 'noindex, nofollow';
  }

  if (NON_CONTENT_PATH_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return 'noindex, nofollow';
  }

  if (LOCALIZED_TOOL_CITY_ROUTE_PATTERN.test(pathname)) {
    return 'noindex, follow';
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';
  const localHost = isLocalHost(host);

  // Canonicalize duplicate blog variants to their 2026 versions.
  // (Avoids split indexing / duplicate content.)
  const blogRedirects: Record<string, string> = {
    '/blog/bank-statement-loans-wholesale': '/blog/bank-statement-loans-wholesale-2026',
    '/blog/cash-out-refinance-how-it-works': '/blog/cash-out-refinance-how-it-works-2026',
    '/blog/investment-property-cash-out-refinance-2026': '/blog/cash-out-refinance-rental-property-investors-2026',
    '/blog/how-does-heloc-work': '/loan-programs/heloc',
    '/blog/heloc-vs-cash-out-refinance-california-homeowners-2026': '/blog/heloc-vs-cash-out-refinance-2026',
    '/blog/heloc-vs-home-equity-loan': '/blog/heloc-vs-home-equity-loan-2026',
    '/blog/mortgage-broker-vs-bank': '/blog/mortgage-broker-vs-bank-2026',
    '/blog/non-qm-loans-wholesale-broker': '/blog/non-qm-loans-wholesale-broker-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors': '/blog/reverse-mortgage-complete-guide-2026',
    '/blog/self-employed-mortgage-broker': '/blog/self-employed-mortgage-broker-2026',
    '/blog/what-is-reverse-mortgage': '/blog/what-is-reverse-mortgage-2026',
    // Older wholesale geo posts -> 2026 versions
    '/blog/wholesale-mortgage-broker-orange-county': '/blog/wholesale-mortgage-broker-orange-county-2026',
    '/blog/wholesale-mortgage-broker-anaheim': '/blog/wholesale-mortgage-broker-anaheim-2026',
    '/blog/wholesale-mortgage-broker-costa-mesa': '/blog/wholesale-mortgage-broker-costa-mesa-2026',
    '/blog/wholesale-mortgage-broker-yorba-linda': '/blog/wholesale-mortgage-broker-yorba-linda-2026',
    // Older wholesale ZIP posts -> 2026 versions
    // Marketing rename (non 1:1 suffix)
    '/blog/200-lender-advantage': '/blog/200-lender-advantage-explained-2026',
    // Keep older heloc comparison canonicalized to the 2026 cluster page
    '/blog/wholesale-vs-retail-mortgage': '/blog/wholesale-vs-retail-mortgage-complete-2026',
    // Pruned low-traffic geo pages -> broader hubs
    '/blog/hermosa-beach-mortgage-guide-2026': '/areas',
    '/blog/lake-forest-mortgage-guide-2026': '/areas',
    '/blog/san-juan-capistrano-mortgage-guide-2026': '/areas',
    '/blog/tustin-mortgage-guide-2026': '/areas',
    '/blog/villa-park-mortgage-guide-2026': '/areas',
    '/blog/home-equity-laguna-beach-2026': '/home-equity-guide',
    '/blog/home-equity-newport-beach-2026': '/home-equity-guide',
    '/blog/va-loans-wholesale-2026': '/blog/va-loans-orange-county-2026',
    '/blog/jumbo-reverse-mortgage-california-2026': '/blog/proprietary-reverse-mortgage-2026',
    // Empty blog dirs (no page.tsx) → proper targets
    '/blog/home-equity-mercer-island-2026': '/blog/home-equity-mercer-island-wa-2026',
    '/blog/home-equity-north-sound-islands-2026': '/blog/home-equity-north-sound-islands-wa-2026',
    '/blog/home-equity-ca-cc-a-2026': '/home-equity-guide',
    '/blog/home-equity-ca-lab-a-2026': '/home-equity-guide',
    '/blog/home-equity-ca-sgv-a-2026': '/blog/home-equity-sgv-pasadena-guide-2026',
    '/blog/wholesale-mortgage-broker-ca-eb-a-2026': '/blog/wholesale-mortgage-broker-bay-area-guide-2026',
    '/blog/wholesale-mortgage-broker-ca-mr-b-2026': '/blog/wholesale-mortgage-broker-california-2026',
    '/blog/wholesale-mortgage-broker-ca-sd-b-2026': '/blog/wholesale-mortgage-broker-san-diego-guide-2026',
    // Orphaned old-slug blog pages → canonical 2026 versions
    '/blog/wholesale-mortgage-broker-california': '/blog/wholesale-mortgage-broker-california-2026',
    '/blog/reverse-mortgages-california-guide': '/blog/reverse-mortgage-complete-guide-2026',
    '/blog/how-to-get-wholesale-mortgage-rates-california': '/blog/how-to-get-wholesale-mortgage-rates-2026',
    '/blog/wholesale-vs-retail-mortgage-brokers-2026': '/blog/wholesale-vs-retail-mortgage-complete-2026',
    '/blog/reverse-mortgage-la-beach-cities-2026': '/blog/reverse-mortgage-la-south-bay-palos-verdes-guide-2026',
    '/blog/reverse-mortgage-california-washington-pillar-2026': '/blog/reverse-mortgage-complete-guide-2026',
    '/blog/wholesale-mortgage-broker-sgv-pasadena-guide-2026': '/blog/wholesale-mortgage-broker-sgv-pasadena-2026',
    '/blog/wholesale-mortgage-broker-la-westside-beach-cities-2026': '/blog/wholesale-mortgage-broker-la-westside-beach-2026',
    '/blog/wholesale-mortgage-broker-la-south-bay-pv-2026': '/blog/wholesale-mortgage-broker-la-south-bay-palos-verdes-2026',
    '/blog/wholesale-vs-retail-mortgage-2026': '/blog/wholesale-vs-retail-mortgage-complete-2026',
    '/blog/reverse-mortgage-sacramento-2026': '/blog/reverse-mortgage-sacramento-guide-2026',
    '/blog/reverse-mortgage-sacramento-metro-guide-2026': '/blog/reverse-mortgage-sacramento-guide-2026',
    '/blog/reverse-mortgage-orange-county-guide-2026': '/blog/reverse-mortgage-california-guide-2026',
    '/blog/reverse-mortgage-la-sgv-guide-2026': '/blog/reverse-mortgage-sgv-pasadena-guide-2026',
    '/blog/reverse-mortgage-la-south-bay-pv-guide-2026': '/blog/reverse-mortgage-la-south-bay-palos-verdes-guide-2026',
    '/blog/reverse-mortgage-central-coast-2026': '/blog/reverse-mortgage-central-coast-guide-2026',
    '/blog/reverse-mortgage-san-diego-coastal-guide-2026': '/blog/reverse-mortgage-coastal-north-sd-2026',
    '/blog/reverse-mortgage-la-south-bay-guide-2026': '/blog/reverse-mortgage-la-south-bay-palos-verdes-guide-2026',
    '/blog/home-equity-la-westside-guide-2026': '/blog/home-equity-la-westside-beach-guide-2026',
    '/blog/home-equity-orange-county-guide-2026': '/home-equity-guide',
    '/blog/home-equity-la-sgv-guide-2026': '/blog/home-equity-sgv-pasadena-guide-2026',
    '/blog/home-equity-la-sgv-pasadena-guide-2026': '/blog/home-equity-sgv-pasadena-guide-2026',
    '/blog/home-equity-la-south-bay-pv-guide-2026': '/blog/home-equity-la-south-bay-palos-verdes-guide-2026',
    '/blog/home-equity-la-south-bay-guide-2026': '/blog/home-equity-la-south-bay-palos-verdes-guide-2026',
    '/blog/home-equity-san-diego-coastal-guide-2026': '/blog/home-equity-san-diego-guide-2026',
    '/blog/home-equity-sacramento-gold-country-guide-2026': '/blog/home-equity-sacramento-guide-2026',
    '/blog/dscr-loans-wholesale-2026': '/blog/dscr-investment-property-loans-2026',
    '/blog/jumbo-loans-wholesale-2026': '/blog/jumbo-loans-orange-county-2026',
    '/blog/refinance-credit-score-requirements-2026': '/blog/refinance-credit-requirements-2026',
  };

  const pageRedirects: Record<string, string> = {
    '/areas/irvine-neighborhoods/cypress-village-mortgage-broker': '/areas/irvine-neighborhoods',
    '/areas/irvine-neighborhoods/turtle-rock-mortgage-broker': '/areas/irvine-neighborhoods',
    '/areas/irvine-neighborhoods/university-park-mortgage-broker': '/areas/irvine-neighborhoods',
    '/areas/costa-mesa-mortgage-rates': '/areas/costa-mesa-mortgage-broker',
    '/zip-codes/92625-corona-del-mar-mortgage-broker': '/areas/newport-beach-mortgage-broker',
    '/resources/mortgage-glossary': '/resources/glossary',

    '/articles': '/blog',
    '/articles/newport-beach-mortgage-guide-2026': '/blog/newport-beach-mortgage-guide-2026',
    '/articles/laguna-beach-jumbo-loan-guide': '/blog/laguna-beach-mortgage-guide-2026',
    '/articles/dana-point-first-time-homebuyer-guide': '/guides/orange-county-home-buyer-guide',
    '/articles/orange-county-mortgage-rate-trends-august-2026': '/blog',
    '/articles/wholesale-vs-retail-mortgages-comparison': '/blog/wholesale-vs-retail-mortgage-complete-2026',
    '/articles/best-mortgage-broker-orange-county': '/about-mo-abdel-orange-county-mortgage-broker',
    '/articles/first-time-homebuyer-mortgage-orange-county': '/guides/orange-county-home-buyer-guide',
    '/articles/orange-county-mortgage-refinance-specialist': '/guides/orange-county-refinancing-guide',
    '/articles/va-loan-mortgage-broker-orange-county': '/va-loans-orange-county',
    '/articles/jumbo-loan-broker-orange-county': '/guides/orange-county-jumbo-loans',
    // Old guides with -2025 dates → 2026 blog/guide equivalents
    '/guides/newport-beach-mortgage-guide-2025': '/blog/newport-beach-mortgage-guide-2026',
    '/guides/laguna-beach-mortgage-guide-2025': '/blog/laguna-beach-mortgage-guide-2026',
    '/guides/first-time-homebuyer-orange-county-2025': '/blog/first-time-homebuyer-guide-orange-county-2026',
    '/guides/fha-loans-orange-county-complete-guide': '/blog/fha-loans-orange-county-2026',
    '/loan-programs/home-equity': '/home-equity-guide',
    '/loan-programs/home-equity-loans': '/loan-programs/heloan',
    '/loan-programs/home-equity-loan': '/loan-programs/heloan',
    '/quick-quote': '/contact',
    '/zip-codes': '/areas',
    '/cities/newport-beach': '/areas/newport-beach-mortgage-broker',
    '/cities/laguna-beach': '/areas/laguna-beach-mortgage-broker',
    '/areas/orange-county-mortgage-broker': '/areas/california',
    '/areas/los-angeles-mortgage-broker': '/blog/wholesale-mortgage-broker-los-angeles-guide-2026',
    '/areas/tustin-mortgage-broker': '/areas',
    '/areas/corona-del-mar-mortgage-broker': '/areas/newport-beach-neighborhoods/corona-del-mar-mortgage-broker',
    '/areas/balboa-island-mortgage-broker': '/areas/newport-beach-neighborhoods/balboa-island-mortgage-broker',
    '/resources/orange-county-mortgage-glossary': '/resources/glossary',
    '/Orange': '/areas/orange-mortgage-broker',
  };

  const familyRedirects: Record<string, string> = {
    '/loans/jumbo': '/loan-programs/jumbo-loans',
    '/loans/conventional': '/loan-programs/conventional-loans',
    '/loans/fha': '/loan-programs/fha-loans',
    '/loans/va': '/loan-programs/orange-county-va-loans',
    '/loans/bank-statement': '/loan-programs/bank-statement-loans',
  };

  const redirectTarget = blogRedirects[pathname] || pageRedirects[pathname] || familyRedirects[pathname];
  if (redirectTarget) {
    const redirectUrl = new URL(`https://www.mothebroker.com${redirectTarget}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  if (pathname === '/apply') {
    return NextResponse.redirect(APPLY_URL, 301);
  }

  // Catch-all for legacy /articles/* URLs not explicitly mapped above.
  if (pathname.startsWith('/articles/')) {
    const redirectUrl = new URL(`https://www.mothebroker.com/blog${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  if (!localHost && host === 'mothebroker.com') {
    const redirectUrl = new URL(`https://www.mothebroker.com${pathname}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  const requestHeaders = decorateAudienceHeaders(request.headers);
  const audience = getAudienceContext(requestHeaders);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-audience-country', audience.countryCode ?? '');
  response.headers.set('x-audience-us-eligible', audience.isUsEligible ? '1' : '0');
  response.headers.set('Vary', 'x-vercel-ip-country, cf-ipcountry');

  const robotsDirective = getRobotsDirective(pathname, search);
  if (robotsDirective) {
    response.headers.set('X-Robots-Tag', robotsDirective);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!_next/static|_next/image).*)',
  ],
};
