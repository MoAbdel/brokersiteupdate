import type { Metadata } from 'next';
import { generateCanonicalUrl } from './canonical';
import routePolicy from './seo-route-policy';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  dateModified?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  path,
  image = '/images/mo-headshot-v2.jpg',
  type = 'website',
  noindex = false,
  dateModified,
}: SEOMetadata): Metadata {
  const baseUrl = 'https://www.mothebroker.com';
  const canonicalUrl = generateCanonicalUrl(path);
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const policy = routePolicy.getRoutePolicy(path);
  const policyRobotsDirective = policy.robotsDirective;
  const shouldNoindex = noindex || policy.indexingBucket === routePolicy.ROUTE_POLICY_BUCKETS.NOINDEX;
  const shouldFollow = policyRobotsDirective ? !policyRobotsDirective.includes('nofollow') : true;

  const robots = shouldNoindex
    ? {
        index: false,
        follow: shouldFollow,
        googleBot: { index: false, follow: shouldFollow },
        bingbot: { index: false, follow: shouldFollow },
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
        bingbot: {
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
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'article:author': 'Mo Abdel',
      'article:publisher': 'https://www.mothebroker.com',
      ...(dateModified
        ? {
            'article:modified_time': dateModified,
            'og:updated_time': dateModified,
          }
        : {}),
    }
  };
}

// Helper function to generate consistent page URLs
export function createCanonicalUrl(path: string): string {
  return generateCanonicalUrl(path.startsWith('/') ? path : `/${path}`);
}
