"use client";

import Clock from "./Clock";
import { useWindows, WindowName } from "@/app/context/WindowContext";
import {
  LuLaptop,
  LuUser,
  LuFolderOpen,
  LuTerminal,
  LuMail,
  LuFileText,
} from "react-icons/lu";

const icons = {
  profile: LuUser,
  projects: LuFolderOpen,
  terminal: LuTerminal,
  contact: LuMail,
  resume: LuFileText,
};

export default function Taskbar() {
  const {
    windows,
    active,
    focusWindow,
    restoreWindow,
  } = useWindows();

  const openedApps = (Object.keys(windows) as WindowName[]).filter(
    (name) => windows[name].opened
  );

  return (
    <footer
      className="
      fixed
      bottom-0
      left-0
      z-[9999]

      flex
      h-14
      w-full
      items-center
      justify-between

      border-t
      border-white/10

      bg-black/40

      px-5

      backdrop-blur-xl
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <LuLaptop size={22} className="text-violet-400" />

          <span className="font-semibold text-white">
            SAHOO OS
          </span>
        </div>

        <div className="flex items-center gap-2">
          {openedApps.map((app) => {
            const Icon = icons[app];

            return (
              <button
                key={app}
                onClick={() => restoreWindow(app)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                  active === app
                    ? "bg-violet-600"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon
                  size={18}
                  className="text-white"
                />

                <span className="text-sm capitalize text-white">
                  {app}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <Clock />
    </footer>
  );
}