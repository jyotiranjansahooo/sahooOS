"use client";

import { useEffect, useState } from "react";

export default function DesktopClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const [clock, period] = time.split(" ");

  const day = now.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const date = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
   className="
pointer-events-none
hidden
lg:flex
fixed
top-30
right-45
z-20
flex-col
items-end

select-none
"
    >
      <div className="leading-none">
        <span
          className="
          text-7xl
          font-light
          tracking-tight
          text-white
          drop-shadow-[0_0_20px_rgba(255,255,255,.35)]
          "
        >
          {clock}
        </span>

        <span
          className="
          ml-2
          align-top

          text-lg
          font-semibold
          text-slate-300
          "
        >
          {period}
        </span>
      </div>

      <span className="mt-2 text-lg text-slate-200">
        {day}
      </span>

      <span className="text-base text-slate-400">
        {date}
      </span>
    </div>
  );
}