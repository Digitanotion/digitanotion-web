import AcademyPage from "@/modules/academy/index";
import { academyMetadata, academyStructuredData } from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = academyMetadata;

export default function Academy() {
  return (
    <>
      <StructuredData data={academyStructuredData} />
      <AcademyPage />
    </>
  );
}
