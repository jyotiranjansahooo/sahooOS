"use client";

import toast from "react-hot-toast";
import Image from "next/image";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { FiUploadCloud, FiTrash2, FiImage } from "react-icons/fi";

type Props = {
  images: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};
const MAX_IMAGES = 5;
export default function GalleryUploader({
  images,
  onChange,
  className,
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
            if (images.length >= MAX_IMAGES) {
              toast.error(`You can upload only ${MAX_IMAGES} gallery images.`);
              return;
            }

            const url = result.info.secure_url as string;

            onChange((prev) => [...prev, url]);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            disabled={images.length >= MAX_IMAGES}
            onClick={() => {
              if (images.length >= MAX_IMAGES) {
                toast.error("Maximum 5 gallery images allowed.");
                return;
              }

              open();
            }}
            className={`
    flex
    min-h-[260px]
    w-full
    flex-col
    items-center
    justify-center
    rounded-2xl
    border-2
    border-dashed
    px-8
    py-12
    transition-all
    duration-200

    ${
      images.length >= MAX_IMAGES
        ? "cursor-not-allowed border-gray-300 bg-gray-100 opacity-60"
        : "border-[#A7D7A0] bg-[#F7FBF5] hover:border-[#7BAE73] hover:bg-[#EEF6EA]"
    }
  `}
          >
            <FiUploadCloud size={60} className="text-[#7BAE73]" />

            <h3 className="mt-5 text-xl font-semibold text-[#1F2937]">
              Upload Gallery Images
            </h3>

            <p className="mt-2 text-sm text-[#6B7280]">
              Add screenshots of your project.
            </p>
          </button>
        )}
      </CldUploadWidget>

      {images.length > 0 && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-[#6B7280]">
              <FiImage />
              {images.length} / {MAX_IMAGES} Images
            </div>
            {images.length < MAX_IMAGES && (
              <p className="text-sm text-[#7BAE73]">
                You can upload {MAX_IMAGES - images.length} more image
                {MAX_IMAGES - images.length > 1 ? "s" : ""}.
              </p>
            )}
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
                border-[#DDE8D8]
bg-[#F7FBF5]
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

                <div className="flex items-center justify-between border-t border-[#DDE8D8] p-3">
                  <span className="text-xs text-[#6B7280]">
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
hover:bg-red-100
hover:text-red-600                    "
                  >
                    <FiTrash2 size={16} />
                  </button>
                  {images.length >= MAX_IMAGES && (
                    <p className="text-center text-sm font-medium text-red-500">
                      Maximum 5 gallery images uploaded.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
