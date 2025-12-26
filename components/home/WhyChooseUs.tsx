import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitCompareArrows, Zap, Shield, Star, Award, TrendingUp, ArrowRight } from "lucide-react";

const features = [
  {
    icon: GitCompareArrows,
    title: "Access to 100+ Wholesale Lenders",
    description: "Brokers provide access to significantly more loan options than retail banks. I connect you to multiple lenders who compete for your business, offering diverse programs and competitive wholesale pricing.",
    highlight: "More Options"
  },
  {
    icon: Zap,
    title: "Transparent & Streamlined Process",
    description: "No confusing jargon or hidden fees. I use modern technology for efficient processing with clear communication at every step of your mortgage journey.",
    highlight: "Transparent"
  },
  {
    icon: Shield,
    title: "Multiple Low-Cost Loan Structures",
    description: "I navigate the complex lending landscape to identify cost-effective solutions. Multiple loan structures available to help reduce your total borrowing costs.",
    highlight: "Cost-Effective"
  },
  {
    icon: Star,
    title: "Personalized Service",
    description: "You're not a number in a queue. I provide dedicated one-on-one service with each loan strategy tailored to your unique financial situation and goals.",
    highlight: "Personalized"
  },
  {
    icon: Award,
    title: "Streamlined Underwriting",
    description: "Efficient processes with typical 15-21 day closings. Access to multiple approval options through our network of wholesale lenders.",
    highlight: "Efficient"
  },
  {
    icon: TrendingUp,
    title: "Client-Focused Advocacy",
    description: "I work for you, not the banks. Your financial well-being guides my recommendations, ensuring you understand all available options.",
    highlight: "Client First"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 mb-4">West Capital Lending Advantage</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose a Mortgage Broker vs Banks?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlike retail banks with limited product offerings, I leverage wholesale lending channels
            and 100+ lender relationships to provide more options and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className={`card-hover shadow-base44 border-slate-200 group flex flex-col transform hover:scale-105 transition-all duration-300 fade-in-up ${index === 0 ? '' : index === 1 ? 'animate-delay-100' : index === 2 ? 'animate-delay-200' : 'animate-delay-300'}`}>
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 mb-4 flex-shrink-0 shadow-md group-hover:shadow-lg">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 my-2">
                  {feature.highlight}
                </Badge>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto pt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See My Options CTA */}
        <div className="text-center mt-12">
          <a href="/quiz">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
              See My Options
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>

        {/* Internal Linking to Service Pages */}
        {/* Internal Linking to Service Pages */}
        <div className="text-center mt-12 bg-white rounded-xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Popular Orange County Mortgage Programs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/fha-loans-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              FHA Loan Programs
            </Link>
            <Link href="/va-loans-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              VA Benefits & Rates
            </Link>
            <Link href="/heloc-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              HELOC Calculator
            </Link>
            <Link href="/conventional-loans-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              Conventional Options
            </Link>
            <Link href="/non-qm-loans-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              Self-Employed Loans
            </Link>
            <Link href="/heloan-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              Fixed-Rate HELOAN
            </Link>
            <Link href="/rate-term-refinance-orange-county" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              Refinance Calculator
            </Link>
            <Link href="/jumbo-loans" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100">
              Jumbo Loan Solutions
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}