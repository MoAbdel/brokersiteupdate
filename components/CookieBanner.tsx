'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="hidden sm:flex fixed bottom-0 left-0 right-0 z-[99999] bg-slate-900 border-t border-slate-700 px-4 py-3 flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
    >
      <p className="text-slate-300 text-sm flex-1">
        We use cookies to improve your experience and analyze site traffic.{' '}
        <Link href="/cookie-policy" className="text-blue-400 underline hover:text-blue-300">
          Learn more
        </Link>
      </p>
      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={decline}
          className="px-4 py-2 text-sm text-slate-400 border border-slate-600 rounded-lg hover:border-slate-400 hover:text-slate-200 transition-colors"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
