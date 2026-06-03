'use client';

import { track } from '@vercel/analytics';

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

export function trackClientEvent(eventName: string, properties?: AnalyticsProperties) {
  try {
    track(eventName, properties);
  } catch (error) {
    console.error(JSON.stringify({
      level: 'error',
      message: 'Vercel Analytics client event failed',
      event_name: eventName,
      error: error instanceof Error ? error.message : String(error),
    }));
  }
}
