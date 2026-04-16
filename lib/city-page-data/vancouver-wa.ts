import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const vancouverWa: CityPageData = {
  citySlug: 'vancouver-wa',
  cityName: 'Vancouver',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Vancouver WA Mortgage Broker | HELOC, FHA & Home Loans',
  metaDescription:
    'Vancouver WA mortgage broker serving Clark County. Home values $460K–$570K. HELOC, FHA, conventional, VA loans. No Oregon income tax. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Cascade Park',
      blurb:
        'Family-friendly east Vancouver neighborhood with tree-lined streets, multiple parks, and traditional single-family homes; consistently popular with buyers relocating from the Portland metro.',
    },
    {
      name: 'Hough',
      blurb:
        'One of Vancouver\'s oldest neighborhoods northwest of downtown with early-20th-century bungalows and four-squares; walkable to the Columbia River waterfront and downtown amenities.',
    },
    {
      name: 'Arnada',
      blurb:
        'Historic inner-Vancouver neighborhood with Victorian and bungalow architecture close to downtown; mature trees and strong community character appeal to buyers seeking established urban feel.',
    },
    {
      name: 'Salmon Creek',
      blurb:
        'North Vancouver growth corridor with newer retail, medical services, and suburban SFR subdivisions; draws first-time buyers and families seeking newer construction at accessible prices.',
    },
    {
      name: 'Hazel Dell',
      blurb:
        'Established unincorporated community north of Vancouver proper with dense SFR inventory; affordable entry point for buyers who work in Portland and want to avoid Oregon income tax.',
    },
  ],
  typicalHomeValueRange: { min: 460_000, max: 570_000 },
  localMarketProse: [
    "Vancouver is the fourth-most populous city in Washington with a population approaching 199,000, located directly north of Portland across the Columbia River as part of the Portland-Vancouver metropolitan area. The city's economic identity is inseparable from its cross-river position: Washington has no state income tax while Oregon has no sales tax, creating a persistent incentive for Portland-area workers to live in Vancouver and commute south. PeaceHealth, the dominant regional healthcare employer, anchors local jobs with more than 16,500 employees across its network, joined by the Vancouver and Evergreen public school districts and a growing base of distribution and logistics operations along Interstate 5. Median home prices in Vancouver WA have run between $460,000 and $570,000 in early 2026.",
    "The housing stock in Vancouver spans from Victorian and bungalow architecture in historic inner neighborhoods like Hough and Arnada to sprawling 1990s subdivisions in Cascade Park and newer planned communities in Salmon Creek and Battle Ground. VA loans are a meaningful portion of purchase activity given Vancouver's position between Joint Base Lewis-McChord to the north and the Portland metro military population. FHA and conventional purchases dominate the broader market, with a strong first-time-buyer cohort drawn by prices well below the Seattle metro and the tax advantage of Washington residency. HELOC demand is robust among owners who bought between 2018 and 2022 and prefer accessing equity without disturbing a low-rate first mortgage.",
    "What brings buyers to Vancouver is the Portland job market combined with Washington's income-tax-free status — a financial advantage that can be worth $8,000–$15,000 annually for higher-income earners. Clark County commuters to Portland cross the I-5 or I-205 bridges into Oregon daily, and access has improved with transit investment along the SR-500 and Mill Plain corridors. Inventory in Vancouver typically runs 1.5 to 2 months of supply, with homes selling in 15 to 25 days and sale-to-list ratios near 99%. The market has remained competitive in 2026 despite broader national softening, sustained by continued in-migration from high-cost Oregon cities and a steady pipeline of remote workers choosing Vancouver for its combination of affordability and Pacific Northwest lifestyle.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Does living in Vancouver WA save me money on income taxes vs Portland?',
      answer:
        'Yes — Washington has no state income tax while Oregon\'s top marginal rate is 9.9%. For a household earning $100,000, the saving from living in Vancouver instead of Portland can exceed $7,000–$9,000 per year, which meaningfully affects how much mortgage you can comfortably afford. We factor Washington-residency tax savings into our buyer consultations for Portland-area workers considering a Vancouver purchase.',
    },
    {
      question: 'What mortgage options are available for Vancouver WA home buyers in 2026?',
      answer:
        'Vancouver is in Clark County, Washington, which has conforming loan limits of $806,500 for a single-family home under 2025 FHFA guidelines. Most buyers use conventional or FHA loans; VA loans are available for qualifying veterans and service members; and HELOC products are popular for existing homeowners. Call or text (949) 579-2057 and we will walk through which product fits your Vancouver purchase or refinance situation.',
    },
    {
      question: 'Is a HELOC a good option for Vancouver WA homeowners in 2026?',
      answer:
        'For Vancouver homeowners who locked in rates below 5% during 2020–2022, a HELOC is typically far more cost-effective than a cash-out refinance. The HELOC sits as a second lien and only charges interest on the amount drawn, leaving the first mortgage intact. Vancouver home values have appreciated significantly since 2019, meaning most owners in established neighborhoods have substantial equity to work with. We shop multiple wholesale lenders to find the best HELOC rate and terms for Clark County borrowers.',
    },
  ],
};
