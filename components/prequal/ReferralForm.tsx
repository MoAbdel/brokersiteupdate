'use client';

import React, { useState } from 'react';
import { referralReasonText } from '@/lib/referral-reason-text';
import InquiryTermsConsent from '@/components/ui/InquiryTermsConsent';
import { appendTermsConsentToFormData } from '@/lib/terms-consent';
import { getResponseErrorMessage } from '@/lib/api-client';
import type { PrequalInput, PrequalFailReason } from '@/lib/leadQualification';

interface ReferralFormProps {
  prequalInput: PrequalInput;
  referralReasons: PrequalFailReason[];
  className?: string;
}

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function bucketHome(v: number): string {
  if (v < 500_000) return '<500K';
  if (v < 1_000_000) return '500K-1M';
  if (v < 2_000_000) return '1M-2M';
  if (v <= 5_000_000) return '2M-5M';
  return '>5M';
}

function bucketLoan(v: number): string {
  if (v < 250_000) return '<250K';
  if (v < 750_000) return '250-750K';
  if (v < 2_000_000) return '750K-2M';
  if (v <= 3_500_000) return '2M-3.5M';
  return '>3.5M';
}

export default function ReferralForm({
  prequalInput,
  referralReasons,
  className = '',
}: ReferralFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [termsConsent, setTermsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) { setErrorMessage('Please enter your name.'); return; }
    if (!email.trim()) { setErrorMessage('Please enter your email.'); return; }
    if (!phone.trim()) { setErrorMessage('Please enter your phone number.'); return; }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('full_name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('phone', phone.trim());
      formData.append('additional_info', notes.trim());
      formData.append('case_type', 'referral');
      formData.append('home_value', dollar.format(prequalInput.homeValue));
      formData.append('desired_loan', dollar.format(prequalInput.desiredLoan));
      formData.append('current_mortgage', dollar.format(prequalInput.currentMortgage));
      formData.append('product', prequalInput.product);
      formData.append('_subject', `Referral Lead — ${prequalInput.product} ${dollar.format(prequalInput.homeValue)}`);
      appendTermsConsentToFormData(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(
          await getResponseErrorMessage(
            response,
            'Unable to submit your request right now. Please try again later.'
          )
        );
      }

      try {
        window.gtag?.('event', 'referral_form_submitted', {
          product: prequalInput.product,
          home_value_bucket: bucketHome(prequalInput.homeValue),
          loan_amount_bucket: bucketLoan(prequalInput.desiredLoan),
        });
      } catch {
        // analytics best-effort
      }

      setShowSuccess(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your request right now. Please try again later.'
      );
    }
    setIsSubmitting(false);
  };

  if (showSuccess) {
    return (
      <div className={`border border-green-200 rounded-lg p-6 bg-green-50 ${className}`} data-testid="referral-success">
        <h2 className="text-xl font-semibold text-green-900">Details shared</h2>
        <p className="mt-2 text-green-800">
          {"We've shared your details with a specialist partner who handles loans in this range. Expect a call within 1\u20132 business days. If you need immediate assistance, call or text (949) 579-2057."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 rounded-lg p-6 bg-white space-y-4 ${className}`}
      data-testid="referral-form"
      aria-labelledby="referral-heading"
    >
      <h2 id="referral-heading" className="text-xl font-semibold">
        Your loan size is outside our in-house range, but we can connect you with a specialist partner.
      </h2>

      {referralReasons.length > 0 && (
        <p className="text-sm text-slate-600" data-testid="referral-reason">
          {referralReasonText(referralReasons[0])}
        </p>
      )}

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Full name</span>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
          placeholder="Mo Abdel"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Phone</span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          inputMode="tel"
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
          placeholder="(949) 555-0123"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">
          {"Anything else we should know? "}
          <span className="font-normal text-slate-500">(optional)</span>
        </span>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1 w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
          placeholder="Tell us about your situation..."
        />
      </label>

      <InquiryTermsConsent checked={termsConsent} onCheckedChange={setTermsConsent} />

      {errorMessage && <p role="alert" className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={isSubmitting || !termsConsent}
        className="w-full bg-blue-700 text-white font-semibold rounded px-4 py-2 hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Share My Details'}
      </button>
    </form>
  );
}
