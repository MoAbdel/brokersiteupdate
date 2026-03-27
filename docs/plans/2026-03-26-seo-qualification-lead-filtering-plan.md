# SEO Qualification & Lead Filtering Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add loan-limit qualification signals, geo-lock DSCR, unify forms to Formspree, build 16 A-paper refinance city pages, and prune thin pages — all Bing-first compliant.

**Architecture:** Three-phase layered approach. Phase 1 adds a shared qualification policy module and updates existing pages/forms. Phase 2 creates a new RefinanceCityTemplate and 16 city pages. Phase 3 noindexes thin pages and removes dead code. Each phase gets its own commit.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3.4.17, Formspree, JSON-LD schema

**Design doc:** `docs/plans/2026-03-26-seo-qualification-lead-filtering-design.md`

---

## Phase 1: Qualification Layer (~15-20 files)

### Task 1: Create lead qualification policy module

**Files:**
- Create: `lib/leadQualification.ts`

**Step 1: Create the module**

```typescript
// lib/leadQualification.ts

export const LICENSED_STATES = ['CA', 'WA'] as const;
export type LicensedState = (typeof LICENSED_STATES)[number];

export const HELOC_RANGE = { min: 50_000, max: 750_000 } as const;
export const HELOAN_RANGE = { min: 25_000, max: 500_000 } as const;
export const OVERALL_TARGET = { min: 100_000, max: 3_000_000 } as const;
export const DSCR_STATES = LICENSED_STATES;

export type QualificationStatus = 'in_scope' | 'referral_candidate' | 'out_of_scope';
export type OutOfScopeReason = 'oversize_equity' | 'unsupported_state' | 'outside_target_range';

export interface QualificationResult {
  status: QualificationStatus;
  reason?: OutOfScopeReason;
}

interface QualifyInput {
  loanAmount?: number;
  propertyState?: string;
  loanPurpose?: string;
}

export function qualify(input: QualifyInput): QualificationResult {
  const { loanAmount, propertyState, loanPurpose } = input;

  // State check
  if (propertyState && !LICENSED_STATES.includes(propertyState as LicensedState)) {
    return { status: 'referral_candidate', reason: 'unsupported_state' };
  }

  // HELOC/HELOAN size check
  if (loanAmount && (loanPurpose === 'HELOC' || loanPurpose === 'heloc')) {
    if (loanAmount > HELOC_RANGE.max) {
      return { status: 'referral_candidate', reason: 'oversize_equity' };
    }
  }
  if (loanAmount && (loanPurpose === 'HELOAN' || loanPurpose === 'heloan')) {
    if (loanAmount > HELOAN_RANGE.max) {
      return { status: 'referral_candidate', reason: 'oversize_equity' };
    }
  }

  // General range check
  if (loanAmount) {
    if (loanAmount < OVERALL_TARGET.min || loanAmount > OVERALL_TARGET.max) {
      return { status: 'referral_candidate', reason: 'outside_target_range' };
    }
  }

  return { status: 'in_scope' };
}

// Display helpers
export function formatRange(range: { min: number; max: number }): string {
  return `$${(range.min / 1000).toFixed(0)}K–$${range.max >= 1_000_000 ? `${(range.max / 1_000_000).toFixed(0)}M` : `${(range.max / 1000).toFixed(0)}K`}`;
}

export const HELOC_DISPLAY = formatRange(HELOC_RANGE);   // "$50K–$750K"
export const HELOAN_DISPLAY = formatRange(HELOAN_RANGE);  // "$25K–$500K"
export const OVERALL_DISPLAY = formatRange(OVERALL_TARGET); // "$100K–$3M"
export const STATES_DISPLAY = 'California and Washington';
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit lib/leadQualification.ts` (or full `npm run typecheck`)

**Step 3: Commit**

```bash
git add lib/leadQualification.ts
git commit -m "feat: add lead qualification policy module (single source of truth for loan limits and licensed states)"
```

---

### Task 2: Create QualificationCallout component

**Files:**
- Create: `components/QualificationCallout.tsx`

**Step 1: Create the component**

