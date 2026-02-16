type Props = {
  caption: string;
  headers: string[];
  rows: string[][];
  source?: string;
  footnote?: string;
  highlightRow?: number;
  id?: string;
};

/**
 * LLM-optimized HTML table with proper accessibility and semantic markup.
 * Uses <figure>, <caption>, scope attributes, and zebra striping so
 * generative engines can parse tabular data accurately.
 */
export default function SemanticTable({
  caption,
  headers,
  rows,
  source,
  footnote,
  highlightRow,
  id,
}: Props) {
  return (
    <figure className="my-8" id={id}>
      <table className="w-full border-collapse text-sm" role="table">
        <caption className="text-left text-base font-semibold text-slate-900 mb-3">
          {caption}
        </caption>
        <thead>
          <tr className="bg-slate-100 border-b-2 border-slate-300">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="text-left px-4 py-3 font-semibold text-slate-700"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                ri === highlightRow
                  ? 'bg-blue-50 font-medium'
                  : ri % 2 === 0
                    ? 'bg-white'
                    : 'bg-slate-50'
              }
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 text-slate-700 border-b border-slate-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {(source || footnote) && (
        <figcaption className="mt-2 text-xs text-slate-500">
          {source && <span>Source: {source}</span>}
          {source && footnote && <span> &mdash; </span>}
          {footnote && <span>{footnote}</span>}
        </figcaption>
      )}
    </figure>
  );
}
