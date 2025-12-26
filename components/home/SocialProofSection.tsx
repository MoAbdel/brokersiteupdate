'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialProofSection() {
  const [currentWin, setCurrentWin] = useState(0);

  const clientWins = [
    {
      quote: "Saved Irvine tech executive $1,850/month with strategic recast",
      location: "Irvine, CA",
      savings: "$1,850/mo"
    },
    {
      quote: "Secured 90% LTV jumbo for Newport Beach self-employed buyer",
      location: "Newport Beach, CA",
      program: "Jumbo Loan"
    },
    {
      quote: "Unlocked $200K HELOC at prime + 0.5% for Tustin investor",
      location: "Tustin, CA",
      amount: "$200K HELOC"
    },
    {
      quote: "First-time buyer in Mission Viejo with 3% down FHA",
      location: "Mission Viejo, CA",
      program: "FHA 3% Down"
    },
    {
      quote: "Orange County investor portfolio - 5 DSCR loans closed in 90 days",
      location: "Orange County, CA",
      achievement: "5 Properties"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWin((prev) => (prev + 1) % clientWins.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [clientWins.length]);

  const nextWin = () => {
    setCurrentWin((prev) => (prev + 1) % clientWins.length);
  };

  const prevWin = () => {
    setCurrentWin((prev) => (prev - 1 + clientWins.length) % clientWins.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Proven Results for California Families
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real outcomes from strategic mortgage planning
          </p>
        </div>

        {/* Client Success Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
            <div className="flex justify-center mb-4">
              <DollarSign className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              $847M+
            </div>
            <div className="text-slate-600 font-medium">
              in Closed Loans
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Helping families achieve their homeownership goals
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              3,200+
            </div>
            <div className="text-slate-600 font-medium">
              California Families Served
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Trusted mortgage advisor across the state
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              $312/mo
            </div>
            <div className="text-slate-600 font-medium">
              Average Client Savings
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Through strategic rate shopping and program selection
            </p>
          </div>
        </div>

        {/* Recent Wins Carousel */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Star className="w-64 h-64" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Recent Client Wins</h3>
              <p className="text-green-100">
                Real results from the past 90 days
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 min-h-[160px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-semibold mb-4">
                    "{clientWins[currentWin].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-green-100">
                    <span>📍 {clientWins[currentWin].location}</span>
                    {clientWins[currentWin].savings && (
                      <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">
                        💰 {clientWins[currentWin].savings}
                      </span>
                    )}
                    {clientWins[currentWin].program && (
                      <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">
                        {clientWins[currentWin].program}
                      </span>
                    )}
                    {clientWins[currentWin].amount && (
                      <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">
                        {clientWins[currentWin].amount}
                      </span>
                    )}
                    {clientWins[currentWin].achievement && (
                      <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">
                        🏆 {clientWins[currentWin].achievement}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevWin}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Previous win"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {clientWins.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentWin(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentWin ? 'bg-white w-8' : 'bg-white/40'
                      }`}
                      aria-label={`Go to win ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextWin}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Next win"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
