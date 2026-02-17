'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';
import SupportBubble from '@/components/SupportBubble';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

export default function MobileStickyCallButton() {
  // Force recompile to fix hydration mismatch
  const { trackPhoneCall } = useFacebookTracking();
  const pathname = usePathname();

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const showSupportBubble = useMemo(() => {
    if (!pathname) return false;
    if (pathname === '/') return true;
    return [
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
    ].some((prefix) => pathname.startsWith(prefix));
  }, [pathname]);

  return (
    <>
      {/* Mobile Only - Always Sticky Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999999] w-full [transform:translateZ(0)] [backface-visibility:hidden] [will-change:transform]">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-bottom-padding">
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center justify-center gap-3 px-6 py-4 font-bold"
            onClick={() => {
              trackPhoneCall();
              // Track conversion event
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_to_call', {
                  event_category: 'engagement',
                  event_label: 'Mobile Sticky Permanent'
                });
              }
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-inner">
              <Phone className="w-5 h-5 text-green-600 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-normal text-slate-200 uppercase tracking-wider leading-none mb-1">Tap to Call Mo Abdel</span>
              <span className="block text-xl font-black leading-none uppercase tracking-tight">{PHONE_DISPLAY}</span>
            </div>
          </a>
        </div>
      </div>

      {/* Desktop - Support Bubble - Client Only */}
      {isMounted && showSupportBubble && <SupportBubble />}
    </>
  );
}
