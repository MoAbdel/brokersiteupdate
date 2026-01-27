import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';

  if (!host.includes('localhost') && host === 'mothebroker.com') {
    const redirectUrl = new URL(`https://www.mothebroker.com${pathname}${search}`);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Check if we need to redirect old URLs or handle specific logic
  // For now, allow all traffic to flow to the simplified site structure
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!api|_next/static|_next/image).*)',
  ],
};
