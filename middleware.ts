import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
    '/blog/how-does-heloc-work': '/blog/how-does-heloc-work-2026',
    '/blog/heloc-vs-home-equity-loan': '/blog/heloc-vs-home-equity-loan-2026',
    '/blog/mortgage-broker-vs-bank': '/blog/mortgage-broker-vs-bank-2026',
    '/blog/non-qm-loans-wholesale-broker': '/blog/non-qm-loans-wholesale-broker-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors': '/blog/reverse-mortgage-vs-heloc-seniors-2026',
    '/blog/self-employed-mortgage-broker': '/blog/self-employed-mortgage-broker-2026',
    '/blog/what-is-reverse-mortgage': '/blog/what-is-reverse-mortgage-2026',
    // Older wholesale geo posts -> 2026 versions
    '/blog/wholesale-mortgage-broker-orange-county': '/blog/wholesale-mortgage-broker-orange-county-2026',
    '/blog/wholesale-mortgage-broker-anaheim': '/blog/wholesale-mortgage-broker-anaheim-2026',
    '/blog/wholesale-mortgage-broker-costa-mesa': '/blog/wholesale-mortgage-broker-costa-mesa-2026',
    '/blog/wholesale-mortgage-broker-yorba-linda': '/blog/wholesale-mortgage-broker-yorba-linda-2026',
    // Older wholesale ZIP posts -> 2026 versions
    '/blog/wholesale-mortgage-broker-92603': '/blog/wholesale-mortgage-92603-irvine-turtle-rock-2026',
    '/blog/wholesale-mortgage-broker-92660': '/blog/wholesale-mortgage-92660-newport-harbor-2026',
    '/blog/wholesale-mortgage-broker-92663': '/blog/wholesale-mortgage-92663-newport-peninsula-2026',
    '/blog/wholesale-mortgage-broker-92651': '/blog/wholesale-mortgage-92651-laguna-beach-2026',
    '/blog/wholesale-mortgage-broker-92661': '/blog/wholesale-mortgage-92661-newport-beach-2026',
    '/blog/wholesale-mortgage-broker-92625': '/blog/wholesale-mortgage-92625-corona-del-mar-2026',
    '/blog/wholesale-mortgage-broker-92662': '/blog/wholesale-mortgage-92662-balboa-island-2026',
    '/blog/wholesale-mortgage-broker-92657': '/blog/wholesale-mortgage-92657-newport-coast-2026',
    // Marketing rename (non 1:1 suffix)
    '/blog/200-lender-advantage': '/blog/200-lender-advantage-explained-2026',
    // Keep older heloc comparison canonicalized to the 2026 cluster page
    '/blog/wholesale-vs-retail-mortgage': '/blog/wholesale-vs-retail-mortgage-complete-2026',
  };

  const redirectTarget = blogRedirects[pathname];
  if (redirectTarget) {
    const redirectUrl = new URL(`https://www.mothebroker.com${redirectTarget}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
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
