import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Clock } from 'lucide-react';
import { allBlogPosts, categoryColors, getAllCategories } from '@/lib/all-blog-posts';
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

export default function GuidesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00`);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const categories = getAllCategories();

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
          {categories.map((category) => (
            <span
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category] || 'bg-gray-100 text-gray-700'}`}
            >
              {category} ({allBlogPosts.filter(p => p.category === category).length})
            </span>
          ))}
        </div>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Featured Guides</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-blue-700 hover:underline" href="/guides/definitive-orange-county-mortgage-guide">
              Definitive Orange County Mortgage Guide
            </Link>
            <Link className="text-blue-700 hover:underline" href="/guides/mortgage-broker-vs-bank-complete-comparison">
              Mortgage Broker vs Bank (Complete Comparison)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/guides/orange-county-investment-property">
              Orange County Investment Property Guide
            </Link>
            <Link className="text-blue-700 hover:underline" href="/guides/spring-2026-home-buying-guide">
              Spring 2026 Home Buying Guide
            </Link>
            <Link className="text-blue-700 hover:underline" href="/guides/spring-2026-home-buying-guide">
              Spring 2026 Market Guide
            </Link>
            <Link className="text-blue-700 hover:underline" href="/guides/why-choose-local-mortgage-broker">
              Why Choose a Local Mortgage Broker
            </Link>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loan Program Hubs</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-blue-700 hover:underline" href="/purchase-loans">
              California &amp; Washington Purchase Loans
            </Link>
            <Link className="text-blue-700 hover:underline" href="/refinance-loans">
              California &amp; Washington Refinance Loans
            </Link>
            <Link className="text-blue-700 hover:underline" href="/fha-loans-orange-county">
              FHA Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/va-loans-orange-county">
              VA Loans (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/heloc-orange-county">
              HELOC (Regional)
            </Link>
            <Link className="text-blue-700 hover:underline" href="/cash-out-refinance">
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
            <Link className="text-blue-700 hover:underline" href="/blog/manhattan-beach-cash-out-refinance-2026">
              Manhattan Beach Cash-Out Refinance
            </Link>
            <Link className="text-blue-700 hover:underline" href="/blog/palos-verdes-cash-out-refinance-2026">
              Palos Verdes Cash-Out Refinance
            </Link>
            <Link className="text-blue-700 hover:underline" href="/rate-term-refinance-orange-county">
              Rate &amp; Term Refinance (Regional)
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogPosts.map((post, index) => (
            <Card key={post.slug} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                    {post.category}
                  </span>
                  {index < 6 && (
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Personalized Guidance?</h2>
            <p className="text-slate-600 mb-6">
              Have questions about California or Washington mortgages, loan programs, or market conditions?
              Get personalized advice tailored to your specific situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
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
