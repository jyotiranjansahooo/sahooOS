"use client";

import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

type Props = {
  id: string;
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export default function TaskbarItem({
  id,
  active,
  icon,
  label,
  onClick,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={onClick}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`
        relative
        flex
        items-center
        gap-2
        rounded-lg
        px-3
        py-2
        transition

        ${
          active
            ? "bg-violet-600"
            : "hover:bg-white/10"
        }

        ${
          isDragging
            ? "scale-110 opacity-70"
            : ""
        }
      `}
    >
      {icon}

      <span className="text-sm text-white capitalize">
        {label}
      </span>

      {active && (
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-1
            w-10
            -translate-x-1/2
            rounded-full
            bg-violet-400
            shadow-[0_0_12px_#8B5CF6]
          "
        />
      )}
    </button>
  );
}