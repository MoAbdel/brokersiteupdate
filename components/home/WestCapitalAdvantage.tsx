'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, MapPin } from 'lucide-react';

export default function WestCapitalAdvantage() {
  const programs = [
    {
      title: 'Conventional/Jumbo',
      description: 'Up to $4M',
      details: 'Competitive pricing for strong credit profiles',
      href: '/loan-programs/conventional-loans'
    },
    {
      title: 'FHA/VA/USDA',
      description: 'Government Programs',
      details: 'Low down payment options or VA Refinance benefits',
      href: '/fha-loans-orange-county'
    },
    {
      title: 'Non-QM Solutions',
      description: 'Alternative Income',
      details: 'Bank Statement, DSCR, Asset Depletion programs',
      href: '/loan-programs/non-qm-loans'
    },
    {
      title: 'Strategic HELOCs',
      description: 'Home Equity Access',
      details: 'Second mortgages & credit lines',
      href: '/loan-programs/heloc'
    }
  ];

  return (
    <section className="py-16 bg-white border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Lumin Lending Advantage
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Access to wholesale pricing that retail banks simply cannot match
          </p>
        </div>

        {/* Wholesale Power */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-5 md:p-8 mb-12 border border-green-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <Building2 className="w-12 h-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Wholesale Power
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                While retail banks offer their single menu, we access 100+ lenders' wholesale channels—
                <span className="font-semibold text-green-700"> including the banks themselves at better pricing</span>.
                This means you get institutional rates without institutional bureaucracy.
              </p>
            </div>
          </div>
        </div>

        {/* Program Expertise Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Program Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const isHomeEquity = program.description === 'Home Equity Access';
              return (
                <Link
                  key={index}
                  href={isHomeEquity ? '/loan-programs' : program.href}
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="text-green-600 font-bold text-sm mb-2 uppercase tracking-wide">
                    {program.description}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {isHomeEquity ? "HELOCs / HELOANs" : program.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {program.details}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Geographic Coverage */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 whitespace-nowrap">Geographic Coverage</h3>
              <p className="text-slate-300 text-base sm:text-lg">
                Licensed in <span className="text-white font-semibold">CA, WA, VA, & CO</span>
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Full statewide coverage for all counties
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 text-center sm:text-left">
              <div className="text-green-400 font-semibold mb-1 text-sm uppercase tracking-wider">Headquarters</div>
              <div className="text-white text-xl font-bold">Irvine, CA</div>
              <div className="text-slate-400 text-sm mt-1">Orange County</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center sm:text-left">
              <div className="text-green-400 font-semibold mb-1 text-sm uppercase tracking-wider">Primary Markets</div>
              <div className="text-white text-xl font-bold">Orange County</div>
              <div className="text-slate-400 text-sm mt-1">Los Angeles • San Diego</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center sm:text-left">
              <div className="text-green-400 font-semibold mb-1 text-sm uppercase tracking-wider">Coverage Area</div>
              <div className="text-white text-xl font-bold">Multi-State Licensed</div>
              <div className="text-slate-400 text-sm mt-1">CA, WA, VA, CO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
