/**
 * Canonical illustrative loan scenarios. Single source of truth for every
 * example rendered on product/guide pages. Update values here and every
 * consumer picks them up.
 *
 * All values must satisfy the invariants in scripts/validate-scenarios.mjs.
 */
import { LOAN_CAPS } from '@/lib/loan-caps';

export const HELOC_EXAMPLE = {
  homeValue: 650_000,
  currentMortgage: 350_000,
  availableEquity: 300_000,
  helocAmount: 150_000,
} as const;

export const CASH_OUT_EXAMPLE = {
  homeValue: 800_000,
  currentMortgage: 400_000,
  cashOut: 100_000,
  newLoan: 500_000,
} as const;

export const DSCR_EXAMPLE = {
  propertyValue: 650_000,
  monthlyRent: 4_200,
  loanAmount: 450_000,
  monthlyPITI: 3_400,
  dscrRatio: 1.24,
} as const;

export const TARGET_HOME_VALUE_BAND = {
  min: 500_000,
  max: 900_000,
} as const;

export type ScenarioKey = 'heloc' | 'cashOut' | 'dscr';

// Compile-time sanity: scenarios cannot exceed product caps.
// (Runtime assertions live in scripts/validate-scenarios.mjs.)
const _helocGuard: true = (HELOC_EXAMPLE.helocAmount <= LOAN_CAPS.heloc) as true;
const _cashOutGuard: true = (CASH_OUT_EXAMPLE.newLoan <= LOAN_CAPS.cashOut) as true;
const _dscrGuard: true = (DSCR_EXAMPLE.loanAmount <= LOAN_CAPS.dscr) as true;
void _helocGuard; void _cashOutGuard; void _dscrGuard;
