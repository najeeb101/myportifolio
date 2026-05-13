import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { activities, education } from "@/data/education";

export function Education() {
  return (
    <MotionSection id="education">
      <SectionHeader eyebrow="// education" title="Academic base and community work." />
      <div className="education-grid">
        <article className="info-card">
          <span className="card-label">Education</span>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p>{education.period}</p>
          <div className="chip-row">
            {education.coursework.map((course) => (
              <span className="chip chip--quiet" key={course}>
                {course}
              </span>
            ))}
          </div>
        </article>
        <article className="info-card">
          <span className="card-label">Activities</span>
          <div className="activity-list">
            {activities.map((activity) => (
              <div key={activity}>{activity}</div>
            ))}
          </div>
        </article>
      </div>
    </MotionSection>
  );
}
