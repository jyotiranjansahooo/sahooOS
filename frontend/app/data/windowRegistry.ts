"use client";

import ProfileWindow from "@/app/components/windows/ProfileWindow";
import ProjectsWindow from "@/app/components/windows/ProjectsWindow";
import TerminalWindow from "@/app/components/windows/TerminalWindow";
import ContactWindow from "@/app/components/windows/ContactWindow";
import ResumeWindow from "@/app/components/windows/ResumeWindow";

export const windowRegistry = {
  profile: ProfileWindow,
  projects: ProjectsWindow,
  terminal: TerminalWindow,
  contact: ContactWindow,
  resume: ResumeWindow,
} as const;