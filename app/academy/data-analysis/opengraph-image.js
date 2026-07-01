import { ImageResponse } from "next/og";
import { buildCourseOgImageElement } from "@/modules/academy/shared/build-og-image";
import courseData from "@/modules/academy/data-analysis/data.json";

export const runtime = "edge";
export const alt = `${courseData.hero.title} Course - Digitanotion Academy Awka, Anambra, Nigeria`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(buildCourseOgImageElement(courseData), { ...size });
}