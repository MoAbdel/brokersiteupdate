import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, Shield, Users, TrendingUp, Calculator, CheckCircle, DollarSign, Clock, Heart } from 'lucide-react';
import { buildBrokerEntityGraph, buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'California & Washington Purchase Loans | FHA, VA, Conventional, Jumbo',
  description: 'Get pre-approved for a home purchase in California or Washington with FHA, VA, conventional, or jumbo financing and expert broker guidance from Mo Abdel.',
  openGraph: {
    title: 'California & Washington Purchase Loans | FHA, VA, Conventional, Jumbo',
    description: 'Get pre-approved for a home purchase in California or Washington with FHA, VA, conventional, or jumbo financing and expert broker guidance from Mo Abdel.',
    url: 'https://www.mothebroker.com/purchase-loans',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/purchase-loans',
    languages: {
      'en-US': 'https://www.mothebroker.com/purchase-loans',
      'x-default': 'https://www.mothebroker.com/purchase-loans',
    },
  },
};

const structuredData = buildBrokerEntityGraph({
  pageUrl: 'https://www.mothebroker.com/purchase-loans',
  serviceType: 'Home Purchase Loan Services',
  serviceName: 'California and Washington Purchase Loans',
  serviceDescription: 'Expert home purchase loan services across California and Washington',
  areaServedNames: ['California', 'Washington'],
  addressLocality: 'California',
  addressRegion: 'US',
});

const pageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/purchase-loans',
  title: 'California & Washington Purchase Loans | FHA, VA, Conventional, Jumbo',
  description:
    'Get pre-approved for a home purchase in California or Washington with FHA, VA, conventional, or jumbo financing and expert broker guidance from Mo Abdel.',
  breadcrumbName: 'Purchase Loans',
});

const purchaseLoans = [
  {
    title: 'Conventional Loans',
    icon: Users,
    downPayment: '3% - 20%',
    bestFor: 'Strong credit, stable income',
    features: [
      'As low as 3% down payment',
      'No mortgage insurance with 20% down',
      'Flexible debt-to-income ratios',
      'Various term lengths (15, 20, 30 years)'
    ],
    link: '/conventional-loans-orange-county'
  },
  {
    title: 'FHA Loans',
    icon: Home,
    downPayment: '3.5%',
    bestFor: 'First-time buyers, lower credit scores',
    features: [
      'As low as 3.5% down payment',
      'Credit scores as low as 580',
      'Gift funds allowed for down payment',
      'Assumable mortgages'
    ],
    link: '/fha-loans-orange-county'
  },
  {
    title: 'VA Loans',
    icon: Shield,
    downPayment: '0%',
    bestFor: 'Military veterans and active duty',
    features: [
      'No down payment required',
      'No private mortgage insurance',
      'Competitive loan pricing',
      'No prepayment penalties'
    ],
    link: '/va-loans-orange-county'
  },
  {
    title: 'Jumbo Loans',
    icon: TrendingUp,
    downPayment: '10% - 20%',
    bestFor: 'Luxury homes in California and Washington',
    features: [
      'Loans above conforming limits ($1,266,300+)',
      'Competitive jumbo rates',
      'Flexible underwriting guidelines',
      'Various ARM and fixed-rate options'
    ],
    link: '/guides/orange-county-jumbo-loans'
  }
];

const faqs = [
  {
    question: "What's the minimum credit score needed to buy a home in California or Washington?",
    answer: "Credit score requirements vary by loan type. FHA loans allow scores as low as 580, conventional loans typically require 620+, while VA loans are more flexible. I can help you understand which programs you qualify for based on your current credit situation."
  },
  {
    question: "How much do I need for a down payment in California or Washington?",
    answer: "Down payment requirements range from 0% (VA loans) to 20% (conventional without PMI). FHA loans require just 3.5%, and conventional loans can go as low as 3%. Planning ahead is crucial in competitive California and Washington markets."
  },
  {
    question: "How long does it take to close on a home purchase in California or Washington?",
    answer: "Typical closing times range from 30-45 days, though this can vary based on loan type, property condition, and market conditions. I work closely with all parties to ensure smooth, on-time closings."
  },
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is an estimate based on basic financial information, while pre-approval involves a thorough review of your finances and credit. In competitive California and Washington markets, sellers prefer pre-approved buyers as they're more likely to close successfully."
  },
  {
    question: "Should I work with a mortgage broker or go directly to a bank?",
    answer: "As a mortgage broker, I have access to 200+ lenders and can shop multiple options to find you the best pricing and terms. Banks only offer their own products, limiting your options. This is especially valuable in California and Washington's competitive markets."
  }
];