```typescript
// components/QualificationCallout.tsx
'use client';

import Link from 'next/link';
import {
  HELOC_DISPLAY,
  HELOAN_DISPLAY,
  OVERALL_DISPLAY,
  STATES_DISPLAY,
} from '@/lib/leadQualification';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site';

type CalloutVariant = 'equity' | 'dscr' | 'general';

interface QualificationCalloutProps {
  variant: CalloutVariant;
  className?: string;
}

export default function QualificationCallout({ variant, className = '' }: QualificationCalloutProps) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      {variant === 'equity' && <EquityCallout />}
      {variant === 'dscr' && <DscrCallout />}
      {variant === 'general' && <GeneralCallout />}
    </div>
  );
}

function EquityCallout() {
  return (
    <>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        Mo Abdel, NMLS #1426884, offers HELOCs from {HELOC_DISPLAY} and
        home equity loans (HELOANs) up to $500K through Lumin Lending&apos;s
        wholesale network of 50+ lenders.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        For equity requests above $750K, we recommend consulting a private
        banking relationship for better terms and dedicated service. Call{' '}
        <a href={PHONE_TEL_HREF} className="text-blue-700 font-medium hover:underline">
          {PHONE_DISPLAY}
        </a>{' '}
        to discuss your options.
      </p>
      <p className="text-slate-600 text-xs">
        Compare{' '}
        <Link href="/heloc-orange-county" className="text-blue-600 hover:underline">
          HELOC
        </Link>{' '}
        vs{' '}
        <Link href="/heloan-orange-county" className="text-blue-600 hover:underline">
          HELOAN
        </Link>{' '}
        to find the right equity product for your situation.
      </p>
    </>
  );
}

function DscrCallout() {
  return (
    <>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        Mo Abdel, NMLS #1426884, currently originates DSCR investment property
        loans in {STATES_DISPLAY}. Minimum 1.0 DSCR ratio required, with
        most lenders preferring 1.25 or higher.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        Investing in a state outside CA or WA? Mo is happy to refer you to a
        trusted partner in your market. Call{' '}
        <a href={PHONE_TEL_HREF} className="text-blue-700 font-medium hover:underline">
          {PHONE_DISPLAY}
        </a>{' '}
        for a referral.
      </p>
      <p className="text-slate-600 text-xs">
        See{' '}
        <Link href="/loan-programs/dscr-investment-loans" className="text-blue-600 hover:underline">
          DSCR loan requirements
        </Link>{' '}
        and{' '}
        <Link href="/resources/dscr-deal-analyzer" className="text-blue-600 hover:underline">
          run a free deal analysis
        </Link>.
      </p>
    </>
  );
}

function GeneralCallout() {
  return (
    <>
      <p className="text-slate-700 text-sm leading-relaxed mb-3">
        Mo Abdel, NMLS #1426884, specializes in residential mortgage loans
        from {OVERALL_DISPLAY} across {STATES_DISPLAY}. Wholesale pricing
        through 50+ lender partners.
      </p>
      <p className="text-slate-700 text-sm leading-relaxed">
        Needs outside this range? Mo will connect you with the right resource.
        Call{' '}
        <a href={PHONE_TEL_HREF} className="text-blue-700 font-medium hover:underline">
          {PHONE_DISPLAY}
        </a>.
      </p>
    </>
  );
}
```

