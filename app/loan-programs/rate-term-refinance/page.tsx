import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { BarChart3, CheckCircle, AlertCircle, Calculator, Calendar, Clock, Hourglass, Lightbulb, PiggyBank, Shield, TrendingDown, Zap, DollarSign } from 'lucide-react';
import { buildBrokerEntityGraph, buildServiceWebPageSchema } from '@/lib/schema-entities';

export const metadata: Metadata = {
  title: 'Term Refinance Orange County | Lower Payment & Optimize Loan | Mo The Mortgage Broker',
  description: 'Term refinance in Orange County. Lower your mortgage payment, eliminate PMI, or switch to fixed pricing. Competitive mortgage broker options through Lumin Lending. Call (949) 822-9662.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
    languages: {
      'en-US': 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
      'x-default': 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
    },
  },
};

const pageSchema = buildBrokerEntityGraph({
  pageUrl: 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
  serviceType: 'Rate and Term Refinance Services',
  serviceName: 'Rate and Term Refinance in Orange County',
  serviceDescription: 'Expert rate-and-term refinance services in Orange County, CA',
});

const webPageSchema = buildServiceWebPageSchema({
  pageUrl: 'https://www.mothebroker.com/loan-programs/rate-term-refinance',
  title: 'Term Refinance Orange County | Lower Payment & Optimize Loan | Mo The Mortgage Broker',
  description:
    'Term refinance in Orange County. Lower your mortgage payment, eliminate PMI, or switch to fixed pricing. Competitive mortgage broker options through Lumin Lending. Call (949) 822-9662.',
  breadcrumbName: 'Rate-Term Refinance',
});

