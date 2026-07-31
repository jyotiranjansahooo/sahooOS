"use client";

import Image from "next/image";
import type { Project } from "@/app/types/project";

type Props = {
  project: Project | null;
};
const sectionTitle =
  "relative mb-5 mt-10 inline-block text-xl font-bold tracking-wide text-white after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-14 after:rounded-full after:bg-violet-500 after:shadow-[0_0_12px_#8b5cf6]";

export default function ProjectPreview({ project }: Props) {
  if (!project) {
    return (
      <div className="flex h-full items-center justify-center text-slate-500">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Select a project</h2>

          <p className="mt-2 text-slate-400">
            Single-click a project to preview it.
          </p>

          <p className="leading-7 text-slate-300">Double-click to open it.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold sm:text-3xl">{project.title}</h1>

      <p className="leading-7 text-slate-300">{project.shortDescription}</p>
<hr className="mt-10 border-slate-700/60" />
      <div className="mt-6">
  <h3 className={sectionTitle}>
    Category
  </h3>

  <p className="mt-4 text-lg text-slate-300">
    {project.category}
  </p>
</div>
<hr className="mt-10 border-slate-700/60" />
      <div>
        <h3 className={sectionTitle}>Technologies</h3>

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
      <hr className="mt-10 border-slate-700/60" />
      <div className="mt-8">
        <h2 className={sectionTitle}>Features</h2>

        <ul className="mt-5 space-y-4">
          {project.features.map((feature) => (
            <li
  key={feature}
  className="rounded-lg border border-slate-700 bg-slate-800/40 px-4 py-3"
>• {feature}</li>
          ))}
        </ul>
      </div>
      <hr className="mt-10 border-slate-700/60" />
      <div className="mt-8">
        <h2 className={sectionTitle}>Gallery</h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {project.images.map((image) => (
            <img
              key={image}
              src={image}
              className="rounded-lg object-cover aspect-video"
            />
          ))}
        </div>
      </div>
      <hr className="mt-10 border-slate-700/60" />
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          href={project.githubUrl}
          target="_blank"
          className="flex-1 rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold transition hover:bg-violet-700"
        >
          GitHub
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          className="rounded-lg bg-green-600 px-5 py-3"
        >
          Live Demo
        </a>
        <hr className="mt-10 border-slate-700/60" />
      </div>
    </div>
  );
}
