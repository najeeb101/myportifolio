import { ImageResponse } from "next/og";

export const alt = "Najeeb Barkhad portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #080b12 0%, #0b1020 58%, #0e1726 100%)",
          color: "#f0f4ff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 20% 18%, rgba(56, 189, 248, 0.28), transparent 30%), radial-gradient(circle at 80% 72%, rgba(16, 185, 129, 0.22), transparent 34%)",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(30, 41, 59, 0.62) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.62) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            inset: 0,
            opacity: 0.36,
            position: "absolute",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
          <div
            style={{
              alignItems: "center",
              border: "1px solid rgba(56, 189, 248, 0.5)",
              borderRadius: "999px",
              color: "#10b981",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              gap: 12,
              padding: "12px 20px",
            }}
          >
            <span
              style={{
                background: "#10b981",
                borderRadius: 999,
                display: "block",
                height: 12,
                width: 12,
              }}
            />
            Open to opportunities
          </div>
          <div
            style={{
              color: "#94a3b8",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Doha, Qatar
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, position: "relative" }}>
          <div
            style={{
              color: "#38bdf8",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            AI Engineering & Computer Science
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 108,
              fontWeight: 900,
              letterSpacing: -5,
              lineHeight: 0.9,
              maxWidth: 940,
            }}
          >
            <span>Najeeb</span>
            <span>Barkhad</span>
          </div>
          <div
            style={{
              color: "#cbd5e1",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: 1.35,
              maxWidth: 880,
            }}
          >
            Building practical AI systems, automation workflows, and full-stack products.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            position: "relative",
          }}
        >
          {["RouteyAI", "Automation", "Full-stack Products"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(14, 17, 24, 0.76)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                borderRadius: 14,
                color: "#f0f4ff",
                fontSize: 24,
                fontWeight: 800,
                padding: "14px 18px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
