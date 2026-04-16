# Referral Off-Ramp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the referral path's full PremiumContactForm with a lightweight 4-field ReferralForm that captures contact info + hidden pre-qual widget data, submitting to the same Formspree endpoint with `case_type: 'referral'`.

**Architecture:** Extract `referralReasonText()` to a shared module. Create `ReferralForm` with 4 visible fields + hidden pre-qual data. Swap `ContactPageClient`'s referral-stage render from `PremiumContactForm` to `ReferralForm`. Same `/api/contact` endpoint, same Formspree destination.

**Tech Stack:** Next.js 15 App Router (client component), TypeScript strict, Tailwind v3.4.17.

**Spec:** `docs/superpowers/specs/2026-04-15-referral-offramp-design.md`

---

## Task 1: Extract `referralReasonText` to shared module

**Files:**
- Create: `lib/referral-reason-text.ts`
- Modify: `components/contact/PremiumContactForm.tsx` (remove inline function, add import)

## Task 2: Create `ReferralForm` component

**Files:**
- Create: `components/prequal/ReferralForm.tsx`

## Task 3: Wire `ContactPageClient` referral stage

**Files:**
- Modify: `app/contact/ContactPageClient.tsx` (import ReferralForm, branch referral stage)

## Task 4: Verify + merge + deploy

---
