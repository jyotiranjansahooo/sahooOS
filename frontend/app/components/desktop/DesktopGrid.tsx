"use client";

import toast from "react-hot-toast";

import DesktopIcon from "./DesktopIcon";

import { apps } from "@/app/data/apps";

import useDesktop from "@/app/hooks/useDesktop";

import { useWindows, WindowName } from "@/app/context/WindowContext";

export default function DesktopGrid() {
  const { selected, setSelected } = useDesktop();

  const { openWindow } = useWindows();

  function openApp(id: WindowName) {
    if (id === "resume") {
      const link = document.createElement("a");

      link.href = "/resume.pdf";

      link.download = "Jyoti-Ranjan-Sahoo-Resume.pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      toast.success("Resume download started.");

      openWindow("resume");

      return;
    }

    openWindow(id);
  }

  return (
    <section
      className="
      absolute

     left-3
top-3

sm:left-5
sm:top-6

lg:left-6
lg:top-8

gap-4
sm:gap-5
lg:gap-6

      z-20

      flex

      flex-col

    "
    >
      {apps.map((app) => (
        <DesktopIcon
          key={app.id}
          title={app.title}
          icon={app.icon}
          selected={selected === app.id}
          onClick={() => setSelected(app.id)}
          onDoubleClick={() => openApp(app.id as WindowName)}
        />
      ))}
    </section>
  );
}
