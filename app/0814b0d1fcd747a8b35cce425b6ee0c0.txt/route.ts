import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('0814b0d1fcd747a8b35cce425b6ee0c0', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
