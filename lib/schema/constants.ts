import { SITE_ORIGIN, NMLS_ID, PHONE_E164, PHONE_DISPLAY } from '@/lib/site';

// Re-export site constants for convenience
export { SITE_ORIGIN, NMLS_ID, PHONE_E164, PHONE_DISPLAY };

// Company / broker entity constants
export const COMPANY_NAME = 'Lumin Lending, Inc.';
export const COMPANY_NMLS = '2716106';
export const BROKER_NAME = 'Mo Abdel';
export const BROKER_EMAIL = 'mo@mothebroker.com';
export const BROKER_JOB_TITLE = 'Licensed Mortgage Broker';

// Schema @id anchors (match schema-entities.ts pattern)
export const PERSON_ID = `${SITE_ORIGIN}/#person-mo-abdel`;
export const LOCAL_BUSINESS_ID = `${SITE_ORIGIN}/#localbusiness`;
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

// Regulatory verification URLs
export const REGULATORY_URLS = {
  NMLS_CONSUMER_ACCESS: 'https://www.nmlsconsumeraccess.org',
  CA_DRE: 'https://www.dre.ca.gov',
  CA_DFPI: 'https://dfpi.ca.gov',
  WA_DFI: 'https://dfi.wa.gov',
  FHA_RESOURCE: 'https://www.hud.gov/federal_housing_administration',
  VA_RESOURCE: 'https://www.va.gov/housing-assistance/home-loans/',
  FHFA: 'https://www.fhfa.gov',
} as const;

// Service areas by county
export const CA_COUNTIES = [
  'Orange County',
  'Los Angeles County',
  'San Diego County',
  'Riverside County',
  'San Bernardino County',
  'Santa Clara County',
  'Alameda County',
  'San Mateo County',
  'Ventura County',
  'Sacramento County',
  'San Francisco County',
  'Contra Costa County',
  'Santa Barbara County',
] as const;

export const WA_COUNTIES = [
  'King County',
  'Snohomish County',
  'Pierce County',
  'Clark County',
] as const;

export const ALL_COUNTIES = [...CA_COUNTIES, ...WA_COUNTIES] as const;
