import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Award, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Mo Abdel | Mortgage Broker | West Capital Lending',
  description: 'Meet Mo Abdel, your trusted Orange County mortgage broker with West Capital Lending. NMLS #1426884. Access to 100+ wholesale lenders for the best rates.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <div className="mb-6">
                <Image
                  src="/images/west-capital-logo.png"
                  alt="West Capital Lending"
                  width={200}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mo Abdel
              </h1>
              <p className="text-xl text-slate-300 mb-2">
                Mortgage Broker | NMLS #1426884
              </p>
              <p className="text-lg text-slate-400 mb-6">
                West Capital Lending, Inc. | NMLS #1566096
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                I help California homeowners and buyers secure optimal financing through
                strategic access to 100+ wholesale lenders. Unlike retail banks, I work
                for you—not the lender—ensuring you get the best possible terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                    Get Started
                  </Button>
                </Link>
                <a href="tel:+19495372357">
                  <Button variant="ghost" className="border border-white text-white hover:bg-white/10 px-6 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    (949) 537-2357
                  </Button>
                </a>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mo-headshot.jpg"
                  alt="Mo Abdel - Orange County Mortgage Broker"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Work With Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100+ Lenders</h3>
              <p className="text-slate-600">
                Access to wholesale lenders that compete for your business, offering better pricing than retail banks.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Your Advocate</h3>
              <p className="text-slate-600">
                I work for you, not the bank. Your financial goals guide every recommendation I make.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Local Expert</h3>
              <p className="text-slate-600">
                Deep knowledge of Orange County's unique market, neighborhoods, and property values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Professional Credentials
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Licenses</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• NMLS #1426884</li>
                  <li>• California Licensed Mortgage Broker</li>
                  <li>• CA DRE #02022356</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Company</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• West Capital Lending, Inc.</li>
                  <li>• Company NMLS #1566096</li>
                  <li>• 24 Executive Park Suite 250, Irvine, CA 92614</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <a
                href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1566096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Verify License at NMLS Consumer Access →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss your mortgage needs and find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Schedule Consultation
              </Button>
            </Link>
            <a href="mailto:mabdel@wclloans.com">
              <Button variant="ghost" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                mabdel@wclloans.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}