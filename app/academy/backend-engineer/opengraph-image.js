import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Backend Engineer (Laravel/PHP) Course - Digitanotion Academy Awka, Anambra, Nigeria";
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
      {/* Background Pattern - Code Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
              radial-gradient(circle at 20px 20px, #f97316 1px, transparent 1px),
              radial-gradient(circle at 80px 150px, #ef4444 1px, transparent 1px)
            `,
          backgroundSize: "40px 40px, 80px 80px",
          opacity: 0.08,
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
          alt="Digitanotion Academy Logo"
          width={120}
          height={120}
          style={{
            borderRadius: "24px",
            boxShadow: "0 25px 40px -12px rgba(249, 115, 22, 0.35)",
          }}
        />
      </div>

      {/* Course Title */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "8px",
          lineHeight: 1.1,
        }}
      >
        Backend Engineer
      </h1>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          background: "linear-gradient(135deg, #f97316, #ef4444)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: "16px",
        }}
      >
        Laravel/PHP Specialization
      </h2>

      {/* Key Info Badges */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "32px",
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
            fontSize: "24px",
            fontWeight: "600",
            border: "1.5px solid rgba(249, 115, 22, 0.5)",
          }}
        >
          ⏱️ 14 Weeks
        </span>
        <span
          style={{
            padding: "12px 28px",
            background: "rgba(239, 68, 68, 0.15)",
            borderRadius: "100px",
            color: "#ef4444",
            fontSize: "24px",
            fontWeight: "600",
            border: "1.5px solid rgba(239, 68, 68, 0.5)",
          }}
        >
          🎯 Onsite
        </span>
        <span
          style={{
            padding: "12px 28px",
            background: "rgba(34, 197, 94, 0.15)",
            borderRadius: "100px",
            color: "#22c55e",
            fontSize: "24px",
            fontWeight: "600",
            border: "1.5px solid rgba(34, 197, 94, 0.5)",
          }}
        >
          📍 Awka, Anambra
        </span>
      </div>

      {/* Price */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <span style={{ fontSize: "48px", fontWeight: "bold", color: "white" }}>
          ₦270,000
        </span>
        <span
          style={{
            fontSize: "32px",
            color: "#94a3b8",
            textDecoration: "line-through",
          }}
        >
          ₦350,000
        </span>
        <span
          style={{
            padding: "8px 24px",
            background: "linear-gradient(135deg, #f97316, #ef4444)",
            borderRadius: "100px",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          23% OFF
        </span>
      </div>

      {/* Tech Stack */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            padding: "8px 20px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "100px",
            color: "#e2e8f0",
            fontSize: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          🐘 Laravel
        </span>
        <span
          style={{
            padding: "8px 20px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "100px",
            color: "#e2e8f0",
            fontSize: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          🐘 PHP
        </span>
        <span
          style={{
            padding: "8px 20px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "100px",
            color: "#e2e8f0",
            fontSize: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          🗄️ MySQL
        </span>
        <span
          style={{
            padding: "8px 20px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "100px",
            color: "#e2e8f0",
            fontSize: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          ☁️ AWS
        </span>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "8px",
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
            style={{ fontSize: "40px", fontWeight: "bold", color: "#22c55e" }}
          >
            5
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Production Projects
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
            style={{ fontSize: "40px", fontWeight: "bold", color: "#22c55e" }}
          >
            20+
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Hands-on Labs
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
            style={{ fontSize: "40px", fontWeight: "bold", color: "#f97316" }}
          >
            Mar 4
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Next Start Date
          </span>
        </div>
      </div>

      {/* Location */}
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
        Digitanotion Academy • Suite 6, Mgbajiaka Area, Awka, Anambra State,
        Nigeria
      </div>
    </div>,
    {
      ...size,
    },
  );
}
