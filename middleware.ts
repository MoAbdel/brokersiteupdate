import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOW_EQUITY_BLOG_PATTERNS: RegExp[] = [
  /^\/blog\/wholesale-mortgage-broker-\d{5}(?:-[a-z0-9-]+)?$/i,
  /^\/blog\/wholesale-mortgage-\d{5}-[a-z0-9-]+$/i,
];

const THIN_OVERLAP_ROUTE_PATTERNS: RegExp[] = [
  /^\/areas\/[a-z0-9-]+-mortgage-rates$/i,
  /^\/areas\/[a-z0-9-]+-refinance-rates$/i,
];

function shouldNoindexPath(pathname: string): boolean {
  if (LOW_EQUITY_BLOG_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return true;
  }

  if (THIN_OVERLAP_ROUTE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';

  if (!host.includes('localhost') && host === 'mothebroker.com') {
    const redirectUrl = new URL(`https://www.mothebroker.com${pathname}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Canonicalize duplicate blog variants to their 2026 versions.
  // (Avoids split indexing / duplicate content.)
  const blogRedirects: Record<string, string> = {
    '/blog/bank-statement-loans-wholesale': '/blog/bank-statement-loans-wholesale-2026',
    '/blog/cash-out-refinance-how-it-works': '/blog/cash-out-refinance-how-it-works-2026',
    '/blog/how-does-heloc-work': '/loan-programs/heloc',
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
  };

  // Catch-all for legacy /articles/* URLs not explicitly mapped above.
  if (pathname.startsWith('/articles/')) {
    const redirectUrl = new URL(`https://www.mothebroker.com/blog${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  const redirectTarget = blogRedirects[pathname] || pageRedirects[pathname];
  if (redirectTarget) {
    const redirectUrl = new URL(`https://www.mothebroker.com${redirectTarget}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  const response = NextResponse.next();
  if (shouldNoindexPath(pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - .txt files (IndexNow keys, verification files)
     */
    '/((?!api|_next/static|_next/image|.*\\.txt$).*)',
  ],
};
