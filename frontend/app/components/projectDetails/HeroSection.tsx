"use client";

import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

export default function HeroSection({
  image,
  title,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-2xl">

      <div className="relative aspect-video">

        <Image
          src={image}
          alt={title}
          fill
          priority
          className="
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />

      </div>

    </div>
  );
}