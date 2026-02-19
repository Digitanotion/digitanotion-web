import DataAnalysis from "@/modules/academy/data-analysis/index";
import { dataAnalysisMetadata, dataAnalysisStructuredData } from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = dataAnalysisMetadata;

export default function DataAnalysisPage() {
  return (
    <>
      <StructuredData data={dataAnalysisStructuredData} />
      <DataAnalysis />
    </>
  );
}
