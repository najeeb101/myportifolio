import { skillGroups } from "@/data/skills";

const tools = Array.from(new Set(skillGroups.flatMap((group) => group.skills)));
const half = Math.ceil(tools.length / 2);
const rows = [tools.slice(0, half), tools.slice(half)];

// Two endless ribbons of tools drifting in opposite directions.
export function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Tools and technologies">
      {rows.map((row, rowIndex) => (
        <div className={`tech-marquee-row ${rowIndex % 2 ? "tech-marquee-row--reverse" : ""}`} key={rowIndex}>
          <div className="tech-marquee-track">
            {[...row, ...row].map((tool, index) => (
              <span key={`${tool}-${index}`} aria-hidden={index >= row.length || undefined}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
