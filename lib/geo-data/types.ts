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

export interface DSCRQualificationResult extends DSCRResult {
  ioMonthlyPayment: number;
  ioDSCR: number;
  tier: 'green' | 'blue' | 'yellow' | 'red';
  tierMessage: string;
  loanAmount: number;
  isJumbo: boolean;
}

export interface DSCRDownPaymentComparison {
  downPct: number;
  loanAmount: number;
  monthlyPayment: number;
  dscr: number;
  tier: 'green' | 'blue' | 'yellow' | 'red';
}

export interface DSCRFullReport {
  amortizing: DSCRQualificationResult;
  interestOnly: DSCRQualificationResult;
  downPaymentComparison: DSCRDownPaymentComparison[];
  rentFor1_0: number;
  rentFor1_25: number;
  rateRange: [number, number];
  equityProjection5yr: number;
  cashOnCashReturn: number;
}

export type BusinessType = 'service' | 'retail' | 'professional' | 'gig';
export type CreditScoreTier = '700+' | '660-699' | '620-659';
export type DocPeriod = 12 | 24;

export interface BankStatementResult {
  qualifyingMonthlyIncome: number;
  maxLoanAmount: number;
  maxPurchasePrice: number;
  expenseFactorUsed: number;
  tier: 'green' | 'yellow' | 'red';
  tierMessage: string;
}

export interface BankStatementDownPaymentComparison {
  downPct: number;
  maxPurchasePrice: number;
  maxLoanAmount: number;
  monthlyPayment: number;
}

export interface BankStatementFullReport {
  free: BankStatementResult;
  expenseRange: [number, number];
  qualifyingIncomeRange: [number, number];
  maxLoanRange: [number, number];
  comparison12v24: {
    period12: BankStatementResult;
    period24: BankStatementResult;
  };
  downPaymentComparison: BankStatementDownPaymentComparison[];
  creditTierImpact: { tier: CreditScoreTier; rateAdj: number; note: string }[];
  requiredDocs: string[];
}

export type RepaymentPreference = 'asap' | 'low_payment' | 'flexibility';

export interface EquityOptionResult {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  closingCosts: number;
  effectiveRate: number;
  flexibilityRating: 'High' | 'Medium' | 'Low';
  taxDeductible: string;
}

export interface EquityComparisonResult {
  homeEquity: number;
  availableEquity90: number;
  availableEquity80: number;
  heloc: EquityOptionResult;
  cashOut: EquityOptionResult;
  heloan: EquityOptionResult;
  recommendation: string;
  recommendedOption: 'heloc' | 'cashOut' | 'heloan';
}

export interface EquityComparisonFullReport {
  free: EquityComparisonResult;
  breakEvenMonths: number;
  tenYearCostHeloc: number;
  tenYearCostCashOut: number;
  tenYearCostHeloan: number;
  currentMortgagePayment: number;
  newCashOutPayment: number;
  monthlyDifference: number;
  appreciationContext: string;
}

export const STATES: GeoState[] = [
  { code: 'ca', name: 'California', slug: 'ca', countyCount: 58 },
  { code: 'wa', name: 'Washington', slug: 'wa', countyCount: 39 },
];
