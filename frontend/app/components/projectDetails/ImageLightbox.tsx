"use client";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

type Props = {
  images: string[];
  current: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({
  images,
  current,
  open,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-md
      "
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <FiX size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-8 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
      >
        <FiChevronLeft size={30} />
      </button>

      <div className="relative h-[80vh] w-[90vw]">
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-8 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
      >
        <FiChevronRight size={30} />
      </button>
    </div>
  );
}