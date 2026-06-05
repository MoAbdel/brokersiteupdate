import Link from 'next/link';

type Source = {
  label: string;
  href: string;
  description?: string;
};

type SourceBoxProps = {
  title?: string;
  sources: Source[];
  className?: string;
};

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function SourceBox({
  title = 'Sources used',
  sources,
  className = '',
}: SourceBoxProps) {
  if (sources.length === 0) return null;

  return (
    <aside
      className={`rounded-lg border border-slate-200 bg-white p-6 ${className}`.trim()}
      aria-label={title}
    >
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href} className="text-sm text-slate-700">
            {isExternalHref(source.href) ? (
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                {source.label}
              </a>
            ) : (
              <Link href={source.href} className="font-semibold text-blue-700 hover:underline">
                {source.label}
              </Link>
            )}
            {source.description && (
              <p className="mt-1 text-slate-600">{source.description}</p>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
