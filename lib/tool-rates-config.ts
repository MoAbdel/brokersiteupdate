/**
 * Centralized rate assumptions for all interactive tools.
 * Update this file when market rates change.
 */
export const TOOL_RATES = {
  /** Default DSCR loan rate (displayed as starting point) */
  defaultDscrRate: 7.5,
  /** Default conventional mortgage rate */
  defaultMortgageRate: 7.0,
  /** Default HELOC variable rate (prime + margin) */
  defaultHelocRate: 9.0,
  /** Default home equity loan fixed rate */
  defaultHeloanRate: 8.5,
  /** Default homeowner's insurance as % of home value */
  defaultInsuranceRate: 0.0035,
  /** Default monthly HOA */
  defaultHOA: 200,
  /** Short-term rental income haircut (75% of projected) */
  strIncomeHaircut: 0.75,
  /** Property management fee options */
  mgmtFeeOptions: [0, 0.08, 0.10] as const,
  /** Default bank statement loan rate */
  defaultBankStatementRate: 7.75,
  /** Max DTI for bank statement qualification */
  bankStatementMaxDTI: 0.43,
  /** Expense factor midpoints by business type */
  bankStatementExpenseFactors: {
    service: 0.45,
    retail: 0.50,
    professional: 0.40,
    gig: 0.50,
  } as Record<string, number>,
  /** Expense factor ranges for gated report (low, high) */
  bankStatementExpenseRanges: {
    service: [0.40, 0.50],
    retail: [0.45, 0.55],
    professional: [0.35, 0.45],
    gig: [0.45, 0.55],
  } as Record<string, [number, number]>,
  /** Last updated date (shown on tool pages) */
  lastUpdated: '2026-03-01',
} as const;

export type ToolRates = typeof TOOL_RATES;
