'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Shield } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { fbTrack } from '@/components/FacebookPixel';

type FieldType = 'text' | 'email' | 'tel' | 'select' | 'textarea';

export type LeadMagnetField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
};

export function LeadMagnetForm(props: {
  magnetName: string;
  subject: string;
  loanPurpose: 'purchase' | 'heloc' | 'cashout' | 'refinance' | 'investment' | 'inquiry';
  fields: LeadMagnetField[];
}) {
  const { magnetName, subject, loanPurpose, fields } = props;

  const initialState = useMemo(() => {
    const state: Record<string, string> = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    for (const f of fields) state[f.name] = '';
    return state;
  }, [fields]);

  const [data, setData] = useState<Record<string, string>>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sourceUrl, setSourceUrl] = useState<string>('');

  useEffect(() => {
    try {
      setSourceUrl(window.location.href);
    } catch {
      // ignore
    }
  }, []);

  const onChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const fd = new FormData();
      fd.append('full_name', `${data.firstName} ${data.lastName}`.trim());
      fd.append('email', data.email);
      fd.append('phone', data.phone);
      fd.append('loan_purpose', loanPurpose);

      // Lead magnet metadata
      fd.append('lead_magnet', magnetName);
      if (sourceUrl) fd.append('source_url', sourceUrl);

      // Pass all tool fields through for easy follow-up
      const toolSummaryLines: string[] = [];
      for (const f of fields) {
        const val = (data[f.name] || '').trim();
        if (!val) continue;
        fd.append(f.name, val);
        toolSummaryLines.push(`${f.label}: ${val}`);
      }

      fd.append(
        'additional_info',
        [
          `Lead magnet: ${magnetName}`,
          sourceUrl ? `Source: ${sourceUrl}` : '',
          toolSummaryLines.length ? '\n--- Details ---\n' + toolSummaryLines.join('\n') : '',
        ]
          .filter(Boolean)
          .join('\n')
      );

      fd.append('_subject', subject);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      // Safe tracking call
      try {
        fbTrack('Lead', {
          content_name: magnetName,
          content_category: 'lead_magnet',
          value: 0,
          currency: 'USD',
        });
      } catch {
        // ignore
      }

      setShowSuccess(true);
      setData(initialState);
    } catch (err) {
      console.error(err);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-slate-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request received</h3>
        <p className="text-slate-600 mb-6">
          Mo will review your info and follow up within 1 business day.
        </p>
        <Button onClick={() => setShowSuccess(false)} className="bg-blue-600 hover:bg-blue-700">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Get it sent to you</h2>
      <p className="text-slate-600 mb-6">
        Share a few details and I will send your personalized summary and next steps.
      </p>

      {showError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or call (949) 822-9662.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
            <input
              type="text"
              required
              value={data.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
            <input
              type="text"
              required
              value={data.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
          <input
            type="tel"
            required
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {fields.map((f) => {
          if (f.type === 'select') {
            return (
              <div key={f.name}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {f.label}
                  {f.required ? ' *' : ''}
                </label>
                <select
                  required={Boolean(f.required)}
                  value={data[f.name] || ''}
                  onChange={(e) => onChange(f.name, e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  {(f.options || []).map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (f.type === 'textarea') {
            return (
              <div key={f.name}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {f.label}
                  {f.required ? ' *' : ''}
                </label>
                <textarea
                  rows={4}
                  required={Boolean(f.required)}
                  value={data[f.name] || ''}
                  onChange={(e) => onChange(f.name, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            );
          }

          return (
            <div key={f.name}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {f.label}
                {f.required ? ' *' : ''}
              </label>
              <input
                type={f.type === 'tel' ? 'tel' : 'text'}
                required={Boolean(f.required)}
                value={data[f.name] || ''}
                onChange={(e) => onChange(f.name, e.target.value)}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          );
        })}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Send my free summary'}
        </Button>

        <p className="text-xs text-slate-500 mt-2 text-center">
          By submitting, you consent to be contacted about mortgage services. Your info is never sold.
        </p>
      </form>
    </div>
  );
}

