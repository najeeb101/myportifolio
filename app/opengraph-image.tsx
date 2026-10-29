import { ImageResponse } from "next/og";

export const alt = "Najeeb Abdi, applied AI engineer and CS student";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const projects = ["Thermal Trace", "RouteyAI", "Taqriban", "Cohort Simulator"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1018",
          color: "#f0f4ff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#94a3b8", display: "flex", fontSize: 26, justifyContent: "space-between" }}>
          <span>najeeb-abdi.vercel.app</span>
          <span>Doha, Qatar</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 112, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>Najeeb Abdi</div>
          <div style={{ color: "#38bdf8", fontSize: 40, fontWeight: 700 }}>Applied AI Engineer · CS Student</div>
          <div style={{ color: "#cbd5e1", fontSize: 30, lineHeight: 1.4, maxWidth: 900 }}>
            I build AI tools, web apps, and games, from school bus routing to food shelf life.
          </div>
        </div>
        <div style={{ borderTop: "2px solid #1e293b", display: "flex", gap: 36, paddingTop: 28 }}>
          {projects.map((project) => (
            <span key={project} style={{ color: "#e2e8f0", fontSize: 26, fontWeight: 700 }}>
              {project}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
