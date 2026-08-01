"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useWindows } from "@/app/context/WindowContext";

export default function PixelCharacter() {
  const { windows } = useWindows();

  const hasOpenWindow = useMemo(() => {
    return Object.values(windows).some(
      (w) => w.opened && !w.minimized
    );
  }, [windows]);

  if (hasOpenWindow) return null;

  return (
    <div
      className="
      pointer-events-none

      hidden
      lg:flex

      fixed

      -bottom-52
    left-[38%]
-translate-x-1/2

      z-10

      "

    >
      <Image
        src="/pixel/char.png"
        alt="Pixel Character"
        width={620}
        height={620}
        priority
      />
    </div>
  );
}