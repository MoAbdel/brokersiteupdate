import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeferredWidgets from '@/components/DeferredWidgets';
import { siteRootSchema } from '@/lib/seo';
import { Analytics } from '@vercel/analytics/next';
import './globals-simple.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mo Abdel | CA & WA Mortgage Broker | NMLS #1426884',
  description: 'Mortgage broker serving CA and WA with 200+ lenders. Fast closings for FHA, VA, conventional, non-QM and investor loans. NMLS #1426884.',
  keywords: [
    'California mortgage broker',
    'Washington mortgage broker',
    'Orange County mortgage broker',
    'wholesale mortgage lender',
    'FHA loans California',
    'VA loans California',
    'jumbo loans California',
    'DSCR loans California',
    'refinance California',
    'mortgage rates Washington',
  ],
  metadataBase: new URL('https://www.mothebroker.com'),
  alternates: {
    canonical: 'https://www.mothebroker.com',
    languages: {
      'en-US': 'https://www.mothebroker.com',
      'x-default': 'https://www.mothebroker.com',
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CA & WA Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Competitive mortgage pricing from 200+ lenders across CA and WA. Fast closings, unbiased advice, flexible home loan programs.',
    url: 'https://www.mothebroker.com',
    siteName: 'Mo Abdel | Mortgage Broker',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CA & WA Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Competitive mortgage pricing from 200+ lenders. Fast closings, unbiased advice, flexible home loan programs.',
    creator: '@mothebroker',
    site: '@mothebroker',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="base44" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="gje53lhRpuQPVaMLhtYAUYdO8ciKzx8APLNwNVhcT1A" />
        <meta name="msvalidate.01" content="F9E3BEE43DFA5A2B0676F3881B448BCA" />
        {/* Canonical URL will be handled by individual pages */}
        <link rel="manifest" href="/manifest.json" />

        {/* DNS prefetch for deferred 3rd-party scripts */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />

        {/* Critical mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0f172a" />

        {/* Additional best practices meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Local SEO / Geo Tags - Critical for Bing Local Search */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="California and Washington" />



        <meta name="deployment-id" content="favicon-removed-final-dec16-2025" />
      </head>
      <body className={`min-h-screen ${inter.className}`}>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <DeferredWidgets />
        <Analytics />

        {/* Site-wide structured data: entity graph + loan catalog */}
        <script
          id="site-root-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteRootSchema)
          }}
        />
      </body>
    </html>
  );
}