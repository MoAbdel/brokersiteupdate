'use client';

import React, { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

import { TERMS_SERVICES_COPY, TERMS_SERVICES_LABEL, TERMS_SERVICES_TITLE } from '@/lib/terms-consent';
import { cn } from '@/lib/utils';

type InquiryTermsConsentProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  className?: string;
  copyClassName?: string;
  linkClassName?: string;
  checkboxClassName?: string;
};

export default function InquiryTermsConsent({
  checked,
  onCheckedChange,
  id,
  className,
  copyClassName,
  linkClassName,
  checkboxClassName,
}: InquiryTermsConsentProps) {
  const generatedId = useId();
  const inputId = id || `terms-consent-${generatedId}`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <div className={cn('mt-4', className)}>
        <div className="flex items-start gap-2">
          <input
            id={inputId}
            type="checkbox"
            checked={checked}
            onChange={(event) => onCheckedChange(event.target.checked)}
            required
            className={cn('mt-1 shrink-0', checkboxClassName)}
          />
          <div className={cn('text-xs text-slate-500', copyClassName)}>
            <label htmlFor={inputId}>I agree to the </label>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className={cn('underline underline-offset-2 hover:text-slate-700', linkClassName)}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              {TERMS_SERVICES_LABEL}
            </button>
            <span>.</span>
          </div>
        </div>
      </div>

      {isOpen && typeof document !== 'undefined'
        ? createPortal(
            <div className="fixed inset-0 z-[220] flex items-center justify-center p-4">
              <button
                type="button"
                className="absolute inset-0 bg-slate-900/70"
                onClick={() => setIsOpen(false)}
                aria-label="Close terms and services"
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${inputId}-title`}
                className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close terms and services"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 id={`${inputId}-title`} className="pr-10 text-xl font-bold text-slate-900">
                  {TERMS_SERVICES_TITLE}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{TERMS_SERVICES_COPY}</p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
