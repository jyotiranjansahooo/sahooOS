"use client";

import { useEffect, useState } from "react";
import { menuItems, MenuId } from "@/app/components/home/menuData";

type Props = {
  onSelect: (id: MenuId) => void;
};

export default function useKeyboardMenu({
  onSelect,
}: Props) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelected((prev) =>
            prev === menuItems.length - 1 ? 0 : prev + 1
          );
          break;

        case "ArrowUp":
          e.preventDefault();
          setSelected((prev) =>
            prev === 0 ? menuItems.length - 1 : prev - 1
          );
          break;

        case "Enter":
          e.preventDefault();
          onSelect(menuItems[selected].id);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [selected, onSelect]);

  return {
    selected,
    setSelected,
  };
}