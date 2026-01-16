import { NextResponse } from 'next/server';
import { fetchRealMarketInsights } from '@/lib/scrapers';

export async function GET() {
  try {
    // Fetch real market insights from free APIs and data sources
    const insights = await fetchRealMarketInsights();

    return NextResponse.json({
      success: true,
      data: insights,
      source: 'Live Economic Data (FRED, Treasury)',
      location: 'California / National',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error scraping insights:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to scrape market insights' },
      { status: 500 }
    );
  }
}

export async function POST() {
  // POST endpoint delegates to GET for scraping operations
  return GET();
}