**Step 2: Verify it compiles**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add components/QualificationCallout.tsx
git commit -m "feat: add QualificationCallout component with equity/dscr/general variants"
```

---

### Task 3: Update homepage WestCapitalAdvantage

**Files:**
- Modify: `components/home/WestCapitalAdvantage.tsx` — change "$4M" to "$3M"

**Step 1: Edit the file**

Find the line:
```
description: 'Up to $4M',
```
Replace with:
```
description: 'Up to $3M',
```

**Step 2: Verify build**

Run: `npm run build` (or at minimum `npm run typecheck`)

**Step 3: Commit**

```bash
git add components/home/WestCapitalAdvantage.tsx
git commit -m "fix: lower Conventional/Jumbo display cap from $4M to $3M to match target range"
```

---

### Task 4: Update HELOC Orange County page

**Files:**
- Modify: `app/heloc-orange-county/page.tsx`

**Step 1: Update all "$500K" references to "$750K"**

Find all instances of "$500K" in the file (approximately lines 73, 103, and any schema descriptions) and replace with "$750K" where they refer to the HELOC ceiling.

Also find the hero credit line description:
```
Credit lines from $50K to $500K+
```
Replace with:
```
Credit lines from $50K to $750K
```

**Step 2: Add QualificationCallout import and placement**

Add import at top:
```typescript
import QualificationCallout from '@/components/QualificationCallout';
```

Place `<QualificationCallout variant="equity" className="my-8" />` after the hero section or after the first content section — right after the introductory copy before the comparison tables.

**Step 3: Update schema description to mirror new ceiling**

Find any schema `description` fields that mention "$500K" and update them to "$750K" to maintain schema-content alignment (Bing requirement).

**Step 4: Verify build**

Run: `npm run typecheck`

**Step 5: Commit**

```bash
git add app/heloc-orange-county/page.tsx
git commit -m "feat: update HELOC page ceiling to $750K, add qualification callout"
```

---

### Task 5: Update HELOAN Orange County page

**Files:**
- Modify: `app/heloan-orange-county/page.tsx`

**Step 1: Verify $500K references are correct (HELOAN stays at $500K)**

Review all "$500K" references — these should STAY as-is since the HELOAN ceiling IS $500K. Only fix if any say "$500K+" which implies higher is possible — change to just "$500K".

**Step 2: Add QualificationCallout**

Add import at top:
```typescript
import QualificationCallout from '@/components/QualificationCallout';
```

Place `<QualificationCallout variant="equity" className="my-8" />` after the hero section, same pattern as HELOC page.

**Step 3: Verify build**

Run: `npm run typecheck`

**Step 4: Commit**

```bash
git add app/heloan-orange-county/page.tsx
git commit -m "feat: add equity qualification callout to HELOAN page"
```

---

### Task 6: Geo-lock DSCR investment loans page

**Files:**
- Modify: `app/loan-programs/dscr-investment-loans/page.tsx`

**Step 1: Update metadata**

Find the title (around line 11):
```
title: 'DSCR Investment Loans [2026 Cash-Flow Qualification Matrix & No-Doc Rates]',
```
Replace with:
```
title: 'DSCR Investment Loans – California & Washington [2026 Cash-Flow Qualification & No-Doc Rates]',
```

Find the description (around line 12):
```
description: 'DSCR investment loans in Orange County. Qualify based on rental income, not personal income. No employment verification. Perfect for real estate investors. Call (949) 579-2057.',
```
Replace with:
```
description: 'DSCR investment loans in California and Washington. Qualify on rental income — no tax returns or W-2s required. Mo Abdel, NMLS #1426884, offers wholesale DSCR rates. Call (949) 579-2057.',
```

**Step 2: Update H1**

Find the H1 (around lines 42-43):
```
<span className="text-blue-600">DSCR Investment Loans</span> in Orange County
```
Replace with:
```
<span className="text-blue-600">DSCR Investment Loans</span> in California and Washington
```

**Step 3: Add QualificationCallout**

Add import:
```typescript
import QualificationCallout from '@/components/QualificationCallout';
```

Place `<QualificationCallout variant="dscr" className="my-8" />` after the hero/intro section.

**Step 4: Add Bing geo meta tags** (if not already present)

In the metadata export, add:
```typescript
other: {
  'geo.region': 'US-CA',
  'geo.placename': 'California',
  language: 'en',
},
```

**Step 5: Update schema description to match new geographic scope**

Find any schema `serviceDescription` or `description` fields that say "Orange County" and update to "California and Washington".

**Step 6: Verify build**

Run: `npm run typecheck`

**Step 7: Commit**

```bash
git add app/loan-programs/dscr-investment-loans/page.tsx
git commit -m "feat: geo-lock DSCR page to CA & WA in title, H1, meta, schema, add qualification callout"
```

---

### Task 7: Update loan programs hub and Non-QM hub

**Files:**
- Modify: `app/loan-programs/page.tsx`
- Modify: `app/loan-programs/non-qm-loans/page.tsx`

**Step 1: Update loan programs hub HELOC card**

In `app/loan-programs/page.tsx`, find the HELOC card text (around line 130):
```
Flexible credit line up to $500K
```
Replace with:
```
Flexible credit line up to $750K
```

**Step 2: Update loan programs hub DSCR card**

Find the DSCR card and add "CA & WA" qualifier to the description text. Look for the DSCR entry and append geographic scope.

**Step 3: Update Non-QM hub DSCR section**

In `app/loan-programs/non-qm-loans/page.tsx`, find the DSCR section (around lines 172-191) and add "Available in California and Washington" to the description text.

**Step 4: Verify build**

Run: `npm run typecheck`

**Step 5: Commit**

```bash
git add app/loan-programs/page.tsx app/loan-programs/non-qm-loans/page.tsx
git commit -m "feat: update HELOC ceiling to $750K on hub, add CA/WA qualifier to DSCR entries"
```

---

### Task 8: Unify QuickQuote and ToolLeadCapture to Formspree

**Files:**
- Modify: `components/home/QuickQuote.tsx` — change from `/api/quotes` (JSON POST) to `/api/contact` (FormData POST to Formspree)
- Modify: `components/tools/ToolLeadCaptureForm.tsx` — same change
- Modify: `components/home/EnhancedQuickQuote.tsx` — same change if it also uses `/api/quotes`

**Step 1: Update QuickQuote.tsx**

The current submission (around lines 52-66) sends JSON to `/api/quotes`. Change to FormData POST to `/api/contact`:

Replace the fetch block with:
```typescript
const formDataSubmit = new FormData();
formDataSubmit.append('full_name', `${formData.firstName} ${formData.lastName}`);
formDataSubmit.append('email', formData.email);
formDataSubmit.append('phone', formData.phone);
formDataSubmit.append('loan_purpose', formData.loanPurpose || 'inquiry');
formDataSubmit.append('loan_amount', formData.loanAmount || 'Not specified');
formDataSubmit.append('timeline', formData.timeline || 'Not specified');
formDataSubmit.append('additional_info', formData.additionalInfo || '');
formDataSubmit.append('_subject', `Quick Quote - ${formData.firstName} ${formData.lastName}`);
appendTermsConsentToFormData(formDataSubmit);

