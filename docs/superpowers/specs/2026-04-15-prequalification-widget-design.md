# Pre-qualification Widget — Design Spec

**Date:** 2026-04-15
**Slice:** 5 of 6 (ICP Pivot — Website Lead Targeting Fixes)
**Predecessors:**
- `docs/superpowers/specs/2026-04-14-luxury-teardown-cap-display-design.md` (slice 1, shipped)
- `docs/superpowers/specs/2026-04-15-scenario-rewrites-copy-sweep-design.md` (slice 2+4, shipped)
**Source requirement:** `C:\Users\haithem\Downloads\website-lead-targeting-fixes.md` (Section 5 — Pre-Qualification Filter)
**Status:** Draft, pending user review

## Context

Slice 1 surfaced product caps under the hero H1 so users can self-qualify at-a-glance. Slice 2+4 removed luxury positioning across the site and canonicalized example scenarios. Leads still arrive at `/contact` with requests outside lendable range (HELOCs over $750K, total loan amounts over $3.5M, homes over $5M) — phone triage absorbs the cost.

This slice installs a pre-qualification gate on the primary contact form. Users answer four questions before seeing the full form. Out-of-ICP inputs route them to the same form with a referral-context heading and a hidden `caseType: 'referral'` submit flag; slice 6 will upgrade that path into a proper referral-partner UI. In-ICP inputs land the user on the standard form, pre-filled with their widget entries.

## Goals

1. Every lead submitted through `/contact` is tagged `caseType: 'standard'` or `caseType: 'referral'` based on an explicit threshold check — no more silent triage.
2. The filter logic is a pure function exported from a new module, testable via a validation script, and reusable by slice 6 and any future analytics/CRM caller.
3. Users can edit their widget inputs without losing their place. The widget and form share values via pre-fill; the summary chip has an "Edit" affordance.
4. Analytics sees bucketed pre-qual events (no raw dollar PII in GA).

## Non-Goals

- **Referral-partner off-ramp UI (slice 6).** This slice uses the existing `PremiumContactForm` with a `caseType` flag + heading variant. Slice 6 builds the proper referral surface.
- **Gating homepage `QuickQuote` / calculator `ToolLeadCaptureForm`.** Out of scope — those are top-of-funnel lead magnets; gating them defeats the purpose. Users who convert from those surfaces land at `/contact`, which is gated here.
- **New `/qualify` standalone page.** Considered and rejected during brainstorming — same-page progressive disclosure is lower-risk than a new URL.
- **Server-side threshold enforcement.** The widget is a client-side filter + UX nudge. The submit endpoint does not re-validate thresholds in this slice. Follow-up if needed.
- **Lead-scoring or CRM integration beyond the `caseType` flag.** Out of scope.

## Canonical Thresholds

| Product key | Cap source | Value |
|---|---|---|
| `heloc` | `LOAN_CAPS.heloc` | $750,000 |
| `cashOut` | `LOAN_CAPS.cashOut` | $3,500,000 |
| `rateTerm` | `LOAN_CAPS.jumbo` | $3,500,000 |
| `purchase` | `LOAN_CAPS.jumbo` | $3,500,000 |
| `dscr` | `LOAN_CAPS.dscr` | $2,000,000 |
| `other` | `LOAN_CAPS.jumbo` (default) | $3,500,000 |
| *all products* | `MAX_HOME_VALUE` (new) | $5,000,000 |

`MAX_HOME_VALUE` is a new constant introduced in `lib/prequalification.ts`. It is *not* a loan cap — it is an ICP-fit ceiling. Keeping it out of `lib/loan-caps.ts` preserves the semantic distinction between "what we lend" and "who fits our ICP."

## Architecture

### Unit A — `lib/prequalification.ts` (new SSOT module)

```ts
import { LOAN_CAPS } from '@/lib/loan-caps';

export const MAX_HOME_VALUE = 5_000_000;

export type PrequalProduct =
  | 'heloc' | 'cashOut' | 'rateTerm' | 'purchase' | 'dscr' | 'other';

export interface PrequalInput {
  homeValue: number;
  currentMortgage: number;
  desiredLoan: number;
  product: PrequalProduct;
}

export type PrequalFailReason =
  | { type: 'home-value-exceeds-icp'; limit: number; actual: number }
  | { type: 'product-cap-exceeded'; product: PrequalProduct; cap: number; actual: number };

export type PrequalResult =
  | { qualified: true }
  | { qualified: false; reasons: PrequalFailReason[] };

export function isQualified(input: PrequalInput): PrequalResult;

export function capForProduct(product: PrequalProduct): number;
```

- Pure function, no side effects, no I/O
- Returns a `reasons[]` array so UI can distinguish "home too expensive" from "loan too big"
- `capForProduct` helper centralizes the product-to-cap mapping (used by UI for "HELOCs over $750K" messaging text)

