'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import InquiryTermsConsent from '@/components/ui/InquiryTermsConsent';
import { ArrowRight, Shield } from "lucide-react";
import { fbTrack } from '@/components/FacebookPixel';
import { getResponseErrorMessage } from '@/lib/api-client';
import { appendTermsConsentToFormData } from '@/lib/terms-consent';
import { qualify } from '@/lib/leadQualification';

// Google Ads conversion tracking

export default function QuickQuote() {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanPurpose: "",
    loanAmount: "",
    timeline: "",
    additionalInfo: "",
    propertyState: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const formDataSubmit = new FormData();
      formDataSubmit.append('full_name', `${formData.firstName} ${formData.lastName}`);
      formDataSubmit.append('email', formData.email);
      formDataSubmit.append('phone', formData.phone);
      formDataSubmit.append('loan_purpose', formData.loanPurpose || 'inquiry');
      formDataSubmit.append('loan_amount', formData.loanAmount || 'Not specified');
      formDataSubmit.append('timeline', formData.timeline || 'Not specified');
      formDataSubmit.append('additional_info', formData.additionalInfo || '');
      formDataSubmit.append('property_state', formData.propertyState || '');
      formDataSubmit.append('_subject', `Quick Quote - ${formData.firstName} ${formData.lastName}`);

      const qual = qualify({
        loanAmount: parseFloat(formData.loanAmount.replace(/[^0-9.]/g, '')) || undefined,
        state: formData.propertyState || undefined,
      });
      formDataSubmit.append('qualification_status', qual.status);
      if (qual.reason) formDataSubmit.append('out_of_scope_reason', qual.reason);

      appendTermsConsentToFormData(formDataSubmit);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataSubmit,
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(
          await getResponseErrorMessage(
            response,
            'Failed to submit your quote request. Please try again.'
          )
        );
      }
      
      // Track Google Ads conversion
      gtagSendEvent();
      
      // Track Facebook Pixel conversion
      fbTrack('Lead', {
        content_name: 'Quick Quote Submission',
        content_category: 'rate_quote',
        value: 0,
        currency: 'USD'
      });
      
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        loanPurpose: "",
        loanAmount: "",
        timeline: "",
        additionalInfo: "",
        propertyState: ""
      });
      setTermsConsent(false);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to submit your quote request. Please try again.'
      );
      setTimeout(() => setErrorMessage(null), 5000);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (showSuccess) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You for Your Inquiry!</h3>
              <p className="text-slate-600 mb-6">
                We received your information and will be reaching out within 1 business day with your personalized loan quote. 
                Mo will personally review your details to find competitive loan options suited to your needs.
              </p>
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-slate-900 hover:bg-slate-800"
              >
                Submit Another Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Personalized pricing Quote
          </h2>
          <p className="text-xl text-slate-600">
            Takes 60 seconds • No impact to your credit • Free quote, no obligation
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-slate-600 mb-6">
            Fill out the form below and I'll get back to you within 1 business day with a personalized loan quote.
          </p>
          
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">
                {errorMessage}
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  id="first-name"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="last-name"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                id="email-address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone-number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(949) 555-0123"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="loan-purpose" className="block text-sm font-medium text-slate-700 mb-2">
                  Loan Purpose
                </label>
                <select
                  id="loan-purpose"
                  value={formData.loanPurpose}
                  onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select purpose</option>
                  <option value="purchase">Home Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="cash-out">Cash-Out Refinance</option>
                  <option value="heloc">HELOC</option>
                  <option value="investment">Investment Property</option>
                </select>
              </div>
              <div>
                <label htmlFor="loan-amount" className="block text-sm font-medium text-slate-700 mb-2">
                  Estimated Loan Amount
                </label>
                <input
                  id="loan-amount"
                  type="text"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$500,000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="propertyState" className="block text-sm font-medium text-slate-700 mb-1">
                Property State
              </label>
              <select
                id="propertyState"
                value={formData.propertyState}
                onChange={(e) => handleInputChange('propertyState', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="WA">Washington</option>
                <option value="Other">Other State</option>
              </select>
              {formData.propertyState === 'Other' && (
                <p className="text-sm text-blue-700 bg-blue-50 rounded-md p-3 mt-2">
                  Mo Abdel is licensed in California and Washington and specializes in loans from $100K–$3M. If your needs fall outside this range, Mo will connect you with the right resource.
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="30-days">Within 30 days</option>
                <option value="60-days">Within 60 days</option>
                <option value="90-days">Within 90 days</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="additional-info" className="block text-sm font-medium text-slate-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additional-info"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any additional details about your mortgage needs..."
              ></textarea>
            </div>

            <InquiryTermsConsent checked={termsConsent} onCheckedChange={setTermsConsent} />

            <Button
              type="submit"
              disabled={isSubmitting || !termsConsent}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Get My pricing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-3">
            This is not a loan application or commitment to lend. All loans subject to credit approval. Not all applicants will qualify. Mo Abdel NMLS #1426884 | Lumin Lending NMLS #2716106 | DRE #02291443. Equal Housing Lender.
          </p>
        </div>
      </div>
    </section>
  );
}
