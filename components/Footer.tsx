import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Mo Abdel</h3>
            <p className="text-slate-400 mb-4">
              Your trusted mortgage broker providing direct access to 100+ wholesale lenders across California.
              Shopping the entire marketplace to secure your optimal financing strategy. NMLS #1426884.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
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
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li>📞 (949) 537-2357</li>
              <li>📧 <a href="mailto:mabdel@wclloans.com" className="hover:text-white transition-colors">mabdel@wclloans.com</a></li>
              <li>📍 24 Executive Park Suite 250<br />Irvine, CA 92614</li>
              <li>🕒 Mo-Fr 8:00 AM - 6:00 PM</li>
            </ul>

            {/* Social Media Links */}

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2 text-slate-400">
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

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="max-w-6xl mx-auto mb-8">
            <div className="space-y-6 text-slate-400 text-xs leading-relaxed">
              {/* Equal Housing & Non-Discrimination */}
              <div>
                <p className="text-white font-semibold mb-2">EQUAL HOUSING LENDER</p>
                <p>
                  West Capital Lending is an Equal Housing Lender. As prohibited by federal law, we do not engage in business practices that discriminate based on race, color, religion, national origin, sex, marital status, age (provided you have the capacity to enter into a binding contract) because all or part of your income may be derived from any public assistance program, or because you have, in good faith, exercised any right under the Consumer Credit Protection Act.
                </p>
              </div>

              {/* General Disclaimers & Licensing */}
              <div>
                <p>
                  Information accurate as of 02/19/2024. Not all programs are available in all areas. Not all borrowers will qualify for all programs. Program restrictions apply. Please contact West Capital Lending, 24 Executive Park, Suite 250 Irvine, CA 92614 to determine eligibility. This is not an offer or extension of credit or a commitment to lend. All loan programs are subject to the specific lender's underwriting guidelines and available loan products. Approvals may be subject to appraisals and other documentation requirements. Interest rates, loan programs, available loan terms, and other information on this website are subject to change without notice. The Loan Origination team accepts applications in the following states only: CA, CO, WA, VA. The information on this site is not intended for consumers of any other state to determine broker or loan origination eligibility please visit:{' '}
                  <a
                    href="https://www.nmlsconsumeraccess.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    NMLS Consumer Access
                  </a>.
                </p>
              </div>

              {/* Texas Specific Disclosure */}
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <p className="italic uppercase tracking-tight">
                  CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705. COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV. A TOLL-FREE CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550. THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED RESIDENTIAL MORTGAGE LOAN ORIGINATORS. A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV.
                </p>
              </div>

              {/* Personal & Corporate NMLS */}
              <div className="text-center pt-4 border-t border-slate-700 flex flex-col items-center gap-1">
                <p className="text-white font-bold text-sm">Mo Abdel NMLS #1426884</p>
                <div className="text-slate-300">
                  <span>West Capital Lending, Inc. NMLS #1566096</span>
                  <span className="mx-2">|</span>
                  <span>DRE #02022356</span>
                </div>
                <p className="text-slate-400 text-[10px]">24 Executive Park, Suite 250 Irvine, CA 92614</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
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