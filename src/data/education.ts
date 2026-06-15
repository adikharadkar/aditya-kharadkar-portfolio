export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

export const education: Education[] = [
  {
    id: "ms-computer-science",
    degree: "M.S. in Computer Science",
    institution:
      "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar",
    startYear: 2021,
    endYear: 2023,
  },
  {
    id: "bs-computer-science",
    degree: "B.S. in Computer Science",
    institution:
      "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar",
    startYear: 2018,
    endYear: 2021,
  },
];
