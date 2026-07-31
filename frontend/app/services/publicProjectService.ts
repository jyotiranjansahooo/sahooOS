import type { Project } from "@/app/types/project";

export async function getPublicProjects(): Promise<Project[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.projects;
}