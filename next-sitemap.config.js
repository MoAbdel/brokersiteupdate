/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mothebroker.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Next.js 15 App Router only - no pages directory
  outDir: 'public',
  exclude: [
    '/admin/*',
    '/api/*',
    '/dashboard/*',
    '/areas/costa-mesa-mortgage-rates',
    '/areas/irvine-neighborhoods/cypress-village-mortgage-broker',
    '/areas/irvine-neighborhoods/turtle-rock-mortgage-broker',
    '/areas/irvine-neighborhoods/university-park-mortgage-broker',
    '/blog/hermosa-beach-mortgage-guide-2026',
    '/blog/home-equity-bellevue-wa-2026',
    '/blog/home-equity-laguna-beach-2026',
    '/blog/home-equity-mercer-island-2026',
    '/blog/home-equity-newport-beach-2026',
    '/blog/lake-forest-mortgage-guide-2026',
    '/blog/dscr-loans-investment-properties-2026',
    '/blog/non-qm-loans-orange-county-guide-2026',
    '/blog/reverse-mortgage-requirements-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors',
    '/blog/san-juan-capistrano-mortgage-guide-2026',
    '/blog/tustin-mortgage-guide-2026',
    '/blog/villa-park-mortgage-guide-2026',
    '/blog/wholesale-mortgage-broker-92625',
    '/blog/wholesale-mortgage-broker-92651',
    '/blog/wholesale-mortgage-broker-92657',
    '/blog/wholesale-mortgage-broker-92660',
    '/blog/wholesale-mortgage-broker-92661',
    '/blog/wholesale-mortgage-broker-92662',
    '/blog/wholesale-mortgage-broker-92663',
    '/blog/wholesale-mortgage-broker-926*',
    '/guides/orange-county-school-districts',
    '/guides/orange-county-market-forecast-2025-2026',
    '/guides/orange-county-va-loans',
    '/zip-codes/92625-corona-del-mar-mortgage-broker',
    '/tools/mortgage-calculator',
    '/_not-found',
    // Feb 2026 GSC remediation – redirect sources
    '/blog/how-does-heloc-work-2026',
    '/blog/reverse-mortgage-vs-heloc-seniors-2026',
    '/blog/reverse-mortgage-irvine-ca-2026',
    '/blog/reverse-mortgage-mission-viejo-ca-2026',
    '/blog/reverse-mortgage-la-jolla-ca-2026',
    '/blog/wholesale-mortgage-broker-92672',
    '/blog/wholesale-mortgage-broker-92662',
    '/purchase-loans',
    '/luxury-markets',
    '/orange-county-jumbo-loans',
    '/areas/irvine-neighborhoods/northwood-mortgage-broker',
    '/guides/summer-2025-market-guide',
    // Exclude redirect source URLs (these 301 to -2026 versions)
    '/blog/200-lender-advantage',
    '/blog/bank-statement-loans-wholesale',
    '/blog/cash-out-refinance-how-it-works',
    '/blog/how-does-heloc-work',
    '/blog/heloc-vs-home-equity-loan',
    '/blog/mortgage-broker-vs-bank',
    '/blog/non-qm-loans-wholesale-broker',
    '/blog/self-employed-mortgage-broker',
    '/blog/what-is-reverse-mortgage',
    '/blog/wholesale-mortgage-broker-orange-county',
    '/blog/wholesale-mortgage-broker-anaheim',
    '/blog/wholesale-mortgage-broker-costa-mesa',
    '/blog/wholesale-mortgage-broker-yorba-linda',
    '/blog/wholesale-mortgage-broker-92603',
    '/blog/wholesale-vs-retail-mortgage',
    '/articles',
    '/articles/*'
  ],
  robotsTxtOptions: {
    policies: [
      // ===========================================
      // MAJOR SEARCH ENGINES - Explicit Allow
      // ===========================================
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/'
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      },
      {
        userAgent: 'msnbot',
        allow: '/'
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/'
      },
      // ===========================================
      // AI SEARCH / ANSWER ENGINES - Allow for visibility
      // ===========================================
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/'
      },
      {
        userAgent: 'Google-Extended',
        allow: '/'
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/'
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/'
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/'
      },
      {
        userAgent: 'Applebot',
        allow: '/'
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/'
      },
      {
        userAgent: 'cohere-ai',
        allow: '/'
      },
      // ===========================================
      // INDEXNOW PARTNERS - Allow (Yandex, Seznam)
      // ===========================================
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      },
      {
        userAgent: 'SeznamBot',
        allow: '/'
      },
      // ===========================================
      // AI TRAINING CRAWLERS - Block (not search, just training)
      // ===========================================
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'img2dataset', disallow: '/' },
      { userAgent: 'Omgilibot', disallow: '/' },
      { userAgent: 'FacebookBot', disallow: '/' },
      // ===========================================
      // BLOCK CHINESE SEARCH ENGINES (low value traffic)
      // ===========================================
      { userAgent: 'Baiduspider', disallow: '/' },
      { userAgent: 'Baiduspider-image', disallow: '/' },
      { userAgent: 'Baiduspider-video', disallow: '/' },
      { userAgent: 'Baiduspider-news', disallow: '/' },
      { userAgent: 'Sogou web spider', disallow: '/' },
      { userAgent: 'Sogou inst spider', disallow: '/' },
      { userAgent: 'Sogou spider2', disallow: '/' },
      { userAgent: 'Sogou blog', disallow: '/' },
      { userAgent: 'Sogou News Spider', disallow: '/' },
      { userAgent: 'Sogou Orion spider', disallow: '/' },
      { userAgent: '360Spider', disallow: '/' },
      { userAgent: 'HaoSouSpider', disallow: '/' },
      { userAgent: 'YisouSpider', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // ===========================================
      // DEFAULT - Allow all others
      // ===========================================
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      }
    ],
    additionalSitemaps: [
      'https://www.mothebroker.com/sitemap-images.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority and change frequency based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    // Home page - highest priority
    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    }

    // Main loan program pages - high priority
    else if (path.startsWith('/loan-programs/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // City/area pages - high priority for local SEO
    else if (path.startsWith('/areas/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // Guides and resources - high priority content
    else if (path.startsWith('/guides/') || path.startsWith('/resources/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    // Legal/policy pages - important brand content
    else if (path === '/cookie-policy' || path === '/privacy-policy' || path === '/terms-of-service') {
      priority = 0.6;
      changefreq = 'monthly';
    }

    // Tools/calculators - medium-high priority
    else if (path.startsWith('/calculator') || path.startsWith('/tools/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Contact and about pages - important
    else if (path === '/contact' || path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Neighborhood guides and luxury markets
    else if (path.startsWith('/neighborhood-guide/') || path.startsWith('/luxury-markets/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    // Zip code pages - lower priority
    else if (path.startsWith('/zip-codes/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    // City-specific loan program pages (e.g., fha-loans-irvine)
    else if (path.includes('-irvine') || path.includes('orange-county')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    // IMPORTANT: All pages MUST have lastmod for Google to track freshness
    // Without lastmod, Google deprioritizes crawling
    const currentDate = new Date().toISOString();

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: currentDate,  // All pages get lastmod now
      alternateRefs: []
    };
  },

  // Additional static paths that might not be automatically discovered
  additionalPaths: async (config) => {
    const additionalPaths = [
      // Home page - ensure it's included
      '/',

      // Area pages
      '/areas/irvine',
      '/areas/mission-viejo',
      '/areas/newport-beach',
      '/areas/newport-beach-neighborhoods',
      '/areas/irvine-neighborhoods',

      // Main loan program pages (proper /loan-programs/ structure)
      '/loan-programs',
      '/loan-programs/conventional-loans',
      '/loan-programs/fha-loans',
      '/loan-programs/va-refinance',
      '/loan-programs/jumbo-loans',
      '/loan-programs/heloc',
      '/loan-programs/heloan',
      '/loan-programs/non-qm-loans',
      '/loan-programs/bank-statement-loans',
      '/loan-programs/dscr-investment-loans',
      '/loan-programs/asset-depletion-loans',
      // '/loan-programs/foreign-national-loans', // Removed - noindex page
      '/loan-programs/usda-rural-loans',
      '/loan-programs/fix-flip-loans',
      '/loan-programs/profit-loss-statement-loans',

      // Legacy/SEO landing pages
      '/fha-loans-orange-county',
      '/va-loans-orange-county',
      '/conventional-loans-orange-county',
      '/heloc-orange-county',
      '/heloan-orange-county',
      '/non-qm-loans-orange-county',
      '/rate-term-refinance-orange-county',
      '/jumbo-loans-orange-county',
      // Blog Posts (All 20)
      '/blog/newport-beach-mortgage-guide-2026',
      '/blog/laguna-beach-mortgage-guide-2026',
      '/blog/dana-point-mortgage-guide-2026',
      '/blog/fha-loans-orange-county-2026',
      '/blog/wholesale-vs-retail-mortgage-brokers-2026',
      '/blog/san-clemente-mortgage-guide-2026',
      '/blog/irvine-mortgage-guide-2026',
      '/blog/newport-coast-mortgage-guide-2026',
      '/blog/va-loans-orange-county-2026',
      '/blog/jumbo-loans-orange-county-2026',
      '/blog/corona-del-mar-refinance-guide-2026',
      '/blog/huntington-beach-refinance-guide-2026',
      '/blog/laguna-niguel-refinance-guide-2026',
      '/blog/strategic-refinancing-home-equity-2026',
      '/blog/heloan-vs-cash-out-refinance-2026',
      '/blog/mission-viejo-mortgage-guide-2026',
      '/blog/ladera-ranch-mortgage-guide-2026',
      '/blog/rancho-santa-margarita-mortgage-guide-2026',

      // Resources
      '/resources/mortgage-glossary',
      '/resources/document-checklist',
      '/resources/service-providers',
      '/resources/market-data',
      '/resources/comprehensive-mortgage-faq',
      '/resources/down-payment-assistance',
      '/resources/credit-repair',

      // Privacy and legal pages
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy'
    ];

    return additionalPaths.map((path) => ({
      loc: path,
      changefreq: path === '/' ? 'daily' : (path.startsWith('/blog/') ? 'weekly' : 'monthly'),
      priority: path === '/' ? 1.0 : (path.startsWith('/blog/') ? 0.7 : 0.6),
      lastmod: new Date().toISOString(),
    }));
  }
};