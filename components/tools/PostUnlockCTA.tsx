'use client';

import React from 'react';

export default function PostUnlockCTA() {
  return (
    <div className="mt-8 rounded-xl border-t-4 border-green-500 bg-white shadow-md py-6 px-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-500 text-xl font-bold">&#10003;</span>
        <p className="text-base font-semibold text-slate-900">Your report is ready!</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="tel:+19495792057"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          Call or Text (949) 579-2057
        </a>
        <a
          href="/mo-abdel-contact.vcf"
          download
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Save Contact Card
        </a>
        <a
          href="/contact-orange-county-mortgage-broker"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Get Pre-Approved
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-400">
        Mo Abdel | NMLS #1426884 | Lumin Lending | NMLS #2716106 | Equal Housing Lender
      </p>
    </div>
  );
}
