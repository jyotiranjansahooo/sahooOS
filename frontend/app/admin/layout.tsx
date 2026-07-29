import { redirect } from "next/navigation";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { isAdmin } from "@/app/lib/admin";
import {
  FiGrid,
  FiFolder,
  FiPlusCircle,
  FiExternalLink,
  FiLogOut,
} from "react-icons/fi";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  return (
    <div className="flex h-screen bg-[#F4F8F2] text-[#1F2937]">
      {/* Sidebar */}
      <aside className="flex w-72 flex-col border-r border-[#DDE8D8] bg-white">
        {/* Logo */}
        <div className="border-b border-[#DDE8D8] px-8 py-8">
          <h1 className="text-3xl font-bold tracking-tight">
            SAHOO CMS
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Portfolio Management
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-5 py-6">
          <div className="space-y-2">

            <Link
              href="/admin"
              className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              transition
              hover:bg-[#EEF6EA]
            "
            >
              <FiGrid size={18} />
              Dashboard
            </Link>

            <Link
              href="/admin/projects"
              className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              transition
              hover:bg-[#EEF6EA]
            "
            >
              <FiFolder size={18} />
              Projects
            </Link>

            <Link
              href="/admin/projects/new"
              className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-[#7BAE73]
              px-4
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#689961]
            "
            >
              <FiPlusCircle size={18} />
              Add Project
            </Link>

            <Link
              href="/"
              className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              transition
              hover:bg-[#EEF6EA]
            "
            >
              <FiExternalLink size={18} />
              View Portfolio
            </Link>

          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-[#DDE8D8] p-5">
          <SignOutButton>
            <button
              className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-500
              py-3
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
            >
              <FiLogOut />
              Logout
            </button>
          </SignOutButton>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-10">
          {children}
        </div>
      </main>
    </div>
  );
}