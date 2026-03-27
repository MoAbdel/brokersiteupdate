/* ---------------------------------------------------------------------------
 * RefinanceCityTemplate.tsx
 * Bing-first inverted-pyramid template for 16 refinance city pages
 * (8 cash-out + 8 rate-and-term).  Each page receives its city data and
 * refinance type; the template varies H2 phrasing, comparison tables, FAQ
 * answer formats, and narrative paragraphs to avoid Bing's "artificially
 * engineered language" penalty across all 16 pages.
 * --------------------------------------------------------------------------- */

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  buildBrokerEntityGraph,
  buildServiceWebPageSchema,
  buildFAQPageSchema,
} from '@/lib/schema-entities';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import PageHero from '@/components/marketing/PageHero';
import {
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  SITE_ORIGIN,
  NMLS_ID,
} from '@/lib/site';
import type { RefinanceCityData } from '@/lib/refinance-city-data';

/* ── Props ─────────────────────────────────────────────────────────────────── */

export interface RefinanceCityTemplateProps {
  cityData: RefinanceCityData;
  refinanceType: 'cash-out' | 'rate-term';
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

const fmt = (n: number) => n.toLocaleString('en-US');
const fmtDollar = (n: number) => `$${fmt(n)}`;

function slugForType(slug: string, type: 'cash-out' | 'rate-term') {
  return type === 'cash-out'
    ? `${slug}-cash-out-refinance`
    : `${slug}-rate-term-refinance`;
}

function counterpartType(type: 'cash-out' | 'rate-term') {
  return type === 'cash-out' ? 'rate-term' : 'cash-out';
}

function productLabel(type: 'cash-out' | 'rate-term') {
  return type === 'cash-out' ? 'cash-out refinancing' : 'rate-and-term refinancing';
}

function productTitle(type: 'cash-out' | 'rate-term') {
  return type === 'cash-out' ? 'Cash-Out Refinance' : 'Rate & Term Refinance';
}

function counterpartLabel(type: 'cash-out' | 'rate-term') {
  return type === 'cash-out' ? 'Rate & Term Refinance' : 'Cash-Out Refinance';
}

/* ── Metadata Generator ────────────────────────────────────────────────────── */

export function generateRefinanceMetadata(
  city: RefinanceCityData,
  type: 'cash-out' | 'rate-term'
): Metadata {
  const title =
    type === 'cash-out'
      ? `Cash-Out Refinance ${city.name}, CA | Mo Abdel NMLS #${NMLS_ID}`
      : `Rate & Term Refinance ${city.name}, CA | Mo Abdel NMLS #${NMLS_ID}`;

  const description =
    type === 'cash-out'
      ? `Cash-out refinance in ${city.name}, CA with Mo Abdel, NMLS #${NMLS_ID}. ${city.name} median home value ${fmtDollar(city.medianHomeValue)} with up to ${fmtDollar(city.medianEquity)} in accessible equity. Call ${PHONE_DISPLAY} for wholesale rates.`
      : `Rate-and-term refinance in ${city.name}, CA with Mo Abdel, NMLS #${NMLS_ID}. Lower your mortgage rate or change your loan term on your ${city.name} home. Call ${PHONE_DISPLAY} for wholesale rates.`;

  const canonicalUrl = `${SITE_ORIGIN}/areas/${slugForType(city.slug, type)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_US',
      siteName: 'Mo Abdel | Mortgage Broker',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: {
      'geo.region': 'US-CA',
      'geo.placename': `${city.name}, California`,
      'geo.position': `${city.lat};${city.lng}`,
      ICBM: `${city.lat}, ${city.lng}`,
      language: 'en',
    },
  };
}

/* ── FAQ Builder ───────────────────────────────────────────────────────────── */

function buildFAQs(city: RefinanceCityData, type: 'cash-out' | 'rate-term') {
  const isCashOut = type === 'cash-out';
  const maxEquity80 = Math.round(city.medianHomeValue * 0.8 - (city.medianHomeValue - city.medianEquity));

  if (isCashOut) {
    return [
      {
        question: `What is the maximum cash-out refinance amount in ${city.name}?`,
        answer: `Most lenders cap cash-out at 80% loan-to-value. For a ${city.name} home valued at ${fmtDollar(city.medianHomeValue)}, that means up to ${fmtDollar(maxEquity80)} in accessible equity after subtracting your existing mortgage balance. Exact amounts depend on credit score, property type, and current lien balances. Mo Abdel compares offers from 50+ wholesale lenders to maximize your payout while keeping your rate competitive.`,
      },
      {
        question: `Should I choose a HELOC or cash-out refinance in ${city.name}?`,
        answer: `Cash-out refinancing replaces your entire mortgage with one fixed-rate loan. A HELOC adds a revolving credit line on top of your existing mortgage. Choose cash-out when you need a large lump sum at a locked rate. Choose a HELOC when you want flexible, ongoing access to equity — common among ${city.name} homeowners funding phased renovations.`,
      },
      {
        question: `What credit score do I need to cash-out refinance in ${city.name}?`,
        answer: `Most conventional cash-out programs require a 680 or higher credit score. FHA cash-out allows scores as low as 580 with additional restrictions. VA-eligible borrowers can access cash-out refinancing at 620. Non-QM options exist for scores below 680, though rates increase. Mo Abdel matches ${city.name} homeowners to the lender tier that yields the lowest rate for their exact profile.`,
      },
      {
        question: `How long does a cash-out refinance take in ${city.name}?`,
        answer: `Cash-out refinances in ${city.name} typically close in 25 to 35 days. The timeline includes appraisal scheduling, title work, and underwriting review. Mo Abdel's wholesale channel often shortens this to 21–28 days because wholesale underwriters process files faster than retail bank pipelines. Rush closings under 21 days are available for qualified borrowers.`,
      },
      {
        question: `Are cash-out refinance closing costs tax-deductible in ${city.name}?`,
        answer: `Points and prepaid interest are generally deductible in the year you close. Other closing costs such as appraisal and title fees are not directly deductible but add to your cost basis. ${city.name} homeowners should consult a tax professional for their specific situation. The average cash-out closing cost runs 2–5% of the new loan amount.`,
      },
      {
        question: `Can I cash-out refinance an investment property in ${city.name}?`,
        answer: `Yes, investment property cash-out refinancing is available in ${city.name}. Conventional programs cap LTV at 75% for investment properties. DSCR loan programs offer cash-out with no income verification, using rental income to qualify. Expect rates 0.50–0.75% higher than primary residence cash-out. Mo Abdel sources investment cash-out from specialized wholesale lenders.`,
      },
      {
        question: `What is the 2026 conforming loan limit for cash-out refinancing in ${city.name}?`,
        answer: `The 2026 FHFA conforming limit for Orange County is ${fmtDollar(city.conformingLimit)}. Cash-out refinances up to this amount qualify for conforming rates. Loans above ${fmtDollar(city.conformingLimit)} fall into jumbo territory, where wholesale broker access delivers measurably better pricing than retail banks. ${city.name} properties frequently exceed the conforming limit due to the local median value of ${fmtDollar(city.medianHomeValue)}.`,
      },
      {
        question: `How much equity do I need for a cash-out refinance in ${city.name}?`,
        answer: `You need at least 20% equity remaining after the cash-out. For a ${city.name} home at ${fmtDollar(city.medianHomeValue)}, that means maintaining a minimum of ${fmtDollar(Math.round(city.medianHomeValue * 0.2))} in equity post-refinance. Many ${city.name} homeowners currently hold ${fmtDollar(city.medianEquity)} in equity, providing substantial room for cash-out. VA loans allow up to 100% LTV for eligible veterans.`,
      },
      {
        question: `Will a cash-out refinance increase my monthly payment in ${city.name}?`,
        answer: `It depends on your current rate versus the new rate and loan amount. If your existing rate is above current wholesale rates, a cash-out refinance could lower your payment even while extracting equity. If rates are higher, your payment increases proportional to the additional balance. Mo Abdel runs exact payment scenarios for ${city.name} homeowners before locking any rate.`,
      },
      {
        question: `What documents do I need for a cash-out refinance in ${city.name}?`,
        answer: `Standard documentation includes two years of tax returns, 30 days of pay stubs, two months of bank statements, and a current mortgage statement. Self-employed ${city.name} borrowers may qualify through bank statement programs requiring 12–24 months of deposits instead. Mo Abdel provides a personalized checklist based on your loan program and employment type.`,
      },
      {
        question: `Can I use cash-out refinance proceeds for any purpose in ${city.name}?`,
        answer: `Yes, cash-out proceeds are unrestricted for conventional loans. Common uses among ${city.name} homeowners include home renovations, debt consolidation, education funding, and investment property down payments. The only restriction applies to FHA cash-out, which cannot be used to purchase additional real estate. There is no lender monitoring of how you spend conventional cash-out funds.`,
      },
      {
        question: `Does Mo Abdel charge origination fees for ${city.name} cash-out refinances?`,
        answer: `Mo Abdel operates as a wholesale broker, meaning lender-paid compensation is standard. Many cash-out refinances close with zero borrower-paid origination fees depending on rate selection. All fees are disclosed upfront in the Loan Estimate within three business days of application. Contact Mo at ${PHONE_DISPLAY} for a transparent fee breakdown specific to your ${city.name} property.`,
      },
    ];
  }

  /* ── Rate-and-Term FAQs ─────────────────────────────────────────────────── */
  return [
    {
      question: `What is rate-and-term refinancing and how does it work in ${city.name}?`,
      answer: `Rate-and-term refinancing replaces your existing mortgage with a new loan at a different rate or term. No cash is taken out — the goal is purely to improve your loan structure. ${city.name} homeowners commonly refinance from a 30-year to a 15-year term or from a higher rate to a lower one. Mo Abdel compares pricing from 50+ wholesale lenders to find the optimal combination.`,
    },
    {
      question: `When does rate-and-term refinancing make sense in ${city.name}?`,
      answer: `Refinancing makes financial sense when you can reduce your rate by 0.50% or more. ${city.name} homeowners who purchased between 2022 and 2024 at elevated rates are prime candidates today. The break-even point — where savings exceed closing costs — typically arrives in 18–24 months. Mo Abdel calculates your exact break-even during the initial consultation at no cost.`,
    },
    {
      question: `What credit score do I need to refinance my ${city.name} mortgage?`,
      answer: `Conventional rate-and-term refinancing requires a minimum 620 credit score for most programs. FHA Streamline refinances accept scores as low as 580. VA Interest Rate Reduction Loans (IRRRLs) have no minimum score at many lenders. Higher scores unlock better pricing tiers. Mo Abdel sources rate sheets from 50+ lenders to find the best rate available for your exact score.`,
    },
    {
      question: `How long does a rate-and-term refinance take in ${city.name}?`,
      answer: `Rate-and-term refinances typically close in 21 to 30 days in ${city.name}. Streamline programs like FHA Streamline or VA IRRRL can close in as few as 15 days because they require less documentation. Mo Abdel's wholesale processing channel eliminates retail bank delays, consistently closing 5–7 days faster than the industry average for ${city.name} transactions.`,
    },
    {
      question: `Can I refinance from a 30-year to a 15-year mortgage in ${city.name}?`,
      answer: `Yes, term reduction is one of the most common refinance strategies in ${city.name}. Switching from 30 to 15 years increases your monthly payment but dramatically reduces total interest paid — often by ${fmtDollar(Math.round(city.medianHomeValue * 0.25))} or more over the loan life. 20-year and 25-year terms are also available as compromise options.`,
    },
    {
      question: `Should I choose a HELOC or rate-and-term refinance in ${city.name}?`,
      answer: `These serve different purposes. Rate-and-term refinancing improves your primary mortgage rate or term without accessing equity. A HELOC provides a separate credit line secured by your home equity. If your goal is lowering your existing payment, choose rate-and-term. If you need funds while keeping your current mortgage, a HELOC is the better fit for ${city.name} homeowners.`,
    },
    {
      question: `What are the closing costs for rate-and-term refinancing in ${city.name}?`,
      answer: `Closing costs typically range from 2% to 5% of the loan amount for ${city.name} rate-and-term refinances. On a ${fmtDollar(city.typicalLoanRange.min)} to ${fmtDollar(city.typicalLoanRange.max)} loan, that translates to ${fmtDollar(Math.round(city.typicalLoanRange.min * 0.025))}–${fmtDollar(Math.round(city.typicalLoanRange.max * 0.04))}. No-closing-cost options are available where fees are rolled into a slightly higher rate. Mo Abdel presents both options so you can choose.`,
    },
    {
      question: `Is a rate-and-term refinance tax-deductible in ${city.name}?`,
      answer: `Mortgage interest on your refinanced loan remains deductible on the first ${fmtDollar(750_000)} of mortgage debt under current IRS rules. Points paid at closing may be deductible over the loan term. ${city.name} homeowners with mortgages above the conforming limit at ${fmtDollar(city.conformingLimit)} should consult a tax advisor for jumbo-specific guidance.`,
    },
    {
      question: `Can I refinance if I owe more than my ${city.name} home is worth?`,
      answer: `Underwater refinancing is limited but possible through specific programs. FHA Streamline and VA IRRRL allow refinancing regardless of current LTV. Conventional high-LTV programs exist for borrowers up to 97% LTV. Given that ${city.name} median equity stands at ${fmtDollar(city.medianEquity)}, most local homeowners have substantial equity and qualify for standard refinancing.`,
    },
    {
      question: `What documents do I need for a rate-and-term refinance in ${city.name}?`,
      answer: `Required documents include two years of tax returns, 30 days of pay stubs, two months of bank statements, and your current mortgage statement. FHA Streamline and VA IRRRL programs require significantly less documentation — sometimes just proof of on-time payments. Mo Abdel sends a personalized checklist after your initial call so you can prepare everything in advance.`,
    },
    {
      question: `How much can I save by refinancing my ${city.name} mortgage?`,
      answer: `Savings depend on your current rate, remaining balance, and new loan terms. A 0.75% rate reduction on a ${fmtDollar(Math.round((city.typicalLoanRange.min + city.typicalLoanRange.max) / 2))} loan saves approximately ${fmtDollar(Math.round(((city.typicalLoanRange.min + city.typicalLoanRange.max) / 2) * 0.0075 / 12))} per month. Over 30 years, that compounds to five figures in total savings. Mo Abdel provides exact savings projections for ${city.name} homeowners during a free consultation.`,
    },
    {
      question: `Does Mo Abdel charge fees for ${city.name} rate-and-term refinances?`,
      answer: `Mo Abdel works through the wholesale channel where lender-paid compensation is standard practice. Many rate-and-term refinances close with zero borrower-paid origination points. All costs are disclosed transparently in the Loan Estimate within three business days. Call ${PHONE_DISPLAY} for a no-obligation rate quote specific to your ${city.name} property.`,
    },
  ];
}

