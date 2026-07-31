"use client";

import { LuFolder } from "react-icons/lu";

type Props = {
  name: string;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
};

export default function ExplorerItem({
  name,
  selected,
  onSelect,
  onOpen,
}: Props) {
  return (
    <div
      onClick={onSelect}
      onDoubleClick={onOpen}
      className={`
        flex
        cursor-default
        items-center
        gap-3
        rounded-lg
        px-3
        py-2
        transition-all
        duration-200

        ${
          selected
            ? "bg-violet-600 text-white"
            : "hover:bg-slate-800"
        }
      `}
    >
      <LuFolder
        size={20}
        className={selected ? "text-white" : "text-yellow-400"}
      />

      <span className="truncate">{name}</span>
    </div>
  );
}