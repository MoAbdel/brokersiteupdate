export const US_COUNTRY_CODE = 'US';

export const NON_US_LEAD_CAPTURE_ERROR =
  'Direct quote requests are limited to U.S. properties and borrowers. You can still browse guides and tools from anywhere.';

type HeaderReader = Pick<Headers, 'get'>;

export interface AudienceContext {
  countryCode: string | null;
  isUsEligible: boolean;
  isLocalHost: boolean;
}

function normalizeCountryCode(value: string | null | undefined): string | null {
  const normalized = value?.trim().toUpperCase();
  return normalized || null;
}

export function isLocalHost(host: string | null | undefined): boolean {
  if (!host) {
    return false;
  }

  const normalizedHost = host.toLowerCase();
  return (
    normalizedHost.includes('localhost') ||
    normalizedHost.startsWith('127.0.0.1') ||
    normalizedHost.startsWith('[::1]') ||
    normalizedHost.startsWith('::1')
  );
}

export function getAudienceContext(headers: HeaderReader): AudienceContext {
  const host = headers.get('x-forwarded-host') ?? headers.get('host');
  const countryCode = normalizeCountryCode(
    headers.get('x-audience-country') ??
      headers.get('x-vercel-ip-country') ??
      headers.get('cf-ipcountry')
  );
  const isLocal = isLocalHost(host);
  const eligibilityHeader = headers.get('x-audience-us-eligible');
  const isUsEligible =
    isLocal ||
    eligibilityHeader === '1' ||
    (eligibilityHeader !== '0' && countryCode === US_COUNTRY_CODE);

  return {
    countryCode,
    isUsEligible,
    isLocalHost: isLocal,
  };
}

export function decorateAudienceHeaders(requestHeaders: Headers): Headers {
  const headers = new Headers(requestHeaders);
  const audience = getAudienceContext(requestHeaders);

  headers.set('x-audience-country', audience.countryCode ?? '');
  headers.set('x-audience-us-eligible', audience.isUsEligible ? '1' : '0');

  return headers;
}
