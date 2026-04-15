import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const longBeach: CityPageData = {
  citySlug: 'long-beach',
  cityName: 'Long Beach',
  state: 'California',
  region: 'LA',
  metaTitle: 'Long Beach Mortgage Broker | Rates & Loan Programs',
  metaDescription:
    'Long Beach CA mortgage broker serving LA County homeowners. Conventional, FHA, VA, HELOC, cash-out refinance. Typical $700K-$950K. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Bixby Knolls',
      blurb:
        'Established early-20th-century neighborhood in north Long Beach; mix of Craftsman bungalows, ranch homes, and some newer infill.',
    },
    {
      name: 'California Heights',
      blurb:
        'Historic residential area carved from rancho lands in 1916; Spanish Revival and Craftsman homes, strong owner-occupancy.',
    },
    {
      name: 'Los Cerritos',
      blurb:
        'Quiet residential neighborhood developed from former ranch property; mid-century and ranch-style homes on larger lots.',
    },
    {
      name: 'North Long Beach',
      blurb:
        'Diverse working-class neighborhood home to the Carmelitos affordable-housing complex; mix of SFR, duplexes, and smaller multi-unit buildings.',
    },
    {
      name: 'Wrigley',
      blurb:
        'Mid-century residential area west of downtown; Spanish-style bungalows and 1920s-1940s SFR, popular with first-time buyers.',
    },
  ],
  typicalHomeValueRange: { min: 700_000, max: 950_000 },
  localMarketProse: [
    "Long Beach is a working port city in southern Los Angeles County with a population of roughly 467,000, making it the seventh-largest city in California. The local economy is anchored by education (Long Beach Unified School District, with about 12,000 employees, is the largest employer), city government, Long Beach Memorial Medical Center, the Port of Long Beach (supporting over 30,000 local jobs through more than $140 billion in annual trade), aerospace (Boeing), and healthcare. Median household income sits around $80,000, with a mix of working-class, professional, and mid-tier households across the city.",
    "The Long Beach housing market in early 2026 shows median sale prices between $690,000 and $835,000 depending on source and segment — single-family detached homes often trade in the $900,000s while condos and duplexes trade lower. The market tightened modestly in 2026 and remains seller-leaning in most submarkets, with inventory running low and homes selling near 98-100% of list. Most purchase activity runs through FHA and conventional financing, with a steady stream of first-time buyers, move-up buyers from Orange County/South Bay, and investors focused on the strong rental demand.",
    "What brings buyers to Long Beach is a combination of relative affordability (compared to Westside LA and Orange County), proximity to both LA and OC job markets, diverse housing stock at multiple price points, and walkable historic neighborhoods. For existing owners, HELOC and cash-out demand has been strong in 2026 — especially among homeowners who bought at 2020-2022 rates and want to tap equity for renovations, investment properties, or debt consolidation while preserving their first-mortgage rate. Property-tax questions drive the largest Long Beach-specific GSC signal, reflecting buyers and owners trying to budget total monthly housing costs accurately.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the effective property tax rate in Long Beach?',
      answer:
        'Long Beach property tax follows the LA County base rate of 1% of assessed value under Proposition 13, plus voter-approved local assessments. Effective rates typically run 1.1%-1.25% of purchase price in Long Beach, with slight variation by specific tax rate area. We can pull a property-specific estimate as part of pre-approval.',
    },
    {
      question: 'Can I buy a Long Beach home with 5% down?',
      answer:
        'Yes. Conventional loans allow 3-5% down for qualified buyers; FHA allows 3.5% down with more flexible credit guidelines. With Long Beach medians around $700K-$900K, expect a down-payment in the $21K-$45K range on conventional or roughly $25K-$35K on FHA. We quote both side-by-side so you can compare total cost.',
    },
    {
      question: 'Should I refinance or HELOC my Long Beach home?',
      answer:
        'If your current first-mortgage rate is below 5% (typical for 2020-2022 buyers), a HELOC or home equity loan almost always beats a cash-out refinance — you keep the low first-lien rate and only pay interest on the equity you actually use. If your rate is above 7%, a rate-and-term or cash-out refinance may make sense. We model both so you can see the total-cost comparison.',
    },
  ],
};
