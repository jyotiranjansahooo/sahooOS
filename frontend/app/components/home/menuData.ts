export const menuItems = [
  {
    id: "about",
    label: "ABOUT",
  },
  {
    id: "projects",
    label: "PROJECTS",
  },
  {
    id: "education",
    label: "EDUCATION",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
  },
  {
    id: "contact",
    label: "CONTACT",
  },
] as const;

export type MenuId = (typeof menuItems)[number]["id"];