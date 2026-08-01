import {
  LuUser,
  LuFolderOpen,
  LuTerminal,
  LuMail,
  LuFileText,
} from "react-icons/lu";

import ProfileWindow from "@/app/components/windows/ProfileWindow";
import ProjectsWindow from "@/app/components/windows/ProjectsWindow";
import TerminalWindow from "@/app/components/windows/TerminalWindow";
import ContactWindow from "@/app/components/windows/ContactWindow";
import ResumeWindow from "@/app/components/windows/ResumeWindow";
import ProjectDetailsWindow from "../components/windows/ProjectDetailsWindow";

export const apps = [
  {
    id: "profile",
    title: "Profile",
    icon: LuUser,
    component: ProfileWindow,
  },

  {
    id: "projects",
    title: "Projects",
    icon: LuFolderOpen,
    component: ProjectsWindow,
  },

  {
    id: "terminal",
    title: "Terminal",
    icon: LuTerminal,
    component: TerminalWindow,
  },

  {
    id: "contact",
    title: "Contact",
    icon: LuMail,
    component: ContactWindow,
  },

  {
    id: "resume",
    title: "Resume",
    icon: LuFileText,
    component: ResumeWindow,
  },

  // {
  //   id: "projectDetails",
  //   title: "Project",
  //   icon: LuFolderOpen,
  //   component: ProjectDetailsWindow,
  //   hidden: true,
  // },
] as const;

export type AppId = (typeof apps)[number]["id"];