export default function PurchaseLoansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Home Purchase Loans in <span className="text-blue-600">California &amp; Washington</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Buying a home in competitive markets requires expert guidance and access to the right loan programs.
              As your mortgage broker, I will help you navigate California and Washington purchase scenarios and secure favorable financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 822-9662">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Pre-Approved Today
                </Button>
              </a>
              <Link href="/calculator">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Calculate Payments
                </Button>
              </Link>
            </div>
          </div>

          {/* Types of Purchase Loans */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Types of Purchase Loans Available in California &amp; Washington
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              From first-time buyer programs to luxury home financing, we offer comprehensive loan options 
              tailored to California and Washington housing markets.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {purchaseLoans.map((loan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <loan.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{loan.title}</h3>
                      <p className="text-blue-600 font-semibold">Down Payment: {loan.downPayment}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-slate-700 font-medium mb-3">Best For: {loan.bestFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={loan.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Learn More About {loan.title}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose a Mortgage Broker vs Bank */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Why Choose a Mortgage Broker vs Banks?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Heart className="w-7 h-7 text-red-500 mr-3" />
                  Mortgage Broker Advantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-slate-700">Access to 200+ lenders and loan programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-slate-700">Shop multiple rates to find your best option</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-slate-700">California and Washington market expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-slate-700">Personalized service throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-slate-700">Wholesale rates often better than retail</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="w-7 h-7 text-slate-500 mr-3" />
                  Traditional Bank Limitations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-500 mr-3 mt-0.5">✗</span>
                    <span className="text-slate-600">Limited to their own loan products only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-500 mr-3 mt-0.5">✗</span>
                    <span className="text-slate-600">No rate shopping - one rate option</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-500 mr-3 mt-0.5">✗</span>
                    <span className="text-slate-600">Less flexible underwriting guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-500 mr-3 mt-0.5">✗</span>
                    <span className="text-slate-600">Often slower processing times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-500 mr-3 mt-0.5">✗</span>
                    <span className="text-slate-600">Limited local market knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Steps to Get Pre-Approved */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Steps to Get Pre-Approved for Your Home Purchase
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Initial Consultation</h3>
                <p className="text-slate-600">
                  We'll discuss your goals, budget, and timeline. I'll explain California and Washington market
                  and which loan programs best fit your situation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Document Gathering</h3>
                <p className="text-slate-600">
                  I'll provide a clear checklist of required documents and guide you through the process. 
                  Most clients can gather everything needed within 24-48 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pre-Approval Letter</h3>
                <p className="text-slate-600">
                  Receive your official pre-approval letter, typically within 24 hours. This gives you 
                  confidence and credibility when making offers in competitive markets.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="tel:(949) 822-9662">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Start Your Pre-Approval (24 Hour Turnaround)
                </Button>
              </a>
            </div>
          </section>

          {/* Market Insights */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              California and Washington Housing Market Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">$1.26M</h3>
                <p className="text-slate-700">Median Home Price</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">15 Days</h3>
                <p className="text-slate-700">Average Days on Market</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Multiple</h3>
                <p className="text-slate-700">Offers Per Home</p>
              </div>
            </div>
            <p className="text-center text-slate-600 mt-6">
              <em>Data as of 2026. California and Washington remain highly competitive real estate markets.</em>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FAQs for Homebuyers in California &amp; Washington
            </h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Explore More Mortgage Options
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/heloc-orange-county" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">HELOC Loans</span>
              </Link>
              <Link href="/cash-out-refinance" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Cash-Out Refinance</span>
              </Link>
              <Link href="/areas/irvine-mortgage-broker" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Irvine Mortgages</span>
              </Link>
              <Link href="/areas/newport-beach-mortgage-broker" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Newport Beach Loans</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Buying Journey?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Get your free pre-approval consultation and discover what you can afford in California and Washington markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 822-9662">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Call (949) 822-9662
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Mo Abdel - NMLS #1426884 | Licensed Mortgage Broker (CA &amp; WA)
            </p>
          </section>
        </div>
      </div>
    </>
  );
}