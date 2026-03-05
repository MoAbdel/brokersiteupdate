export const TERMS_CONSENT_FIELD = 'terms_consent';
export const TERMS_CONSENT_AT_FIELD = 'terms_consent_at';
export const TERMS_CONSENT_TEXT_FIELD = 'terms_consent_text';

export const TERMS_SERVICES_LABEL = 'terms and services';
export const TERMS_SERVICES_TITLE = 'Terms and Services';
export const TERMS_SERVICES_COPY =
  'By submitting this form, I authorize Mo Abdel / Lumin Lending, a licensed mortgage broker, to contact me at the phone number provided above via telephone calls and/or text messages, including automated, AI-assisted, or pre-recorded communications, regarding mortgage products and services. I understand that my consent is not a condition of receiving services and that I may opt out at any time by replying STOP to any text or requesting removal by phone. Message and data rates may apply.';

export const TERMS_SERVICES_REQUIRED_ERROR =
  'You must agree to the terms and services before submitting this inquiry.';

const TRUE_VALUES = new Set(['1', 'true', 'on', 'yes', 'checked']);

export function hasTermsConsent(value: unknown): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    return TRUE_VALUES.has(value.trim().toLowerCase());
  }

  return false;
}

export function getTermsConsentPayload(consentAt = new Date().toISOString()) {
  return {
    [TERMS_CONSENT_FIELD]: 'true',
    [TERMS_CONSENT_AT_FIELD]: consentAt,
    [TERMS_CONSENT_TEXT_FIELD]: TERMS_SERVICES_COPY,
  };
}

export function appendTermsConsentToFormData(
  formData: FormData,
  consentAt = new Date().toISOString()
) {
  const payload = getTermsConsentPayload(consentAt);

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return consentAt;
}