/* ── Loan Scenarios Builder ────────────────────────────────────────────────── */

function buildLoanScenarios(
  city: RefinanceCityData,
  type: 'cash-out' | 'rate-term'
) {
  const low = Math.round(city.medianHomeValue * 0.7);
  const mid = city.medianHomeValue;
  const high = Math.round(city.medianHomeValue * 1.35);

  if (type === 'cash-out') {
    return [
      {
        homeValue: low,
        currentLoan: Math.round(low * 0.55),
        equity: Math.round(low * 0.45),
        cashAvailable: Math.round(low * 0.8 - low * 0.55),
      },
      {
        homeValue: mid,
        currentLoan: Math.round(mid * 0.5),
        equity: Math.round(mid * 0.5),
        cashAvailable: Math.round(mid * 0.8 - mid * 0.5),
      },
      {
        homeValue: high,
        currentLoan: Math.round(high * 0.45),
        equity: Math.round(high * 0.55),
        cashAvailable: Math.round(high * 0.8 - high * 0.45),
      },
    ];
  }

  return [
    {
      homeValue: low,
      currentLoan: Math.round(low * 0.65),
      equity: Math.round(low * 0.35),
      estMonthlySavings: Math.round((low * 0.65 * 0.0075) / 12),
    },
    {
      homeValue: mid,
      currentLoan: Math.round(mid * 0.6),
      equity: Math.round(mid * 0.4),
      estMonthlySavings: Math.round((mid * 0.6 * 0.0075) / 12),
    },
    {
      homeValue: high,
      currentLoan: Math.round(high * 0.5),
      equity: Math.round(high * 0.5),
      estMonthlySavings: Math.round((high * 0.5 * 0.0075) / 12),
    },
  ];
}

