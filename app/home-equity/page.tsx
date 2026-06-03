import type { Metadata } from "next";
import Link from "next/link";
import EquityCalculator from "@/components/home-equity/EquityCalculator";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mothebroker.com";
const pageUrl = `${siteUrl}/home-equity`;

const figureAffiliateUrl =
  process.env.NEXT_PUBLIC_FIGURE_AFFILIATE_URL ||
  "https://heloc.luminlending.com/account/heloc/register?referrer=b31f2db6-718a-4de4-9cb7-a426c9bdbe91";

const avenAffiliateUrl =
  process.env.NEXT_PUBLIC_AVEN_AFFILIATE_URL ||
  "https://flow.avenfoundry.com?i=992113c1-9988-4be4-b535-138576443c85";

const phoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE || "(949) 579-2057";
const phoneHref = process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL || "+19495792057";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mo.abdel@luminlending.com";
const nmls = process.env.NEXT_PUBLIC_MO_NMLS || "1426884";

const disclaimer =
  "This is not a commitment to lend. Eligibility, terms, rates, fees, line amounts, CLTV limits, property eligibility, and funding timelines are subject to underwriting approval and lender guidelines.";

const figureHighlights = [
  "$25K-$750K line amounts with 10, 15, 20, and 30-year terms",
  "Fast funding in as little as 5 days once approved",
  "Keep your current mortgage: no cash-out refinance required",
  "Primary, second, and investment properties may qualify",
  "1st, 2nd, and up to 3rd lien positions available",
  "Fully online digital application with AVM-first valuation"
];

const avenHighlights = [
  "Line amounts from $5K to $400K with flexible term options",
  "Pairs a reusable equity line with a Visa card experience",
  "5 year draw period with interest only paid on drawn balance",
  "Owner-occupied and some non-owner-occupied scenarios may qualify",
  "1st and 2nd lien positions available",
  "Fixed-rate initial draw structure with balance transfer capability"
];

const comparisonRows = [
  ["Max line size", "$25K to $750K", "$5K to $400K"],
  [
    "Best use case",
    "Larger lump sums, renovations, debt consolidation, and major one-time investments",
    "Ongoing spending, reusable access, everyday purchases, and balance transfers"
  ],
  [
    "Draw structure",
    "Revolving traditional line with additional draws potentially available",
    "Reusable line connected to a home equity-backed Visa experience"
  ],
  ["Card functionality", "No card functionality", "Visa card for purchases and balance transfers"],
  [
    "Valuation",
    "AVM-first valuation, appraisal commonly required above $400K",
    "AVM-first valuation process"
  ],
  [
    "Lien positions",
    "1st, 2nd, and up to 3rd lien in some primary residence scenarios",
    "1st and 2nd lien positions"
  ]
];

