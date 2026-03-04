import { NextResponse } from 'next/server';

const DEFAULT_INDEXNOW_KEY = 'f56edfca5e434ba8bda3e1cb34e4a6d9';

export async function GET() {
  const key = process.env.INDEXNOW_KEY?.trim() || DEFAULT_INDEXNOW_KEY;

  return new NextResponse(key, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
