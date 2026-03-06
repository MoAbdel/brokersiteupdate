import type { County, City } from '@/lib/geo-data/types';
import { calcDSCR, formatCurrency } from '@/lib/geo-data/calculations';

/**
 * Generate a unique DSCR snapshot paragraph for a county or city page.
 * Uses actual geo-data to produce specific, indexable content.
 */
export function generateDscrSnapshot(
  location: County | City,
  countyData: County,
): string {
  const name = location.name;
  const medianPrice = location.medianHomePrice;
  const medianRent = location.medianRent;
  const taxRate = location.avgPropertyTaxRate;

  // Calculate typical DSCR at 25% down, 7.5% rate
  const loanAmount = Math.round(medianPrice * 0.75);
  const annualTax = Math.round(medianPrice * taxRate);
  const annualInsurance = Math.round(medianPrice * 0.0035);
  const result = calcDSCR(medianRent, loanAmount, 7.5, 30, annualTax, annualInsurance, 200);

  const dscrStr = result.actualDSCR.toFixed(2);
  const rentFor125 = formatCurrency(result.requiredRentAt1_25);

  // Interest-only DSCR for comparison
  const ioPayment = Math.round(loanAmount * (0.075 / 12));
  const monthlyTax = annualTax / 12;
  const monthlyIns = annualInsurance / 12;
  const totalIO = ioPayment + monthlyTax + monthlyIns + 200;
  const ioDSCR = totalIO > 0 ? (medianRent / totalIO).toFixed(2) : '0.00';

  let advice: string;
  if (result.actualDSCR >= 1.25) {
    advice = `${name} investment properties typically qualify for best-available DSCR pricing at standard 25% down payment. With a median rent of ${formatCurrency(medianRent)}/mo against a median home price of ${formatCurrency(medianPrice)}, the typical DSCR of ${dscrStr} puts investors in the strongest qualification tier. Investors here benefit from strong rental demand relative to purchase prices.`;
  } else if (result.actualDSCR >= 1.0) {
    advice = `Most ${name} investors can qualify with standard DSCR programs at 25% down. The median rent of ${formatCurrency(medianRent)}/mo and median home price of ${formatCurrency(medianPrice)} produces a typical DSCR of ${dscrStr}. For best-available pricing, consider rents above ${rentFor125}/mo or increasing your down payment to 30%.`;
  } else {
    advice = `${name}\u2019s median rent of ${formatCurrency(medianRent)}/mo and median home price of ${formatCurrency(medianPrice)} creates a typical DSCR of ${dscrStr} at 25% down \u2014 meaning most ${name} investors will want to explore interest-only programs (improving DSCR to ${ioDSCR}) or higher down payments to reach the 1.0+ qualification threshold.`;
  }

  return advice;
}
