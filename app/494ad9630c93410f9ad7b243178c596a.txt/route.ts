import { NextResponse } from 'next/server';

// IndexNow verification key file
export async function GET() {
  return new NextResponse('494ad9630c93410f9ad7b243178c596a', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

