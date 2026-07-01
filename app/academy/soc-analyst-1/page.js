import SocAnalyst1 from "@/modules/academy/soc-analyst-1/index";
import courseData from "@/modules/academy/soc-analyst-1/data.json";
import { buildCourseMetadata } from "@/modules/academy/shared/build-metadata";

export const metadata = buildCourseMetadata(
  courseData,
  "https://www.digitanotion.com.ng/academy/soc-analyst-1"
);

export default function SocAnalyst1Page() {
  return <SocAnalyst1 />;
}