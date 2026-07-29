import Link from "next/link";
import {
  FiFolder,
  FiStar,
  FiEdit,
  FiMail,
  FiArrowRight,
  FiPlus,
} from "react-icons/fi";

export default function AdminPage() {
  return (
    <div className="space-y-10 font-serif font-bold">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="py-6 my-6">
          <h1 className="text-4xl font-bold text-[#1F2937]">
            Dashboard
          </h1>

        </div>

        <Link
          href="/admin/projects/new"
          className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-[#7BAE73]
          px-8
          py-5
          font-semibold
          text-white
          transition
          hover:bg-[#689961]
        "
        >
          <FiPlus />

          Add Project
        </Link>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<FiFolder size={22} />}
          title="Projects"
          value="0"
        />

        <StatCard
          icon={<FiStar size={22} />}
          title="Featured"
          value="0"
        />

        <StatCard
          icon={<FiEdit size={22} />}
          title="Drafts"
          value="0"
        />

        <StatCard
          icon={<FiMail size={22} />}
          title="Messages"
          value="0"
        />
      </div>

      {/* Quick Actions */}

      <div className="rounded-3xl border border-[#DDE8D8] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1F2937]">
          Quick Actions
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            href="/admin/projects"
            className="
            rounded-2xl
            border
            border-[#DDE8D8]
            p-6
            transition
            hover:border-[#7BAE73]
            hover:bg-[#F7FBF5]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Manage Projects
                </h3>

                <p className="mt-2 text-sm text-[#6B7280]">
                  View, edit and delete projects.
                </p>
              </div>

              <FiArrowRight size={22} />
            </div>
          </Link>

          <Link
            href="/admin/projects/new"
            className="
            rounded-2xl
            border
            border-[#DDE8D8]
            p-6
            transition
            hover:border-[#7BAE73]
            hover:bg-[#F7FBF5]
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Add New Project
                </h3>

                <p className="mt-2 text-sm text-[#6B7280]">
                  Publish another portfolio project.
                </p>
              </div>

              <FiArrowRight size={22} />
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Projects */}

      <div className="rounded-3xl border border-[#DDE8D8] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#DDE8D8] p-6">
          <h2 className="text-2xl font-semibold">
            Recent Projects
          </h2>

          <Link
            href="/admin/projects"
            className="text-[#7BAE73] font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="flex h-56 items-center justify-center text-center">
          <div>
            <FiFolder
              className="mx-auto text-[#7BAE73]"
              size={48}
            />

            <h3 className="mt-5 text-xl font-semibold">
              No projects yet
            </h3>

            <p className="mt-2 text-[#6B7280]">
              Your published projects will appear here.
            </p>

            <Link
              href="/admin/projects/new"
              className="
              mt-6
              inline-flex
              rounded-xl
              bg-[#7BAE73]
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#689961]
            "
            >
              Create First Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-[#DDE8D8] bg-white p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-[#EEF6EA] p-3 text-[#7BAE73]">
          {icon}
        </div>

        <span className="text-4xl font-bold text-[#1F2937]">
          {value}
        </span>
      </div>

      <p className="mt-6 text-sm font-medium text-[#6B7280]">
        {title}
      </p>
    </div>
  );
}