'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import ToolLeadCaptureForm from '@/components/tools/ToolLeadCaptureForm';
import type { QuizAnswers } from '@/lib/loan-finder-logic';
import { getQuizResult, getGatedQuizReport, getConfidenceLabel } from '@/lib/loan-finder-logic';

interface QuizResultsProps {
  answers: QuizAnswers;
}

const confidenceColors: Record<string, string> = {
  strong: 'bg-emerald-100 text-emerald-700',
  likely: 'bg-blue-100 text-blue-700',
  exploring: 'bg-amber-100 text-amber-700',
};

export default function QuizResults({ answers }: QuizResultsProps) {
  const [reportUnlocked, setReportUnlocked] = useState(false);
  const result = useMemo(() => getQuizResult(answers), [answers]);
  const gatedReport = useMemo(
    () => (reportUnlocked ? getGatedQuizReport(answers, result) : null),
    [reportUnlocked, answers, result],
  );

  // Special: redirect to contact
  if (result.redirectToContact) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{result.primary.programName}</h2>
            <p className="text-slate-700 mb-4">{result.contactMessage}</p>
            {result.contactChecklist && (
              <ul className="space-y-2 mb-6">
                {result.contactChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-xs font-bold text-amber-800 shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Schedule a Scenario Review
              </Link>
              <a
                href="tel:9495792057"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Call (949) 579-2057
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Primary Match */}
      <Card className="border-2 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${confidenceColors[result.primary.confidence]}`}>
              {getConfidenceLabel(result.primary.confidence)}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{result.primary.programName}</h2>
          <ul className="space-y-2 mb-4">
            {result.primary.reasons.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-emerald-600 mt-0.5 shrink-0">{'\u2713'}</span>
                {r}
              </li>
            ))}
          </ul>
          {result.primary.calculatorLink && (
            <Link
              href={result.primary.calculatorLink}
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              {result.primary.calculatorLabel} {'\u2192'}
            </Link>
          )}
        </CardContent>
      </Card>

      {/* Condo Note */}
      {result.condoNote && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Condo financing note:</span> Condo financing has additional
              requirements — our scenario review includes a condo eligibility check to confirm your
              building qualifies.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Secondary Match */}
      {result.secondary && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${confidenceColors[result.secondary.confidence]}`}>
                {getConfidenceLabel(result.secondary.confidence)}
              </span>
              <span className="text-sm text-slate-500">Also worth considering</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{result.secondary.programName}</h3>
            <ul className="space-y-1 mb-3">
              {result.secondary.reasons.map((r, i) => (
                <li key={i} className="text-sm text-slate-600">{'\u2022'} {r}</li>
              ))}
            </ul>
            {result.secondary.calculatorLink && (
              <Link
                href={result.secondary.calculatorLink}
                className="text-sm text-blue-600 font-semibold hover:text-blue-700"
              >
                {result.secondary.calculatorLabel} {'\u2192'}
              </Link>
            )}
          </CardContent>
        </Card>
      )}

      {/* Email Gate or Gated Report */}
      {!reportUnlocked ? (
        <ToolLeadCaptureForm
          source="loan_finder_quiz"
          toolData={{
            goal: answers.goal,
            income: answers.income,
            property: answers.property,
            documentation: answers.documentation,
            location: answers.location,
            matchedProgram: result.primary.programName,
            confidence: result.primary.confidence,
          }}
          headline="Get Your Personalized Loan Program Report"
          subtext="Compare your matched programs side by side with required documents, timelines, and questions to ask your broker."
          buttonText="Get My Free Report"
          onSuccess={() => setReportUnlocked(true)}
        />
      ) : gatedReport ? (
        <GatedReportSection report={gatedReport} />
      ) : null}
    </div>
  );
}

function GatedReportSection({ report }: { report: ReturnType<typeof getGatedQuizReport> }) {
  return (
    <div className="space-y-6">
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-green-800">
            Your personalized loan program report is ready. A specialist will review your answers and reach out within 24 hours.
          </p>
        </CardContent>
      </Card>

      {/* Program Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Program Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {report.programComparison.map((prog) => (
              <div key={prog.programName} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <h4 className="font-bold text-slate-900 mb-2">{prog.programName}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-emerald-700 mb-1">Pros</p>
                    <ul className="space-y-1">
                      {prog.pros.map((p, i) => (
                        <li key={i} className="text-slate-600">+ {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-600 mb-1">Cons</p>
                    <ul className="space-y-1">
                      {prog.cons.map((c, i) => (
                        <li key={i} className="text-slate-600">{'\u2212'} {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  <span className="font-medium">Best for:</span> {prog.bestFor}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Required Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {report.requiredDocs.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700">{doc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Expected Timeline</h3>
          <p className="text-2xl font-bold text-slate-900">{report.timelineWeeks}</p>
          <p className="text-sm text-slate-500 mt-1">From application to closing</p>
        </CardContent>
      </Card>

      {/* Questions for Broker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Questions to Ask Your Broker</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            {report.brokerQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="font-bold text-slate-900">{i + 1}.</span>
                <span className="text-slate-700">{q}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Ready to Move Forward?</h3>
          <p className="text-sm text-slate-300 mb-4">
            Mo Abdel accesses 50+ Wholesale Lenders — one application gives you the full market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:9495792057"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call (949) 579-2057
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
