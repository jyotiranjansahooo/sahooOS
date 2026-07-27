"use client";

import Image from "next/image";

export default function Character() {
  return (
    <div
      className="
      absolute
      bottom-28
      right-8
      z-30

      md:right-12

      lg:right-20
    "
    >
      <Image
        src="/pixel/charecter.png"
        alt="Character"
        width={420}
        height={620}
        priority
        className="
          h-[260px]
          w-auto

          sm:h-[340px]

          md:h-[430px]

          lg:h-[520px]
        "
      />
    </div>
  );
}