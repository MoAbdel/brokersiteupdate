"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";

const phoneDisplay = "(949) 579-2057";
const phoneHref = "tel:+19495792057";

type IconName =
  | "phone"
  | "briefcase"
  | "arrow"
  | "tag"
  | "bolt"
  | "shield"
  | "users"
  | "home"
  | "calendar"
  | "star"
  | "pin"
  | "x"
  | "check"
  | "chevron"
  | "file"
  | "search"
  | "scale"
  | "lock"
  | "key"
  | "book"
  | "building"
  | "mail"
  | "clock"
  | "quote"
  | "left";

type LandingProps = {
  heroRightSrc?: string;
  apiEndpoint?: string;
};

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  state: string;
  loanGoal: string;
  loanAmount: string;
};

type AdvantageCard = {
  icon: IconName;
  title: string;
  badge: string;
  body: string;
  bullets: string[];
};

type GuideCard = {
  title: string;
  body: string;
  href: string;
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  if (name === "phone") {
    return (
      <svg {...shared}>
        <path d="M22 16.92v2.2a2.05 2.05 0 0 1-2.24 2.04 19.78 19.78 0 0 1-8.62-3.06 19.45 19.45 0 0 1-6-6A19.78 19.78 0 0 1 2.08 3.44 2.05 2.05 0 0 1 4.12 1.2h2.2a2.05 2.05 0 0 1 2.04 1.76c.13.98.37 1.94.72 2.85a2.05 2.05 0 0 1-.46 2.16l-.93.93a16.4 16.4 0 0 0 6 6l.93-.93a2.05 2.05 0 0 1 2.16-.46c.91.35 1.87.59 2.85.72A2.05 2.05 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (name === "briefcase") {
    return (
      <svg {...shared}>
        <rect x="7" y="3" width="10" height="5" rx="1.5" />
        <rect x="4" y="7" width="16" height="14" rx="2.5" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...shared}>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    );
  }

  if (name === "left") {
    return (
      <svg {...shared}>
        <path d="M19 12H5" />
        <path d="m11 19-7-7 7-7" />
      </svg>
    );
  }

  if (name === "tag") {
    return (
      <svg {...shared}>
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <path d="M7.5 7.5h.01" />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg {...shared}>
        <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...shared}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...shared}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...shared}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...shared}>
        <rect x="3" y="4" width="18" height="17" rx="2.5" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...shared}>
        <path d="m12 2.5 2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.55l-5.9 3.1 1.12-6.56-4.77-4.65 6.6-.96L12 2.5Z" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...shared}>
        <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...shared}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "chevron") {
    return (
      <svg {...shared}>
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg {...shared}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg {...shared}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.4-3.4" />
      </svg>
    );
  }

  if (name === "scale") {
    return (
      <svg {...shared}>
        <path d="M12 3v18" />
        <path d="M5 6h14" />
        <path d="m6 6-3 7h6Z" />
        <path d="m18 6-3 7h6Z" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...shared}>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  if (name === "key") {
    return (
      <svg {...shared}>
        <circle cx="7.5" cy="14.5" r="4.5" />
        <path d="m11 11 9-9" />
        <path d="m15 6 3 3" />
      </svg>
    );
  }

  if (name === "book") {
    return (
      <svg {...shared}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H21" />
        <path d="M6.5 2H21v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...shared}>
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M9 21v-5h3v5" />
        <path d="M8 7h1" />
        <path d="M12 7h1" />
        <path d="M8 11h1" />
        <path d="M12 11h1" />
        <path d="M17 9h2a1 1 0 0 1 1 1v11" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...shared}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "quote") {
    return (
      <svg {...shared}>
        <path d="M9 7H5a2 2 0 0 0-2 2v4h4v4h4V9a2 2 0 0 0-2-2Z" />
        <path d="M21 7h-4a2 2 0 0 0-2 2v4h4v4h4V9a2 2 0 0 0-2-2Z" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

const processSteps = [
  { step: "Step 1", title: "Quick Application", icon: "file" },
  { step: "Step 2", title: "We Shop 50+ Lenders", icon: "search" },
  { step: "Step 3", title: "Compare Your Options", icon: "scale" },
  { step: "Step 4", title: "Lock Your Rate", icon: "lock" },
  { step: "Step 5", title: "Close", icon: "key" },
] satisfies Array<{ step: string; title: string; icon: IconName }>;

const advantageCards: AdvantageCard[] = [
  {
    icon: "tag",
    title: "Wholesale Pricing",
    badge: "Save $300+/mo",
    body: "Traditional retail banks markup mortgage rates to pay for national advertising and physical branches. We bypass retail markups by connecting you directly to wholesale loan channels at institutional rates.",
    bullets: [
      "Compare 50+ lenders in one system",
      "Institutional rates without retail markup",
      "Save thousands over the loan lifetime",
      "Transparent, low-cost broker fees",
    ],
  },
  {
    icon: "book",
    title: "Product Variety",
    badge: "200+ Programs",
    body: "No single bank has a loan program that fits every client's tax or income structure. We leverage wholesale partnerships to offer standard conforming mortgages alongside highly flexible custom products.",
    bullets: [
      "Conventional & Jumbo loans up to $2.5M",
      "FHA, VA & USDA low down payment options",
      "Non-QM: Bank statement and DSCR loans",
      "Strategic HELOCs & Home Equity lines",
    ],
  },
  {
    icon: "bolt",
    title: "Direct Service & Speed",
    badge: "15-21 Day Close",
    body: "Skip corporate retail bank queues and generic toll-free call centers. You work directly with Senior Mortgage Broker Mo Abdel, receiving personalized guidance from pre-approval through funding.",
    bullets: [
      "Dedicated one-on-one direct strategy",
      "Efficient, modern paperless process",
      "Fast 15-21 day average closing timelines",
      "Active advocacy that fights for your rate",
    ],
  },
];

const guideCards: GuideCard[] = [
  {
    title: "Home Buyer Guide 2026",
    body: "Step-by-step guide for California and Washington home buyers",
    href: "/guides/orange-county-home-buyer-guide",
  },
  {
    title: "Refinancing Guide 2026",
    body: "HELOC, cash-out, and rate-and-term options compared",
    href: "/guides/orange-county-refinancing-guide",
  },
  {
    title: "Market Forecast 2025-2026",
    body: "Current trends, pricing data, and expert predictions",
    href: "/guides/orange-county-market-forecast-2025-2026",
  },
  {
    title: "VA Loans Guide",
    body: "Benefits, eligibility, and VA loan programs explained",
    href: "/guides/orange-county-va-loans",
  },
  {
    title: "Jumbo Loans Guide",
    body: "High-value financing for premium properties",
    href: "/guides/orange-county-jumbo-loans",
  },
  {
    title: "Investment Property Guide",
    body: "DSCR loans, rental income strategies, and ROI analysis",
    href: "/guides/orange-county-investment-property",
  },
  {
    title: "Spring 2026 Buying Guide",
    body: "Seasonal insights for spring home purchases",
    href: "/guides/spring-2026-home-buying-guide",
  },
  {
    title: "Mortgage Broker vs Bank",
    body: "Why wholesale pricing beats retail every time",
    href: "/guides/mortgage-broker-vs-bank-complete-comparison",
  },
];

const washingtonCommunities = [
  "Seattle",
  "Tacoma",
  "Everett",
  "Bellevue",
  "Spokane",
  "+ All of Washington",
];

const californiaCommunities = [
  "Los Angeles",
  "San Jose",
  "Newport Beach",
  "San Diego",
  "Sacramento",
  "Pasadena",
  "San Francisco",
  "Irvine",
  "+ All of California",
];

const reviews = [
  {
    name: "Alice W",
    location: "San Francisco",
    date: "Feb 2026",
    rating: 5,
    loanType: "Home Equity",
    quote: "Very professional + very helpful + very patient and explained very clearly with the points snd details also most importan is Mo followed up and make sure everything went well.",
    closedOnTime: true,
    source: "Experience.com review",
  },
  {
    name: "jhcurry",
    location: "Fairfield, CA",
    date: "Dec 2025",
    rating: 5,
    loanType: "Home Equity",
    quote: "I worked with Mo and Latoyia at WCL to obtain a HEL. I could not be more pleased with the process. Mo was professional, thorough and generally very interested in seeing that my experience was a pleasant one. I'd recommend them to anyone looking for a lender. Great job.",
    closedOnTime: true,
    source: "Zillow review",
  },
  {
    name: "sacullagarrett",
    location: "Chula Vista, CA",
    date: "Nov 2025",
    rating: 5,
    loanType: "Home Equity",
    quote: "Mo was completely transparent and professional. He made the loan process easy. I highly recommend him as a loan officer. Hands off and very quick. Very straight forward.",
    closedOnTime: true,
    source: "Zillow review",
  },
  {
    name: "Jim Lord",
    location: "Paso Robles, CA",
    date: "Oct 2025",
    rating: 5,
    loanType: "Home Equity",
    quote: "We have refinanced before but have never had such a hard working and professional lender's representative than Mo. I ended up having a number of questions but he cheerfully and professionally responded. Our loan was processed quickly and without incident. I would definitely use Mo again and refer him to others.",
    closedOnTime: true,
    source: "Zillow review",
  },
  {
    name: "Karthikeyan Ramaswami",
    location: "Aldie, VA",
    date: "Apr 2025",
    rating: 5,
    loanType: "Refinance",
    quote: "It has been a delightful experience to work with Mo. You know how stressful it can be to refinance your home. Waiting for your rate, waiting for lender decision, temporary approval and so on. Mo was great in communicating me clearly and was willing to go extra mile to check.",
    closedOnTime: true,
    source: "Zillow review",
  },
];



function StarRating({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "ma-stars ma-stars-compact" : "ma-stars"} aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((star) => (
        <Icon key={star} name="star" />
      ))}
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <div className="ma-feature">
      <div className="ma-feature-icon">
        <Icon name={icon} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: IconName;
  value: string;
  label: ReactNode;
}) {
  return (
    <div className="ma-stat">
      <div className="ma-stat-icon">
        <Icon name={icon} />
      </div>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function payloadFromForm(form: HTMLFormElement): LeadPayload {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    state: String(formData.get("state") ?? ""),
    loanGoal: String(formData.get("loanGoal") ?? ""),
    loanAmount: String(formData.get("loanAmount") ?? ""),
  };
}

export default function WholesaleLendersLanding({
  heroRightSrc = "/images/mo-abdel-hero-right-exact.png",
  apiEndpoint = "/api/loan-options",
}: LandingProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  function openLeadModal() {
    setStatus("idle");
    setModalOpen(true);
  }

  useEffect(() => {
    if (!modalOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [modalOpen]);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const payload = payloadFromForm(form);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="ma-page">
      <section className="ma-hero">
        <div className="ma-hero-inner">
          <div className="ma-hero-copy">
            <a
              href="#reviews-section"
              className="ma-review-pill"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("reviews-section");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="ma-review-avatars" aria-hidden="true">
                <span>AW</span>
                <span>JC</span>
                <span>SG</span>
                <span>JL</span>
              </div>
              <StarRating />
              <p>Rated 5.0/5.0 on Google &amp; Zillow</p>
            </a>

            <h1>
              Your Direct Line to
              <span>50+ Wholesale Lenders</span>
            </h1>

            <p className="ma-subhead">
              Skip the retail markup. We access wholesale mortgage channels to
              get you lower rates, faster approvals, and zero bureaucratic
              headaches.
            </p>

            <div className="ma-features" aria-label="Key benefits">
              <Feature
                icon="tag"
                title="Jumbo Loans up to $3,500,000"
                body="California & Washington"
              />
              <Feature
                icon="bolt"
                title="Faster Approvals"
                body="Direct lender access means less waiting"
              />
              <Feature
                icon="shield"
                title="Zero Markup"
                body="Wholesale pricing passed directly to you"
              />
            </div>

            <div className="ma-cta-row">
              <button
                className="ma-primary-button"
                type="button"
                aria-haspopup="dialog"
                onClick={openLeadModal}
              >
                <Icon name="briefcase" />
                Get My Loan Options
                <Icon name="arrow" />
              </button>

              <a className="ma-secondary-button" href={phoneHref}>
                <Icon name="phone" />
                Call / Text {phoneDisplay}
              </a>
            </div>

            <div className="ma-reassurance">
              <span>
                <Icon name="check" />
                No credit check required for initial quote
              </span>
              <span>
                <Icon name="check" />
                Fast response times
              </span>
            </div>
          </div>
        </div>

        <div className="ma-hero-visual" aria-label="Mo Abdel, Senior Mortgage Broker">
          <Image
            className="ma-hero-right-exact"
            src={heroRightSrc}
            alt="Mo Abdel, Senior Mortgage Broker"
            width={724}
            height={678}
            priority
          />
          <Image
            className="ma-lumin-logo-overlay"
            src="/images/lumin.png"
            alt=""
            width={222}
            height={95}
          />
          <span className="ma-sr-only">
            Lumin Lending. Mo Abdel. Senior Mortgage Broker. NMLS #1426884.
            Company NMLS #2716106. DRE #02291443.
          </span>
        </div>

        <a className="ma-scroll-cue" href="#ma-trust-band" aria-label="Scroll to trusted homebuyer stats">
          <Icon name="chevron" />
        </a>
      </section>

      <section className="ma-trust-band" id="ma-trust-band">
        <div className="ma-container">
          <h2>Trusted by Homebuyers, Investors &amp; Real Estate Professionals</h2>

          <div className="ma-stats">
            <Stat icon="users" value="50+" label="Wholesale Lenders" />
            <Stat icon="home" value="$3.5M" label="Max Loan Amount" />
            <Stat
              icon="calendar"
              value="Fast"
              label={
                <>
                  Closing
                  <br />
                  <small>(HELOC As Soon As 7 Days)</small>
                </>
              }
            />
            <Stat
              icon="star"
              value="5-Star"
              label={
                <>
                  Rated on
                  <br />
                  Google &amp; Zillow
                </>
              }
            />
            <Stat
              icon="pin"
              value="CA & WA"
              label={
                <>
                  Licensed in
                  <br />2 States
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="ma-process-section">
        <div className="ma-container">
          <div className="ma-process-track" aria-label="Mortgage process steps">
            {processSteps.map((item) => (
              <div className="ma-process-step" key={item.step}>
                <div className="ma-process-icon">
                  <Icon name={item.icon} />
                </div>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-advantage-section">
        <div className="ma-container">
          <div className="ma-section-heading">
            <span className="ma-eyebrow">LUMIN LENDING ADVANTAGE</span>
            <h2>
              The Wholesale Advantage:
              <br />
              Broker vs. Banks
            </h2>
            <p>
              Retail banks offer a single menu of proprietary rates and
              products. As a mortgage broker, we connect you to 50+ wholesale
              lenders competing for your loan, securing better pricing and
              faster approvals.
            </p>
          </div>

          <div className="ma-advantage-grid">
            {advantageCards.map((card) => (
              <article className="ma-advantage-card" key={card.title}>
                <div className="ma-card-heading">
                  <div className="ma-card-icon">
                    <Icon name={card.icon} />
                  </div>
                  <span>{card.badge}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-guides-section">
        <div className="ma-container">
          <div className="ma-section-heading">
            <h2>Free Mortgage Guides &amp; Resources</h2>
            <p>
              Expert insights to help you make informed decisions about your
              mortgage.
            </p>
          </div>

          <div className="ma-guides-grid">
            {guideCards.map((guide) => (
              <Link className="ma-guide-card" href={guide.href} key={guide.title}>
                <div className="ma-guide-icon">
                  <Icon name="file" />
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.body}</p>
              </Link>
            ))}
          </div>

          <div className="ma-section-action">
            <Link className="ma-outline-blue" href="/blog">
              View All Guides &amp; Blog Posts
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ma-communities-section">
        <div className="ma-container">
          <div className="ma-section-heading ma-section-heading-invert">
            <h2>Serving Communities Across California &amp; Washington</h2>
            <p>
              Statewide mortgage expertise across California and Washington,
              with local-market guidance for buyers, homeowners, and investors.
            </p>
          </div>

          <div className="ma-communities-grid">
            <article className="ma-community-card">
              <div className="ma-community-title">
                <Icon name="pin" />
                <h3>Washington Communities</h3>
              </div>
              <div className="ma-community-tags">
                {washingtonCommunities.map((community) => {
                  const isAll = community.startsWith("+");
                  return (
                    <span 
                      key={community}
                      className={isAll ? "ma-tag-all" : ""}
                    >
                      {community}
                    </span>
                  );
                })}
              </div>
            </article>

            <article className="ma-community-card">
              <div className="ma-community-title">
                <Icon name="pin" />
                <h3>California Communities</h3>
              </div>
              <div className="ma-community-tags">
                {californiaCommunities.map((community) => {
                  const isAll = community.startsWith("+");
                  return (
                    <span 
                      key={community}
                      className={isAll ? "ma-tag-all" : ""}
                    >
                      {community}
                    </span>
                  );
                })}
              </div>
            </article>
          </div>

          <div className="ma-community-actions">
            <Link href="/areas/california">View All California Areas</Link>
            <Link href="/areas/washington">View All Washington Areas</Link>
            <Link href="/about">About Mo Abdel</Link>
          </div>
        </div>
      </section>

      <section className="ma-reviews-section" id="reviews-section">
        <div className="ma-container ma-reviews-container">
          <div className="ma-section-heading">
            <h2>Client Reviews</h2>
            <p>Real feedback from verified clients</p>
          </div>

          <article className="ma-review-card">
            <div className="ma-review-card-top">
              <span>{reviews[currentReview].source}</span>
              <div className="ma-review-score">
                <StarRating compact />
                <strong>{reviews[currentReview].rating.toFixed(1)}</strong>
              </div>
            </div>

            <Icon name="quote" className="ma-quote-icon" />
            <blockquote>
              {reviews[currentReview].quote}
            </blockquote>

            <div className="ma-reviewer-row">
              <div>
                <strong>{reviews[currentReview].name}</strong>
                <span>{reviews[currentReview].location}, {reviews[currentReview].date}</span>
              </div>
              <div className="ma-review-tags">
                <span>{reviews[currentReview].loanType}</span>
                {reviews[currentReview].closedOnTime && <span>Closed on time</span>}
              </div>
            </div>

            <div className="ma-carousel-controls" aria-label="Review carousel controls">
              <button type="button" aria-label="Previous review" onClick={prevReview}>
                <Icon name="left" />
              </button>
              <div className="ma-carousel-dots" aria-hidden="true">
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className={idx === currentReview ? "active" : ""}
                    onClick={() => setCurrentReview(idx)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
              <button type="button" aria-label="Next review" onClick={nextReview}>
                <Icon name="arrow" />
              </button>
            </div>
          </article>

          <a
            className="ma-zillow-link"
            href="https://www.zillow.com/lender-profile/MoAbdel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all reviews on Zillow
            <Icon name="arrow" />
          </a>
        </div>
      </section>



      {modalOpen ? (
        <div
          className="ma-modal-backdrop"
          role="presentation"
          onMouseDown={() => setModalOpen(false)}
        >
          <section
            className="ma-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ma-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="ma-modal-close"
              type="button"
              aria-label="Close loan options form"
              onClick={() => setModalOpen(false)}
            >
              <Icon name="x" />
            </button>

            <div className="ma-modal-heading">
              <p>Wholesale loan options</p>
              <h2 id="ma-modal-title">Get matched with competitive lenders</h2>
              <span>No credit check required for the initial quote.</span>
            </div>

            {status === "success" ? (
              <div className="ma-success" aria-live="polite">
                <strong>Request received.</strong>
                <p>
                  Mo&apos;s team will review your scenario and follow up with
                  loan options.
                </p>
                <button
                  className="ma-primary-button"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="ma-lead-form" onSubmit={submitLead}>
                <label>
                  Full name
                  <input name="name" autoComplete="name" required />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(949) 555-1234"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  State
                  <select name="state" required defaultValue="">
                    <option value="" disabled>
                      Select state
                    </option>
                    <option value="CA">California</option>
                    <option value="WA">Washington</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  Loan goal
                  <select name="loanGoal" required defaultValue="">
                    <option value="" disabled>
                      Select goal
                    </option>
                    <option value="Purchase">Purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Home Equity">Home Equity</option>
                    <option value="Investment Property">
                      Investment Property
                    </option>
                  </select>
                </label>

                <label>
                  Estimated loan amount
                  <input
                    name="loanAmount"
                    inputMode="numeric"
                    placeholder="$1,250,000"
                    required
                  />
                </label>

                {status === "error" ? (
                  <p className="ma-error" aria-live="polite">
                    Something went wrong. Please call or text {phoneDisplay}.
                  </p>
                ) : null}

                <button
                  className="ma-primary-button ma-submit"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send My Scenario"}
                  <Icon name="arrow" />
                </button>
              </form>
            )}
          </section>
        </div>
      ) : null}
    </div>
  );
}
