export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI and Automation Intern",
    company: "Silatha",
    period: "Oct 2025 - Present",
    location: "Amsterdam, Netherlands (Remote)",
    highlights: [
      "Designed and deployed production AI automation pipelines that replaced manual workflows across business functions.",
      "Integrated third-party APIs into data pipelines with monitoring, error handling, and performance dashboards.",
      "Supported weekly release cycles with reliable automation and data workflows.",
    ],
    stack: ["Python", "n8n", "OpenAI API", "API Integration", "Monitoring"],
  },
  {
    role: "Industry Partnership Intern",
    company: "Scale AI via Qatar University",
    period: "Jun 2026 - Aug 2026",
    location: "Doha, Qatar",
    highlights: [
      "Completed an internship with Scale AI through Qatar University's industry partnership program.",
      "Built the Cohort Simulator, a discrete-event model of QU CS student progression using Monte Carlo simulation.",
      "Developed Scenario Builder and Plan Builder dashboards to test curriculum and capacity changes before implementation.",
    ],
    stack: ["Python", "Monte Carlo", "Agent-Based Simulation", "Next.js", "TypeScript"],
  },
  {
    role: "Research Intern - Aquaponics AI",
    company: "Qatar University",
    period: "Aug 2025 - Nov 2025",
    location: "Doha, Qatar",
    highlights: [
      "Led AI research on a federated aquaponics control system using reinforcement learning for distributed model optimization.",
      "Deployed an AI-enabled greenhouse prototype with ML-driven sensor and control hardware.",
      "Worked in a multi-institution collaboration on applied AI for aquaponics.",
    ],
    stack: ["Machine Learning", "Federated Learning", "Reinforcement Learning", "IoT"],
  },
];
