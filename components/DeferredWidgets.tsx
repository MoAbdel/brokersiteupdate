'use client';

import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false });
const FacebookPixel = dynamic(() => import('@/components/FacebookPixel'), { ssr: false });
const MobileStickyCallButton = dynamic(() => import('@/components/MobileStickyCallButton'), { ssr: false });
const SupportBubble = dynamic(() => import('@/components/SupportBubble'), { ssr: false });
const ExitIntentModal = dynamic(() => import('@/components/ExitIntentModal'), { ssr: false });
const ConditionalSiteEnhancements = dynamic(() => import('@/components/ConditionalSiteEnhancements'), { ssr: false });

export default function DeferredWidgets() {
  return (
    <>
      <GoogleAnalytics />
      <FacebookPixel />
      <ConditionalSiteEnhancements />
      <ExitIntentModal />
      <SupportBubble />
      <MobileStickyCallButton />
    </>
  );
}
