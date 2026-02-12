import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Digitanotion Limited - Cyber Security & Tech Innovation in Awka, Anambra";
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
          alt="Digitanotion Limited Logo"
          width={180}
          height={180}
          style={{ borderRadius: "32px" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: "64px", fontWeight: "bold", color: "white" }}
          >
            Digitanotion
          </span>
          <span
            style={{ fontSize: "36px", color: "#f97316", marginTop: "8px" }}
          >
            Limited
          </span>
          <span
            style={{ fontSize: "28px", color: "#94a3b8", marginTop: "20px" }}
          >
            Cyber Security & Tech Innovation
          </span>
          <div style={{ display: "flex", gap: "20px", marginTop: "28px" }}>
            <span style={{ fontSize: "20px", color: "#22c55e" }}>📍 Awka</span>
            <span style={{ fontSize: "20px", color: "#22c55e" }}>
              📍 Anambra
            </span>
            <span style={{ fontSize: "20px", color: "#f97316" }}>
              📍 Nigeria
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <span style={{ fontSize: "18px", color: "#e2e8f0" }}>
              🛡️ Security
            </span>
            <span style={{ fontSize: "18px", color: "#e2e8f0" }}>
              💻 Development
            </span>
            <span style={{ fontSize: "18px", color: "#e2e8f0" }}>
              🎓 Academy
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
