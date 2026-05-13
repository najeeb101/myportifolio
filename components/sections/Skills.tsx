import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

const allSkills = skillGroups.flatMap((group) => group.skills);

export function Skills() {
  return (
    <MotionSection id="skills">
      <SectionHeader eyebrow="// skills" title="Tools I use to build." />
      <div className="skills-showcase" aria-hidden="true">
        <div className="skills-cover">
          <span>AI</span>
          <span>WEB</span>
          <span>DATA</span>
        </div>
        <div className="skill-marquee">
          <div>
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
