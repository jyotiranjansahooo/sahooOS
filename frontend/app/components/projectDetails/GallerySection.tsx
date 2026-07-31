"use client";

import Image from "next/image";
import { useState } from "react";

import ImageLightbox from "./ImageLightbox";

type Props = {
  images: string[];
};

export default function GallerySection({
  images,
}: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  function next() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
    <>
      <section className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
        <h2 className="mb-6 text-3xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => {
                setCurrent(index);
                setOpen(true);
              }}
              className="
                relative
                aspect-video
                cursor-pointer
                overflow-hidden
                rounded-xl
              "
            >
              <Image
                src={image}
                alt=""
                fill
                className="
                  object-cover
                  transition
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </section>

      <ImageLightbox
        images={images}
        current={current}
        open={open}
        onClose={() => setOpen(false)}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}