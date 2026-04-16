import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const chulaVista: CityPageData = {
  citySlug: 'chula-vista',
  cityName: 'Chula Vista',
  state: 'California',
  region: 'San Diego',
  metaTitle: 'Chula Vista Mortgage Broker | FHA, VA, Conventional',
  metaDescription:
    'Chula Vista CA mortgage broker serving San Diego County buyers. Typical home values $775K-$830K. FHA, VA, HELOC, refinance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Eastlake',
      blurb:
        'Master-planned community developed from 1986 with SFR, townhomes, a lake, parks, and retail; consistent demand from families and first-time buyers drawn to the schools and amenities.',
    },
    {
      name: 'Otay Ranch',
      blurb:
        'Large planned community begun in 1999 on 23,000 acres in east Chula Vista; newer SFR inventory with Mello-Roos assessments, popular with buyers seeking more square footage than central San Diego.',
    },
    {
      name: 'Rancho del Rey',
      blurb:
        'Established 1989 planned community with 1990s SFR; good freeway access, strong school ratings, and a mix of entry-level and move-up homes at prices below comparable Eastlake inventory.',
    },
    {
      name: 'West Chula Vista',
      blurb:
        'Original downtown area west of Hilltop Drive; older SFR stock, no Mello-Roos, and lower per-square-foot prices than east-side communities — the primary entry point for FHA buyers.',
    },
    {
      name: 'Millenia',
      blurb:
        'Newer mixed-use community in eastern Chula Vista with contemporary townhomes and condos; transit-oriented design near the Gaylord Pacific Resort corridor and I-805.',
    },
  ],
  typicalHomeValueRange: { min: 775_000, max: 830_000 },
  localMarketProse: [
    "Chula Vista is San Diego County second-largest city with a population of approximately 279,000, making it the 15th most populous city in California. The local economy is anchored by education and healthcare: Sweetwater Union High School District (4,053 employees), Chula Vista Elementary School District (3,508), Sharp Chula Vista Medical Center (3,131), Southwestern College (2,010), and Scripps Mercy Hospital Chula Vista (1,073) are the top employers. The opening of the Gaylord Pacific Resort and Convention Center has added hospitality employment and is driving new commercial development in the Millenia district.",
    "The Chula Vista housing market in early 2026 shows median sale prices in the $775,000-$830,000 range with modest 2-3% year-over-year appreciation. West Chula Vista offers the most attainable entry points, with SFR trading in the $700,000s and condos in the $550,000-$650,000 range. East Chula Vista communities like Otay Ranch and Eastlake run higher, often $820,000-$950,000 for SFR, but carry Mello-Roos Community Facilities District assessments that add $150-$400 per month to carrying costs. Most buyers use conventional loans with 5-10% down or VA loans, which carry no down-payment requirement and are widely used by the large active-duty and veteran population near Naval Base San Diego.",
    "What drives buyer demand in Chula Vista is the best value proposition in San Diego County: more square footage, newer inventory, and planned-community amenities at prices meaningfully below Mission Valley, La Mesa, or North Park. The city is also the only part of the San Diego market with significant new construction supply, giving buyers options that are rare elsewhere in the county. For buyers comparing neighborhoods, the key financial decision is East versus West: east-side communities offer newer homes and better schools but carry Mello-Roos fees that we always model during pre-approval. VA loan demand is particularly strong here, and we specialize in navigating VA guidelines for both purchases and refinances. Call or text (949) 579-2057 for a Chula Vista-specific pre-approval and Mello-Roos breakdown.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Are there Mello-Roos fees in Chula Vista neighborhoods?',
      answer:
        'Yes, in East Chula Vista. Communities like Otay Ranch, Eastlake, and Millenia were built within Community Facilities Districts (CFDs) that assess Mello-Roos fees of $150-$400 per month depending on the specific district and parcel. West Chula Vista does not have Mello-Roos. We pull the exact CFD schedule for any property during pre-approval so the total monthly carrying cost is clear before you make an offer.',
    },
    {
      question: 'Is a VA loan a good option for buying in Chula Vista?',
      answer:
        'VA loans are an excellent fit for Chula Vista, where the active-duty and veteran population near Naval Base San Diego creates consistent demand. VA loans require zero down payment, no private mortgage insurance, and competitive rates. At Chula Vista medians of $775K-$830K, a VA loan saves $60,000-$85,000 in upfront down payment compared to a conventional 10% down purchase. We are experienced VA lenders and can typically close VA purchases in 30 days.',
    },
    {
      question: 'What loan program is best for first-time buyers in Chula Vista?',
      answer:
        'It depends on service history and credit profile. VA loans are the top choice for eligible veterans and active-duty buyers. For civilians, FHA (3.5% down, flexible credit) and conventional (5% down, no upfront MIP) are both viable at Chula Vista prices — the 2026 FHA limit for San Diego County is $1,006,250, well above the city median. CalHFA and California Dream For All programs can add down-payment assistance on top of either. We compare all options side-by-side at no charge. Call (949) 579-2057 to get started.',
    },
  ],
};
