import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, Home, DollarSign, Clock } from 'lucide-react';
import { LeadMagnetForm } from '@/components/lead-magnets/LeadMagnetForm';

export const metadata: Metadata = {
  title: 'Orange County First-Time Home Buyer Checklist 2026 | MoTheBroker',
  description:
    'The complete step-by-step checklist for first-time homebuyers in Orange County. Down payment assistance programs, loan options, and timeline guide.',
};

const COMPLIANCE_FOOTER =
  'Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | DRE #02291443 | Equal Housing Lender | Down payment assistance programs are subject to availability, income limits, and eligibility requirements. Program terms may change. Contact Mo for current availability.';

const timeline = [
  {
    stage: '12 Months Before',
    color: 'bg-slate-700',
    steps: [
      'Pull your credit reports from all 3 bureaus (AnnualCreditReport.com)',
      'Dispute any errors that could be dragging down your score',
      'Pay down revolving credit card balances below 30% utilization',
      'Avoid opening new credit accounts',
    ],
  },
  {
    stage: '9 Months Before',
    color: 'bg-blue-700',
    steps: [
      'Research down payment assistance programs (CalHFA, CALHOME, city programs)',
      'Set a monthly savings target for down payment and closing costs',
      'Calculate your target purchase price based on income and debt',
      'Start tracking your monthly income and expenses',
    ],
  },
  {
    stage: '6 Months Before',
    color: 'bg-blue-600',
    steps: [
      'Get pre-qualified with Mo to understand your buying power',
      'Gather income documents: 2 years W-2s, 30-day paystubs',
      'Gather asset documents: 2 months bank statements',
      'Research target neighborhoods in Orange County',
    ],
  },
  {
    stage: '3 Months Before',
    color: 'bg-indigo-600',
    steps: [
      'Get fully pre-approved with a credit pull and underwriting review',
      'Lock in your down payment assistance program application',
      'Interview and select a real estate agent',
      'Define your must-haves, deal-breakers, and commute requirements',
    ],
  },
  {
    stage: 'House Hunt',
    color: 'bg-indigo-500',
    steps: [
      'Attend open houses and schedule private showings',
      'Review comparable sales (comps) before making offers',
      'Understand your offer strategy: price, contingencies, timeline',
      'Keep Mo in the loop — some sellers verify financing before accepting',
    ],
  },
  {
    stage: 'Under Contract',
    color: 'bg-purple-600',
    steps: [
      'Wire earnest money deposit within 3 business days',
      'Schedule and attend home inspection',
      'Order appraisal (Mo coordinates this with the lender)',
      'Review HOA documents if applicable',
      'Complete any remaining items from Mo\'s loan conditions list',
    ],
  },
  {
    stage: 'Final Approval',
    color: 'bg-purple-700',
    steps: [
      'Respond to any lender conditions immediately',
      'Do NOT make major purchases or open new credit',
      'Review and sign loan disclosures',
      'Receive and review your Closing Disclosure 3 days before closing',
    ],
  },
  {
    stage: 'Closing Day',
    color: 'bg-green-600',
    steps: [
      'Wire closing funds (confirm wire instructions by phone)',
      'Do final walkthrough of the property',
      'Sign closing documents at escrow',
      'Get your keys — you\'re a homeowner',
    ],
  },
];

const loanPrograms = [
  {
    name: 'FHA Loan',
    badge: '3.5% Down',
    badgeColor: 'bg-blue-100 text-blue-700',
    minDown: '3.5%',
    creditScore: '580 minimum (500 with 10% down)',
    bestFor: 'Buyers with lower credit scores or limited savings',
    pros: ['Lower credit score threshold', 'Gift funds allowed for down payment', 'Higher DTI flexibility'],
  },
  {
    name: 'Conventional 97',
    badge: '3% Down',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    minDown: '3%',
    creditScore: '620 minimum (740+ for best rates)',
    bestFor: 'Buyers with good credit who want to avoid FHA premiums',
    pros: ['PMI can be removed at 80% LTV', 'Lower long-term cost vs FHA', 'Primary or second home eligible'],
  },
  {
    name: 'CalHFA MyHome',
    badge: 'DPA Program',
    badgeColor: 'bg-green-100 text-green-700',
    minDown: '0–3% (assistance covers gap)',
    creditScore: '660 minimum',
    bestFor: 'First-time buyers who need down payment help in California',
    pros: ['Up to 3.5% down payment assistance', 'Deferred payment (no monthly payment on DPA)', 'Can combine with FHA or conventional'],
  },
];

