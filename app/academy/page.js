import AcademyPageContent from "@/modules/academy/index";
import { academyMetadata, academyStructuredData } from "./metadata";

export const metadata = academyMetadata;

export default function Academy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(academyStructuredData),
        }}
      />
      <AcademyPageContent />
    </>
  );
}
