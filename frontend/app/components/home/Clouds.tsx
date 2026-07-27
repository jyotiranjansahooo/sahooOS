"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Clouds() {
  const cloudRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cloudRef.current) return;

    gsap.fromTo(
      cloudRef.current,
      {
        x: "-8%",
      },
      {
        x: "8%",
        repeat: -1,
        yoyo: true,
        duration: 25,
        ease: "none",
      }
    );
  }, []);

  return (
    <div
      ref={cloudRef}
      className="
        absolute
        inset-x-0
        top-0
        z-10
        pointer-events-none
      "
    >
      <Image
        src="/pixel/clouds.png"
        alt="Clouds"
        width={1920}
        height={400}
        priority
        className="w-full h-auto object-cover select-none"
      />
    </div>
  );
}