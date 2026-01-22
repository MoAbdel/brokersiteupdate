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
  const [activeStep, setActiveStep] = useState(0); // 0 = start, 1-5 = steps active

  useEffect(() => {
    let isActive = true;

    const sleep = (ms: number) => new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });

    const runSequence = async () => {
      while (isActive) {
        // Reset (0.5s)
        setActiveStep(0);
        await sleep(500);
        if (!isActive) return;

        // Step through 1 to 5
        for (let i = 1; i <= 5; i++) {
          setActiveStep(i);
          // Progress line draws (0.5s) + Step activation hold
          // We combine them into a single state update for simplicity in React, 
          // relying on CSS transitions for the "draw" effect.
          await sleep(STEPS[i - 1].duration + 500);
          if (!isActive) return;
        }

        // Hold complete state (1.5s)
        await sleep(1500);
      }
    };

    runSequence();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="hidden md:block w-full max-w-6xl mx-auto px-4 mt-8 lg:mt-12 mb-10">
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