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
export const OVERALL_TARGET = { min: 100_000, max: 3_000_000 } as const;

/* ── Display helpers ─────────────────────────────────────────────────────── */

export const HELOC_DISPLAY = '$50K\u2013$750K';
export const HELOAN_DISPLAY = '$25K\u2013$500K';
export const OVERALL_DISPLAY = '$100K\u2013$3M';
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
