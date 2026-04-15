// ---------------------------------------------------------------------------
// Lead Qualification Policy — single source of truth
// All pages, forms, and tools import from here for loan limits, licensed
// states, and qualification logic.
// ---------------------------------------------------------------------------

/* ── Licensed states ─────────────────────────────────────────────────────── */

export const LICENSED_STATES = ['CA', 'WA'] as const;
export type LicensedState = (typeof LICENSED_STATES)[number];

export const DSCR_STATES: readonly LicensedState[] = LICENSED_STATES;

/* ── Loan-product ranges ─────────────────────────────────────────────────── */

export const HELOC_RANGE = { min: 50_000, max: 750_000 } as const;
export const HELOAN_RANGE = { min: 25_000, max: 500_000 } as const;
export const OVERALL_TARGET = { min: 100_000, max: 3_500_000 } as const;

/* ── Display helpers ─────────────────────────────────────────────────────── */

export const HELOC_DISPLAY = '$50K\u2013$750K';
export const HELOAN_DISPLAY = '$25K\u2013$500K';
export const OVERALL_DISPLAY = '$100K\u2013$3.5M';
export const STATES_DISPLAY = 'California and Washington';

/* ── Qualification types ─────────────────────────────────────────────────── */

export type QualificationStatus = 'in_scope' | 'referral_candidate';

export type OutOfScopeReason =
  | 'unsupported_state'
  | 'oversize_equity'
  | 'outside_target_range';

export interface QualificationResult {
  status: QualificationStatus;
  reason?: OutOfScopeReason;
}

/* ── Qualification input ─────────────────────────────────────────────────── */

export interface QualifyInput {
  /** Two-letter state abbreviation, e.g. "CA" */
  state?: string;
  /** HELOC requested amount in dollars */
  helocAmount?: number;
  /** HELOAN requested amount in dollars */
  heloanAmount?: number;
  /** General loan amount in dollars */
  loanAmount?: number;
}

/* ── Qualification logic ─────────────────────────────────────────────────── */

function isLicensedState(state: string): state is LicensedState {
  return (LICENSED_STATES as readonly string[]).includes(state.toUpperCase());
}

/**
 * Evaluate whether a lead falls within Mo's lending scope.
 *
 * Checks are ordered by priority:
 *  1. State eligibility
 *  2. HELOC size cap
 *  3. HELOAN size cap
 *  4. Overall target range
 */
export function qualify(input: QualifyInput): QualificationResult {
  // 1. State eligibility
  if (input.state && !isLicensedState(input.state)) {
    return { status: 'referral_candidate', reason: 'unsupported_state' };
  }

  // 2. HELOC size cap
  if (
    input.helocAmount !== undefined &&
    input.helocAmount > HELOC_RANGE.max
  ) {
    return { status: 'referral_candidate', reason: 'oversize_equity' };
  }

  // 3. HELOAN size cap
  if (
    input.heloanAmount !== undefined &&
    input.heloanAmount > HELOAN_RANGE.max
  ) {
    return { status: 'referral_candidate', reason: 'oversize_equity' };
  }

  // 4. General loan amount range
  if (input.loanAmount !== undefined) {
    if (
      input.loanAmount < OVERALL_TARGET.min ||
      input.loanAmount > OVERALL_TARGET.max
    ) {
      return { status: 'referral_candidate', reason: 'outside_target_range' };
    }
  }

  // All checks pass
  return { status: 'in_scope' };
}

/* ── Behavioral lead scoring ─────────────────────────────────────────────── */

export interface LeadSignals {
  /** Two-letter state abbreviation, e.g. 'CA' | 'WA' | 'Other' */
  state?: string;
  /** Purchase timeline */
  timeline?: 'ready_now' | '1_3_months' | '3_6_months' | 'researching';
  /** Which calculator or source page was used */
  toolSource?: string;
  /** Inferred loan type (populated from toolSource if not explicit) */
  loanType?: string;
  /** Whether the user provided a phone number */
  hasPhone?: boolean;
}

export interface LeadScore {
  /** 0–100 composite score */
  score: number;
  tier: 'hot' | 'warm' | 'cold' | 'nurture';
  priority: 'high' | 'medium' | 'low';
  /** Human-readable next step for Mo */
  suggestedAction: string;
  /** CRM tags derived from signals */
  tags: string[];
}

/**
 * Score a lead based on behavioral signals collected from forms and tools.
 * Returns a composite score, tier, priority, suggested action, and CRM tags.
 */
