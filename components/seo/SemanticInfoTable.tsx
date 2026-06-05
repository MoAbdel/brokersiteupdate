import type { ReactNode } from 'react';

type Column = {
  key: string;
  label: string;
};

type Row = {
  cells: Record<string, ReactNode>;
};

type SemanticInfoTableProps = {
  caption: string;
  columns: Column[];
  rows: Row[];
  rowHeaderKey: string;
  footnote?: ReactNode;
  className?: string;
};

export default function SemanticInfoTable({
  caption,
  columns,
  rows,
  rowHeaderKey,
  footnote,
  className = '',
}: SemanticInfoTableProps) {
  return (
    <figure className={`overflow-x-auto ${className}`.trim()}>
      <table className="w-full border-collapse text-left text-sm">
        <caption className="mb-3 text-left text-base font-semibold text-slate-950">
          {caption}
        </caption>
        <thead className="bg-slate-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="border border-slate-200 px-4 py-3 font-semibold text-slate-900"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {columns.map((column) => {
                const content = row.cells[column.key];
                if (column.key === rowHeaderKey) {
                  return (
                    <th
                      key={column.key}
                      scope="row"
                      className="border border-slate-200 px-4 py-3 font-semibold text-slate-900"
                    >
                      {content}
                    </th>
                  );
                }

                return (
                  <td key={column.key} className="border border-slate-200 px-4 py-3 text-slate-700">
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && <figcaption className="mt-2 text-xs text-slate-500">{footnote}</figcaption>}
    </figure>
  );
}
