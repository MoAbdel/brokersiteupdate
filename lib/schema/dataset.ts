import {
  SITE_ORIGIN,
  ORGANIZATION_ID,
  COMPANY_NAME,
  BROKER_NAME,
  NMLS_ID,
} from './constants';

export type DatasetInput = {
  name: string;
  description: string;
  url: string;
  temporalCoverage: string;
  spatialCoverage: string | string[];
  variableMeasured: string[];
  dateModified?: string;
};

/**
 * Builds a Schema.org Dataset JSON-LD object for data-heavy pages
 * (market data, rate comparisons, loan limit tables).
 */
export function buildDatasetSchema(input: DatasetInput) {
  const spatial = Array.isArray(input.spatialCoverage)
    ? input.spatialCoverage.map((s) => ({ '@type': 'Place', name: s }))
    : { '@type': 'Place', name: input.spatialCoverage };

  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${input.url}#dataset`,
    name: input.name,
    description: input.description,
    url: input.url,
    temporalCoverage: input.temporalCoverage,
    spatialCoverage: spatial,
    variableMeasured: input.variableMeasured.map((v) => ({
      '@type': 'PropertyValue',
      name: v,
    })),
    creator: {
      '@type': 'Person',
      name: BROKER_NAME,
      identifier: `NMLS #${NMLS_ID}`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: COMPANY_NAME,
      url: SITE_ORIGIN,
    },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    dateModified: input.dateModified ?? new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
  };
}
