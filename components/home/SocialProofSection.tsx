'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
      name: "Alice W",
      location: "San Francisco",
      date: "Feb 2026",
      dateISO: "2026-02-01",
      rating: 5,
      loanType: "Home Equity",
      quote: "Very professional + very helpful + very patient and explained very clearly with the points snd details also most importan is Mo followed up and make sure everything went well.",
      closedOnTime: true,
      interestRate: "As expected",
      fees: "As expected",
      source: "Experience.com"
    },
    {
      name: "jhcurry",
      location: "Fairfield, CA",
      date: "Dec 2025",
      dateISO: "2025-12-01",
      rating: 5,
      loanType: "Home Equity",
      quote: "I worked with Mo and Latoyia at WCL to obtain a HEL. I could not be more pleased with the process. Mo was professional, thorough and generally very interested in seeing that my experience was a pleasant one. I'd recommend them to anyone looking for a lender. Great job.",
      closedOnTime: true,
      interestRate: "As expected",
      fees: "As expected",
      source: "Zillow"
    },
    {
      name: "sacullagarrett",
      location: "Chula Vista, CA",
      date: "Nov 2025",
      dateISO: "2025-11-01",
      rating: 5,
      loanType: "Home Equity",
      quote: "Mo was completely transparent and professional. He made the loan process easy. Highly recommend him as a loan officer. Hands off and very quick. Very straight forward.",
      closedOnTime: true,
      interestRate: "As expected",
      fees: "As expected",
      source: "Zillow"
    },
    {
      name: "Jim Lord",
      location: "Paso Robles, CA",
      date: "Oct 2025",
      dateISO: "2025-10-01",
      rating: 5,
      loanType: "Home Equity",
      quote: "We have refinanced before but have never had such a hard working and professional lender's representative than Mo. I ended up having a number of questions but he cheerfully and professionally responded. Our loan was processed quickly and without incident. I would definitely use Mo again and refer him to others.",
      closedOnTime: true,
      interestRate: "Lower than expected",
      fees: "As expected",
      source: "Zillow"
    },
    {
      name: "Karthikeyan Ramaswami",
      location: "Aldie, VA",
      date: "Apr 2025",
      dateISO: "2025-04-01",
      rating: 5,
      loanType: "Refinance",
      quote: "It has been a delightful experience to work with Mo. You know how stressful it can be to refinance your home. Waiting for your rate, waiting for lender decision, temporary approval and so on. Mo was great in communicating me clearly and was willing to go extra mile to check.",
      closedOnTime: true,
      interestRate: "As expected",
      fees: "Lower than expected",
      source: "Zillow"
    }
];

const reviewSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mothebroker.com/#localbusiness",
  "name": "Mo Abdel - Mortgage Broker",
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "datePublished": r.dateISO,
    "reviewBody": r.quote,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating,
      "bestRating": 5
    }
  }))
});

export default function SocialProofSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-white" aria-label="Client reviews and testimonials">
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: reviewSchema }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from verified clients
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-6 md:p-7 text-white shadow-xl shadow-slate-950/30">
          {/* Subtle pattern + glow (matches the premium slate aesthetic) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
          />

          <div className="absolute right-5 top-5 flex items-center gap-2 text-yellow-400/95">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-200">5.0</span>
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="min-h-[140px] md:min-h-[160px] flex flex-col justify-center">
                <p className="text-sm font-semibold tracking-wide text-slate-300">{reviews[currentReview].source} review</p>
                <blockquote className="mt-2 text-base md:text-lg leading-relaxed text-slate-100" data-speakable="true">
                  <span className="text-slate-300">&ldquo;</span>
                  {reviews[currentReview].quote}
                  <span className="text-slate-300">&rdquo;</span>
                </blockquote>

                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="h-9 w-9 rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white grid place-items-center"
                    >
                      {reviews[currentReview].name.trim().slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-base">{reviews[currentReview].name}</p>
                      <p className="text-slate-400 text-sm">
                        {reviews[currentReview].location} &bull; {reviews[currentReview].date}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-100">
                      {reviews[currentReview].loanType}
                    </span>
                    {reviews[currentReview].closedOnTime && (
                      <span className="bg-emerald-500/15 border border-emerald-400/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200">
                        Closed on time
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={prevReview}
                  className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10 active:bg-white/15"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentReview ? 'bg-white/95 w-8' : 'bg-white/35 w-2'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10 active:bg-white/15"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Zillow Attribution */}
        <div className="text-center mt-6">
          <a
            href="https://www.zillow.com/lender-profile/mabdel0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 text-sm"
          >
            View all reviews on Zillow &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
