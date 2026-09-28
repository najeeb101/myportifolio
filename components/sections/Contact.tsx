import { FileText, Mail, Send } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";
import { GitHubLogo, LinkedInLogo } from "@/components/ui/BrandIcons";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, socials } from "@/data/profile";

const openTo = ["AI internships", "Automation projects", "Full-stack builds", "Technical collaborations"];

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
          <MagneticLink className="button button--primary" href={`mailto:${profile.email}`}>
            Email Me
            <Send size={18} />
          </MagneticLink>
          <MagneticLink className="button button--secondary" href="/resume/Najeeb Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
            <FileText size={18} />
          </MagneticLink>
          <MagneticLink className="button button--secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <LinkedInLogo size={18} />
          </MagneticLink>
        </div>
        <RevealGroup className="contact-open-to" aria-label="Open to">
          {openTo.map((item) => (
            <RevealItem as="span" key={item}>
              {item}
            </RevealItem>
          ))}
        </RevealGroup>
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
