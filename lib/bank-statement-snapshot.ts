import type { County, City } from '@/lib/geo-data/types';
import { formatCurrency } from '@/lib/geo-data/calculations';
import { TOOL_RATES } from '@/lib/tool-rates-config';

/**
 * Generate a unique SEO paragraph for a county or city bank statement loan page.
 */
export function generateBankStatementSnapshot(
  county: County,
  location: County | City,
): string {
  const locationName = location.name;
  const medianHome = location.medianHomePrice;
  const expenseFactor = TOOL_RATES.bankStatementExpenseFactors.service;

  // Calculate minimum deposits needed at 20% down for median home
  const loanNeeded = Math.round(medianHome * 0.80);
  const monthlyRate = TOOL_RATES.defaultBankStatementRate / 100 / 12;
  const numPayments = 360;
  const factor =
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  const monthlyPaymentNeeded = Math.round(loanNeeded * factor);
  const qualIncomeNeeded = Math.round(monthlyPaymentNeeded / TOOL_RATES.bankStatementMaxDTI);
  const depositsNeeded = Math.round(qualIncomeNeeded / (1 - expenseFactor));

  const stateName = county.stateCode === 'ca' ? 'California' : 'Washington';

  if (medianHome >= 1_500_000) {
    return `${locationName}'s median home price of ${formatCurrency(medianHome)} puts it firmly in jumbo territory for bank statement borrowers. Self-employed buyers in ${locationName} typically need average monthly deposits of ${formatCurrency(depositsNeeded)}+ to qualify at 20% down using a service-business expense factor. Professional practices — common in ${stateName}'s high-cost coastal markets — benefit from the most favorable expense treatment at 40%, while gig and retail businesses face a 50% factor. The gap between a 40% and 50% expense factor translates to roughly ${formatCurrency(Math.round(depositsNeeded * 0.18))} less in required monthly deposits for professional borrowers.`;
  }

  if (medianHome >= 800_000) {
    return `With a median home price of ${formatCurrency(medianHome)}, ${locationName} self-employed buyers need meaningful deposit history to qualify through bank statement programs. At 20% down, a service-based business owner needs average monthly deposits of approximately ${formatCurrency(depositsNeeded)} to qualify. ${locationName} sits in ${county.name}, ${stateName}, where the conforming loan limit of ${formatCurrency(county.conformingLoanLimit)} covers most properties — keeping rates lower than jumbo alternatives. Choosing between 12 and 24 months of statements is a key decision: 24-month averaging smooths seasonal dips and can improve your qualifying income.`;
  }

  return `Bank statement loans unlock homeownership for self-employed buyers in ${locationName}, where the median home price is ${formatCurrency(medianHome)}. At 20% down, a service-based business owner needs average monthly deposits of roughly ${formatCurrency(depositsNeeded)} to qualify. ${county.name}'s conforming limit of ${formatCurrency(county.conformingLoanLimit)} means most purchases in ${locationName} stay within conforming guidelines, giving you access to the best available bank statement rates. Your business type directly affects qualification: professional practices qualify with 40% of deposits as expenses, while retail and gig businesses use a 50% factor.`;
}
