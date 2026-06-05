import type { ReactNode } from 'react';

type AnswerBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  reviewedDate?: string;
  reviewedLabel?: string;
  children: ReactNode;
  className?: string;
};

export default function AnswerBlock({
  id,
  eyebrow = 'Quick answer',
  title,
  reviewedDate,
  reviewedLabel,
  children,
  className = '',
}: AnswerBlockProps) {
  return (
    <section
      id={id}
      className={`rounded-lg border border-blue-200 bg-blue-50 p-6 ${className}`.trim()}
      aria-label={title}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4 space-y-3 text-slate-700">{children}</div>
      {reviewedDate && (
        <p className="mt-4 text-sm text-slate-500">
          Last reviewed:{' '}
          <time dateTime={reviewedDate}>{reviewedLabel || reviewedDate}</time>
        </p>
      )}
    </section>
  );
}
