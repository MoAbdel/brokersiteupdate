interface LastUpdatedProps {
  date: string; // ISO date string like '2026-02-16'
  className?: string;
}

export default function LastUpdated({ date, className = '' }: LastUpdatedProps) {
  const formatted = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <p className={`text-sm text-slate-500 ${className}`}>
      <time dateTime={date}>Last updated: {formatted}</time>
    </p>
  );
}
