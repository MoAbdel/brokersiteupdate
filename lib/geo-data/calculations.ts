import type {
  County,
  City,
  CashOutResult,
  DSCRResult,
  PropertyTaxResult,
  HELOCResult,
} from './types';

/**
 * Calculate maximum cash-out refinance amounts at various LTV tiers.
 * Uses county conforming limit to flag jumbo scenarios.
 */
export function calcMaxCashOut(
  currentMortgageBalance: number,
  estimatedHomeValue: number,
  county: County | City & { conformingLoanLimit?: number },
  conformingLimit: number
): CashOutResult {
  const ltvTiers = [80, 85, 90];
  const maxLoanAtLTV: Record<number, number> = {};
  const maxCashOutAtLTV: Record<number, number> = {};
  const isJumbo: Record<number, boolean> = {};

  for (const ltv of ltvTiers) {
    const maxLoan = Math.floor(estimatedHomeValue * (ltv / 100));
    const cashOut = Math.max(0, maxLoan - currentMortgageBalance);
    maxLoanAtLTV[ltv] = maxLoan;
    maxCashOutAtLTV[ltv] = cashOut;
    isJumbo[ltv] = maxLoan > conformingLimit;
  }

  return {
    currentValue: estimatedHomeValue,
    maxLoanAtLTV,
    maxCashOutAtLTV,
    conformingLimit,
    isJumbo,
  };
}

/**
 * Calculate DSCR (Debt Service Coverage Ratio) for investment properties.
 * Returns required rent at 1.0 and 1.25 thresholds.
 */
export function calcDSCR(
  monthlyRent: number,
  loanAmount: number,
  interestRate: number,
  loanTermYears: number,
  annualPropertyTax: number,
  annualInsurance: number,
  monthlyHOA: number
): DSCRResult {
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTermYears * 12;

  const monthlyPI =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
      : loanAmount / numPayments;

  const monthlyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const totalPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

  const actualDSCR = totalPayment > 0 ? monthlyRent / totalPayment : 0;
  const requiredRentAt1_0 = totalPayment;
  const requiredRentAt1_25 = totalPayment * 1.25;

  return {
    monthlyPayment: Math.round(totalPayment),
    requiredRentAt1_0: Math.round(requiredRentAt1_0),
    requiredRentAt1_25: Math.round(requiredRentAt1_25),
    actualDSCR: Math.round(actualDSCR * 100) / 100,
    meetsMinimum: actualDSCR >= 1.0,
  };
}

/**
 * Calculate annual and monthly property tax from purchase price and county rate.
 */
export function calcPropertyTax(
  purchasePrice: number,
  taxRate: number
): PropertyTaxResult {
  const annualTax = Math.round(purchasePrice * taxRate);
  return {
    annualTax,
    monthlyTax: Math.round(annualTax / 12),
    effectiveRate: taxRate,
  };
}

/**
 * Calculate maximum HELOC line available based on equity and CLTV limits.
 */
export function calcMaxHELOC(
  estimatedHomeValue: number,
  currentMortgageBalance: number,
  maxCLTVPercent: number,
  conformingLimit: number
): HELOCResult {
  const maxTotalDebt = Math.floor(estimatedHomeValue * (maxCLTVPercent / 100));
  const availableLine = Math.max(0, maxTotalDebt - currentMortgageBalance);

  return {
    estimatedValue: estimatedHomeValue,
    maxCLTV: maxCLTVPercent,
    maxLoanAmount: maxTotalDebt,
    availableLine,
    conformingLimit,
  };
}

/**
 * Format currency for display.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format percentage for display.
 */
export function formatPercent(value: number, decimals = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}
