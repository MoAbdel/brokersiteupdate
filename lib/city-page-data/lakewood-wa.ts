import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const lakewoodWa: CityPageData = {
  citySlug: 'lakewood-wa',
  cityName: 'Lakewood',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Lakewood WA Mortgage Broker | VA, HELOC & FHA Loans',
  metaDescription:
    'Lakewood WA mortgage broker near JBLM serving Pierce County. Home values $460K–$560K. VA, FHA, conventional, HELOC. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Tillicum',
      blurb:
        'Diverse neighborhood adjacent to JBLM with strong military community ties; mix of single-family homes and affordable starter properties popular with VA-loan buyers.',
    },
    {
      name: 'Woodbrook',
      blurb:
        'Quiet residential area in northern Lakewood close to the base; a blend of single-family homes, townhouses, and apartments with convenient retail access.',
    },
    {
      name: 'Fort Steilacoom',
      blurb:
        'Established neighborhood surrounding 340-acre Fort Steilacoom Park; mature trees, well-kept SFR stock, and a community feel popular with families.',
    },
    {
      name: 'Lakewood Towne Center',
      blurb:
        'Mixed-use corridor in central Lakewood with newer condominiums and townhomes above retail; convenient for commuters and buyers seeking walkable amenities.',
    },
    {
      name: 'American Lake',
      blurb:
        'Residential area bordering American Lake with recreational appeal; single-family homes on larger lots drawing buyers who want suburban space near the water.',
    },
  ],
  typicalHomeValueRange: { min: 460_000, max: 560_000 },
  localMarketProse: [
    "Lakewood is the second-largest city in Pierce County with a population of approximately 64,000, situated immediately adjacent to Joint Base Lewis-McChord — the largest single employer in the South Sound region with roughly 55,000 military and civilian personnel. That proximity shapes Lakewood's economy more directly than almost any other city in Washington: retail corridors along South Tacoma Way, healthcare anchored by St. Clare Hospital, and a dense concentration of service businesses all orbit around JBLM demand. Home prices in Lakewood have ranged from the mid-$460s to the mid-$550s in early 2026, sitting meaningfully below the Tacoma city median and making it one of the more affordable entry points in Pierce County.",
    "The housing stock in Lakewood reflects its mid-20th-century origins as a bedroom community for the base: ranch-style homes, split-levels, and bungalows dominate, with newer townhome and condo developments concentrated along the Lakewood Towne Center corridor. VA loans are the dominant purchase product given the military population — many buyers cycle onto and off the base every two to three years, creating consistent demand in both purchase and rental markets. First-time buyers using FHA and conventional loans are also active, attracted by prices roughly 15–20% below the county seat. HELOC demand is steady among longtime Lakewood owners who built equity during the 2017–2022 appreciation run.",
    "What draws buyers to Lakewood is a combination of affordability, military community infrastructure, and direct access to Interstate 5 and Highway 512 for commutes toward Tacoma, Olympia, and Seattle. The Lakewood Station on Amtrak Cascades also provides a rail connection for buyers who commute toward Seattle without wanting to drive. Inventory in Lakewood runs tight relative to historical norms — typically under 1.5 months of supply — with homes selling in 20 to 35 days and sale-to-list ratios near 99%. For military families expecting a permanent-change-of-station move within a few years, locking in a competitive rate and building equity during a Lakewood tour remains a financially sound approach in 2026.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Can I use a VA loan to buy a home in Lakewood near JBLM?',
      answer:
        'Yes — VA loans are one of the strongest purchase tools in the Lakewood market given the city\'s proximity to Joint Base Lewis-McChord. VA loans offer 0% down, no PMI, and competitive rates for qualified veterans and active-duty service members. We quote VA alongside conventional and FHA so you can see the full monthly-cost comparison for your specific Lakewood property. Call or text (949) 579-2057 to start.',
    },
    {
      question: 'What is the typical home price range in Lakewood, WA?',
      answer:
        'In early 2026, typical home values in Lakewood run from roughly $460,000 to $560,000 depending on neighborhood, property size, and condition. Tillicum and Woodbrook areas near the base tend toward the lower end of that range, while larger single-family homes near American Lake or Fort Steilacoom Park trend higher. We pull current comps for any specific Lakewood address as part of pre-approval.',
    },
    {
      question: 'Should I HELOC or cash-out refinance my Lakewood home?',
      answer:
        'If your existing mortgage rate is below 5% — typical for 2020–2022 Lakewood buyers — a HELOC preserves that low first-lien rate while giving you access to accumulated equity. A cash-out refinance replaces your entire loan at today\'s rate, which often increases total monthly cost significantly. We model both options against your Lakewood property to show you the real numbers.',
    },
  ],
};
