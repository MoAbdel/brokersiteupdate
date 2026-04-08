import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BadgeDollarSign, CheckCircle2, ClipboardList, Home, RefreshCcw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { buildBrokerEntityGraph, buildFAQPageSchema, buildServiceWebPageSchema } from '@/lib/schema-entities';
import { generateMetadata } from '@/lib/metadata';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

const PATH = '/loan-programs/va-refinance';
const PAGE_URL = `https://www.mothebroker.com${PATH}`;
const DATE_MODIFIED = '2026-04-07';

export const metadata: Metadata = generateMetadata({
  title: 'VA Refinance Orange County | IRRRL and VA Cash-Out Options',
  description:
    'Compare VA IRRRL and VA cash-out refinance options in Orange County. Learn when to lower your payment, pull equity, or keep your closing costs under control.',
  path: PATH,
  keywords: ['VA refinance Orange County', 'VA IRRRL', 'VA cash-out refinance', 'streamline refinance', 'veteran mortgage refinance'],
  dateModified: DATE_MODIFIED,
});

const faqs = [
  {
    question: 'What is the difference between a VA IRRRL and a VA cash-out refinance?',
    answer:
      'A VA IRRRL is a streamline refinance for borrowers who already have a VA loan and mainly want a lower rate or payment with lighter documentation. A VA cash-out refinance is used when you want to pull equity or refinance a non-VA loan into a new VA mortgage.',
  },
  {
    question: 'Do I need an appraisal for a VA refinance?',
    answer:
      'An appraisal is often not required for a VA IRRRL, but it is usually required for a VA cash-out refinance because the lender needs to confirm the property value and loan-to-value ratio.',
  },
  {
    question: 'Can I refinance into a VA loan if I currently have a conventional or FHA mortgage?',
    answer:
      'Yes. Eligible veterans can use a VA cash-out refinance to replace a conventional or FHA loan with a new VA mortgage, subject to entitlement, occupancy, credit, and lender guidelines.',
  },
  {
    question: 'What does net tangible benefit mean on a VA refinance?',
    answer:
      'The VA generally requires the refinance to create a clear borrower benefit, such as a lower payment, a more stable fixed rate, or another documented improvement that justifies replacing the existing loan.',
  },
];

const brokerSchema = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'VA Refinance Services',
  serviceName: 'VA Refinance Orange County',
  serviceDescription:
    'Guidance for Orange County veterans comparing VA IRRRL and VA cash-out refinance options, including payment reduction and equity access strategies.',
  areaServedName: 'Orange County, California',
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'VA Refinance Orange County | IRRRL and VA Cash-Out Options',
  description:
    'Compare VA IRRRL and VA cash-out refinance options in Orange County. Learn when to lower your payment, pull equity, or keep your closing costs under control.',
  breadcrumbName: 'VA Refinance',
  dateModified: DATE_MODIFIED,
});

const faqSchema = buildFAQPageSchema(faqs, PAGE_URL);

const refinanceOptions = [
  {
    title: 'VA IRRRL',
    icon: RefreshCcw,
    summary: 'Best when you already have a VA loan and mainly want a cleaner payment or rate improvement.',
    bullets: [
      'Often no appraisal requirement',
      'Usually lighter income and asset documentation',
      'Designed for existing VA borrowers only',
      'Good fit when you are not trying to pull cash',
    ],
  },
  {
    title: 'VA Cash-Out Refinance',
    icon: BadgeDollarSign,
    summary: 'Best when you want to access equity, pay off other debt, or refinance a non-VA mortgage into VA financing.',
    bullets: [
      'Can provide lump-sum equity access',
      'Can replace conventional or FHA loans with VA financing',
      'Usually requires a full appraisal and more complete underwriting',
      'Works best when the equity use is strategic and the payment still makes sense',
    ],
  },
];

const processSteps = [
  'Confirm your current mortgage type, approximate home value, and whether you need cash out.',
  'Review whether IRRRL or cash-out creates a real payment, term, or liquidity benefit.',
  'Collect entitlement, occupancy, and income documents that match the refinance type.',
  'Lock the option that balances payment relief, closing costs, and long-term flexibility.',
];

