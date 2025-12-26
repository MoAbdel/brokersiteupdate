'use client';

import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight, GitCompareArrows, TrendingDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-14 lg:py-22 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Your Direct Line to </span>
                <span className="text-green-600">100+ Wholesale Lenders</span>
              </h1>

              <p className="text-xl text-slate-700 leading-relaxed max-w-lg font-medium">
                Mo Abdel | Mortgage Broker | West Capital Lending
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Shopping California's entire mortgage marketplace to secure your optimal financing strategy. While retail banks offer their single menu, we access 100+ lenders' wholesale channels—including the banks themselves at better pricing.
              </p>

              {/* Trust Indicators Bar */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-4 border border-slate-200">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">NMLS #1426884</span>
                  <span className="text-slate-400">|</span>
                  <span className="font-semibold text-slate-900">Company NMLS #1566096</span>
                  <span className="text-slate-400">|</span>
                  <span className="font-semibold text-slate-900">CA DRE #02022356</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-green-600">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">24 Executive Park Suite 250, Irvine, CA 92614</span><br/>
                  Direct: (949) 537-2357 • mabdel@wclloans.com
                </p>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get My Loan Options Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <a href="tel:+19495372357">
                <Button size="lg" variant="ghost" className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Strategy Session
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <GitCompareArrows className="w-8 h-8 mr-2 text-green-600"/>
                  100+
                </div>
                <div className="text-sm text-slate-600">Wholesale Lenders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <TrendingDown className="w-8 h-8 mr-2 text-green-600"/>
                  $847M+
                </div>
                <div className="text-sm text-slate-600">Loans Closed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 flex items-center">
                  <ShieldCheck className="w-8 h-8 mr-2 text-green-600"/>
                  3,200+
                </div>
                <div className="text-sm text-slate-600">Families Served</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <Image
                src="/images/moabdel-headshot-final.png"
                alt="Mo Abdel - California Mortgage Broker"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
