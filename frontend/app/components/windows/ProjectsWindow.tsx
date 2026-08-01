"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

import Window from "../ui/Window";
import ExplorerItem from "../project/ExplorerItem";
import ProjectPreview from "../projectDetails/ProjectPreview";

import useProjects from "@/app/hooks/useProjects";

import type { Project } from "@/app/types/project";

type Props = {
  onClose: () => void;
};

export default function ProjectsWindow({ onClose }: Props) {
  const { projects, loading } = useProjects();

  const [search, setSearch] = useState("");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [viewMode, setViewMode] =
    useState<"preview" | "details">("preview");

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects;

    const q = search.toLowerCase();

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(q)
        )
    );
  }, [projects, search]);

  const featured = filteredProjects.filter(
    (project) => project.featured
  );

  const others = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <Window
      name="projects"
      title="📁 Projects"
      onClose={onClose}
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl lg:flex-row">
        {/* LEFT SIDEBAR */}

        <aside
          className="
            flex
            h-64
            w-full
            flex-col
            border-b
            border-slate-700
            bg-[#111827]
            lg:h-full
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
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search project..."
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-700
                  bg-slate-900
                  py-2
                  pl-10
                  pr-3
                  outline-none
                "
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {loading && (
              <p className="text-slate-400">
                Loading...
              </p>
            )}

            {!loading &&
              featured.length > 0 && (
                <>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Featured
                  </h3>

                  <div className="space-y-2">
                    {featured.map((project) => (
                      <ExplorerItem
                        key={project._id}
                        name={project.title}
                        selected={
                          selectedProject?._id ===
                          project._id
                        }
                        onSelect={() => {
                          setSelectedProject(
                            project
                          );
                          setViewMode(
                            "preview"
                          );
                        }}
                        onOpen={() => {
                          setSelectedProject(
                            project
                          );
                          setViewMode(
                            "details"
                          );
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

            <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              All Projects
            </h3>

            {others.length === 0 ? (
              <p className="text-sm text-slate-500">
                No projects found.
              </p>
            ) : (
              <div className="space-y-2">
                {others.map((project) => (
                  <ExplorerItem
                    key={project._id}
                    name={project.title}
                    selected={
                      selectedProject?._id ===
                      project._id
                    }
                    onSelect={() => {
                      setSelectedProject(
                        project
                      );
                      setViewMode(
                        "preview"
                      );
                    }}
                    onOpen={() => {
                      setSelectedProject(
                        project
                      );
                      setViewMode(
                        "details"
                      );
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT PANEL */}

        <section
          className="
            flex-1
            min-h-0
            overflow-y-auto
            bg-[#0F172A]
            px-8
            py-8
            pb-24
          "
        >
          <ProjectPreview
            project={selectedProject}
            mode={viewMode}
            onBack={() =>
              setViewMode("preview")
            }
          />
        </section>
      </div>
    </Window>
  );
}