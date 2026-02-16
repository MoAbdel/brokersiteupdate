import { buildDatasetSchema } from '@/lib/schema';
import type { DatasetInput } from '@/lib/schema';

type Props = DatasetInput;

export default function DatasetSchema(props: Props) {
  const schema = buildDatasetSchema(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
