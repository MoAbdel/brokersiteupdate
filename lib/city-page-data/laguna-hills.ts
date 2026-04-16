import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const lagunaHills: CityPageData = {
  citySlug: 'laguna-hills',
  cityName: 'Laguna Hills',
  state: 'California',
  region: 'OC',
  metaTitle: 'Laguna Hills CA Mortgage Broker | Loans & Refinance',
  metaDescription:
    'Laguna Hills CA mortgage broker serving South OC. Home values $800K-$1.05M typical. Conventional, FHA, VA, HELOC, cash-out refi. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Lomas Laguna',
      blurb:
        'Mid-priced mix of single-family homes and townhomes near the Aliso Creek corridor; known for relative affordability compared to neighboring communities and good school access.',
    },
    {
      name: 'Indian Creek',
      blurb:
        'Established residential neighborhood with walkable streets and strong family-oriented character; well-regarded schools and access to Aliso Creek Trail make it a consistent draw for first-time buyers.',
    },
    {
      name: 'Aspen Creek',
      blurb:
        'Single-family neighborhood with direct access to the Aliso Creek Trail and nearby parks; owner-occupancy skews high and homes turn over at a measured pace reflecting long-term resident stability.',
    },
    {
      name: 'Nellie Gail Ranch',
      blurb:
        'Larger-lot community with equestrian trails and custom homes on spacious parcels; sits at the upper end of the Laguna Hills price range but remains well below comparable coastal-city equestrian properties.',
    },
    {
      name: 'Sunrise',
      blurb:
        'Mixed-product community with townhomes, condos, and smaller SFR homes; the most accessible entry price point in Laguna Hills, popular with FHA and 5%-down conventional buyers.',
    },
  ],
  typicalHomeValueRange: { min: 800_000, max: 1_050_000 },
  localMarketProse: [
    "Laguna Hills is a city of approximately 31,400 residents in South Orange County, incorporated in 1991 after separating from the unincorporated Laguna Hills community that had grown through the 1960s and 1970s. The city's commercial core centers on the El Toro Road corridor near Interstate 5, which supports a mix of medical offices, professional services, and retail. Major employment nearby includes Saddleback Memorial Medical Center, a range of healthcare and professional services firms along the I-5 corridor, and the broader South Orange County employment base accessible via the 5 and 73 freeways within 15-25 minutes.",
    "Laguna Hills presents one of the more accessible price points in coastal-adjacent South Orange County. Redfin data from early 2026 shows median sale prices ranging from $810K to $1.08M depending on property type and sub-market timing, with single-family homes in established neighborhoods like Nellie Gail Ranch carrying premiums while attached product in Sunrise and Lomas Laguna gives FHA and conventional buyers a more achievable path. Owner-occupancy in the city runs at nearly 70%, reflecting a stable owner base. Purchase activity in 2026 has been driven by move-up buyers from more expensive OC cities and first-time buyers priced out of Laguna Beach and Laguna Niguel. HELOC demand is steady among owners who bought before 2022 and have accumulated equity.",
    "Buyers gravitate to Laguna Hills for its location just inland from Laguna Beach and Aliso Viejo with meaningfully lower price tags, strong trail access via the Aliso Creek corridor, and a quiet residential character that appeals to families and professionals seeking suburban stability. The city's relatively compact size — just over seven square miles — keeps most neighborhoods within a few minutes of the 5 freeway, supporting commuter demand from San Diego, Irvine, and the South Bay. In 2026, search traffic from Laguna Hills is dominated by property tax questions and inquiries from homeowners exploring HELOC options to fund home improvement projects without disturbing their existing mortgage rate.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What loan programs work best for Laguna Hills home buyers in 2026?',
      answer:
        'For Laguna Hills homes priced $800K-$1.05M, conventional loans with 5-20% down are the most common path. FHA loans work well for townhomes and condos in the $700K-$850K range where the loan amount stays under FHA limits. CalHFA down-payment assistance programs are available for qualified first-time buyers. Buyers targeting larger SFR homes above the OC conforming limit ($1,209,750) need jumbo financing. We run loan comparisons across all programs so you can make an informed decision.',
    },
    {
      question: 'What is the property tax rate in Laguna Hills, CA?',
      answer:
        'Laguna Hills is in Orange County, so the Proposition 13 base rate is 1% of assessed value. Depending on the specific neighborhood, additional assessments for lighting, landscaping, and some community facilities may add 0.1%-0.3%. Newer developments carry Mello-Roos assessments in some cases. Effective rates for most Laguna Hills homes run approximately 1.1%-1.35% of purchase price. We include a property-specific tax estimate in every pre-approval package.',
    },
    {
      question: 'Is Laguna Hills a good area to buy a home in 2026?',
      answer:
        'Laguna Hills offers one of the better value propositions in South Orange County — you get coastal-adjacent location, strong schools, and trail access at prices notably below Laguna Beach and Laguna Niguel. Inventory remains tight with less than two months of supply, meaning well-priced homes still move quickly. For buyers who need more space or a lower price point than neighboring cities offer, Laguna Hills is a practical choice. Call or text (949) 579-2057 to get pre-approved and understand your buying power in today\'s Laguna Hills market.',
    },
  ],
};
