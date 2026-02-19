import BackendEngineer from "@/modules/academy/backend-engineer/index";
import {
  backendEngineerMetadata,
  backendEngineerStructuredData,
} from "./metadata";
import StructuredData from "@/components/StructuredData";

export const metadata = backendEngineerMetadata;

export default function BackendEngineerPage() {
  return (
    <>
      <StructuredData data={backendEngineerStructuredData} />
      <BackendEngineer />
    </>
  );
}
