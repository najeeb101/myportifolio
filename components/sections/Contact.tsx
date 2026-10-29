import { FileText, Send } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";
import { GitHubLogo, LinkedInLogo } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <MotionSection id="contact" className="contact-section">
      <SectionHeader eyebrow="Contact" title="Get in touch" />
      <div className="contact-card">
        <div className="contact-copy">
          <p>
            I&apos;m looking for AI and software internships, and I&apos;m happy to talk about a
            project if you have one. Email is the fastest way to reach me.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className="contact-actions" aria-label="Contact actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email me
            <Send size={18} />
          </a>
          <a className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
            Resume
            <FileText size={18} />
          </a>
          <a className="button button--secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <LinkedInLogo size={18} />
          </a>
          <a className="button button--secondary" href={socials.github} target="_blank" rel="noreferrer">
            GitHub
            <GitHubLogo size={18} />
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
