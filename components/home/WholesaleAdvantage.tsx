import React from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TrendingDown, Layers, Zap, CheckCircle2 } from 'lucide-react';

export default function WholesaleAdvantage() {
  const points = [
    {
      icon: TrendingDown,
      title: "Wholesale Pricing",
      badgeText: "Save $100s/mo",
      description: "Traditional retail banks markup mortgage rates to pay for national advertising and physical branches. We bypass retail markups by connecting you directly to wholesale loan channels at institutional rates.",
      highlights: [
        "Compare 50+ lenders in one system",
        "Institutional rates without retail markup",
        "Save thousands over the loan lifetime",
        "Transparent, low-cost broker fees"
      ]
    },
    {
      icon: Layers,
      title: "Product Variety",
      badgeText: "200+ Programs",
      description: "No single bank has a loan program that fits every client's tax or income structure. We leverage wholesale partnerships to offer standard conforming mortgages alongside highly flexible custom products.",
      highlights: [
        "Conventional & Jumbo loans up to $2.5M",
        "FHA, VA & USDA low down payment options",
        "Non-QM: Bank statement & DSCR loans",
        "Strategic HELOCs & Home Equity lines"
      ]
    },
    {
      icon: Zap,
      title: "Direct Service & Speed",
      badgeText: "15-21 Day Close",
      description: "Skip corporate retail bank queues and generic toll-free call centers. You work directly with Senior Mortgage Broker Mo Abdel, receiving personalized guidance from pre-approval through funding.",
      highlights: [
        "Dedicated one-on-one direct strategy",
        "Efficient, modern paperless process",
        "Fast 15-21 day average closing timelines",
        "Active advocacy that fights for your rate"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100" aria-label="Why choose a mortgage broker vs retail banks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100/80 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Lumin Lending Advantage
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Wholesale Advantage: Broker vs. Banks
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed" data-speakable="true">
            Retail banks offer a single menu of proprietary rates and products. As a mortgage broker, we connect you to 50+ wholesale lenders competing for your loan—securing better pricing and faster approvals.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index} 
                className="border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col h-full overflow-hidden group"
              >
                <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Top row: Icon & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Badge variant="outline" className="text-[11px] font-semibold bg-blue-50/50 text-blue-700 border-blue-200/50 px-2.5 py-1">
                      {point.badgeText}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{point.description}</p>

                  {/* Highlights Bullet List */}
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <ul className="space-y-3">
                      {point.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
