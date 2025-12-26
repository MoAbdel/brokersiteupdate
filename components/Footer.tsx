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
                  href="https://www.fhfa.gov/homeownerspage"
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
                  href="https://www.mba.org/consumers"
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
          {/* License Information and Disclaimers Side by Side */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Enhanced NMLS Disclosures */}
              <div className="text-center">
                <div className="bg-slate-800 p-4 rounded-lg inline-block">
                  <p className="text-white font-semibold mb-2">EQUAL HOUSING LENDER</p>
                  <p className="text-slate-300 text-sm mb-2">West Capital Lending, Inc.</p>
                  <p className="text-slate-300 text-sm mb-3">Mo Abdel, Branch Manager • NMLS #1426884</p>

                  {/* Brokerage License Information */}
                  <div className="border-t border-slate-600 pt-3 mb-3">
                    <p className="text-slate-300 text-sm font-medium mb-1">24 Executive Park Suite 250, Irvine, CA 92614</p>
                    <p className="text-slate-400 text-xs mb-1">Direct: (949) 537-2357 | mabdel@wclloans.com</p>
                    <p className="text-slate-400 text-xs mb-1">Company NMLS #1566096 | CA DRE #02022356</p>
                    <p className="text-slate-400 text-xs">Licensed by the CA Department of Financial Protection and Innovation</p>
                  </div>

                  <p className="text-slate-400 text-xs">
                    <a
                      href="https://www.nmlsconsumeraccess.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      NMLS Consumer Access
                    </a>
                    {' | '}
                    <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                      Privacy Policy
                    </Link>
                    {' | '}
                    <Link href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline">
                      Terms of Use
                    </Link>
                  </p>
                </div>
              </div>

              {/* Required Disclaimers */}
              <div className="flex items-center">
                <div className="bg-slate-800 p-4 rounded-lg w-full">
                  <p className="text-slate-300 text-xs mb-2">
                    <strong>Important:</strong> This is not a commitment to lend. Loans subject to credit and property approval.
                    Programs, terms and conditions subject to change without notice. Other restrictions apply.
                  </p>
                  <p className="text-slate-400 text-xs mb-2">
                    This material is not from HUD or FHA and has not been approved by HUD or any government agency.
                    The information provided is for informational purposes only and is not an advertisement for products or services.
                  </p>
                  <p className="text-slate-400 text-xs">
                    All loan programs and pricing are subject to credit approval and may require membership or account relationships. Additional terms and conditions apply.
                  </p>
                </div>
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