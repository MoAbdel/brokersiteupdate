import { buildFinancialProductSchema } from '@/lib/schema';
import type { FinancialProductInput } from '@/lib/schema';

type Props = FinancialProductInput;

export default function FinancialProductSchema(props: Props) {
  const schema = buildFinancialProductSchema(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
