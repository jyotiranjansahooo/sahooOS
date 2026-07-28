"use client";

import Link from "next/link";

import Clock from "./Clock";
import { useWindows, WindowName } from "@/app/context/WindowContext";

import {
  LuLaptop,
  LuUser,
  LuFolderOpen,
  LuTerminal,
  LuMail,
  LuFileText,
  LuLock,
  LuFolderSearch,
} from "react-icons/lu";

const icons = {
  profile: LuUser,
  projects: LuFolderOpen,
  projectDetails: LuFolderSearch,
  terminal: LuTerminal,
  contact: LuMail,
  resume: LuFileText,
} satisfies Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
>;

export default function Taskbar() {
  const { windows, active, restoreWindow } = useWindows();


  const openedApps = (Object.keys(windows) as WindowName[]).filter(
    (name) => windows[name].opened,
  );

  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        z-9999

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
      <div className="flex items-center gap-5 overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0">
          <LuLaptop size={22} className="text-violet-400" />

          <span className="font-semibold text-white whitespace-nowrap">
            SAHOO OS
          </span>
        </div>

        <div className="flex items-center gap-2">
          {openedApps.map((app) => {
            const Icon = icons[app];

            if (!Icon) return null;

            return (
              <button
                key={app}
                onClick={() => restoreWindow(app)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                  active === app ? "bg-violet-600" : "hover:bg-white/10"
                }`}
              >
                <Icon size={18} className="text-white" />

                <span className="text-sm capitalize text-white">{app}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 shrink-0">
        <Clock />

        <Link
  href="/sign-in"
  prefetch={false}
  title="Administrator"
  className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-lg

    opacity-30

    transition-all
    duration-300

    hover:bg-white/10
    hover:opacity-100
  "
>
  <LuLock size={18} className="text-white" />
</Link>
      </div>
    </footer>
  );
}
