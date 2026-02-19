import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Backend Engineer (Laravel/PHP) Course - Digitanotion Academy Awka, Anambra";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const iconUrl = "https://www.digitanotion.com.ng/icon.png";

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
        <img
          src={iconUrl}
          alt="Digitanotion Academy Logo"
          width={160}
          height={160}
          style={{ borderRadius: "28px" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: "56px", fontWeight: "bold", color: "white" }}
          >
            Backend Engineer
          </span>
          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              backgroundClip: "text",
              color: "transparent",
              marginTop: "4px",
            }}
          >
            Laravel/PHP Specialization
          </span>
          <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
            <span style={{ fontSize: "24px", color: "#f97316" }}>
              ⏱️ 14 Weeks
            </span>
            <span style={{ fontSize: "24px", color: "#ef4444" }}>🎯 ₦270k</span>
            <span
              style={{
                fontSize: "24px",
                color: "#94a3b8",
                textDecoration: "line-through",
              }}
            >
              ₦350k
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <span style={{ fontSize: "20px", color: "#e2e8f0" }}>
              🐘 Laravel
            </span>
            <span style={{ fontSize: "20px", color: "#e2e8f0" }}>🐘 PHP</span>
            <span style={{ fontSize: "20px", color: "#e2e8f0" }}>🗄️ MySQL</span>
            <span style={{ fontSize: "20px", color: "#e2e8f0" }}>☁️ AWS</span>
          </div>
          <div style={{ display: "flex", marginTop: "28px" }}>
            <span style={{ fontSize: "22px", color: "#22c55e" }}>
              📍 Onsite in Awka • 5 Production Projects • Start March 2026
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
