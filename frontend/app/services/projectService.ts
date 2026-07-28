import axios from "axios";

import type {
  Project,
  CreateProjectDto,
} from "@/app/types/project";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const getProjects = async () => {
  const { data } = await API.get<{
    success: boolean;
    projects: Project[];
  }>("/projects");

  return data.projects;
};

export const getProject = async (id: string) => {
  const { data } = await API.get<{
    success: boolean;
    project: Project;
  }>(`/projects/${id}`);

  return data.project;
};

export const createProject = async (
  project: CreateProjectDto
) => {
  const { data } = await API.post("/projects", project);

  return data;
};

export const updateProject = async (
  id: string,
  project: Partial<CreateProjectDto>
) => {
  const { data } = await API.put(
    `/projects/${id}`,
    project
  );

  return data;
};

export const deleteProject = async (
  id: string
) => {
  const { data } = await API.delete(
    `/projects/${id}`
  );

  return data;
};