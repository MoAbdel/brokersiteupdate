# Referral-Partner Off-Ramp UI — Design Spec

**Date:** 2026-04-15
**Slice:** 6 of 6 (ICP Pivot — Website Lead Targeting Fixes)
**Predecessor:** `docs/superpowers/specs/2026-04-15-prequalification-widget-design.md` (slice 5, shipped — introduced `case_type: 'referral'` flag + `isPrequalified()`)
**Source requirement:** `C:\Users\haithem\Downloads\website-lead-targeting-fixes.md` (Section 5 — "Option: Collect lead anyway for referral monetization")
**Status:** Draft, pending user review

## Context

Slice 5 gates `/contact` with a pre-qualification widget. Out-of-ICP users (home > $5M, HELOC > $750K, total loan > $3.5M) currently land on the same full `PremiumContactForm` with a referral-context heading and `case_type: 'referral'` in the submit payload. This works but forces referral users through a 3-step mortgage-application wizard they don't need — they're being handed off, not underwritten.

Slice 6 replaces the referral path's form with a lightweight 4-field form that captures contact info + a free-text note. The pre-qual widget's structured data (product, home value, desired loan, current mortgage) passes as hidden fields, so the broker has everything needed to triage manually. Leads still go to the same Formspree endpoint, tagged with `case_type: 'referral'` — no referral partner is wired yet; routing is manual until a partner relationship is established.

## Goals

1. Referral users complete a single-step, 30-second form instead of a 3-step wizard.
2. The broker receives the same structured data as before (hidden fields from the widget) plus contact info, tagged for easy inbox filtering.
3. The referral confirmation message sets clear expectations ("specialist partner will reach out within 1–2 business days").
4. Qualified path is completely unchanged — `PremiumContactForm` renders as before for `case_type: 'standard'`.

## Non-Goals

- Automated referral-partner routing (webhook, CRM, email forwarding). Deferred until a partner relationship exists — then it's a one-line routing change.
- New API route for referral leads. Same `/api/contact` endpoint; the `case_type` field is sufficient for inbox filtering.
- Referral tracking dashboard or analytics beyond the GA event.

## Architecture

### New component: `components/prequal/ReferralForm.tsx`

```ts
interface ReferralFormProps {
  prequalInput: PrequalInput;
  referralReasons: PrequalFailReason[];
  className?: string;
}
```

**Visible fields (4):**
- Full name (text, required)
- Email (email, required)
- Phone (tel, required)
- "Anything else we should know?" (textarea, optional)

**Hidden fields (auto-populated from `prequalInput`):**
- `home_value` — dollar-formatted
- `desired_loan` — dollar-formatted
- `product` — the `PrequalProduct` key
- `current_mortgage` — dollar-formatted
- `case_type` — always `'referral'`
- `_subject` — `'Referral Lead — [product] $[home_value]'` (differentiates in Formspree inbox from standard leads)

