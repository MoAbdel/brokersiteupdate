'use client';

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TrendingDown, Calculator, Phone, ArrowRight, Zap, GitCompareArrows, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [rates, setRates] = useState({
    thirtyYear: "6.125%",
    fifteenYear: "5.50%",
    fhaThirtyYear: "6.125%"
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api/rates', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          // Find specific loan types
          const thirty = result.data.find((r: any) => r.loan_type.includes('30-Year Fixed'));
          const fifteen = result.data.find((r: any) => r.loan_type.includes('15-Year Fixed'));
          const fha = result.data.find((r: any) => r.loan_type.includes('FHA'));
          
          setRates({
            thirtyYear: thirty ? `${thirty.rate}%` : "6.125%",
            fifteenYear: fifteen ? `${fifteen.rate}%` : "5.50%",
            fhaThirtyYear: fha ? `${fha.rate}%` : "6.125%"
          });
        }
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchRates();
    // Refresh rates every 30 seconds
    const interval = setInterval(fetchRates, 30000);
    return () => clearInterval(interval);
  }, []);
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
                  Get My Strategic Rate Analysis
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

          {/* Current Rates Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Current Rates</h3>
                  <Badge className="bg-blue-100 text-blue-600 px-3 py-1">Updated Weekly</Badge>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200">
                    <span className="font-medium text-slate-700">30-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">{rates.thirtyYear}</span>
                  </div>

                  <div className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200">
                    <span className="font-medium text-slate-700">15-Year Fixed</span>
                    <span className="text-2xl font-bold text-green-600">{rates.fifteenYear}</span>
                  </div>

                  <div className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200">
                    <span className="font-medium text-slate-700">FHA 30-Year</span>
                    <span className="text-2xl font-bold text-green-600">{rates.fhaThirtyYear}</span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 text-center">
                  *Rates vary based on credit score and loan program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}