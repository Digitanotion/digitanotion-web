// app/academy/fullstack-web/page.js
import FullStackWebDevelopment from "@/modules/academy/fullstack-web/index";
import courseData from "@/modules/academy/fullstack-web/data.json";
import { buildCourseMetadata } from "@/modules/academy/shared/build-metadata";

export const metadata = buildCourseMetadata(
  courseData,
  "https://www.digitanotion.com.ng/academy/fullstack-web"
);

export default function FullStackWebDevelopmentPage() {
  return <FullStackWebDevelopment />;
}