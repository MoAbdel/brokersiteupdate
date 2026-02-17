import React from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import ProcessTimeline from "./ProcessTimeline";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-white" aria-label="Mortgage broker hero with value proposition and call to action">
      {/* Background: Subtle Grid Pattern Only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Your Direct Line to <br className="hidden md:block" />
              <span className="relative inline-block bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 bg-clip-text text-transparent [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.5))_drop-shadow(0_2px_4px_rgba(0,0,0,0.2))] pb-1">
                50+ Wholesale Lenders
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-slate-600 font-semibold tracking-wide mb-3">
                <span>Mo Abdel</span>
                <span aria-hidden="true" className="mx-2 text-slate-400">•</span>
                <span>Senior Mortgage Broker</span>
                <span aria-hidden="true" className="mx-2 text-slate-400">•</span>
                <span>Lumin Lending</span>
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto" data-speakable="true">
                Skip the bank. We access 50+ wholesale lenders to find you lower rates, faster approvals, and zero bureaucratic headaches.
              </p>
            </div>

            {/* Premium Trust Indicators */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap justify-center gap-3 md:gap-8 text-sm font-medium text-slate-600 bg-slate-50/50 rounded-full px-6 py-3 border border-slate-200/50 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                  <span>NMLS #1426884</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-slate-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                  <span>Company NMLS #2716106</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-slate-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-700" />
                  <span>DRE #02291443</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="ghost"
                aria-label="Get my loan options - start your mortgage application"
                className="w-full sm:w-auto h-12 bg-white/10 backdrop-blur-md border border-sky-500/30 text-blue-700 hover:!bg-blue-50/50 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 active:!bg-blue-100/50 px-8 text-base font-semibold rounded-full transition-all duration-300 group"
              >
                <Calculator className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform text-blue-600" />
                Get My Loan Options
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-blue-600" />
              </Button>
            </Link>

            <a href="tel:+19498229662" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                aria-label="Schedule a mortgage strategy session - call (949) 822-9662"
                className="w-full sm:w-auto h-12 px-8 text-base font-medium rounded-full"
              >
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
