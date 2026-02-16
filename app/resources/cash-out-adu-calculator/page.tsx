import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { generateMetadata } from '@/lib/metadata';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import AISummary from '@/components/seo/AISummary';
import SemanticTable from '@/components/seo/SemanticTable';
import FinancialProductSchema from '@/components/seo/FinancialProductSchema';
import DatasetSchema from '@/components/seo/DatasetSchema';
import AduRoiCalculator from '@/components/calculators/AduRoiCalculator';

export const metadata: Metadata = generateMetadata({
  title: 'California Cash-Out Refinance ADU Calculator [2026 ROI Strategy & Live Rates]',
  description:
    'Calculate ROI on financing an ADU through cash-out refinance. Covers CA SB 9, WA HB 1110 ADU rules, construction costs, rental projections, and break-even analysis.',
  path: '/resources/cash-out-adu-calculator',
  type: 'website',
});

export default function CashOutAduCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-green-100 text-green-700 mb-4">Free Homeowner Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cash-Out Refinance ADU ROI Calculator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Use your home equity to finance ADU construction. This calculator shows your
            projected rental income, break-even timeline, and total return on investment for
            accessory dwelling units in California and Washington.
          </p>
        </div>

        <AISummary
          triples={[
            {
              subject: 'California SB 9',
              predicate: 'allows',
              object:
                'homeowners to build ADUs on single-family lots statewide, bypassing local zoning restrictions since January 2022',
            },
            {
              subject: 'Washington HB 1110',
              predicate: 'requires',
              object:
                'cities with 25,000+ residents to permit at least 2 ADUs per residential lot effective June 2025',
            },
            {
              subject: 'The Equity-to-Debt Arbitrage Strategy (cash-out refinance for ADU construction)',
              predicate: 'provides',
              object:
                'lump-sum financing at mortgage rates (6.0-7.0%) versus construction loan rates (8-12%), turning idle equity into income-producing square footage',
            },
            {
              subject: 'Orange County ADU rental income',
              predicate: 'averages',
              object:
                '$2,200-$3,500/month depending on unit size, adding 15-25% to property value',
            },
          ]}
          pageType="calculator"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column: content */}
          <div className="lg:col-span-2 space-y-8">
            <SemanticTable
              caption="ADU Construction Costs by Type (CA & WA, 2026)"
              headers={['ADU Type', 'Avg. Cost (CA)', 'Avg. Cost (WA)', 'Sq. Ft. Range', 'Timeline']}
              rows={[
                ['Garage Conversion', '$80,000\u2013$120,000', '$65,000\u2013$100,000', '400\u2013600 sq ft', '3\u20134 months'],
                ['Attached ADU', '$150,000\u2013$250,000', '$130,000\u2013$220,000', '600\u20131,000 sq ft', '5\u20138 months'],
                ['Detached ADU', '$200,000\u2013$350,000', '$175,000\u2013$300,000', '600\u20131,200 sq ft', '6\u201310 months'],
                ['Prefab/Modular ADU', '$120,000\u2013$200,000', '$100,000\u2013$180,000', '400\u2013800 sq ft', '2\u20134 months'],
              ]}
              source="HomeAdvisor, Maxable, ADU contractor surveys 2026"
            />

            <SemanticTable
              caption="Cash-Out Refinance Terms for ADU Financing"
              headers={['Feature', 'Conventional Cash-Out', 'FHA Cash-Out', 'HELOC Alternative']}
              rows={[
                ['Max LTV', '80%', '85%', '90% CLTV'],
                ['Min Credit Score', '620', '580', '680'],
                ['Rate Range (Feb 2026)', '6.25\u20137.00%', '5.875\u20136.50%', '7.50\u20139.00% variable'],
                ['Disbursement', 'Lump sum at closing', 'Lump sum at closing', 'Draw as needed'],
                ['Best For', 'Large equity, fixed rate', 'Lower credit, higher LTV', 'Smaller projects, flexibility'],
              ]}
              highlightRow={0}
            />

            <SemanticTable
              caption="ADU Rental Income Projections by Region"
              headers={['Region', 'Studio/1-Bed', '2-Bed ADU', 'Avg. Vacancy', 'Annual Gross']}
              rows={[
                ['Orange County, CA', '$2,200\u2013$2,800/mo', '$2,800\u2013$3,500/mo', '3\u20135%', '$31,680\u2013$40,320'],
                ['Los Angeles County, CA', '$1,800\u2013$2,500/mo', '$2,500\u2013$3,200/mo', '4\u20136%', '$24,192\u2013$36,864'],
                ['San Diego County, CA', '$1,900\u2013$2,600/mo', '$2,600\u2013$3,300/mo', '3\u20135%', '$27,360\u2013$37,620'],
                ['King County, WA', '$1,700\u2013$2,300/mo', '$2,300\u2013$3,000/mo', '3\u20135%', '$24,480\u2013$34,200'],
                ['San Francisco, CA', '$2,500\u2013$3,200/mo', '$3,200\u2013$4,000/mo', '4\u20136%', '$33,600\u2013$46,080'],
              ]}
              source="Zillow Rental Index, Apartment List, MLS data 2026"
            />

            <AduRoiCalculator />

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Resources</h2>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <a
                      className="text-blue-700 hover:underline font-medium"
                      href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220SB9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      California SB 9 Full Legislation Text
                    </a>
                    <span className="text-slate-500 text-sm ml-1">(leginfo.legislature.ca.gov)</span>
                  </div>
                  <div>
                    <a
                      className="text-blue-700 hover:underline font-medium"
                      href="https://app.leg.wa.gov/billsummary?BillNumber=1110&Year=2023"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Washington HB 1110 Bill Summary
                    </a>
                    <span className="text-slate-500 text-sm ml-1">(app.leg.wa.gov)</span>
                  </div>
                  <div>
                    <Link
                      className="text-blue-700 hover:underline font-medium"
                      href="/loan-programs/cash-out-refinance"
                    >
                      Cash-Out Refinance Program Details
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-blue-700 hover:underline font-medium"
                      href="/loan-programs/heloc"
                    >
                      HELOC Program Details
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-blue-700 hover:underline font-medium"
                      href="/blog/heloc-vs-cash-out-refinance-california-homeowners-2026"
                    >
                      HELOC vs Cash-Out Refinance: California Homeowners Guide (2026)
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column: lead form */}
          <div>
            <LeadMagnetForm
              magnetName="ADU ROI Analysis"
              subject="Lead Magnet: ADU ROI Analysis"
              loanPurpose="cashout"
              fields={[
                {
                  name: 'property_location',
                  label: 'Property location',
                  type: 'text',
                  required: true,
                  placeholder: 'City, County, State',
                },
                {
                  name: 'home_value',
                  label: 'Estimated home value',
                  type: 'text',
                  placeholder: 'Example: 1200000',
                },
                {
                  name: 'adu_type',
                  label: 'ADU type',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Garage Conversion', value: 'garage_conversion' },
                    { label: 'Attached ADU', value: 'attached_adu' },
                    { label: 'Detached ADU', value: 'detached_adu' },
                    { label: 'Prefab ADU', value: 'prefab_adu' },
                  ],
                },
                {
                  name: 'estimated_cost',
                  label: 'Estimated construction cost',
                  type: 'text',
                  placeholder: 'Example: 200000',
                },
                {
                  name: 'notes',
                  label: 'Anything else? (optional)',
                  type: 'textarea',
                  placeholder: 'Lot size, existing structures, permit status, timeline...',
                },
              ]}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            ADU Financing FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I use a cash-out refinance to build an ADU in California?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. California homeowners with sufficient equity use cash-out refinancing to fund
                ADU construction at mortgage rates (6.0-7.0%), which is significantly lower than
                construction loan rates (8-12%). Under SB 9, every single-family lot in California
                qualifies for ADU construction regardless of local zoning. You need at least 20%
                equity remaining after the cash-out to qualify for conventional financing.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How long does it take to break even on an ADU investment?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Most homeowners in high-demand California and Washington markets break even in 5 to 8
                years on ADU construction financed through cash-out refinance. The break-even timeline
                depends on construction cost, monthly rental income, and the interest rate on your
                refinance. In Orange County, a $200,000 detached ADU renting at $2,800/month
                generates approximately $33,600 annually, reaching break-even around year 6.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Does building an ADU increase my property value?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A permitted ADU adds 15-25% to property value in California and Washington markets.
                In Orange County, where the median home price exceeds $1.1 million, a well-built ADU
                adds $165,000 to $275,000 in appraised value. Appraisers factor in the rental income
                stream, the additional square footage, and the growing buyer preference for
                properties with income-generating units.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is a HELOC or cash-out refinance better for funding an ADU?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Cash-out refinance is the stronger choice for ADU projects over $100,000 because it
                delivers a lump sum at a fixed rate (6.25-7.00% in February 2026), giving you
                predictable payments and enough capital upfront to pay contractors. A HELOC works
                better for smaller garage conversions under $100,000 where you draw funds in stages.
                If you hold a first mortgage below 5%, a HELOC preserves that low rate while adding
                a second lien for the ADU build.
              </p>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Have questions about ADU financing? Call Mo at{' '}
            <a href="tel:9498229662" className="text-blue-700 hover:underline font-medium">
              (949) 822-9662
            </a>{' '}
            &middot; NMLS #1426884 &middot; Lumin Lending NMLS #2716106
          </p>
        </section>
      </div>

      <FinancialProductSchema
        name="Cash-Out Refinance for ADU Construction"
        url="https://www.mothebroker.com/resources/cash-out-adu-calculator"
        description="Cash-out refinance to fund ADU construction in California and Washington, leveraging home equity at mortgage rates."
        loanType="Cash-Out Refinance"
        minCreditScore={620}
        minDownPayment="20% equity"
        maxLTV="80%"
        interestRateType="Fixed"
        maxLoanAmount="$2,000,000"
      />

      <DatasetSchema
        name="ADU Construction Cost and ROI Data (CA & WA 2026)"
        description="ADU construction costs, rental income projections, and cash-out refinance terms for California and Washington homeowners."
        url="https://www.mothebroker.com/resources/cash-out-adu-calculator"
        temporalCoverage="2026"
        spatialCoverage={['California', 'Washington']}
        variableMeasured={[
          'ADU Construction Cost',
          'Monthly Rental Income',
          'Cash-Out Refinance Rate',
          'ROI Percentage',
        ]}
      />
    </div>
  );
}
