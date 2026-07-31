import axios from "axios";
import type { ProjectFormValues } from "@/app/types/projectForm";
import type { Project } from "@/app/types/project";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

export async function getProjects() {
  const { data } = await API.get("/projects");
  return data;
}

export async function getProject(id: string) {
  const { data } = await API.get(`/projects/${id}`);
  return data;
}

export async function createProject(project: ProjectFormValues) {
  const { data } = await API.post("/projects", project);
  return data;
}

export async function updateProject(
  id: string,
  project: Partial<Project>
) {
  const { data } = await API.put(`/projects/${id}`, project);
  return data;
}

export async function deleteProject(id: string) {
  const { data } = await API.delete(`/projects/${id}`);
  return data;
}