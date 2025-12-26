'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, FileText, Phone, Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createPageUrl } from '@/lib/utils';
import Image from 'next/image';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';

import { navigationItems } from '@/lib/navigation-data';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { trackPhoneCall } = useFacebookTracking();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-base44 border-b border-slate-200 sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 py-2">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image
              src="/MoAbdelLogo.png"
              alt="Mo Abdel - Orange County Mortgage Broker NMLS 1426884"
              width={720}
              height={216}
              className="h-16 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <Link
                      href={item.url}
                      className={`inline-flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${(item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                          (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                          (item.page === 'Guides' && (pathname.startsWith('/neighborhood-guide') || pathname.startsWith('/guides') || pathname.startsWith('/articles'))) ||
                          (item.page === 'Resources' && pathname.startsWith('/resources'))
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Simple hover dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-2xl border border-slate-200 py-3 z-[9999] max-h-[80vh] overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        dropdownItem.isHeader ? (
                          <div
                            key={index}
                            className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-t border-slate-100 mt-1 pt-3 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`inline-flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${pathname === item.url
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/quiz">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.url}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${(item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                          (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                          (item.page === 'Guides' && (pathname.startsWith('/neighborhood-guide') || pathname.startsWith('/guides') || pathname.startsWith('/articles'))) ||
                          (item.page === 'Resources' && pathname.startsWith('/resources'))
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {/* Mobile dropdown items */}
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        dropdownItem.isHeader ? (
                          <div
                            key={index}
                            className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider border-t border-slate-100 mt-2 pt-2 whitespace-nowrap"
                          >
                            {dropdownItem.title}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-3 py-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.url
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-4">
              <Link href="/quiz" className="block px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}