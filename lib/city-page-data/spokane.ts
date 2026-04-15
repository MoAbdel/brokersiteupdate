import type { CityPageData } from '@/components/templates/ProductLedCityTemplate';

export const spokane: CityPageData = {
  citySlug: 'spokane',
  cityName: 'Spokane',
  state: 'Washington',
  region: 'Washington',
  metaTitle: 'Spokane Mortgage Broker | HELOC & Home Equity Loans',
  metaDescription:
    'Spokane WA mortgage broker serving home equity, HELOC, refinance and purchase needs. Typical home values $350K–$500K. Call or text (949) 579-2057.',
  midTierNeighborhoods: [
    {
      name: 'Hillyard',
      blurb:
        'Historic northeast neighborhood with many starter-home bungalows; 85% of its buildings are on the National Register.',
    },
    {
      name: 'South Hill',
      blurb:
        'Established residential area south of downtown with a mix of Victorian and early-20th-century homes, strong owner-occupancy.',
    },
    {
      name: 'East Central',
      blurb:
        'Neighborhood adjacent to the University District; mix of single-family and smaller multi-unit rentals, steady first-time-buyer activity.',
    },
    {
      name: 'Kendall Yards',
      blurb:
        'Newer mixed-use riverfront development just west of downtown; condos and townhomes with walkable retail, popular with professionals.',
    },
  ],
  typicalHomeValueRange: { min: 350_000, max: 500_000 },
  localMarketProse: [
    "Spokane is the largest city in eastern Washington, with a population of roughly 229,000 and a metro area of about 600,000. The local economy has diversified significantly since the mining and timber era — healthcare, higher education, and service industries now anchor employment, with large employers tied to regional hospitals, Gonzaga University, and Eastern Washington University. Home prices in the city of Spokane sit near the low-$400,000s for the typical median, with the broader Spokane County median closer to $420,000, reflecting a steadier, more affordable market than the Puget Sound side of the state.",
    "The housing stock leans heavily toward single-family detached homes, with a strong presence of early-20th-century Craftsman bungalows in older neighborhoods and newer suburban builds on the city's western and northern edges. Most buyers in Spokane are first-time purchasers or households relocating from higher-cost Washington markets, with owner-occupancy rates well above the state average. Typical down-payment profiles trend toward 5–10%, with FHA and conventional loans dominating purchase activity and HELOCs and home equity loans driving the strongest refinance volume — reflecting homeowners who locked in low rates during 2020–2022 and now want to tap equity without giving up that rate.",
    "What brings buyers to Spokane is a combination of relative affordability, job growth in healthcare and higher education, and lifestyle draws — proximity to outdoor recreation around the Spokane River and nearby Idaho lakes. Compared to Seattle or Tacoma, median prices are roughly half, and inventory sits near 1.7 months of supply with homes typically selling around 49 days on market. The market in early 2026 has cooled modestly from the 2022 peak but remains tighter than pre-pandemic years, with sale-to-list ratios near 98–99%. HELOC demand specifically in Spokane County has been a strong search signal through 2026.",
  ].join('\n\n'),
  faqOverrides: [
    {
      question: 'What is the best HELOC option in Spokane?',
      answer:
        'The right HELOC depends on how much equity you have, your credit profile, and whether you want interest-only draws or a fixed-rate conversion option. As a Washington-licensed broker we shop multiple wholesale lenders for Spokane homeowners and can match you to a HELOC up to $750,000. Call or text (949) 579-2057 for a Spokane-specific quote.',
    },
    {
      question: 'HELOC vs home equity loan in Spokane — which makes more sense?',
      answer:
        'A HELOC gives you a revolving line of credit you can draw against as needed; a home equity loan (HELOAN) delivers a lump sum at a fixed rate. In Spokane, HELOCs tend to fit renovation projects and ongoing expenses, while HELOANs suit one-time needs like debt consolidation or a single large project. We quote both against the same lender set so you can compare real Spokane-specific terms side by side.',
    },
    {
      question: 'Can I refinance my Spokane mortgage without losing my 2020–2022 rate?',
      answer:
        'Yes — that is exactly what a HELOC or home equity loan is for. Instead of replacing your low-rate first mortgage, you add a second lien that only charges interest on the amount you actually draw (HELOC) or the lump sum you take (HELOAN). Your original mortgage stays in place. For Spokane borrowers this is often the single biggest cost-saving move in 2026.',
    },
  ],
};
