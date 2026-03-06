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
  BusinessType,
  CreditScoreTier,
  DocPeriod,
  BankStatementResult,
  BankStatementDownPaymentComparison,
  BankStatementFullReport,
  RepaymentPreference,
  EquityOptionResult,
  EquityComparisonResult,
  EquityComparisonFullReport,
} from './types';

import { TOOL_RATES } from '@/lib/tool-rates-config';

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

// --- Bank Statement Loan Estimator ---

function getBankStatementTier(
  maxPurchasePrice: number,
  desiredPrice: number,
): 'green' | 'yellow' | 'red' {
  if (maxPurchasePrice >= desiredPrice) return 'green';
  if (maxPurchasePrice >= desiredPrice * 0.8) return 'yellow';
  return 'red';
}

function getBankStatementTierMessage(tier: 'green' | 'yellow' | 'red'): string {
  switch (tier) {
    case 'green':
      return 'Based on your deposits, you likely qualify for bank statement programs';
    case 'yellow':
      return 'Borderline — program selection and documentation strategy matter';
    case 'red':
      return 'May need higher deposits or larger down payment';
  }
}

function getRequiredDocs(businessType: BusinessType): string[] {
  const common = [
    '12 or 24 months of personal or business bank statements',
    'Valid government-issued photo ID',
    'Two months of asset statements (checking, savings, retirement)',
    'Business license or proof of self-employment (2+ years)',
    'CPA letter or signed P&L statement (some programs)',
  ];
  const byType: Record<BusinessType, string[]> = {
    service: [
      ...common,
      '1099 forms from clients (if available)',
      'Contracts or invoices showing ongoing revenue',
    ],
    retail: [
      ...common,
      'Point-of-sale records or merchant account statements',
      'Business tax returns (some programs require 1 year)',
    ],
    professional: [
      ...common,
      'Professional license or certification',
      'Partnership or LLC operating agreement (if applicable)',
    ],
    gig: [
      ...common,
      'Platform income statements (Uber, DoorDash, Upwork, etc.)',
      'Screenshot of active platform profiles showing ratings/history',
    ],
  };
  return byType[businessType];
}

export function calcBankStatementQualification(
  avgMonthlyDeposits: number,
  businessType: BusinessType,
  desiredPrice: number,
  downPaymentPct: number,
  interestRate: number,
): BankStatementResult {
  const expenseFactor = TOOL_RATES.bankStatementExpenseFactors[businessType];
  const qualifyingMonthlyIncome = Math.round(avgMonthlyDeposits * (1 - expenseFactor));
  const maxDTI = TOOL_RATES.bankStatementMaxDTI;
  const maxMonthlyPayment = Math.round(qualifyingMonthlyIncome * maxDTI);

  const monthlyRate = interestRate / 100 / 12;
  const numPayments = 360;
  const maxLoanAmount = monthlyRate > 0
    ? Math.round(
        maxMonthlyPayment /
          ((monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1))
      )
    : Math.round(maxMonthlyPayment * numPayments);

  const maxPurchasePrice = Math.round(maxLoanAmount / (1 - downPaymentPct / 100));
  const tier = getBankStatementTier(maxPurchasePrice, desiredPrice);

  return {
    qualifyingMonthlyIncome,
    maxLoanAmount,
    maxPurchasePrice,
    expenseFactorUsed: expenseFactor,
    tier,
    tierMessage: getBankStatementTierMessage(tier),
  };
}

