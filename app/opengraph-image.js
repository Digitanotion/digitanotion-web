import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Digitanotion Limited - #1 Cyber Security & Tech Innovation Company in Awka, Anambra, Nigeria";
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
        position: "relative",
      }}
    >
      {/* Background Pattern - Security Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
              linear-gradient(to right, #f97316 1px, transparent 1px),
              linear-gradient(to bottom, #f97316 1px, transparent 1px)
            `,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <img
          src={iconUrl}
          alt="Digitanotion Limited Logo"
          width={140}
          height={140}
          style={{
            borderRadius: "28px",
            boxShadow: "0 25px 40px -12px rgba(249, 115, 22, 0.35)",
          }}
        />
      </div>

      {/* Company Name */}
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "8px",
          lineHeight: 1.1,
        }}
      >
        Digitanotion <span style={{ color: "#f97316" }}>Limited</span>
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: "32px",
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "32px",
          fontWeight: "500",
        }}
      >
        Cyber Security • Software Development • Tech Training
      </p>

      {/* Location Badges */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Awka", "Anambra", "Southeast Nigeria", "Africa"].map((loc) => (
          <span
            key={loc}
            style={{
              padding: "12px 28px",
              background: "rgba(249, 115, 22, 0.12)",
              borderRadius: "100px",
              color: "#f97316",
              fontSize: "24px",
              fontWeight: "600",
              border: "1.5px solid rgba(249, 115, 22, 0.4)",
            }}
          >
            {loc}
          </span>
        ))}
      </div>

      {/* SASI Principles */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginBottom: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["🔹 Simplicity", "💰 Affordability", "🛡️ Security", "🎯 Impact"].map(
          (item) => (
            <span
              key={item}
              style={{
                padding: "8px 20px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "100px",
                color: "#e2e8f0",
                fontSize: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {item}
            </span>
          ),
        )}
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "44px", fontWeight: "bold", color: "#22c55e" }}
          >
            2019
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>Founded</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "44px", fontWeight: "bold", color: "#22c55e" }}
          >
            50+
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Trusted Businesses
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "44px", fontWeight: "bold", color: "#f97316" }}
          >
            1000+
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Lives Impacted
          </span>
        </div>
      </div>

      {/* Address */}
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
        Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway • Awka, Anambra
        State, Nigeria
      </div>
    </div>,
    {
      ...size,
    },
  );
}
