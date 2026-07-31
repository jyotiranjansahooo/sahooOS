"use client";

import { FiTrash2 } from "react-icons/fi";
import { deleteProject } from "@/app/services/projectService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Props = {
  id: string;
  title: string;
};

export default function DeleteButton({
  id,
  title,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Delete "${title}"?`
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      toast.success("Project deleted successfully");

      router.refresh();
    } catch {
      toast.error("Failed to delete project");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg border border-red-200 p-2 text-red-500 transition hover:bg-red-500 hover:text-white"
    >
      <FiTrash2 />
    </button>
  );
}