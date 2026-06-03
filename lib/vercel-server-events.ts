import { track } from '@vercel/analytics/server';
import type { NextRequest } from 'next/server';

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

const MAX_PROPERTY_LENGTH = 96;

function cleanValue(value: AnalyticsValue): AnalyticsValue {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, MAX_PROPERTY_LENGTH) : undefined;
}

function cleanProperties(properties: AnalyticsProperties): AnalyticsProperties {
  const cleaned: AnalyticsProperties = {};

  for (const [key, value] of Object.entries(properties)) {
    const cleanPropertyValue = cleanValue(value);
    if (cleanPropertyValue !== undefined) {
      cleaned[key] = cleanPropertyValue;
    }
  }

  return cleaned;
}

function formString(data: FormData | null, key: string): string | undefined {
  const value = data?.get(key);
  return typeof value === 'string' ? value : undefined;
}

function formNumber(data: FormData | null, key: string): number | undefined {
  const value = formString(data, key);
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export async function trackServerEvent(
  request: NextRequest,
  eventName: string,
  properties: AnalyticsProperties
) {
  try {
    await track(eventName, cleanProperties(properties), {
      request: {
        headers: request.headers,
      },
    });
  } catch (error) {
    console.error(JSON.stringify({
      level: 'error',
      message: 'Vercel Analytics event failed',
      event_name: eventName,
      error: error instanceof Error ? error.message : String(error),
    }));
  }
}

export function contactSubmissionProperties(
  data: FormData | null,
  outcome: string,
  statusCode: number
): AnalyticsProperties {
  const source =
    formString(data, 'source') ||
    formString(data, 'lead_magnet') ||
    formString(data, 'case_type') ||
    formString(data, 'loan_purpose') ||
    'contact_api';

  return {
    outcome,
    status_code: statusCode,
    source,
    loan_purpose: formString(data, 'loan_purpose'),
    loan_type: formString(data, 'loan_type'),
    case_type: formString(data, 'case_type'),
    lead_magnet: formString(data, 'lead_magnet'),
    qualification_status: formString(data, 'qualification_status'),
    lead_score: formNumber(data, 'lead_score'),
    lead_tier: formString(data, 'lead_tier'),
    lead_priority: formString(data, 'lead_priority'),
    property_state: formString(data, 'property_state'),
  };
}

export function newsletterSubmissionProperties(
  outcome: string,
  statusCode: number,
  source?: string
): AnalyticsProperties {
  return {
    outcome,
    status_code: statusCode,
    source: source || 'newsletter_api',
  };
}
