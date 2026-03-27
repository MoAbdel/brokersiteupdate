'use client';

import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

/* ------------------------------------------------------------------ */
/*  QualificationCallout                                              */
/*  Reusable blue info-callout with three SEO-compliant variants.     */
/*  Every paragraph stays within the 30-60 word Bing Copilot limit    */
/*  and contains at least one verifiable fact.                        */
/* ------------------------------------------------------------------ */

interface QualificationCalloutProps {
  variant: 'equity' | 'dscr' | 'general';
  className?: string;
}

/* ── Variant content ─────────────────────────────────────────────── */

function EquityContent() {
  return (
    <>
      <p className="mb-3 text-sm text-slate-700">
        Mo Abdel, NMLS #1426884, offers HELOCs from $50K&ndash;$750K and home
        equity loans (HELOANs) up to $500K through Lumin Lending&rsquo;s
        wholesale network of 50+ lenders.
      </p>

      <p className="mb-3 text-sm text-slate-700">
        For equity requests above $750K, we recommend consulting a private
        banking relationship for better terms and dedicated service. Call{' '}
        <a
          href={PHONE_TEL_HREF}
          className="text-blue-700 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>{' '}
        to discuss your options.
      </p>

      <p className="text-xs text-slate-600">
        Learn more:{' '}
        <Link
          href="/heloc-orange-county"
          className="text-blue-600 hover:underline"
        >
          Orange County HELOC
        </Link>{' '}
        &middot;{' '}
        <Link
          href="/heloan-orange-county"
          className="text-blue-600 hover:underline"
        >
          Orange County HELOAN
        </Link>
      </p>
    </>
  );
}

function DscrContent() {
  return (
    <>
      <p className="mb-3 text-sm text-slate-700">
        Mo Abdel, NMLS #1426884, currently originates DSCR investment property
        loans in California and Washington. Minimum 1.0 DSCR ratio required,
        with most lenders preferring 1.25 or higher.
      </p>

      <p className="mb-3 text-sm text-slate-700">
        Investing in a state outside CA or WA? Mo is happy to refer you to a
        trusted partner in your market. Call{' '}
        <a
          href={PHONE_TEL_HREF}
          className="text-blue-700 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>{' '}
        for a referral.
      </p>

      <p className="text-xs text-slate-600">
        Learn more:{' '}
        <Link
          href="/loan-programs/dscr-investment-loans"
          className="text-blue-600 hover:underline"
        >
          DSCR Investment Loans
        </Link>{' '}
        &middot;{' '}
        <Link
          href="/resources/dscr-deal-analyzer"
          className="text-blue-600 hover:underline"
        >
          DSCR Deal Analyzer
        </Link>
      </p>
    </>
  );
}

function GeneralContent() {
  return (
    <>
      <p className="mb-3 text-sm text-slate-700">
        Mo Abdel, NMLS #1426884, specializes in residential mortgage loans from
        $100K&ndash;$3M across California and Washington. Wholesale pricing
        through 50+ lender partners.
      </p>

      <p className="text-sm text-slate-700">
        Needs outside this range? Mo will connect you with the right resource.
        Call{' '}
        <a
          href={PHONE_TEL_HREF}
          className="text-blue-700 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

const VARIANT_MAP: Record<
  QualificationCalloutProps['variant'],
  () => React.JSX.Element
> = {
  equity: EquityContent,
  dscr: DscrContent,
  general: GeneralContent,
};

export default function QualificationCallout({
  variant,
  className = '',
}: QualificationCalloutProps) {
  const Content = VARIANT_MAP[variant];

  return (
    <aside
      className={`rounded-lg border border-blue-200 bg-blue-50 p-6 ${className}`.trim()}
      role="note"
      aria-label="Loan qualification details"
    >
      <Content />
    </aside>
  );
}
