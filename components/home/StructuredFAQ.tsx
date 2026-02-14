'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
      question: "How is a mortgage broker different from a bank loan officer?",
      answer: "A mortgage broker works for you, not a single bank. I have access to 200+ lenders and can shop for the best pricing and terms. Bank loan officers can only offer their bank's products, which limits your options and often results in higher rates."
    },
    {
      question: "What are current mortgage pricing trends in California and Washington?",
      answer: "Current pricing vary by loan type, credit profile, and property scenario. I monitor wholesale lender channels daily and compare options across California and Washington to identify competitive pricing and lower upfront costs versus single-lender retail options."
    },
    {
      question: "How much can I save using a mortgage broker?",
      answer: "Research shows that borrowers save an average of over $10,000 throughout the life of their loan when working with mortgage brokers compared to retail banks. This comes from Competitive pricing, significantly lower upfront costs (typically 33 basis points less), and access to specialized loan programs that banks don't offer."
    },
    {
      question: "What's the minimum down payment required in California and Washington?",
      answer: "It depends on the loan program: FHA loans require just 3.5% down, VA loans offer 0% down for veterans, conventional loans start at 3% down for first-time buyers, and jumbo loans typically need 10-20% down."
    },
    {
      question: "How fast can you close a mortgage?",
      answer: "Typical closings run about 2-4 weeks depending on program, appraisal timing, and documentation. I work with dedicated underwriters and processors to move quickly without sacrificing underwriting quality."
    },
    {
      question: "What credit score do I need for a mortgage?",
      answer: "With access to 200+ lenders, I have options for all credit situations. I can work with credit scores as low as 500 through specialized non-QM loan programs. FHA loans can work with scores as low as 580, conventional loans typically need 620+, and the best pricing are available for scores above 740."
    },
    {
      question: "Do you offer jumbo loans for high-priced markets?",
      answer: "Yes. I specialize in jumbo loans for high-value markets across California and Washington, with access to wholesale channels that often improve pricing and flexibility versus single-bank options."
    },
    {
      question: "Can you help with refinancing my current mortgage?",
      answer: "Absolutely. I offer rate-and-term refinancing to lower your pricing, cash-out refinancing to access your equity, and HELOC options for flexible credit lines. I'll analyze your situation to find the best solution."
    }
];

// Export FAQ data for use in page-level schema markup
export { faqs };

export default function StructuredFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about working with a California and Washington mortgage broker
          </p>
        </div>

        {/* Semantic FAQ Structure with dl/dt/dd */}
        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`${
                  openIndex === index ? 'block' : 'hidden'
                } px-6 pb-4`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}

// Generate FAQ schema JSON-LD for use in page metadata
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h2", "dl", "dt", "dd"]
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}