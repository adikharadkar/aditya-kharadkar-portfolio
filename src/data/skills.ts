export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Webpack", "Vite", "npm", "Yarn", "Jest"],
  },
  {
    category: "APIs & Integrations",
    items: ["RESTful APIs", "GraphQL"],
  },
  {
    category: "Concepts",
    items: [
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Web Accessibility (WCAG 2.1)",
      "Performance Optimization",
      "Agile/Scrum",
      "Problem Solving",
    ],
  },
];

export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Tools & Platforms"
  | "APIs & Integrations"
  | "Concepts";

export interface SkillGroup {
  category: SkillCategory;
  items: string[];
}