const response = await fetch('/api/contact', {
  method: 'POST',
  body: formDataSubmit,
});
```

Make sure the import for `appendTermsConsentToFormData` exists (from `@/lib/terms-consent`). The component likely already imports `getTermsConsentPayload` — switch to `appendTermsConsentToFormData` instead.

**Step 2: Update ToolLeadCaptureForm.tsx**

Same pattern — change from JSON POST to `/api/quotes` to FormData POST to `/api/contact`.

**Step 3: Update EnhancedQuickQuote.tsx**

Check if it uses `/api/quotes` — if so, same change. If it already uses `/api/contact`, leave it.

**Step 4: Verify all forms submit successfully**

Run: `npm run build` to confirm no TypeScript errors. Manual test in dev if possible.

**Step 5: Commit**

```bash
git add components/home/QuickQuote.tsx components/tools/ToolLeadCaptureForm.tsx components/home/EnhancedQuickQuote.tsx
git commit -m "feat: unify QuickQuote, ToolLeadCapture, EnhancedQuickQuote to Formspree via /api/contact"
```

---

### Task 9: Add qualification fields to all intake forms

**Files:**
- Modify: `components/ContactForm.tsx`
- Modify: `components/EnhancedContactForm.tsx`
- Modify: `components/contact/PremiumContactForm.tsx`
- Modify: `components/home/QuickQuote.tsx`
- Modify: `components/home/EnhancedQuickQuote.tsx`
- Modify: `components/tools/ToolLeadCaptureForm.tsx`

**Step 1: Add property_state field to each form**

Add to each form's state:
```typescript
propertyState: '',
```

Add a dropdown in the form UI:
```tsx
<select
  value={formData.propertyState}
  onChange={(e) => setFormData({ ...formData, propertyState: e.target.value })}
  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
>
  <option value="">Select State</option>
  <option value="CA">California</option>
  <option value="WA">Washington</option>
  <option value="Other">Other State</option>
</select>
```

**Step 2: Add qualification computation before submission**

In each form's submit handler, before the fetch call:
```typescript
import { qualify } from '@/lib/leadQualification';

// In submit handler:
const qualification = qualify({
  loanAmount: parseFloat(formData.loanAmount) || undefined,
  propertyState: formData.propertyState || undefined,
  loanPurpose: formData.loanPurpose || undefined,
});

// Append to FormData:
formDataSubmit.append('qualification_status', qualification.status);
if (qualification.reason) {
  formDataSubmit.append('out_of_scope_reason', qualification.reason);
}
formDataSubmit.append('property_state', formData.propertyState || 'Not specified');
```

**Step 3: Add inline referral message**

When `propertyState === 'Other'` or qualification returns `referral_candidate`, show:
```tsx
{qualification?.status === 'referral_candidate' && (
  <p className="text-sm text-blue-700 bg-blue-50 rounded-md p-3 mt-2">
    Mo Abdel is licensed in California and Washington and specializes in
    loans from $100K–$3M. If your needs fall outside this range, Mo will
    connect you with the right resource.
  </p>
)}
```

Run the qualification check on blur/change of the relevant fields so the message appears before submission.

**Step 4: Verify build**

Run: `npm run typecheck`

**Step 5: Commit**

```bash
git add components/ContactForm.tsx components/EnhancedContactForm.tsx components/contact/PremiumContactForm.tsx components/home/QuickQuote.tsx components/home/EnhancedQuickQuote.tsx components/tools/ToolLeadCaptureForm.tsx
git commit -m "feat: add property_state and qualification_status fields to all intake forms"
```

---

### Task 10: Phase 1 verification and commit

**Step 1: Full build check**

Run: `npm run build`

Expected: Clean build with no errors.

**Step 2: Verify key pages**

Run: `npm run dev` and spot-check:
- Homepage: "$3M" on Conventional/Jumbo card
- `/heloc-orange-county`: "$750K" ceiling, callout visible
- `/heloan-orange-county`: "$500K" ceiling, callout visible
- `/loan-programs/dscr-investment-loans`: "California and Washington" in H1
- `/loan-programs`: HELOC shows "$750K", DSCR shows "CA & WA"

**Step 3: Commit Phase 1 complete**

```bash
git add -A
git commit -m "feat: Phase 1 complete — qualification layer with loan limits, geo-lock, form unification"
```

---

## Phase 2: 16 Refinance City Pages (~25 new files)

### Task 11: Create refinance city data constants

**Files:**
- Create: `lib/refinance-city-data.ts`

**Step 1: Create the data file**

```typescript
// lib/refinance-city-data.ts

export interface RefinanceCityData {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  population: number;
  medianHomeValue: number;
  medianEquity: number;
  conformingLimit: number;
  typicalLoanRange: { min: number; max: number };
  topNeighborhoods: string[];
  avgPropertyTaxRate: number;
  marketContext: string; // One unique sentence per city — avoids templated language
}

export const OC_CONFORMING_LIMIT = 1_209_750;

