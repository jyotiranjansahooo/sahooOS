const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}