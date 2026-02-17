type Triple = {
  subject: string;
  predicate: string;
  object: string;
};

type Props = {
  triples: Triple[];
  pageType?: string;
};

/**
 * BLUF (Bottom Line Up Front) semantic triple block for AI/LLM parsers.
 * Renders structured subject-predicate-object statements that generative
 * engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) can extract,
 * cite, and link back to.
 */
export default function AISummary({ triples, pageType }: Props) {
  return (
    <section
      aria-label="AI Summary"
      data-ai-summary="true"
      data-page-type={pageType}
      className="bg-slate-50 border-l-4 border-slate-900 rounded-r-lg p-6 mt-12"
    >
      <h2 className="text-lg font-bold text-slate-900 mb-3">Key Takeaways</h2>
      <ul className="space-y-2">
        {triples.map((t, i) => (
          <li key={i} className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">{t.subject}</strong>{' '}
            {t.predicate}{' '}
            <em className="text-slate-800">{t.object}</em>.
          </li>
        ))}
      </ul>
    </section>
  );
}