export const REFINANCE_CITIES: RefinanceCityData[] = [
  {
    name: 'Irvine',
    slug: 'irvine',
    lat: 33.6846,
    lng: -117.8265,
    population: 307_670,
    medianHomeValue: 1_350_000,
    medianEquity: 810_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 400_000, max: 1_200_000 },
    topNeighborhoods: ['Northwood', 'Quail Hill', 'Woodbridge', 'Turtle Rock', 'University Park'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Irvine\'s master-planned communities and top-rated school district drive consistent demand, making refinance timing less sensitive to seasonal inventory swings.',
  },
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    lat: 33.6000,
    lng: -117.6720,
    population: 95_290,
    medianHomeValue: 1_050_000,
    medianEquity: 630_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 350_000, max: 950_000 },
    topNeighborhoods: ['Lake Mission Viejo', 'Aegean Hills', 'Deane Homes', 'Bel Aire'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Mission Viejo homeowners who bought before 2022 are sitting on six-figure equity gains, positioning them well for cash-out refinancing at current wholesale rates.',
  },
  {
    name: 'Laguna Niguel',
    slug: 'laguna-niguel',
    lat: 33.5225,
    lng: -117.7076,
    population: 65_100,
    medianHomeValue: 1_200_000,
    medianEquity: 720_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 400_000, max: 1_100_000 },
    topNeighborhoods: ['Monarch Summit', 'Bear Brand Ranch', 'Kite Hill', 'Niguel Summit'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Laguna Niguel\'s hillside properties and ocean-proximity premium mean most homeowners carry jumbo-eligible loan balances ideal for wholesale rate competition.',
  },
  {
    name: 'Dana Point',
    slug: 'dana-point',
    lat: 33.4672,
    lng: -117.6981,
    population: 33_700,
    medianHomeValue: 1_450_000,
    medianEquity: 870_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 500_000, max: 1_200_000 },
    topNeighborhoods: ['Lantern Village', 'Monarch Beach', 'Capistrano Beach', 'Harbor area'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Dana Point\'s coastal location and limited buildable land create sustained appreciation, giving homeowners strong equity positions for both cash-out and rate-and-term refinancing.',
  },
  {
    name: 'San Clemente',
    slug: 'san-clemente',
    lat: 33.4270,
    lng: -117.6120,
    population: 64_800,
    medianHomeValue: 1_300_000,
    medianEquity: 780_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 450_000, max: 1_150_000 },
    topNeighborhoods: ['Forster Ranch', 'Talega', 'San Clemente Pier area', 'Sea Summit'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'San Clemente\'s position at the southern tip of Orange County attracts homeowners who prioritize lifestyle over commute, and many refinance to fund renovations that maximize their coastal premium.',
  },
  {
    name: 'Lake Forest',
    slug: 'lake-forest',
    lat: 33.6469,
    lng: -117.6891,
    population: 85_900,
    medianHomeValue: 950_000,
    medianEquity: 570_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 300_000, max: 850_000 },
    topNeighborhoods: ['Foothill Ranch', 'Baker Ranch', 'Portola Hills', 'El Toro area'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Lake Forest offers strong conventional refinance opportunities because most homes fall between $800K and $1.1M — well within conforming jumbo limits where wholesale pricing is most competitive.',
  },
  {
    name: 'Aliso Viejo',
    slug: 'aliso-viejo',
    lat: 33.5676,
    lng: -117.7256,
    population: 51_400,
    medianHomeValue: 900_000,
    medianEquity: 540_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 280_000, max: 800_000 },
    topNeighborhoods: ['Pacific Park', 'Glenwood', 'Vantis', 'Wood Canyon'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Aliso Viejo\'s younger housing stock and strong HOA communities mean many homeowners still carry their original purchase mortgages from 2018-2021 — a prime rate-and-term refinance window.',
  },
  {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    lat: 33.8886,
    lng: -117.8131,
    population: 68_300,
    medianHomeValue: 1_100_000,
    medianEquity: 660_000,
    conformingLimit: OC_CONFORMING_LIMIT,
    typicalLoanRange: { min: 350_000, max: 1_000_000 },
    topNeighborhoods: ['Black Gold', 'Yorba Linda Estates', 'Hidden Hills', 'Travis Ranch'],
    avgPropertyTaxRate: 0.67,
    marketContext: 'Yorba Linda\'s horse-country estates and larger lot sizes push many properties above the conforming limit, where wholesale broker access to jumbo lenders delivers measurably better pricing than retail banks.',
  },
];
```

**Step 2: Verify types**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add lib/refinance-city-data.ts
git commit -m "feat: add refinance city data constants for 8 OC cities"
```

---

### Task 12: Create RefinanceCityTemplate component

**Files:**
- Create: `components/seo/RefinanceCityTemplate.tsx`

**Step 1: Build the template**

This is a large component. Key structural requirements:
- Accepts `cityData: RefinanceCityData` and `refinanceType: 'cash-out' | 'rate-term'` props
- Follows the SKILL Inverted Pyramid: Citation Hook → Bing Power Block → E-E-A-T Narrative → Data → FAQ → Expert Summary
- Generates: FAQPage schema, LocalBusiness schema, Speakable schema, BreadcrumbList schema
- Renders Bing geo meta tags via metadata export helper
- 30-60 word paragraphs throughout
- 3 semantic triples in citation hook
- 2+ comparison tables
- 8+ internal links
- 3 CTAs (early + mid + closing)
- All FAQ answers visible (no accordion)

**Template sections:**

