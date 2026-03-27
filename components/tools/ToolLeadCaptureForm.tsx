'use client';

import React, { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import InquiryTermsConsent from '@/components/ui/InquiryTermsConsent';
import { appendTermsConsentToFormData } from '@/lib/terms-consent';
import { getResponseErrorMessage } from '@/lib/api-client';
import { qualify } from '@/lib/leadQualification';

interface ToolLeadCaptureFormProps {
  source: string;
  toolData: Record<string, unknown>;
  headline?: string;
  subtext?: string;
  buttonText?: string;
  onSuccess: () => void;
}

const TIMELINE_OPTIONS = [
  { value: '', label: 'Select your timeline' },
  { value: 'ready_now', label: 'Ready now' },
  { value: '1_3_months', label: '1-3 months' },
  { value: '3_6_months', label: '3-6 months' },
  { value: 'researching', label: 'Just researching' },
] as const;

export default function ToolLeadCaptureForm({
  source,
  toolData,
  headline = 'Get Your Free Personalized Report',
  subtext = 'Enter your info below to unlock your full results and receive expert guidance.',
  buttonText = 'Unlock My Report',
  onSuccess,
}: ToolLeadCaptureFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('');
  const [propertyState, setPropertyState] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = fullName.trim() !== '' && email.trim() !== '' && termsChecked && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    setError('');

    try {
      const notes = JSON.stringify({
        timeline: timeline || 'not_specified',
        toolData,
        priority: timeline === 'ready_now' ? 'high' : 'normal',
      });

      const formDataSubmit = new FormData();
      formDataSubmit.append('full_name', fullName.trim());
      formDataSubmit.append('email', email.trim());
      formDataSubmit.append('phone', phone.trim() || '');
      formDataSubmit.append('source', source);
      formDataSubmit.append('notes', notes);
      formDataSubmit.append('property_state', propertyState || '');
      formDataSubmit.append('_subject', `Tool Lead - ${source} - ${fullName.trim()}`);

      const qual = qualify({
        state: propertyState || undefined,
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
        const msg = await getResponseErrorMessage(
          response,
          'Something went wrong. Please try again or call us directly.'
        );
        setError(msg);
        return;
      }

      // Fire GA event
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as unknown as Record<string, Function>).gtag('event', 'tool_lead_capture', {
          event_category: 'lead',
          event_label: source,
          value: timeline === 'ready_now' ? 10 : 1,
        });
      }

      // Fire FB Pixel event
      if (typeof window !== 'undefined' && 'fbq' in window) {
        (window as unknown as Record<string, Function>).fbq('track', 'Lead', {
          content_name: source,
          content_category: 'tool_lead',
        });
      }

      onSuccess();
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
      <CardHeader>
        <CardTitle className="text-xl">{headline}</CardTitle>
        {subtext && <p className="text-sm text-slate-600">{subtext}</p>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="lead-name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lead-name"
              type="text"
              placeholder="John Smith"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="lead-email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lead-email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          {/* Phone (optional) */}
          <div className="space-y-1.5">
            <Label htmlFor="lead-phone">Phone</Label>
            <Input
              id="lead-phone"
              type="tel"
              placeholder="(949) 555-0100"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
            <p className="text-xs text-slate-500">
              Add your phone for a same-day callback with your personalized rate
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-1.5">
            <Label htmlFor="lead-timeline">Timeline</Label>
            <select
              id="lead-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Property State */}
          <div className="space-y-1.5">
            <Label htmlFor="lead-property-state">Property State</Label>
            <select
              id="lead-property-state"
              value={propertyState}
              onChange={(e) => setPropertyState(e.target.value)}
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="WA">Washington</option>
              <option value="Other">Other State</option>
            </select>
            {propertyState === 'Other' && (
              <p className="text-sm text-blue-700 bg-blue-50 rounded-md p-3 mt-2">
                Mo Abdel is licensed in California and Washington and specializes in loans from $100K–$3M. If your needs fall outside this range, Mo will connect you with the right resource.
              </p>
            )}
          </div>

          {/* Terms Consent */}
          <InquiryTermsConsent checked={termsChecked} onCheckedChange={setTermsChecked} />

          {/* Error */}
          {error && (
            <p className="rounded-md bg-red-50 p-3 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? 'Submitting\u2026' : buttonText}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
