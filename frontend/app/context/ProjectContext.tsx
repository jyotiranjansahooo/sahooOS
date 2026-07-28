"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
};

type ContextType = {
  selectedProject: Project | null;
  setSelectedProject: (project: Project) => void;
};

const ProjectContext =
  createContext<ContextType | null>(null);

export function ProjectProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error(
      "ProjectProvider missing"
    );

  return context;
}