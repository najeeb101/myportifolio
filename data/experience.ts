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
    role: "AI Intern",
    company: "Silatha",
    period: "Dec 2025 - Present",
    location: "Amsterdam, Remote",
    highlights: [
      "Designing AI automation pipelines for repeatable internal workflows.",
      "Building data collection and monitoring flows with practical error handling.",
      "Connecting APIs, scripts, and AI tools into usable business systems.",
    ],
    stack: ["Python", "n8n", "OpenAI API", "Automation"],
  },
  {
    role: "Research Intern - Aquaponics AI",
    company: "Qatar University",
    period: "Aug 2025 - Nov 2025",
    location: "Doha, Qatar",
    highlights: [
      "Worked on AI-driven aquaponics research using machine learning concepts.",
      "Explored federated learning and reinforcement learning for smarter control systems.",
      "Translated research ideas into implementation plans and technical experiments.",
    ],
    stack: ["ML", "Federated Learning", "Reinforcement Learning"],
  },
  {
    role: "IT Student Task Force",
    company: "ITS Department, Qatar University",
    period: "Aug 2025 - Oct 2025",
    location: "Doha, Qatar",
    highlights: [
      "Supported IT workflows and student-facing technical operations.",
      "Collaborated with teams to resolve issues and improve service reliability.",
      "Built stronger practical habits around support, communication, and systems thinking.",
    ],
    stack: ["IT Support", "Systems", "Operations"],
  },
];
