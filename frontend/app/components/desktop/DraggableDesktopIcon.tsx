"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";

import DesktopIcon from "./DesktopIcon";

type Props = {
  id: string;
  title: string;
  icon: IconType;
  selected: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
};

const DEFAULT_POSITIONS: Record<
  string,
  { x: number; y: number }
> = {
  profile: { x: 30, y: 30 },
  projects: { x: 30, y: 150 },
  terminal: { x: 30, y: 270 },
  contact: { x: 30, y: 390 },
  resume: { x: 30, y: 510 },
};

export default function DraggableDesktopIcon({
  id,
  title,
  icon,
  selected,
  onClick,
  onDoubleClick,
}: Props) {
  const iconRef = useRef<HTMLDivElement>(null);

  const dragging = useRef(false);

  const start = useRef({
    mouseX: 0,
    mouseY: 0,
    left: 0,
    top: 0,
  });

  useEffect(() => {
    if (!iconRef.current) return;

   const position =
  DEFAULT_POSITIONS[id] ?? {
    x: 30,
    y: 30,
  };

    iconRef.current.style.left = `${position.x}px`;
    iconRef.current.style.top = `${position.y}px`;
  }, [id]);

  function handleMouseDown(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (e.button !== 0 || !iconRef.current) return;

    dragging.current = false;

    const rect = iconRef.current.getBoundingClientRect();

    start.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      left: rect.left,
      top: rect.top,
    };

    function handleMove(ev: MouseEvent) {
      if (!iconRef.current) return;

      const dx = ev.clientX - start.current.mouseX;
      const dy = ev.clientY - start.current.mouseY;

      if (
        !dragging.current &&
        Math.hypot(dx, dy) > 5
      ) {
        dragging.current = true;
      }

      if (!dragging.current) return;

      const x = Math.max(
        0,
        start.current.left + dx
      );

      const y = Math.max(
        0,
        start.current.top + dy
      );

      iconRef.current.style.left = `${x}px`;
      iconRef.current.style.top = `${y}px`;
    }

    function handleUp() {
      if (
        dragging.current &&
        iconRef.current
      ) {
        localStorage.setItem(
          `desktop-${id}`,
          JSON.stringify({
            x: parseFloat(
              iconRef.current.style.left
            ),
            y: parseFloat(
              iconRef.current.style.top
            ),
          })
        );
      }

      dragging.current = false;

      window.removeEventListener(
        "mousemove",
        handleMove
      );

      window.removeEventListener(
        "mouseup",
        handleUp
      );
    }

    window.addEventListener(
      "mousemove",
      handleMove
    );

    window.addEventListener(
      "mouseup",
      handleUp
    );
  }

  return (
    <div
      ref={iconRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <DesktopIcon
        title={title}
        icon={icon}
        selected={selected}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      />
    </div>
  );
}