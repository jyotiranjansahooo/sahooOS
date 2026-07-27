"use client";

import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  selected?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
};

export default function DesktopIcon({
  title,
  icon: Icon,
  selected = false,
  onClick,
  onDoubleClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`
        flex
        flex-col
        items-center
        gap-2
        w-24
        p-2
        rounded-lg
        transition

        ${
          selected
            ? "bg-blue-500/30"
            : "hover:bg-white/10"
        }
      `}
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-xl

          bg-white/10

          backdrop-blur-md
        "
      >
        <Icon
          size={34}
          className="text-white"
        />
      </div>

      <p
        className="
          text-sm
          text-white
          text-center
          drop-shadow-lg
        "
      >
        {title}
      </p>
    </button>
  );
}