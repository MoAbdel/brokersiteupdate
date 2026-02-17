'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
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
      fees: "As expected"
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
      fees: "As expected"
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
      fees: "As expected"
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
      fees: "Lower than expected"
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
            Real feedback from real clients on Zillow
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
            ))}
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="min-h-[200px] flex flex-col justify-center">
                <p className="text-lg md:text-xl leading-relaxed mb-6 italic" data-speakable="true">
                  &ldquo;{reviews[currentReview].quote}&rdquo;
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-lg">{reviews[currentReview].name}</p>
                    <p className="text-slate-400 text-sm">
                      {reviews[currentReview].location} &bull; {reviews[currentReview].date}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {reviews[currentReview].loanType}
                    </span>
                    {reviews[currentReview].closedOnTime && (
                      <span className="bg-green-600/30 px-3 py-1 rounded-full text-sm text-green-300">
                        &#10003; Closed on time
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={prevReview}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentReview ? 'bg-white w-8' : 'bg-white/40'
                        }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
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