```
1. Citation Hook (prop-driven BLUF + 3 triples + city snapshot table)
2. Bing Power Block:
   - H2: "How Does [Cash-Out|Rate-Term] Refinancing Work in [City]?"
   - H2: "What [Product] Rates Can [City] Homeowners Expect in 2026?"
   - Comparison table + numbered process list
3. E-E-A-T Narrative:
   - H2: "Why Do [City] Homeowners Choose Wholesale Refinancing Over Banks?"
   - H2: "[City] Neighborhoods Where Refinancing Makes the Most Sense in 2026"
4. Data section:
   - Loan scenarios table (3 home value tiers)
   - Monthly payment comparison table
   - Gated CTA footer per table
5. FAQ section (10-12 questions, FAQPage schema, voice-optimized)
6. Expert Summary + closing CTA
```

Use existing schema builders from `lib/schema-entities.ts`:
- `buildBrokerEntityGraph()` with `serviceType: 'FinancialService'`
- `buildServiceWebPageSchema()` with `includeSpeakable: true`
- `buildFAQPageSchema()` for FAQ items

Also create a metadata generator function:
```typescript
export function generateRefinanceMetadata(
  city: RefinanceCityData,
  type: 'cash-out' | 'rate-term'
): Metadata
```

This generates: title (keyword in first 60 chars), description (with phone number), canonical, openGraph, twitter, and Bing geo meta tags (geo.region, geo.placename, geo.position, ICBM, language).

**CRITICAL — Varied content rule:** The template must NOT produce identical prose for each city. The `marketContext` field from city data drives unique opening paragraphs. H2 phrasing should rotate between question formats (e.g., "How Does..." vs "What Are the Steps to..." vs "Can [City] Homeowners..."). FAQ answer formats should alternate (prose, bullets, short comparison).

**Step 2: Verify types**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add components/seo/RefinanceCityTemplate.tsx
git commit -m "feat: add RefinanceCityTemplate with Bing-first inverted pyramid structure"
```

---

### Task 13: Create 8 cash-out refinance city pages

**Files:**
- Create: `app/areas/irvine-cash-out-refinance/page.tsx`
- Create: `app/areas/mission-viejo-cash-out-refinance/page.tsx`
- Create: `app/areas/laguna-niguel-cash-out-refinance/page.tsx`
- Create: `app/areas/dana-point-cash-out-refinance/page.tsx`
- Create: `app/areas/san-clemente-cash-out-refinance/page.tsx`
- Create: `app/areas/lake-forest-cash-out-refinance/page.tsx`
- Create: `app/areas/aliso-viejo-cash-out-refinance/page.tsx`
- Create: `app/areas/yorba-linda-cash-out-refinance/page.tsx`

**Step 1: Create each page file**

Each page follows this pattern:
```typescript
import { Metadata } from 'next';
import RefinanceCityTemplate, { generateRefinanceMetadata } from '@/components/seo/RefinanceCityTemplate';
import { REFINANCE_CITIES } from '@/lib/refinance-city-data';

const cityData = REFINANCE_CITIES.find(c => c.slug === 'irvine')!;

export const metadata: Metadata = generateRefinanceMetadata(cityData, 'cash-out');

export default function IrvineCashOutRefinancePage() {
  return <RefinanceCityTemplate cityData={cityData} refinanceType="cash-out" />;
}
```

**IMPORTANT:** Each page must have a unique function name matching the city. The template handles all content variation internally using city data + refinance type.

**Step 2: Verify all 8 pages build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add app/areas/irvine-cash-out-refinance/ app/areas/mission-viejo-cash-out-refinance/ app/areas/laguna-niguel-cash-out-refinance/ app/areas/dana-point-cash-out-refinance/ app/areas/san-clemente-cash-out-refinance/ app/areas/lake-forest-cash-out-refinance/ app/areas/aliso-viejo-cash-out-refinance/ app/areas/yorba-linda-cash-out-refinance/
git commit -m "feat: add 8 cash-out refinance city pages (Irvine, Mission Viejo, Laguna Niguel, Dana Point, San Clemente, Lake Forest, Aliso Viejo, Yorba Linda)"
```

---

### Task 14: Create 8 rate-and-term refinance city pages

**Files:**
- Create: `app/areas/irvine-rate-term-refinance/page.tsx`
- Create: `app/areas/mission-viejo-rate-term-refinance/page.tsx`
- Create: `app/areas/laguna-niguel-rate-term-refinance/page.tsx`
- Create: `app/areas/dana-point-rate-term-refinance/page.tsx`
- Create: `app/areas/san-clemente-rate-term-refinance/page.tsx`
- Create: `app/areas/lake-forest-rate-term-refinance/page.tsx`
- Create: `app/areas/aliso-viejo-rate-term-refinance/page.tsx`
- Create: `app/areas/yorba-linda-rate-term-refinance/page.tsx`

**Step 1: Create each page file**

Same pattern as Task 13 but with `refinanceType: 'rate-term'`:
```typescript
const cityData = REFINANCE_CITIES.find(c => c.slug === 'irvine')!;
export const metadata: Metadata = generateRefinanceMetadata(cityData, 'rate-term');

export default function IrvineRateTermRefinancePage() {
  return <RefinanceCityTemplate cityData={cityData} refinanceType="rate-term" />;
}
```

