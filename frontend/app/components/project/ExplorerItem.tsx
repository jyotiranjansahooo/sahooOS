"use client";

type Props = {
  name: string;
  onOpen: () => void;
};

export default function ExplorerItem({
  name,
  onOpen,
}: Props) {
  return (
    <button
      onDoubleClick={onOpen}
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        p-3

        transition

        hover:bg-white/10
      "
    >
      <span className="text-2xl">
        📁
      </span>

      <span className="text-white">
        {name}
      </span>
    </button>
  );
}