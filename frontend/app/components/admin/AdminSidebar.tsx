"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiGrid,
  FiFolder,
  FiPlusCircle,
  FiExternalLink,
  FiMenu,
  FiX,
} from "react-icons/fi";

type Props = {
  logout: React.ReactNode;
};

export default function AdminSidebar({ logout }: Props) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: <FiGrid />,
    },
    {
      href: "/admin/projects",
      label: "Projects",
      icon: <FiFolder />,
    },
    {
      href: "/admin/projects/new",
      label: "Add Project",
      icon: <FiPlusCircle />,
    },
    {
      href: "/",
      label: "View Portfolio",
      icon: <FiExternalLink />,
    },
  ];

  const renderLinks = () =>
    links.map((link) => {
      let isActive = false;

      if (link.href === "/admin") {
        isActive = pathname === "/admin";
      } else if (link.href === "/admin/projects") {
        isActive =
          pathname.startsWith("/admin/projects") &&
          pathname !== "/admin/projects/new";
      } else if (link.href === "/admin/projects/new") {
        isActive = pathname === "/admin/projects/new";
      } else {
        isActive = pathname === link.href;
      }

      return (
        <Link
          key={link.href}
          href={link.href}
          target={link.href === "/" ? "_blank" : undefined}
          rel={link.href === "/" ? "noopener noreferrer" : undefined}
          onClick={() => setOpen(false)}
          className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
            isActive
              ? "bg-gradient-to-r from-[#7BAE73] to-[#5f9658] text-white shadow-md"
              : "text-[#374151] hover:bg-[#EEF6EA] hover:shadow-sm hover:translate-x-1"
          }`}
        >
          <span
            className={`text-lg ${
              isActive ? "text-white" : "text-[#7BAE73]"
            }`}
          >
            {link.icon}
          </span>

          <span className="flex-1 font-medium">
            {link.label}
          </span>

          {isActive && (
            <span className="h-3 w-3 rounded-full bg-white shadow-lg" />
          )}
        </Link>
      );
    });

  return (
    <>
      {/* Desktop Sidebar */}

      <aside
  className="
    hidden
    lg:flex
    lg:h-screen
    lg:sticky
    lg:top-0
    lg:flex-col
    border-r
    border-[#DDE8D8]
    bg-white shadow-lg
  "
>

        <div className="border-b border-[#DDE8D8] bg-[#F8FBF7] px-8 py-8">
          <h1 className="text-3xl font-bold text-[#1F2937]">
            SAHOO CMS
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Portfolio CMS
          </p>
        </div>

        <nav className="flex-1 space-y-2 p-5">
          {renderLinks()}
        </nav>

        <div className="mt-auto border-t border-[#DDE8D8] p-5">

          <div className="mb-5 rounded-xl bg-[#F7FBF5] p-4">

            <h3 className="font-semibold text-[#1F2937]">
              Administrator
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Portfolio CMS
            </p>

          </div>

          {logout}

        </div>

      </aside>

            {/* Mobile Header */}

      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#DDE8D8] bg-white shadow-lg px-5 lg:hidden">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">
            SAHOO CMS
          </h2>

          <p className="text-xs text-gray-500">
            Portfolio CMS
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-[#DDE8D8] p-2"
        >
          <FiMenu size={22} />
        </button>
      </header>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobile Drawer */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-[#DDE8D8] bg-white shadow-lg shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#DDE8D8] px-7 py-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">
              SAHOO CMS
            </h2>

            <p className="text-sm text-gray-500">
              Portfolio CMS
            </p>
          </div>

          <button onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-5">
          {renderLinks()}
        </nav>

        <div className="mt-auto border-t border-[#DDE8D8] p-5">
          <div className="mb-5 rounded-xl bg-[#F7FBF5] p-4">
            <h3 className="font-semibold text-[#1F2937]">
              Administrator
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Portfolio CMS
            </p>
          </div>

          {logout}
        </div>
      </aside>

      {/* Mobile Spacer */}

      <div className="h-16 lg:hidden" />
    </>
  );
}