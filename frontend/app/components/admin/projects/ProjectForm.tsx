"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import TechnologiesInput from "./TechnologiesInput";
import FeaturesInput from "./FeaturesInput";
import type { ProjectFormValues } from "@/app/types/projectForm";

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      description: "",

      thumbnail: "",
      images: [],

      githubUrl: "",
      liveUrl: "",

      technologies: [],
      features: [],

      featured: false,

      category: "Full Stack",

      status: "Draft",

      order: 0,

      metaTitle: "",
      metaDescription: "",
    },
  });

  const [thumbnail, setThumbnail] = useState("");

  const [gallery, setGallery] = useState<string[]>([]);

  const technologies = watch("technologies");
  const features = watch("features");

  async function onSubmit(data: ProjectFormValues) {
    data.thumbnail = thumbnail;

    data.images = gallery;

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* BASIC */}

      <section className="rounded-xl border border-white/10 p-6">
        <h2 className="mb-6 text-2xl font-bold">Project Information</h2>

        <div className="grid gap-6">
          <div>
            <label>Title</label>

            <input
              {...register("title")}
              className="mt-2 w-full rounded-lg bg-black/20 p-3"
            />
          </div>

          <div>
            <label>Slug</label>

            <input
              {...register("slug")}
              className="mt-2 w-full rounded-lg bg-black/20 p-3"
            />
          </div>

          <div>
            <label>Short Description</label>

            <textarea
              rows={3}
              {...register("shortDescription")}
              className="mt-2 w-full rounded-lg bg-black/20 p-3"
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              rows={8}
              {...register("description")}
              className="mt-2 w-full rounded-lg bg-black/20 p-3"
            />
          </div>
        </div>
      </section>

      {/* THUMBNAIL */}

      <section className="rounded-xl border border-white/10 p-6">
        <h2 className="mb-5 text-2xl font-bold">Thumbnail</h2>

        <ImageUploader
          onUpload={(url) => {
            setThumbnail(url);
          }}
        />
      </section>

      <section className="rounded-xl border border-white/10 p-6 space-y-8">
        <TechnologiesInput
          value={technologies}
          onChange={(value) => setValue("technologies", value)}
        />

        <FeaturesInput
          value={features}
          onChange={(value) => setValue("features", value)}
        />
      </section>

      <button
        className="
        rounded-lg
        bg-violet-600
        px-8
        py-4
        font-semibold">
        Save Project
      </button>
    </form>
  );
}
