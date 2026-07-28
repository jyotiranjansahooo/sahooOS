"use client";
import Image from "next/image";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const [preview, setPreview] = useState("");

  return (
    <div className="space-y-4">
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
              px-5
              py-3
              text-white
            "
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>

      {preview && (
        <div className="relative h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={preview}
            alt="Project preview"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
