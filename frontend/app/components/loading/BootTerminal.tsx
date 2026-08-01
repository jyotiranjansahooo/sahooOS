"use client";

import { useEffect, useState } from "react";

const logs = [
  "[ OK ] Initializing Kernel...",
  "[ OK ] Loading Device Drivers...",
  "[ OK ] Mounting File System...",
  "[ OK ] Starting Portfolio Services...",
  "[ OK ] Loading Profile...",
  "[ OK ] Loading Projects...",
  "[ OK ] Loading Resume...",
  "[ OK ] Connecting Database...",
  "[ OK ] Initializing Desktop...",
  "[DONE] SAHOO OS Ready."
];

export default function BootTerminal() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index >= logs.length) {
        clearInterval(timer);
        return;
      }

      setVisibleLogs((prev) => [...prev, logs[index]]);
      index++;
    }, 250);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 w-full max-w-2xl rounded-xl border border-violet-500/20 bg-black/50 p-5 font-mono text-sm text-green-400 shadow-[0_0_30px_rgba(139,92,246,.2)]">
      {visibleLogs.map((log, index) => (
        <p
          key={index}
          className="mb-2 animate-pulse"
        >
          {log}
        </p>
      ))}

      <span className="animate-pulse">▋</span>
    </div>
  );
}