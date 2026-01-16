'use client';

import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';

export default function MobileStickyCallButton() {
  const { trackPhoneCall } = useFacebookTracking();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the button in this session
    const dismissed = sessionStorage.getItem('callButtonDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show button after user scrolls down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('callButtonDismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Mobile Only - Always Sticky Call Button */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
          <a
            href="tel:(949) 822-9662"
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
              <span className="block text-[10px] font-normal text-green-100 uppercase tracking-wider leading-none mb-1">Tap to Call Mo Abdel</span>
              <span className="block text-xl font-black leading-none uppercase tracking-tight">(949) 822-9662</span>
            </div>
          </a>
        </div>
      </div>

      {/* Desktop - Floating Call Button (Bottom Right) - Only shown on scroll */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-32'
          }`}
      >
        <a
          href="tel:(949) 822-9662"
          className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          onClick={() => {
            trackPhoneCall();
            // Track conversion event
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'click_to_call', {
                event_category: 'engagement',
                event_label: 'Desktop Floating Button'
              });
            }
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
          </div>
          <div className="text-left">
            <div className="text-xs font-normal text-green-100">Call Now</div>
            <div className="text-lg font-bold">(949) 822-9662</div>
          </div>
        </a>
      </div>
    </>
  );
}