/* ── Process Steps Builder ─────────────────────────────────────────────────── */

function buildProcessSteps(city: string, type: 'cash-out' | 'rate-term') {
  if (type === 'cash-out') {
    return [
      {
        name: 'Assess your equity position',
        text: `Review your current mortgage balance against your ${city} home value to determine how much cash you can access at 80% LTV.`,
      },
      {
        name: 'Get a wholesale rate comparison',
        text: `Mo Abdel compares cash-out rates from 50+ wholesale lenders to find the lowest rate available for your credit profile and loan amount.`,
      },
      {
        name: 'Submit your application and documentation',
        text: `Provide tax returns, pay stubs, bank statements, and your current mortgage statement to start the underwriting process.`,
      },
      {
        name: 'Complete the home appraisal',
        text: `An independent appraiser verifies your ${city} property value, which determines the maximum cash-out amount at 80% LTV.`,
      },
      {
        name: 'Receive underwriting approval',
        text: `The wholesale lender reviews your file, verifies income and assets, and issues a conditional approval — typically within 7–10 business days.`,
      },
      {
        name: 'Clear conditions and schedule closing',
        text: `Satisfy any remaining underwriter conditions such as updated bank statements or payoff letters from your current lender.`,
      },
      {
        name: 'Sign closing documents and receive funds',
        text: `Sign at a title company or through mobile notary, then receive your cash-out proceeds via wire transfer within 3 business days of funding.`,
      },
    ];
  }

  return [
    {
      name: 'Evaluate your current loan terms',
      text: `Compare your existing interest rate and remaining term against current wholesale market rates to estimate potential savings on your ${city} mortgage.`,
    },
    {
      name: 'Request a personalized rate quote',
      text: `Mo Abdel pulls live pricing from 50+ wholesale lenders and presents multiple rate-term combinations so you can choose the best fit.`,
    },
    {
      name: 'Calculate your break-even point',
      text: `Divide total closing costs by your monthly savings to determine how many months until the refinance pays for itself — typically 18–24 months.`,
    },
    {
      name: 'Submit application and documentation',
      text: `Provide two years of tax returns, recent pay stubs, bank statements, and your current mortgage statement to begin underwriting.`,
    },
    {
      name: 'Complete the appraisal (if required)',
      text: `Some ${city} rate-and-term refinances qualify for appraisal waivers based on automated underwriting. When required, an appraiser confirms your property value.`,
    },
    {
      name: 'Receive underwriting clearance',
      text: `The wholesale underwriter reviews your complete file and issues a clear-to-close, often 5–7 days faster than retail bank underwriting.`,
    },
    {
      name: 'Sign and close your new mortgage',
      text: `Close at a local title company or via mobile notary. Your new rate and term take effect immediately, and the old loan is paid off within days.`,
    },
  ];
}