export default function VARefinancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brokerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Veteran refinance guidance
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              VA Refinance in Orange County
            </h1>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700" data-speakable>
              The two main VA refinance paths are a VA IRRRL for existing VA borrowers who want a smoother payment or rate reset,
              and a VA cash-out refinance for borrowers who need equity access or want to move a non-VA loan into the VA program.
              The right choice depends on whether you need cash, whether you want to preserve a low balance structure, and whether
              the refinance creates a real monthly or long-term benefit.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-slate-900 px-8 py-3 text-white hover:bg-slate-800">
                  Review My VA Refinance
                </Button>
              </Link>
              <a href={PHONE_TEL_HREF}>
                <Button variant="ghost" className="border border-blue-600 px-8 py-3 text-blue-600 hover:bg-blue-50">
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            {refinanceOptions.map((option) => (
              <div key={option.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <option.icon className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900">{option.title}</h2>
                </div>
                <p className="mt-4 text-slate-700">{option.summary}</p>
                <ul className="mt-6 space-y-3">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">VA IRRRL vs. VA Cash-Out Refinance</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Bing and Google both reward answer-first pages, so here is the short version: choose IRRRL when you already have
              a VA loan and want efficiency, and choose cash-out when the refinance needs to change your equity position or loan type.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border-collapse overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">Decision Point</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">VA IRRRL</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">VA Cash-Out</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Who it fits</td>
                    <td className="px-4 py-4">Existing VA borrowers focused on efficiency</td>
                    <td className="px-4 py-4">Borrowers needing cash or converting into VA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Appraisal</td>
                    <td className="px-4 py-4">Often not required</td>
                    <td className="px-4 py-4">Usually required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Cash back</td>
                    <td className="px-4 py-4">Not intended for equity extraction</td>
                    <td className="px-4 py-4">Yes, subject to value and guidelines</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Documentation</td>
                    <td className="px-4 py-4">Typically lighter</td>
                    <td className="px-4 py-4">More complete underwriting package</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Best outcome</td>
                    <td className="px-4 py-4">Cleaner payment structure with less friction</td>
                    <td className="px-4 py-4">Strategic liquidity plus possible program upgrade</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">When a VA refinance actually makes sense</h2>
              <div className="mt-6 space-y-5 text-slate-700">
                <p>
                  A refinance should solve a real problem. For Orange County veterans, the strongest cases are reducing a payment that
                  is crowding monthly cash flow, moving from an adjustable structure to a fixed payment, or accessing equity for a defined
                  purpose like home repairs, debt consolidation, or a larger financial plan.
                </p>
                <p>
                  What we try to avoid is replacing a workable loan with a more expensive one just because rates moved slightly or cash is
                  available. The VA&apos;s net tangible benefit standard is useful here because it pushes the conversation toward the borrower
                  outcome, not just the transaction.
                </p>
                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">Quick decision checklist</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You already have a VA loan and want a lower payment without adding cash needs.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You need to tap equity, but the new payment still fits your plan after taxes, insurance, and closing costs.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You want to replace a conventional or FHA mortgage with VA financing because the math improves.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You can document why the refinance is better than keeping the current loan.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">How we review a file</h2>
              <ol className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Helpful official references</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                      VA IRRRL overview <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.va.gov/housing-assistance/home-loans/loan-types/cash-out-loan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                      VA cash-out refinance overview <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.consumerfinance.gov/owning-a-home/close/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                      CFPB closing-cost guidance <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">VA refinance FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5" open={faq.question === faqs[0]?.question}>
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-1 h-6 w-6 flex-none text-blue-300" />
              <div>
                <h2 className="text-3xl font-bold">Need a fast VA refinance sanity check?</h2>
                <p className="mt-3 max-w-3xl text-slate-200">
                  We can review whether IRRRL or cash-out is the cleaner move, estimate the payment difference, and flag any appraisal
                  or documentation friction before you commit to the refinance.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-white px-8 py-3 text-slate-950 hover:bg-slate-100">
                  Request a VA Refinance Review
                </Button>
              </Link>
              <a href={PHONE_TEL_HREF}>
                <Button variant="ghost" className="border border-white px-8 py-3 text-white hover:bg-white hover:text-slate-900">
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-xs leading-6 text-slate-600" data-nosnippet>
            This page is for educational purposes and is not a commitment to lend. All loans are subject to credit approval,
            occupancy requirements, VA eligibility, property review, and investor guidelines. Loan options, terms, and costs can
            change without notice.
          </section>
        </div>
      </div>
    </>
  );
}
