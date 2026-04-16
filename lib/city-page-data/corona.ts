import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const corona: CityPageData = {
  citySlug: 'corona',
  cityName: 'Corona',
  state: 'California',
  region: 'Inland Empire',
  metaTitle: 'Corona CA Mortgage Broker | FHA, VA, Conventional',
  metaDescription:
    'Corona CA mortgage broker serving Inland Empire homebuyers. Typical home values $700K-$800K. FHA, conventional, VA, HELOC, refinance. Call (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'South Corona',
      blurb:
        'Master-planned subdivisions near the 15 freeway and Dos Lagos; newer SFR inventory with strong school ratings, popular with families commuting to OC.',
    },
    {
      name: 'Sycamore Creek',
      blurb:
        'Planned community in east Corona with trail access and community amenities; mid-2000s SFR builds, active move-up and first-time buyer market.',
    },
    {
      name: 'Eagle Glen',
      blurb:
        'Golf course community in northwest Corona; mid-size SFR ranging from 2,000-3,500 sq ft, consistent demand from professionals and growing families.',
    },
    {
      name: 'Norco Hills border neighborhoods',
      blurb:
        'Corona homes adjacent to the Norco Hills area; larger lots, equestrian-friendly streets, slightly lower density than core Corona subdivisions.',
    },
    {
      name: 'Downtown Corona',
      blurb:
        'Historic city center with older Craftsman-era bungalows and mid-century SFR; entry-level price points within walking distance of the Metrolink station.',
    },
  ],
  typicalHomeValueRange: { min: 700_000, max: 800_000 },
  localMarketProse: [
    "Corona is a city of roughly 170,000 in western Riverside County, positioned at the intersection of the 91 and 15 freeways where the Inland Empire meets the Orange County border. The local economy draws on a diversified base: the Corona-Norco Unified School District is the largest employer, followed by Fender Musical Instruments (headquartered in Corona), Amazon and other logistics operators with facilities along the 15 corridor, Kaiser Permanente, and a substantial share of residents who commute to Orange County or Los Angeles. The city's proximity to Irvine and Anaheim — roughly 35-45 minutes by freeway or Metrolink — makes it one of the Inland Empire's strongest commuter markets.",
    "Corona's typical home value in early 2026 runs $720,000-$760,000, reflecting a market that has cooled slightly from 2022 peaks but remains competitive with 30-45 days on market and sale-to-list ratios near 99%. Housing stock is dominated by single-family detached homes built between 1990 and the mid-2000s, ranging from 1,600 to 3,500 square feet depending on the neighborhood and subdivision. Most buyers in Corona are move-up households relocating from Los Angeles or Orange County, along with a solid share of first-time buyers using FHA or conventional loans with 5-10% down. HELOC demand is elevated among owners who purchased 2019-2021 and now hold $200K-$350K in equity.",
    "What brings buyers to Corona is the most straightforward value proposition in the region: a home that would cost $1.1M-$1.4M in Irvine or Anaheim Hills is $700K-$800K here, on a lot that is often larger. The 91 Express Lanes and Metrolink Corona stations have meaningfully reduced commute friction. Mello-Roos (CFD) fees are common in newer Corona subdivisions and add $100-$400 per month to carrying costs — a factor we always surface during pre-approval so buyers are not surprised at closing. For existing owners, the primary 2026 inquiry pattern is HELOC for home improvements or equity-consolidation refinancing that preserves a low first-mortgage rate from the 2020-2022 era.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Are there Mello-Roos fees in Corona neighborhoods?',
      answer:
        'Yes. Many Corona subdivisions built after 1995 carry Community Facilities District (Mello-Roos/CFD) assessments ranging from $100 to $400 per month depending on the specific district. These fees are separate from the base Prop 13 property tax and expire after a set number of years. We pull the exact CFD schedule for any property during your pre-approval so the full carrying cost is clear before you make an offer.',
    },
    {
      question: 'What loan programs are best for first-time buyers in Corona?',
      answer:
        'At Corona medians of $720K-$760K, most first-time buyers use conventional loans with 5-10% down rather than FHA, because the FHA loan limit for Riverside County is $644,000 in 2026 — below most Corona prices. Conventional conforming loans go up to $806,500. CalHFA and California Dream For All programs can layer down-payment assistance on top. We compare all options side-by-side at no charge.',
    },
    {
      question: 'Should I get a HELOC or cash-out refinance on my Corona home?',
      answer:
        'If your first mortgage rate is below 5%, a HELOC almost always wins — it lets you tap equity without disturbing that low primary rate. Corona homeowners who bought 2019-2022 typically hold $200K-$350K in equity and a HELOC gives flexible access at a variable rate on just the drawn amount. Cash-out refinance makes more sense if your current rate is already above 6.5%. Call or text (949) 579-2057 for a Corona-specific side-by-side analysis.',
    },
  ],
};
