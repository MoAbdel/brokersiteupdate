import type { Metadata } from 'next';
import { generateCanonicalUrl } from './canonical';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  path,
  image = '/images/mo-headshot.jpg',
  type = 'website',
  noindex = false
}: SEOMetadata): Metadata {
  const baseUrl = 'https://www.mothebroker.com';
  const canonicalUrl = generateCanonicalUrl(path);
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const robots = noindex
    ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1 as const,
          'max-image-preview': 'large' as const,
          'max-snippet': -1 as const,
        },
      };

  return {
    title,
    description,
    keywords,
    robots,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Mo Abdel - Mortgage Broker',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl]
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'article:author': 'Mo Abdel',
      'article:publisher': 'https://www.mothebroker.com'
    }
  };
}

// Helper function to generate consistent page URLs
export function createCanonicalUrl(path: string): string {
  return generateCanonicalUrl(path.startsWith('/') ? path : `/${path}`);
}