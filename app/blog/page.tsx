import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Mo Abdel - Orange County Mortgage Broker',
  description: 'Orange County mortgage broker offering competitive rates and expert guidance. Licensed NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/blog',
  },
};

const blogPosts = [
    {
        slug: 'corona-del-mar-refinance-guide-2026',
        title: 'Corona del Mar Refinance & Cash-Out Guide 2026: Tapping Coastal Equity',
        excerpt: 'Expert guidance on refinancing and tapping into home equity for Corona del Mar properties. Learn about wholesale cash-out strategies for luxury coastal estates in 2026.',
        date: '2026-01-15',
        category: 'Refinance',
        readTime: '12 min read',
    },
    {
        slug: 'huntington-beach-refinance-guide-2026',
        title: 'Huntington Beach Refinance & Cash-Out Guide 2026: HB Equity Analysis',
        excerpt: 'Expert guidance on refinancing and tapping into home equity for Huntington Beach properties. Learn about wholesale strategies for HB homeowners in 2026.',
        date: '2026-01-14',
        category: 'Refinance',
        readTime: '11 min read',
    },
    {
        slug: 'laguna-niguel-refinance-guide-2026',
        title: 'Laguna Niguel Refinance & Cash-Out Guide 2026: Suburban Equity Strategy',
        excerpt: 'Expert guidance on refinancing and tapping into home equity for Laguna Niguel properties. Learn about wholesale cash-out options for LN families in 2026.',
        date: '2026-01-13',
        category: 'Refinance',
        readTime: '10 min read',
    },
    {
        slug: 'strategic-refinancing-home-equity-2026',
        title: 'Strategic Refinancing & Home Equity 2026: Rate vs. Utility Analysis',
        excerpt: 'Expert analysis on refinancing strategies in 2026. Learn about the wholesale advantage, market timing, and maximizing home equity for long-term wealth.',
        date: '2026-01-12',
        category: 'Education',
        readTime: '13 min read',
    },
    {
        slug: 'heloan-vs-cash-out-refinance-2026',
        title: 'HELOAN vs. Cash-Out Refinance 2026: Choosing Your Equity Strategy',
        excerpt: 'Detailed comparison of Home Equity Loans (HELOANs) and Cash-Out Refinances in 2026. Expert advice on how to tap into your Southern California equity.',
        date: '2026-01-11',
        category: 'Education',
        readTime: '12 min read',
    },
    {
        slug: 'san-clemente-mortgage-guide-2026',
        title: 'San Clemente Mortgage Guide 2026: Coastal Living & VA Loan Expertise',
        excerpt: 'Discover the San Clemente mortgage landscape in 2026. Expert guidance on VA loans near Camp Pendleton and wholesale pricing for coastal luxury homes.',
        date: '2026-01-10',
        category: 'Local Guides',
        readTime: '11 min read',
    },
    {
        slug: 'irvine-mortgage-guide-2026',
        title: 'Irvine Mortgage Guide 2026: OC\'s Tech & Master-Planned Hub',
        excerpt: 'Expert mortgage guidance for Irvine properties. Learn about wholesale pricing for master-planned communities and competitive financing for tech professionals.',
        date: '2026-01-09',
        category: 'Local Guides',
        readTime: '10 min read',
    },
    {
        slug: 'newport-coast-mortgage-guide-2026',
        title: 'Newport Coast Mortgage Guide 2026: Luxury Financing',
        excerpt: 'Expert mortgage guidance for Newport Coast estates. Discover exclusive wholesale jumbo programs and asset-based lending for ultra-luxury coastal properties.',
        date: '2026-01-08',
        category: 'Local Guides',
        readTime: '12 min read',
    },
    {
        slug: 'va-loans-orange-county-2026',
        title: 'VA Loans in Orange County 2026: Complete Guide for Veterans',
        excerpt: 'Master the VA loan process in Orange County. Learn about zero-down payment benefits, wholesale rate advantages, and eligibility requirements for 2026.',
        date: '2026-01-07',
        category: 'Loan Programs',
        readTime: '13 min read',
    },
    {
        slug: 'jumbo-loans-orange-county-2026',
        title: 'Jumbo Loans in Orange County 2026: Luxury Home Financing Guide',
        excerpt: 'Expert guide to jumbo loans in Orange County. Learn about conforming loan limits, wholesale jumbo advantages, and sophisticated financing for luxury real estate.',
        date: '2026-01-06',
        category: 'Loan Programs',
        readTime: '12 min read',
    },
    {
        slug: 'newport-beach-mortgage-guide-2026',
        title: 'Newport Beach Mortgage Guide 2026: Top Home Loan Options & Local Lenders',
        excerpt: 'Discover wholesale mortgage options in Newport Beach. Expert guidance on jumbo loans, conventional financing, and competitive pricing for luxury coastal properties.',
        date: '2026-01-05',
        category: 'Local Guides',
        readTime: '12 min read',
    },
    {
        slug: 'laguna-beach-mortgage-guide-2026',
        title: 'Laguna Beach Mortgage Guide 2026: Coastal Home Financing Options',
        excerpt: 'Expert mortgage guidance for Laguna Beach properties. Discover wholesale pricing advantages for luxury coastal homes and competitive financing solutions.',
        date: '2026-01-04',
        category: 'Local Guides',
        readTime: '11 min read',
    },
    {
        slug: 'dana-point-mortgage-guide-2026',
        title: 'Dana Point Mortgage Guide 2026: Harbor & Coastal Home Financing',
        excerpt: 'Complete mortgage guide for Dana Point properties. Expert wholesale financing solutions for harbor homes, coastal estates, and family neighborhoods.',
        date: '2026-01-03',
        category: 'Local Guides',
        readTime: '11 min read',
    },
    {
        slug: 'fha-loans-orange-county-2026',
        title: 'FHA Loans in Orange County 2026: Complete Guide & Requirements',
        excerpt: 'Comprehensive guide to FHA loans in Orange County. Learn about requirements, benefits, and how wholesale brokers provide competitive FHA financing.',
        date: '2026-01-02',
        category: 'Loan Programs',
        readTime: '14 min read',
    },
    {
        slug: 'wholesale-vs-retail-mortgage-brokers-2026',
        title: 'Wholesale vs Retail Mortgage Brokers: Why Choose Wholesale in 2026',
        excerpt: 'Discover the wholesale mortgage advantage. Compare wholesale brokers vs retail banks, credit unions, and online lenders to find the best financing option.',
        date: '2026-01-01',
        category: 'Education',
        readTime: '13 min read',
    },
];

export default function BlogIndexPage() {
    const formatDate = (dateString: string) => {
        const date = new Date(`${dateString}T00:00:00`);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-10 pb-16 lg:pt-12">
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-3">
                        Mortgage Insights & Guides
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Expert mortgage advice, local market insights, and comprehensive home loan guides from a licensed wholesale mortgage broker
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>{post.readTime}</span>
                                        <span>•</span>
                                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Need Personalized Mortgage Guidance?
                    </h3>
                    <p className="text-gray-700 mb-6">
                        These guides provide general information, but every borrower's situation is unique. Contact us for a free consultation and personalized rate quote tailored to your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Get Your Free Quote
                    </Link>
                </div>

                <div className="mt-12 text-center text-sm text-gray-600">
                    <p>
                        <strong>Mo Abdel</strong> | NMLS #1426884 | Lumin Lending, Inc. | NMLS #1850
                    </p>
                    <p className="mt-2">
                        Licensed in: CA, TX, FL, AZ, WA, VA, CO
                    </p>
                </div>
            </div>
        </div>
    );
}
