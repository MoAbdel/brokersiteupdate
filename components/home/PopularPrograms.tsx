'use client';

import React from 'react';
import Link from 'next/link';

export default function PopularPrograms() {
    const programs = [
        { href: '/fha-loans-orange-county', label: 'FHA Loan Programs' },
        { href: '/va-loans-orange-county', label: 'VA Benefits & Rates' },
        { href: '/heloc-orange-county', label: 'HELOC Calculator' },
        { href: '/conventional-loans-orange-county', label: 'Conventional Options' },
        { href: '/non-qm-loans-orange-county', label: 'Self-Employed Loans' },
        { href: '/heloan-orange-county', label: 'Fixed-Rate HELOAN' },
        { href: '/rate-term-refinance-orange-county', label: 'Refinance Calculator' },
        { href: '/jumbo-loans-orange-county', label: 'Jumbo Loan Solutions' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                    Popular Orange County Mortgage Programs
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {programs.map((program) => (
                        <Link
                            key={program.href}
                            href={program.href}
                            className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg transition-colors text-sm font-medium border border-slate-200 hover:border-blue-200"
                        >
                            {program.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
