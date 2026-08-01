"use client";

import Image from "next/image";
import type { Project } from "@/app/types/project";

type Props = {
  project: Project | null;
  mode: "preview" | "details";
  onBack?: () => void;
};

const sectionTitle =
  "relative mb-5 mt-10 inline-block text-xl font-bold tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-14 after:rounded-full after:bg-violet-500 after:shadow-[0_0_12px_#8b5cf6]";

export default function ProjectPreview({ project, mode, onBack }: Props) {
  if (!project) {
    return (
      <div className="flex h-full items-center justify-center text-slate-500">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Select a project</h2>

          <p className="mt-2 text-slate-400">
            Single-click a project to preview it.
          </p>

          <p className="text-slate-400">Double-click to open it.</p>
        </div>
      </div>
    );
  }

  /* ==========================
      PREVIEW MODE
  ========================== */
console.log("ProjectPreview mode:", mode);
  if (mode === "preview") {
    return (
      <div className="space-y-8 p-6 lg:p-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>

          <p className="mt-4 leading-7 text-slate-300">
            {project.shortDescription}
          </p>
        </div>

        <hr className="border-slate-700/60" />

        <div>
          <h2 className={sectionTitle}>Category</h2>

          <p className="mt-4 text-slate-300">{project.category}</p>
        </div>

        <hr className="border-slate-700/60" />

        <div>
          <h2 className={sectionTitle}>Technologies</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-center text-violet-300">
          Double-click this project to view complete details.
        </div>
      </div>
    );
  }

  /* ==========================
      DETAILS MODE
  ========================== */

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <button
        onClick={onBack}
        className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
      >
        ← Back
      </button>

      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
      </div>

      <hr className="border-slate-700/60" />

      <div>
        <h2 className={sectionTitle}>Technologies</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-slate-700/60" />

      <div>
        <h2 className={sectionTitle}>Features</h2>

        <ul className="mt-5 space-y-4">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-slate-700 bg-slate-800/40 p-4"
            >
              • {feature}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-slate-700/60" />

      <div>
        <h2 className={sectionTitle}>Gallery</h2>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {project.images.map((image) => (
            <div
              key={image}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <Image src={image} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-700/60" />

      <div className="mt-12 flex flex-col gap-4 border-t border-slate-700 pt-8 sm:flex-row">
       <a
  href={project.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 rounded-xl bg-violet-600 px-6 py-4 text-center font-semibold transition hover:scale-[1.02] hover:bg-violet-700"
>
  GitHub Repository
</a>

<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 rounded-xl bg-green-600 px-6 py-4 text-center font-semibold transition hover:scale-[1.02] hover:bg-green-700"
>
  Live Demo
</a>
      </div>
      <div className="h-8"></div>
    </div>
  );
}
