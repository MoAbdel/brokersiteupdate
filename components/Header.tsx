'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';

import { navigationItems } from '@/lib/navigation-data';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { trackPhoneCall } = useFacebookTracking();

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showScrolled = pathname === '/about' || (hasMounted && isScrolled);

  return (
    <header 
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        showScrolled 
          ? 'bg-white shadow-base44 border-b border-slate-200' 
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${showScrolled ? 'h-14 md:h-16 py-2' : 'h-16 md:h-20 py-3'} relative`}>
          {/* Brand Logo - visible on all screens */}
          <Link href="/" className="flex items-center z-10 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-sm transition-transform duration-200 group-hover:scale-110">
              <Image
                src="/images/mo-headshot.jpg"
                alt="Mo Abdel"
                width={48}
                height={48}
                sizes="(min-width: 768px) 48px, 40px"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="ml-2 sm:ml-3">
              <span className={`block text-xs sm:text-sm font-bold leading-tight transition-colors ${showScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Mo Abdel</span>
              <span className="block text-[10px] sm:text-xs text-blue-600 font-medium uppercase tracking-wider">Sr. Mortgage Broker</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 lg:space-x-2">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <Link
                      href={item.url}
                      className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${(item.page === 'Programs' && pathname.startsWith('/loan-programs')) ||
                        (item.page === 'ServiceAreas' && pathname.startsWith('/areas')) ||
                        (item.page === 'Guides' && (pathname.startsWith('/neighborhood-guide') || pathname.startsWith('/guides') || pathname.startsWith('/articles'))) ||
                        (item.page === 'Resources' && pathname.startsWith('/resources'))
                        ? 'text-blue-600 bg-blue-50'
                        : showScrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50' : 'text-slate-900 hover:text-blue-600 hover:bg-white/50'
                        }`}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Premium hover dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[22rem] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/70 py-2 z-[9999] max-h-[80vh] overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        dropdownItem.isHeader ? (
                          <div
                            key={index}
                            className={`px-4 pb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em] whitespace-nowrap ${index === 0 ? 'pt-3' : 'pt-4 border-t border-slate-100/80 mt-1'
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              {dropdownItem.icon ? (
                                <dropdownItem.icon className="h-4 w-4 text-slate-400" />
                              ) : null}
                              <span>{dropdownItem.title}</span>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="mx-2 flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-colors duration-150 whitespace-nowrap"
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
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${pathname === item.url || pathname.startsWith(`${item.url}/`)
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

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center z-10">
            <a href={PHONE_TEL_HREF} onClick={() => trackPhoneCall()}>
              <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                {PHONE_DISPLAY}
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center z-10">
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
        <div className="md:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-7rem)] overflow-y-auto shadow-xl">
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
                        : showScrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50' : 'text-slate-900 hover:text-blue-600 hover:bg-white/50'
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
                            className={`px-3 pb-1 text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em] whitespace-nowrap ${index === 0 ? 'pt-2' : 'pt-4 border-t border-slate-100/80 mt-2'
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              {dropdownItem.icon ? (
                                <dropdownItem.icon className="h-4 w-4 text-slate-400" />
                              ) : null}
                              <span>{dropdownItem.title}</span>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
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
          </div>
        </div>
      )}
    </header>
  );
}