"use client";

import { useEffect, useState } from "react";
import BootTerminal from "./BootTerminal";

type Props = {
  onFinish: () => void;
};

const messages = [
  "Initializing Kernel...",
  "Loading Desktop...",
  "Mounting File System...",
  "Loading Portfolio...",
  "Loading Projects...",
  "Loading Resume...",
  "Starting Services...",
  "Preparing Workspace...",
  "Launching SAHOO OS...",
];

export default function BootLoader({ onFinish }: Props) {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;

        clearInterval(timer);

        setFadeOut(true);

        setTimeout(() => {
          onFinish();
        }, 700);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  const message =
    messages[Math.min(Math.floor(progress / 15), messages.length - 1)];

  return (
   <div
  className={`
    fixed inset-0 z-[99999]
    flex flex-col items-center justify-center
    bg-[#050816]
    transition-opacity duration-700
    ${fadeOut ? "opacity-0" : "opacity-100"}
  `}
>
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050816]">
      <h1
        className="
    animate-pulse
    bg-gradient-to-r
    from-violet-400
    via-fuchsia-400
    to-pink-400
    bg-clip-text
    text-7xl
    font-black
    tracking-[12px]
    text-transparent
    drop-shadow-[0_0_25px_rgba(168,85,247,.8)]
  "
      >
        SAHOO OS
      </h1>

      <p className="mt-4 text-slate-400">Booting System...</p>

      <div className="mt-12 h-2 w-[420px] overflow-hidden rounded-full bg-slate-800">
        <div
          className="
h-full
rounded-full
bg-gradient-to-r
from-violet-500
via-fuchsia-500
to-pink-500
shadow-[0_0_25px_rgba(168,85,247,.9)]
transition-all
duration-150
"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-4 text-xl font-bold text-white">{progress}%</p>

      <BootTerminal />
    </div>
    </div>
  );
}
