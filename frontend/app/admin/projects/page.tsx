import ProjectsTable from "@/app/components/admin/projects/ProjectsTable";

import type { Project } from "@/app/types/project";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    "http://localhost:5000/api/projects",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <ProjectsTable projects={projects} />
  );
}