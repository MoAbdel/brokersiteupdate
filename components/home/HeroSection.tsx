import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import ProcessTimeline from "./ProcessTimeline";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-white">
      {/* Background: Subtle Grid Pattern Only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-4 py-1.5 shadow-sm mb-8 hover:bg-white transition-colors cursor-default">
          <div className="flex -space-x-2">
             {[1,2,3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                   <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-blue-400 to-blue-600' : i === 2 ? 'from-green-400 to-green-600' : 'from-indigo-400 to-indigo-600'}`} />
                </div>
             ))}
          </div>
          <span className="text-xs font-medium text-slate-600">Accessing 100+ Wholesale Lenders</span>
        </div>

        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Your Direct Line to <br className="hidden md:block" />
              <span className="text-green-600">
                100+ Wholesale Lenders
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-slate-700 font-medium mb-4">
                Mo Abdel | Mortgage Broker | Lumin Lending
                </p>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Skip the bank. We access 100+ wholesale lenders to find you lower rates, faster approvals, and zero bureaucratic headaches.
                </p>
            </div>

            {/* Premium Trust Indicators */}
            <div className="pt-2">
                <div className="inline-flex flex-wrap justify-center gap-3 md:gap-8 text-sm font-medium text-slate-600 bg-slate-50/50 rounded-full px-6 py-3 border border-slate-200/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>NMLS #1426884</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-slate-300" />
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Company NMLS #2716106</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-slate-300" />
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>DRE #02291443</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 bg-white/10 backdrop-blur-md border border-green-600/30 text-green-700 hover:bg-green-50/50 hover:border-green-600 hover:shadow-lg hover:shadow-green-500/10 px-8 text-base font-semibold rounded-full transition-all duration-300 group">
                <Calculator className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform text-green-600" />
                Get My Loan Options
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-green-600" />
              </Button>
            </Link>

            <a href="tel:+19495372357" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 bg-white/10 backdrop-blur-md border border-slate-200 text-slate-600 hover:bg-slate-50/50 hover:border-slate-400 hover:text-slate-900 px-8 text-base font-medium rounded-full transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Strategy Session
              </Button>
            </a>
          </div>
          
          <p className="text-xs text-slate-400 font-medium">
            No credit check required for initial quote • Fast response times
          </p>
        </div>
      </div>

      {/* Process Timeline Animation */}
      <ProcessTimeline />
    </section>
  );
}
