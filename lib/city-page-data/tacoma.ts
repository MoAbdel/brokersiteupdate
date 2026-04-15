import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const tacoma: CityPageData = {
  citySlug: 'tacoma',
  cityName: 'Tacoma',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Tacoma Mortgage Broker | HELOC, FHA, VA, Refinance',
  metaDescription:
    'Tacoma WA mortgage broker serving Pierce County and South Sound. Home values $460K-$640K typical. Conventional, FHA, VA, HELOC. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Stadium District',
      blurb:
        'Established neighborhood near UW-Tacoma with historic architecture; walkable to downtown, mix of older SFR and condos.',
    },
    {
      name: 'Proctor District',
      blurb:
        'North Tacoma commercial-residential hub with a walkable main street; early-20th-century bungalows and craftsman homes, strong owner-occupancy.',
    },
    {
      name: 'North Slope',
      blurb:
        'Residential area in North Tacoma near parks and schools; Victorian and Craftsman homes, quiet tree-lined streets.',
    },
    {
      name: 'Hilltop',
      blurb:
        'Central neighborhood with diverse demographics and historic Victorian homes; ongoing revitalization, mix of SFR and multi-unit.',
    },
    {
      name: 'Salishan',
      blurb:
        'East Tacoma master-planned community with newer SFR inventory; family-oriented, HOPE VI redevelopment completed in the 2000s.',
    },
  ],
  typicalHomeValueRange: { min: 460_000, max: 640_000 },
  localMarketProse: [
    "Tacoma is the largest city in the South Puget Sound region with a population of roughly 228,000, making it Washington's third-largest city. The local economy is anchored by Joint Base Lewis–McChord (with approximately 54,000 military personnel in the immediate area — the largest single employer in the region), MultiCare Health System (8,264 employees), the State of Washington (7,859), the Port of Tacoma, and CHI Franciscan Health. The city has undergone significant downtown revitalization since the 1990s, with historic warehouses converted to mixed-use space and the waterfront transformed into a public amenity.",
    "The Tacoma housing market in early 2026 shows broad price variation depending on measurement: Zillow's typical home value is near $470,000, the city-wide median sale price runs roughly $460,000, and single-family detached homes often trade near $633,000. The market is very competitive — homes typically sell in 19-34 days with inventory at only 0.34 months of supply and a 99.8% sale-to-list ratio. Housing stock is a mix of early-20th-century bungalows in the Stadium, Proctor, and North Slope districts and newer subdivisions in East Tacoma and the south end. Most purchase activity combines first-time buyers from Pierce County with Seattle-area transplants seeking more affordability than King County offers.",
    "What brings buyers to Tacoma is a combination of dramatic affordability versus Seattle (typically 30-40% lower median prices), strong military-driven demand from JBLM, proximity to both Seattle and Olympia job markets, and a revitalizing downtown core. VA loans are a disproportionately large share of purchase financing given the military population. For existing owners, HELOC and cash-out demand has been steady through 2026 — particularly among 2020-2022 purchase cohorts whose first-mortgage rates remain well below current market, making equity-access options far more cost-effective than a full refinance.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Can I use my VA loan benefit in Tacoma?',
      answer:
        'Yes — Tacoma is one of the strongest VA-loan markets in the country given its proximity to Joint Base Lewis-McChord. VA loans offer 0% down, no PMI, and competitive rates for qualified veterans and active-duty service members. We quote VA alongside conventional and FHA so you can compare total monthly cost for your specific Tacoma purchase.',
    },
    {
      question: 'How does Washington State handle property taxes?',
      answer:
        'Washington has no state income tax but relies more heavily on property tax than many states. Pierce County effective property-tax rates typically run 0.95%-1.15% of assessed value, varying by levy district and voter-approved bonds. We pull the specific rate for any Tacoma property as part of pre-approval so there are no surprises on monthly payment calculations.',
    },
    {
      question: 'Should I HELOC or cash-out refinance my Tacoma home?',
      answer:
        'If your first-mortgage rate is below 5% (typical for 2020-2022 Tacoma buyers), a HELOC or home equity loan almost always beats a cash-out refinance on total cost — you keep the low first-lien rate intact and only pay on the equity you draw. If your rate is above 7%, a cash-out refinance may make sense. We model both options against your specific Tacoma property.',
    },
  ],
};
