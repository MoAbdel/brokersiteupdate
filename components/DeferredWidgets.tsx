'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { HomeEquityFloatingCTA } from '@/components/HomeEquityFloatingCTA';

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false });
const FacebookPixel = dynamic(() => import('@/components/FacebookPixel'), { ssr: false });
const MobileStickyCallButton = dynamic(() => import('@/components/MobileStickyCallButton'), { ssr: false });
const ExitIntentModal = dynamic(() => import('@/components/ExitIntentModal'), { ssr: false });
const ConditionalSiteEnhancements = dynamic(() => import('@/components/ConditionalSiteEnhancements'), { ssr: false });
const AccessibilityWidget = dynamic(() => import('@/components/AccessibilityWidget'), { ssr: false });
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), { ssr: false });

export default function DeferredWidgets() {
  const pathname = usePathname();
  const isWholesaleLanding = pathname === '/';

  return (
    <>
      <GoogleAnalytics />
      <FacebookPixel />
      {isWholesaleLanding ? (
        <>
          <ExitIntentModal />
          <HomeEquityFloatingCTA />
          <AccessibilityWidget />
        </>
      ) : (
        <>
          <ConditionalSiteEnhancements />
          <ExitIntentModal />
          <HomeEquityFloatingCTA />
          <MobileStickyCallButton />
          <AccessibilityWidget />
          <CookieBanner />
        </>
      )}
    </>
  );
}