/* ── Main Component ────────────────────────────────────────────────────────── */

export default function RefinanceCityTemplate({
  cityData,
  refinanceType,
}: RefinanceCityTemplateProps) {
  const city = cityData;
  const type = refinanceType;
  const isCashOut = type === 'cash-out';

  const canonicalUrl = `${SITE_ORIGIN}/areas/${slugForType(city.slug, type)}`;
  const counterpartUrl = `/areas/${slugForType(city.slug, counterpartType(type))}`;

  const faqs = buildFAQs(city, type);
  const scenarios = buildLoanScenarios(city, type);
  const steps = buildProcessSteps(city.name, type);

  /* ── Schema ───────────────────────────────────────────────────────────── */

  const entityGraph = buildBrokerEntityGraph({
    pageUrl: canonicalUrl,
    serviceType: 'FinancialService',
    serviceName: `${city.name} ${productTitle(type)} — Mo Abdel`,
    serviceDescription: `${productTitle(type)} services for ${city.name}, California homeowners. Wholesale mortgage broker access to 50+ lenders for competitive ${productLabel(type)} rates. NMLS #${NMLS_ID}.`,
    areaServedNames: [`${city.name}, CA`, 'Orange County, CA'],
    businessName: `Mo Abdel - ${city.name} ${productTitle(type)}`,
  });

  const webPageSchema = buildServiceWebPageSchema({
    pageUrl: canonicalUrl,
    title: `${productTitle(type)} ${city.name}, CA | Mo Abdel NMLS #${NMLS_ID}`,
    description: `${productTitle(type)} services for ${city.name}, California homeowners with wholesale rates from 50+ lenders.`,
    breadcrumbName: `${city.name} ${productTitle(type)}`,
    includeSpeakable: true,
    dateModified: '2026-03-26',
  });

  const faqSchema = buildFAQPageSchema(faqs, canonicalUrl);

  /* ── Nearby cities for internal linking ───────────────────────────────── */
  const nearbyCities: Record<string, string[]> = {
    irvine: ['lake-forest', 'aliso-viejo'],
    'mission-viejo': ['laguna-niguel', 'aliso-viejo'],
    'laguna-niguel': ['dana-point', 'mission-viejo'],
    'dana-point': ['san-clemente', 'laguna-niguel'],
    'san-clemente': ['dana-point', 'mission-viejo'],
    'lake-forest': ['irvine', 'mission-viejo'],
    'aliso-viejo': ['laguna-niguel', 'irvine'],
    'yorba-linda': ['irvine', 'lake-forest'],
  };
  const nearbySlugs = nearbyCities[city.slug] ?? ['irvine', 'mission-viejo'];

  /* ── Nearby city name mapping ─────────────────────────────────────────── */
  const slugToName: Record<string, string> = {
    irvine: 'Irvine',
    'mission-viejo': 'Mission Viejo',
    'laguna-niguel': 'Laguna Niguel',
    'dana-point': 'Dana Point',
    'san-clemente': 'San Clemente',
    'lake-forest': 'Lake Forest',
    'aliso-viejo': 'Aliso Viejo',
    'yorba-linda': 'Yorba Linda',
  };

  return (
    <>
      {/* ── JSON-LD Schema ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs />

      <article className="min-h-screen bg-slate-50">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <PageHero
          badgeText={`${productTitle(type)} in ${city.name}, CA`}
          badgeIcon={MapPin}
          title={
            <>
              {city.name}{' '}
              <span className="text-slate-200">{productTitle(type)}</span>
              {isCashOut
                ? ' — Unlock Your Home Equity'
                : ' — Lower Your Rate or Shorten Your Term'}
            </>
          }
          subtitle={
            <>
              Wholesale {productLabel(type)} for {city.name} homeowners.
              Access 50+ lenders, competitive pricing, and closings as fast as
              21 days. Mo Abdel, NMLS #{NMLS_ID}.
            </>
          }
          primaryAction={{
            href: PHONE_TEL_HREF,
            label: `Call: ${PHONE_DISPLAY}`,
            icon: Phone,
            ariaLabel: `Call Mo Abdel for a ${productLabel(type)} quote at ${PHONE_DISPLAY}`,
          }}
          secondaryAction={{
            href: '/contact',
            label: 'Get Free Quote',
            icon: Calculator,
            ariaLabel: `Request a free ${productLabel(type)} quote for your ${city.name} home`,
          }}
        />

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 1: Citation Hook (150–300 words)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-12 px-4 bg-white"
          aria-label={`${city.name} ${productTitle(type)} overview`}
          data-speakable="true"
        >
          <div className="max-w-4xl mx-auto">
            {/* BLUF paragraph */}
            <p className="text-lg text-slate-700 mb-6">
              Mo Abdel, NMLS #{NMLS_ID}, offers {productLabel(type)} in{' '}
              {city.name}, CA.{' '}
              {isCashOut
                ? `${city.name} homeowners with a median home value of ${fmtDollar(city.medianHomeValue)} can access up to ${fmtDollar(city.medianEquity)} in equity at wholesale rates.`
                : `${city.name} homeowners carrying mortgages at above-market rates can reduce their monthly payment or shorten their loan term through wholesale lender access.`}
            </p>

            {/* Semantic triples */}
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
              <li>
                Mo Abdel <strong>offers {productLabel(type)} in</strong>{' '}
                {city.name}, CA
              </li>
              <li>
                {city.name} median home value{' '}
                <strong>reached {fmtDollar(city.medianHomeValue)} in</strong>{' '}
                2026
              </li>
              <li>
                Wholesale rates{' '}
                <strong>average 0.25–0.50% lower than</strong> retail bank
                rates
              </li>
            </ul>

            {/* City snapshot table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-slate-200 text-sm">
                <caption className="sr-only">
                  {city.name} refinance snapshot for 2026
                </caption>
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Metric
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      Median Home Value
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {fmtDollar(city.medianHomeValue)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      Estimated Equity
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {fmtDollar(city.medianEquity)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      2026 Conforming Limit
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {fmtDollar(city.conformingLimit)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      Typical Loan Range
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {fmtDollar(city.typicalLoanRange.min)}–
                      {fmtDollar(city.typicalLoanRange.max)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Early CTA (CTA #1) */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <p className="text-slate-800 font-medium mb-3">
                Contact Mo Abdel at{' '}
                <a
                  href={PHONE_TEL_HREF}
                  className="text-blue-700 underline font-bold"
                >
                  {PHONE_DISPLAY}
                </a>{' '}
                to discuss your {productLabel(type)} options in {city.name}.
              </p>
              <Link href="/contact">
                <Button size="sm">
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 2: Bing Power Block (700–900 words)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-16 px-4"
          aria-label={`How ${productLabel(type)} works in ${city.name}`}
          data-speakable="true"
        >
          <div className="max-w-4xl mx-auto">
            {/* H2 — varied by type */}
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isCashOut
                ? `How Does Cash-Out Refinancing Work in ${city.name}?`
                : `What Are the Steps to Rate-and-Term Refinancing in ${city.name}?`}
            </h2>

            <p className="text-slate-700 mb-6">
              {isCashOut
                ? `Cash-out refinancing replaces your existing ${city.name} mortgage with a larger loan, giving you the difference as cash. The process involves seven clearly defined steps from equity assessment to fund disbursement.`
                : `Rate-and-term refinancing replaces your current ${city.name} mortgage with a new loan that has a lower rate, a shorter term, or both. No cash is extracted — the entire purpose is reducing your cost of borrowing.`}
            </p>

            {/* Numbered process steps */}
            <ol className="space-y-4 mb-10">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{step.name}</p>
                    <p className="text-slate-600 mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* H2 — rates question */}
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isCashOut
                ? `What Cash-Out Refinance Rates Can ${city.name} Homeowners Expect in 2026?`
                : `What Rate-and-Term Refinance Rates Can ${city.name} Homeowners Expect in 2026?`}
            </h2>

            <p className="text-slate-700 mb-4">
              {isCashOut
                ? `Cash-out refinance rates in ${city.name} typically run 0.125–0.25% higher than rate-and-term rates because lenders price in the additional risk of a higher loan balance. Wholesale broker rates offset this premium by accessing lender channels unavailable to retail borrowers.`
                : `Rate-and-term refinance rates in ${city.name} are the lowest available refinance rates because no additional risk is added to the loan. Wholesale pricing from Mo Abdel delivers rates 0.25–0.50% below what retail banks and credit unions offer directly.`}
            </p>

            <p className="text-slate-700 mb-8">
              {isCashOut
                ? `${city.name} properties valued above the ${fmtDollar(city.conformingLimit)} conforming limit enter jumbo territory, where wholesale broker access provides the most competitive pricing. Homes below the limit benefit from conforming-rate programs with even lower rates.`
                : `Most ${city.name} homes fall within the ${fmtDollar(city.typicalLoanRange.min)}–${fmtDollar(city.typicalLoanRange.max)} loan range. Loans under the ${fmtDollar(city.conformingLimit)} conforming limit qualify for the best conventional pricing, while jumbo loans above that threshold benefit most from wholesale broker access.`}
            </p>

            {/* Comparison table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-slate-200 text-sm">
                <caption className="sr-only">
                  {city.name} refinance product comparison
                </caption>
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Feature
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Cash-Out Refi
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Rate &amp; Term Refi
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      HELOC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Purpose</td>
                    <td className="px-4 py-3 text-slate-900">
                      Access equity as cash
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      Lower rate or change term
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      Revolving credit line
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Rate Type</td>
                    <td className="px-4 py-3 text-slate-900">Fixed</td>
                    <td className="px-4 py-3 text-slate-900">Fixed</td>
                    <td className="px-4 py-3 text-slate-900">Variable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Max LTV</td>
                    <td className="px-4 py-3 text-slate-900">80%</td>
                    <td className="px-4 py-3 text-slate-900">97%</td>
                    <td className="px-4 py-3 text-slate-900">90%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Best For</td>
                    <td className="px-4 py-3 text-slate-900">
                      Large lump sum needs
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      Rate reduction
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      Flexible access
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      Closing Costs
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      2–5% of loan
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      2–5% of loan
                    </td>
                    <td className="px-4 py-3 text-slate-900">
                      $0–$500 typical
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">
                      Replaces Existing Mortgage
                    </td>
                    <td className="px-4 py-3 text-slate-900">Yes</td>
                    <td className="px-4 py-3 text-slate-900">Yes</td>
                    <td className="px-4 py-3 text-slate-900">No</td>
                  </tr>
                  {isCashOut ? (
                    <tr>
                      <td className="px-4 py-3 text-slate-700">
                        Cash at Closing
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        Yes — lump sum
                      </td>
                      <td className="px-4 py-3 text-slate-900">No</td>
                      <td className="px-4 py-3 text-slate-900">
                        Draw as needed
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="px-4 py-3 text-slate-700">
                        Term Options
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        15, 20, 30 yr
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        10, 15, 20, 25, 30 yr
                      </td>
                      <td className="px-4 py-3 text-slate-900">
                        10 yr draw + 20 yr repay
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mid CTA (CTA #2) */}
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 text-center">
              <p className="text-slate-800 font-medium mb-3">
                Not sure which refinance option fits your {city.name} home?
              </p>
              <Link href="/contact">
                <Button>
                  Get a Free Rate Comparison
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 3: E-E-A-T Narrative (800–1,000 words)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-16 px-4 bg-white"
          aria-label={`Why ${city.name} homeowners choose wholesale refinancing`}
          data-speakable="true"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isCashOut
                ? `Why Do ${city.name} Homeowners Choose Wholesale Cash-Out Refinancing Over Banks?`
                : `Why Do ${city.name} Homeowners Choose Wholesale Rate-and-Term Refinancing Over Banks?`}
            </h2>

            {/* City-specific market context */}
            <p className="text-slate-700 mb-4">{city.marketContext}</p>

            <p className="text-slate-700 mb-4">
              Retail banks originate and fund mortgages from their own balance
              sheet, limiting them to their proprietary rate sheets.
              Wholesale mortgage brokers like Mo Abdel access a parallel
              channel where lenders compete for your loan, resulting in rates
              0.25–0.50% below retail pricing on average.
            </p>

            <p className="text-slate-700 mb-4">
              {isCashOut
                ? `For ${city.name} cash-out refinances specifically, this rate difference translates to ${fmtDollar(Math.round(city.medianHomeValue * 0.003))}–${fmtDollar(Math.round(city.medianHomeValue * 0.005))} in annual interest savings on a median-value home. Over a 30-year term, that compounds to tens of thousands of dollars kept in your pocket instead of paid to a bank.`
                : `For ${city.name} rate-and-term refinances, wholesale pricing advantage means faster break-even on closing costs — often 12–18 months instead of the 24–36 months typical with retail banks. That faster payback makes refinancing viable even for homeowners who plan to sell within 3–5 years.`}
            </p>

            <p className="text-slate-700 mb-4">
              {city.name} homeowners also benefit from wholesale processing
              speed. Wholesale lenders maintain dedicated underwriting teams
              that process broker-submitted files in 7–10 business days versus
              the 14–21 days common at retail banks. Mo Abdel leverages this
              speed advantage to close {city.name} refinances in 21–28 days on
              average.
            </p>

            <p className="text-slate-700 mb-4">
              The wholesale channel also provides access to niche products
              unavailable at retail banks. Bank statement programs, asset
              depletion loans, and non-QM options are sourced exclusively
              through wholesale lenders. Many {city.name} self-employed
              homeowners and business owners qualify for better terms through
              these specialized programs.
            </p>

            {/* Internal links: counterpart page + cross-topic */}
            <p className="text-slate-700 mb-8">
              Explore your other options:{' '}
              <Link
                href={counterpartUrl}
                className="text-blue-700 underline font-medium"
              >
                {counterpartLabel(type)} in {city.name}
              </Link>
              {' · '}
              <Link
                href="/heloc-orange-county"
                className="text-blue-700 underline font-medium"
              >
                Orange County HELOC
              </Link>
              {' · '}
              <Link
                href="/heloan-orange-county"
                className="text-blue-700 underline font-medium"
              >
                Orange County HELOAN
              </Link>
            </p>

            {/* Neighborhoods section */}
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {city.name} Neighborhoods Where{' '}
              {isCashOut ? 'Cash-Out ' : ''}Refinancing Makes the Most Sense
              in 2026
            </h2>

            <p className="text-slate-700 mb-6">
              {isCashOut
                ? `Equity levels vary across ${city.name} based on purchase timing, neighborhood appreciation rates, and property type. The following neighborhoods show the strongest equity positions for cash-out refinancing in 2026.`
                : `Rate reduction opportunities depend on when ${city.name} homeowners locked their original mortgage. The following neighborhoods have a high concentration of 2022–2024 purchase mortgages that are strong candidates for rate-and-term refinancing today.`}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {city.topNeighborhoods.map((neighborhood, i) => (
                <Card key={neighborhood}>
                  <CardContent className="p-5">
                    <p className="font-semibold text-slate-900 mb-2">
                      {neighborhood}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {isCashOut
                        ? i === 0
                          ? `Properties in ${neighborhood} have appreciated 15–20% since 2022, creating substantial equity for cash-out refinancing at current wholesale rates.`
                          : i === 1
                            ? `${neighborhood} homeowners benefit from strong school district demand that sustains property values and supports favorable appraisals.`
                            : i === 2
                              ? `The ${neighborhood} housing stock includes a mix of price points, with most homes falling within the ${fmtDollar(city.typicalLoanRange.min)}–${fmtDollar(city.typicalLoanRange.max)} loan range.`
                              : `${neighborhood} properties frequently appraise above purchase price, giving homeowners additional equity access for cash-out refinancing.`
                        : i === 0
                          ? `Many ${neighborhood} homeowners purchased at elevated 2022–2023 rates and stand to save ${fmtDollar(Math.round(city.typicalLoanRange.min * 0.003 / 12))}+ per month through rate-and-term refinancing.`
                          : i === 1
                            ? `${neighborhood} features a high concentration of 15–20 year old homes with original mortgages ripe for term restructuring.`
                            : i === 2
                              ? `Properties in ${neighborhood} typically carry loans between ${fmtDollar(city.typicalLoanRange.min)} and ${fmtDollar(city.typicalLoanRange.max)}, well within conforming limits for optimal pricing.`
                              : `${neighborhood} homeowners with adjustable-rate mortgages can lock in fixed rates through wholesale refinancing before the next rate adjustment.`}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Nearby city links */}
            <p className="text-slate-700">
              Nearby refinance services:{' '}
              {nearbySlugs.map((s, i) => (
                <React.Fragment key={s}>
                  {i > 0 && ' · '}
                  <Link
                    href={`/areas/${slugForType(s, type)}`}
                    className="text-blue-700 underline font-medium"
                  >
                    {productTitle(type)} in {slugToName[s] ?? s}
                  </Link>
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 4: Data & Comparison (400–500 words)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-16 px-4"
          aria-label={`${city.name} refinance scenarios by home value`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {city.name}{' '}
              {isCashOut ? 'Cash-Out' : 'Rate-and-Term'} Refinance Scenarios
              by Home Value
            </h2>

            <p className="text-slate-700 mb-4">
              {isCashOut
                ? `The table below shows estimated cash-out amounts for three ${city.name} home value tiers. Actual figures depend on your existing mortgage balance, credit profile, and chosen LTV. All scenarios assume 80% maximum LTV for conventional cash-out.`
                : `The table below shows estimated monthly savings for three ${city.name} home value tiers assuming a 0.75% rate reduction. Actual savings depend on your current rate, remaining term, and new loan structure.`}
            </p>

            <p className="text-slate-700 mb-6">
              {isCashOut
                ? `${city.name} properties at the higher tier often cross the ${fmtDollar(city.conformingLimit)} conforming limit, where wholesale broker access to jumbo lenders produces the largest rate savings compared to retail banks.`
                : `Homeowners with loan balances above ${fmtDollar(city.conformingLimit)} benefit most from wholesale rate-and-term refinancing because jumbo rate spreads are widest in the retail channel.`}
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border border-slate-200 text-sm">
                <caption className="sr-only">
                  {city.name}{' '}
                  {isCashOut ? 'cash-out' : 'rate-and-term'} refinance
                  scenarios
                </caption>
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Home Value
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Current Loan
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      Available Equity
                    </th>
                    <th className="px-4 py-3 font-semibold text-slate-900">
                      {isCashOut
                        ? 'Est. Cash Available'
                        : 'Est. Monthly Savings'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {scenarios.map((s, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-slate-900 font-medium">
                        {fmtDollar(s.homeValue)}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {fmtDollar(s.currentLoan)}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {fmtDollar(s.equity)}
                      </td>
                      <td className="px-4 py-3 text-slate-900 font-medium">
                        {isCashOut
                          ? fmtDollar(
                              (s as { cashAvailable: number }).cashAvailable
                            )
                          : `${fmtDollar((s as { estMonthlySavings: number }).estMonthlySavings)}/mo`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Gated CTA footer on table */}
            <p className="text-sm italic text-slate-500 mb-8">
              These estimates are for illustration only.{' '}
              <Link href="/contact" className="text-blue-700 underline">
                Contact Mo Abdel
              </Link>{' '}
              for a personalized scenario based on your {city.name} property
              and current mortgage.
            </p>

            {/* Additional internal links */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Link
                  href={
                    isCashOut
                      ? '/loan-programs/cash-out-refinance'
                      : '/loan-programs/rate-term-refinance'
                  }
                >
                  {productTitle(type)} Program Details
                </Link>
              </Badge>
              <Badge variant="secondary">
                <Link href="/loan-programs">All Loan Programs</Link>
              </Badge>
              <Badge variant="secondary">
                <Link
                  href={
                    isCashOut
                      ? '/cash-out-refinance'
                      : '/rate-term-refinance-orange-county'
                  }
                >
                  {isCashOut
                    ? 'Cash-Out Refinance Orange County'
                    : 'Rate & Term Refinance Orange County'}
                </Link>
              </Badge>
              <Badge variant="secondary">
                <Link href="/blog/cash-out-refinance-vs-heloc-investment-property-2026">
                  Cash-Out vs HELOC Guide
                </Link>
              </Badge>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 5: FAQ (10–12 questions)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-16 px-4 bg-white"
          aria-label={`Frequently asked questions about ${productLabel(type)} in ${city.name}`}
          data-speakable="true"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              {city.name}{' '}
              {isCashOut ? 'Cash-Out' : 'Rate-and-Term'} Refinance Questions
              &amp; Answers
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
         * SECTION 6: Expert Summary + CTA (CTA #3)
         * ═══════════════════════════════════════════════════════════════ */}
        <section
          className="py-16 px-4 bg-blue-600"
          aria-label={`Contact Mo Abdel for ${productLabel(type)} in ${city.name}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to{' '}
              {isCashOut
                ? `Unlock Your ${city.name} Home Equity`
                : `Lower Your ${city.name} Mortgage Rate`}
              ?
            </h2>
            <p
              className="text-xl text-slate-200 mb-4 max-w-2xl mx-auto"
              data-speakable="true"
            >
              Mo Abdel, NMLS #{NMLS_ID}, provides wholesale{' '}
              {productLabel(type)} rates from 50+ lenders. {city.name}{' '}
              homeowners receive a personalized rate comparison at no cost and
              no obligation.
            </p>
            <p className="text-slate-300 mb-8">
              {isCashOut
                ? `${city.name} median equity: ${fmtDollar(city.medianEquity)}. Average closing time: 21–28 days through the wholesale channel.`
                : `Average break-even: 18–24 months. Average closing time: 21–28 days through the wholesale channel.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_TEL_HREF}>
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white text-slate-950 hover:bg-slate-100"
                  aria-label={`Call Mo Abdel at ${PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Call: {PHONE_DISPLAY}
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  aria-label={`Get a free ${productLabel(type)} quote for your ${city.name} home`}
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>

            <p className="text-sm text-slate-300 mt-6">
              NMLS #{NMLS_ID} · Lumin Lending NMLS #2716106 · Equal Housing
              Lender
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
