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
  /** Last updated date (shown on tool pages) */
  lastUpdated: '2026-03-01',
} as const;

export type ToolRates = typeof TOOL_RATES;
