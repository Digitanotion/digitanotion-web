/**
 * Builds the JSX element for a course's OpenGraph image. Used inside a
 * per-course opengraph-image.js route via next/og's ImageResponse.
 *
 * Usage:
 *
 *   import { ImageResponse } from "next/og";
 *   import { buildCourseOgImageElement } from "@/modules/academy/shared/build-og-image";
 *   import courseData from "@/modules/academy/some-course/data.json";
 *
 *   export const runtime = "edge";
 *   export const size = { width: 1200, height: 630 };
 *   export const contentType = "image/png";
 *
 *   export default async function Image() {
 *     return new ImageResponse(buildCourseOgImageElement(courseData), { ...size });
 *   }
 *
 * Pulling every number from data.json (price, lowest step, savings, next
 * cohort) means this image can never drift out of sync with the page again.
 */
export function buildCourseOgImageElement(data) {
  const { hero, pricing, modules, cohorts } = data;
  const iconUrl = "https://www.digitanotion.com.ng/icon.png";

  const individualSum = modules.reduce((sum, m) => sum + m.price, 0);
  const savings = individualSum - pricing.fullCoursePrice;
  const lowest = Math.min(...modules.map((m) => m.price));
  const fmt = (n) => `₦${n.toLocaleString("en-NG")}`;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 20px 20px, #f97316 1px, transparent 1px), radial-gradient(circle at 80px 150px, #ef4444 1px, transparent 1px)",
          backgroundSize: "40px 40px, 80px 80px",
          opacity: 0.08,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
        <img
          src={iconUrl}
          alt="Digitanotion Academy Logo"
          width={120}
          height={120}
          style={{ borderRadius: "24px" }}
        />
      </div>

      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        {hero.title}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "28px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            padding: "12px 28px",
            background: "rgba(249, 115, 22, 0.15)",
            borderRadius: "100px",
            color: "#f97316",
            fontSize: "22px",
            fontWeight: "600",
            border: "1.5px solid rgba(249, 115, 22, 0.5)",
          }}
        >
          {hero.durationLabel}
        </span>
        <span
          style={{
            padding: "12px 28px",
            background: "rgba(34, 197, 94, 0.15)",
            borderRadius: "100px",
            color: "#22c55e",
            fontSize: "22px",
            fontWeight: "600",
            border: "1.5px solid rgba(34, 197, 94, 0.5)",
          }}
        >
          {hero.level}
        </span>
        <span
          style={{
            padding: "12px 28px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: "100px",
            color: "#ef4444",
            fontSize: "22px",
            fontWeight: "600",
            border: "1.5px solid rgba(239, 68, 68, 0.5)",
          }}
        >
          {hero.labCountLabel}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
        <span style={{ fontSize: "44px", fontWeight: "bold", color: "white" }}>
          {fmt(pricing.fullCoursePrice)}
        </span>
        <span style={{ fontSize: "28px", color: "#94a3b8", textDecoration: "line-through" }}>
          {fmt(pricing.fullCourseOriginalPrice)}
        </span>
      </div>

      <span style={{ fontSize: "22px", color: "#e2e8f0", marginBottom: "32px" }}>
        or start from just {fmt(lowest)} — save {fmt(savings)} paying step by step
      </span>

      <div style={{ display: "flex", gap: "48px", marginTop: "8px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: "36px", fontWeight: "bold", color: "#22c55e" }}>
            {modules.length}
          </span>
          <span style={{ fontSize: "16px", color: "#94a3b8" }}>Steps</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: "36px", fontWeight: "bold", color: "#f97316" }}>
            {cohorts.nextStartLabel}
          </span>
          <span style={{ fontSize: "16px", color: "#94a3b8" }}>Next start</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "48px",
          right: "48px",
          textAlign: "center",
          color: "#64748b",
          fontSize: "16px",
          borderTop: "1px solid #334155",
          paddingTop: "24px",
        }}
      >
        Digitanotion Academy • Suite 6, Mgbajiaka Area, Awka, Anambra State, Nigeria
      </div>
    </div>
  );
}