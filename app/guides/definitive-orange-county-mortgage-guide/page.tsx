import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, DollarSign, MapPin, GraduationCap, Calculator, Phone, Mail, Building, Users, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { buildBrokerEntityGraph, buildServiceWebPageSchema } from '@/lib/schema-entities';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const PAGE_URL = 'https://www.mothebroker.com/guides/definitive-orange-county-mortgage-guide';

export const metadata: Metadata = {
  title: 'Definitive Orange County Mortgage Guide 2026 | Complete Resource',
  description: 'Complete guide to Orange County mortgages by licensed broker Mo Abdel (NMLS #1426884). FHA, VA, conventional, jumbo loans, market data, and expert guidance.',
  openGraph: {
    title: 'Definitive Orange County Mortgage Guide 2026',
    description: 'Complete guide to Orange County mortgages by licensed broker Mo Abdel. FHA, VA, conventional, jumbo loans, market data, and expert guidance.',
    url: PAGE_URL,
    type: 'article',
    siteName: 'Mo Abdel | Mortgage Broker',
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
};

const entityGraph = buildBrokerEntityGraph({
  pageUrl: PAGE_URL,
  serviceType: 'Mortgage Brokerage Services',
  serviceName: 'Complete Orange County Mortgage Guide',
  serviceDescription: 'Comprehensive mortgage guide covering all loan programs available in Orange County including conventional, FHA, VA, and jumbo loans with city-specific market data.',
  areaServedNames: ['Irvine', 'Newport Beach', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Mission Viejo'],
});

const webPageSchema = buildServiceWebPageSchema({
  pageUrl: PAGE_URL,
  title: 'Definitive Orange County Mortgage Guide 2026',
  description: 'Complete guide to Orange County mortgages with loan programs, qualification requirements, city guides, and market insights.',
  breadcrumbName: 'Definitive Mortgage Guide',
  dateModified: '2026-02-16',
});

export default function DefinitiveOrangeCountyMortgageGuide() {
  const loanPrograms = [
    {
      name: "Conventional Loans",
      description: "Traditional mortgages with Competitive pricing",
      downPayment: "3-20%",
      creditScore: "620+",
      maxAmount: "$1,266,300 (conforming)",
      benefits: ["Lower pricing for good credit", "No mortgage insurance with 20% down", "Flexible terms"],
      icon: Home
    },
    {
      name: "FHA Loans",
      description: "Government-backed loans for first-time buyers",
      downPayment: "3.5%",
      creditScore: "580+",
      maxAmount: "$1,266,300",
      benefits: ["Low down payment", "Flexible credit requirements", "Assumable loans"],
      icon: Users
    },
    {
      name: "VA Loans",
      description: "Zero down loans for eligible veterans",
      downPayment: "0%",
      creditScore: "No minimum",
      maxAmount: "No limit",
      benefits: ["No down payment", "No PMI required", "Competitive pricing"],
      icon: Shield
    },
    {
      name: "Jumbo Loans",
      description: "High-value loans above conforming limits",
      downPayment: "10-20%",
      creditScore: "700+",
      maxAmount: "$10M+",
      benefits: ["Luxury property financing", "Competitive jumbo rates", "Flexible terms"],
      icon: Building
    }
  ];

  const orangeCountyCities = [
    {
      city: "Irvine",
      medianPrice: "$1.4M",
      marketType: "Family-oriented with top schools",
      loanConsiderations: "Often jumbo loans, new construction common"
    },
    {
      city: "Newport Beach",
      medianPrice: "$2.8M",
      marketType: "Luxury waterfront community",
      loanConsiderations: "Primarily jumbo loans, luxury financing needed"
    },
    {
      city: "Anaheim",
      medianPrice: "$850K",
      marketType: "Diverse family communities",
      loanConsiderations: "Conventional and FHA loans common"
    },
    {
      city: "Costa Mesa",
      medianPrice: "$1.1M",
      marketType: "Central location, mixed housing",
      loanConsiderations: "Mix of conventional and jumbo loans"
    },
    {
      city: "Huntington Beach",
      medianPrice: "$1.6M",
      marketType: "Beach community lifestyle",
      loanConsiderations: "Often jumbo loans, beach proximity premium"
    },
    {
      city: "Mission Viejo",
      medianPrice: "$1.26M",
      marketType: "Master-planned family community",
      loanConsiderations: "Conventional loans, family-sized homes"
    }
  ];

  const qualificationFactors = [
    {
      factor: "Credit Score",
      description: "Primary factor in rate and program eligibility",
      ranges: [
        { score: "740+", rate: "Best pricing available", programs: "All programs" },
        { score: "680-739", rate: "Good rates", programs: "Most programs" },
        { score: "620-679", rate: "Standard rates", programs: "Conventional, FHA" },
        { score: "580-619", rate: "Higher rates", programs: "FHA, VA" }
      ]
    },
    {
      factor: "Debt-to-Income Ratio",
      description: "Monthly debt payments divided by gross income",
      guidelines: [
        "Conventional: 45-50% max DTI",
        "FHA: 57% max DTI with compensating factors",
        "VA: No strict DTI limit, case-by-case",
        "Jumbo: 43-50% max DTI typically"
      ]
    },
    {
      factor: "Employment History",
      description: "Stable employment demonstrates ability to repay",
      requirements: [
        "2 years employment history preferred",
        "Same field or increasing income acceptable",
        "Self-employed: 2 years tax returns required",
        "Job gaps require explanation"
      ]
    }
  ];

  const marketInsights = [
    {
      metric: "Conforming Loan Limit",
      value: "$1,266,300",
      description: "2026 Orange County conforming loan limit (high-cost area)"
    },
    {
      metric: "Average Home Price",
      value: "$1.26M+",
      description: "Varies significantly by city and neighborhood"
    },
    {
      metric: "Market Conditions",
      value: "Competitive",
      description: "Multiple offers common, especially in desirable areas"
    },
    {
      metric: "Inventory Levels",
      value: "Low to Moderate",
      description: "Seasonal variations, typically lower in winter months"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Definitive Orange County Mortgage Guide 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Complete resource for Orange County home buyers and homeowners. Licensed broker guidance
              for FHA, VA, conventional, and jumbo loans in all OC cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 822-9662
              </Button>
              <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Payment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Orange County Mortgage Quick Reference</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential information for Orange County home financing decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{insight.value}</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">{insight.metric}</div>
                  <p className="text-sm text-slate-600">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Programs Guide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Loan Program Guide</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Detailed breakdown of every loan program available in Orange County
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loanPrograms.map((program, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <p className="text-slate-600">{program.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-semibold text-slate-900">Down Payment</span>
                      <p className="text-blue-600 font-bold">{program.downPayment}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-900">Credit Score</span>
                      <p className="text-green-600 font-bold">{program.creditScore}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-900">Max Amount</span>
                      <p className="text-purple-600 font-bold">{program.maxAmount}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 mb-2 block">Key Benefits</span>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Orange County Cities Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Orange County Cities Mortgage Guide</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              City-specific mortgage considerations and market insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orangeCountyCities.map((cityData, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">{cityData.city}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Median Home Price</span>
                    <p className="text-2xl font-bold text-green-600">{cityData.medianPrice}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Market Type</span>
                    <p className="text-slate-600">{cityData.marketType}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Loan Considerations</span>
                    <p className="text-slate-600">{cityData.loanConsiderations}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mortgage Qualification Guide</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the key factors that determine loan approval and rates
            </p>
          </div>

          <div className="space-y-8">
            {qualificationFactors.map((factor, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{factor.factor}</CardTitle>
                  <p className="text-slate-600">{factor.description}</p>
                </CardHeader>
                <CardContent>
                  {factor.ranges && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {factor.ranges.map((range, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                          <div className="text-lg font-bold text-blue-600 mb-1">{range.score}</div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">{range.rate}</div>
                          <div className="text-xs text-slate-600">{range.programs}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {factor.guidelines && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {factor.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  )}
                  {factor.requirements && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {factor.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Orange County Mortgage Process Timeline</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step-by-step guide to the mortgage process in Orange County's competitive market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Pre-Approval",
                timeline: "1-3 days",
                description: "Get pre-approved to strengthen your offer in OC's competitive market"
              },
              {
                step: "2",
                title: "House Hunting",
                timeline: "Varies",
                description: "Search with pre-approval letter, act quickly on desired properties"
              },
              {
                step: "3",
                title: "Application",
                timeline: "1-2 days",
                description: "Submit full application within 24-48 hours of accepted offer"
              },
              {
                step: "4",
                title: "Processing & Closing",
                timeline: "18-25 days",
                description: "Underwriting, appraisal, final approval, and closing coordination"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <Badge className="bg-blue-100 text-blue-600 mb-3">{phase.timeline}</Badge>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Expert Orange County Mortgage Guidance</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Licensed mortgage broker Mo Abdel (NMLS #1426884) provides comprehensive guidance for all Orange County mortgage needs.
            Access to 200+ wholesale lenders ensures Competitive pricing and program options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <span className="font-semibold">Direct Phone</span>
              <span className="text-blue-100">(949) 822-9662</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <span className="font-semibold">Email</span>
              <span className="text-blue-100">mo@luminlending.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <span className="font-semibold">Service Area</span>
              <span className="text-blue-100">Orange County, CA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Mortgage Payment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-slate-600 space-y-2">
            <p>
              <strong>Licensed Mortgage Broker:</strong> Mo Abdel, NMLS #1426884. Equal Housing Opportunity.
            </p>
            <p>
              All mortgage information is for educational purposes. Actual pricing and terms subject to credit approval and program availability.
              Market data and home prices are estimates and subject to change.
            </p>
            <p>
              This guide is updated regularly but mortgage programs and market conditions change frequently.
              Contact for Current pricing, terms, and program availability.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}