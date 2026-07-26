import type { ReactNode } from "react";

import ProfileCard from "@/app/components/about/ProfileCard";
import Skills from "@/app/components/about/Skills";
import ProjectCard from "@/app/components/project/ProjectCard";

type WindowContent = {
  title: string;
  content: ReactNode;
};

export const windowContent: Record<string, WindowContent> = {
  about: {
    title: "About Me",
    content: (
      <div className="space-y-8">
        <ProfileCard />
        <Skills />
      </div>
    ),
  },

  projects: {
    title: "Projects",
    content: (
      <div className="space-y-6">
        <ProjectCard
          project={{
            _id: "1",
            title: "Green Basket",
            description:
              "A full-stack agricultural marketplace connecting farmers directly with customers.",
            image: "/projects/green-basket.png",
            github: "https://github.com/yourusername/green-basket",
            live: "https://greenbasket.vercel.app",
            techStack: [
              "Next.js",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "JWT",
            ],
          }}
        />
      </div>
    ),
  },

  education: {
    title: "Education",
    content: <p>Coming Soon...</p>,
  },

  experience: {
    title: "Experience",
    content: <p>Coming Soon...</p>,
  },

  contact: {
    title: "Contact",
    content: <p>Coming Soon...</p>,
  },
};

export type WindowType = keyof typeof windowContent;