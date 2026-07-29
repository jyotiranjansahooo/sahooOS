"use client";

import Image from "next/image";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { FiImage, FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { useState } from "react";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const [preview, setPreview] = useState("");

  function removeImage() {
    setPreview("");
    onUpload("");
  }

  return (
    <div className="space-y-5">
      {!preview ? (
        <CldUploadWidget
          uploadPreset="portfolio"
          onSuccess={(result: CloudinaryUploadWidgetResults) => {
            if (
              result.info &&
              typeof result.info !== "string" &&
              "secure_url" in result.info
            ) {
              const url = result.info.secure_url as string;

              setPreview(url);

              onUpload(url);
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
                py-20
                transition
                hover:border-violet-500
                hover:bg-zinc-800
              "
            >
              <FiUploadCloud size={60} className="text-violet-400" />

              <h3 className="mt-6 text-2xl font-semibold">Upload Thumbnail</h3>

              <p className="mt-3 text-base text-gray-500">
                Click to upload your project thumbnail.
              </p>
            </button>
          )}
        </CldUploadWidget>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="relative aspect-video w-full">
            <Image
              src={preview}
              alt="Thumbnail"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 p-4">
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <FiImage />
              Thumbnail Uploaded
            </div>

            <div className="flex gap-3">
              <CldUploadWidget
                uploadPreset="portfolio"
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                  if (
                    result.info &&
                    typeof result.info !== "string" &&
                    "secure_url" in result.info
                  ) {
                    const url = result.info.secure_url as string;

                    setPreview(url);

                    onUpload(url);
                  }
                }}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="
                      rounded-lg
                      bg-violet-600
                      px-4
                      py-2
                      text-sm
                      transition
                      hover:bg-violet-500
                    "
                  >
                    Replace
                  </button>
                )}
              </CldUploadWidget>

              <button
                type="button"
                onClick={removeImage}
                className="
                  rounded-lg
                  border
                  border-red-500/40
                  px-4
                  py-2
                  text-sm
                  text-red-400
                  transition
                  hover:bg-red-500
                  hover:text-white
                "
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
