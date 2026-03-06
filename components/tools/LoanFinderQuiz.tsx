'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import type { QuizAnswers, GoalOption, IncomeOption, PropertyOption, DocOption, LocationOption } from '@/lib/loan-finder-logic';
import QuizResults from '@/components/tools/QuizResults';

interface QuizOption<T extends string> {
  value: T;
  label: string;
  description?: string;
}

const GOAL_OPTIONS: QuizOption<GoalOption>[] = [
  { value: 'buy_primary', label: 'Buy a home to live in', description: 'Primary residence purchase' },
  { value: 'buy_investment', label: 'Buy an investment/rental property', description: 'Rental income property' },
  { value: 'refinance', label: 'Refinance my current home', description: 'Lower rate or change terms' },
  { value: 'equity_access', label: 'Access my home equity', description: 'HELOC or cash-out' },
  { value: 'buy_vacation', label: 'Buy a second/vacation home', description: 'Second home purchase' },
];

const INCOME_OPTIONS: QuizOption<IncomeOption>[] = [
  { value: 'w2', label: 'W-2 employee', description: 'Salaried or hourly' },
  { value: 'self_employed', label: 'Self-employed / business owner', description: 'Own a business or freelance' },
  { value: 'retired', label: 'Retired / fixed income', description: 'Social Security, pension, investments' },
  { value: 'foreign_national', label: 'Foreign national / non-US income', description: 'Income earned outside the US' },
  { value: 'multiple', label: "Multiple sources / it's complicated", description: 'More than one type above' },
];

const PROPERTY_OPTIONS: QuizOption<PropertyOption>[] = [
  { value: 'sfr', label: 'Single-family home' },
  { value: 'condo', label: 'Condo / townhome' },
  { value: 'multi_2_4', label: '2-4 unit multi-family' },
  { value: 'commercial_5plus', label: '5+ unit / commercial' },
  { value: 'str', label: 'Short-term rental (Airbnb/VRBO)' },
];

const DOC_OPTIONS: QuizOption<DocOption>[] = [
  { value: 'full_docs', label: 'I can provide full tax returns and W-2s' },
  { value: 'bank_statements', label: "I'd prefer to use bank statements instead of tax returns" },
  { value: 'minimal_docs', label: 'I have minimal documentation available' },
  { value: 'not_sure', label: "I'm not sure what I'll need" },
];

const STEPS = [
  { key: 'goal' as const, title: "What's your goal?", subtitle: 'Select the option that best describes what you want to do.' },
  { key: 'income' as const, title: 'How do you earn your income?', subtitle: 'This helps us match you to the right documentation type.' },
  { key: 'property' as const, title: 'What type of property?', subtitle: 'Select the property type you\'re interested in.' },
  { key: 'documentation' as const, title: 'How would you describe your documentation situation?', subtitle: 'Different programs have different documentation requirements.' },
  { key: 'location' as const, title: "Where's the property?", subtitle: 'Select the state — we serve all of California and Washington.' },
];

export default function LoanFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    goal: null,
    income: null,
    property: null,
    documentation: null,
    location: { state: '', zip: '' },
  });
  const [showResults, setShowResults] = useState(false);

  const handleSelect = useCallback(
    (key: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [key]: value }));
      // Auto-advance after short delay
      setTimeout(() => {
        if (step < STEPS.length - 1) {
          setStep((s) => s + 1);
        }
      }, 200);
    },
    [step],
  );

  const handleLocationSelect = useCallback((state: 'ca' | 'wa') => {
    setAnswers((prev) => ({ ...prev, location: { state, zip: '' } }));
    setTimeout(() => setShowResults(true), 200);
  }, []);

  const handleBack = useCallback(() => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 0) {
      setStep((s) => s - 1);
    }
  }, [step, showResults]);

  const handleRestart = useCallback(() => {
    setStep(0);
    setShowResults(false);
    setAnswers({ goal: null, income: null, property: null, documentation: null, location: { state: '', zip: '' } });
  }, []);

  if (showResults) {
    return (
      <div>
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to questions
          </button>
          <button
            onClick={handleRestart}
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            Start over
          </button>
        </div>
        <QuizResults answers={answers} />
      </div>
    );
  }

  const currentStep = STEPS[step];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-500">Question {step + 1} of {STEPS.length}</span>
          {step > 0 && (
            <button
              onClick={handleBack}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentStep.title}</h2>
        <p className="text-slate-600">{currentStep.subtitle}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentStep.key === 'goal' &&
          GOAL_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.value}
              label={opt.label}
              description={opt.description}
              selected={answers.goal === opt.value}
              onClick={() => handleSelect('goal', opt.value)}
            />
          ))}

        {currentStep.key === 'income' &&
          INCOME_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.value}
              label={opt.label}
              description={opt.description}
              selected={answers.income === opt.value}
              onClick={() => handleSelect('income', opt.value)}
            />
          ))}

        {currentStep.key === 'property' &&
          PROPERTY_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.value}
              label={opt.label}
              description={opt.description}
              selected={answers.property === opt.value}
              onClick={() => handleSelect('property', opt.value)}
            />
          ))}

        {currentStep.key === 'documentation' &&
          DOC_OPTIONS.map((opt) => (
            <OptionButton
              key={opt.value}
              label={opt.label}
              description={opt.description}
              selected={answers.documentation === opt.value}
              onClick={() => handleSelect('documentation', opt.value)}
            />
          ))}

        {currentStep.key === 'location' && (
          <div className="space-y-3">
            <OptionButton
              label="California"
              description="All 58 counties"
              selected={answers.location.state === 'ca'}
              onClick={() => handleLocationSelect('ca')}
            />
            <OptionButton
              label="Washington"
              description="All 39 counties"
              selected={answers.location.state === 'wa'}
              onClick={() => handleLocationSelect('wa')}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function OptionButton({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
        selected
          ? 'border-slate-900 bg-slate-50'
          : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50'
      }`}
    >
      <span className="font-medium text-slate-900">{label}</span>
      {description && <span className="block text-sm text-slate-500 mt-0.5">{description}</span>}
    </button>
  );
}
