"use client";

import Image from "next/image";

type Props = {
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export default function PixelButton({
  text,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        block
        h-16
        w-[260px]

        sm:w-[300px]

        lg:w-[340px]

        transition-transform
        duration-200

        hover:scale-105
        active:scale-95
      "
    >
      <Image
        src="/pixel/buttonn.png"
        alt={text}
        fill
        priority
        className="object-contain select-none"
      />

      <span
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-center

          text-base
          sm:text-lg

          font-bold
          tracking-[0.25em]

          ${
            active
              ? "text-[#7CFF9D]"
              : "text-white"
          }

          drop-shadow-[2px_2px_0px_#000]
        `}
      >
        {text}
      </span>
    </button>
  );
}