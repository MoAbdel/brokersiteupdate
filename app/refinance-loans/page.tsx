import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BadgePercent, CheckCircle2, Clock3, Home, Landmark, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { buildBrokerEntityGraph, buildFAQPageSchema, buildServiceWebPageSchema } from '@/lib/schema-entities';
import { generateMetadata } from '@/lib/metadata';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

const PATH = '/refinance-loans';
const PAGE_URL = `https://www.mothebroker.com${PATH}`;
const DATE_MODIFIED = '2026-04-07';

export const metadata: Metadata = generateMetadata({
  title: 'Refinance Loans | Rate-and-Term, Cash-Out, FHA, and VA Options',
  description:
    'Compare refinance options across California and Washington, including rate-and-term, cash-out, FHA streamline, and VA refinance scenarios.',
  path: PATH,
  keywords: ['refinance loans', 'cash-out refinance', 'rate and term refinance', 'FHA streamline', 'VA refinance'],
  dateModified: DATE_MODIFIED,
});

const options = [
  {
    title: 'Rate-and-Term Refinance',
    icon: BadgePercent,
    bestFor: 'Homeowners who mainly want a cleaner payment, lower rate, or a different loan term.',
    bullets: [
      'Lower monthly payment or shorten payoff timeline',
      'Move from adjustable to fixed-rate stability',
      'Possible PMI removal when equity supports it',
    ],
    href: '/rate-term-refinance-orange-county',
  },
  {
    title: 'Cash-Out Refinance',
    icon: Wallet,
    bestFor: 'Borrowers who need equity for debt payoff, renovation, reserves, or a larger liquidity plan.',
    bullets: [
      'Convert equity into one lump-sum loan proceeds amount',
      'Can simplify higher-interest debt into one mortgage structure',
      'Works best when the new payment still aligns with long-term goals',
    ],
    href: '/cash-out-refinance',
  },
  {
    title: 'FHA or VA Streamline Paths',
    icon: Landmark,
    bestFor: 'Borrowers who already have government-backed loans and want a lower-friction refinance path.',
    bullets: [
      'Often fewer documentation steps than a full refinance',
      'Useful when payment improvement matters more than equity extraction',
      'Can reduce timeline uncertainty for the right file',
    ],
    href: '/loan-programs/va-refinance',
  },
];

const faqs = [
  {
    question: 'When does refinancing actually make sense?',
    answer:
      'Refinancing usually makes sense when it clearly improves the mortgage, not just when rates move. The strongest cases are lower monthly payments, a better loan structure, PMI removal, or strategic equity access that still leaves you in a healthier overall position.',
  },
  {
    question: 'How much equity do I need to refinance?',
    answer:
      'It depends on the loan type and your goal. Rate-and-term refinances can work with less equity than a cash-out refinance, while cash-out options usually require you to leave meaningful equity in the home after closing.',
  },
  {
    question: 'Should I choose a cash-out refinance or a HELOC instead?',
    answer:
      'Choose cash-out when replacing the first mortgage improves the whole structure. Choose a HELOC or HELOAN when keeping an existing low first-lien rate is more valuable and you only need a second-lien equity tool.',
  },
  {
    question: 'How long does a refinance take?',
    answer:
      'Many refinances close in a few weeks, but timing depends on the loan type, appraisal requirements, documentation speed, and lender turn times. Streamline scenarios can move faster than full cash-out or jumbo files.',
  },
];

const brokerSchema = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'Mortgage Refinance Services',
  serviceName: 'California and Washington Refinance Loans',
  serviceDescription:
    'Mortgage refinance guidance for rate-and-term, cash-out, FHA, and VA scenarios across California and Washington.',
  areaServedNames: ['California', 'Washington'],
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'Refinance Loans | Rate-and-Term, Cash-Out, FHA, and VA Options',
  description:
    'Compare refinance options across California and Washington, including rate-and-term, cash-out, FHA streamline, and VA refinance scenarios.',
  breadcrumbName: 'Refinance Loans',
  dateModified: DATE_MODIFIED,
});

const faqSchema = buildFAQPageSchema(faqs, PAGE_URL);

