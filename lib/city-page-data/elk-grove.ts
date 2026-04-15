import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const elkGrove: CityPageData = {
  citySlug: 'elk-grove',
  cityName: 'Elk Grove',
  state: 'California',
  region: 'Sacramento',
  metaTitle: 'Elk Grove CA Mortgage Broker | Rates & Loan Programs',
  metaDescription:
    'Elk Grove CA mortgage broker serving Sacramento suburbs. Home values $520K-$690K typical. Conventional, FHA, VA, HELOC, cash-out. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Laguna West',
      blurb:
        'Master-planned community built around scenic lakes and walking trails; spacious SFR with strong resale value, popular with move-up families.',
    },
    {
      name: 'Stonelake',
      blurb:
        'Gated master-planned neighborhood with private clubhouse and amenities; well-maintained SFR, convenient to I-5 and shopping centers.',
    },
    {
      name: 'Sheldon',
      blurb:
        'Southern Elk Grove with larger lots and some equestrian properties; rural character, low density, mostly owner-occupied SFR.',
    },
    {
      name: 'Old Town Elk Grove',
      blurb:
        'Historic core of the original township; mix of older SFR and newer infill, walkable to local retail and community events.',
    },
    {
      name: 'North East Elk Grove',
      blurb:
        'Established residential area with newer subdivisions; mid-sized SFR lots, strong school district access, family-oriented.',
    },
  ],
  typicalHomeValueRange: { min: 520_000, max: 700_000 },
  localMarketProse: [
    "Elk Grove is a suburban city in Sacramento County with a population of roughly 183,000, making it one of the fastest-growing cities in California through the 2000s. The local economy is anchored by Apple (about 5,000 employees at its Elk Grove campus), the Elk Grove Unified School District (3,800+), California Correctional Health Care Services, Kaiser Permanente, and major retail operations including Walmart and Costco. The city is predominantly bedroom-community in character, with most working-age residents commuting to downtown Sacramento or the broader Sacramento-Roseville-Folsom metro for healthcare, tech, and government jobs.",
    "The Elk Grove housing market in early 2026 shows medians between $520,000 and $687,000 depending on source and property segment, with Zillow's typical home value near $628,000. Homes sell in about 29 days on average — notably faster than the previous year — with prices down modestly year-over-year from 2024 peaks. Housing stock is overwhelmingly single-family detached, with a mix of 1990s-2000s master-planned subdivisions (Laguna West, Stonelake) and newer builds on the city's southern and eastern edges. Most buyers are first-time or move-up households relocating from higher-cost Bay Area markets or from within Sacramento County, with typical down-payment profiles running 5-20% across conventional, FHA, and VA loans.",
    "What brings buyers to Elk Grove is a combination of Sacramento-metro job access at roughly half the Bay Area cost of living, strong schools within the Elk Grove Unified District, master-planned community amenities, and a mix of lake-access and larger-lot housing options that is unusual for its price point. For existing owners, HELOC demand has been steady — particularly among households who bought during the 2020-2022 rate dip and now want to tap equity for renovations or debt consolidation without surrendering their first-mortgage rate. Property-tax inquiries are also a Sacramento-wide theme, reflecting buyers comparing total monthly housing costs across Elk Grove, Roseville, and Folsom.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What loan programs are available for Elk Grove first-time buyers?',
      answer:
        'In Elk Grove, FHA loans (3.5% down) and conventional loans with 3-5% down both work well. VA loans are an option for qualified veterans and active-duty service members, especially given the military presence in the broader Sacramento region. CalHFA programs can layer down-payment assistance on top. We quote multiple programs side-by-side so you can compare total cost at the Elk Grove medians.',
    },
    {
      question: 'How does property tax work in Elk Grove?',
      answer:
        'Elk Grove follows the Sacramento County Prop 13 base rate of 1% of assessed value, plus voter-approved local assessments and potential Mello-Roos (Community Facilities District) fees in newer master-planned subdivisions. Effective rates typically run 1.1%-1.5% depending on the specific subdivision — newer builds tend to have higher effective rates due to CFD charges. We can pull a property-specific estimate as part of pre-approval.',
    },
    {
      question: 'Should I HELOC or refinance my Elk Grove mortgage in 2026?',
      answer:
        'If you bought or refinanced between 2020 and 2022, your first-mortgage rate is almost certainly better than anything available today — a HELOC or home equity loan lets you tap equity without giving up that rate. If you took a rate above 7% in 2023-2024, a rate-and-term refinance may now save you meaningful monthly payment. We model both against your specific Elk Grove property so you can see the real comparison.',
    },
  ],
};
