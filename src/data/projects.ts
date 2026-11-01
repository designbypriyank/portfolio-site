// Add a new project by adding an entry here and a page in src/pages/work/.
export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta: string[];
  cover: string;
  coverAlt: string;
  theme: string;
  status?: "draft" | "soon";
}

export const projects: Project[] = [
  {
    slug: "twig-labs",
    title: "Twig Labs",
    summary: "Redesigning an Ed-tech platform to improve usability for school students",
    meta: ["Design Intern", "2 months", "UX Research · UI Design · Ed-tech B2C"],
    cover: "/images/twig/cover-mockup.webp",
    coverAlt: "Redesigned Twig dashboard showing today's mission, streaks and leaderboard",
    theme: "theme-twig",
  },
  {
    slug: "iit-r-one",
    title: "IIT R – ONE",
    summary: "Re-designing an Academic Info. System platform to simplify daily tasks of university students",
    meta: ["Team of 4", "1.5 months", "UX Research · User Interviews"],
    cover: "/images/iitr-one/cover.webp",
    coverAlt: "IIT R – ONE cover illustration of the IIT Roorkee main building",
    theme: "theme-iitr",
    status: "soon",
  },
];
