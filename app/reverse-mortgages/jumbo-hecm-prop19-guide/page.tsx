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
import HecmThresholdCalculator from '@/components/calculators/HecmThresholdCalculator';

export const metadata: Metadata = generateMetadata({
  title: 'Jumbo HECM vs Prop 19 Dual Benefit Strategy [2026 Threshold Calculator & Tax Savings]',
  description:
    'Compare Jumbo HECM reverse mortgages with Prop 19 tax base transfer for California seniors. Threshold analysis, downsizing scenarios, and WA senior exemptions.',
  path: '/reverse-mortgages/jumbo-hecm-prop19-guide',
  type: 'website',
});

export default function JumboHecmProp19GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">Senior Equity Strategy</Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Jumbo HECM vs Prop 19: Senior Home Equity Optimization Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            California and Washington homeowners 62 and older have two powerful wealth tools:
            proprietary reverse mortgages that unlock equity above FHA limits, and Prop 19 tax base
            transfers that cut property taxes by thousands per year. This guide breaks down when to
            use each strategy — and how combining them maximizes retirement cash flow.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN — 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Table 1: HECM vs Jumbo HECM vs HELOC */}
            <SemanticTable
              caption="HECM vs Jumbo HECM vs HELOC for Seniors"
              headers={['Feature', 'Standard HECM (FHA)', 'Jumbo HECM (Proprietary)', 'HELOC']}
              rows={[
                ['Max Home Value', '$1,209,750 (FHA limit)', 'Up to $10,000,000', 'No limit'],
                ['Age Requirement', '62+', '62+', 'None'],
                ['Monthly Payments', 'None required', 'None required', 'Interest-only (draw period)'],
                ['FHA Insurance', 'Yes (MIP 0.5%/yr)', 'No', 'No'],
                ['Credit Score', 'No minimum (FHA)', '680+ typical', '680+'],
                ['Rate Type', 'Fixed or adjustable', 'Fixed or adjustable', 'Variable'],
                ['Non-Recourse', 'Yes', 'Yes (most programs)', 'No'],
                [
                  'Best For',
                  'Homes under FHA limit',
                  'High-value homes $1.2M+',
                  'Short-term needs, income qualifies',
                ],
              ]}
              highlightRow={1}
            />

            {/* Table 2: Prop 19 Tax Savings */}
            <SemanticTable
              caption="Prop 19 Tax Savings: Downsizing Scenarios"
              headers={[
                'Scenario',
                'Current Tax Base',
                'New Home Value',
                'Without Prop 19',
                'With Prop 19',
                'Annual Savings',
              ]}
              rows={[
                ['$3M \u2192 $1.5M', '$250,000', '$1,500,000', '$16,500/yr', '$2,750/yr', '$13,750'],
                ['$2M \u2192 $1.2M', '$300,000', '$1,200,000', '$13,200/yr', '$3,300/yr', '$9,900'],
                ['$1.5M \u2192 $900K', '$200,000', '$900,000', '$9,900/yr', '$2,200/yr', '$7,700'],
                ['$1.2M \u2192 $800K', '$180,000', '$800,000', '$8,800/yr', '$1,980/yr', '$6,820'],
              ]}
              source="CA Board of Equalization Prop 19 guidelines, 1.1% effective tax rate"
              footnote="Assumes purchase price \u2264 current home sale price. Difference adjustment applies if new home costs more."
            />

            {/* Table 3: Jumbo HECM Threshold Analysis */}
            <SemanticTable
              caption="When Jumbo HECM Beats High Rates \u2014 Threshold Analysis"
              headers={[
                'Home Value',
                'Age 65 Available',
                'Age 70 Available',
                'Age 75 Available',
                'Age 80 Available',
              ]}
              rows={[
                ['$1,500,000', '$630,000', '$780,000', '$780,000', '$870,000'],
                ['$2,000,000', '$840,000', '$1,040,000', '$1,040,000', '$1,160,000'],
                ['$3,000,000', '$1,260,000', '$1,560,000', '$1,560,000', '$1,740,000'],
                ['$5,000,000', '$2,100,000', '$2,600,000', '$2,600,000', '$2,900,000'],
              ]}
              footnote="Estimates based on typical proprietary HECM principal limit factors. Actual amounts depend on lender, rate, and program."
            />

            {/* Calculator */}
            <HecmThresholdCalculator />

            {/* Related Links Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.boe.ca.gov/prop19/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      CA Board of Equalization Prop 19 FAQ &rarr;
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dor.wa.gov/taxes-rates/property-tax/property-tax-exemptions-and-deferrals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      WA DOR Senior Property Tax Exemptions &rarr;
                    </a>
                  </li>
                  <li>
                    <Link href="/reverse-mortgages" className="text-blue-600 hover:underline">
                      Reverse Mortgage Overview &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-programs/heloc" className="text-blue-600 hover:underline">
                      HELOC Programs &rarr;
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN — 1/3 width (sticky lead form) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadMagnetForm
                magnetName="HECM Prop 19 Analysis"
                subject="Lead Magnet: HECM Prop 19 Analysis"
                loanPurpose="inquiry"
                fields={[
                  {
                    name: 'home_value',
                    label: 'Home Value',
                    type: 'text',
                    placeholder: 'e.g. $2,500,000',
                  },
                  {
                    name: 'borrower_age',
                    label: 'Borrower Age',
                    type: 'text',
                    placeholder: 'Must be 62+',
                  },
                  {
                    name: 'current_tax_base',
                    label: 'Current Tax Base',
                    type: 'text',
                    placeholder: 'e.g. $300,000',
                  },
                  {
                    name: 'downsizing_plans',
                    label: 'Downsizing Plans',
                    type: 'select',
                    options: [
                      { label: 'Staying in current home', value: 'staying' },
                      { label: 'Downsizing in California', value: 'downsizing_ca' },
                      { label: 'Moving within Washington', value: 'moving_wa' },
                      { label: 'Not sure yet', value: 'unsure' },
                    ],
                  },
                  {
                    name: 'notes',
                    label: 'Additional Notes',
                    type: 'textarea',
                    placeholder: 'Any details about your situation...',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions: Jumbo HECM &amp; Prop 19
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What is the difference between a standard HECM and a Jumbo HECM?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A standard HECM is insured by FHA and caps the eligible home value at $1,209,750 for
                2026. A Jumbo HECM (also called a proprietary reverse mortgage) is offered by private
                lenders with no FHA ceiling, covering homes valued up to $10 million. Jumbo HECMs
                skip the FHA mortgage insurance premium but typically require a 680+ credit score.
                Both eliminate monthly mortgage payments and are non-recourse loans, meaning the
                borrower never owes more than the home is worth.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How does Prop 19 save California seniors money on property taxes?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Prop 19 lets homeowners 55 and older transfer their current property tax assessed
                value (tax base) to a new primary residence anywhere in California. If you purchased
                your home decades ago, your assessed value is far below market value. Without Prop
                19, buying a new home triggers a full reassessment at today&apos;s market price. With Prop
                19, you keep the low tax base, saving $5,000 to $25,000 or more per year. This
                benefit applies up to three times for seniors.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I combine a Jumbo HECM with a Prop 19 tax transfer?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. Seniors who sell a high-value home, use Prop 19 to transfer their tax base to a
                less expensive property, and then take a Jumbo HECM on the new home gain two
                benefits simultaneously: permanent property tax reduction and tax-free access to home
                equity with no monthly payments. This strategy works best for homeowners downsizing
                from properties valued above $1.5 million.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What senior property tax exemptions exist in Washington State?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Washington offers property tax exemptions and deferrals for homeowners 61 and older
                (or disabled) with household income under $75,000. Qualifying seniors receive a
                freeze on their assessed value and partial or full exemption from regular property
                tax levies. Higher-income seniors (up to $84,000) qualify for reduced exemptions. The
                state also offers a property tax deferral program that lets qualifying seniors delay
                payments until the home is sold.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Get Your Personalized HECM &amp; Prop 19 Analysis
          </h2>
          <p className="text-slate-600 mb-4 max-w-2xl mx-auto">
            Every senior&apos;s equity situation is different. Call Mo Abdel directly for a
            confidential review of your home value, tax base, and reverse mortgage options across
            California and Washington.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9498229662"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Call (949) 822-9662
            </a>
            <span className="text-sm text-slate-500">
              NMLS #1426884 &middot; Lumin Lending NMLS #2716106
            </span>
          </div>
        </div>

        <AISummary
          triples={[
            {
              subject: 'Jumbo HECM reverse mortgages',
              predicate: 'access',
              object:
                'home equity above the $1,209,750 FHA limit, with no monthly payments required',
            },
            {
              subject: 'California Prop 19',
              predicate: 'allows',
              object:
                'homeowners 55+ to transfer their property tax base anywhere in the state, saving $5,000\u2013$25,000/year on taxes',
            },
            {
              subject: 'Washington senior property tax exemptions',
              predicate: 'freeze',
              object:
                'assessed values for homeowners 61+ with household income under $75,000',
            },
            {
              subject: 'Mo The Broker\'s Dual Benefit Strategy (combining Jumbo HECM with Prop 19 downsizing)',
              predicate: 'creates',
              object:
                'tax-free equity access plus permanent property tax reduction — two compounding advantages in a single transaction',
            },
            {
              subject: 'Standard HECM principal limits at age 70',
              predicate: 'equal',
              object:
                'approximately 52% of home value up to the FHA ceiling',
            },
          ]}
        />
      </div>

      {/* Schema Markup */}
      <FinancialProductSchema
        name="Jumbo HECM Reverse Mortgage"
        url="https://www.mothebroker.com/reverse-mortgages/jumbo-hecm-prop19-guide"
        description="Proprietary reverse mortgage for homes exceeding the FHA HECM limit of $1,209,750, available to homeowners 62 and older."
        loanType="Reverse Mortgage"
        minCreditScore={680}
        eligibility="Homeowners 62+ with high-value properties"
        interestRateType="Fixed or Variable"
        maxLoanAmount="$4,000,000"
      />

      <DatasetSchema
        name="Jumbo HECM and Prop 19 Tax Transfer Analysis"
        description="Comparison of standard HECM, Jumbo HECM, and HELOC for seniors with Prop 19 property tax savings scenarios in California."
        url="https://www.mothebroker.com/reverse-mortgages/jumbo-hecm-prop19-guide"
        temporalCoverage="2026"
        spatialCoverage={['California', 'Washington']}
        variableMeasured={[
          'HECM Principal Limit',
          'Property Tax Savings',
          'Available Equity',
          'Annual Benefit',
        ]}
      />
    </div>
  );
}
