"use client";

import Wallpaper from "./Wallpaper";
import DesktopGrid from "./DesktopGrid";
import WindowManager from "../windows/WindowManager";
import Taskbar from "../taskbar/Taskbar";
import DesktopClock from "../widgets/DesktopClock";
import PixelCharacter from "../pixel/PixelCharacter";

export default function Desktop() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Wallpaper />

      <div className="absolute inset-0 z-10">
        <DesktopGrid />
        <DesktopClock />
        <PixelCharacter />

        <WindowManager />
      </div>

      <Taskbar />
    </main>
  );
}
