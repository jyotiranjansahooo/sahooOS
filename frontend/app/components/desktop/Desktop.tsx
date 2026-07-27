"use client";

import Wallpaper from "./Wallpaper";
import DesktopGrid from "./DesktopGrid";
import WindowManager from "../windows/WindowManager";
import Taskbar from "../taskbar/Taskbar";

export default function Desktop() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">

      <Wallpaper />

      <div className="absolute inset-0 z-10">

        <DesktopGrid />

        <WindowManager />

      </div>

      <Taskbar />

    </main>
  );
}