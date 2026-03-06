// lib/loan-finder-logic.ts

export type GoalOption =
  | 'buy_primary'
  | 'buy_investment'
  | 'refinance'
  | 'equity_access'
  | 'buy_vacation';

export type IncomeOption =
  | 'w2'
  | 'self_employed'
  | 'retired'
  | 'foreign_national'
  | 'multiple';

export type PropertyOption =
  | 'sfr'
  | 'condo'
  | 'multi_2_4'
  | 'commercial_5plus'
  | 'str';

export type DocOption =
  | 'full_docs'
  | 'bank_statements'
  | 'minimal_docs'
  | 'not_sure';

export type LocationOption = {
  state: 'ca' | 'wa' | '';
  zip?: string;
};

export interface QuizAnswers {
  goal: GoalOption | null;
  income: IncomeOption | null;
  property: PropertyOption | null;
  documentation: DocOption | null;
  location: LocationOption;
}

export type MatchConfidence = 'strong' | 'likely' | 'exploring';

export interface ProgramMatch {
  programName: string;
  confidence: MatchConfidence;
  reasons: string[];
  calculatorLink: string | null;
  calculatorLabel: string | null;
}

export interface QuizResult {
  primary: ProgramMatch;
  secondary: ProgramMatch | null;
  condoNote: boolean;
  redirectToContact: boolean;
  contactMessage: string | null;
  contactChecklist: string[] | null;
}

export interface GatedQuizReport {
  programComparison: {
    programName: string;
    pros: string[];
    cons: string[];
    bestFor: string;
  }[];
  requiredDocs: string[];
  timelineWeeks: string;
  brokerQuestions: string[];
}

const CONFIDENCE_LABELS: Record<MatchConfidence, string> = {
  strong: 'Strong Match',
  likely: 'Likely Fit',
  exploring: 'Worth Exploring',
};

export function getConfidenceLabel(c: MatchConfidence): string {
  return CONFIDENCE_LABELS[c];
}