### Unit B — `components/prequal/PrequalWidget.tsx` (new component)

Props:

```ts
interface PrequalWidgetProps {
  onComplete: (payload: { input: PrequalInput; result: PrequalResult }) => void;
  initialValues?: Partial<PrequalInput>;   // for "Edit" affordance re-entry
  className?: string;
}
```

- 4 inputs: `product` (radio group), `homeValue`, `currentMortgage`, `desiredLoan` (all currency inputs using `Intl.NumberFormat` display)
- Client component (`'use client'`) — state-local, no server round-trip
- Validates: all fields required, all amounts ≥ 0, `desiredLoan ≤ homeValue` (sanity — can't borrow more than home value; if violated, inline error, no submit)
- On submit: computes `isQualified(input)`, calls `onComplete({ input, result })`
- Emits GA event `prequal_submitted` with **bucketed** params (no raw dollar PII): `{ product, qualified: boolean, home_value_bucket: '<500K'|'500K-1M'|'1M-2M'|'2M-5M'|'>5M', loan_amount_bucket: '<250K'|'250-750K'|'750K-2M'|'2M-3.5M'|'>3.5M' }`
- Accessible: labeled inputs, `role="form"`, error messages linked via `aria-describedby`, keyboard-navigable

### Unit C — `components/prequal/PrequalSummaryChip.tsx` (new component)

- Renders the user's submitted widget inputs as a compact summary line (e.g., "$650K home · HELOC · $150K desired")
- Includes an "Edit" button that calls an `onEdit` callback
- Purely presentational

### Unit D — `app/contact/ContactPageClient.tsx` (modified)

State machine with three states:

1. **`stage: 'prequal'`** (initial) — `<PrequalWidget>` visible, form hidden
2. **`stage: 'form-qualified'`** — `<PrequalSummaryChip>` + `<PremiumContactForm caseType="standard" initialValues={...}>` visible
3. **`stage: 'form-referral'`** — `<PrequalSummaryChip>` + `<PremiumContactForm caseType="referral" initialValues={...} referralReasons={...}>` visible

Transitions:
- `prequal` → `form-qualified` or `form-referral` on widget submit (determined by `result.qualified`)
- Any form stage → `prequal` on "Edit" (widget re-opens with prior values as `initialValues`)

### Unit E — `components/contact/PremiumContactForm.tsx` (modified)

Two new optional props:

```ts
interface PremiumContactFormProps {
  // ...existing props
  initialValues?: {
    homeValue?: number;
    desiredLoan?: number;
    product?: PrequalProduct;
    currentMortgage?: number;
  };
  caseType?: 'standard' | 'referral';
  referralReasons?: PrequalFailReason[];
}
```

- When `initialValues` present: pre-fill matching form fields. Existing fields remain user-editable.
- When `caseType === 'referral'`:
  - Heading changes to referral variant (copy in spec below)
  - Hidden form field `case_type: 'referral'` added to submit payload
  - If `referralReasons` present: inline reason message rendered under heading (plain-English mapping from reason type)
- When `caseType === 'standard'` or omitted: current behavior (no change)

## Copy

**Widget heading:** *"Let's see if we're the right fit"*

**Widget CTA:** *"Check My Options"*

**Widget field labels:**
- "What are you looking for?" (product radio/select)
- "Home value (or purchase price)" (homeValue)
- "Current mortgage balance" (currentMortgage; hint: "Enter 0 if you own outright")
- "Desired loan amount" (desiredLoan)

**Qualified path heading:** *"Great — let's get your application started"*

**Referral path heading:** *"Your loan size is outside our in-house range, but we may be able to connect you with a specialist partner. Share your details below and we'll route you."*

**Referral reason texts:**
- `home-value-exceeds-icp` → *"Homes above $5M typically need a specialist lender."*
- `product-cap-exceeded` (heloc) → *"HELOCs over $750K are routed to our referral partner."*
- `product-cap-exceeded` (other products) → *"Total loan amounts over the product cap are routed to our referral partner."* (uses `capForProduct` to render the specific number)

## Analytics

### Events

`prequal_submitted` — fired when the widget successfully validates and calls `onComplete`:

```ts
{
  event: 'prequal_submitted',
  product: 'heloc' | 'cashOut' | ...,
  qualified: true | false,
  home_value_bucket: '<500K' | '500K-1M' | '1M-2M' | '2M-5M' | '>5M',
  loan_amount_bucket: '<250K' | '250-750K' | '750K-2M' | '2M-3.5M' | '>3.5M',
  fail_reason: 'home-value-exceeds-icp' | 'product-cap-exceeded' | null
}
```

- No raw dollar amounts sent (PII / data-minimization)
- `fail_reason` is the first reason in `result.reasons` if unqualified (kept simple; two-reason hits are rare)

### Form submit instrumentation

Existing form submit event gains a new property: `case_type: 'standard' | 'referral'`. The submit endpoint receives the same value in the payload (hidden field). Per-environment lead routing uses that flag.

## Implementation Surfaces

### New files
- `lib/prequalification.ts` — SSOT module
- `components/prequal/PrequalWidget.tsx` — widget component
- `components/prequal/PrequalSummaryChip.tsx` — collapsed-state summary
- `scripts/validate-prequal.mjs` — truth-table validator (no test framework)

### Modified files
- `app/contact/ContactPageClient.tsx` — state machine wrapping widget + form
- `components/contact/PremiumContactForm.tsx` — accepts `initialValues`, `caseType`, `referralReasons` props

### Untouched (scoped out)
- `components/ContactForm.tsx` / `components/EnhancedContactForm.tsx` (used on product pages, not `/contact`)
- `components/home/QuickQuote.tsx`, `components/home/EnhancedQuickQuote.tsx`
- `components/tools/ToolLeadCaptureForm.tsx`

## Testing

### Gate 1 — structural
- `npm run typecheck` — zero new errors
- `npm run lint` — zero new errors
- `npm run build` — clean
- `node scripts/validate-prequal.mjs` — runs the truth table below

### Truth table (asserted by `scripts/validate-prequal.mjs`)

| homeValue | currentMortgage | desiredLoan | product | expected.qualified | expected first reason |
|---|---|---|---|---|---|
| 650_000 | 350_000 | 150_000 | heloc | true | — |
| 800_000 | 400_000 | 100_000 | cashOut | true | — |
| 650_000 | 0 | 450_000 | dscr | true | — |
| 4_900_000 | 2_000_000 | 3_400_000 | purchase | true | — |
| 5_100_000 | 2_000_000 | 1_000_000 | heloc | false | home-value-exceeds-icp |
| 1_000_000 | 200_000 | 800_000 | heloc | false | product-cap-exceeded |
| 1_500_000 | 500_000 | 4_000_000 | cashOut | false | product-cap-exceeded |
| 6_000_000 | 2_000_000 | 4_000_000 | purchase | false | home-value-exceeds-icp |
| 1_000_000 | 0 | 2_100_000 | dscr | false | product-cap-exceeded |

### Gate 2 — component smoke (manual, dev server)

On `http://localhost:3000/contact` at both 1440px and 375px viewports:

1. Initial load: widget visible, `<PremiumContactForm>` not in DOM.
2. Fill qualifying values ($650K home / $350K mortgage / $150K desired / HELOC) → submit:
   - Widget collapses to summary chip
   - Form appears with standard heading ("Great — let's get your application started")
   - Form fields pre-filled with widget values where they overlap
3. Click "Edit" on summary chip → widget re-opens with prior values. Form disappears.
4. Submit unqualifying values ($1M home / $200K mortgage / $800K desired / HELOC):
   - Form appears with referral heading
   - Inline reason: "HELOCs over $750K are routed to our referral partner."
5. Submit values where both thresholds fail ($6M home / $2M mortgage / $4M desired / purchase):
   - Form appears with referral heading
   - Inline reason: first reason wins — "Homes above $5M typically need a specialist lender."
6. DevTools Network tab — submit a form from the referral path, verify payload contains `case_type: 'referral'`. Submit from qualified path, verify `case_type: 'standard'`.
7. DevTools console — verify GA `prequal_submitted` events fire on each widget submit with bucketed (non-dollar) params.

### Gate 3 — post-deploy prod check

- `curl https://www.mothebroker.com/contact` returns 200 and body contains the widget heading text
- Vercel logs: no 5xx errors in the 30 minutes following deploy
- Submit one test lead through the qualified path and one through the referral path; verify both arrive with correct `case_type`

## Rollout

1. Land `lib/prequalification.ts` + `scripts/validate-prequal.mjs` (additive, no UI change)
2. Land `PrequalWidget` and `PrequalSummaryChip` components (additive, unconsumed)
3. Modify `PremiumContactForm` to accept new optional props (backward-compatible)
4. Modify `ContactPageClient` to wire the state machine — this is the user-facing change
5. Verify all 3 gates locally
6. Push; Vercel auto-deploys to production
7. Gate 3 verification
8. Monitor GA `prequal_submitted` events for 7 days; confirm bucketed distribution matches expected ICP mix

## Out of Scope (confirmed)

- Pre-qualification on homepage QuickQuote, product-page contact forms, calculator forms
- Server-side threshold validation on submit endpoint
- Full referral-partner UI (slice 6)
- Lead scoring or CRM integration beyond the `case_type` flag
- Mid-tier city pages for CA/WA (slice 3)
