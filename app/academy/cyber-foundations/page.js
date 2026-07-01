import CybersecurityFoundations from "@/modules/academy/cyber-foundations/index";
import courseData from "@/modules/academy/cyber-foundations/data.json";
import { buildCourseMetadata } from "@/modules/academy/shared/build-metadata";

export const metadata = buildCourseMetadata(
  courseData,
  "https://www.digitanotion.com.ng/academy/cyber-foundations"
);

export default function CybersecurityFoundationsPage() {
  return <CybersecurityFoundations />;
}