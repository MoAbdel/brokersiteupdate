import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const lakeForest: CityPageData = {
  citySlug: 'lake-forest',
  cityName: 'Lake Forest',
  state: 'California',
  region: 'OC',
  metaTitle: 'Lake Forest CA Mortgage Broker | Loans & Refinance',
  metaDescription:
    'Lake Forest CA mortgage broker serving South Orange County. Home values $880K-$1.2M typical. Conventional, FHA, VA, HELOC, cash-out. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Foothill Ranch',
      blurb:
        'Master-planned 1990s community with Spanish-revival SFR homes, top-rated Saddleback Valley USD schools, and proximity to Whiting Ranch Wilderness Park; family-oriented with consistent resale demand.',
    },
    {
      name: 'Portola Hills',
      blurb:
        'Hillside residential community bordering Cleveland National Forest; mix of midsize and larger homes with average prices around $880K, offering relative affordability within Lake Forest.',
    },
    {
      name: 'Baker Ranch',
      blurb:
        'Newer master-planned neighborhood (2010s build-out) with modern SFR and townhome product; community amenities include multiple pools, parks, and trails, popular with move-up buyers.',
    },
    {
      name: 'Lake Forest Beach and Tennis Club Area',
      blurb:
        'Established neighborhoods surrounding the two man-made community lakes; lakeside condos and SFR with private beach and recreational access, steady demand from buyers valuing resort-style amenities.',
    },
    {
      name: 'Serrano',
      blurb:
        'Gated and semi-gated communities in northern Lake Forest near El Toro Road; mix of townhomes and single-family homes well-situated for commuters heading to Irvine or the 5 and 241 corridors.',
    },
  ],
  typicalHomeValueRange: { min: 880_000, max: 1_200_000 },
  localMarketProse: [
    "Lake Forest is a city of roughly 85,900 residents in South Orange County, incorporated in 1991 and expanded in 2000 when Foothill Ranch and Portola Hills voted to join the city limits. The local economy is anchored by several significant employers headquartered in Lake Forest's industrial and technology parks: Panasonic Avionics Corporation (2,290 employees), LoanDepot (2,049), Oakley (1,400), Schneider Electric, and Spectrum Brands. The city's mix of light industrial, technology, and professional services employers gives residents a more local employment base than many purely residential OC suburbs.",
    "The Lake Forest housing market in early 2026 shows median sale prices in the $1.2 million range for SFR homes, with the Portola Hills sub-market running closer to $880K-$950K and newer Baker Ranch product pushing $1.1M-$1.25M. Inventory remains tight at roughly 1.5 months of supply, and well-priced homes are receiving multiple offers. The ownership rate of 68.7% means a large pool of potential HELOC and refinance customers among existing homeowners. First-time buyer activity is concentrated in the townhome and condo segment where conventional 5-10% down and FHA loans are the dominant financing tools, while move-up buyers typically bring conventional loans with larger down payments.",
    "What draws buyers to Lake Forest is its combination of employment proximity, outdoor recreation, and relatively attainable entry points within OC's expensive south county. Foothill Ranch and Portola Hills sit at the edge of Whiting Ranch Wilderness Park, appealing to hiking and mountain-biking enthusiasts. Baker Ranch's newer construction attracts buyers who want updated interiors without a custom-home price tag. The city's location along the 241 Foothill Corridor puts Irvine tech employers within 20-25 minutes. In 2026, the top refinance search signal in Lake Forest has been property tax questions and rate-and-term refinance scenarios for homeowners who locked in 2023-2024 rates above 7%.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the property tax rate in Lake Forest, CA?',
      answer:
        'Lake Forest falls within Orange County, so the base property tax rate is 1% of assessed value per Proposition 13. On top of that, many Lake Forest neighborhoods — especially newer communities like Baker Ranch and Foothill Ranch — carry additional Mello-Roos (CFD) assessments that can add 0.3%-0.8% annually. Effective total rates typically run 1.2%-1.6% of purchase price depending on the specific parcel. We can pull a property-specific tax estimate as part of your pre-approval or refinance analysis.',
    },
    {
      question: 'What are current mortgage rates for Lake Forest CA buyers in 2026?',
      answer:
        'Mortgage rates for Lake Forest buyers in 2026 depend on loan type, credit score, and down payment. Conventional 30-year rates for well-qualified borrowers have been in the mid-to-upper 6% range. For Lake Forest homes above $1,209,750 (OC conforming limit), you move into jumbo territory where rates are slightly higher and underwriting requirements more stringent. Call or text (949) 579-2057 for a live rate quote specific to your Lake Forest purchase.',
    },
    {
      question: 'Should I refinance my Lake Forest mortgage in 2026?',
      answer:
        'If you bought in Lake Forest in 2020-2022 with a rate below 4%, keep that loan — do not give it up for a cash-out refinance. A HELOC or home equity loan lets you tap your equity without disrupting the low primary rate. If you locked a rate above 7% in 2023-2024, a rate-and-term refinance may pencil out depending on your remaining loan balance and break-even horizon. Call (949) 579-2057 for a Lake Forest-specific refinance comparison.',
    },
  ],
};
