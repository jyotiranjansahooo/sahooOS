"use client";

import Image from "next/image";

export default function Wallpaper() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/pixel/backgroundd.png"
        alt="Wallpaper"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}