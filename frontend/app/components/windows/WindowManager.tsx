"use client";

import { useWindows } from "@/app/context/WindowContext";

import ProfileWindow from "./ProfileWindow";
import ProjectsWindow from "./ProjectsWindow";
import TerminalWindow from "./TerminalWindow";
import ContactWindow from "./ContactWindow";

export default function WindowManager() {
  const { windows, closeWindow } = useWindows();

  return (
    <>
      {windows.profile.opened && !windows.profile.minimized && (
        <ProfileWindow onClose={() => closeWindow("profile")} />
      )}

      {windows.projects.opened && !windows.projects.minimized && (
        <ProjectsWindow onClose={() => closeWindow("projects")} />
      )}

      {windows.terminal.opened && !windows.terminal.minimized && (
        <TerminalWindow onClose={() => closeWindow("terminal")} />
      )}

      {windows.contact.opened && !windows.contact.minimized && (
        <ContactWindow onClose={() => closeWindow("contact")} />
      )}
    </>
  );
}