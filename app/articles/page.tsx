import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Articles & Expert Insights | Mo Abdel',
  description: 'Expert mortgage broker insights on Orange County real estate financing. In-depth articles covering FHA loans, VA loans, jumbo mortgages, refinancing, and first-time homebuyer strategies.',
  openGraph: {
    title: 'Orange County Mortgage Articles | Expert Real Estate Financing Insights',
    description: 'Professional insights on Orange County mortgage markets, loan programs, and homebuying strategies from experienced broker Mo Abdel.',
    images: ['/images/mo-headshot.webp'],
    url: 'https://www.mothebroker.com/articles',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/articles',
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: 'Orange County Mortgage Market Update: August 2026 Wholesale Analysis',
      slug: 'orange-county-mortgage-rate-trends-august-2026',
      description: 'Stay ahead of the market with our August 2026 analysis of Orange County mortgage dynamics. Compare wholesale vs. retail pricing.',
      category: 'Expert Guide',
      readTime: '8 min read',
      publishDate: 'Aug 30, 2026',
      featured: true,
      image: '/images/blog-rate-trends.png',
    },
    {
      title: 'Wholesale vs. Retail Mortgages: The Pricing Advantage',
      slug: 'wholesale-vs-retail-mortgages-comparison',
      description: 'Understand the critical difference between wholesale and retail mortgage channels and why it matters for your wallet.',
      category: 'Mortgage Brokers',
      readTime: '9 min read',
      publishDate: 'Aug 28, 2026',
      featured: false,
      image: '/images/blog-wholesale.png',
    },
    {
      title: 'Dana Point First-Time Homebuyer Guide: Programs & Qualification',
      slug: 'dana-point-first-time-homebuyer-guide',
      description: 'Start your homeownership journey in Dana Point with our comprehensive 2026 guide for first-time buyers.',
      category: 'First-Time Buyers',
      readTime: '11 min read',
      publishDate: 'Aug 25, 2026',
      featured: false,
      image: '/images/blog-dana-point.png',
    },
    {
      title: 'Laguna Beach Jumbo Loan Guide: Luxury Financing Specialist',
      slug: 'laguna-beach-jumbo-loan-guide',
      description: 'Expert jumbo loan guidance for Laguna Beach luxury real estate. Specialized financing for coastal estates.',
      category: 'Jumbo Loans',
      readTime: '10 min read',
      publishDate: 'Aug 22, 2026',
      featured: false,
      image: '/images/blog-laguna.png',
    },
    {
      title: 'Newport Beach Mortgage Guide 2026: Top Options & Lenders',
      slug: 'newport-beach-mortgage-guide-2026',
      description: 'Navigate the Newport Beach luxury real estate market with our comprehensive 2026 mortgage guide.',
      category: 'Local Guides',
      readTime: '12 min read',
      publishDate: 'Aug 20, 2026',
      featured: false,
      image: '/images/blog-newport.png',
    },
    {
      title: 'Best Mortgage Broker in Orange County',
      slug: 'best-mortgage-broker-orange-county',
      description: 'Discover what makes Mo Abdel the top choice for Orange County homebuyers and refinancers, with expert insights and proven results.',
      category: 'Expert Guide',
      readTime: '4 min read',
      publishDate: 'Sep 25, 2026',
      featured: false,
      image: '/images/blog-1.png',
    },
    {
      title: 'First-Time Homebuyer Mortgage Guide for Orange County',
      slug: 'first-time-homebuyer-mortgage-orange-county',
      description: 'Complete guide for first-time homebuyers in Orange County, including loan programs, down payment assistance, and expert tips.',
      category: 'First-Time Buyers',
      readTime: '6 min read',
      publishDate: 'Sep 20, 2026',
      featured: false,
      image: '/images/blog-2.png',
    },
    {
      title: 'Orange County Mortgage Refinance Specialist',
      slug: 'orange-county-mortgage-refinance-specialist',
      description: 'Learn about refinancing options in Orange County with expert guidance on market timing and maximizing your savings.',
      category: 'Refinancing',
      readTime: '5 min read',
      publishDate: 'Sep 18, 2026',
      featured: false,
      image: '/images/blog-3.png',
    },
    {
      title: 'Jumbo Loan Broker in Orange County',
      slug: 'jumbo-loan-broker-orange-county',
      description: 'Expert guidance on jumbo loans in Orange County, including qualification requirements and Competitive pricing.',
      category: 'Jumbo Loans',
      readTime: '7 min read',
      publishDate: 'Sep 15, 2026',
      featured: false,
      image: '/images/blog-4.png',
    },
    {
      title: 'VA Loan Mortgage Broker in Orange County',
      slug: 'va-loan-mortgage-broker-orange-county',
      description: 'Specialized VA loan services for Orange County veterans and active military members with zero down payment options.',
      category: 'VA Loans',
      readTime: '5 min read',
      publishDate: 'Sep 12, 2026',
      featured: false,
      image: '/images/blog-5.png',
    },
  ];

  return (
    <>
      <AdvancedSchemaMarkup type="FinancialService" />

      <main className="min-h-screen bg-white">
        {/* Clean Header */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Mortgage News, Tips, and Insights
              </h1>
              <div className="flex justify-end">
                <Link
                  href="/articles"
                  className="text-slate-600 border border-slate-300 px-4 py-2 rounded-full text-sm hover:bg-slate-50 transition"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-2xl relative overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="text-slate-600 text-sm">
                  {articles[0].publishDate}
                </div>

                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  {articles[0].title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {articles[0].description}
                </p>

                <Link
                  href={`/articles/${articles[0].slug}`}
                  className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group"
                >
                  <article className="space-y-4">
                    {/* Image */}
                    <div className="aspect-video rounded-xl overflow-hidden relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="text-slate-500 text-sm">
                        {article.publishDate}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}