**Submit behavior:**
- POST FormData to `/api/contact` (same endpoint as `PremiumContactForm`)
- Append `terms_consent` via existing `appendTermsConsentToFormData()` helper (required by the API route's `hasTermsConsent` check)
- On success: replace form with inline confirmation message
- On error: show error message with retry affordance
- GA event `referral_form_submitted` with bucketed params: `{ product, home_value_bucket, loan_amount_bucket }` (same bucketing functions as `PrequalWidget`)

**Confirmation copy:**
> "We've shared your details with a specialist partner who handles loans in this range. Expect a call within 1–2 business days. If you need immediate assistance, call or text (949) 579-2057."

**Referral reason display:**
- Renders the first `PrequalFailReason` as plain-English text above the form fields (same `referralReasonText()` helper from `PremiumContactForm.tsx` — extract to a shared location or import)

### Modified file: `app/contact/ContactPageClient.tsx`

State machine change — `stage: 'form-referral'` render branch:

**Before (slice 5):**
```tsx
<PrequalSummaryChip ... />
<PremiumContactForm caseType="referral" initialValues={...} referralReasons={...} />
```

**After (slice 6):**
```tsx
<PrequalSummaryChip ... />
<ReferralForm prequalInput={prequalState.input} referralReasons={prequalState.result.reasons} />
```

`stage: 'form-qualified'` remains unchanged — still renders `<PremiumContactForm>`.

### Extracted helper: `referralReasonText()`

Currently defined inside `PremiumContactForm.tsx`. Slice 6 moves it to `lib/leadQualification.ts` (or a small `lib/referral-reason-text.ts` utility) so both `PremiumContactForm` and `ReferralForm` can import it without duplication.

## Copy

**Referral heading (above form):**
> "Your loan size is outside our in-house range, but we can connect you with a specialist partner."

**Reason text (per `PrequalFailReason`):**
- `home-value-exceeds-icp` → "Homes above $5M typically need a specialist lender."
- `product-cap-exceeded` (heloc) → "HELOCs over $750K are routed to our referral partner."
- `product-cap-exceeded` (other) → "Total loan amounts over $[cap] are routed to our referral partner."

(Same as slice 5 — just rendered in the new form context.)

**Confirmation:**
> "We've shared your details with a specialist partner who handles loans in this range. Expect a call within 1–2 business days. If you need immediate assistance, call or text (949) 579-2057."

## Implementation Surfaces

### New files
- `components/prequal/ReferralForm.tsx` — lightweight 4-field form
- `lib/referral-reason-text.ts` — extracted `referralReasonText()` helper (shared by `PremiumContactForm` and `ReferralForm`)

### Modified files
- `app/contact/ContactPageClient.tsx` — referral stage renders `ReferralForm` instead of `PremiumContactForm`
- `components/contact/PremiumContactForm.tsx` — remove inline `referralReasonText()`, import from shared module instead

## Testing

### Gate 1 — structural
- `npm run typecheck`, `npm run lint`, `npm run build` — all clean
- `node scripts/validate-prequal.mjs` — still passes (regression)

### Gate 2 — browser smoke (dev server)
At both 1440px and 375px:

1. `/contact` initial load → pre-qual widget renders
2. Fill qualifying values → PremiumContactForm appears (unchanged from slice 5)
3. Back to widget (Edit), fill unqualifying values ($1M home / $800K HELOC) → **ReferralForm** appears (NOT PremiumContactForm)
   - Heading: "Your loan size is outside our in-house range..."
   - Reason: "HELOCs over $750K are routed to our referral partner."
   - 4 visible fields: name, email, phone, notes
   - PrequalSummaryChip above with Edit button
4. Fill referral form, submit → confirmation message appears
5. Network tab: POST to `/api/contact` with `case_type: referral`, `home_value`, `desired_loan`, `product`, `current_mortgage` as hidden fields
6. GA console: `referral_form_submitted` event fires

### Gate 3 — regression
- Qualified path still works end-to-end (PremiumContactForm submit)
- `/heloc-orange-county` still shows `$650,000`
- `/areas/spokane` still returns 200
- `/luxury-markets/*` still returns 410

### Gate 4 — production post-deploy
- `curl` `/contact` returns 200 with widget heading
- Submit one test referral lead, verify arrival in Formspree inbox with `case_type: referral` + hidden fields

## Rollout

1. Extract `referralReasonText()` to shared module + update `PremiumContactForm` import (backward-compatible, zero UI change)
2. Create `ReferralForm` component (additive, unconsumed)
3. Swap `ContactPageClient` referral stage to render `ReferralForm` (the user-facing change)
4. Verify all gates locally
5. Push; Vercel auto-deploys
6. Gate 4 prod verification

## Out of Scope (confirmed)

- Automated partner routing (webhook, CRM, email forwarding)
- New `/api/referral` endpoint — same `/api/contact` handles both paths
- Referral tracking dashboard
- Changes to the qualified path (`PremiumContactForm`)
- Any slice 1–5 modifications
