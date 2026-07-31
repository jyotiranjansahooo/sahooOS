"use client";

import Image from "next/image";
import Link from "next/link";


import {
  FiEdit2,
  FiTrash2,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

import type { Project } from "@/app/types/project";
import DeleteButton from "./DeleteButton";

type Props = {
  project: Project;
};

export default function ProjectRow({ project }: Props) {
  return (
    <tr className="border-t border-[#E6EFE2] hover:bg-[#FAFCF8] transition">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={70}
            height={50}
            className="rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold text-[#1F2937]">
              {project.title}
            </h3>

            <p className="text-sm text-gray-500">
              {project.slug}
            </p>
          </div>
        </div>
      </td>

      <td className="px-6">{project.category}</td>

      <td className="px-6">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            project.status === "Published"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {project.status}
        </span>
      </td>

      <td className="px-6">
        {project.featured ? "⭐" : "-"}
      </td>

      <td className="px-6">
        <div className="flex justify-end gap-2">

          <Link
            href={project.githubUrl}
            target="_blank"
            className="rounded-lg border p-2 hover:bg-[#EEF6EA]"
          >
            <FiGithub />
          </Link>

          <Link
            href={project.liveUrl}
            target="_blank"
            className="rounded-lg border p-2 hover:bg-[#EEF6EA]"
          >
            <FiExternalLink />
          </Link>

          <Link
  href={`/admin/projects/edit/${project._id}`}
  className="rounded-lg border p-2 hover:bg-[#EEF6EA]"
>
  <FiEdit2 />
</Link>

          {project._id && (
  <DeleteButton
    id={project._id}
    title={project.title}
  />
)}

        </div>
      </td>
    </tr>
  );
}