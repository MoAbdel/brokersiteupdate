import type { County, City } from '@/lib/geo-data/types';
import { formatCurrency } from '@/lib/geo-data/calculations';

export function generateEquitySnapshot(
  county: County,
  location: County | City,
): string {
  const name = location.name;
  const median = location.medianHomePrice;
  const stateName = county.stateCode === 'ca' ? 'California' : 'Washington';

  // Estimate equity for someone who bought 5 years ago (using 5yr appreciation)
  const purchasePrice5yrAgo = Math.round(median / (1 + county.avgAppreciation5yr));
  const currentEquity = median - Math.round(purchasePrice5yrAgo * 0.75); // assume 75% LTV at purchase
  const heloc90 = Math.max(0, Math.round(median * 0.90 - purchasePrice5yrAgo * 0.75));
  const cashOut80 = Math.max(0, Math.round(median * 0.80 - purchasePrice5yrAgo * 0.75));

  if (median >= 1_200_000) {
    return `${name} homeowners who purchased at the then-median of approximately ${formatCurrency(purchasePrice5yrAgo)} five years ago have roughly ${formatCurrency(currentEquity)} in equity today based on current values. At 90% CLTV, that supports a HELOC line of up to ${formatCurrency(heloc90)} or a cash-out refinance of up to ${formatCurrency(cashOut80)} at 80% LTV. ${name}'s premium ${stateName} market makes equity access a powerful financial tool.`;
  }

  if (median >= 600_000) {
    return `Homeowners in ${name} have benefited from steady appreciation — a home purchased five years ago near ${formatCurrency(purchasePrice5yrAgo)} is worth approximately ${formatCurrency(median)} today. That translates to an estimated HELOC line of ${formatCurrency(heloc90)} at 90% CLTV. Whether you choose a HELOC, cash-out refinance, or home equity loan depends on your goals — the calculator above compares all three options with ${county.name} market data.`;
  }

  return `${name} homeowners can access equity through three main options: HELOC, cash-out refinance, or home equity loan. With a current median home value of ${formatCurrency(median)} in ${county.name}, ${stateName}, the calculator above estimates your available equity and compares monthly payments, total costs, and flexibility across all three products using current rates.`;
}
