"use client";

import { FiStar } from "react-icons/fi";
import type { Project } from "@/app/types/project";

type Props = {
  project: Project;
};

export default function ProjectHeader({
  project,
}: Props) {
  return (
    <div className="flex flex-col justify-center">

      <h1 className="text-5xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        {project.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold">
          {project.status}
        </span>

        <span className="rounded-full bg-slate-700 px-5 py-2 text-sm font-semibold">
          {project.category}
        </span>

        {project.featured && (
          <span className="flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black">
            <FiStar />
            Featured
          </span>
        )}

      </div>

    </div>
  );
}