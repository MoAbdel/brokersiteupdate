import {
  SITE_ORIGIN,
  PERSON_ID,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  COMPANY_NAME,
  COMPANY_NMLS,
  BROKER_NAME,
  NMLS_ID,
  REGULATORY_URLS,
} from './constants';

export type FinancialProductInput = {
  name: string;
  url: string;
  description: string;
  loanType: string;
  minDownPayment?: string;
  maxLTV?: string;
  minCreditScore?: number;
  loanTerms?: string[];
  conformingLimit?: string;
  interestRateType?: 'Fixed' | 'Variable' | 'Fixed or Variable';
  eligibility?: string;
  propertyTypes?: string[];
  minLoanAmount?: string;
  maxLoanAmount?: string;
};

/**
 * Builds a Schema.org LoanOrCredit JSON-LD object for mortgage products.
 * Uses LoanOrCredit (valid Schema.org) — NOT MortgageLoan (non-standard).
 */
export function buildFinancialProductSchema(input: FinancialProductInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LoanOrCredit',
    '@id': `${input.url}#financial-product`,
    name: input.name,
    url: input.url,
    description: input.description,
    loanType: input.loanType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': LOCAL_BUSINESS_ID,
      name: `${BROKER_NAME} - Mortgage Broker`,
      identifier: `NMLS #${NMLS_ID}`,
      parentOrganization: {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: COMPANY_NAME,
        identifier: `NMLS #${COMPANY_NMLS}`,
      },
    },
    broker: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: BROKER_NAME,
      identifier: `NMLS #${NMLS_ID}`,
    },
    sameAs: [
      REGULATORY_URLS.NMLS_CONSUMER_ACCESS,
      REGULATORY_URLS.CA_DRE,
      REGULATORY_URLS.WA_DFI,
    ],
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'State', name: 'Washington' },
    ],
    currency: 'USD',
  };

  if (input.interestRateType) {
    schema.interestRate = {
      '@type': 'QuantitativeValue',
      description: input.interestRateType,
    };
  }

  if (input.loanTerms) {
    schema.loanTerm = input.loanTerms.map((term) => ({
      '@type': 'QuantitativeValue',
      value: term,
    }));
  }

  if (input.minCreditScore) {
    schema.requiredMinPayment = undefined; // clear if set
    schema.eligibleQuantity = {
      '@type': 'QuantitativeValue',
      name: 'Minimum Credit Score',
      minValue: input.minCreditScore,
    };
  }

  if (input.minDownPayment) {
    schema.downPayment = input.minDownPayment;
  }

  if (input.maxLTV) {
    schema.loanToValue = input.maxLTV;
  }

  if (input.conformingLimit) {
    schema.amount = {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      description: `Conforming limit: ${input.conformingLimit}`,
    };
  }

  if (input.maxLoanAmount) {
    schema.maxLoanAmount = input.maxLoanAmount;
  }

  if (input.eligibility) {
    schema.eligibleRegion = input.eligibility;
  }

  if (input.propertyTypes) {
    schema.object = input.propertyTypes.map((pt) => ({
      '@type': 'Property',
      name: pt,
    }));
  }

  // Clean undefined values
  return JSON.parse(JSON.stringify(schema));
}
