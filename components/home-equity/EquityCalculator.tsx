"use client";

import React, { useState } from "react";
import { Calculator, ShieldCheck } from "lucide-react";

interface EquityCalculatorProps {
  figureAffiliateUrl: string;
  avenAffiliateUrl: string;
}

export default function EquityCalculator({
  figureAffiliateUrl,
  avenAffiliateUrl,
}: EquityCalculatorProps) {
  const [homeValue, setHomeValue] = useState(800000);
  const [mortgageBalance, setMortgageBalance] = useState(400000);

  // Program Parameters
  const figureCLTV = 0.85; // 85%
  const avenCLTV = 0.89; // 89%

  // Limits
  const figureMin = 25000;
  const figureMax = 750000;
  const avenMin = 5000;
  const avenMax = 400000;

  // Real-time calculations
  const rawFigureLimit = (homeValue * figureCLTV) - mortgageBalance;
  const rawAvenLimit = (homeValue * avenCLTV) - mortgageBalance;

  // Determine eligibility
  const figureAvailable = rawFigureLimit >= figureMin;
  const figureValue = figureAvailable ? Math.min(figureMax, rawFigureLimit) : 0;

  const avenAvailable = rawAvenLimit >= avenMin;
  const avenValue = avenAvailable ? Math.min(avenMax, rawAvenLimit) : 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-base44-lg p-6 sm:p-8 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">Equity Estimator</h3>
          <p className="text-[11px] text-slate-500 font-medium">Calculate your potential loan limit in seconds</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Sliders */}
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            <span>Estimated Home Value</span>
            <span className="text-blue-600 font-extrabold text-sm">{formatCurrency(homeValue)}</span>
          </div>
          <input
            type="range"
            min="200000"
            max="2500000"
            step="10000"
            value={homeValue}
            onChange={(e) => {
              const val = Number(e.target.value);
              setHomeValue(val);
              if (mortgageBalance > val) {
                setMortgageBalance(val);
              }
            }}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
            <span>$200K</span>
            <span>$2.5M</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            <span>Current Mortgage Balance</span>
            <span className="text-slate-950 font-extrabold text-sm">{formatCurrency(mortgageBalance)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={homeValue}
            step="10000"
            value={mortgageBalance}
            onChange={(e) => setMortgageBalance(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
            <span>$0</span>
            <span>{formatCurrency(homeValue)}</span>
          </div>
        </div>
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Figure Box */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-sm">
          <div>
            <span className="inline-block text-[10px] font-extrabold bg-blue-50 text-blue-600 rounded-full px-2 py-0.5 mb-1.5">
              Figure HELOC
            </span>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Estimated Line</div>
          </div>
          <div className="mt-2">
            {figureAvailable ? (
              <div className="text-xl sm:text-2xl font-black text-blue-600 tracking-tight">
                {formatCurrency(figureValue)}
              </div>
            ) : (
              <div className="text-xs font-semibold text-amber-600 leading-tight">
                Below $25K Min
              </div>
            )}
            <div className="text-[9px] font-medium text-slate-400 mt-1">Up to 85% CLTV</div>
          </div>
        </div>

        {/* Aven Box */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-sm">
          <div>
            <span className="inline-block text-[10px] font-extrabold bg-slate-900 text-white rounded-full px-2 py-0.5 mb-1.5">
              Aven Card
            </span>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Estimated Line</div>
          </div>
          <div className="mt-2">
            {avenAvailable ? (
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {formatCurrency(avenValue)}
              </div>
            ) : (
              <div className="text-xs font-semibold text-amber-600 leading-tight">
                Below $5K Min
              </div>
            )}
            <div className="text-[9px] font-medium text-slate-400 mt-1">Up to 89% CLTV</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href="#apply"
          className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-2xl shadow-md shadow-blue-500/20 active:translate-y-[1px] transition-all duration-150"
        >
          Check Pre-Qualified Rates
        </a>
      </div>

      <div className="flex items-center justify-center gap-1 mt-4 text-[9px] text-slate-400 font-medium">
        <ShieldCheck className="h-3 w-3 text-slate-400" />
        <span>No impact to your current first mortgage rate</span>
      </div>
    </div>
  );
}
