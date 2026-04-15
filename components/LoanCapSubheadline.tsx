import { formatCap, type LoanProduct } from '@/lib/loan-caps';

interface LoanCapSubheadlineProps {
  /** e.g., "HELOCs", "Jumbo Loans", "DSCR Investment Loans" */
  productLabel: string;
  /** Key in LOAN_CAPS to look up the maximum */
  product: LoanProduct;
  /** Regions served, e.g., ["California", "Washington"] */
  regions: string[];
  className?: string;
}

/**
 * Renders a small subheadline under the page H1 announcing the loan cap.
 * Example: "HELOCs up to $750,000 · California & Washington"
 */
export default function LoanCapSubheadline({
  productLabel,
  product,
  regions,
  className = '',
}: LoanCapSubheadlineProps) {
  const regionText =
    regions.length === 0
      ? ''
      : regions.length === 1
      ? regions[0]
      : regions.slice(0, -1).join(', ') + ' & ' + regions[regions.length - 1];

  return (
    <p
      className={`text-sm md:text-base text-slate-600 mt-2 ${className}`}
      data-testid="loan-cap-subheadline"
      aria-label={`${productLabel} up to ${formatCap(product)}`}
    >
      {productLabel} up to <span className="font-semibold">{formatCap(product)}</span>
      {regionText ? <span> · {regionText}</span> : null}
    </p>
  );
}
