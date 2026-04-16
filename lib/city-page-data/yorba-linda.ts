import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const yorbaLinda: CityPageData = {
  citySlug: 'yorba-linda',
  cityName: 'Yorba Linda',
  state: 'California',
  region: 'OC',
  metaTitle: 'Yorba Linda CA Mortgage Broker | Loans & Refinance',
  metaDescription:
    'Yorba Linda CA mortgage broker for north OC buyers. Entry-level homes $900K+, median ~$1.23M. Conventional, jumbo, VA, HELOC. Call Mo at (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Savi Ranch',
      blurb:
        'Eastern Yorba Linda commercial and residential area near the 91 freeway; newer tract homes with accessible price points relative to the broader city median, popular with commuters to Anaheim and Brea.',
    },
    {
      name: 'Eastlake Village',
      blurb:
        'Established neighborhood surrounding Eastlake Village Shopping Center; well-maintained SFRs from the 1970s–1990s with mature trees and consistent resale activity, attracting families seeking lower entry prices.',
    },
    {
      name: 'Travis Ranch',
      blurb:
        'Planned community in the northern portion of the city developed in the 1980s; single-story and two-story SFRs on generous lots with horse trail access, near Placentia-Yorba Linda Unified schools.',
    },
    {
      name: 'Hidden Hills',
      blurb:
        'Quiet interior neighborhood with mid-sized lots and custom floor plans; higher owner-occupancy and longer tenure among residents give the area stable demand and limited turnover.',
    },
    {
      name: 'Bryant Ranch',
      blurb:
        'Well-regarded residential enclave in central Yorba Linda with award-winning Yorba Linda High School attendance area; strong demand from families drives competitive multiple-offer activity on listings.',
    },
  ],
  typicalHomeValueRange: { min: 900_000, max: 1_400_000 },
  localMarketProse: [
    "Yorba Linda is a city of approximately 68,300 residents in northeastern Orange County, incorporated in 1967 and widely recognized as the birthplace of President Richard Nixon. The city spans nearly 20 square miles across hilly terrain, maintaining a semi-rural residential character with over 100 miles of horse trails and one of the highest homeownership rates in Orange County at 82.6%. The local economy draws on a diverse mix of employers: top job providers include Costco, Nobel Biocare (dental implants), and Friends Church Yorba Linda, while many residents commute to major employment nodes in Brea, Anaheim, and the 91 corridor tech and healthcare sectors. Median household income sits at $152,060, well above the state average.",
    "The Yorba Linda housing market in early 2026 is predominantly single-family detached, reflecting the city's low-density zoning. The Zillow average home value is approximately $1.23 million, with Redfin reporting a recent median near $1.3 million across all sales. Entry-level buyers typically target older tract neighborhoods like Eastlake Village and Savi Ranch where homes in the $900K–$1.1M range are attainable with conventional financing at 10–20% down. Purchases above the $1,209,750 OC conforming limit require jumbo loans, which applies to a significant share of the market. Days on market average around 64 — longer than coastal OC — and homes sell near asking price, indicating a more balanced market than tighter South OC communities.",
    "Buyers prioritize Yorba Linda for its equestrian trails, top-rated Placentia-Yorba Linda Unified schools, low crime, and a quiet suburban setting that feels distinct from higher-density OC cities. The city's proximity to Brea and Anaheim employment, combined with its semi-rural lifestyle, attracts move-up buyers relocating from Anaheim Hills, Fullerton, and Brea who want more land and space. Homeowners with pre-2022 purchase dates carry substantial equity, making HELOC products popular for home improvement projects, particularly given the aging housing stock in established neighborhoods. VA loans see consistent use given the proximity to former military personnel employed at defense contractors throughout north Orange County.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'Do most Yorba Linda home purchases require a jumbo loan in 2026?',
      answer:
        'A significant share of Yorba Linda purchases fall above the $1,209,750 OC conforming loan limit, requiring jumbo financing. However, buyers targeting entry-level neighborhoods like Eastlake Village or Savi Ranch in the $900K–$1.1M range — and putting 20% or more down — can often keep their loan amount below the conforming threshold and use conventional financing at better rates. We model both scenarios for every Yorba Linda borrower. Call (949) 579-2057 for a live comparison.',
    },
    {
      question: 'What are current mortgage rates for Yorba Linda buyers in 2026?',
      answer:
        'Conventional 30-year rates for well-qualified Yorba Linda borrowers have been in the mid-to-upper 6% range in 2026. Jumbo rates run slightly higher. VA loan rates are competitive for eligible veterans and active-duty borrowers — Yorba Linda buyers frequently use VA financing given the north OC defense-industry employment base. Call or text (949) 579-2057 for a personalized rate quote.',
    },
    {
      question: 'Is a HELOC or cash-out refinance better for Yorba Linda homeowners?',
      answer:
        'Yorba Linda homeowners who purchased before 2023 typically have first mortgage rates well below current market rates, making a HELOC the preferred equity-access tool — it preserves the low primary rate while providing a flexible credit line. Cash-out refinances work better when your existing rate is already above 6.5% or you need a fixed lump sum for a large renovation. We provide a side-by-side analysis for your specific loan balance and rate. Call (949) 579-2057.',
    },
  ],
};
