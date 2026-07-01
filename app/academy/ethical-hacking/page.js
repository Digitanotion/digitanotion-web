import EthicalHacking from "@/modules/academy/ethical-hacking/index";
import courseData from "@/modules/academy/ethical-hacking/data.json";
import { buildCourseMetadata } from "@/modules/academy/shared/build-metadata";

export const metadata = buildCourseMetadata(
  courseData,
  "https://www.digitanotion.com.ng/academy/ethical-hacking"
);

export default function EthicalHackingPage() {
  return <EthicalHacking />;
}