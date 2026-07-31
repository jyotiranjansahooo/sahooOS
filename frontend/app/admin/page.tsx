import Link from "next/link";
import {
  FiFolder,
  FiStar,
  FiEdit,
  FiMail,
  FiArrowRight,
  FiPlus,
} from "react-icons/fi";
// import { useRouter } from "next/navigation";


export default function AdminPage() {
// const router = useRouter();
  return (
    <div className="space-y-12 lg:space-y-14">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1F2937] sm:text-4xl lg:text-5xl">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back. Manage your portfolio from here.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#7BAE73]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#689961]
            sm:w-auto
          "
        >
          <FiPlus />
          Add Project
        </Link>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

      <section className="rounded-3xl border border-[#DDE8D8] bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1F2937]">
          Quick Actions
        </h2>

        <p className="mt-2 text-gray-500">
          Frequently used administrator tools.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ActionCard
            title="Manage Projects"
            description="View, edit and delete existing portfolio projects."
            href="/admin/projects"
          />

          <ActionCard
            title="Add New Project"
            description="Create and publish a new portfolio project."
            href="/admin/projects/new"
          />
        </div>
      </section>

      {/* Recent Projects */}

      <section className="rounded-3xl border border-[#DDE8D8] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#DDE8D8] px-8 py-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Recent Projects
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your latest published projects.
            </p>
          </div>

         <Link
  href="/admin/projects"
  className="font-semibold text-[#7BAE73] hover:underline"
>
  View All
</Link>
        </div>

        <div className="flex min-h-[340px] items-center justify-center p-10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF6EA]">
              <FiFolder
                size={42}
                className="text-[#7BAE73]"
              />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">
              No Projects Yet
            </h3>

            <p className="mt-3 max-w-md text-gray-500">
              Once you publish projects they will appear here.
            </p>

            <Link
              href="/admin/projects/new"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
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
              <FiPlus />

              Create First Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-2xl
        border
        border-[#DDE8D8]
        bg-[#FAFCF8]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#7BAE73]
        hover:shadow-md
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#1F2937]">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <FiArrowRight
          size={24}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
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
    <div
      className="
        rounded-3xl
        border
        border-[#DDE8D8]
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#EEF6EA] p-4 text-[#7BAE73]">
          {icon}
        </div>

        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">
          {value}
        </span>
      </div>

      <p className="mt-6 text-base font-medium text-gray-500">
        {title}
      </p>
    </div>
  );
}