export function scoreLead(signals: LeadSignals): LeadScore {
  let score = 0;
  const tags: string[] = [];

  // ── State scoring ──────────────────────────────────────────────────────
  if (signals.state) {
    const upperState = signals.state.toUpperCase();
    if (upperState === 'CA' || upperState === 'WA') {
      score += 20;
      tags.push(upperState === 'CA' ? 'ca_borrower' : 'wa_borrower');
    } else {
      score -= 30;
      tags.push('out_of_state');
    }
  }

  // ── Timeline scoring ──────────────────────────────────────────────────
  if (signals.timeline) {
    switch (signals.timeline) {
      case 'ready_now':
        score += 30;
        tags.push('ready_now');
        break;
      case '1_3_months':
        score += 15;
        tags.push('timeline_1_3mo');
        break;
      case '3_6_months':
        score += 5;
        tags.push('timeline_3_6mo');
        break;
      case 'researching':
        // 0 points
        tags.push('researching');
        break;
    }
  }

  // ── Tool source / loan type scoring ───────────────────────────────────
  if (signals.toolSource) {
    const src = signals.toolSource.toLowerCase();

    if (src.startsWith('dscr') || src.includes('dscr') || src === 'investment') {
      score += 15;
      tags.push('dscr_investor');
    } else if (
      src.includes('bank_statement') ||
      src.includes('bank-statement') ||
      src.includes('self_employed') ||
      src.includes('self-employed')
    ) {
      score += 15;
      tags.push('self_employed');
    } else if (
      src.includes('affordability') ||
      src.includes('first_time') ||
      src.includes('first-time')
    ) {
      score += 10;
      tags.push('first_time_buyer');
    } else if (
      src.includes('heloc') ||
      src.includes('cash_out') ||
      src.includes('cash-out')
    ) {
      score += 12;
      tags.push('equity_product');
    }
  }

  // ── Phone number bonus ────────────────────────────────────────────────
  if (signals.hasPhone) {
    score += 10;
    tags.push('phone_provided');
  }

  // ── Clamp score to 0–100 ──────────────────────────────────────────────
  score = Math.max(0, Math.min(100, score));

  // ── Tier & priority determination ─────────────────────────────────────
  let tier: LeadScore['tier'];
  let priority: LeadScore['priority'];
  let suggestedAction: string;

  if (score >= 70) {
    tier = 'hot';
    priority = 'high';
    suggestedAction = 'Call within 1 hour';
  } else if (score >= 45) {
    tier = 'warm';
    priority = 'medium';
    suggestedAction = 'Call within 24 hours';
  } else if (score >= 20) {
    tier = 'cold';
    priority = 'low';
    suggestedAction = 'Add to email nurture sequence';
  } else {
    tier = 'nurture';
    priority = 'low';
    suggestedAction = 'Monthly newsletter only';
  }

  return { score, tier, priority, suggestedAction, tags };
}

// ---------------------------------------------------------------------------
// Slice 5 — Pre-qualification widget surface
// Richer sibling to qualify(). Used by /contact widget to gate the form.
// ---------------------------------------------------------------------------

import { LOAN_CAPS } from '@/lib/loan-caps';

export const MAX_HOME_VALUE = 5_000_000;

export type PrequalProduct =
  | 'heloc'
  | 'cashOut'
  | 'rateTerm'
  | 'purchase'
  | 'dscr'
  | 'other';

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

export function capForProduct(product: PrequalProduct): number {
  switch (product) {
    case 'heloc': return LOAN_CAPS.heloc;
    case 'cashOut': return LOAN_CAPS.cashOut;
    case 'dscr': return LOAN_CAPS.dscr;
    case 'rateTerm':
    case 'purchase':
    case 'other':
      return LOAN_CAPS.jumbo;
  }
}

export function isPrequalified(input: PrequalInput): PrequalResult {
  const reasons: PrequalFailReason[] = [];

  if (input.homeValue > MAX_HOME_VALUE) {
    reasons.push({
      type: 'home-value-exceeds-icp',
      limit: MAX_HOME_VALUE,
      actual: input.homeValue,
    });
  }

  const cap = capForProduct(input.product);
  if (input.desiredLoan > cap) {
    reasons.push({
      type: 'product-cap-exceeded',
      product: input.product,
      cap,
      actual: input.desiredLoan,
    });
  }

  if (reasons.length === 0) return { qualified: true };
  return { qualified: false, reasons };
}
