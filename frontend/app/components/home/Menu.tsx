"use client";

import PixelButton from "./PixelButton";
import { menuItems } from "./menuData";
import useKeyboardMenu from "@/app/hooks/useKeyboardMenu";

export default function Menu() {
  const { selected, setSelected } = useKeyboardMenu({
    onSelect: (id) => {
      console.log(id);
    },
  });

  return (
    <nav className="flex flex-col gap-5">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={() => setSelected(index)}
          onClick={() => console.log(item.id)}
        >
          <PixelButton
            text={item.label}
            active={selected === index}
          />
        </div>
      ))}
    </nav>
  );
}