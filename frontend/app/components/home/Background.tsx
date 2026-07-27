"use client";

import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <Image
        src="/pixel/backgroundd.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center select-none"
      />
    </div>
  );
}