"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import TechnologiesInput from "./TechnologiesInput";
import FeaturesInput from "./FeaturesInput";
import type { ProjectFormValues } from "@/app/types/projectForm";
import { createProject } from "@/app/services/projectService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import GalleryUploader from "../GalleryUploader";

const cardClass = "rounded-2xl border border-[#DDE8D8] bg-white p-8 shadow-sm";

const inputClass = `
mt-2
w-full
rounded-xl
border
border-[#DDE8D8]
bg-[#FAFCF8]
px-4
py-3.5
text-sm
text-[#1F2937]
placeholder:text-[#9CA3AF]
outline-none
transition
focus:border-[#7BAE73]
focus:ring-4
focus:ring-[#7BAE73]/20
`;

const labelClass = "mb-2 block text-sm font-semibold text-[#374151]";

export default function ProjectForm() {
  const router = useRouter();
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
    try {
      data.thumbnail = thumbnail;
      data.images = gallery;

      await createProject(data);
      toast.success("Project created successfully!");
      router.push("/admin/projects");
    } catch (error) {
      toast.error("Failed to create project. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#7BAE73] font-sans text-gray-900">
      <div className="mx-auto  max-w-5xl px-8 py-10 sm:px-8 sm:py-12">
        <div className="mb-10">
  <h1 className="text-4xl font-bold text-[#1F2937]">
    Add Project
  </h1>

  <p className="mt-2 text-[#6B7280]">
    Create and publish a new project for your portfolio.
  </p>
</div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10 sm:space-y-12"
        >
          {/* BASIC INFORMATION */}
         <section className={cardClass}>
  <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
    Project Information
  </h2>

  <div className="grid gap-6 lg:grid-cols-2">
    <div>
      <label className={labelClass}>
        Project Title
      </label>

      <input
        {...register("title")}
        placeholder="Green Basket"
        className={inputClass}
      />
    </div>

    <div>
      <label className={labelClass}>
        Slug
      </label>

      <input
        {...register("slug")}
        placeholder="green-basket"
        className={inputClass}
      />
    </div>
  </div>

  <div className="mt-6">
    <label className={labelClass}>
      Short Description
    </label>

    <textarea
      rows={3}
      {...register("shortDescription")}
      placeholder="A short summary of your project..."
      className={inputClass}
    />
  </div>

  <div className="mt-6">
    <label className={labelClass}>
      Full Description
    </label>

    <textarea
      rows={6}
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

  <div className="grid gap-8 lg:grid-cols-2">
    {/* Thumbnail */}

    <div>
      <h3 className="mb-4 text-lg font-semibold text-[#374151]">
        Thumbnail
      </h3>

      <p className="mb-5 text-sm text-gray-500">
        Upload the main image that represents your project.
      </p>

      <ImageUploader
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
      />
    </div>
  </div>
</section>

          {/* TECH & FEATURES */}
          <div className="grid gap-8 lg:grid-cols-2">
           <section className={cardClass}>
  <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
    Technologies & Features
  </h2>

  <div className="grid gap-8 lg:grid-cols-2">
    <div>
      <TechnologiesInput
        value={technologies}
        onChange={(value) =>
          setValue("technologies", value)
        }
      />
    </div>

    <div>
      <FeaturesInput
        value={features}
        onChange={(value) =>
          setValue("features", value)
        }
      />
    </div>
  </div>
</section>
          </div>

          {/* LINKS */}

<section className={cardClass}>
  <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
    Project Links
  </h2>

  <div className="grid gap-6 lg:grid-cols-2">
    <div>
      <label className={labelClass}>
        GitHub Repository
      </label>

      <input
        {...register("githubUrl")}
        placeholder="https://github.com/username/project"
        className={inputClass}
      />
    </div>

    <div>
      <label className={labelClass}>
        Live Website
      </label>

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
      <label className={labelClass}>
        Category
      </label>

      <input
        {...register("category")}
        placeholder="Full Stack"
        className={inputClass}
      />
    </div>

    <div>
      <label className={labelClass}>
        Status
      </label>

      <select
        {...register("status")}
        className={inputClass}
      >
        <option value="Draft">
          Draft
        </option>

        <option value="Published">
          Published
        </option>
      </select>
    </div>

    <div>
      <label className={labelClass}>
        Display Order
      </label>

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

<section className={cardClass}>
  <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
    SEO Metadata
  </h2>

  <div className="space-y-6">

    <div>
      <label className={labelClass}>
        Meta Title
      </label>

      <input
        {...register("metaTitle")}
        placeholder="Green Basket | Full Stack Marketplace"
        className={inputClass}
      />
    </div>

    <div>
      <label className={labelClass}>
        Meta Description
      </label>

      <textarea
        rows={4}
        {...register("metaDescription")}
        placeholder="SEO description for search engines..."
        className={`${inputClass} resize-none`}
      />
    </div>

  </div>
</section>

          {/* SEO */}

<section className={cardClass}>
  <h2 className="mb-8 text-2xl font-semibold text-[#1F2937]">
    SEO Metadata
  </h2>

  <div className="space-y-6">

    <div>
      <label className={labelClass}>
        Meta Title
      </label>

      <input
        {...register("metaTitle")}
        placeholder="Green Basket | Full Stack Marketplace"
        className={inputClass}
      />
    </div>

    <div>
      <label className={labelClass}>
        Meta Description
      </label>

      <textarea
        rows={4}
        {...register("metaDescription")}
        placeholder="SEO description for search engines..."
        className={`${inputClass} resize-none`}
      />
    </div>

  </div>
</section>
        </form>
      </div>
    </div>
  );
}
