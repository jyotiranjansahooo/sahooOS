import ProjectsTable from "@/app/components/admin/projects/ProjectsTable";

import type { Project } from "@/app/types/project";

async function getProjects(): Promise<Project[]> {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
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