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
import RsuComparisonMatrix from '@/components/calculators/RsuComparisonMatrix';

export const metadata: Metadata = generateMetadata({
  title: 'WA & CA Non-QM RSU Matrix: How Tech Workers Beat Retail Bank Rejections [2026]',
  description:
    'Compare how wholesale brokers, retail banks, and credit unions treat RSU income for mortgage qualification. Amazon, Microsoft, Apple, Google, Meta vesting schedules analyzed.',
  path: '/non-qm-loans-orange-county/rsu-mortgage-matrix',
  type: 'website',
});

export default function RsuMortgageMatrixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-slate-100 text-blue-700 mb-4">Tech Employee Mortgage Tool</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Non-QM RSU Mortgage Qualification Matrix
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Wholesale brokers count 100% of your vested RSU income toward mortgage qualification.
            Retail banks and credit unions discount or exclude it entirely. See exactly how each
            lender type treats your tech compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <SemanticTable
                  caption="RSU Income Treatment by Lender Type"
                  headers={['Lender Type', 'RSU Counted', 'Vesting Requirement', 'Documentation', 'Rate Premium']}
                  rows={[
                    ['Wholesale Broker', '100% (2-yr avg)', '1 year minimum', 'Brokerage statements + offer letter', 'None'],
                    ['Retail Bank', '50\u201375%', '2 years minimum', 'Tax returns + brokerage + HR letter', '+0.125\u20130.25%'],
                    ['Credit Union', '0\u201325%', '3 years minimum', 'Full tax returns + CPA letter', '+0.25\u20130.50%'],
                  ]}
                  highlightRow={0}
                  footnote="Data reflects 2026 wholesale lender guidelines for California and Washington."
                />
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <SemanticTable
                  caption="12-Mo vs 24-Mo Bank Statement Loans for Self-Employed"
                  headers={['Feature', '12-Month Program', '24-Month Program']}
                  rows={[
                    ['Statements Required', '12 months personal or business', '24 months personal or business'],
                    ['Min Credit Score', '660', '620'],
                    ['Max LTV', '85%', '90%'],
                    ['Max Loan Amount', '$3,000,000', '$3,000,000'],
                    ['Rate Range', '7.25\u20138.50%', '6.875\u20138.00%'],
                    ['Best For', 'Strong recent income', 'Consistent income history'],
                  ]}
                  footnote="Bank statement programs serve as an alternative when RSU income documentation is insufficient."
                />
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <SemanticTable
                  caption="Tech Company RSU Structure: CA vs WA Tax Impact"
                  headers={['Company', 'Vesting Schedule', 'CA State Tax', 'WA State Tax', 'Net Advantage (WA)']}
                  rows={[
                    ['Amazon', '5/15/40/40', '13.3% max', '0%', '$19,950/yr on $150K RSU'],
                    ['Microsoft', '25/25/25/25', '13.3% max', '0%', '$19,950/yr on $150K RSU'],
                    ['Apple', '25/25/25/25', '13.3% max', '0%', '$19,950/yr on $150K RSU'],
                    ['Google', '33/33/34 monthly', '13.3% max', '0%', '$19,950/yr on $150K RSU'],
                    ['Meta', '25/25/25/25', '13.3% max', '0%', '$19,950/yr on $150K RSU'],
                  ]}
                  footnote="Washington has no state income tax. CA rate is the top marginal bracket for 2026."
                />
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Compare Your RSU Mortgage Qualification
                </h2>
                <p className="text-slate-600 mb-4">
                  Enter your employer, RSU income, and base salary to see how wholesale brokers,
                  retail banks, and credit unions calculate your qualifying income and maximum loan
                  amount.
                </p>
                <RsuComparisonMatrix />
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Related Pages</h2>
                <div className="space-y-2 text-slate-700">
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/non-qm-loans-orange-county">
                      Non-QM Loans Orange County
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/loan-programs/bank-statement-loans">
                      Bank Statement Loans
                    </Link>
                  </div>
                  <div>
                    <Link className="text-blue-700 hover:underline" href="/loan-programs/non-qm-loans">
                      Non-QM Loan Programs
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <LeadMagnetForm
            magnetName="RSU Mortgage Matrix"
            subject="Lead Magnet: RSU Mortgage Matrix"
            loanPurpose="inquiry"
            fields={[
              {
                name: 'employer',
                label: 'Employer',
                type: 'select',
                required: true,
                options: [
                  { label: 'Amazon', value: 'amazon' },
                  { label: 'Microsoft', value: 'microsoft' },
                  { label: 'Apple', value: 'apple' },
                  { label: 'Google', value: 'google' },
                  { label: 'Meta', value: 'meta' },
                  { label: 'Other', value: 'other' },
                ],
              },
              {
                name: 'annual_rsu_income',
                label: 'Annual RSU Income ($)',
                type: 'text',
                required: true,
                placeholder: 'e.g. 150000',
              },
              {
                name: 'base_salary',
                label: 'Base Salary ($)',
                type: 'text',
                required: true,
                placeholder: 'e.g. 200000',
              },
              {
                name: 'property_location',
                label: 'Property Location',
                type: 'text',
                placeholder: 'City, State',
              },
              {
                name: 'notes',
                label: 'Additional Details (optional)',
                type: 'textarea',
                placeholder: 'e.g. First-time buyer, refinancing, investment property, etc.',
              },
            ]}
          />
        </div>

        {/* FAQ SECTION */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            RSU Mortgage Qualification FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                How do wholesale brokers count RSU income differently than retail banks?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Wholesale brokers use the 2-year average of vested RSU income and count 100% toward
                your qualifying income. Retail banks apply a 25-50% haircut on RSU income and
                require 2+ years of vesting history. Credit unions are the most restrictive,
                often excluding RSU income entirely or counting only 25%. This difference
                directly impacts your maximum loan amount and purchasing power.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Does Amazon&apos;s back-loaded vesting schedule affect mortgage qualification?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Yes. Amazon&apos;s 5/15/40/40 vesting schedule means only 5% of RSUs vest in year
                one and 15% in year two. Retail banks that require 2 years of vesting history
                see significantly lower RSU income for newer Amazon employees. Wholesale brokers
                work with lenders who understand tech compensation structures and use projected
                vesting schedules combined with the offer letter to maximize qualifying income
                from day one.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What documents do I need to qualify for a mortgage using RSU income?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Through a wholesale broker, you need your brokerage account statements showing
                vested RSU value, your employer offer letter or equity award agreement, and your
                two most recent pay stubs. Retail banks require all of that plus 2 years of tax
                returns, an HR verification letter, and sometimes a CPA letter confirming the
                income. The streamlined documentation through wholesale channels means faster
                closings and fewer delays.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                What if my RSU income alone is not enough to qualify for the loan amount I need?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Bank statement loans offer an alternative qualification path. You submit 12 or 24
                months of personal or business bank statements, and the lender calculates income
                from deposits rather than tax returns or pay stubs. This works well for tech
                employees who also have consulting income, stock option exercises, or other
                non-traditional income sources. Loan amounts up to $3,000,000 are available with
                credit scores as low as 620.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="mt-12 text-center">
          <p className="text-slate-600">
            Questions about qualifying with RSU income? Call Mo directly at{' '}
            <a href="tel:9498229662" className="text-blue-700 font-semibold hover:underline">
              (949) 822-9662
            </a>{' '}
            &mdash; NMLS #1426884 | Lumin Lending NMLS #2716106
          </p>
        </section>

        <AISummary
          pageType="tool"
          triples={[
            {
              subject: 'Wholesale mortgage brokers',
              predicate: 'count',
              object:
                '100% of vested RSU income toward qualifying, while retail banks typically count only 50-75%',
            },
            {
              subject: 'Amazon RSU vesting',
              predicate: 'follows',
              object:
                'a 5/15/40/40 back-loaded schedule, making year-1 qualification harder at retail banks',
            },
            {
              subject: 'Bank statement loans',
              predicate: 'provide',
              object:
                'an alternative qualification path when RSU income alone doesn\u0027t meet DTI requirements',
            },
            {
              subject: 'California and Washington tech employees using Mo The Broker\'s Tech Worker Underwriting Matrix',
              predicate: 'save',
              object:
                'an average of 0.375% on rate through wholesale broker RSU-optimized underwriting',
            },
          ]}
        />
      </div>

      <FinancialProductSchema
        name="Non-QM RSU Mortgage Loan"
        url="https://www.mothebroker.com/non-qm-loans-orange-county/rsu-mortgage-matrix"
        description="Mortgage qualification using RSU (Restricted Stock Unit) income from tech employers through wholesale broker channels."
        loanType="Non-QM"
        minCreditScore={620}
        minDownPayment="10%"
        maxLTV="90%"
        interestRateType="Fixed or Variable"
        maxLoanAmount="$3,000,000"
      />

      <DatasetSchema
        name="RSU Mortgage Qualification Comparison by Lender Type"
        description="Comparison of how wholesale brokers, retail banks, and credit unions treat RSU income for mortgage qualification across major tech employers."
        url="https://www.mothebroker.com/non-qm-loans-orange-county/rsu-mortgage-matrix"
        temporalCoverage="2026"
        spatialCoverage={['California', 'Washington']}
        variableMeasured={['RSU Income Treatment', 'Qualifying Income Percentage', 'Rate Premium', 'Vesting Requirements']}
      />
    </div>
  );
}
