import { ProjectCard } from "@/components/ui/ProjectCard";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProject, projects } from "@/data/projects";

export function Projects() {
  return (
    <MotionSection id="projects">
      <SectionHeader eyebrow="// projects" title="Selected work with practical outcomes." />
      <ProjectCard project={featuredProject} featured />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </MotionSection>
  );
}
