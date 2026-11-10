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
    period: "Oct 2025 - Jan 2026",
    location: "Amsterdam, Netherlands (Remote)",
    highlights: [
      "I built and deployed 3 production automation workflows in n8n and Python that use the OpenAI API to do work the team used to do by hand.",
      "I connect outside APIs into our data flows and add the monitoring and error handling, so failures get caught instead of breaking quietly.",
      "I also built and deployed a 6-level word search game (React, Firebase) that around 200 people have played.",
    ],
    stack: ["Python", "n8n", "OpenAI API", "API Integration", "Monitoring"],
  },
  {
    role: "Industry Partnership Intern",
    company: "Scale AI via Qatar University",
    period: "Jun 2026 - Aug 2026",
    location: "Doha, Qatar",
    highlights: [
      "A summer internship with Scale AI, through Qatar University's industry partnership program.",
      "I built the CS Intake Planner, an agent-based Monte Carlo simulation of QU CS students moving through the real 41-course study plan, to show which prerequisites and full sections delay graduation.",
      "It recommends the largest intake that stays within the department's limits, with 95% uncertainty bounds, and comes with a Scenario Builder, a Plan Builder, and a dashboard so the head of department can test a change before making it.",
    ],
    stack: ["Python", "FastAPI", "Monte Carlo", "Agent-Based Simulation", "Next.js", "TypeScript", "Ollama"],
  },
  {
    role: "Research Intern - Aquaponics AI",
    company: "Qatar University",
    period: "Aug 2025 - Nov 2025",
    location: "Doha, Qatar",
    highlights: [
      "I joined a multi-institution research team building a federated aquaponics control system (raising fish and plants together), where several sites train a shared control model.",
      "I set up the reinforcement learning model for the distributed optimization.",
    ],
    stack: ["Machine Learning", "Federated Learning", "Reinforcement Learning"],
  },
];
