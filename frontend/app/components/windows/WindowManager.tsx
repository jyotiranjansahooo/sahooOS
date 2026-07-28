"use client";

import { windowRegistry } from "@/app/data/windowRegistry";
import { useWindows } from "@/app/context/WindowContext";
import { WindowName } from "@/app/context/WindowContext";

export default function WindowManager() {
  const { windows, closeWindow } = useWindows();

  const openedWindows = (
    Object.keys(windows) as WindowName[]
  ).filter(
    (name) =>
      windows[name].opened &&
      !windows[name].minimized
  );

  return (
    <>
      {openedWindows.map((name) => {
      const Component = windowRegistry[name as keyof typeof windowRegistry];

        return (
          <Component
            key={name}
            onClose={() => closeWindow(name)}
          />
        );
      })}
    </>
  );
}