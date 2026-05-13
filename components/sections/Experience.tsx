import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <MotionSection id="experience">
      <SectionHeader eyebrow="// experience" title="Where I have been applying the work." />
      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem item={item} key={`${item.role}-${item.company}`} />
        ))}
      </div>
    </MotionSection>
  );
}
