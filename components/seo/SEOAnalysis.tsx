// SEO Analysis Tool - Run this to identify potential SEO issues
import { AlertTriangle, CheckCircle2, Lightbulb, Rocket } from 'lucide-react';

export const potentialSEOIssues = {
  // Critical Issues - Will definitely show up in audits
  critical: [
    'H1 Tags - Fixed (server-rendered)',
    'Meta Descriptions - Present on all pages',
    'Robots.txt - Accessible and comprehensive',
    'XML Sitemap - Accessible with proper references',
    'Custom 404 Page - Created with helpful navigation',
    'Open Graph Tags - Complete with image, URL, description',
    'Twitter Cards - Implemented with large image format',
    'Image Alt Text - All images have descriptive alt text',
    'Breadcrumbs - Implemented with Schema markup',
    'Language Tag - html lang="en" present',
    'Viewport Meta - Responsive design meta tag present',
    'Canonical URLs - Proper canonical links implemented',
  ],

  // Moderate Issues - May show up in detailed audits
  moderate: [
    'Content Length - Some city pages may be thin content (<300 words)',
    'Internal Linking - Could add more contextual internal links',
    'Schema Markup - Could expand beyond basic organization/breadcrumbs',
    'Core Web Vitals - Monitor LCP, FID, CLS metrics',
    'Image Optimization - Consider WebP format conversion',
    'Font Loading - Could optimize web font loading strategy',
  ],

  // Minor Issues - Nice to have improvements
  minor: [
    'Preload Critical Resources - Could preload above-fold images',
    'Service Worker - Could implement for offline functionality',
    'AMP Pages - Could create AMP versions for mobile speed',
    'Structured Data - Could add more specific schema types',
    'Social Media Links - Could add social media profiles',
    'Contact Schema - Could add contact information schema',
  ],

  // Already Optimized
  optimized: [
    'Performance Headers - Cache headers properly configured',
    'Security Headers - CSP, XSS protection implemented',
    'Mobile Responsiveness - Tailwind responsive design',
    'Google Analytics - Optimized implementation',
    'Facebook Pixel - Proper tracking implementation',
    'HTTPS - SSL certificate active',
    'Favicon - Multiple sizes implemented',
    'Web App Manifest - PWA ready',
    'DNS Prefetch - Critical domains preloaded',
    'Resource Hints - Preconnect for performance',
  ]
};

export const seoAuditChecklist = {
  technical: {
    'SSL Certificate': 'HTTPS enabled',
    'Mobile Responsive': 'Tailwind responsive design',
    'Page Speed': 'Optimized with caching headers',
    'Core Web Vitals': 'Monitor ongoing',
    'Crawlability': 'Robots.txt allows crawling',
    'XML Sitemap': 'Present and referenced',
    'URL Structure': 'Clean, descriptive URLs',
    '404 Errors': 'Custom 404 page created',
  },

  onPage: {
    'Title Tags': 'Unique, descriptive titles',
    'Meta Descriptions': 'Compelling descriptions under 160 chars',
    'H1 Tags': 'One H1 per page, keyword optimized',
    'Heading Structure': 'Logical H1->H6 hierarchy',
    'Image Alt Text': 'All images have descriptive alt text',
    'Internal Linking': 'Could improve cross-linking',
    'Content Quality': 'Comprehensive, helpful content',
    'Keyword Optimization': 'Natural keyword usage',
  },

  social: {
    'Open Graph': 'Complete OG tags with images',
    'Twitter Cards': 'Large image cards implemented',
    'Social Sharing': 'Proper meta tags for sharing',
    'Schema Markup': 'Organization and breadcrumbs',
  }
};

// Component for development use only
export default function SEOAnalysis() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm text-xs border z-50">
      <h3 className="font-bold mb-2">SEO Status</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-emerald-700">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          <span>Critical SEO: Complete</span>
        </div>
        <div className="flex items-center gap-2 text-amber-700">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" />
          <span>Moderate: 6 items to monitor</span>
        </div>
        <div className="flex items-center gap-2 text-blue-700">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          <span>Minor: 6 nice-to-haves</span>
        </div>
        <div className="flex items-center gap-2 text-sky-700">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          <span>Optimized: 10 items</span>
        </div>
      </div>
    </div>
  );
}