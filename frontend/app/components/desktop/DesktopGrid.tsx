"use client";

import DesktopIcon from "./DesktopIcon";
import { desktopIcons } from "./desktopData";
import useDesktop from "@/app/hooks/useDesktop";
import {
  useWindows,
  WindowName,
} from "@/app/context/WindowContext";

export default function DesktopGrid() {
  const {
    selected,
    setSelected,
  } = useDesktop();

  const {
    openWindow,
  } = useWindows();

  return (
    <section
      className="
      absolute
      left-6
      top-8
      z-20

      flex
      flex-col
      gap-6
    "
    >
      {desktopIcons.map((item) => (
        <DesktopIcon
          key={item.id}
          title={item.title}
          icon={item.icon}
          selected={
            selected === item.id
          }
          onClick={() =>
            setSelected(item.id)
          }
          onDoubleClick={() =>
            openWindow(
              item.id as WindowName
            )
          }
        />
      ))}
    </section>
  );
}