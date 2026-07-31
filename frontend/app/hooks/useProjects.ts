"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/app/types/project";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/projects`
        );

        const data = await res.json();

        setProjects(data.projects ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    projects,
    loading,
  };
}