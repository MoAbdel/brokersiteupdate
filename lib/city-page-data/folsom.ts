import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const folsom: CityPageData = {
  citySlug: 'folsom',
  cityName: 'Folsom',
  state: 'California',
  region: 'Sacramento',
  metaTitle: 'Folsom CA Mortgage Broker | Conventional, HELOC, VA',
  metaDescription:
    'Folsom CA mortgage broker serving Sacramento area homebuyers. Typical home values $700K-$900K. Conventional, VA, HELOC, jumbo, refinance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Empire Ranch',
      blurb:
        'Established master-planned community in south Folsom built around a golf course; 1990s-2000s SFR ranging from 2,000-4,000 sq ft, consistent resale demand.',
    },
    {
      name: 'Broadstone',
      blurb:
        'North Folsom planned neighborhood with newer construction and community amenities; popular with tech workers commuting to the Intel and other employer campuses.',
    },
    {
      name: 'Willow Creek',
      blurb:
        'Well-established west Folsom neighborhood with mature landscaping and mid-1980s to mid-1990s SFR stock; entry-to-mid price tier within the Folsom market.',
    },
    {
      name: 'Briggs Ranch',
      blurb:
        'Quiet residential area in northeast Folsom near Folsom Lake; larger lots, some equestrian-adjacent parcels, premium pricing within the city.',
    },
    {
      name: 'Historic District',
      blurb:
        'Original Folsom town core with Victorian-era and early-20th-century homes; walkable to Historic Sutter Street, smaller SFR footprints but strong character and demand.',
    },
  ],
  typicalHomeValueRange: { min: 700_000, max: 900_000 },
  localMarketProse: [
    "Folsom is an affluent Sacramento-area city of roughly 82,000 situated along the American River at the base of the Sierra Nevada foothills. The local economy is anchored by Intel Corporation, which operates a major campus employing thousands of chip designers and engineers; Folsom is sometimes called the birthplace of the Intel microprocessor. Other major employers include the California Department of Corrections headquarters, Broadstone-area technology and biotech firms, and a robust retail and service sector centered on the Palladio and Folsom Premium Outlets shopping corridors. Folsom has consistently ranked among California's safest cities and holds some of the strongest public school ratings in the Sacramento region.",
    "Folsom's typical home value in early 2026 runs $750,000-$850,000, making it the highest-priced market among Sacramento-area suburban cities outside of El Dorado Hills. The housing stock is predominantly single-family detached with a mix of 1980s-1990s subdivisions in the city's west side and newer, larger-footprint homes in south and east Folsom communities like Empire Ranch and Briggs Ranch. Most Folsom buyers are move-up households or high-income professionals, with conventional conforming loans (up to $806,500) handling most transactions. Jumbo loans are needed for homes above that threshold. HELOC demand is strong given the equity buildup in the 2019-2021 vintage.",
    "What draws buyers to Folsom is a combination of Intel and technology employer proximity, outstanding public schools, outdoor recreation access to Folsom Lake and American River trail systems, and a quality of life that is difficult to match at this price point elsewhere in California. The commute to downtown Sacramento is 25-35 minutes and Folsom operates a Light Rail terminus connecting to the broader Sacramento Regional Transit network. In 2026, Folsom's market is balanced to slightly seller-favoring — homes typically sell in 35-50 days with modest competition. The primary refinance pattern among Folsom homeowners is HELOC for home improvement projects, given the high equity positions among 2019-2022 buyers.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What loan amount limits apply to Folsom home purchases?',
      answer:
        'El Dorado County (where Folsom sits) has a 2026 conforming loan limit of $806,500 for conventional loans. Folsom homes priced above roughly $900,000-$1M with typical down payments will require a jumbo loan. Jumbo underwriting is manageable for Folsom buyers with stable Intel or government employment and solid reserves. We originate both conventional conforming and jumbo loans and will quote both side-by-side so you can see the rate and cost differences.',
    },
    {
      question: 'Is a HELOC a good option for Folsom homeowners in 2026?',
      answer:
        'For most Folsom owners who bought in 2019-2022 at rates under 4%, yes — a HELOC lets you access $150K-$300K of equity for a kitchen remodel, ADU addition, or investment while keeping that low primary rate intact. HELOC rates are variable and currently higher than peak-pandemic first mortgage rates, but the alternative — a cash-out refinance — would replace your low rate on the entire balance. We compare both options and show you the total 10-year cost difference.',
    },
    {
      question: 'Do Intel employees get any special mortgage benefits in Folsom?',
      answer:
        'Intel itself does not run a mortgage benefit program, but salaried W-2 Intel employees are among the easiest to approve for conventional and jumbo loans because of income stability, RSU documentation (we know how to handle vesting schedules), and strong credit profiles. If you have Intel stock units as part of your compensation, call or text (949) 579-2057 and we will walk you through exactly how RSU income factors into your qualifying ratios.',
    },
  ],
};
