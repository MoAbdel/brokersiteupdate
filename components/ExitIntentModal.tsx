'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Banknote, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import InquiryTermsConsent from '@/components/ui/InquiryTermsConsent';
import { useFacebookTracking } from '@/hooks/useFacebookTracking';
import { getResponseErrorMessage } from '@/lib/api-client';
import { appendTermsConsentToFormData } from '@/lib/terms-consent';

interface ContextualOffer {
  headline: string;
  subheadline: string;
  buttonText: string;
  contextKey: string;
}

function getContextualOffer(): ContextualOffer {
  if (typeof window === 'undefined') {
    return {
      headline: 'Get Your Free Rate Quote',
      subheadline: 'Access wholesale mortgage pricing from 50+ lenders — rates retail banks can\'t match.',
      buttonText: 'Get My Free Quote',
      contextKey: 'general',
    };
  }

  const pathname = window.location.pathname;

  if (/dscr|investment|fix-flip|foreign-national/.test(pathname)) {
    return {
      headline: 'Get Your Investor Rate Sheet',
      subheadline: 'Access DSCR rates from 50+ wholesale lenders — one application, institutional pricing.',
      buttonText: 'Get My Investor Rates',
      contextKey: 'dscr',
    };
  }

  if (/bank-statement|self-employed|non-qm|profit-loss|asset-depletion/.test(pathname)) {
    return {
      headline: 'Get Your Bank Statement Loan Estimate',
      subheadline: 'See how much you qualify for using 12 or 24 months of bank statements — no tax returns needed.',
      buttonText: 'Get My Loan Estimate',
      contextKey: 'bank_statement',
    };
  }

  if (/heloc|heloan|home-equity|cash-out/.test(pathname)) {
    return {
      headline: 'See How Much Equity You Can Access',
      subheadline: 'Get a free equity analysis from 50+ wholesale lenders — no commitment required.',
      buttonText: 'Check My Equity Options',
      contextKey: 'heloc',
    };
  }

  if (/fha|va|usda|first-time|purchase/.test(pathname)) {
    return {
      headline: 'Get Your Free Pre-Qualification',
      subheadline: 'Find out how much home you qualify for today — wholesale rates beat the big banks.',
      buttonText: 'Get Pre-Qualified Free',
      contextKey: 'purchase',
    };
  }

  if (/refinance|rate-term/.test(pathname)) {
    return {
      headline: 'See Your Refinance Savings',
      subheadline: 'Compare your current rate against today\'s wholesale rates — takes 60 seconds.',
      buttonText: 'See My Savings',
      contextKey: 'refinance',
    };
  }

  return {
    headline: 'Get Your Free Rate Quote',
    subheadline: 'Access wholesale mortgage pricing from 50+ lenders — rates retail banks can\'t match.',
    buttonText: 'Get My Free Quote',
    contextKey: 'general',
  };
}

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [step, setStep] = useState(1); // 1 = Offer, 2 = Form, 3 = Success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [termsConsent, setTermsConsent] = useState(false);
  const [contextualOffer, setContextualOffer] = useState<ContextualOffer>(() => getContextualOffer());
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });

  const { trackLead } = useFacebookTracking();

  // Track maximum scroll depth for mobile scroll-up detection
  const maxScrollY = useRef(0);

  useEffect(() => {
    // Only set up listeners if we haven't shown it yet
    if (hasShown) return;

    const triggerModal = () => {
      setContextualOffer(getContextualOffer());
      setIsVisible(true);
      setHasShown(true);
    };

    // Desktop: exit intent via mouse leaving top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerModal();
      }
    };

    // Mobile: 45-second inactivity timer
    const timer = setTimeout(() => {
      triggerModal();
    }, 45000); // 45 seconds

    // Mobile: scroll-up detection — user scrolled 300px+ down then back within 100px of top
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > maxScrollY.current) {
        maxScrollY.current = currentY;
      }

      const scrolledFarEnough = maxScrollY.current >= 300;
      const nearTop = currentY <= 100;

      if (scrolledFarEnough && nearTop) {
        triggerModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const submitData = new FormData();
      submitData.append('full_name', formData.firstName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('source', 'Exit Intent Modal');
      submitData.append('_subject', `Exit Intent Lead - ${formData.firstName}`);
      appendTermsConsentToFormData(submitData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        trackLead();
        if (typeof window !== 'undefined' && (window as any).gtag) {
             (window as any).gtag('event', 'generate_lead', {
                event_category: 'engagement',
                event_label: `exit_intent_${contextualOffer.contextKey}`
             });
        }
        setStep(3);
        setTermsConsent(false);
        // Auto close after a few seconds? or let them close
        setTimeout(() => {
           setIsVisible(false);
        }, 5000);
      } else {
        throw new Error(
          await getResponseErrorMessage(
            response,
            'Unable to submit your rate request right now. Please try again.'
          )
        );
      }
    } catch (error) {
      console.error('Exit intent submission error:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your rate request right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85dvh] overflow-y-auto overflow-x-hidden animate-in zoom-in-95 duration-300 border-4 border-white">

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 && (
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-slate-900 p-4 md:p-8 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/30 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-6 border border-blue-400/30">
                        <ShieldCheck className="w-3 h-3" />
                        Wholesale Advantage
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2 md:mb-4">
                        Wait! Don't Overpay For Your Mortgage.
                    </h2>
                    <p className="text-slate-200 mb-3 md:mb-6 text-sm md:text-lg">
                        Banks typically offer one set of rates. As a broker, we shop wholesale channels to find competitive pricing.
                    </p>
                    <ul className="space-y-1.5 md:space-y-3 mb-3 md:mb-8">
                        <li className="flex items-start gap-2 md:gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm">Access to 50+ wholesale lenders</span>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm">Competitive wholesale interest rates</span>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm">Streamlined approval process</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-4 md:p-8 flex flex-col justify-center bg-white">
              <div className="text-center md:text-left mb-3 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">
                    {contextualOffer.headline}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                    {contextualOffer.subheadline}
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <Button
                    onClick={handleCtaClick}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 md:py-6 text-base md:text-lg shadow-lg hover:shadow-blue-600/20 transition-all duration-300 group"
                >
                    {contextualOffer.buttonText}{' '}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <button
                    onClick={handleClose}
                    className="w-full text-slate-400 hover:text-slate-600 text-sm font-medium py-1 md:py-2"
                >
                    No thanks, maybe later
                </button>
              </div>

              <div className="mt-4 md:mt-8 flex items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Trust Badges Placeholder - using text/icons for simplicity */}
                 <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-500">NMLS #1426884</span>
                 </div>
                 <div className="w-px h-4 bg-slate-300"></div>
                 <div className="flex items-center gap-1">
                    <Banknote className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-500">No Hidden Fees</span>
                 </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
             <div className="p-5 md:p-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Where should we send your quote?
                    </h3>
                    <p className="text-slate-600">
                        We'll analyze 50+ Wholesale Lenders to find your best option.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    <div>
                        <label htmlFor="exit-name" className="sr-only">First Name</label>
                        <input
                            id="exit-name"
                            type="text"
                            required
                            placeholder="Your First Name"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="exit-email" className="sr-only">Email Address</label>
                        <input
                            id="exit-email"
                            type="email"
                            required
                            placeholder="Your Email Address"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="exit-phone" className="sr-only">Phone Number (Optional)</label>
                        <input
                            id="exit-phone"
                            type="tel"
                            placeholder="Phone Number (Optional)"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>

                    <InquiryTermsConsent
                      checked={termsConsent}
                      onCheckedChange={setTermsConsent}
                      className="mt-0"
                      copyClassName="text-xs text-center text-slate-500"
                    />

                    <Button 
                        type="submit"
                        disabled={isSubmitting || !termsConsent}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-bold shadow-lg hover:shadow-green-600/20 transition-all duration-300"
                    >
                        {isSubmitting ? 'Analyzing Rates...' : 'Show Me My Savings'}
                    </Button>

                    {errorMessage && (
                      <p className="text-sm text-red-600 text-center">
                        {errorMessage}
                      </p>
                    )}
                    
                    <p className="text-xs text-slate-400 text-center mt-2">
                        This is not a loan application or commitment to lend. All loans subject to credit approval. Not all applicants will qualify. Mo Abdel NMLS #1426884 | Lumin Lending NMLS #2716106 | DRE #02291443. Equal Housing Lender.
                    </p>
                </form>
             </div>
        )}

        {step === 3 && (
            <div className="p-6 md:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    You're All Set!
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    We've received your request. Mo will personally review the latest wholesale rates and send you a custom quote shortly.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg inline-flex items-center gap-3 text-blue-800">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Typical response time: &lt; 2 hours</span>
                </div>
                
                <div className="mt-8">
                     <Button 
                        onClick={handleClose}
                        variant="outline"
                    >
                        Return to Website
                    </Button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