export default function RefinanceLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brokerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Home className="mr-2 h-4 w-4" />
              Refinance planning hub
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Refinance Loans in California and Washington
            </h1>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700" data-speakable>
              Refinance makes the most sense when it clearly improves the loan you already have. That can mean lowering the payment,
              removing PMI, changing the term, or accessing equity in a way that still strengthens your overall balance sheet. The
              right option is usually either rate-and-term, cash-out, or a government-backed streamline path, depending on your current loan.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-slate-900 px-8 py-3 text-white hover:bg-slate-800">
                  Review My Refinance Options
                </Button>
              </Link>
              <a href={PHONE_TEL_HREF}>
                <Button variant="ghost" className="border border-blue-600 px-8 py-3 text-blue-600 hover:bg-blue-50">
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-3">
            {options.map((option) => (
              <div key={option.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <option.icon className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900">{option.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-slate-900">Best for:</span> {option.bestFor}
                </p>
                <ul className="mt-5 space-y-3">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link href={option.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">How to decide which refinance path fits</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border-collapse overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">Question</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">If the answer is yes</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-slate-900">Best next look</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Do you mainly want a lower payment or cleaner term?</td>
                    <td className="px-4 py-4">You may not need to change your equity position at all.</td>
                    <td className="px-4 py-4">Rate-and-term refinance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Do you need cash from the home?</td>
                    <td className="px-4 py-4">The refinance has to be judged against the new payment and retained equity.</td>
                    <td className="px-4 py-4">Cash-out refinance or second-lien comparison</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Do you already have FHA or VA financing?</td>
                    <td className="px-4 py-4">A streamline route may reduce friction and documentation.</td>
                    <td className="px-4 py-4">FHA streamline or VA IRRRL review</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">Do you have a very low first-mortgage rate already?</td>
                    <td className="px-4 py-4">Replacing that first lien may not be the best math.</td>
                    <td className="px-4 py-4">HELOC or HELOAN comparison alongside cash-out</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">Signals that a refinance is worth deeper review</h2>
              <div className="mt-6 space-y-5 text-slate-700">
                <p>
                  The best refinance files usually have a clear story. Maybe the current payment is too high, maybe the home has appreciated
                  enough to remove mortgage insurance, or maybe you need liquidity for a defined purpose and the mortgage can provide it more
                  efficiently than other debt.
                </p>
                <p>
                  What matters most is not just the new rate. It is the combined impact of payment, term reset, closing costs, retained equity,
                  and how long you expect to keep the loan. That is also the kind of specificity that tends to improve search snippet quality
                  because the page directly answers the borrower&apos;s real decision.
                </p>
                <div className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">Quick borrower checklist</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You can name the exact outcome you want: lower payment, shorter term, PMI removal, or equity access.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You have enough equity for the refinance type you are considering.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You understand the closing-cost tradeoff instead of looking at rate alone.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" /><span>You plan to keep the home long enough for the refinance benefit to matter.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Helpful refinance references</h2>
              </div>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://www.consumerfinance.gov/owning-a-home/close/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                    CFPB mortgage closing-cost guidance <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="https://www.hud.gov/federal_housing_administration" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                    HUD and FHA refinance resources <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="https://www.va.gov/housing-assistance/home-loans/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                    VA refinance resources <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Related refinance paths</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <Link href="/loan-programs/va-refinance" className="block font-semibold text-blue-700 hover:text-blue-800">
                    VA refinance options
                  </Link>
                  <Link href="/cash-out-refinance" className="block font-semibold text-blue-700 hover:text-blue-800">
                    Cash-out refinance guide
                  </Link>
                  <Link href="/heloc-orange-county" className="block font-semibold text-blue-700 hover:text-blue-800">
                    Compare against HELOC
                  </Link>
                  <Link href="/blog/heloan-vs-cash-out-refinance-2026" className="block font-semibold text-blue-700 hover:text-blue-800">
                    HELOAN vs. cash-out comparison
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Refinance FAQ</h2>
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
            <h2 className="text-3xl font-bold">Want a refinance comparison that is specific to your loan?</h2>
            <p className="mt-3 max-w-3xl text-slate-200">
              We can compare payment impact, closing costs, term reset, and whether a HELOC or HELOAN should stay in the conversation
              before you commit to a full refinance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-white px-8 py-3 text-slate-950 hover:bg-slate-100">
                  Request My Refinance Review
                </Button>
              </Link>
              <a href={PHONE_TEL_HREF}>
                <Button variant="ghost" className="border border-white px-8 py-3 text-white hover:bg-white hover:text-slate-900">
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