const fullChecklist = [
  {
    phase: 'Pre-Approval Phase',
    items: [
      'Request credit reports from Experian, Equifax, TransUnion',
      'Dispute any inaccurate collection accounts or late payments',
      'Pay balances below 30% on all revolving credit accounts',
      'Gather last 2 years of W-2s and tax returns',
      'Gather last 30 days of paystubs',
      'Gather last 2 months of bank statements (all pages)',
      'Gather last 2 months of investment account statements',
      'Note any large deposits to explain source of funds',
      'Calculate current monthly debt payments',
      'Contact Mo to review your file before applying',
    ],
  },
  {
    phase: 'House Hunt Phase',
    items: [
      'Get fully pre-approved letter from Mo',
      'Set up MLS auto-searches with your agent',
      'Research school districts, walkability, commute times',
      'Attend at least 5–10 homes before making an offer',
      'Review 3–6 months of comparable sales before every offer',
      'Confirm HOA dues, special assessments, and rules',
      'Check if the home is in a flood zone (FEMA map)',
      'Confirm Mo can close in the seller\'s preferred timeframe',
    ],
  },
  {
    phase: 'Under Contract Phase',
    items: [
      'Wire earnest money deposit to escrow on time',
      'Schedule a licensed home inspector (not recommended by the seller)',
      'Attend the home inspection in person',
      'Review the appraisal report when it comes in',
      'Negotiate inspection repairs or credits if needed',
      'Complete any title review questions',
      'Review HOA docs for pending litigation or high reserves',
    ],
  },
  {
    phase: 'Closing Phase',
    items: [
      'Review Closing Disclosure 3 days before closing — compare to Loan Estimate',
      'Confirm wire instructions by phone (never by email alone)',
      'Do final walkthrough 24 hours before closing',
      'Bring government-issued photo ID to signing',
      'Set up homeowner\'s insurance before closing date',
      'Transfer utilities into your name for closing day',
      'Understand your first mortgage payment due date',
      'Keep all closing documents in a safe place',
    ],
  },
];

export default function FirstTimeBuyerChecklistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Home className="w-4 h-4 mr-1.5" />
            Orange County First-Time Buyers
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The Orange County First-Time Buyer Checklist: Everything You Need Before You Make an
            Offer
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A step-by-step timeline from credit prep to closing day — including down payment
            assistance programs that could save you thousands.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Your 8-Stage Homebuying Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((stage, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className={`${stage.color} text-white px-5 py-3 flex items-center gap-3`}>
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-sm md:text-base">{stage.stage}</span>
                </div>
                <ul className="p-5 space-y-2">
                  {stage.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPA Callout */}
      <section className="py-10 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 md:p-8 text-center shadow-md">
            <DollarSign className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Orange County Down Payment Assistance
            </h2>
            <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto">
              Orange County buyers may qualify for up to{' '}
              <strong>$150,000 in down payment assistance</strong>. Programs include{' '}
              <strong>CalHFA</strong>, <strong>CALHOME</strong>, and local city programs in
              Anaheim, Garden Grove, Santa Ana, and more.
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Income limits and eligibility requirements apply. Contact Mo to check current
              program availability in your target city.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Program Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Top Loan Programs for First-Time Buyers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loanPrograms.map((program, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 text-lg">{program.name}</h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${program.badgeColor}`}
                  >
                    {program.badge}
                  </span>
                </div>
                <div className="space-y-3 text-sm text-slate-600 mb-4">
                  <div>
                    <span className="font-semibold text-slate-800">Min. Down Payment: </span>
                    {program.minDown}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Credit Score: </span>
                    {program.creditScore}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Best For: </span>
                    {program.bestFor}
                  </div>
                </div>
                <ul className="space-y-1.5 mt-auto">
                  {program.pros.map((pro, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Download the Complete Checklist + DPA Program List
            </h2>
            <p className="text-slate-600">
              Get the full 30-item checklist plus a current list of down payment assistance
              programs available in Orange County — sent directly to you by Mo.
            </p>
          </div>
          <LeadMagnetForm
            magnetName="first_time_buyer_checklist"
            subject="First-Time Buyer Checklist + DPA Program List Request"
            loanPurpose="purchase"
            fields={[
              {
                name: 'timeline',
                label: 'When are you looking to buy?',
                type: 'select',
                required: true,
                options: [
                  { label: 'Within 3 months', value: '3_months' },
                  { label: '3–6 months', value: '3_6_months' },
                  { label: '6–12 months', value: '6_12_months' },
                  { label: 'Just exploring', value: 'exploring' },
                ],
              },
              {
                name: 'target_city',
                label: 'Target City or Area',
                type: 'text',
                placeholder: 'e.g. Irvine, Anaheim, Costa Mesa',
              },
            ]}
          />
        </div>
      </section>

      {/* Full 30-Item Checklist */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            The Full 30-Item Checklist by Phase
          </h2>
          <div className="space-y-6">
            {fullChecklist.map((phase, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4 pb-3 border-b border-slate-100">
                  {phase.phase}
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-slate-500 leading-relaxed">{COMPLIANCE_FOOTER}</p>
        </div>
      </footer>
    </div>
  );
}
