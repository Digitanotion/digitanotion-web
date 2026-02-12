import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Digitanotion Academy - #1 Tech Training Center in Awka, Anambra, Nigeria";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Fetch your icon
  const iconUrl = "https://www.digitanotion.com.ng/icon.png";

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        position: "relative",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #333 2px, transparent 2px)",
          backgroundSize: "50px 50px",
          opacity: 0.1,
        }}
      />

      {/* Logo Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconUrl}
          alt="Digitanotion Academy Logo"
          width={120}
          height={120}
          style={{
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
          }}
        />
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "8px",
          lineHeight: 1.2,
        }}
      >
        Digitanotion Academy
      </h1>

      {/* Location Badge */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        {["Awka", "Anambra", "Nigeria", "Africa"].map((loc) => (
          <span
            key={loc}
            style={{
              padding: "8px 20px",
              background: "rgba(249, 115, 22, 0.2)",
              borderRadius: "100px",
              color: "#f97316",
              fontSize: "20px",
              fontWeight: "600",
              border: "1px solid rgba(249, 115, 22, 0.5)",
            }}
          >
            {loc}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: "28px",
          color: "#e2e8f0",
          textAlign: "center",
          marginBottom: "32px",
          maxWidth: "900px",
        }}
      >
        #1 Tech Training Center in Southeast Nigeria
      </p>

      {/* Stats Grid */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginBottom: "32px",
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
            1000+
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Students Trained
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
            95%
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Job Placement
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
            ₦65k
          </span>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>
            Courses Start
          </span>
        </div>
      </div>

      {/* Course Categories */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        {[
          "Cybersecurity",
          "Web Development",
          "App Development",
          "Digital Skills",
        ].map((course) => (
          <span
            key={course}
            style={{
              padding: "8px 24px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "100px",
              color: "white",
              fontSize: "18px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {course}
          </span>
        ))}
      </div>

      {/* Address */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "0",
          right: "0",
          textAlign: "center",
          color: "#64748b",
          fontSize: "16px",
          borderTop: "1px solid #334155",
          paddingTop: "20px",
          margin: "0 40px",
        }}
      >
        Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway, Awka, Anambra
        State
      </div>
    </div>,
    {
      ...size,
    },
  );
}
