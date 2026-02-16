export interface City {
  name: string;
  slug: string;
  countySlug: string;
  stateCode: 'ca' | 'wa';
  medianHomePrice: number;
  avgPropertyTaxRate: number;
  medianRent: number;
  population: number;
}

export interface County {
  name: string;
  slug: string;
  stateCode: 'ca' | 'wa';
  fipsCode: string;
  conformingLoanLimit: number;
  medianHomePrice: number;
  avgPropertyTaxRate: number;
  avgAppreciation5yr: number;
  avgHomeAge: number;
  medianRent: number;
  population: number;
}

export interface GeoState {
  code: 'ca' | 'wa';
  name: string;
  slug: string;
  countyCount: number;
}

export interface CashOutResult {
  currentValue: number;
  maxLoanAtLTV: Record<number, number>;
  maxCashOutAtLTV: Record<number, number>;
  conformingLimit: number;
  isJumbo: Record<number, boolean>;
}

export interface DSCRResult {
  monthlyPayment: number;
  requiredRentAt1_0: number;
  requiredRentAt1_25: number;
  actualDSCR: number;
  meetsMinimum: boolean;
}

export interface PropertyTaxResult {
  annualTax: number;
  monthlyTax: number;
  effectiveRate: number;
}

export interface HELOCResult {
  estimatedValue: number;
  maxCLTV: number;
  maxLoanAmount: number;
  availableLine: number;
  conformingLimit: number;
}

export const STATES: GeoState[] = [
  { code: 'ca', name: 'California', slug: 'ca', countyCount: 58 },
  { code: 'wa', name: 'Washington', slug: 'wa', countyCount: 39 },
];