**Step 2: Verify all 8 pages build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add app/areas/irvine-rate-term-refinance/ app/areas/mission-viejo-rate-term-refinance/ app/areas/laguna-niguel-rate-term-refinance/ app/areas/dana-point-rate-term-refinance/ app/areas/san-clemente-rate-term-refinance/ app/areas/lake-forest-rate-term-refinance/ app/areas/aliso-viejo-rate-term-refinance/ app/areas/yorba-linda-rate-term-refinance/
git commit -m "feat: add 8 rate-and-term refinance city pages"
```

---

### Task 15: Add internal links to/from new refinance pages

**Files:**
- Modify: `app/cash-out-refinance/page.tsx` (or wherever the county-level cash-out page lives)
- Modify: `app/rate-term-refinance-orange-county/page.tsx`
- Modify: `app/areas/irvine/page.tsx`
- Modify: `app/areas/irvine-mortgage-broker/page.tsx`
- Modify: `app/areas/mission-viejo/page.tsx`
- Modify: `app/areas/mission-viejo-mortgage-broker/page.tsx`
- Modify: `app/loan-programs/page.tsx` (add city links section)
- Modify: `app/heloc-orange-county/page.tsx` (cross-topic link to refi pages)

**Step 1: Add city refinance links to county-level refi pages**

In each county-level refinance page, add a "Refinance by City" section with links to all 8 city cash-out and 8 city rate-term pages.

**Step 2: Add refinance links to existing strong city pages**

In the Irvine and Mission Viejo custom pages, add links to their respective cash-out and rate-term refinance counterparts.

**Step 3: Add cross-topic links from HELOC/HELOAN pages**

In `app/heloc-orange-county/page.tsx` and `app/heloan-orange-county/page.tsx`, add a "Compare with Refinancing" section that links to the top 3 city refinance pages.

**Step 4: Verify all links resolve**

Run: `npm run build` — Next.js will flag broken internal links.

**Step 5: Commit**

```bash
git add app/cash-out-refinance/ app/rate-term-refinance-orange-county/ app/areas/irvine/ app/areas/irvine-mortgage-broker/ app/areas/mission-viejo/ app/areas/mission-viejo-mortgage-broker/ app/loan-programs/page.tsx app/heloc-orange-county/ app/heloan-orange-county/
git commit -m "feat: add internal links to/from 16 new refinance city pages"
```

---

### Task 16: Phase 2 verification

**Step 1: Full build**

Run: `npm run build`

**Step 2: Spot-check 4 pages in dev**

Run: `npm run dev` and check:
- `/areas/irvine-cash-out-refinance` — H1, meta, schema, 3 tables, 3 CTAs, FAQ visible
- `/areas/dana-point-rate-term-refinance` — verify different opening paragraph from Irvine
- `/areas/lake-forest-cash-out-refinance` — verify 8+ internal links
- `/areas/yorba-linda-rate-term-refinance` — verify geo meta tags in page source

**Step 3: Commit Phase 2 complete**

```bash
git add -A
git commit -m "feat: Phase 2 complete — 16 refinance city pages with Bing-first compliance"
```

---

## Phase 3: Cleanup & Pruning (~10 files)

### Task 17: Noindex thin city pages

**Files:**
- Modify: `app/areas/dana-point-mortgage-broker/page.tsx`
- Modify: `app/areas/laguna-niguel-mortgage-broker/page.tsx`
- Modify: `app/areas/yorba-linda-mortgage-broker/page.tsx`
- Modify: `app/areas/laguna-niguel-mortgage-rates/page.tsx`
- Modify: `app/areas/yorba-linda-mortgage-rates/page.tsx`
- Modify: `app/areas/laguna-beach-mortgage-broker/page.tsx`
- Modify: `app/areas/laguna-woods-mortgage-broker/page.tsx`
- Modify: `app/areas/fountain-valley-mortgage-broker/page.tsx`
- Modify: `app/areas/fountain-valley-mortgage-rates/page.tsx`
- Modify: `app/areas/garden-grove-mortgage-broker/page.tsx`
- Modify: `app/areas/garden-grove-mortgage-rates/page.tsx`
- Modify: `app/areas/orange-mortgage-broker/page.tsx`
- Modify: `app/areas/westminster-mortgage-broker/page.tsx`
- Modify: `app/areas/fullerton-mortgage-broker/page.tsx`
- Modify: `app/areas/santa-ana-refinance-rates/page.tsx`

**Step 1: Add robots noindex to each page's metadata**

For pages using `generateCityMetadata()`, override the robots field:
```typescript
export const metadata: Metadata = {
  ...generateCityMetadata(cityData),
  robots: { index: false, follow: true },
};
```

For pages with inline metadata, add:
```typescript
robots: { index: false, follow: true },
```

**Step 2: Verify build**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add app/areas/dana-point-mortgage-broker/ app/areas/laguna-niguel-mortgage-broker/ app/areas/yorba-linda-mortgage-broker/ app/areas/laguna-niguel-mortgage-rates/ app/areas/yorba-linda-mortgage-rates/ app/areas/laguna-beach-mortgage-broker/ app/areas/laguna-woods-mortgage-broker/ app/areas/fountain-valley-mortgage-broker/ app/areas/fountain-valley-mortgage-rates/ app/areas/garden-grove-mortgage-broker/ app/areas/garden-grove-mortgage-rates/ app/areas/orange-mortgage-broker/ app/areas/westminster-mortgage-broker/ app/areas/fullerton-mortgage-broker/ app/areas/santa-ana-refinance-rates/
git commit -m "feat: noindex 15 thin city pages (follow: true preserves link equity)"
```

