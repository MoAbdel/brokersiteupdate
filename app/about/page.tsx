import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Heart, Home, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Mo Abdel - Orange County Mortgage Broker',
  description: 'Orange County mortgage broker offering competitive rates and expert guidance. Licensed NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mo Abdel
              </h1>
              <p className="text-xl text-green-400 mb-2">
                Mortgage Broker | NMLS #1426884
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Company NMLS #2716106 | CA DRE #02291443
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                    Work With Me
                  </Button>
                </Link>
                <a href="tel:+19498229662">
                  <Button variant="ghost" className="border border-white text-white hover:bg-white/10 px-6 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    (949) 822-9662
                  </Button>
                </a>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-slate-700/50">
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

      {/* My Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            My Story
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-xl leading-relaxed mb-6">
              Growing up in Orange County, I watched my parents work tirelessly to achieve their dream of homeownership. That experience shaped everything I do today.
            </p>

            <p className="leading-relaxed mb-6">
              I was born and raised right here in Orange County—from beach days in Laguna to Friday nights at the Irvine Spectrum. I know these neighborhoods because I grew up in them. I understand what it means to put down roots here, to raise a family here, and to build a future in one of California's most beautiful communities.
            </p>

            <p className="leading-relaxed mb-6">
              My passion for home financing started when I realized how much the right mortgage can change a family's financial trajectory. Too many people get locked into bad deals with big banks because they don't know there are better options. That frustrated me—and it drove me to become a mortgage broker.
            </p>

            <p className="leading-relaxed mb-6">
              Today, I work with Lumin Lending to give my clients access to over 100 wholesale lenders. This means I can shop your loan across dozens of options to find the best rates and terms—something a traditional bank simply can't do. I'm not working for the bank; I'm working for you.
            </p>

            <p className="text-xl leading-relaxed font-medium text-slate-900">
              Whether you're a first-time buyer nervous about the process, a homeowner looking to tap into your equity, or an investor building your portfolio—I'm here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Me */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Roots</h3>
              <p className="text-slate-600">
                Orange County isn't just where I work—it's home. I know the neighborhoods, the schools, and the communities because I grew up here.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Genuine Care</h3>
              <p className="text-slate-600">
                Every client is someone's family. I treat your mortgage like I'd treat my own parents'—with honesty, patience, and a commitment to getting it right.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Your Advocate</h3>
              <p className="text-slate-600">
                I work for you, not the lender. My job is to fight for the best terms and guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Professional Credentials
          </h2>
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Licenses</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• NMLS #1426884</li>
                  <li>• Licensed in: CA, WA, VA, CO</li>
                  <li>• CA DRE #02291443</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Company</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Lumin Lending, Inc.</li>
                  <li>• Company NMLS #2716106</li>
                  <li>• Irvine, California</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
              <a
                href="https://www.nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Verify my license at NMLS Consumer Access →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let's Talk About Your Goals
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're buying your first home or refinancing your forever home, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-semibold">
                Schedule a Call
              </Button>
            </Link>
            <a href="mailto:mo.abdel@luminlending.com">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Email Mo Abdel
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}