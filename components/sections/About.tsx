import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export function About() {
  return (
    <MotionSection id="about">
      <SectionHeader eyebrow="// about" title="Built around practical AI." />
      <div className="about-grid">
        <div className="prose-block">
          <p>
            I am a computer science major focused on AI engineering, automation, and applied
            machine learning. My strongest work sits at the intersection of useful products and
            intelligent systems.
          </p>
          <p>
            I care about the full path from idea to usable result: understanding the problem,
            shaping the system, building the interface, and making the technical work clear to
            people who need it.
          </p>
          <p>{profile.summary}</p>
        </div>
        <div className="terminal-card" aria-label="Profile terminal summary">
          <div className="terminal-controls">
            <span />
            <span />
            <span />
          </div>
          <pre>{`$ whoami
> najeeb_barkhad

$ cat focus.txt
> ai engineering
> automation systems
> full-stack products

$ echo $STATUS
> building and learning`}</pre>
        </div>
      </div>
    </MotionSection>
  );
}
