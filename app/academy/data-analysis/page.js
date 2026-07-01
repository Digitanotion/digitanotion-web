import DataAnalysis from "@/modules/academy/data-analysis/index";
import courseData from "@/modules/academy/data-analysis/data.json";
import { buildCourseMetadata } from "@/modules/academy/shared/build-metadata";
import { buildCourseStructuredData } from "@/modules/academy/shared/build-structured-data";
import StructuredData from "@/components/StructuredData";

const CANONICAL_URL = "https://www.digitanotion.com.ng/academy/data-analysis";

export const metadata = buildCourseMetadata(courseData, CANONICAL_URL);

const structuredData = buildCourseStructuredData(courseData, CANONICAL_URL);

export default function DataAnalysisPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <DataAnalysis />
    </>
  );
}