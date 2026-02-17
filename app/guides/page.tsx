import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { allBlogPosts, getAllCategories } from '@/lib/all-blog-posts';
import { buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Mortgage Guides | California & Washington Home Loan Strategies | Mo Abdel',
  description:
    'Browse practical mortgage guides, refinance strategies, and market insights from Mo Abdel for California and Washington buyers, homeowners, and investors.',
  alternates: {
    canonical: 'https://www.mothebroker.com/guides',
    languages: {
      'en-US': 'https://www.mothebroker.com/guides',
      'x-default': 'https://www.mothebroker.com/guides',
    },
  },
};

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/guides',
  title: 'Mortgage Guides | California & Washington Home Loan Strategies | Mo Abdel',
  description:
    'Browse practical mortgage guides, refinance strategies, and market insights from Mo Abdel for California and Washington buyers, homeowners, and investors.',
  breadcrumbName: 'Guides',
});

export default async function GuidesPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }>;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00`);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Next.js 15.5+ provides `searchParams` as an async prop.
  // Await it before reading values to keep this page server-rendered for SEO.
  const sp = (await searchParams) ?? {};

  const categories = getAllCategories();
  const categoryCounts = allBlogPosts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const activeCategory =
    sp.category && categories.includes(sp.category)
      ? sp.category
      : null;

  const filteredPosts = activeCategory
    ? allBlogPosts.filter((p) => p.category === activeCategory)
    : allBlogPosts;

  const PER_PAGE = 12;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PER_PAGE));
  const requestedPage = Number(sp.page || '1');
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(totalPages, Math.max(1, Math.floor(requestedPage)))
    : 1;

  const startIdx = (currentPage - 1) * PER_PAGE;
  const visiblePosts = filteredPosts.slice(startIdx, startIdx + PER_PAGE);

  const buildHref = (nextPage?: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set('category', activeCategory);
    if (nextPage && nextPage > 1) params.set('page', String(nextPage));
    const q = params.toString();
    return q ? `/guides?${q}` : '/guides';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Mortgage <span className="text-blue-600">Guides</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Practical home loan strategy guides for California and Washington buyers and homeowners,
            from loan program comparisons to market-driven refinance decisions.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            {allBlogPosts.length} articles • Updated {formatDate(allBlogPosts[0]?.date || '2026-01-31')}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Link
            href="/guides"
            aria-current={activeCategory ? undefined : 'page'}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              activeCategory
                ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                : 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            All ({allBlogPosts.length})
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/guides?category=${encodeURIComponent(category)}`}
              aria-current={activeCategory === category ? 'page' : undefined}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === category
                  ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {category} ({categoryCounts[category] || 0})
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            Showing {filteredPosts.length === 0 ? 0 : startIdx + 1}-{Math.min(startIdx + PER_PAGE, filteredPosts.length)} of{' '}
            {filteredPosts.length}
            {activeCategory ? ` in ${activeCategory}` : ''}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={buildHref(currentPage - 1)}
              aria-label="Previous page"
              aria-disabled={currentPage <= 1}
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                currentPage <= 1
                  ? 'pointer-events-none opacity-40 border-slate-200 bg-white text-slate-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <span className="text-sm text-slate-600">
              {currentPage}/{totalPages}
            </span>
            <Link
              href={buildHref(currentPage + 1)}
              aria-label="Next page"
              aria-disabled={currentPage >= totalPages}
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                currentPage >= totalPages
                  ? 'pointer-events-none opacity-40 border-slate-200 bg-white text-slate-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <Card key={post.slug} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                    {post.category}
                  </span>
                  {index < 6 && (
                    <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Link
            href={buildHref(currentPage - 1)}
            aria-label="Previous page"
            aria-disabled={currentPage <= 1}
            className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              currentPage <= 1
                ? 'pointer-events-none opacity-40 border-slate-200 bg-white text-slate-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <span className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </span>
          <Link
            href={buildHref(currentPage + 1)}
            aria-label="Next page"
            aria-disabled={currentPage >= totalPages}
            className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              currentPage >= totalPages
                ? 'pointer-events-none opacity-40 border-slate-200 bg-white text-slate-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Link Sections (moved under guides grid) */}
        <section className="mt-10 mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Featured Guides</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/definitive-orange-county-mortgage-guide">
              Definitive Orange County Mortgage Guide
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/mortgage-broker-vs-bank-complete-comparison">
              Mortgage Broker vs Bank (Complete Comparison)
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/orange-county-investment-property">
              Orange County Investment Property Guide
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/spring-2026-home-buying-guide">
              Spring 2026 Home Buying Guide
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/spring-2026-home-buying-guide">
              Spring 2026 Market Guide
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/guides/why-choose-local-mortgage-broker">
              Why Choose a Local Mortgage Broker
            </Link>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loan Program Hubs</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/purchase-loans">
              California &amp; Washington Purchase Loans
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/refinance-loans">
              California &amp; Washington Refinance Loans
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/fha-loans-orange-county">
              FHA Loans (Regional)
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/va-loans-orange-county">
              VA Loans (Regional)
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/heloc-orange-county">
              HELOC (Regional)
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/cash-out-refinance">
              Cash-Out Refinance (Regional)
            </Link>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Refinance City Guides</h2>
          <p className="text-slate-600 mb-4">
            Local refinance breakdowns and cash-out strategies for high-value markets.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/blog/manhattan-beach-cash-out-refinance-2026">
              Manhattan Beach Cash-Out Refinance
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/blog/palos-verdes-cash-out-refinance-2026">
              Palos Verdes Cash-Out Refinance
            </Link>
            <Link className="text-slate-700 hover:text-slate-900 hover:underline" href="/rate-term-refinance-orange-county">
              Rate &amp; Term Refinance (Regional)
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold text-white mb-4">Need Personalized Guidance?</h2>
            <p className="text-slate-200 mb-6">
              Have questions about California or Washington mortgages, loan programs, or market conditions?
              Get personalized advice tailored to your specific situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/15 transition-colors"
              >
                Try Our Calculators
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-slate-600">
          <p>
            <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #2716106
          </p>
          <p className="mt-2">
            Licensed in: CA, WA | Equal Housing Lender
          </p>
        </div>
      </div>
    </div>
  );
}
