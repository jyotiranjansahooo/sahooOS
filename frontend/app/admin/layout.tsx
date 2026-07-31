import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { isAdmin } from "@/app/lib/admin";
import AdminSidebar from "../components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) redirect("/");

  return (
    <div className="min-h-screen font-serif bg-[#F4F8F2] lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <AdminSidebar
        logout={
          <SignOutButton>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600">
              Logout
            </button>
          </SignOutButton>
        }
      />

      <main className="min-w-0">
        <div className="p-5 sm:p-8 xl:p-10">{children}</div>
      </main>
    </div>
  );
}