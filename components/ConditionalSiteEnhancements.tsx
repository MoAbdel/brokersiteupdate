'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import GEOTracking from '@/components/GEOTracking';
import ChatbotHardReset from '@/components/ChatbotHardReset';
import ExitIntentModal from '@/components/ExitIntentModal';

const ENABLED_PREFIXES = [
  '/contact',
  '/purchase-loans',
  '/refinance-loans',
  '/fha-loans-orange-county',
  '/va-loans-orange-county',
  '/heloc-orange-county',
  '/heloan-orange-county',
  '/cash-out-refinance',
  '/rate-term-refinance-orange-county',
  '/loan-programs',
];

export default function ConditionalSiteEnhancements() {
  const pathname = usePathname();

  const shouldEnable = useMemo(() => {
    if (!pathname) return false;
    if (pathname === '/') return true;
    return ENABLED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  }, [pathname]);

  if (!shouldEnable) {
    return null;
  }

  return (
    <>
      <GEOTracking />
      <ChatbotHardReset />
      <ExitIntentModal />
    </>
  );
}
