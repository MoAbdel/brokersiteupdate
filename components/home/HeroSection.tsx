'use client';

import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-slate-900">Your Direct Line to </span>
              <span className="text-green-600">100+ Wholesale Lenders</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Mo Abdel | Mortgage Broker | West Capital Lending
            </p>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We access 100+ wholesale lenders to secure your optimal financing strategy, beating retail bank pricing without the bureaucracy.
            </p>

            {/* Trust Indicators Bar */}
            <div className="inline-block bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl md:rounded-full px-6 md:px-8 py-4 md:py-3 border border-slate-200 shadow-sm w-[90%] md:w-auto">
              <div className="flex flex-col md:flex-row items-center justify-center text-xs md:text-sm text-slate-700 md:divide-x divide-slate-200">
                <span className="font-semibold text-slate-900 py-2 md:py-0 md:px-4">NMLS #1426884</span>
                <div className="h-[1px] w-12 bg-slate-200 md:hidden my-1" />
                <span className="font-semibold text-slate-900 py-2 md:py-0 md:px-4">Company NMLS #1566096</span>
                <div className="h-[1px] w-12 bg-slate-200 md:hidden my-1" />
                <span className="font-semibold text-slate-900 py-2 md:py-0 md:px-4">CA DRE #02022356</span>
              </div>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto h-auto">
                <Calculator className="w-5 h-5 mr-2" />
                Get My Loan Options
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a href="tel:+19498229662">
              <Button size="lg" variant="ghost" className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto h-auto">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Strategy Session
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
