import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const escondido: CityPageData = {
  citySlug: 'escondido',
  cityName: 'Escondido',
  state: 'California',
  region: 'San Diego',
  metaTitle: 'Escondido CA Mortgage Broker | FHA, VA, Conventional',
  metaDescription:
    'Escondido CA mortgage broker serving North County San Diego buyers. Typical values $770K-$820K. FHA, VA, HELOC, refinance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Downtown Escondido',
      blurb:
        'Revitalized city center on Grand Avenue with arts venues, breweries, and restaurants; surrounding residential streets offer older Victorian and Craftsman homes at below-county-median prices.',
    },
    {
      name: 'East Canyon',
      blurb:
        'Hillside community with panoramic views and proximity to San Diego Zoo Safari Park and Kit Carson Park; mix of 1980s-2000s SFR popular with nature-oriented buyers.',
    },
    {
      name: 'Felicita',
      blurb:
        'Established neighborhood near historic Felicita County Park; well-maintained SFR with trail access to hiking and pickleball courts, drawing families and active-lifestyle buyers.',
    },
    {
      name: 'Rancho San Pasqual',
      blurb:
        'Gated community with Mediterranean-style homes, mountain views, a clubhouse, and a pool; mid-2000s SFR inventory with HOA amenities and strong resale demand.',
    },
    {
      name: 'Harmony Grove',
      blurb:
        'Semi-rural area with homes nestled among oak trees and rolling hills; larger lots than typical Escondido neighborhoods and a quieter feel, while remaining within 15 minutes of the 15 freeway.',
    },
  ],
  typicalHomeValueRange: { min: 770_000, max: 820_000 },
  localMarketProse: [
    "Escondido is an inland North County San Diego city of approximately 151,000 residents, the fourth-largest city in the county and a regional hub for healthcare and education. The top employers are Palomar Medical Center (2,906 employees), Escondido Union School District (2,077), the City of Escondido (959), and Escondido Union High School District (881). Escondido also benefits from significant tourism and hospitality employment tied to the San Diego Zoo Safari Park, located five miles east of the city. The local economy is diversified and the median household income is approximately $73,000.",
    "The Escondido housing market in early 2026 shows median sale prices in the $770,000-$820,000 range, with approximately 5-6% year-over-year appreciation. The housing stock is notably diverse: Downtown Escondido and the Old Historic District offer Victorian and Craftsman homes at more attainable prices, while East Canyon, Felicita, and Rancho San Pasqual offer newer or substantially renovated SFR at the upper end of the local market. Most buyers in Escondido use conventional loans with 5-10% down or FHA; VA loans also see strong uptake from the veteran population. Homes typically sell within 30-45 days at close to list price, with overall inventory still running below two months of supply.",
    "What draws buyers to Escondido is straightforward: inland North County delivers meaningfully more housing value per dollar than coastal communities like Carlsbad, Encinitas, or Del Mar. A home that might cost $1.3 million in Carlsbad is often available in the $800,000s in Escondido, on a larger lot, with North County schools and easy freeway access to the I-15 corridor's technology and healthcare employment. The Safari Park and Daley Ranch trail system also give the city a genuine outdoor-recreation identity that attracts owner-occupants committed to the area long-term. Property tax questions are the top GSC search signal we see from Escondido-area users. For current owners, HELOC demand has increased in 2026 as owners tap equity built through 2020-2025 appreciation for home improvements or ADU construction. Call or text (949) 579-2057 to start a pre-approval or equity analysis.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the property tax rate in Escondido, CA?',
      answer:
        'Escondido follows the San Diego County base rate of 1% of assessed value under Proposition 13, plus local voter-approved assessments. Effective rates typically run 1.1%-1.25% of purchase price. On an $800,000 home that is roughly $8,800-$10,000 per year, or $733-$833 per month. Some newer developments include HOA fees and, in limited areas, Mello-Roos assessments — we check for both during pre-approval so total monthly costs are transparent.',
    },
    {
      question: 'What loan programs work best for first-time buyers in Escondido?',
      answer:
        'At Escondido medians of $770K-$820K, both conventional (5% down, up to $806,500) and FHA (3.5% down, San Diego County limit of $1,006,250 in 2026) are viable. Veterans and active-duty buyers should strongly consider VA loans, which require no down payment at all. CalHFA and California Dream For All down-payment assistance programs can layer on top of conventional or FHA loans. We compare every program side-by-side at no charge.',
    },
    {
      question: 'Is it a good time to refinance or open a HELOC in Escondido?',
      answer:
        'If you bought in 2019-2022 and still hold a sub-5% mortgage rate, a HELOC is almost always the better path. Escondido homeowners from that era typically hold $150,000-$280,000 in equity and a HELOC gives flexible, tax-deductible access without resetting the primary rate. Cash-out refinancing is more appropriate when your current rate already exceeds 6.5%. Call or text (949) 579-2057 for a no-cost equity review and comparison.',
    },
  ],
};
