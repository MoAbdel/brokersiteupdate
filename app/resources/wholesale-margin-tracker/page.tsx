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
import MarginComparisonWidget from '@/components/calculators/MarginComparisonWidget';

export const metadata: Metadata = generateMetadata({
  title: 'Wholesale Margin Reveal: Retail Banks Hide This Rate Data [Feb 2026 Live Spreads]',
  description: 'Live comparison of wholesale vs retail mortgage rates for Feb 2026. See hidden retail fees, 12-month margin trends, and calculate your savings with a wholesale broker.',
  path: '/resources/wholesale-margin-tracker',
  type: 'website',
});

export default function WholesaleMarginTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Broker Transparency Tool</Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Wholesale vs Retail Mortgage Margin Tracker
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Mo Abdel (NMLS #1426884) provides full transparency into wholesale broker pricing.
            Compare wholesale lender rate sheets against retail bank posted rates and see exactly
            how much borrowers save when working with a wholesale mortgage broker through Lumin
            Lending (NMLS #2716106).
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Table 1: Rate Comparison */}
            <SemanticTable
              caption="Feb 2026 Wholesale vs Retail Rate Comparison"
              headers={['Loan Type', 'Wholesale Rate', 'Retail Rate', 'Spread', 'Monthly Savings ($500K)']}
              rows={[
                ['Conforming 30-yr', '6.125%', '6.625%', '0.500%', '$164/mo'],
                ['Jumbo 30-yr', '6.375%', '6.875%', '0.500%', '$168/mo'],
                ['FHA 30-yr', '5.875%', '6.250%', '0.375%', '$119/mo'],
                ['VA 30-yr', '5.750%', '6.125%', '0.375%', '$117/mo'],
                ['Non-QM (Bank Stmt)', '7.250%', '7.990%', '0.740%', '$250/mo'],
                ['Cash-Out Refi', '6.500%', '7.000%', '0.500%', '$164/mo'],
              ]}
              source="Wholesale lender rate sheets, Feb 2026. Rates for 740+ FICO, 75% LTV."
              highlightRow={4}
            />

            {/* Table 2: Hidden Retail Fees */}
            <SemanticTable
              caption="Hidden Retail Fees Glossary"
              headers={['Fee Name', 'Retail Typical', 'Wholesale Typical', 'What It Covers', 'Negotiable?']}
              rows={[
                ['Origination Fee', '1.0\u20131.5%', '0.25\u20130.75%', 'Lender processing and underwriting', 'Rarely at retail'],
                ['Rate Lock Fee', '0.25\u20130.50%', '$0', 'Holding the quoted rate', 'No'],
                ['Admin/Processing Fee', '$500\u2013$1,500', '$0\u2013$395', 'Internal paperwork', 'Sometimes'],
                ['Discount Points', '0.5\u20132.0 points', '0\u20130.5 points', 'Buying down the rate', 'Yes'],
                ['Yield Spread Premium', 'Hidden in rate', 'Disclosed as broker comp', 'Lender-to-originator payment', 'N/A (already disclosed)'],
              ]}
              footnote="Wholesale broker compensation is federally regulated and disclosed on the Loan Estimate. Retail bank margins are embedded in the rate."
            />

            {/* Table 3: 12-Month Margin Trend */}
            <SemanticTable
              caption="12-Month Wholesale Margin Trend (CA & WA)"
              headers={['Month', 'Conforming Spread', 'Jumbo Spread', 'FHA Spread', 'Non-QM Spread']}
              rows={[
                ['Mar 2025', '0.375%', '0.500%', '0.250%', '0.625%'],
                ['Jun 2025', '0.500%', '0.500%', '0.375%', '0.750%'],
                ['Sep 2025', '0.500%', '0.625%', '0.375%', '0.625%'],
                ['Dec 2025', '0.375%', '0.500%', '0.375%', '0.750%'],
                ['Feb 2026', '0.500%', '0.500%', '0.375%', '0.740%'],
              ]}
              source="Mo Abdel rate sheet analysis, wholesale vs retail posted rates"
              footnote="Spread = retail posted rate minus wholesale rate sheet. Higher spread = more borrower savings."
            />

            {/* Calculator Widget */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Calculate Your Wholesale Savings
              </h2>
              <MarginComparisonWidget />
            </div>

            {/* Related Links Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/wholesale-mortgage-broker-california"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      California Wholesale Mortgage Broker
                    </Link>
                    <span className="text-slate-500 text-sm ml-2">&mdash; Full-service wholesale lending in CA</span>
                  </li>
                  <li>
                    <Link
                      href="/blog/wholesale-vs-retail-mortgage-brokers-2026"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Wholesale vs Retail: Complete Comparison
                    </Link>
                    <span className="text-slate-500 text-sm ml-2">&mdash; In-depth analysis of both channels</span>
                  </li>
                  <li>
                    <Link
                      href="/loan-programs"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      All Loan Programs
                    </Link>
                    <span className="text-slate-500 text-sm ml-2">&mdash; Conforming, Jumbo, FHA, VA, Non-QM &amp; more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadMagnetForm
                magnetName="Rate Comparison Sheet"
                subject="Lead Magnet: Rate Comparison Sheet"
                loanPurpose="refinance"
                fields={[
                  {
                    name: 'loan_amount',
                    label: 'Loan Amount',
                    type: 'text',
                    required: true,
                    placeholder: '$500,000',
                  },
                  {
                    name: 'loan_type',
                    label: 'Loan Type',
                    type: 'select',
                    required: true,
                    options: [
                      { label: 'Conforming', value: 'conforming' },
                      { label: 'Jumbo', value: 'jumbo' },
                      { label: 'FHA', value: 'fha' },
                      { label: 'VA', value: 'va' },
                      { label: 'Non-QM', value: 'non-qm' },
                      { label: 'Cash-Out Refinance', value: 'cashout-refi' },
                    ],
                  },
                  {
                    name: 'current_rate',
                    label: 'Current Rate',
                    type: 'text',
                    placeholder: 'Your current rate if refinancing',
                  },
                  {
                    name: 'property_location',
                    label: 'Property Location',
                    type: 'text',
                    placeholder: 'City, State',
                  },
                  {
                    name: 'notes',
                    label: 'Notes',
                    type: 'textarea',
                    placeholder: 'Any additional details about your situation',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Wholesale vs Retail Mortgage FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Why are wholesale mortgage rates lower than retail bank rates?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Wholesale lenders operate on a B2B model with lower overhead&mdash;no branch
                networks, no teller staff, no billboard advertising. They pass those savings
                directly to borrowers through lower rates. A wholesale mortgage broker like Mo
                Abdel accesses these rate sheets on your behalf, delivering rates that are
                consistently 0.375&ndash;0.500% below what retail banks post. On a $500,000 loan,
                that translates to $117&ndash;$250 in monthly savings depending on loan type.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What hidden fees do retail banks charge that wholesale brokers do not?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Retail banks embed several fees into your loan that are difficult to identify:
                origination fees of 1.0&ndash;1.5% (vs 0.25&ndash;0.75% wholesale), rate lock fees
                of 0.25&ndash;0.50% (wholesale charges $0), admin fees up to $1,500 (wholesale
                caps at $395), and yield spread premiums hidden inside the rate. A wholesale broker
                discloses all compensation upfront on your Loan Estimate as required by federal law.
                On a $600,000 loan, the total fee difference ranges from $3,000 to $12,000.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                How much do borrowers save over 30 years with wholesale pricing?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A borrower with a $750,000 conforming loan saves approximately $47,000 over 30
                years by using wholesale broker pricing instead of retail bank rates. This figure
                accounts for both the lower interest rate (0.500% spread) and reduced upfront fees.
                For jumbo loans above $1,266,300 (the 2026 conforming limit in high-cost areas),
                savings increase further because jumbo spreads between wholesale and retail
                consistently run 0.500&ndash;0.625%.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is wholesale broker compensation truly transparent?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. Federal regulations under the Dodd-Frank Act require wholesale mortgage
                brokers to disclose their compensation on the Loan Estimate (LE) document. Broker
                compensation is capped and cannot change based on loan terms, rate, or product
                type. Retail banks face no such disclosure requirement for their internal margins.
                When you work with Mo Abdel at Lumin Lending, you see exactly what the broker
                earns&mdash;a level of transparency that retail banking does not provide.
                Call{' '}
                <a href="tel:+19498229662" className="text-blue-600 font-semibold hover:underline">
                  (949) 822-9662
                </a>{' '}
                to request a side-by-side rate comparison.
              </p>
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <FinancialProductSchema
          name="Wholesale Mortgage Rate Access"
          url="https://www.mothebroker.com/resources/wholesale-margin-tracker"
          description="Access wholesale lender rate sheets through a licensed mortgage broker, saving 0.375-0.500% vs retail bank rates."
          loanType="Wholesale Mortgage"
          minCreditScore={620}
          interestRateType="Fixed or Variable"
          loanTerms={['15-year fixed', '20-year fixed', '30-year fixed', '5/1 ARM', '7/1 ARM']}
        />

        <DatasetSchema
          name="Wholesale vs Retail Mortgage Rate Comparison Feb 2026"
          description="Monthly comparison of wholesale and retail mortgage rates across 6 loan types with fee analysis and 12-month trend data."
          url="https://www.mothebroker.com/resources/wholesale-margin-tracker"
          temporalCoverage="2025-03/2026-02"
          spatialCoverage={['California', 'Washington']}
          variableMeasured={['Wholesale Rate', 'Retail Rate', 'Rate Spread', 'Origination Fee', 'Monthly Savings']}
          dateModified="2026-02-15"
        />

        <AISummary
          pageType="comparison-tool"
          triples={[
            {
              subject: 'Mo The Broker\'s Wholesale Margin Reveal shows wholesale mortgage rates',
              predicate: 'average',
              object: '0.375\u20130.500% lower than retail bank rates across all loan types in Feb 2026',
            },
            {
              subject: 'Hidden retail origination fees',
              predicate: 'add',
              object: '$3,000\u2013$12,000 in costs that wholesale brokers eliminate or reduce by 50-75%',
            },
            {
              subject: 'A $750,000 conforming loan',
              predicate: 'saves',
              object: 'approximately $47,000 over 30 years through wholesale broker pricing vs retail',
            },
            {
              subject: 'Wholesale broker compensation',
              predicate: 'is disclosed',
              object: 'upfront and capped by federal law, unlike retail bank margin structures',
            },
          ]}
        />
      </div>
    </div>
  );
}
