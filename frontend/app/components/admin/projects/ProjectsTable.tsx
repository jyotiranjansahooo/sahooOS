"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectRow from "./ProjectRow";

import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import { useMemo, useState } from "react";

import type { Project } from "@/app/types/project";

type Props = {
  projects: Project[];
};

export default function ProjectsTable({ projects }: Props) {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects;

    return projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [projects, search]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#1F2937]">Projects</h1>

          <p className="mt-2 text-[#6B7280]">Manage your portfolio projects.</p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[#7BAE73] px-6 py-3 font-semibold text-white hover:bg-[#689961]"
        >
          <FiPlus />
          Add Project
        </Link>
      </div>

      {/* Search */}

      <div className="rounded-2xl border border-[#DDE8D8] bg-white p-5 shadow-sm">
        <div className="relative">
          <FiSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-[#DDE8D8] bg-[#FAFCF8] py-3 pl-11 pr-4 outline-none focus:border-[#7BAE73]"
          />
        </div>
      </div>

      {/* Empty */}

      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-[#DDE8D8] bg-white py-20 text-center shadow-sm">
          <h3 className="text-2xl font-semibold">No Projects Found</h3>

          <p className="mt-3 text-gray-500">Create your first project.</p>

          <Link
            href="/admin/projects/new"
            className="mt-6 inline-flex rounded-xl bg-[#7BAE73] px-6 py-3 font-semibold text-white"
          >
            Create Project
          </Link>
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-[#DDE8D8] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#F7FBF5]">
                <tr>
                  <th className="px-6 py-4 text-left">Project</th>

                  <th className="px-6 py-4 text-left">Category</th>

                  <th className="px-6 py-4 text-left">Status</th>

                  <th className="px-6 py-4 text-left">Featured</th>

                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.map((project) => (
                  <ProjectRow key={project._id} project={project} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
