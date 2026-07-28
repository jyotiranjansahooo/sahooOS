import ProjectForm from "@/app/components/admin/projects/ProjectForm";

export default function NewProjectPage() {
  return (
    <main className="mx-auto max-w-5xl p-8">

      <h1 className="mb-10 text-4xl font-bold">

        Add Project

      </h1>

      <ProjectForm />

    </main>
  );
}