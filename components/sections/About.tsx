import Image from "next/image";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

const facts = [
  { label: "Studying", value: "B.S. Computer Science, Qatar University" },
  { label: "Working on", value: "CodeTutor and RouteyAI" },
  { label: "Interested in", value: "AI tools, logistics, and automation" },
  { label: "Based in", value: profile.location },
];

export function About() {
  return (
    <MotionSection id="about">
      <SectionHeader eyebrow="About" title="A bit about me" />
      <div className="about-grid">
        <div className="prose-block">
          <p>
            I&apos;m Najeeb, a computer science student at Qatar University. I like taking a messy
            problem and turning it into something people can open and use, and I usually end up
            doing the whole thing: the backend, the interface, and the boring parts in between.
          </p>
          <div className="about-photo">
            <Image
              src="/media/headshot.jpg"
              alt="Najeeb Abdi in a navy suit"
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "50% 20%" }}
            />
          </div>
          <p>
            These days that mostly means AI. I&apos;ve automated workflows at Silatha, built a
            graduation simulator with Scale AI, and I&apos;m now working on a tutor that grades code
            and learns from the results.
          </p>
          <p>
            Outside of class I run events for the university&apos;s AI organization and work as a
            student assistant on QU&apos;s IT task force.
          </p>
        </div>
        <dl className="about-panel" aria-label="Quick facts">
          {facts.map((item) => (
            <div className="about-highlight" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </MotionSection>
  );
}
