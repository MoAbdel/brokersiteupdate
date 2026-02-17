import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import FinancialProductSchema from '@/components/seo/FinancialProductSchema';
import AISummary from '@/components/seo/AISummary';
import SemanticTable from '@/components/seo/SemanticTable';

export const metadata: Metadata = {
  title: 'DSCR Investment Loans [2026 Cash-Flow Qualification Matrix & No-Doc Rates]',
  description: 'DSCR investment loans in Orange County. Qualify based on rental income, not personal income. No employment verification. Perfect for real estate investors. Call (949) 822-9662.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/dscr-investment-loans',
    languages: {
      'en-US': 'https://www.mothebroker.com/loan-programs/dscr-investment-loans',
      'x-default': 'https://www.mothebroker.com/loan-programs/dscr-investment-loans',
    },
  },
};

export default function DSCRInvestmentLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <FinancialProductSchema
        name="DSCR Investment Loan"
        url="https://www.mothebroker.com/loan-programs/dscr-investment-loans"
        description="DSCR investment loans in California and Washington. Qualify based on rental income with no personal income verification, no tax returns, and no employment documentation. Loan amounts up to $2M+."
        loanType="DSCR Investment Mortgage"
        minDownPayment="20%"
        maxLTV="80%"
        minCreditScore={620}
        loanTerms={['30-year fixed', '5/1 ARM', '7/1 ARM', '40-year interest-only']}
        interestRateType="Fixed or Variable"
        maxLoanAmount="$2,000,000+"
        propertyTypes={['Investment Property (1-4 units)', 'Multi-Family (5+ units)', 'Short-Term Rental', 'Mixed-Use']}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-600 mb-4">Investment Property Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">DSCR Investment Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Qualify for investment property loans based on the property's rental income, not your personal income. 
            No employment verification or tax returns required. Perfect for real estate investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                Get DSCR Pre-Approval
              </Button>
            </Link>
            <a href="tel:9498229662">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            What Are DSCR Investment Loans?
          </h2>
          <p className="text-lg text-slate-700 mb-6 text-center max-w-4xl mx-auto">
            DSCR (Debt Service Coverage Ratio) loans qualify borrowers based on the rental income 
            the property generates, not the borrower's personal income. The property must generate 
            enough rental income to cover the mortgage payment (typically 1.0+ DSCR ratio).
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Key Benefits</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• No income documentation required</li>
                <li>• No employment verification</li>
                <li>• Qualify based on rental income</li>
                <li>• Up to $2M loan amounts</li>
                <li>• Purchase or refinance</li>
                <li>• Portfolio lending available</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Requirements</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• 1.0+ DSCR ratio minimum</li>
                <li>• 20-25% down payment</li>
                <li>• 620+ credit score</li>
                <li>• 2-6 months reserves</li>
                <li>• Investment property experience preferred</li>
                <li>• Property appraisal and rent roll</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Perfect For</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• Real estate investors</li>
                <li>• Self-employed borrowers</li>
                <li>• Retirees with rental income</li>
                <li>• Foreign national investors</li>
                <li>• Portfolio property owners</li>
                <li>• 1031 exchange buyers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DSCR Ratio Scenarios */}
        <div className="mb-12">
          <SemanticTable
            id="dscr-ratio-scenarios"
            caption="DSCR Ratio Scenarios — How Rental Income Affects Qualification"
            headers={['Monthly Rent', 'Monthly PITIA', 'DSCR Ratio', 'Qualification', 'Typical Rate Impact']}
            rows={[
              ['$3,500', '$3,500', '1.00', 'Minimum qualifying', 'Base rate + 0.50%'],
              ['$4,000', '$3,500', '1.14', 'Standard qualifying', 'Base rate + 0.25%'],
              ['$4,500', '$3,500', '1.29', 'Strong cash flow', 'Base rate'],
              ['$5,000', '$3,500', '1.43', 'Excellent cash flow', 'Best available rate'],
              ['$3,000', '$3,500', '0.86', 'Below 1.0 — limited options', 'Higher rate, more down payment'],
            ]}
            highlightRow={2}
            source="Industry DSCR lending guidelines, 2026"
            footnote="PITIA = Principal, Interest, Taxes, Insurance, and Association dues. Rates are illustrative — actual rates depend on credit score, LTV, and lender."
          />
        </div>

        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Investment Portfolio?</h2>
          <p className="text-xl mb-6 text-slate-200">
            Get pre-approved for DSCR investment loans with no income documentation hassles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
                Start DSCR Application
              </Button>
            </Link>
            <a href="tel:9498229662">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-slate-200 mt-4">
            Licensed mortgage broker with Lumin Lending • NMLS #1426884 • Investment Specialist
          </p>
        </div>

        {/* Required Disclaimers */}
        <div className="bg-slate-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>
          <div className="text-sm text-slate-700 space-y-2">
            <p>
              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 
              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
            </p>
            <p>
              This material is not from HUD or FHA and has not been approved by HUD or any government agency. 
              The information provided is for informational purposes only and is not an advertisement for products or services.
            </p>
            <p>
              Loan pricing and loan terms are subject to change without notice. All information must be verified prior to loan approval. 
              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with Lumin Lending.
            </p>
          </div>
        </div>

        <AISummary
          pageType="loan-program"
          triples={[
            {
              subject: 'DSCR loans',
              predicate: 'qualify investors based on',
              object: 'property rental income rather than personal income, requiring no tax returns or W-2s',
            },
            {
              subject: 'A DSCR ratio of 1.0',
              predicate: 'means the property generates',
              object: 'enough rental income to fully cover the monthly mortgage payment',
            },
            {
              subject: 'DSCR investment loans through a wholesale broker',
              predicate: 'offer loan amounts up to',
              object: '$2M+ with 20-25% down payment and 620+ credit score minimum',
            },
          ]}
        />
      </div>
    </div>
  );
}