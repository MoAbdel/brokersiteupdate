'use client';

import React, { useState, useEffect } from 'react';
import { ClipboardList, Search, BarChart3, ShieldCheck, Key } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Quick Application', icon: ClipboardList, duration: 1000 },
  { id: 2, label: 'We Shop 50+ Lenders', icon: Search, duration: 1200 },
  { id: 3, label: 'Compare Your Options', icon: BarChart3, duration: 1000 },
  { id: 4, label: 'Lock Your Rate', icon: ShieldCheck, duration: 1000 },
  { id: 5, label: 'Close', icon: Key, duration: 2000 },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRef = React.useRef(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Total cycle: 5 steps with varying durations + reset + hold
    // We'll use a simpler interval-based approach
    const stepDurations = [1000, 1200, 1000, 1000, 2000]; // durations for each step
    let currentStep = 0;
    let stepStartTime = Date.now();
    let holdingComplete = false;
    let holdStartTime = 0;

    const tick = () => {
      const now = Date.now();

      if (holdingComplete) {
        // We're in the "hold complete" phase (1 second)
        if (now - holdStartTime >= 1000) {
          // Reset and start over
          currentStep = 0;
          stepStartTime = now;
          holdingComplete = false;
          setActiveStep(0);
        }
        return;
      }

      if (currentStep === 0) {
        // Brief reset pause (200ms)
        if (now - stepStartTime >= 200) {
          currentStep = 1;
          stepStartTime = now;
          setActiveStep(1);
        }
        return;
      }

      // Check if current step duration has elapsed
      const currentDuration = stepDurations[currentStep - 1] || 1000;
      if (now - stepStartTime >= currentDuration) {
        if (currentStep < 5) {
          currentStep++;
          stepStartTime = now;
          setActiveStep(currentStep);
        } else {
          // All steps complete, enter hold phase
          holdingComplete = true;
          holdStartTime = now;
        }
      }
    };

    // Start with step 1 visible immediately
    setActiveStep(1);

    // Run animation loop
    intervalRef.current = setInterval(tick, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get a Mortgage with a Wholesale Broker",
    "description": "5-step mortgage process from application to closing with access to 50+ wholesale lenders",
    "totalTime": "P21D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Submit Application", "text": "Complete a quick mortgage application — no upfront credit check required. Takes about 10-15 minutes." },
      { "@type": "HowToStep", "position": 2, "name": "Lender Shopping", "text": "We compare your profile across 50+ wholesale lenders to find the best rates and terms for your situation." },
      { "@type": "HowToStep", "position": 3, "name": "Compare Options", "text": "Review side-by-side loan options with transparent rates, terms, and closing costs — no hidden fees." },
      { "@type": "HowToStep", "position": 4, "name": "Lock Your Rate", "text": "Secure your interest rate with a rate lock guarantee, protecting you from market fluctuations." },
      { "@type": "HowToStep", "position": 5, "name": "Close Your Loan", "text": "Final document signing and funding — typical closing in 15-21 days from application." }
    ]
  };

  return (
    <div className="hidden md:block w-full max-w-6xl mx-auto px-4 mt-8 lg:mt-12 mb-10" aria-label="Mortgage application process steps">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="relative">
        {/* Progress Line Background (Gray) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block" />

        {/* Progress Line Active (Green) */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-green-600 -translate-y-1/2 rounded-full transition-all duration-700 ease-out hidden md:block"
          style={{ width: `${Math.max(0, (activeStep - 1) / (STEPS.length - 1) * 100)}%` }}
        />

        {/* Steps Container */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {STEPS.map((step, index) => {
            const isActive = activeStep >= step.id;
            const isCurrent = activeStep === step.id;

            return (
              <div key={step.id} className="flex flex-col items-center gap-2 md:gap-4 w-full md:w-auto">
                {/* Icon Circle */}
                <div
                  className={`
                    relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 transition-all duration-500 ease-out shrink-0
                    ${isActive
                      ? 'bg-green-600 border-green-600 shadow-lg shadow-green-200 scale-110'
                      : 'bg-white border-slate-200 text-slate-400 scale-100'}
                  `}
                >
                  <step.icon
                    className={`
                      w-5 h-5 md:w-7 md:h-7 transition-all duration-500
                      ${isActive ? 'text-white' : 'text-slate-400'}
                      ${isCurrent ? 'animate-bounce-subtle' : ''}
                    `}
                  />

                  {/* Current Step Pulse Ring */}
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-full border-2 border-green-600 animate-ping opacity-20" />
                  )}
                </div>

                {/* Label */}
                <div className={`
                  text-center transition-all duration-500
                  ${isActive ? 'opacity-100 translate-y-0' : 'opacity-60 md:opacity-100'}
                `}>
                  <p className={`
                    text-sm md:text-base font-semibold transition-colors duration-300
                    ${isActive ? 'text-green-700' : 'text-slate-500'}
                  `}>
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-400 hidden md:block mt-1">
                    Step {step.id}
                  </p>
                </div>

                {/* Mobile Connector Line - Hidden since we use centered column layout */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}