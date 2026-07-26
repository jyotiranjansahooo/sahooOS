"use client";

import DesktopIcon from "./DesktopIcon";
import type { DesktopItem } from "./desktopData";
import { desktopItems } from "./desktopData";

type Props = {
  onOpen: (id: DesktopItem["id"]) => void;
};

export default function DesktopGrid({
  onOpen,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 sm:grid-cols-3 lg:grid-cols-6">
      {desktopItems.map((item) => (
        <DesktopIcon
          key={item.id}
          {...item}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}