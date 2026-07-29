"use client";

import Image from "next/image";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import {
  FiUploadCloud,
  FiTrash2,
  FiImage,
} from "react-icons/fi";

type Props = {
  images: string[];
  onChange: (images: string[]) => void;
};

export default function GalleryUploader({
  images,
  onChange,
}: Props) {
  function removeImage(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-6">
      <CldUploadWidget
        uploadPreset="portfolio"
        onSuccess={(result: CloudinaryUploadWidgetResults) => {
          if (
            result.info &&
            typeof result.info !== "string" &&
            "secure_url" in result.info
          ) {
            onChange([
              ...images,
              result.info.secure_url as string,
            ]);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              rounded-xl
              border-2
              border-dashed
              border-zinc-700
              bg-zinc-900
              px-6
              py-10
              transition
              hover:border-violet-500
              hover:bg-zinc-800
            "
          >
            <FiUploadCloud
              size={60}
              className="text-violet-400"
            />

            <h3 className="mt-4 text-lg font-semibold">
              Upload Gallery Images
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Add screenshots of your project.
            </p>
          </button>
        )}
      </CldUploadWidget>

      {images.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <FiImage />
              {images.length} image
              {images.length > 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-900
                "
              >
                <div className="relative aspect-video">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="
                      object-cover
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                    unoptimized
                  />
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800 p-3">
                  <span className="text-xs text-zinc-400">
                    Image {index + 1}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="
                      rounded-lg
                      p-2
                      text-red-400
                      transition
                      hover:bg-red-500
                      hover:text-white
                    "
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}