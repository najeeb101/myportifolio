import type { ExperienceItem } from "@/data/experience";

export function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />
      <div>
        <div className="timeline-meta">
          <span>{item.period}</span>
          <span>{item.location}</span>
        </div>
        <h3>{item.role}</h3>
        <p className="company">{item.company}</p>
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="chip-row">
          {item.stack.map((tag) => (
            <span className="chip chip--quiet" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
