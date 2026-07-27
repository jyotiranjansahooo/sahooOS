"use client";

import ProfileWindow from "./ProfileWindow";
import ProjectsWindow from "./ProjectsWindow";
import ContactWindow from "./ContactWindow";
import TerminalWindow from "./TerminalWindow";

export const windowRegistry = {
  profile: ProfileWindow,
  projects: ProjectsWindow,
  contact: ContactWindow,
  terminal: TerminalWindow,
};