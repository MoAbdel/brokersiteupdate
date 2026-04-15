import {
  HELOC_EXAMPLE,
  CASH_OUT_EXAMPLE,
  DSCR_EXAMPLE,
  type ScenarioKey,
} from '@/lib/example-scenarios';

interface ScenarioExampleProps {
  scenario: ScenarioKey;
  heading?: string;
  className?: string;
}

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

interface Row { label: string; value: string; }

function rowsFor(scenario: ScenarioKey): Row[] {
  switch (scenario) {
    case 'heloc':
      return [
        { label: 'Home Value', value: dollar.format(HELOC_EXAMPLE.homeValue) },
        { label: 'Current Mortgage', value: dollar.format(HELOC_EXAMPLE.currentMortgage) },
        { label: 'Available Equity', value: dollar.format(HELOC_EXAMPLE.availableEquity) },
        { label: 'HELOC Amount', value: dollar.format(HELOC_EXAMPLE.helocAmount) },
      ];
    case 'cashOut':
      return [
        { label: 'Home Value', value: dollar.format(CASH_OUT_EXAMPLE.homeValue) },
        { label: 'Current Mortgage', value: dollar.format(CASH_OUT_EXAMPLE.currentMortgage) },
        { label: 'Cash-Out Amount', value: dollar.format(CASH_OUT_EXAMPLE.cashOut) },
        { label: 'New Loan', value: dollar.format(CASH_OUT_EXAMPLE.newLoan) },
      ];
    case 'dscr':
      return [
        { label: 'Property Value', value: dollar.format(DSCR_EXAMPLE.propertyValue) },
        { label: 'Monthly Rent', value: dollar.format(DSCR_EXAMPLE.monthlyRent) },
        { label: 'Loan Amount', value: dollar.format(DSCR_EXAMPLE.loanAmount) },
        { label: 'Monthly PITI', value: dollar.format(DSCR_EXAMPLE.monthlyPITI) },
        { label: 'DSCR Ratio', value: DSCR_EXAMPLE.dscrRatio.toFixed(2) },
      ];
  }
}

const DEFAULT_HEADING: Record<ScenarioKey, string> = {
  heloc: 'HELOC Example',
  cashOut: 'Cash-Out Refinance Example',
  dscr: 'DSCR Investment Loan Example',
};

export default function ScenarioExample({
  scenario,
  heading,
  className = '',
}: ScenarioExampleProps) {
  const rows = rowsFor(scenario);
  const title = heading ?? DEFAULT_HEADING[scenario];

  return (
    <div
      className={`border border-slate-200 rounded-lg p-6 bg-white ${className}`}
      data-testid={`scenario-${scenario}`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <dl className="grid grid-cols-2 gap-y-2">
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <dt className="text-slate-600">{r.label}</dt>
            <dd className="text-right font-medium text-slate-900">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-slate-500">
        Illustrative example — not a rate quote.
      </p>
    </div>
  );
}
