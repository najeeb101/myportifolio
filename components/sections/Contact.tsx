import { GitBranch, Mail, Network } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <MotionSection id="contact" className="contact-section">
      <SectionHeader eyebrow="// contact" title="Let's build something useful." />
      <div className="contact-card">
        <p>
          Open to internships, collaborations, technical projects, and conversations around AI,
          automation, and applied software.
        </p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="social-row">
          <a href={socials.github}>
            <GitBranch size={20} />
            GitHub
          </a>
          <a href={socials.linkedin}>
            <Network size={20} />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={20} />
            Email
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
