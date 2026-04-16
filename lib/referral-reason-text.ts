import { capForProduct, type PrequalFailReason } from '@/lib/leadQualification';

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function referralReasonText(reason: PrequalFailReason): string {
  if (reason.type === 'home-value-exceeds-icp') {
    return 'Homes above $5M typically need a specialist lender.';
  }
  if (reason.product === 'heloc') {
    return 'HELOCs over $750K are routed to our referral partner.';
  }
  const cap = capForProduct(reason.product);
  return `Total loan amounts over ${dollar.format(cap)} are routed to our referral partner.`;
}
