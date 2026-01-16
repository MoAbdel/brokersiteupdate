'use client';

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Shield, ChevronRight, ChevronLeft, MapPin, DollarSign, User, 
  Check, Loader2, ArrowRight
} from "lucide-react";
import { fbTrack } from '@/components/FacebookPixel';

// Compliant 2026 Orange County Data
const ORANGE_COUNTY_DATA = {
  conformingLimit: 1209750,
  lowBalanceLimit: 806500,
  fhaLimit: 1209750,
  averagePropertyTaxRate: 0.0067, // 0.67%
  homeownersExemption: 7000
};

const ORANGE_COUNTY_CITIES = [
  'Irvine', 'Newport Beach', 'Huntington Beach', 'Costa Mesa', 'Mission Viejo',
  'Anaheim', 'Santa Ana', 'Fullerton', 'Garden Grove', 'Orange',
  'Fountain Valley', 'Laguna Beach', 'Laguna Niguel', 'Dana Point',
  'Yorba Linda', 'Seal Beach', 'Westminster', 'Lake Forest'
];

const LOAN_PROGRAMS = {
  refinance: {
    title: 'Rate & Term Refinance',
    description: 'Lower your monthly payment or change loan terms',
    programs: ['Conventional Refi', 'FHA Streamline', 'VA IRRRL', 'Switch to Fixed Rate']
  },
  'cash-out': {
    title: 'Cash-Out Refinance',
    description: 'Access your home equity for improvements or investments',
    programs: ['Conventional Cash-Out', 'FHA Cash-Out', 'VA Cash-Out', 'HELOC Alternative']
  },
  heloc: {
    title: 'HELOC',
    description: 'Home Equity Line of Credit for flexible access to funds',
    programs: ['Traditional HELOC', 'Fixed-Rate HELOC', 'Interest-Only Options']
  },
  heloan: {
    title: 'HELOAN',
    description: 'Home Equity Loan with fixed pricing and monthly payments',
    programs: ['Fixed-Rate HELOAN', 'Lump Sum Loan', 'Predictable Payments']
  },
  investment: {
    title: 'Investment Property',
    description: 'Financing for Orange County rental properties',
    programs: ['Conventional Investment', 'DSCR Loans', 'Bank Statement Programs', 'Asset-Based Lending']
  }
};