export function getQuizResult(answers: QuizAnswers): QuizResult {
  const { goal, income, property, documentation } = answers;
  const condoNote = property === 'condo';

  // Special case: 5+ unit / commercial
  if (property === 'commercial_5plus') {
    return {
      primary: {
        programName: 'Commercial Loan',
        confidence: 'exploring',
        reasons: ['Commercial property financing requires a custom analysis'],
        calculatorLink: null,
        calculatorLabel: null,
      },
      secondary: null,
      condoNote: false,
      redirectToContact: true,
      contactMessage:
        'Commercial property financing requires a custom analysis. Here\'s what to have ready for our call:',
      contactChecklist: [
        'Property address and unit count',
        'Current rent roll or projected rents',
        'Purchase price or estimated value',
        'Entity structure (LLC, partnership, etc.)',
        'Your experience with commercial properties',
      ],
    };
  }

  // Special case: "multiple/complicated" income or "not sure" docs
  if (income === 'multiple' || documentation === 'not_sure') {
    return {
      primary: {
        programName: 'Custom Scenario Review',
        confidence: 'likely',
        reasons: [
          'Your situation has variables that a calculator can\'t capture well',
          'That\'s actually common — and exactly why working with a broker who accesses 200+ lenders matters',
        ],
        calculatorLink: null,
        calculatorLabel: null,
      },
      secondary: null,
      condoNote,
      redirectToContact: true,
      contactMessage:
        'Your situation benefits from a personalized scenario review. Here\'s what would help Mo give you an accurate answer:',
      contactChecklist: [
        'Rough estimate of your annual income (all sources)',
        'Target purchase price or current home value',
        'Down payment or equity available',
        'A brief description of your income sources',
      ],
    };
  }

  // Special case: foreign national
  if (income === 'foreign_national') {
    return {
      primary: {
        programName: 'Foreign National Loan',
        confidence: 'likely',
        reasons: [
          'Foreign national programs don\'t require US credit history or social security number',
          'Available for purchases and refinances in California and Washington',
          'Typically requires 25-30% down payment',
        ],
        calculatorLink: '/loan-programs/foreign-national-loans',
        calculatorLabel: 'View Foreign National Programs',
      },
      secondary: null,
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Special case: retired + equity access -> HECM
  if (income === 'retired' && (goal === 'equity_access' || goal === 'refinance')) {
    return {
      primary: {
        programName: 'HECM Reverse Mortgage',
        confidence: 'strong',
        reasons: [
          'Designed specifically for homeowners 62+ on fixed income',
          'Access equity without monthly mortgage payments',
          'FHA-insured with borrower protections',
        ],
        calculatorLink: '/loan-programs/hecm-reverse-mortgage',
        calculatorLabel: 'Learn About HECM Programs',
      },
      secondary: {
        programName: 'HELOC',
        confidence: 'exploring',
        reasons: ['If you\'re under 62 or prefer a traditional credit line'],
        calculatorLink: '/tools/max-heloc-calculator',
        calculatorLabel: 'HELOC Calculator',
      },
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Self-employed -> Bank Statement
  if (income === 'self_employed' || documentation === 'bank_statements') {
    const secondary: ProgramMatch | null =
      goal === 'buy_investment' || property === 'str'
        ? {
            programName: 'DSCR Investment Loan',
            confidence: 'exploring',
            reasons: ['If the property\'s rental income covers the mortgage, DSCR may qualify without income docs'],
            calculatorLink: '/tools/dscr-qualification-calculator',
            calculatorLabel: 'DSCR Calculator',
          }
        : null;

    return {
      primary: {
        programName: 'Bank Statement Loan',
        confidence: 'strong',
        reasons: [
          'Uses 12 or 24 months of bank deposits instead of tax returns',
          'Ideal for self-employed borrowers whose tax returns understate income',
          'Available for purchases and refinances',
        ],
        calculatorLink: '/tools/bank-statement-loan-estimator',
        calculatorLabel: 'Bank Statement Estimator',
      },
      secondary,
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Investment property or STR -> DSCR
  if (goal === 'buy_investment' || property === 'str') {
    return {
      primary: {
        programName: 'DSCR Investment Loan',
        confidence: 'strong',
        reasons: [
          'Qualifies based on rental income, not your personal income',
          'No tax returns, W-2s, or employment verification required',
          'Available for long-term and short-term rentals',
        ],
        calculatorLink: '/tools/dscr-qualification-calculator',
        calculatorLabel: 'DSCR Calculator',
      },
      secondary: {
        programName: 'Conventional Investment Loan',
        confidence: 'exploring',
        reasons: ['If you have strong W-2 income, conventional rates may be lower than DSCR'],
        calculatorLink: '/loan-programs/conventional-loans',
        calculatorLabel: 'View Conventional Programs',
      },
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Equity access -> Equity Comparison / HELOC
  if (goal === 'equity_access') {
    return {
      primary: {
        programName: 'HELOC',
        confidence: 'strong',
        reasons: [
          'Flexible draw period — access funds as needed',
          'Interest-only payments during draw period keep costs low',
          'No need to refinance your existing mortgage',
        ],
        calculatorLink: '/tools/max-heloc-calculator',
        calculatorLabel: 'HELOC Calculator',
      },
      secondary: {
        programName: 'Cash-Out Refinance',
        confidence: 'likely',
        reasons: ['If current rates are near or below your existing rate, cash-out refi may offer a larger lump sum at a fixed rate'],
        calculatorLink: '/tools/cash-out-limit-calculator',
        calculatorLabel: 'Cash-Out Calculator',
      },
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Refinance -> Cash-Out or Rate & Term
  if (goal === 'refinance') {
    return {
      primary: {
        programName: 'Rate & Term Refinance',
        confidence: 'likely',
        reasons: [
          'Lower your rate or change your loan term',
          'No cash out — focused on payment reduction',
          'Typically lower closing costs than cash-out',
        ],
        calculatorLink: '/loan-programs/rate-term-refinance',
        calculatorLabel: 'View Refinance Programs',
      },
      secondary: {
        programName: 'Cash-Out Refinance',
        confidence: 'exploring',
        reasons: ['If you also want to access equity, cash-out refi combines both goals'],
        calculatorLink: '/tools/cash-out-limit-calculator',
        calculatorLabel: 'Cash-Out Calculator',
      },
      condoNote,
      redirectToContact: false,
      contactMessage: null,
      contactChecklist: null,
    };
  }

  // Default: W-2 + buy primary/vacation -> Conventional/FHA/VA
  return {
    primary: {
      programName: 'Conventional Mortgage',
      confidence: 'strong',
      reasons: [
        'Best rates available for W-2 borrowers with full documentation',
        'As low as 3% down for first-time buyers',
        'No mortgage insurance with 20% down',
      ],
      calculatorLink: '/tools/mortgage-calculator',
      calculatorLabel: 'Mortgage Calculator',
    },
    secondary: {
      programName: 'FHA Loan',
      confidence: 'exploring',
      reasons: ['If your credit score is 580-699 or down payment is limited, FHA offers more flexible qualification'],
      calculatorLink: '/loan-programs/fha-loans',
      calculatorLabel: 'View FHA Programs',
    },
    condoNote,
    redirectToContact: false,
    contactMessage: null,
    contactChecklist: null,
  };
}

export function getGatedQuizReport(answers: QuizAnswers, result: QuizResult): GatedQuizReport {
  const programs: GatedQuizReport['programComparison'] = [];

  // Always include primary
  programs.push(getProgramDetails(result.primary.programName, answers));

  // Include secondary if exists
  if (result.secondary) {
    programs.push(getProgramDetails(result.secondary.programName, answers));
  }

  const requiredDocs = getDocsForProgram(result.primary.programName, answers);

  const timelineWeeks = getTimeline(result.primary.programName);

  const brokerQuestions = [
    'What is the lowest rate you can offer for my specific scenario?',
    'Are there any lender credits or closing cost options available?',
    `What are the specific requirements for ${result.primary.programName} programs?`,
    'How long will the approval process take from application to closing?',
    'Are there any alternative programs I should consider?',
  ];

  return { programComparison: programs, requiredDocs, timelineWeeks, brokerQuestions };
}

function getProgramDetails(
  programName: string,
  answers: QuizAnswers,
): GatedQuizReport['programComparison'][number] {
  const defaults = {
    programName,
    pros: ['Competitive rates', 'Wide lender availability'],
    cons: ['Standard documentation required'],
    bestFor: 'Most borrowers',
  };

  switch (programName) {
    case 'Conventional Mortgage':
      return {
        programName,
        pros: ['Lowest rates for qualified borrowers', 'No mortgage insurance at 80% LTV', 'Flexible property types'],
        cons: ['Requires full income documentation', 'Higher credit score standards (620+)', 'Stricter DTI limits'],
        bestFor: 'W-2 employees with good credit and standard documentation',
      };
    case 'FHA Loan':
      return {
        programName,
        pros: ['580+ credit score accepted', '3.5% minimum down payment', 'More flexible DTI ratios'],
        cons: ['Mortgage insurance for life of loan', 'Property must meet FHA standards', 'Loan limits apply'],
        bestFor: 'First-time buyers or those with lower credit scores',
      };
    case 'Bank Statement Loan':
      return {
        programName,
        pros: ['No tax returns required', 'Uses actual deposit history', '12 or 24 month options'],
        cons: ['Higher rates than conventional (typically 0.5-1.5%)', 'Usually requires 10-20% down', 'Fewer lender options'],
        bestFor: `Self-employed borrowers whose tax returns understate income`,
      };
    case 'DSCR Investment Loan':
      return {
        programName,
        pros: ['No personal income verification', 'Unlimited properties', 'Close in LLC or entity name'],
        cons: ['Higher rates (typically 1-2% above conventional)', 'Usually 20-25% down required', 'Property must generate rental income'],
        bestFor: 'Real estate investors focused on rental property cash flow',
      };
    case 'HELOC':
      return {
        programName,
        pros: ['Draw funds as needed', 'Interest-only payments during draw period', 'Keep your existing mortgage rate'],
        cons: ['Variable rate', 'Potential for rate increases', 'Draw period eventually ends'],
        bestFor: answers.goal === 'equity_access' ? 'Homeowners who want flexible access to equity' : 'Homeowners with equity',
      };
    case 'Cash-Out Refinance':
      return {
        programName,
        pros: ['Fixed rate on entire balance', 'Potentially lower blended rate', 'Large lump sum available'],
        cons: ['Replaces your existing mortgage', 'Higher closing costs', 'Resets your loan term'],
        bestFor: 'Homeowners who want a lump sum at a fixed rate',
      };
    case 'Rate & Term Refinance':
      return {
        programName,
        pros: ['Lower monthly payment', 'Shorter loan term option', 'Lower closing costs than cash-out'],
        cons: ['Resets your loan term', 'Must qualify at current rates', 'Closing costs apply'],
        bestFor: 'Homeowners looking to reduce their rate or change loan terms',
      };
    case 'HECM Reverse Mortgage':
      return {
        programName,
        pros: ['No monthly mortgage payments', 'FHA-insured', 'Stay in your home'],
        cons: ['Must be 62+', 'Reduces estate value', 'Upfront and ongoing mortgage insurance'],
        bestFor: 'Homeowners 62+ who want to access equity without monthly payments',
      };
    default:
      return defaults;
  }
}

function getDocsForProgram(programName: string, answers: QuizAnswers): string[] {
  const base = ['Valid government-issued photo ID', 'Two months of bank statements'];

  switch (programName) {
    case 'Conventional Mortgage':
    case 'FHA Loan':
    case 'Rate & Term Refinance':
      return [...base, 'Last 2 years of W-2s', 'Last 2 years of tax returns', 'Last 30 days of pay stubs', 'Current mortgage statement (if refinancing)'];
    case 'Bank Statement Loan':
      return [...base, '12 or 24 months of personal or business bank statements', 'Business license (2+ years)', 'CPA letter or P&L statement', 'Asset documentation'];
    case 'DSCR Investment Loan':
      return [...base, 'Current lease agreement or market rent analysis', 'Property insurance quote', 'Entity documents (if purchasing in LLC)', 'No personal income docs needed'];
    case 'HELOC':
    case 'Cash-Out Refinance':
      return [...base, 'Current mortgage statement', 'Home insurance declaration page', 'Recent property tax bill', answers.income === 'self_employed' ? '12-24 months bank statements' : 'Last 30 days of pay stubs'];
    case 'HECM Reverse Mortgage':
      return [...base, 'Proof of age (62+)', 'Homeowner\'s insurance', 'Property tax payment history', 'HUD counseling certificate'];
    default:
      return base;
  }
}

function getTimeline(programName: string): string {
  switch (programName) {
    case 'Conventional Mortgage':
    case 'FHA Loan':
      return '4-6 weeks';
    case 'Bank Statement Loan':
      return '3-5 weeks';
    case 'DSCR Investment Loan':
      return '3-4 weeks';
    case 'HELOC':
      return '2-4 weeks';
    case 'Cash-Out Refinance':
    case 'Rate & Term Refinance':
      return '3-5 weeks';
    case 'HECM Reverse Mortgage':
      return '6-8 weeks (includes required counseling)';
    default:
      return '3-5 weeks';
  }
}
