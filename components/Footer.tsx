import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

const navigationItems = [
  { title: 'Home', url: createPageUrl('Home') },
  { title: 'About', url: createPageUrl('About') },
  { title: 'Loan Programs', url: createPageUrl('Programs') },
  { title: 'Service Areas', url: '/areas' },
  { title: 'Guides & Education', url: '/guides' },
  { title: 'Resources & Tools', url: '/resources' },
  { title: 'Neighborhood Guide', url: '/neighborhood-guide' },
  { title: 'Payment Calculator', url: createPageUrl('Calculator') },
  { title: 'Contact', url: createPageUrl('Contact') },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-base font-semibold mb-3">About</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              Mortgage broker serving California & Washington. Access 200+ lenders, compare options, close fast.
              NMLS #1426884.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              >
                Get a quote
              </Link>
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex items-center rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-semibold text-white hover:border-slate-400 transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              {navigationItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.url} className="hover:text-white transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Contact</h3>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li>
                <a href={PHONE_TEL_HREF} className="hover:text-white transition-colors">
                  Call {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:mo.abdel@luminlending.com" className="hover:text-white transition-colors">
                  mo.abdel@luminlending.com
                </a>
              </li>
              <li className="leading-relaxed">
                18301 Von Karman Ave Suite 820
                <br />
                Irvine, CA 92612
              </li>
              <li>Available 24/7</li>
            </ul>

            {/* Social Media Links */}

          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Official Resources</h3>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li>
                <a
                  href="https://www.consumerfinance.gov/owning-a-home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  CFPB Home Buying Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.fhfa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Federal Housing Finance Agency
                </a>
              </li>
              <li>
                <a
                  href="https://www.va.gov/housing-assistance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  VA Housing Assistance
                </a>
              </li>
              <li>
                <a
                  href="https://www.hud.gov/findacounselor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  HUD Housing Counseling
                </a>
              </li>
              <li>
                <a
                  href="https://www.mba.org/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Mortgage Bankers Association
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6">
          {/* Collapsed disclosures to keep footer compact */}
          <details className="max-w-6xl mx-auto mb-6">
            <summary className="cursor-pointer select-none text-sm font-semibold text-slate-200 hover:text-white transition-colors">
              Disclosures & Licensing
            </summary>
            <div className="mt-4 space-y-5 text-slate-300 text-xs leading-relaxed">
              <div>
                <p className="text-white font-semibold mb-2">EQUAL HOUSING LENDER</p>
                <p>
                  Lumin Lending is an Equal Housing Lender. As prohibited by federal law, we do not engage in business practices that
                  discriminate based on race, color, religion, national origin, sex, marital status, age (provided you have the capacity
                  to enter into a binding contract) because all or part of your income may be derived from any public assistance program,
                  or because you have, in good faith, exercised any right under the Consumer Credit Protection Act.
                </p>
              </div>

              <div>
                <p>
                  Information accurate as of 12/20/2025. Not all programs are available in all areas. Not all borrowers will qualify for
                  all programs. Program restrictions apply. Please contact Lumin Lending, 18301 Von Karman Ave Suite 820, Irvine, CA 92612
                  to determine eligibility. This is not an offer or extension of credit or a commitment to lend. All loan programs are
                  subject to the specific lender&apos;s underwriting guidelines and available loan products. Approvals may be subject to
                  appraisals and other documentation requirements. Interest rates, loan programs, available loan terms, and other
                  information on this website are subject to change without notice. The Loan Origination team accepts applications in the
                  following states only: CA, WA. The information on this site is not intended for consumers of any other state. To
                  determine broker or loan origination eligibility please visit:{' '}
                  <a
                    href="https://www.nmlsconsumeraccess.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-slate-200 underline"
                  >
                    NMLS Consumer Access
                  </a>
                  .
                </p>
              </div>

              <div className="text-center pt-4 border-t border-slate-800 flex flex-col items-center gap-1">
                <p className="text-white font-bold text-sm">Mo Abdel NMLS #1426884</p>
                <div className="text-slate-200">
                  <span>Lumin Lending, Inc. NMLS #2716106</span>
                  <span className="mx-2">|</span>
                  <span>DRE #02291443</span>
                </div>
                <p className="text-slate-400 text-[10px]">18301 Von Karman Ave Suite 820, Irvine, CA 92612</p>
              </div>
            </div>
          </details>

          {/* Legal Links */}
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/areas" className="text-slate-400 hover:text-white transition-colors">
                Service Areas
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Mo Abdel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}