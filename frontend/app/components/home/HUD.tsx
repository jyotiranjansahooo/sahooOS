"use client";

import {
  Cpu,
  Code2,
  Trophy,
} from "lucide-react";

export default function HUD() {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-4
        rounded-xl
        border
        border-[#4CF8A8]/40
        bg-black/40
        px-5
        py-3
        backdrop-blur-md
      "
    >
      <div className="flex items-center gap-2">
        <Cpu
          size={18}
          className="text-[#4CF8A8]"
        />
        <span className="text-xs text-white md:text-sm">
          Next.js
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Code2
          size={18}
          className="text-[#4CF8A8]"
        />
        <span className="text-xs text-white md:text-sm">
          Full Stack
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Trophy
          size={18}
          className="text-[#4CF8A8]"
        />
        <span className="text-xs text-white md:text-sm">
          Portfolio
        </span>
      </div>
    </div>
  );
}