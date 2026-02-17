import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

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
      href: '/loan-programs/fha-loans'
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
    <section className="py-16 bg-white border-t-0" aria-label="Wholesale mortgage pricing advantage and loan programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Does Wholesale Mortgage Pricing Save You Money?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto" data-speakable="true">
            Wholesale mortgage pricing gives you access to institutional rates that retail banks simply cannot match, saving thousands over the life of your loan.
          </p>
        </div>

        {/* Wholesale Power */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-5 md:p-8 mb-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <Building2 className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Wholesale Power
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                While retail banks offer their single menu, we access 50+ lenders' wholesale channels—
                <span className="font-semibold text-blue-700"> including the banks themselves at better pricing</span>.
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
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-wide">
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

      </div>
    </section>
  );
}
