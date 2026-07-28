import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold">SAHOO OS CMS</h1>
            <p className="mt-1 text-zinc-400">
              Portfolio Administration Panel
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
          >
            Back to Portfolio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl p-8">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card title="Projects" value="0" />
          <Card title="Featured" value="0" />
          <Card title="Drafts" value="0" />
          <Card title="Messages" value="0" />
        </div>

        {/* Projects */}
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-800 p-6">
            <h2 className="text-2xl font-bold">
              Projects
            </h2>

            <Link
              href="/admin/projects/new"
              className="rounded-lg bg-violet-600 px-5 py-3 transition hover:bg-violet-500"
            >
              + Add Project
            </Link>
          </div>

          <div className="p-6 text-zinc-400">
            No projects yet.
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-zinc-400">{title}</p>

      <h3 className="mt-3 text-4xl font-bold">
        {value}
      </h3>
    </div>
  );
}