export default function RateTermRefinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <PiggyBank className="w-4 h-4 mr-2 text-blue-600" aria-hidden="true" />
            <span>Money Saver</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Term Refinance</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Lower your monthly payments, eliminate PMI, or change your
            loan term without taking cash out. Perfect for optimizing your current mortgage
            and improving your loan structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                Get My New Payment Quote
              </Button>
            </Link>
            <a href="tel:(949) 822-9662">
              <Button variant="ghost" className="border-2 border-green-600 text-blue-600 hover:bg-slate-50 px-8 py-3 text-lg">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Lower Payments</h3>
            <p className="text-slate-600">Reduce monthly payments with better loan terms</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Eliminate PMI</h3>
            <p className="text-slate-600">Remove private mortgage insurance when you hit 20% equity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Change Term</h3>
            <p className="text-slate-600">Switch to 15-year to pay off faster or 30-year for lower payments</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Stability</h3>
            <p className="text-slate-600">Switch from ARM to fixed pricing for predictable payments</p>
          </div>
        </div>

        {/* Potential Savings Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">See Your Potential Savings</h2>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Orange County Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current Loan Balance:</span>
                    <span className="font-bold">$600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Current Payment:</span>
                    <span className="font-bold text-red-600">$4,095/month</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600">Optimized Payment:</span>
                      <span className="font-bold text-blue-600">$3,794/month</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-900 font-semibold">Monthly Savings:</span>
                      <span className="font-bold text-blue-600">$301/month</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">*Example only. Actual savings depend on your specific situation and current market conditions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Annual Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Payment Reduction:</span>
                    <span className="font-bold text-blue-600">$301</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Annual Payment Savings:</span>
                    <span className="font-bold text-blue-600">$3,612</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">5-Year Total Savings:</span>
                    <span className="font-bold text-blue-600">$18,060</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-900 font-semibold">Lifetime Interest Saved:</span>
                      <span className="font-bold text-blue-600">~$54,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Term Refinance Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Term Refinancing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Lower Monthly Payments</span>
                </h3>
                <p className="text-slate-600 mb-3">Reduce your payment by hundreds per month when market conditions improve or your credit strengthens.</p>
                <p className="text-sm font-semibold text-blue-600">Free up cash flow for other goals</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Remove PMI</span>
                </h3>
                <p className="text-slate-600 mb-3">Eliminate private mortgage insurance when your Orange County home reaches 20% equity.</p>
                <p className="text-sm font-semibold text-blue-600">Save $200-500+ monthly</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>ARM to Fixed Conversion</span>
                </h3>
                <p className="text-slate-600 mb-3">Lock in fixed pricing if you have an adjustable mortgage and want stability.</p>
                <p className="text-sm font-semibold text-blue-600">Protection from payment increases</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Shorten Loan Term</span>
                </h3>
                <p className="text-slate-600 mb-3">Switch to a 15-year mortgage to pay off your Orange County home faster.</p>
                <p className="text-sm font-semibold text-blue-600">Save massive interest long-term</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Better Loan Features</span>
                </h3>
                <p className="text-slate-600 mb-3">Get better loan terms, remove prepayment penalties, or switch lenders.</p>
                <p className="text-sm font-semibold text-blue-600">Improved loan conditions</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Credit Improvement Benefits</span>
                </h3>
                <p className="text-slate-600 mb-3">If your credit has improved since your original loan, qualify for much better loan terms.</p>
                <p className="text-sm font-semibold text-blue-600">Reward your improved credit</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When to Refinance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">When Should You Consider Term Refinancing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <span>Great Time to Refinance</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">Market conditions are more favorable than when you originally financed</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You're paying PMI but have 20%+ equity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">Your credit score has improved 50+ points</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You have an ARM and want payment stability</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You plan to stay in your home 2+ years</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You want to pay off your loan faster</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Hourglass className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <span>Wait or Consider Other Options</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">Market conditions are worse than when you originally financed</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You plan to move within 2 years</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You have less than 20% equity and affordable PMI</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">Your current loan is less than 2 years old</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">Your current loan has excellent terms</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-blue-700">You need cash and should consider cash-out refi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refinance Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Orange County Refinance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Loan Analysis</h3>
              <p className="text-slate-600 text-sm">We compare your current loan to today's market options and calculate your savings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-slate-600 text-sm">Quick online application with your financial information and loan preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Processing</h3>
              <p className="text-slate-600 text-sm">We handle underwriting, appraisal, and coordinate with your current lender.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Closing</h3>
              <p className="text-slate-600 text-sm">Sign docs, your old loan is paid off, and your new lower payment starts!</p>
            </div>
          </div>
        </div>

        {/* Term vs Cash-Out */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Term Refinance vs Cash-Out Refinance</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Term Refinance</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Cash-Out Refinance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Cash Back at Closing</td>
                  <td className="px-6 py-4 text-center text-slate-600">No</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Yes - Large Amounts</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Maximum LTV</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">95%+</td>
                  <td className="px-6 py-4 text-center text-slate-600">80%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Pricing</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Best Available</td>
                  <td className="px-6 py-4 text-center text-slate-600">Slightly Higher Cost</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Loan Amount</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Current Balance or Less</td>
                  <td className="px-6 py-4 text-center text-slate-600">Higher than Current</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Best For</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Lowering Payments</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold">Need Cash</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Lower Your Orange County Mortgage Payment?
          </h2>
          <p className="text-xl mb-6 text-slate-200">
            Get your personalized loan and payment analysis in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
                Check My New Payment Options
              </Button>
            </Link>
            <a href="tel:(949) 822-9662">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Call (949) 822-9662
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-200 mt-4">
            Licensed mortgage broker with Lumin Lending • NMLS #1426884 • Serving all of Orange County
          </p>
        </div>

        {/* Required Disclaimers */}
        <div className="bg-slate-100 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>
          <div className="text-sm text-slate-700 space-y-2">
            <p>
              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 
              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.
            </p>
            <p>
              This material is not from HUD or FHA and has not been approved by HUD or any government agency. 
              The information provided is for informational purposes only and is not an advertisement for products or services.
            </p>
            <p>
              Loan terms are subject to change without notice. All information must be verified prior to loan approval. 
              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with Lumin Lending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}