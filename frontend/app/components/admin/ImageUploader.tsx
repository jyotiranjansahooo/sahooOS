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
  initialImage?: string;
};

export default function ImageUploader({ onUpload, initialImage = "" }: Props) {
  const [preview, setPreview] = useState(initialImage);

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
              console.log("Uploaded thumbnail:", url);
            }
          }}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="
  flex
  min-h-[280px]
  w-full
  flex-col
  items-center
  justify-center
  rounded-2xl
  border-2
  border-dashed
  border-[#A7D7A0]
  bg-[#F7FBF5]
  px-8
  py-12
  transition-all
  duration-300
  hover:border-[#7BAE73]
  hover:bg-[#EEF6EA]
"
            >
              <FiUploadCloud size={64} className="text-[#7BAE73]" />
              <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">
                Upload Thumbnail
              </h3>

              <p className="mt-3 text-base text-[#6B7280]">
                Click to upload your project thumbnail.
              </p>
            </button>
          )}
        </CldUploadWidget>
      ) : (
        <div
          className="
    overflow-hidden
    rounded-2xl
    border
    border-[#DDE8D8]
    bg-[#F7FBF5]
    shadow-sm
  "
        >
          <div className="relative aspect-video w-full">
            <Image
              src={preview}
              alt="Thumbnail"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex items-center justify-between border-t border-[#DDE8D8] bg-white p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-[#6B7280]">
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
                    console.log("Uploaded thumbnail:", url);
                  }
                }}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="
  rounded-xl
  bg-[#7BAE73]
  px-5
  py-2.5
  text-sm
  font-medium
  text-white
  transition
  hover:bg-[#689961]
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
  rounded-xl
  border
  border-red-200
  bg-red-50
  px-4
  py-2.5
  text-sm
  text-red-600
  transition
  hover:bg-red-100
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
