'use client';

import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export default function MobileStickyCallButton() {
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
      {/* Mobile Only - Sticky Call Button */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl">
          <div className="relative">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-10 right-2 bg-slate-900/80 text-white rounded-full p-2 hover:bg-slate-900"
              aria-label="Dismiss call button"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Call Button */}
            <a
              href="tel:+19495372357"
              className="flex items-center justify-center gap-3 px-6 py-4 font-bold text-lg"
              onClick={() => {
                // Track conversion event
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click_to_call', {
                    event_category: 'engagement',
                    event_label: 'Mobile Sticky Button'
                  });
                }
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <Phone className="w-6 h-6 text-green-600 animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-xs font-normal text-green-100">Tap to Call Mo Abdel</div>
                <div className="text-xl font-bold">(949) 537-2357</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop - Floating Call Button (Bottom Right) */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-32'
        }`}
      >
        <a
          href="tel:+19495372357"
          className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          onClick={() => {
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
            <div className="text-lg font-bold">(949) 537-2357</div>
          </div>
        </a>
      </div>
    </>
  );
}
