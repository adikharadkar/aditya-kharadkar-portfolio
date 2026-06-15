export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

export const projects: Project[] = [
  {
    slug: "shopsphere",
    title: "ShopSphere — E-Commerce Frontend Application",
    description:
      "Independently developing a fully-typed e-commerce frontend application using React and TypeScript, with a focus on scalable, production-grade component architecture.",
    techStack: ["React.js", "TypeScript", "JavaScript", "Redux"],
    url: "https://github.com/adikharadkar/ShopSphere-E-Commerce-Frontend-Application",
  },
  {
    slug: "jobscout",
    title: "JobScout — Real-Time Job Aggregator",
    description:
      "Built a full-stack job aggregator application that scrapes real-time job listings across multiple job portals based on user-specified role and location, eliminating the need to search platforms individually.",
    techStack: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Flask",
      "JavaScript",
    ],
    url: "https://github.com/adikharadkar/JobScout-Real-Time-Job-Aggregator",
  },
  {
    slug: "secnotify",
    title: "SecNotify — Ubuntu Security Notice Scraper",
    description:
      "Built a Python script that automates the extraction of security vulnerability data from Ubuntu's official Security Notices webpage — eliminating the need for manual monitoring of security advisories.",
    techStack: ["Python", "BeautifulSoup"],
    url: "https://github.com/adikharadkar/SecNotify-Ubuntu-Security-Notice-Scraper",
  },
];
