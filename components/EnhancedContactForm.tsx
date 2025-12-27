'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calculator, ArrowRight, Shield, ChevronRight, ChevronLeft, MapPin, DollarSign, Home, Calendar, User, Phone, Mail, FileText } from "lucide-react";
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
  // Step 1: Location & Purpose
  city: string;
  loanPurpose: string;
  timeline: string;

  // Step 2: Loan Details
  loanAmount: string;
  homeValue: string;
  downPayment: string;
  // Refinance specific fields
  currentLoanAmount: string;
  currentRate: string;
  cashOutAmount: string;
  loanType: string;

  // Step 3: Contact Info
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

export default function EnhancedContactForm() {
  // Google Ads conversion tracking function
  const gtagSendEvent = (url?: string) => {
    const callback = function () {
      if (typeof url === 'string') {
        window.location.href = url;
      }
    };
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ads_conversion_Contact_Us_1', {
        'event_callback': callback,
        'event_timeout': 2000,
      });
    }
    return false;
  };

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
  const [showError, setShowError] = useState(false);

  // Calculate mortgage details
  const calculateMortgageDetails = () => {
    let loanAmount = 0;

    // Handle different loan purposes
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

    // Determine loan type 
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

    // Get available programs
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
  };

  // Update calculator when relevant fields change
  useEffect(() => {
    const hasRequiredFields =
      (formData.loanPurpose === 'refinance' && formData.currentLoanAmount) ||
      (formData.loanPurpose === 'cash-out' && formData.currentLoanAmount) ||
      (formData.loanPurpose && !['refinance', 'cash-out'].includes(formData.loanPurpose) && formData.loanAmount);

    if (hasRequiredFields && (currentStep >= 2 || showSuccess === false)) {
      calculateMortgageDetails();
    }
  }, [formData.loanAmount, formData.homeValue, formData.loanPurpose, formData.currentLoanAmount, formData.currentRate, formData.cashOutAmount, formData.loanType]);

  const handleInputChange = (field: string, value: string) => {
    // Redirect to non-QM loan page when investment is selected
    if (field === 'loanPurpose' && value === 'investment') {
      window.location.href = '/loan-programs/non-qm-loans';
      return;
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedToStep2 = () => {
    return formData.loanPurpose && formData.timeline;
  };

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

      const payload = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        loan_purpose: formData.loanPurpose || 'inquiry',
        timeline: formData.timeline,
        loan_amount: formData.loanAmount || 'N/A',
        home_value: formData.homeValue || 'N/A',
        additional_info: formData.additionalInfo || '',
        loan_type: results?.loanType || 'N/A',
        _subject: `Enhanced Contact Form - ${formData.firstName} ${formData.lastName} (${formData.city})`,
      };

      const response = await axios.post('https://formspree.io/f/mldpgrok', payload, {
        headers: {
          'Accept': 'application/json'
        }
      });

      // axios throws on non-2xx by default, but let's be explicit if needed
      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to submit contact form');
      }

      // Safe tracking calls
      try {
        gtagSendEvent();
      } catch (e) {
        console.warn('Google Ads tracking failed:', e);
      }

      try {
        fbTrack('Lead', {
          content_name: 'Enhanced Contact Form Submission',
          content_category: 'mortgage_inquiry',
          value: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || 0,
          currency: 'USD'
        });
      } catch (e) {
        console.warn('Facebook Pixel tracking failed:', e);
      }

      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting enhanced contact form:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
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
    setCurrentStep(1);
    setCalculatorResults(null);
    setShowSuccess(false);
    setShowError(false);
  };

  if (showSuccess) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You for Your Detailed Information!</h3>

          {calculatorResults && (
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Your Request Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan Type:</span>
                  <span className="font-semibold">{calculatorResults.loanType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">City:</span>
                  <span className="font-semibold">{formData.city || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Timeline:</span>
                  <span className="font-semibold">{formData.timeline}</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-slate-600 mb-6">
            Mo will personally review your information and contact you within 1 business day with:
          </p>
          <ul className="text-left text-slate-700 mb-6 space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Personalized loan quotes for your situation</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Multiple program options and comparisons</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">•</span>
              <span>Pre-approval process and next steps</span>
            </li>
          </ul>

          <Button
            onClick={resetForm}
            className="bg-blue-600 hover:bg-blue-700 mb-4"
          >
            Submit Another Quote Request
          </Button>

          <p className="text-sm text-slate-500">
            Need immediate assistance? Call Mo directly at{' '}
            <a href="tel:(949) 537-2357" className="text-blue-600 hover:text-blue-700 font-semibold">
              (949) 537-2357
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Calculator className="w-6 h-6 mr-3" />
            <span>Get Your Personalized Quote</span>
          </div>
          <Badge variant="secondary" className="bg-blue-800 text-blue-100">
            Step {currentStep} of 3
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {showError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">
              There was an error submitting your request. Please try again or call us directly at (949) 537-2357.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Location & Purpose</h3>
                <p className="text-slate-600">Tell us about your Orange County mortgage needs</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Orange County City (Optional)
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your city</option>
                  {ORANGE_COUNTY_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                  <option value="other">Other Orange County City</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Purpose *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(LOAN_PROGRAMS).map(([key, program]) => (
                    <label
                      key={key}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${formData.loanPurpose === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-300 hover:border-slate-400'
                        }`}
                    >
                      <input
                        type="radio"
                        name="loanPurpose"
                        value={key}
                        checked={formData.loanPurpose === key}
                        onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">{program.title}</div>
                        <div className="text-sm text-slate-600">{program.description}</div>
                      </div>
                      {formData.loanPurpose === key && (
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">When do you need this?</option>
                  <option value="asap">ASAP (within 2 weeks)</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="60-days">Within 60 days</option>
                  <option value="90-days">Within 90 days</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Loan Details</h3>
                <p className="text-slate-600">Provide your loan specifics for a personalized lookup</p>
              </div>

              {/* Loan Type Selection - Hide for HELOC and HELOAN */}
              {!['heloc', 'heloan'].includes(formData.loanPurpose) && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Type *
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => handleInputChange('loanType', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select loan type</option>
                    <option value="Conventional">Conventional</option>
                    <option value="FHA">FHA</option>
                    <option value="VA">VA</option>
                    <option value="Jumbo">Jumbo</option>
                  </select>
                </div>
              )}

              {/* Refinance Fields */}
              {formData.loanPurpose === 'refinance' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Home Value *
                    </label>
                    <input
                      type="text"
                      value={formData.homeValue}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('homeValue', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('homeValue', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="950,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Loan Balance *
                    </label>
                    <input
                      type="text"
                      value={formData.currentLoanAmount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('currentLoanAmount', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('currentLoanAmount', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="650,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Interest Pricing (%) *
                    </label>
                    <input
                      type="text"
                      value={formData.currentRate}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9.]/g, '');
                        handleInputChange('currentRate', value);
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="7.25"
                      required
                    />
                  </div>
                </>
              )}

              {/* Cash-Out Refinance Fields */}
              {formData.loanPurpose === 'cash-out' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Home Value *
                    </label>
                    <input
                      type="text"
                      value={formData.homeValue}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('homeValue', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('homeValue', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="950,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Loan Balance *
                    </label>
                    <input
                      type="text"
                      value={formData.currentLoanAmount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('currentLoanAmount', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('currentLoanAmount', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="650,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Interest Pricing (%) *
                    </label>
                    <input
                      type="text"
                      value={formData.currentRate}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9.]/g, '');
                        handleInputChange('currentRate', value);
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="7.25"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Desired Cash-Out Amount *
                    </label>
                    <input
                      type="text"
                      value={formData.cashOutAmount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('cashOutAmount', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('cashOutAmount', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="100,000"
                      required
                    />
                  </div>
                </>
              )}

              {/* Other Loan Types (HELOC, Investment, etc.) */}
              {!['purchase', 'refinance', 'cash-out'].includes(formData.loanPurpose) && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Property Value *
                    </label>
                    <input
                      type="text"
                      value={formData.homeValue}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('homeValue', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('homeValue', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="750,000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Desired Loan Amount *
                    </label>
                    <input
                      type="text"
                      value={formData.loanAmount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        if (value) {
                          handleInputChange('loanAmount', parseInt(value).toLocaleString());
                        } else {
                          handleInputChange('loanAmount', '');
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="600,000"
                      required
                    />
                  </div>
                </>
              )}


            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
                <p className="text-slate-600">Almost done! How can Mo reach you?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(949) 123-4567"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific questions, credit concerns, or special circumstances..."
                />
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                className="flex items-center text-slate-600 hover:text-slate-900"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={currentStep === 1 ? !canProceedToStep2() : !canProceedToStep3()}
                className="ml-auto bg-blue-600 hover:bg-blue-700"
              >
                Next Step
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto bg-green-600 hover:bg-green-700 text-white px-8"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Quote'}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}