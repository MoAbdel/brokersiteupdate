'use client';

import type { DSCRFullReport } from '@/lib/geo-data/types';

interface Props {
  report: DSCRFullReport;
  locationLabel: string;
  stateName: string;
  loanType: 'amortizing' | 'interest-only';
}

export default function DscrQualificationReport(_props: Props) {
  return <div>Report placeholder</div>;
}
