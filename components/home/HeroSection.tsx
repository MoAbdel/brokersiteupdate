'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight, CheckCircle2, Star, PiggyBank } from "lucide-react";
import Link from "next/link";
import LoanCapSubheadline from '@/components/LoanCapSubheadline';
import ProcessTimeline from "./ProcessTimeline";

export default function HeroSection() {
  // Calculator State
  const [purchasePrice, setPurchasePrice] = useState<number>(800000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(10);

  // Calculations
  const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
  const loanAmount = purchasePrice - downPaymentAmount;
  const wholesaleRate = 6.625;
  const bigBankRate = 6.875;

  const calculateMonthlyPayment = (principal: number, annualRate: number) => {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = 360; // 30-year fixed
    if (monthlyRate === 0) return principal / numberOfPayments;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const wholesalePayment = calculateMonthlyPayment(loanAmount, wholesaleRate);
  const bigBankPayment = calculateMonthlyPayment(loanAmount, bigBankRate);
  const monthlySavings = bigBankPayment - wholesalePayment;
  const lifetimeSavings = monthlySavings * 360;

  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white" aria-label="Mortgage broker hero with value proposition and call to action">
      {/* Background: Subtle Grid Pattern Only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand, Trust, and Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8">
            
            {/* Google Reviews Trust Bar */}
            <div className="flex justify-center lg:justify-start">
              <a href="#reviews" className="group inline-flex items-center gap-3 bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/50 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 shadow-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">KR</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-sky-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">SK</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AW</div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">JL</div>
                </div>
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    Rated 5.0/5.0 on Google & Zillow
                  </span>
                </div>
              </a>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                Your Direct Line to <br className="hidden md:block" />
                <span className="relative inline-block bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 bg-clip-text text-transparent [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.5))_drop-shadow(0_2px_4px_rgba(0,0,0,0.1))] pb-1">
                  50+ Wholesale Lenders
                </span>
              </h1>
              <LoanCapSubheadline
                productLabel="Jumbo Loans"
                product="jumbo"
                regions={['California', 'Washington']}
              />
            </div>

            {/* Subtext */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm md:text-base text-slate-600 font-semibold tracking-wide">
                <span>Mo Abdel</span>
                <span aria-hidden="true" className="mx-2 text-slate-400">•</span>
                <span>Senior Mortgage Broker</span>
                <span aria-hidden="true" className="mx-2 text-slate-400">•</span>
                <span>Lumin Lending</span>
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed" data-speakable="true">
                Skip the retail markup. We access wholesale mortgage channels to find you lower rates, faster approvals, and zero bureaucratic headaches.
              </p>
            </div>

            {/* NMLS / DRE Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-500">
              <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/50">NMLS #1426884</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/50">Company NMLS #2716106</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/50">DRE #02291443</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="ghost"
                  aria-label="Get my loan options - start your mortgage application"
                  className="w-full sm:w-auto h-12 bg-blue-600 border border-blue-700 text-white hover:!bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 px-8 text-base font-semibold rounded-full transition-all duration-300 group shadow-md"
                >
                  <Calculator className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform text-white" />
                  Get My Loan Options
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-white" />
                </Button>
              </Link>

              <a href="tel:+19495792057" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  aria-label="Schedule a mortgage strategy session - call (949) 579-2057"
                  className="w-full sm:w-auto h-12 px-8 text-base font-medium rounded-full hover:bg-slate-50 border-slate-300 text-slate-700"
                >
                  <Phone className="w-4 h-4 mr-2 text-slate-600" />
                  Call / Text (949) 579-2057
                </Button>
              </a>
            </div>

            <p className="text-xs text-slate-400 font-medium">
              No credit check required for initial quote • Fast response times
            </p>
          </div>

          {/* Right Column: Interactive Calculator Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600" />
              
              <div className="flex items-center gap-2 mb-6">
                <PiggyBank className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-slate-900">Wholesale Savings Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Home Purchase Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                    <span>Purchase Price</span>
                    <span className="text-blue-600 text-base font-bold">${purchasePrice.toLocaleString('en-US')}</span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="3000000"
                    step="25000"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                    <span>$200k</span>
                    <span>$1.5M</span>
                    <span>$3.0M</span>
                  </div>
                </div>

                {/* Down Payment Percent Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                    <span>Down Payment</span>
                    <span className="text-blue-600 text-base font-bold">
                      {downPaymentPercent}% (${downPaymentAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                    <span>3%</span>
                    <span>10%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Loan Amount Summary */}
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex justify-between items-center text-xs text-slate-600">
                  <span className="font-semibold">Estimated Loan Amount:</span>
                  <span className="font-bold text-slate-900">${loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>

                {/* Savings Calculations & Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-center">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">Retail Bank</p>
                    <p className="text-lg font-extrabold text-slate-600">${Math.round(bigBankPayment).toLocaleString()}/mo</p>
                    <p className="text-[10px] font-semibold text-slate-400 mt-1">{bigBankRate.toFixed(3)}% Rate</p>
                  </div>
                  
                  <div className="bg-blue-50/50 border border-blue-200/50 rounded-xl p-4 text-center relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Broker</div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-blue-700 mb-1 mt-0.5">Wholesale</p>
                    <p className="text-lg font-extrabold text-blue-600">${Math.round(wholesalePayment).toLocaleString()}/mo</p>
                    <p className="text-[10px] font-semibold text-blue-500 mt-1">{wholesaleRate.toFixed(3)}% Rate</p>
                  </div>
                </div>

                {/* Savings Output Badge */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-4 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">Estimated Savings</span>
                  <div className="text-xl font-extrabold text-emerald-700 mb-0.5">
                    Save ${Math.round(monthlySavings)}/month
                  </div>
                  <p className="text-[11px] font-semibold text-emerald-600">
                    Up to ${Math.round(lifetimeSavings).toLocaleString()} saved over 30 years
                  </p>
                </div>

                {/* See If I Qualify CTA */}
                <Link href="/contact" className="block">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 h-12 text-sm font-semibold rounded-lg shadow-md transition-colors">
                    See If I Qualify
                  </Button>
                </Link>
              </div>

              <p className="text-[9px] text-slate-400 italic text-center mt-4">
                *Broker savings estimate based on a standard 0.25% pricing difference. Payments show Principal & Interest. APR, rates, and approval vary by credit score, program, and lender conditions.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Process Timeline Animation */}
      <div className="mt-16">
        <ProcessTimeline />
      </div>
    </section>
  );
}