const faqs = [
  {
    question: "What is a Figure HELOC?",
    answer:
      "Figure is a fast digital HELOC-style product that may allow qualified homeowners to access a larger home equity line without refinancing their first mortgage. It is best understood as a traditional online HELOC, not a credit card."
  },
  {
    question: "Is Figure a cash-out refinance?",
    answer:
      "No. Figure is designed as home equity access without replacing your existing first mortgage. That may matter for homeowners who want access to equity while potentially keeping a current mortgage rate."
  },
  {
    question: "Can I keep my current mortgage?",
    answer:
      "In many home equity scenarios, the first mortgage can remain in place. Eligibility, lien position, CLTV, and terms are subject to underwriting approval and lender guidelines."
  },
  {
    question: "How fast can Figure funding happen?",
    answer:
      "Figure may offer potential funding in as little as 5 days for approved borrowers, but timelines are not guaranteed and depend on underwriting, documentation, valuation, property eligibility, and lender guidelines."
  },
  {
    question: "Can Figure work for investment properties?",
    answer:
      "Figure may support primary residences, second homes, and some investment properties. Property type, occupancy, lien position, CLTV, and other eligibility factors still apply."
  },
  {
    question: "What is the Aven Home Equity Card?",
    answer:
      "Aven is a home equity-backed Visa card and reusable equity line. It differs from a traditional HELOC because it combines secured home equity access with a card-based spending experience."
  },
  {
    question: "Is Aven a credit card or a HELOC?",
    answer:
      "Aven is not a normal unsecured credit card and should not be described as a traditional HELOC. It is a home equity-backed Visa card experience with a reusable line secured by home equity."
  },
  {
    question: "Can I use Aven anywhere Visa is accepted?",
    answer:
      "Aven is built around a Visa card structure, so eligible card usage may be available anywhere Visa is accepted, subject to Aven approval, card terms, and program guidelines."
  },
  {
    question: "Can I transfer balances with Aven?",
    answer:
      "Aven may support balance transfers, which can make it useful for homeowners exploring secured home equity access for ongoing spending or debt-management needs."
  },
  {
    question: "Does Aven replace my mortgage?",
    answer:
      "Aven is not designed to replace your first mortgage. It is a home equity-backed line and Visa experience that may sit in a 1st or 2nd lien position depending on the scenario."
  },
  {
    question: "Will an appraisal be needed?",
    answer:
      "Both products may use an AVM-first valuation approach. Appraisal requirements vary by product, line amount, property, and underwriting. Figure commonly requires an appraisal above $400K."
  },
  {
    question: "What properties qualify?",
    answer:
      "Eligible property types may include single-family homes, condos, townhomes, PUDs, and some 2 to 4 unit properties. Figure may also support duplex and 3 to 4 unit scenarios. Program guidelines may change."
  },
  {
    question: "Figure vs Aven, which should I choose?",
    answer:
      "Figure may fit larger lump-sum equity needs, renovations, debt consolidation, and investment-property scenarios. Aven may fit ongoing spending, reusable access, purchases, balance transfers, and a home equity credit-card-style experience."
  }
];

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Home Equity Options: Figure HELOC vs Aven Card | Lumin Lending",
  description:
    "Compare Figure and Aven in one home equity guide. Learn how a fast online HELOC differs from a home equity-backed Visa card, and access equity without refinancing.",
  alternates: {
    canonical: "/home-equity"
  },
  keywords: [
    "Figure HELOC vs Aven",
    "home equity credit card",
    "access equity without refinancing",
    "use home equity like a credit card",
    "fast online HELOC",
    "Aven home equity card",
    "Orange County home equity mortgage broker"
  ],
  openGraph: {
    title: "Figure HELOC vs Aven Home Equity Card",
    description:
      "Two different ways to access home equity without refinancing: Figure for larger online HELOC access, Aven for a reusable Visa-style equity line.",
    url: pageUrl,
    siteName: "Mo Abdel | Lumin Lending",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Figure HELOC vs Aven Home Equity Card",
    description:
      "Compare a fast online HELOC with a home equity-backed Visa card in one Orange County home equity guide."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  switch (name) {
    case "bank":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18M12 4l8 4H4l8-4Z" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6v-9ZM12 15v2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path {...strokeProps} d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path {...strokeProps} d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M4 7h15a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13M16 13h5" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M3 7h18v12H3V7ZM3 11h18M7 15h4" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path {...strokeProps} d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M20 12a8 8 0 0 1-14.4 4.8M4 12a8 8 0 0 1 14.4-4.8M18 3v4h-4M6 21v-4h4" />
        </svg>
      );
    case "transfer":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M7 7h13l-3-3M17 20l3-3H7M4 5v14" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <path {...strokeProps} d="M20 21a8 8 0 0 0-16 0M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path {...strokeProps} d="m5 12 4 4L19 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path {...strokeProps} d="M12 3v18M3 12h18" />
        </svg>
      );
  }
}

function CtaLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const isExternal = href.startsWith("http") || href.startsWith("[");

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 text-sm py-3 px-5 active:scale-[0.99]";

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20",
    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    dark:
      "bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 shadow-sm"
  };

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]}`}
      href={href}
      target={isExternal && href.startsWith("http") ? "_blank" : undefined}
      rel={isExternal && href.startsWith("http") ? "sponsored nofollow noopener noreferrer" : undefined}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
    </a>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 mt-0.5" aria-hidden="true">
            <Icon name="check" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-slate-200/80 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 open:shadow-md">
      <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-slate-900 p-5 select-none list-none [&::-webkit-details-marker]:hidden">
        <span className="text-sm sm:text-base leading-snug">{question}</span>
        <span className="text-blue-600 font-bold text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="border-t border-slate-100 p-5 bg-slate-50/50">
        <p className="text-sm leading-relaxed text-slate-600 font-medium whitespace-pre-line">{answer}</p>
      </div>
    </details>
  );
}

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Home Equity Options: Figure HELOC vs Aven Card",
        description:
          "A single-page guide comparing Figure, a fast online HELOC, with Aven, a home equity-backed Visa card experience.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [
          { "@type": "Thing", name: "Figure HELOC" },
          { "@type": "Thing", name: "Aven Home Equity Card" },
          { "@type": "Thing", name: "Access home equity without refinancing" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Home Equity",
            item: pageUrl
          }
        ]
      },
      {
        "@type": ["LocalBusiness", "FinancialService"],
        "@id": `${siteUrl}/#localbusiness`,
        additionalType: "MortgageBroker",
        name: "Mo Abdel | Lumin Lending",
        url: siteUrl,
        telephone: phoneDisplay,
        email,
        priceRange: "$$",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Orange County, California" },
          { "@type": "AdministrativeArea", name: "California" },
          { "@type": "AdministrativeArea", name: "Washington" }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Irvine",
          addressRegion: "CA",
          addressCountry: "US"
        },
        description:
          "Local mortgage broker guidance for California and Washington homeowners exploring home equity options without refinancing their first mortgage."
      },
      {
        "@type": "FinancialService",
        "@id": `${pageUrl}#financialservice`,
        name: "Home Equity Guidance from Lumin Lending",
        url: pageUrl,
        provider: { "@id": `${siteUrl}/#localbusiness` },
        serviceType: "Home equity education, HELOC comparison, and affiliate application guidance",
        areaServed: "Orange County, California",
        termsOfService: disclaimer,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home equity options",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Figure HELOC options",
              description:
                "Fast online traditional HELOC-style access for larger lump sums, subject to approval and lender guidelines."
            },
            {
              "@type": "Offer",
              name: "Aven home equity-backed Visa options",
              description:
                "Reusable home equity-backed Visa card experience for flexible spending, subject to approval and lender guidelines."
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faqpage`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomeEquityPage() {
  return (
    <>
      <JsonLd />

      <main className="bg-slate-50/50 min-h-screen text-slate-800 antialiased font-sans">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200/50 bg-white" id="top" aria-labelledby="hero-title">
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                    Home Equity Solutions
                  </span>
                  <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
                    Tap Home Equity Without <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                      Refinancing Your Mortgage
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Keep your low first-mortgage interest rate. Compare two modern, fast-funding paths: 
                  <strong> Figure</strong> for digital, traditional HELOC-style access on larger lump sums, and 
                  <strong> Aven</strong> for a reusable, home equity-backed Visa card built for flexible cash flow.
                </p>

                <div className="flex flex-wrap gap-3">
                  <CtaLink href={figureAffiliateUrl}>Check Figure Options</CtaLink>
                  <CtaLink href={avenAffiliateUrl} variant="secondary">Explore Aven Card</CtaLink>
                </div>

                {/* Trust strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider" aria-label="Trust and licensing details">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600"><Icon name="home" /></span>
                    <span>Orange County Broker Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600"><Icon name="bolt" /></span>
                    <span>100% Online Options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600"><Icon name="lock" /></span>
                    <span>NMLS #{nmls}</span>
                  </div>
                </div>
              </div>

              {/* Calculator Widget Column */}
              <div className="lg:col-span-5 flex justify-center">
                <EquityCalculator 
                  figureAffiliateUrl={figureAffiliateUrl}
                  avenAffiliateUrl={avenAffiliateUrl}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Side-by-Side Product Cards Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="overview" aria-labelledby="overview-title">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="overview-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Two Distinct Home Equity Programs. Which Fits Your Needs?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore the core differences. Choose the structured digital HELOC for major capital expenses or the flexible home equity Visa card for ongoing draws and balance transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Figure Product Card */}
            <article className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block text-[10px] font-extrabold bg-blue-50 text-blue-600 rounded-full px-3 py-1 mb-2 uppercase tracking-wider">
                      Fixed Rate HELOC
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-none">Figure Home Equity Line</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-lg">
                    F
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Perfect for homeowners who need a larger, lump-sum payout for immediate, high-priority goals without replacing their current first mortgage.
                </p>

                <div className="border-t border-slate-100 pt-6">
                  <Checklist items={figureHighlights} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-semibold leading-normal">
                  *Subject to approval. Terms apply.
                </span>
                <CtaLink href={figureAffiliateUrl}>Apply with Figure</CtaLink>
              </div>
            </article>

            {/* Aven Product Card */}
            <article className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block text-[10px] font-extrabold bg-slate-900 text-white rounded-full px-3 py-1 mb-2 uppercase tracking-wider">
                      Equity-Backed Visa Card
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-none">Aven Home Equity Card</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-lg">
                    A
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Designed for ongoing flexible cash flow, purchases, and balance transfers. Only pay interest on what you draw, using a Visa card format.
                </p>

                <div className="border-t border-slate-100 pt-6">
                  <Checklist items={avenHighlights} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-semibold leading-normal">
                  *Subject to approval. Terms apply.
                </span>
                <CtaLink href={avenAffiliateUrl} variant="dark">Apply with Aven</CtaLink>
              </div>
            </article>

          </div>
        </section>

        {/* Condensed Comparison Matrix */}
        <section className="py-16 bg-white border-y border-slate-200/60" id="compare" aria-labelledby="compare-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-2">Compare Side-by-Side</span>
              <h2 id="compare-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Quick-Reference Comparison Matrix
              </h2>
            </div>

            <div className="overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm bg-white max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <caption>Comparison of Figure and Aven home equity options</caption>
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th scope="col" className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">Feature</th>
                      <th scope="col" className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-blue-900 w-3/8 bg-blue-50/20">Figure, traditional HELOC</th>
                      <th scope="col" className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-900 w-3/8">Aven, home equity-backed Visa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonRows.map(([feature, figure, aven]) => (
                      <tr key={feature} className="hover:bg-slate-50/40 transition-colors duration-150">
                        <th scope="row" className="py-4 px-6 text-sm font-bold text-slate-900">{feature}</th>
                        <td className="py-4 px-6 text-sm text-slate-600 bg-blue-50/5 leading-relaxed">{figure}</td>
                        <td className="py-4 px-6 text-sm text-slate-600 leading-relaxed">{aven}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 p-4 bg-slate-50 border border-slate-150 rounded-2xl text-center text-xs text-slate-500 font-medium">
              💡 <strong>Need professional advice?</strong> As a licensed mortgage broker, Mo can help structure your application to match guidelines. Call or text him at <a href={`tel:${phoneHref}`} className="text-blue-600 font-bold hover:underline">{phoneDisplay}</a> for assistance.
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq" aria-labelledby="faq-title">
          <div className="text-center mb-12">
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-2">FAQ</span>
            <h2 id="faq-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>

        {/* Bottom CTA Apply Section */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-16 md:py-20" id="apply" aria-labelledby="apply-title">
          {/* Subtle graphic element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center space-y-6">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">
              Apply Through Vetted Partners
            </span>
            <h2 id="apply-title" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl">
              Ready to Explore Home Equity Options in California?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Leverage preferred partner processing. Apply online with Figure or Aven using Mo Abdel's affiliate paths, and receive direct wholesale broker guidance if you need assistance during the process.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <CtaLink href={figureAffiliateUrl}>Apply with Figure</CtaLink>
              <CtaLink href={avenAffiliateUrl} variant="dark">Apply with Aven</CtaLink>
            </div>

            <div className="pt-8 w-full border-t border-slate-800 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-400" aria-label="Contact information">
              <span>Orange County, CA</span>
              <a href={`tel:${phoneHref}`} className="hover:text-white transition-colors">{phoneDisplay}</a>
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
              <span>NMLS #{nmls}</span>
            </div>
            
            <p className="text-[10px] text-slate-500 leading-normal max-w-4xl text-center pt-4">
              {disclaimer}
            </p>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Footer */}
      <div className="fixed right-4 bottom-4 left-4 z-50 md:hidden flex gap-3 border border-slate-200/80 rounded-2xl bg-white/95 backdrop-blur-md shadow-base44-lg p-3 animate-fade-in" aria-label="Mobile application links">
        <a 
          href={figureAffiliateUrl} 
          target="_blank" 
          rel="sponsored nofollow noopener noreferrer"
          className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-md shadow-blue-500/10 active:scale-[0.99] transition-all"
        >
          Figure HELOC
        </a>
        <a 
          href={avenAffiliateUrl} 
          target="_blank" 
          rel="sponsored nofollow noopener noreferrer"
          className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl shadow-md shadow-slate-900/10 active:scale-[0.99] transition-all"
        >
          Aven Card
        </a>
      </div>
    </>
  );
}
