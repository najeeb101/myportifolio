import { FileText, Mail, Send } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";
import { GitHubLogo, LinkedInLogo } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <MotionSection id="contact" className="contact-section">
      <SectionHeader eyebrow="// contact" title="Let's build something useful." />
      <div className="contact-card">
        <div className="contact-copy">
          <p>
            I&apos;m open to AI engineering internships, technical collaborations, and practical
            software projects where automation, data, and product thinking meet.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className="contact-actions" aria-label="Contact actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email Me
            <Send size={18} />
          </a>
          <a className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
            <FileText size={18} />
          </a>
          <a className="button button--secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <LinkedInLogo size={18} />
          </a>
        </div>
        <div className="contact-open-to" aria-label="Open to">
          <span>AI internships</span>
          <span>Automation projects</span>
          <span>Full-stack builds</span>
          <span>Technical collaborations</span>
        </div>
        <div className="social-row contact-social-row">
          <a href={socials.github} target="_blank" rel="noreferrer">
            <GitHubLogo size={20} />
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <LinkedInLogo size={20} />
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
