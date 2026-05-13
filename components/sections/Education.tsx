import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { activities, education } from "@/data/education";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <MotionSection id="education">
      <SectionHeader eyebrow="// education" title="Academic base and community work." />
      <div className="education-grid">
        <article className="info-card">
          <div className="card-header">
            <GraduationCap size={20} className="text-accent" />
            <span className="card-label">Education</span>
          </div>
          <h3>{education.school}</h3>
          <p className="degree-text">{education.degree}</p>
          <p className="period-text">{education.period}</p>
          <div className="chip-row">
            {education.coursework.map((course) => (
              <span className="chip chip--quiet" key={course}>
                {course}
              </span>
            ))}
          </div>
        </article>
        <article className="info-card">
          <div className="card-header">
            <Award size={20} className="text-accent" />
            <span className="card-label">Activities & Honors</span>
          </div>
          <div className="activity-list">
            {activities.map((activity) => (
              <div key={activity} className="activity-item">
                <CheckCircle2 size={16} className="text-accent" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </MotionSection>
  );
}
