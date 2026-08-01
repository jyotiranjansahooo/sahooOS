"use client";

import toast from "react-hot-toast";

import DraggableDesktopIcon from "./DraggableDesktopIcon";

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
inset-0
overflow-hidden
z-20
"
    >
      {apps.map((app) => (
        <DraggableDesktopIcon
          id={app.id}
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