interface FormData {
  city: string;
  loanPurpose: string;
  timeline: string;
  loanAmount: string;
  homeValue: string;
  downPayment: string;
  currentLoanAmount: string;
  currentRate: string;
  cashOutAmount: string;
  loanType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

interface CalculatorResults {
  availablePrograms: string[];
  loanType: string;
  isJumbo: boolean;
}

export default function PremiumContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    city: '',
    loanPurpose: '',
    timeline: '',
    loanAmount: '',
    homeValue: '',
    downPayment: '',
    currentLoanAmount: '',
    currentRate: '',
    cashOutAmount: '',
    loanType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusField] = useState<string | null>(null);

  // Google Ads conversion tracking function
  const gtagSendEvent = (url?: string) => {
    const callback = function () {
      if (typeof url === 'string') {
        window.location.href = url;
      }
    };
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ads_conversion_Contact_Us_1', {
        'event_callback': callback,
        'event_timeout': 2000,
      });
    }
    return false;
  };

  const calculateMortgageDetails = useCallback(() => {
    let loanAmount = 0;
    if (formData.loanPurpose === 'refinance') {
      loanAmount = parseFloat(formData.currentLoanAmount.replace(/[^0-9.]/g, '')) || 0;
    } else if (formData.loanPurpose === 'cash-out') {
      const currentLoan = parseFloat(formData.currentLoanAmount.replace(/[^0-9.]/g, '')) || 0;
      const cashOut = parseFloat(formData.cashOutAmount.replace(/[^0-9.]/g, '')) || 0;
      loanAmount = currentLoan + cashOut;
    } else {
      loanAmount = parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0;
    }

    if (loanAmount <= 0) return null;

    let loanType = formData.loanType;
    if (['heloc', 'heloan'].includes(formData.loanPurpose)) {
      loanType = formData.loanPurpose === 'heloc' ? 'HELOC' : 'HELOAN';
    } else {
      loanType = loanType || 'Conventional';
      const isJumbo = loanAmount > ORANGE_COUNTY_DATA.conformingLimit;
      if (isJumbo && loanType === 'Conventional') {
        loanType = 'Jumbo';
      }
    }

    const selectedLoanPurpose = formData.loanPurpose;
    const availablePrograms = selectedLoanPurpose && LOAN_PROGRAMS[selectedLoanPurpose as keyof typeof LOAN_PROGRAMS]
      ? LOAN_PROGRAMS[selectedLoanPurpose as keyof typeof LOAN_PROGRAMS].programs
      : ['Conventional Refi', 'HELOC', 'HELOAN', 'Cash-Out Refi'];

    const results: CalculatorResults = {
      availablePrograms,
      loanType: loanType || 'Inquiry',
      isJumbo: loanAmount > ORANGE_COUNTY_DATA.conformingLimit
    };

    setCalculatorResults(results);
    return results;
  }, [formData.loanPurpose, formData.currentLoanAmount, formData.cashOutAmount, formData.loanAmount, formData.loanType]);

  useEffect(() => {
    const hasRequiredFields =
      (formData.loanPurpose === 'refinance' && formData.currentLoanAmount) ||
      (formData.loanPurpose === 'cash-out' && formData.currentLoanAmount) ||
      (formData.loanPurpose && !['refinance', 'cash-out'].includes(formData.loanPurpose) && formData.loanAmount);

    if (hasRequiredFields && (currentStep >= 2 || showSuccess === false)) {
      calculateMortgageDetails();
    }
  }, [formData.loanAmount, formData.homeValue, formData.loanPurpose, formData.currentLoanAmount, formData.currentRate, formData.cashOutAmount, formData.loanType, currentStep, showSuccess, calculateMortgageDetails]);

  const handleInputChange = (field: string, value: string) => {
    if (field === 'loanPurpose' && value === 'investment') {
      window.location.href = '/loan-programs/non-qm-loans';
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedToStep2 = () => formData.loanPurpose && formData.timeline;

  const canProceedToStep3 = () => {
    if (!['heloc', 'heloan'].includes(formData.loanPurpose) && !formData.loanType) return false;
    if (formData.loanPurpose === 'refinance') {
      return formData.currentLoanAmount && formData.currentRate && formData.homeValue;
    } else if (formData.loanPurpose === 'cash-out') {
      return formData.currentLoanAmount && formData.currentRate && formData.cashOutAmount && formData.homeValue;
    } else {
      return formData.loanAmount && formData.homeValue;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const results = calculateMortgageDetails();
      const formData_submit = new FormData();
      formData_submit.append('full_name', `${formData.firstName} ${formData.lastName}`);
      formData_submit.append('email', formData.email);
      formData_submit.append('phone', formData.phone);
      formData_submit.append('city', formData.city);
      formData_submit.append('loan_purpose', formData.loanPurpose || 'inquiry');
      formData_submit.append('timeline', formData.timeline);
      formData_submit.append('loan_amount', formData.loanAmount || 'N/A');
      formData_submit.append('home_value', formData.homeValue || 'N/A');
      formData_submit.append('additional_info', formData.additionalInfo || '');
      formData_submit.append('loan_type', results?.loanType || 'N/A');
      formData_submit.append('_subject', `Premium Quote Request - ${formData.firstName} ${formData.lastName}`);

      await fetch('/api/contact', {
        method: 'POST',
        body: formData_submit,
        headers: { 'Accept': 'application/json' }
      });

      try { gtagSendEvent(); } catch (e) {}
      try {
        fbTrack('Lead', {
          content_name: 'Premium Contact Form',
          content_category: 'mortgage_inquiry',
          value: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0,
          currency: 'USD'
        });
      } catch (e) {}

      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsSubmitting(false);
  };

  // --- Components for the Form ---

  const FloatingLabelInput = ({ label, value, onChange, placeholder, type = "text" }: any) => {
    const isFocused = focusedField === label;
    const hasValue = value && value.length > 0;
    
    return (
      <div className="relative mb-6 group">
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusField(label)}
          onBlur={() => setFocusField(null)}
          className={`
            block w-full px-4 py-4 bg-slate-50 border-b-2 
            ${isFocused ? 'border-blue-600' : 'border-slate-300'} 
            text-slate-900 placeholder-transparent focus:outline-none transition-all duration-300
            rounded-t-lg hover:bg-slate-100
          `}
          placeholder={placeholder}
          id={label}
        />
        <label
          htmlFor={label}
          className={`
            absolute left-4 transition-all duration-300 pointer-events-none
            ${(isFocused || hasValue) 
              ? '-top-2.5 text-xs text-blue-600' 
              : 'top-4 text-slate-500'}
          `}
        >
          {label}
        </label>
        <div className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-500 ease-out ${isFocused ? 'w-full' : 'w-0'}`} />
      </div>
    );
  };

  const RadioCard = ({ title, description, value, current, onClick }: any) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(value)}
      className={`
        cursor-pointer p-4 rounded-xl border transition-all duration-300 relative overflow-hidden
        ${current === value 
          ? 'bg-blue-50 border-blue-600 shadow-md' 
          : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'}
      `}
    >
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h4 className={`font-semibold mb-1 ${current === value ? 'text-blue-700' : 'text-slate-900'}`}>{title}</h4>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
        {current === value && (
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="bg-blue-600 rounded-full p-1"
          >
            <Check className="w-3 h-3 text-white" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  if (showSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-blue-100 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm"
        >
          <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
        </motion.div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Mo Abdel will personally review your details and prepare a custom quote strategy within 24 hours.
        </p>
        <button 
          onClick={() => { setShowSuccess(false); setCurrentStep(1); setFormData({ ...formData, loanAmount: '', city: '' }); }}
          className="text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4"
        >
          Start a new quote
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Floating Card Container */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: "33%" }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <motion.span 
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-blue-600 font-medium tracking-wider text-sm uppercase"
              >
                Step 0{currentStep}
              </motion.span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {currentStep === 1 && "Location & Goals"}
                {currentStep === 2 && "Loan Details"}
                {currentStep === 3 && "Final Details"}
              </h2>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${step === currentStep ? 'bg-blue-600' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm text-slate-500 mb-3">Which city are you looking in? (Optional)</label>
                    <div className="relative">
                      <select
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 appearance-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none"
                      >
                        <option value="">Select a city...</option>
                        {ORANGE_COUNTY_CITIES.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-500 mb-3">What is your primary goal?</label>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(LOAN_PROGRAMS).map(([key, program]) => (
                        <RadioCard 
                          key={key} 
                          title={program.title} 
                          description={program.description} 
                          value={key} 
                          current={formData.loanPurpose} 
                          onClick={(val: string) => handleInputChange('loanPurpose', val)} 
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-500 mb-3">When do you need funds?</label>
                    <div className="relative">
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-3 appearance-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none"
                      >
                        <option value="">Select timeline...</option>
                        <option value="asap">ASAP (within 2 weeks)</option>
                        <option value="30-days">Within 30 days</option>
                        <option value="60-days">Within 60 days</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90" />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {!['heloc', 'heloan'].includes(formData.loanPurpose) && (
                    <div className="mb-6">
                      <label className="block text-sm text-slate-500 mb-3">Preferred Loan Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Conventional', 'FHA', 'VA', 'Jumbo'].map(type => (
                          <div 
                            key={type}
                            onClick={() => handleInputChange('loanType', type)}
                            className={`
                              cursor-pointer p-3 rounded-lg border text-center transition-all
                              ${formData.loanType === type 
                                ? 'bg-blue-50 border-blue-600 text-blue-700' 
                                : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-400'}
                            `}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.loanPurpose === 'refinance' && (
                    <>
                      <FloatingLabelInput label="Current Home Value" placeholder="$950,000" value={formData.homeValue} onChange={(e: any) => handleInputChange('homeValue', e.target.value.replace(/[^0-9]/g, ''))} />
                      <FloatingLabelInput label="Current Loan Balance" placeholder="$650,000" value={formData.currentLoanAmount} onChange={(e: any) => handleInputChange('currentLoanAmount', e.target.value.replace(/[^0-9]/g, ''))} />
                      <FloatingLabelInput label="Current Rate (%)" placeholder="6.5" value={formData.currentRate} onChange={(e: any) => handleInputChange('currentRate', e.target.value)} />
                    </>
                  )}

                  {formData.loanPurpose === 'cash-out' && (
                    <>
                      <FloatingLabelInput label="Current Home Value" placeholder="$950,000" value={formData.homeValue} onChange={(e: any) => handleInputChange('homeValue', e.target.value.replace(/[^0-9]/g, ''))} />
                      <FloatingLabelInput label="Current Loan Balance" placeholder="$650,000" value={formData.currentLoanAmount} onChange={(e: any) => handleInputChange('currentLoanAmount', e.target.value.replace(/[^0-9]/g, ''))} />
                      <FloatingLabelInput label="Cash Out Amount" placeholder="$100,000" value={formData.cashOutAmount} onChange={(e: any) => handleInputChange('cashOutAmount', e.target.value.replace(/[^0-9]/g, ''))} />
                    </>
                  )}

                  {!['refinance', 'cash-out'].includes(formData.loanPurpose) && (
                    <>
                      <FloatingLabelInput label="Estimated Property Value" placeholder="$800,000" value={formData.homeValue} onChange={(e: any) => handleInputChange('homeValue', e.target.value.replace(/[^0-9]/g, ''))} />
                      <FloatingLabelInput label="Desired Loan Amount" placeholder="$600,000" value={formData.loanAmount} onChange={(e: any) => handleInputChange('loanAmount', e.target.value.replace(/[^0-9]/g, ''))} />
                    </>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FloatingLabelInput label="First Name" placeholder="John" value={formData.firstName} onChange={(e: any) => handleInputChange('firstName', e.target.value)} />
                    <FloatingLabelInput label="Last Name" placeholder="Doe" value={formData.lastName} onChange={(e: any) => handleInputChange('lastName', e.target.value)} />
                  </div>
                  <FloatingLabelInput label="Email Address" type="email" placeholder="john@example.com" value={formData.email} onChange={(e: any) => handleInputChange('email', e.target.value)} />
                  <FloatingLabelInput label="Phone Number" type="tel" placeholder="(949) 555-0123" value={formData.phone} onChange={(e: any) => handleInputChange('phone', e.target.value)} />
                  <div className="relative mb-6">
                    <textarea
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      className="block w-full px-4 py-4 bg-slate-50 border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all rounded-t-lg resize-none"
                      placeholder="Any specific questions or concerns?"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={nextStep}
                  disabled={currentStep === 1 ? !canProceedToStep2() : !canProceedToStep3()}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center hover:bg-blue-700"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-green-200 disabled:opacity-70 flex items-center min-w-[160px] justify-center hover:bg-green-700"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Get My Quote'
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}