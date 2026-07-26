"use client";

import { useState } from "react";

import DesktopGrid from "./DesktopGrid";
import WindowManager from "./WindowManager";

import type { DesktopItem } from "./desktopData";
import type { WindowType } from "../Windows/windowContent";

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<WindowType | null>(null);

  const handleOpen = (id: DesktopItem["id"]) => {
    if (id === "resume") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Jyoti_Ranjan_Sahoo_Resume.pdf";
      link.click();
      return;
    }
    setActiveWindow(id);
  };

  return (
    <main className="relative min-h-screen bg-[#0B0F14]">
      <DesktopGrid onOpen={handleOpen} />

      <WindowManager
        activeWindow={activeWindow}
        onClose={() => setActiveWindow(null)}
      />
    </main>
  );
}
