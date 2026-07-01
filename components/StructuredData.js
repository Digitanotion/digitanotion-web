/**
 * Renders a JSON-LD <script> tag from a structured data object.
 * NOTE: if this component already exists in your codebase (the import path
 * @/components/StructuredData suggests it does), skip this file entirely —
 * it's included here only as a reference in case you don't have one yet.
 */
export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}