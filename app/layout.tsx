import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import GEOTracking from '@/components/GEOTracking';
import FixedChatbot from '@/components/FixedChatbot';
import ChatbotHardReset from '@/components/ChatbotHardReset';
import MobileStickyCallButton from '@/components/MobileStickyCallButton';
import ExitIntentModal from '@/components/ExitIntentModal';
import Script from 'next/script';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mo Abdel | Orange County Mortgage Broker | NMLS #1426884',
  description: 'Expert Orange County mortgage broker with 100+ lenders. Fast closings for FHA, VA, Conventional & Non-QM loans. Mo Abdel, NMLS #1426884.',
  keywords: [
    'Orange County mortgage broker',
    'Irvine mortgage broker',
    'wholesale mortgage lender',
    'FHA loans Orange County',
    'VA loans Orange County',
    'jumbo loans Orange County',
    'refinance Orange County',
    'mortgage rates Orange County',
  ],
  metadataBase: new URL('https://www.mothebroker.com'),
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage pricing from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    url: 'https://www.mothebroker.com',
    siteName: 'Mo Abdel | Mortgage Broker',
    images: [
      {
        url: '/images/mo-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Orange County Mortgage Broker - Mo Abdel NMLS #1426884',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage pricing from 200+ lenders. Fast closings, unbiased advice, flexible home loan programs.',
    images: ['/images/mo-headshot.jpg'],
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

        {/* Prevent www redirect issues */}
        <meta name="robots" content="index, follow" />

        {/* Optimized resource hints for critical path */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        {/* CRITICAL: Optimize resource loading to prevent render blocking */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />

        {/* CRITICAL: Preload key images for LCP optimization with dimensions for CLS prevention */}
        <link rel="preload" href="/images/mo-headshot.jpg" as="image" type="image/jpeg" media="(min-width: 640px)" />

        {/* Critical: Image dimension hints to prevent CLS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-image-container { width: 100%; height: 400px; }
            @media (min-width: 768px) { .hero-image-container { height: 500px; } }
            @media (min-width: 1024px) { .hero-image-container { height: 600px; } }
          `
        }} />

        {/* Critical mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1e40af" />

        {/* Additional best practices meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Local SEO / Geo Tags - Critical for Bing Local Search */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Irvine, Orange County" />
        <meta name="geo.position" content="33.6846;-117.8265" />
        <meta name="ICBM" content="33.6846, -117.8265" />



        {/* Hreflang tags - US only targeting */}
        <link rel="alternate" hrefLang="en-US" href="https://www.mothebroker.com" />

        <AdvancedSchemaMarkup type="Organization" />
        <meta name="deployment-id" content="favicon-removed-final-dec16-2025" />
      </head>
      <body className={`min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
        <FacebookPixel />
        <GEOTracking />
        <ChatbotHardReset />
        <MobileStickyCallButton />
        <ExitIntentModal />

        {/* Combined structured data - single script for better performance */}
        <Script
          id="combined-structured-data"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([structuredData, mortgageLoanSchema])
          }}
        />
      </body>
    </html>
  );
}