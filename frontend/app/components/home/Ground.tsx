"use client";

import Image from "next/image";

export default function Ground() {
  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        z-40
        w-full
        pointer-events-none
      "
    >
      <Image
        src="/pixel/groundd.png"
        alt="Ground"
        width={1920}
        height={180}
        priority
        className="
          w-full
          h-24

          sm:h-28

          md:h-32

          lg:h-36

          object-cover
          select-none
        "
      />
    </div>
  );
}