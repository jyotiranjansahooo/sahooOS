"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import TechnologiesInput from "./TechnologiesInput";
import FeaturesInput from "./FeaturesInput";
import type { ProjectFormValues } from "@/app/types/projectForm";
import { createProject, updateProject } from "@/app/services/projectService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import GalleryUploader from "../GalleryUploader";
import type { Project } from "@/app/types/project";

const cardClass = "rounded-2xl border border-[#FAFCF8] bg-white p-12 shadow-sm";

const inputClass = `
mt-6
w-full
rounded-xl
border
border-[#DDE8D8]
bg-[#FAFCF8]
px-6
py-6
text-md
text-[#1F2937]
placeholder:text-[#9CA3AF]
outline-none
transition
focus:border-[#7BAE73]
focus:ring-4
focus:ring-[#7BAE73]/20
`;

const labelClass = "mb-6 block text-lg font-semibold text-[#1F2937]";
type Props = {
  initialData?: Project;
  isEdit?: boolean;
};

export default function ProjectForm({ initialData, isEdit = false }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    defaultValues: initialData ?? {
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

  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail ?? "");
  const [gallery, setGallery] = useState<string[]>(initialData?.images ?? []);

  const technologies = watch("technologies");
  const features = watch("features");

  async function onSubmit(data: ProjectFormValues) {
    try {
      data.thumbnail = thumbnail || initialData?.thumbnail || "";

      data.images = gallery.length > 0 ? gallery : initialData?.images || [];

     
      data.thumbnail = thumbnail;
      data.images = gallery;

      let response;

      if (isEdit && initialData?._id) {
        response = await updateProject(initialData._id, data);
      } else {
        response = await createProject(data);
      }
      toast.success(
        isEdit
          ? "Project updated successfully"
          : "Project created successfully",
      );

      router.push("/admin/projects");
      router.refresh();
    } catch (error: unknown) {
      console.error(error);

      if (axios.isAxiosError(error)) {

        toast.error(
          error.response?.data?.message || "Failed to create project.",
        );
      } else {
        toast.error("Something went wrong.");
      }
    }
  }

  return (
    <div className="font-sans text-gray-900">
      <div
        className="mx-auto
  max-w-325
  space-y-10
  px-4
  sm:px-6
  lg:px-10
  xl:px-14
"
      >
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1F2937]">
            {isEdit ? "Edit Project" : "Add Project"}
          </h1>

          <p className="mt-2 text-[#6B7280]">
            {isEdit
              ? "Update your existing project."
              : "Create and publish a new project for your portfolio."}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-14 pb-40">
          {/* BASIC INFORMATION */}
          <section className={cardClass}>
            <h2 className="mb-8 pb-8 text-4xl font-bold text-center text-[#0c1624]">
              Project Information
            </h2>
            <label className={labelClass}>Title</label>
            <div className="grid gap-6 lg:grid-cols-2">
              <input
                {...register("title", {
                  required: "Project title is required",
                })}
                placeholder="Green basket"
                className={inputClass}
              />

              {errors.title && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
              <div>
                <label className={labelClass}>Slug</label>
                <input
                  {...register("slug")}
                  placeholder="green-basket"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className={labelClass}>Short Description</label>

              <textarea
                rows={4}
                {...register("shortDescription", {
                  required: "description required",
                })}
                placeholder="A short summary of your project..."
                className={inputClass}
              />
              {errors.title && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label className={labelClass}>Full Description</label>

              <textarea
                rows={10}
                {...register("description")}
                placeholder="Describe your project, features, technologies, challenges and implementation..."
                className={`${inputClass} resize-none`}
              />
            </div>
          </section>

          {/* THUMBNAIL & GALLERY */}
          {/* IMAGES */}

          <section className={cardClass}>
            <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
              Images
            </h2>

            <div className="grid gap-10 xl:grid-cols-2">
              {/* Thumbnail */}

              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#374151]">
                  Thumbnail
                </h3>

                <p className="mb-5 text-sm text-gray-500">
                  Upload the main image that represents your project.
                </p>

                <ImageUploader
  initialImage={thumbnail}
  onUpload={(url) => {
    setThumbnail(url);
  }}
/>
              </div>

              {/* Gallery */}

              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#374151]">
                  Gallery Images
                </h3>

                <p className="mb-5 text-sm text-gray-500">
                  Upload screenshots of your project.
                </p>

                <GalleryUploader
                  images={gallery}
                  onChange={setGallery}
                  className="rounded-3xl bg-white p-6"
                />
              </div>
            </div>
          </section>

          {/* TECH & FEATURES */}

          <section className={cardClass}>
            <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
              Technologies & Features
            </h2>

            <div className="grid bg-amber-50 gap-10 xl:grid-cols-2">
              <div>
                <TechnologiesInput
                  value={technologies}
                  onChange={(value) => setValue("technologies", value)}
                />
              </div>

              <div>
                <FeaturesInput
                  value={features}
                  onChange={(value) => setValue("features", value)}
                />
              </div>
            </div>
          </section>

          {/* LINKS */}

          <section className={`${cardClass} mt-4`}>
            <h2 className="mb-8 mt-6 text-2xl font-bold text-[#1F2937]">
              Project Links
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <label className={labelClass}>GitHub Repository</label>

                <input
                  {...register("githubUrl", {
                    required: "link required",
                  })}
                  placeholder="https://github.com/username/project"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Live Website</label>

                <input
                  {...register("liveUrl")}
                  placeholder="https://greenbasket.com"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* SETTINGS */}
          {/* PROJECT SETTINGS */}

          <section className={cardClass}>
            <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
              Project Settings
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <label className={labelClass}>Category</label>

                <input
                  {...register("category")}
                  placeholder="Full Stack"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Status</label>

                <select {...register("status")} className={inputClass}>
                  <option value="Draft">Draft</option>

                  <option value="Published">Published</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Display Order</label>

                <input
                  type="number"
                  {...register("order", {
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  className={inputClass}
                />
              </div>

              <div className="flex items-center gap-4 pt-10">
                <input
                  type="checkbox"
                  {...register("featured")}
                  className="
        h-5
        w-5
        rounded
        border-[#7BAE73]
        text-[#7BAE73]
      "
                />

                <span className="font-medium text-[#374151]">
                  Show as Featured Project
                </span>
              </div>
            </div>
          </section>

          {/* SEO */}
          <section className={`${cardClass} mt-4`}>
            <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
              SEO Metadata
            </h2>

            <div className="space-y-6">
              <div>
                <label className={labelClass}>Meta Title</label>

                <input
                  {...register("metaTitle")}
                  placeholder="Green Basket | Full Stack Marketplace"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Meta Description</label>

                <textarea
                  rows={4}
                  {...register("metaDescription")}
                  placeholder="SEO description for search engines..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          </section>
          <div
            className="
    sticky
    bottom-0
    z-30
    -mx-10
    mt-16
    border-t
    border-[#93bb80]
    bg-white/95
    px-10
    py-5
    backdrop-blur
    
  "
          >
            <div className="flex h-8 w-36 px-10 py-5 justify-center">
              <button
                type="submit"
                className="
        rounded-xl
        bg-[#4ba83d]
        px-10
        py-4
        text-base
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-200
        hover:bg-[#3c8f31]
        hover:shadow-lg
      "
              >
                {isEdit ? "Update Project" : "Save Project"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="h-[20vh]" />
    </div>
  );
}
