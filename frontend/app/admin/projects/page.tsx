import Link from "next/link";

export default function AdminProjects() {
  return (
    <main className="mx-auto max-w-7xl p-8">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">

          Projects

        </h1>

        <Link
          href="/admin/projects/new"
          className="
          rounded-lg

          bg-violet-600

          px-5

          py-3

          text-white
        "
        >
          + New Project
        </Link>

      </div>

    </main>
  );
}