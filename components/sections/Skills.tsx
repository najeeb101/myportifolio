import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <MotionSection id="skills">
      <SectionHeader eyebrow="Skills" title="What I work with" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skills-group" key={group.title} aria-label={group.title}>
            <h3>{group.title}</h3>
            <ul className="chip-row">
              {group.skills.map((skill) => (
                <li className="chip" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MotionSection>
  );
}
