"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiFolder } from "react-icons/fi";
import type { Project } from "@/app/types/project";
import Window from "../ui/Window";
import ExplorerItem from "../project/ExplorerItem";
import ProjectPreview from "../projectDetails/ProjectPreview";

import useProjects from "@/app/hooks/useProjects";
import { useWindows } from "@/app/context/WindowContext";

type Props = {
  onClose: () => void;
};

export default function ProjectsWindow({ onClose }: Props) {
  const { projects, loading } = useProjects();

  const { openWindow } = useWindows();

  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects;

    return projects.filter((project) => {
      const q = search.toLowerCase();

      return (
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q))
      );
    });
  }, [projects, search]);

  const featured = filteredProjects.filter((p) => p.featured);

  return (
    <Window name="projects" title="📁 Projects" onClose={onClose}>
      <div className="flex h-full flex-col lg:flex-row overflow-hidden rounded-xl">
        {/* LEFT PANEL */}

        <aside
          className="
    h-64
    w-full
    border-b
    border-slate-700
    bg-[#111827]
    lg:h-auto
    lg:w-80
    lg:border-b-0
    lg:border-r
  "
        >
          <div className="border-b border-slate-700 p-5">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search project..."
                className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-3 outline-none"
              />
            </div>
          </div>

          <div className="h-[calc(100%-72px)] overflow-y-auto p-4">
            {loading && <p className="text-slate-400">Loading...</p>}

            {!loading && featured.length > 0 && (
              <>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Featured
                </h3>

                <div className="space-y-2">
                  {featured.map((project) => (
                    <ExplorerItem
                      key={project._id}
                      name={project.title}
                      selected={selectedProject?._id === project._id}
                      onSelect={() => setSelectedProject(project)}
                      onOpen={() => openWindow("projectDetails", project)}
                    />
                  ))}
                </div>
              </>
            )}

            <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              All Projects
            </h3>

            {filteredProjects.length === 0 ? (
              <p className="text-sm text-slate-500">No projects found.</p>
            ) : (
              <div className="space-y-2">
                {filteredProjects
                  .filter((project) => !project.featured)
                  .map((project) => (
                    <ExplorerItem
                      key={project._id}
                      name={project.title}
                      selected={selectedProject?._id === project._id}
                      onSelect={() => setSelectedProject(project)}
                      onOpen={() => openWindow("projectDetails", project)}
                    />
                  ))}
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <section className="flex-1 overflow-y-auto bg-[#0F172A]">
          <ProjectPreview project={selectedProject} />
        </section>
      </div>
    </Window>
  );
}
