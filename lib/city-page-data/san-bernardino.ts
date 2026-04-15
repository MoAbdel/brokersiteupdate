import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const sanBernardino: CityPageData = {
  citySlug: 'san-bernardino',
  cityName: 'San Bernardino',
  state: 'California',
  region: 'Inland Empire',
  metaTitle: 'San Bernardino Mortgage Broker | Loans & Refinance',
  metaDescription:
    'San Bernardino CA mortgage broker serving the Inland Empire. Home values $450K-$610K typical. FHA, conventional, VA, HELOC, cash-out. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'University District',
      blurb:
        'Neighborhood anchored by California State University, San Bernardino; mix of SFR and student-oriented rentals, steady demand.',
    },
    {
      name: 'Shandin Hills',
      blurb:
        'Mid-elevation residential area in north San Bernardino with hiking trails and parks; established SFR subdivisions, family-oriented.',
    },
    {
      name: 'Arrowhead Springs',
      blurb:
        'Foothill neighborhood at roughly 3,000 feet elevation with mountain access; older and newer SFR, cooler microclimate than the valley floor.',
    },
    {
      name: 'West Side / Mount Vernon Avenue',
      blurb:
        'Historically Latino working-class community on the west side; smaller older SFR, strong first-time-buyer and FHA activity.',
    },
    {
      name: 'Downtown / Central',
      blurb:
        'Mixed-ethnic central neighborhoods; focus of ongoing walkability and revitalization efforts, affordable entry-level SFR.',
    },
  ],
  typicalHomeValueRange: { min: 450_000, max: 610_000 },
  localMarketProse: [
    "San Bernardino is the county seat of San Bernardino County and one of the largest cities in the Inland Empire, with a population of roughly 222,000. The local economy is anchored by Stater Bros. (15,000-25,000 employees headquartered in the region), the County of San Bernardino, San Bernardino City Unified School District, and logistics operations taking advantage of the city's position at the I-10, I-215, and SR-210 freeway intersections. Median household income sits near $64,000 (2023), with roughly a fifth of residents below the poverty line — reflecting a market that has faced real economic headwinds since the closure of Norton Air Force Base in 1994 and a Chapter 9 municipal bankruptcy that resolved in 2017.",
    "The San Bernardino housing market in early 2026 shows median sale prices between $515,000 and $610,000, with Zillow's typical home value near $454,000 — making it one of the most affordable larger cities in Southern California. Year-over-year price change has been mixed, up 3-7% by some sources and down 2-3% by others, reflecting the broad variation within city submarkets. Housing stock is predominantly single-family detached with a strong share of owner-occupied buyers and a healthy first-time-buyer profile — FHA loans are a large share of purchase volume given the price points and flexible credit guidelines.",
    "What brings buyers to San Bernardino is relative affordability by Southern California standards, an established housing stock at price points that still support FHA and VA financing, and improving walkability and investment in the downtown core. Most buyers are first-time purchasers from within the Inland Empire or move-ups from denser parts of LA County. For existing owners, HELOC and cash-out demand has been steady — particularly among 2019-2022 purchase cohorts who have built meaningful equity and want to tap it for renovations or debt consolidation. Property-tax questions (with rates typically around 1.1-1.4% including local assessments) drive much of the San Bernardino-specific search signal we see.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Can I buy a San Bernardino home with FHA and 3.5% down?',
      answer:
        'Yes, and FHA is one of the most common paths for first-time buyers in San Bernardino given the price points. At the city median of roughly $500,000, 3.5% down is about $17,500. FHA credit requirements are more flexible than conventional, and the lower PMI structure can beat conventional at lower credit scores. We quote FHA and conventional side-by-side so you can compare total monthly cost.',
    },
    {
      question: 'Are there down-payment assistance programs for San Bernardino buyers?',
      answer:
        'Yes. CalHFA (California Housing Finance Agency) offers multiple down-payment assistance programs that layer on top of FHA or conventional financing, and some San Bernardino County programs may also apply to qualified buyers. These can cover part or all of the 3.5% FHA down payment, making homeownership reachable at lower savings levels. We help you stack the right combination during pre-approval.',
    },
    {
      question: 'Is a HELOC a good option for San Bernardino homeowners in 2026?',
      answer:
        'For owners who bought or refinanced in 2020-2022, yes — your first-mortgage rate is almost certainly better than anything available today, and a HELOC or home equity loan lets you tap equity without surrendering that rate. San Bernardino equity growth over the past five years has been substantial for 2019-2020 buyers, making HELOC math particularly favorable. Call or text (949) 579-2057 for a property-specific quote.',
    },
  ],
};
