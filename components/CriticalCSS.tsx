'use client';

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Preload and defer non-critical CSS after initial render
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '/_next/static/css/app/layout.css';

    const handleLoad = () => {
      link.removeEventListener('load', handleLoad);
      link.rel = 'stylesheet';
    };

    link.addEventListener('load', handleLoad);
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      link.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
}