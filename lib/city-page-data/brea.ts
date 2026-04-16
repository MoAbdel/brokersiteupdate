import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const brea: CityPageData = {
  citySlug: 'brea',
  cityName: 'Brea',
  state: 'California',
  region: 'OC',
  metaTitle: 'Brea CA Mortgage Broker | Home Loans & Refinance',
  metaDescription:
    'Brea CA mortgage broker in north Orange County. Median ~$1.1M, condos from $650K. Conventional, FHA, VA, HELOC, cash-out. Call Mo at (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Downtown Brea',
      blurb:
        'Walkable Birch Street corridor with attached condos and townhomes above retail; growing appeal among young professionals and first-time buyers who prioritize urban amenities at below-median price points.',
    },
    {
      name: 'Carbon Canyon',
      blurb:
        'Residential tracts along the Carbon Canyon Road corridor bordering Carbon Canyon Regional Park; larger-lot SFRs in a semi-rural setting attract buyers seeking privacy and outdoor recreation access.',
    },
    {
      name: 'Blackstone',
      blurb:
        'Master-planned community in northeast Brea developed in the 2000s; Spanish-style SFRs with HOA amenities, strong Brea Olinda Unified school assignments, and consistent move-up buyer demand.',
    },
    {
      name: 'West Brea',
      blurb:
        'Established residential tracts west of the Brea Mall; mix of 1970s–1980s SFRs and condos at more attainable entry prices, convenient to the 57 freeway and major retail corridors.',
    },
    {
      name: 'North Hills',
      blurb:
        'Hillside neighborhood in northern Brea with panoramic views and larger lots; custom and semi-custom SFRs near Tri-City Park draw families seeking more space relative to flat-terrain OC neighborhoods.',
    },
  ],
  typicalHomeValueRange: { min: 650_000, max: 1_200_000 },
  localMarketProse: [
    "Brea is an incorporated city of approximately 47,300 residents in northern Orange County, situated about 25 miles southeast of downtown Los Angeles at the junction of the 57 and 90 freeways. The city's economy rests on a notably diverse employer base: Albertsons operates a major distribution and corporate presence with over 1,200 local employees, Beckman Coulter (biomedical instruments) employs 837, and Brea Olinda Unified School District accounts for over 600 positions. Nationwide Insurance and Service Champions Plumbing & HVAC round out the top five employers. Brea's location at the crossroads of the 57 and 91 corridors makes it a practical hub for professionals commuting to Anaheim, Orange, Diamond Bar, and Los Angeles County.",
    "The Brea housing market in early 2026 shows a median sale price near $1.1 million across all property types, with condos and townhomes starting around $650K and SFRs ranging from approximately $850K to $1.2M. Homes are selling in around 29 days with a sale-to-list ratio above 103%, indicating competitive conditions despite modest year-over-year price softening. FHA financing is viable for condo and lower-end townhome purchases; conventional loans with 10–20% down dominate the SFR segment. Most SFR purchases fall at or near the $1,209,750 OC conforming loan limit — buyers who can put 20% down often keep the loan amount under the jumbo threshold. The city's extensive public art program, the Brea Mall, and Downtown Brea dining attract a younger demographic of first-time and early move-up buyers.",
    "Buyers choose Brea for its strong Brea Olinda Unified school ratings, its retail and entertainment infrastructure anchored by the Brea Mall and Birch Street Promenade, and a commute advantage that few north OC cities can match — the 57 freeway provides direct access to both Los Angeles County and central OC employment. Relative to Yorba Linda or Anaheim Hills, Brea offers more attached housing inventory at lower entry prices, making it accessible to buyers earlier in their homeownership journey. Homeowners who purchased before 2022 have meaningful equity positions, and HELOC demand is active for kitchen and bathroom renovations that increase resale value in this competitive market.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What loan programs work best for first-time buyers in Brea, CA in 2026?',
      answer:
        'Brea condos and townhomes in the $650K–$800K range are accessible with FHA (3.5% down) or conventional (5% down) financing, making them the practical entry point for first-time buyers. CalHFA down-payment assistance can layer on top for qualifying borrowers. SFR buyers typically need conventional loans with 10–20% down in the $850K–$1.1M range. We run side-by-side comparisons including monthly payment, mortgage insurance, and break-even analysis. Call (949) 579-2057.',
    },
    {
      question: 'What are current mortgage rates in Brea, CA for 2026?',
      answer:
        'Brea buyers are seeing conventional 30-year rates in the mid-to-upper 6% range for well-qualified borrowers as of April 2026. FHA rates are similar but carry mortgage insurance. VA rates are competitive for eligible buyers — Brea's proximity to defense-industry employers in north OC means VA loans are commonly used here. Call (949) 579-2057 for a live rate quote specific to your price range and down payment.',
    },
    {
      question: 'Should I use a HELOC or cash-out refinance on my Brea home?',
      answer:
        'If your existing first mortgage rate is below 5% — common for Brea owners who bought or refinanced in 2020–2022 — a HELOC is almost always the better choice: you tap equity without touching the low primary rate. Cash-out refinance makes sense if your current rate is already above 6.5%. We provide a free written comparison for any Brea homeowner who calls (949) 579-2057.',
    },
  ],
};
