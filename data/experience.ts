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
      "I build automations in n8n and Python that use the OpenAI API to do work the team used to do by hand.",
      "I connect outside APIs into our data flows and add the monitoring and error handling, so failures get caught instead of breaking quietly.",
      "The team ships every week, and these automations have to keep running through each release.",
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
      "I built the Cohort Simulator, which simulates QU CS students moving through the degree many times over to show which prerequisites and full sections delay graduation.",
      "I also built the Scenario Builder and Plan Builder, so the head of department could try a change to the curriculum or class sizes and see the result before making it.",
    ],
    stack: ["Python", "Monte Carlo", "Agent-Based Simulation", "Next.js", "TypeScript"],
  },
  {
    role: "Research Intern - Aquaponics AI",
    company: "Qatar University",
    period: "Aug 2025 - Nov 2025",
    location: "Doha, Qatar",
    highlights: [
      "I led the AI side of a research project on aquaponics (raising fish and plants together), using reinforcement learning and federated learning so several sites could train a shared control model.",
      "We set up a working greenhouse prototype where ML models read the sensors and drive the controls.",
      "The project was a collaboration between several institutions.",
    ],
    stack: ["Machine Learning", "Federated Learning", "Reinforcement Learning", "IoT"],
  },
];
