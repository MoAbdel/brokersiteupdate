import Script from 'next/script';

interface AlternateUrl {
  url: string;
  hreflang?: string;
  media?: string;
  type?: string;
}

interface CanonicalVerificationProps {
  canonicalUrl: string;
  alternateUrls?: AlternateUrl[];
  noIndex?: boolean;
}

/**
 * CanonicalVerification Component for Next.js App Router
 *
 * Note: In Next.js App Router, canonical URLs and meta tags should be set via
 * the page-level metadata export. This component provides JSON-LD structured
 * data for canonical URL verification.
 *
 * For canonical URLs, use the metadata export in your page:
 * export const metadata: Metadata = {
 *   alternates: {
 *     canonical: 'https://example.com/page',
 *   },
 * }
 */
export default function CanonicalVerification({
  canonicalUrl,
  alternateUrls = [],
}: CanonicalVerificationProps) {

  // Clean and validate canonical URL
  const cleanCanonicalUrl = canonicalUrl.replace(/\/+$/, ''); // Remove trailing slashes

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": cleanCanonicalUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": cleanCanonicalUrl
    },
    ...(alternateUrls.length > 0 && {
      "sameAs": alternateUrls.map(alt => alt.url)
    })
  };

  return (
    <Script
      id="canonical-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
      strategy="afterInteractive"
    />
  );
}