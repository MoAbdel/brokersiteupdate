/**
 * Canonical loan caps. Single source of truth.
 * Update here and every consumer (component + page heroes) picks it up.
 */
export const LOAN_CAPS = {
  conventional: 3_500_000,
  jumbo: 3_500_000,
  heloc: 750_000,
  dscr: 2_000_000,
  cashOut: 3_500_000,
} as const;

export type LoanProduct = keyof typeof LOAN_CAPS;

const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function formatCap(product: LoanProduct): string {
  return dollarFormatter.format(LOAN_CAPS[product]);
}
