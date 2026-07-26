import type { WindowType } from "../Windows/windowContent";

export type DesktopItem = {
  id: WindowType | "resume";
  title: string;
  icon: string;
};

export const desktopItems: DesktopItem[] = [
  {
    id: "about",
    title: "About",
    icon: "👤",
  },
  {
    id: "projects",
    title: "Projects",
    icon: "📁",
  },
  {
    id: "education",
    title: "Education",
    icon: "🎓",
  },
  {
    id: "experience",
    title: "Experience",
    icon: "💼",
  },
  {
    id: "contact",
    title: "Contact",
    icon: "📧",
  },
  {
    id: "resume",
    title: "Resume",
    icon: "📄",
  },
];