export function calcBankStatementFullReport(
  avgMonthlyDeposits: number,
  businessType: BusinessType,
  desiredPrice: number,
  downPaymentPct: number,
  interestRate: number,
  _creditScore: CreditScoreTier,
  _docPeriod: DocPeriod,
): BankStatementFullReport {
  const free = calcBankStatementQualification(
    avgMonthlyDeposits, businessType, desiredPrice, downPaymentPct, interestRate,
  );

  const expenseRange = TOOL_RATES.bankStatementExpenseRanges[businessType] as [number, number];
  const qualLow = Math.round(avgMonthlyDeposits * (1 - expenseRange[1]));
  const qualHigh = Math.round(avgMonthlyDeposits * (1 - expenseRange[0]));
  const qualifyingIncomeRange: [number, number] = [qualLow, qualHigh];

  const maxDTI = TOOL_RATES.bankStatementMaxDTI;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = 360;
  const factor = monthlyRate > 0
    ? (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    : 1 / numPayments;

  const maxLoanLow = Math.round((qualLow * maxDTI) / factor);
  const maxLoanHigh = Math.round((qualHigh * maxDTI) / factor);
  const maxLoanRange: [number, number] = [maxLoanLow, maxLoanHigh];

  const period12 = calcBankStatementQualification(
    avgMonthlyDeposits, businessType, desiredPrice, downPaymentPct, interestRate,
  );

  const adjusted24Factor = Math.max(0.30, TOOL_RATES.bankStatementExpenseFactors[businessType] - 0.02);
  const qual24 = Math.round(avgMonthlyDeposits * (1 - adjusted24Factor));
  const maxPayment24 = Math.round(qual24 * maxDTI);
  const maxLoan24 = Math.round(maxPayment24 / factor);
  const maxPrice24 = Math.round(maxLoan24 / (1 - downPaymentPct / 100));
  const tier24 = getBankStatementTier(maxPrice24, desiredPrice);
  const period24: BankStatementResult = {
    qualifyingMonthlyIncome: qual24,
    maxLoanAmount: maxLoan24,
    maxPurchasePrice: maxPrice24,
    expenseFactorUsed: adjusted24Factor,
    tier: tier24,
    tierMessage: getBankStatementTierMessage(tier24),
  };

  const downPaymentComparison: BankStatementDownPaymentComparison[] = [10, 15, 20].map((dp) => {
    const loan = free.maxLoanAmount;
    const price = Math.round(loan / (1 - dp / 100));
    const pmt = Math.round(loan * factor);
    return { downPct: dp, maxPurchasePrice: price, maxLoanAmount: loan, monthlyPayment: pmt };
  });

  const creditTierImpact: { tier: CreditScoreTier; rateAdj: number; note: string }[] = [
    { tier: '700+', rateAdj: 0, note: 'Best available rates — full program access' },
    { tier: '660-699', rateAdj: 0.5, note: 'Slight rate premium — most programs available' },
    { tier: '620-659', rateAdj: 1.25, note: 'Higher rates — select programs only, may need 15%+ down' },
  ];

  const requiredDocs = getRequiredDocs(businessType);

  return {
    free,
    expenseRange,
    qualifyingIncomeRange,
    maxLoanRange,
    comparison12v24: { period12, period24 },
    downPaymentComparison,
    creditTierImpact,
    requiredDocs,
  };
}

// --- Equity Comparison Calculator ---

export function calcEquityComparison(
  homeValue: number,
  mortgageBalance: number,
  currentRate: number,
  remainingYears: number,
  accessAmount: number,
  repaymentPref: RepaymentPreference,
  helocRate: number,
  cashOutRate: number,
  heloanRate: number,
): EquityComparisonResult {
  const homeEquity = homeValue - mortgageBalance;
  const availableEquity90 = Math.max(0, Math.round(homeValue * 0.90 - mortgageBalance));
  const availableEquity80 = Math.max(0, Math.round(homeValue * 0.80 - mortgageBalance));
  const amt = Math.min(accessAmount, availableEquity90);

  // HELOC: Interest-only during 10-year draw period
  const helocIO = Math.round(amt * (helocRate / 100 / 12));
  const helocTotalInterest10yr = helocIO * 120; // 10-year draw
  const heloc: EquityOptionResult = {
    name: 'HELOC',
    monthlyPayment: helocIO,
    totalInterest: helocTotalInterest10yr,
    closingCosts: TOOL_RATES.helocClosingCosts,
    effectiveRate: helocRate,
    flexibilityRating: 'High',
    taxDeductible: 'Interest on home improvement use',
  };

  // Cash-Out Refi: New 30-year loan replacing existing mortgage
  const newLoan = mortgageBalance + amt;
  const coMonthlyRate = cashOutRate / 100 / 12;
  const coPayments = 360;
  const cashOutMonthly = coMonthlyRate > 0
    ? Math.round(
        newLoan *
          (coMonthlyRate * Math.pow(1 + coMonthlyRate, coPayments)) /
          (Math.pow(1 + coMonthlyRate, coPayments) - 1)
      )
    : Math.round(newLoan / coPayments);
  const cashOutTotalInterest = cashOutMonthly * coPayments - newLoan;
  const cashOutClosing = Math.round(newLoan * TOOL_RATES.cashOutClosingCostPct);
  const cashOut: EquityOptionResult = {
    name: 'Cash-Out Refinance',
    monthlyPayment: cashOutMonthly,
    totalInterest: cashOutTotalInterest,
    closingCosts: cashOutClosing,
    effectiveRate: cashOutRate,
    flexibilityRating: 'Low',
    taxDeductible: 'All mortgage interest (up to limits)',
  };

  // HELOAN: Fixed rate, 15-year term on accessed amount only
  const hlMonthlyRate = heloanRate / 100 / 12;
  const hlPayments = 180; // 15-year
  const heloanMonthly = hlMonthlyRate > 0
    ? Math.round(
        amt *
          (hlMonthlyRate * Math.pow(1 + hlMonthlyRate, hlPayments)) /
          (Math.pow(1 + hlMonthlyRate, hlPayments) - 1)
      )
    : Math.round(amt / hlPayments);
  const heloanTotalInterest = heloanMonthly * hlPayments - amt;
  const heloan: EquityOptionResult = {
    name: 'Home Equity Loan',
    monthlyPayment: heloanMonthly,
    totalInterest: heloanTotalInterest,
    closingCosts: TOOL_RATES.heloanClosingCosts,
    effectiveRate: heloanRate,
    flexibilityRating: 'Medium',
    taxDeductible: 'Interest on home improvement use',
  };

  // Recommendation based on preference
  let recommendedOption: 'heloc' | 'cashout' | 'heloan';
  let recommendation: string;
  if (repaymentPref === 'asap') {
    recommendedOption = 'heloan';
    recommendation = 'A home equity loan gives you a fixed rate and predictable payments to pay down faster.';
  } else if (repaymentPref === 'low_payment') {
    recommendedOption = 'heloc';
    recommendation = 'A HELOC offers the lowest initial payment with interest-only during the draw period.';
  } else {
    recommendedOption = 'heloc';
    recommendation = 'A HELOC provides maximum flexibility — draw funds as needed and only pay interest on what you use.';
  }

  return {
    homeEquity,
    availableEquity90,
    availableEquity80,
    heloc,
    cashOut,
    heloan,
    recommendation,
    recommendedOption,
  };
}

export function calcEquityFullReport(
  homeValue: number,
  mortgageBalance: number,
  currentRate: number,
  remainingYears: number,
  accessAmount: number,
  repaymentPref: RepaymentPreference,
  helocRate: number,
  cashOutRate: number,
  heloanRate: number,
  avgAppreciation5yr: number,
): EquityComparisonFullReport {
  const free = calcEquityComparison(
    homeValue, mortgageBalance, currentRate, remainingYears,
    accessAmount, repaymentPref, helocRate, cashOutRate, heloanRate,
  );

  // Current mortgage payment
  const curMonthlyRate = currentRate / 100 / 12;
  const curPayments = remainingYears * 12;
  const currentMortgagePayment = curMonthlyRate > 0 && curPayments > 0
    ? Math.round(
        mortgageBalance *
          (curMonthlyRate * Math.pow(1 + curMonthlyRate, curPayments)) /
          (Math.pow(1 + curMonthlyRate, curPayments) - 1)
      )
    : curPayments > 0 ? Math.round(mortgageBalance / curPayments) : 0;

  const newCashOutPayment = free.cashOut.monthlyPayment;
  const monthlyDifference = newCashOutPayment - currentMortgagePayment;

  // Break-even for cash-out: closing costs / monthly savings (if refinancing lowers payment)
  // If payment goes UP, break-even = closing costs / additional monthly cost (negative = never breaks even on payment alone)
  const breakEvenMonths = monthlyDifference !== 0
    ? Math.round(free.cashOut.closingCosts / Math.abs(monthlyDifference))
    : 0;

  // 10-year total cost projections
  const tenYearCostHeloc = free.heloc.monthlyPayment * 120 + free.heloc.closingCosts;
  const tenYearCostCashOut = free.cashOut.monthlyPayment * 120 + free.cashOut.closingCosts;
  const tenYearCostHeloan = free.heloan.monthlyPayment * 120 + free.heloan.closingCosts;

  const futureValue = Math.round(homeValue * (1 + avgAppreciation5yr));
  const appreciationContext = `Based on ${(avgAppreciation5yr * 100).toFixed(1)}% projected 5-year appreciation, your home could be worth ${formatCurrency(futureValue)} — supporting even more equity access in the future.`;

  return {
    free,
    breakEvenMonths,
    tenYearCostHeloc,
    tenYearCostCashOut,
    tenYearCostHeloan,
    currentMortgagePayment,
    newCashOutPayment,
    monthlyDifference,
    appreciationContext,
  };
}
