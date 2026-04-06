// ---------------------------------------------------------------------------
// Intent Tracking — GA4 & Meta Pixel behavioral event helpers
// Import these helpers in page components to fire intent signals when users
// land on specific pages or interact with tools.
// ---------------------------------------------------------------------------

export type IntentCategory =
  | 'dscr_intent'
  | 'self_employed_intent'
  | 'heloc_intent'
  | 'purchase_intent'
  | 'refi_intent'
  | 'jumbo_intent'
  | 'va_intent'
  | 'fha_intent';

/** Map pathname segments to intent categories. */
const INTENT_MAP: Array<{ patterns: string[]; category: IntentCategory }> = [
  {
    patterns: ['dscr', 'investment', 'fix-flip', 'foreign-national'],
    category: 'dscr_intent',
  },
  {
    patterns: [
      'bank-statement',
      'self-employed',
      'non-qm',
      'profit-loss',
      'asset-depletion',
    ],
    category: 'self_employed_intent',
  },
  {
    patterns: ['heloc', 'heloan', 'home-equity', 'cash-out'],
    category: 'heloc_intent',
  },
  {
    patterns: ['purchase', 'first-time', 'affordability'],
    category: 'purchase_intent',
  },
  {
    patterns: ['refinance', 'rate-term'],
    category: 'refi_intent',
  },
  {
    patterns: ['jumbo', 'luxury'],
    category: 'jumbo_intent',
  },
  {
    patterns: ['va-loan', 'va-refinance'],
    category: 'va_intent',
  },
  {
    patterns: ['fha'],
    category: 'fha_intent',
  },
];

/** Resolve a pathname to its intent category, or null if unrecognised. */
function resolveIntent(pathname: string): IntentCategory | null {
  const lower = pathname.toLowerCase();
  for (const { patterns, category } of INTENT_MAP) {
    if (patterns.some((p) => lower.includes(p))) {
      return category;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Safe window accessor helpers
// ---------------------------------------------------------------------------

type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;
type FbqFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;

function gtag(command: string, eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof g === 'function') {
    g(command, eventName, params);
  }
}

function fbq(command: string, eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  const f = (window as unknown as { fbq?: FbqFn }).fbq;
  if (typeof f === 'function') {
    f(command, eventName, params);
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Determine the intent category from the current pathname and fire GA4 +
 * Meta Pixel events. Call this on mount inside page components.
 *
 * @example
 *   useEffect(() => { trackIntentFromPath(pathname); }, [pathname]);
 */
export function trackIntentFromPath(pathname: string): void {
  const intentCategory = resolveIntent(pathname);
  if (!intentCategory) return;

  gtag('event', 'page_intent', {
    intent_category: intentCategory,
    pathname,
  });

  fbq('trackCustom', 'MortgageIntent', {
    intent_category: intentCategory,
  });
}

/**
 * Track calculator / tool engagement events.
 *
 * @param toolName  - Identifier for the tool, e.g. 'dscr_calculator'
 * @param action    - 'started' | 'completed' | 'converted'
 *
 * @example
 *   trackToolEngagement('dscr_calculator', 'started');
 */
export function trackToolEngagement(
  toolName: string,
  action: 'started' | 'completed' | 'converted',
): void {
  gtag('event', 'tool_engagement', {
    tool_name: toolName,
    action,
  });

  fbq('trackCustom', 'ToolEngagement', {
    tool_name: toolName,
    action,
  });
}

/**
 * Track when a lead magnet (guide, checklist, resource) is viewed.
 *
 * @param magnetName - Human-readable name of the magnet, e.g. 'DSCR Guide PDF'
 */
export function trackLeadMagnetView(magnetName: string): void {
  gtag('event', 'lead_magnet_view', {
    magnet_name: magnetName,
  });
}

/**
 * Track when a lead magnet converts (form submitted / download triggered).
 * Fires a GA4 conversion event and a Meta Pixel Lead event.
 *
 * @param magnetName - Human-readable name of the magnet
 */
export function trackLeadMagnetConversion(magnetName: string): void {
  gtag('event', 'lead_magnet_conversion', {
    magnet_name: magnetName,
    value: 5,
  });

  fbq('track', 'Lead', {
    content_name: magnetName,
  });
}