---

### Task 18: Update sitemap configuration

**Files:**
- Modify: `next-sitemap.config.js`

**Step 1: Add noindexed pages to exclude array**

In the `exclude` array (around lines 192-257), add:
```javascript
'/areas/dana-point-mortgage-broker',
'/areas/laguna-niguel-mortgage-broker',
'/areas/yorba-linda-mortgage-broker',
'/areas/laguna-niguel-mortgage-rates',
'/areas/yorba-linda-mortgage-rates',
'/areas/laguna-beach-mortgage-broker',
'/areas/laguna-woods-mortgage-broker',
'/areas/fountain-valley-mortgage-broker',
'/areas/fountain-valley-mortgage-rates',
'/areas/garden-grove-mortgage-broker',
'/areas/garden-grove-mortgage-rates',
'/areas/orange-mortgage-broker',
'/areas/westminster-mortgage-broker',
'/areas/fullerton-mortgage-broker',
'/areas/santa-ana-refinance-rates',
```

**Step 2: Verify new refinance pages get included**

The new `/areas/[city]-cash-out-refinance` and `/areas/[city]-rate-term-refinance` pages should automatically pick up the existing `/areas/` priority rule (0.9, weekly). Verify they're not accidentally excluded by any pattern.

**Step 3: Commit**

```bash
git add next-sitemap.config.js
git commit -m "feat: exclude 15 noindexed thin pages from sitemap, new refi pages auto-included at 0.9"
```

---

### Task 19: Add Newport Beach luxury referral positioning

**Files:**
- Modify: `app/areas/newport-beach/page.tsx`

**Step 1: Add QualificationCallout import and placement**

Add import:
```typescript
import QualificationCallout from '@/components/QualificationCallout';
```

Add the callout after the existing sections (around line 192, after the sections array but rendered within the page JSX). Place it between the content sections and the CTA section:

```tsx
<QualificationCallout variant="equity" className="my-8 mx-auto max-w-3xl" />
```

**Step 2: Verify build**

Run: `npm run typecheck`

**Step 3: Commit**

```bash
git add app/areas/newport-beach/page.tsx
git commit -m "feat: add equity referral callout to Newport Beach page for luxury lead routing"
```

---

### Task 20: Remove dead JSON storage code

**Files:**
- Delete: `app/api/quotes/route.ts`
- Modify: `app/admin/data/page.tsx` — gut JSON fetching, replace with Formspree link
- Verify: `lib/entities.ts` — check if `RateQuote` is imported elsewhere; if not, remove

**Step 1: Delete quotes API route**

```bash
rm app/api/quotes/route.ts
```

If there's an `app/api/quotes/` directory, remove the whole directory.

**Step 2: Check for other references to /api/quotes**

Search the codebase for any remaining imports or fetch calls to `/api/quotes`. After Task 8 (form unification), there should be none. If the MortgageQuiz component still uses it, update that too.

**Step 3: Update admin data page**

Replace the quotes-fetching logic in `app/admin/data/page.tsx` with a simple message:
```tsx
<p className="text-slate-600">
  Lead submissions are now managed in{' '}
  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
    Formspree Dashboard
  </a>.
</p>
```

Remove the quotes table, CSV export for quotes, and associated state/effects.

**Step 4: Clean up RateQuote if unused**

Search for `RateQuote` imports. If only used in the admin data page (which we're simplifying) and the deleted quotes route, remove it from `lib/entities.ts`.

**Step 5: Delete data directories if they exist**

```bash
rm -rf data/submissions/ data/newsletter/
```

(These may not exist on disk if they were only created at runtime on Vercel.)

**Step 6: Verify build**

Run: `npm run build`

**Step 7: Commit**

```bash
git add -A
git commit -m "chore: remove dead JSON storage code (quotes API, data directories, RateQuote entity)"
```

---

### Task 21: Final verification

**Step 1: Clean build**

Run: `npm run build`
Expected: Zero errors, zero warnings about missing pages.

**Step 2: Verify no broken links**

Run: `npm run dev` and spot check:
- Forms submit to Formspree (check network tab for `/api/contact` calls)
- No references to `/api/quotes` remain
- All 16 new refinance pages render
- Noindexed pages still render (just have `noindex` meta tag)
- Newport Beach page shows equity callout

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: Phase 3 complete — thin page pruning, dead code removal, Newport Beach referral positioning

SEO Qualification & Lead Filtering Realignment complete:
- Phase 1: Qualification layer (loan limits, geo-lock, form unification)
- Phase 2: 16 refinance city pages (Bing-first compliant)
- Phase 3: Thin page pruning, dead code removal"
```
