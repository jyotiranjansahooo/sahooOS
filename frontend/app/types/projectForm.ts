export interface ProjectFormValues {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;

  thumbnail: string;
  images: string[];

  githubUrl: string;
  liveUrl: string;

  technologies: string[];
  features: string[];

  featured: boolean;

  category: string;

  status: "Draft" | "Published";

  order: number;

  metaTitle: string;
  metaDescription: string;
}