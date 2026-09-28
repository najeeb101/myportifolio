"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <MotionSection id="experience">
      <SectionHeader eyebrow="// experience" title="Where I have been applying the work." />
      <div className="timeline" ref={timelineRef}>
        <motion.div className="timeline-progress" style={{ scaleY: progress }} aria-hidden="true" />
        {experience.map((item, index) => (
          <TimelineItem item={item} key={`${item.role}-${item.company}`} index={index} />
        ))}
      </div>
    </MotionSection>
  );
}
