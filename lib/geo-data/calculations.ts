import type {
  County,
  City,
  CashOutResult,
  DSCRResult,
  PropertyTaxResult,
  HELOCResult,
  DSCRQualificationResult,
  DSCRDownPaymentComparison,
  DSCRFullReport,
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

// --- DSCR Qualification Calculator ---

function getDSCRTier(dscr: number): 'green' | 'blue' | 'yellow' | 'red' {
  if (dscr >= 1.25) return 'green';
  if (dscr >= 1.0) return 'blue';
  if (dscr >= 0.75) return 'yellow';
  return 'red';
}

function getDSCRTierMessage(tier: 'green' | 'blue' | 'yellow' | 'red'): string {
  switch (tier) {
    case 'green':
      return 'Strong qualification \u2014 best-available pricing across our lender network';
    case 'blue':
      return 'Qualifies with most lenders we work with \u2014 standard DSCR programs available';
    case 'yellow':
      return 'Qualifies with select lenders \u2014 we work with several that accept sub-1.0 DSCR';
    case 'red':
      return 'Below most lender minimums \u2014 let\u2019s explore options to improve your ratio';
  }
}

function calcInterestOnlyPayment(loanAmount: number, annualRate: number): number {
  return Math.round(loanAmount * (annualRate / 100 / 12));
}

export function calcDSCRQualification(
  monthlyRent: number,
  purchasePrice: number,
  downPaymentPct: number,
  interestRate: number,
  annualPropertyTax: number,
  annualInsurance: number,
  monthlyHOA: number,
  mgmtFeePct: number,
  isSTR: boolean,
  conformingLimit: number,
): DSCRQualificationResult {
  const effectiveRent = isSTR ? Math.round(monthlyRent * 0.75) : monthlyRent;
  const loanAmount = Math.round(purchasePrice * (1 - downPaymentPct / 100));
  const mgmtFee = Math.round(effectiveRent * mgmtFeePct);

  const base = calcDSCR(
    effectiveRent,
    loanAmount,
    interestRate,
    30,
    annualPropertyTax,
    annualInsurance,
    monthlyHOA + mgmtFee,
  );

  const ioPayment = calcInterestOnlyPayment(loanAmount, interestRate);
  const monthlyTax = annualPropertyTax / 12;
  const monthlyIns = annualInsurance / 12;
  const totalIOPayment = ioPayment + monthlyTax + monthlyIns + monthlyHOA + mgmtFee;
  const ioDSCR = totalIOPayment > 0
    ? Math.round((effectiveRent / totalIOPayment) * 100) / 100
    : 0;

  const tier = getDSCRTier(base.actualDSCR);

  return {
    ...base,
    ioMonthlyPayment: Math.round(totalIOPayment),
    ioDSCR,
    tier,
    tierMessage: getDSCRTierMessage(tier),
    loanAmount,
    isJumbo: loanAmount > conformingLimit,
  };
}

export function calcDSCRFullReport(
  monthlyRent: number,
  purchasePrice: number,
  downPaymentPct: number,
  interestRate: number,
  avgPropertyTaxRate: number,
  annualInsurance: number,
  monthlyHOA: number,
  mgmtFeePct: number,
  isSTR: boolean,
  conformingLimit: number,
  appreciation5yr: number,
): DSCRFullReport {
  const annualTax = Math.round(purchasePrice * avgPropertyTaxRate);
  const effectiveRent = isSTR ? Math.round(monthlyRent * 0.75) : monthlyRent;

  const amortizing = calcDSCRQualification(
    monthlyRent, purchasePrice, downPaymentPct, interestRate,
    annualTax, annualInsurance, monthlyHOA, mgmtFeePct, isSTR, conformingLimit,
  );

  // Interest-only result
  const loanAmountIO = Math.round(purchasePrice * (1 - downPaymentPct / 100));
  const mgmtFee = Math.round(effectiveRent * mgmtFeePct);
  const ioPayment = calcInterestOnlyPayment(loanAmountIO, interestRate);
  const monthlyTaxIO = annualTax / 12;
  const monthlyInsIO = annualInsurance / 12;
  const totalIOPmt = ioPayment + monthlyTaxIO + monthlyInsIO + monthlyHOA + mgmtFee;
  const ioDSCRVal = totalIOPmt > 0 ? Math.round((effectiveRent / totalIOPmt) * 100) / 100 : 0;
  const ioTier = getDSCRTier(ioDSCRVal);

  const interestOnly: DSCRQualificationResult = {
    monthlyPayment: Math.round(totalIOPmt),
    requiredRentAt1_0: Math.round(totalIOPmt),
    requiredRentAt1_25: Math.round(totalIOPmt * 1.25),
    actualDSCR: ioDSCRVal,
    meetsMinimum: ioDSCRVal >= 1.0,
    ioMonthlyPayment: Math.round(totalIOPmt),
    ioDSCR: ioDSCRVal,
    tier: ioTier,
    tierMessage: getDSCRTierMessage(ioTier),
    loanAmount: loanAmountIO,
    isJumbo: loanAmountIO > conformingLimit,
  };

  const downPaymentComparison: DSCRDownPaymentComparison[] = [20, 25, 30].map((dp) => {
    const loan = Math.round(purchasePrice * (1 - dp / 100));
    const r = calcDSCR(effectiveRent, loan, interestRate, 30, annualTax, annualInsurance, monthlyHOA + mgmtFee);
    return {
      downPct: dp,
      loanAmount: loan,
      monthlyPayment: r.monthlyPayment,
      dscr: r.actualDSCR,
      tier: getDSCRTier(r.actualDSCR),
    };
  });

  const rateRange: [number, number] = amortizing.tier === 'green'
    ? [interestRate - 0.5, interestRate + 0.5]
    : amortizing.tier === 'blue'
      ? [interestRate, interestRate + 1.0]
      : [interestRate + 0.5, interestRate + 2.0];

  const downPaymentAmount = Math.round(purchasePrice * (downPaymentPct / 100));
  const futureValue = Math.round(purchasePrice * (1 + appreciation5yr));
  const equityProjection5yr = futureValue - amortizing.loanAmount;

  const annualCashFlow = (effectiveRent - amortizing.monthlyPayment) * 12;
  const totalCashInvested = downPaymentAmount + Math.round(purchasePrice * 0.03);
  const cashOnCashReturn = totalCashInvested > 0
    ? Math.round((annualCashFlow / totalCashInvested) * 10000) / 100
    : 0;

  return {
    amortizing,
    interestOnly,
    downPaymentComparison,
    rentFor1_0: amortizing.requiredRentAt1_0,
    rentFor1_25: amortizing.requiredRentAt1_25,
    rateRange,
    equityProjection5yr,
    cashOnCashReturn,
  };
}
