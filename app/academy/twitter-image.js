import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Digitanotion Academy - Tech Training in Awka, Anambra";
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
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconUrl}
          alt="Logo"
          width={180}
          height={180}
          style={{ borderRadius: "24px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: "56px", fontWeight: "bold", color: "white" }}
          >
            Digitanotion Academy
          </span>
          <span
            style={{ fontSize: "32px", color: "#f97316", marginTop: "16px" }}
          >
            Awka • Anambra • Nigeria
          </span>
          <span
            style={{ fontSize: "24px", color: "#94a3b8", marginTop: "24px" }}
          >
            Cybersecurity • Web Dev • App Dev • Digital Skills
          </span>
          <span
            style={{ fontSize: "20px", color: "#22c55e", marginTop: "32px" }}
          >
            1000+ Trained • 95% Placement • ₦65k Start
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
