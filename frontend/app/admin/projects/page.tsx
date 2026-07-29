import Link from "next/link";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import type { Project } from "@/app/types/project";

export default function ProjectsPage() {
  // Later this will come from your API
const projects: Project[] = [];
  return (
    <div className="space-y-8 font-serif">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#1F2937]">
            Projects
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Manage all portfolio projects.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="
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
          Add Project
        </Link>
      </div>

      {/* Search */}

      <div className="rounded-2xl border border-[#DDE8D8] bg-white p-5 shadow-sm">
        <div className="relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search project..."
            className="
              w-full
              rounded-xl
              border
              border-[#DDE8D8]
              bg-[#FAFCF8]
              py-3
              pl-11
              pr-4
              text-[#1F2937]
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-[#7BAE73]
              focus:ring-4
              focus:ring-[#7BAE73]/20
            "
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border border-[#DDE8D8] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#F6FAF4]">
              <tr className="text-left text-sm text-[#6B7280]">
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Featured</th>
                <th className="px-6 py-4 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-20 text-center"
                  >
                    <h3 className="text-xl font-semibold text-[#1F2937]">
                      No Projects Yet
                    </h3>

                    <p className="mt-2 text-[#6B7280]">
                      Start by adding your first project.
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
                      Create Project
                    </Link>
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className="border-t border-[#E6EFE2]"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <p className="font-semibold">
                          {project.title}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {project.slug}
                        </p>
                      </div>
                    </td>

                    <td className="px-6">
                      {project.category}
                    </td>

                    <td className="px-6">
                      <span
                        className="
                          rounded-full
                          bg-green-100
                          px-3
                          py-1
                          text-sm
                          text-green-700
                        "
                      >
                        {project.status}
                      </span>
                    </td>

                    <td className="px-6">
                      {project.featured ? "⭐" : "-"}
                    </td>

                    <td className="px-6">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg border border-[#DDE8D8] p-2 hover:bg-[#EEF6EA]">
                          <FiGithub />
                        </button>

                        <button className="rounded-lg border border-[#DDE8D8] p-2 hover:bg-[#EEF6EA]">
                          <FiExternalLink />
                        </button>

                        <button className="rounded-lg border border-[#DDE8D8] p-2 hover:bg-[#EEF6EA]">
                          <FiEdit2 />
                        </button>

                        <button className="rounded-lg border border-red-200 p-2 text-red-500 hover:bg-red-500 hover:text-white">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}