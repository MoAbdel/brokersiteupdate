import type { County, City, GeoState } from './types';
import { STATES } from './types';
import { californiaCounties } from './california';
import { washingtonCounties } from './washington';
import { cities } from './cities';

// Re-export types
export type { County, City, GeoState };
export { STATES };

const allCounties: County[] = [...californiaCounties, ...washingtonCounties];

/**
 * Get all counties across both states.
 */
export function getAllCounties(): County[] {
  return allCounties;
}

/**
 * Get all counties for a given state code.
 */
export function getCountiesByState(stateCode: string): County[] {
  const code = stateCode.toLowerCase();
  if (code === 'ca') return californiaCounties;
  if (code === 'wa') return washingtonCounties;
  return [];
}

/**
 * Look up a single county by state code + county slug.
 */
export function getCounty(stateCode: string, countySlug: string): County | undefined {
  return getCountiesByState(stateCode).find((c) => c.slug === countySlug);
}

/**
 * Get all cities for a given county (by state + county slug).
 */
export function getCitiesByCounty(stateCode: string, countySlug: string): City[] {
  const code = stateCode.toLowerCase() as 'ca' | 'wa';
  return cities.filter((c) => c.stateCode === code && c.countySlug === countySlug);
}

/**
 * Look up a single city by state + county + city slug.
 */
export function getCity(
  stateCode: string,
  countySlug: string,
  citySlug: string
): City | undefined {
  const code = stateCode.toLowerCase() as 'ca' | 'wa';
  return cities.find(
    (c) => c.stateCode === code && c.countySlug === countySlug && c.slug === citySlug
  );
}

/**
 * Get all cities for a given state.
 */
export function getCitiesByState(stateCode: string): City[] {
  const code = stateCode.toLowerCase() as 'ca' | 'wa';
  return cities.filter((c) => c.stateCode === code);
}

/**
 * Get state metadata by code.
 */
export function getStateData(stateCode: string): GeoState | undefined {
  return STATES.find((s) => s.code === stateCode.toLowerCase());
}

/**
 * Get the full state name from code.
 */
export function getStateName(stateCode: string): string {
  return stateCode.toLowerCase() === 'ca' ? 'California' : 'Washington';
}

/**
 * Generate all state/county param combinations for generateStaticParams.
 */
export function getAllStateCountyParams(): { state: string; county: string }[] {
  return allCounties.map((c) => ({
    state: c.stateCode,
    county: c.slug,
  }));
}

/**
 * Generate all state/county/city param combinations for generateStaticParams.
 */
export function getAllStateCountyCityParams(): {
  state: string;
  county: string;
  city: string;
}[] {
  return cities.map((c) => ({
    state: c.stateCode,
    county: c.countySlug,
    city: c.slug,
  }));
}
