import { notFound } from "next/navigation";
import ProjectForm from "@/app/components/admin/projects/ProjectForm";
import type { Project } from "@/app/types/project";

async function getProject(id: string): Promise<Project | null> {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
  {
    cache: "no-store",
  }
);

  if (!res.ok) return null;

  const data = await res.json();

  return data.project;
}

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <ProjectForm
      initialData={project}
      isEdit={true}
    />
  );
}