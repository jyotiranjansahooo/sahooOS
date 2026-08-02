"use client";

import { ReactNode, useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { LuMinus, LuSquare, LuX } from "react-icons/lu";

import { WindowName, useWindows } from "@/app/context/WindowContext";

type Props = {
  name: WindowName;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Window({ name, title, children, onClose }: Props) {
  const { active, focusWindow, minimizeWindow } = useWindows();
  const [position, setPosition] = useState({ x: 80, y: 40 });

  const [size, setSize] = useState({
    width: 980,
    height: 650,
  });
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    function updateWindow() {
      const mobile = window.innerWidth < 768;

      setPosition({
        x: mobile ? 10 : 80,
        y: mobile ? 10 : 40,
      });

      setSize({
        width: mobile
          ? window.innerWidth - 20
          : Math.min(window.innerWidth * 0.82, 980),

        height: mobile
          ? window.innerHeight - 80
          : Math.min(window.innerHeight * 0.78, 650),
      });
    }

    updateWindow();

    window.addEventListener("resize", updateWindow);

    return () => window.removeEventListener("resize", updateWindow);
  }, []);

  return (
    <Rnd
      size={
        maximized
          ? {
              width: "100%",
              height: "calc(100% - 56px)",
            }
          : size
      }
      position={
        maximized
          ? {
              x: 0,
              y: 0,
            }
          : position
      }
      onDragStop={(e, d) => {
        setPosition({
          x: d.x,
          y: d.y,
        });
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });

        setPosition(pos);
      }}
      disableDragging={maximized}
      enableResizing={!maximized}
      dragHandleClassName="window-header"
      bounds="window"
      minWidth={300}
      minHeight={200}
      onMouseDown={() => focusWindow(name)}
      style={{
        zIndex: active === name ? 999 : 100,
      }}
    >
      <div
        className="
        flex
        h-full
        flex-col

        overflow-hidden

        rounded-xl

        border

        border-white/10

        bg-[#0B1120]/95

        shadow-[0_20px_60px_rgba(0,0,0,.55)]

        backdrop-blur-xl
      "
      >
        {/* HEADER */}

        <div
          className={`
          window-header

          flex

          h-12

          cursor-move

          items-center

          justify-between

          px-4

          transition

          ${active === name ? "bg-violet-700" : "bg-slate-800"}
        `}
        >
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-3 font-semibold tracking-wide text-white">
              {title}
            </span>
          </div>

          <div className="flex">
            <button
              onClick={() => minimizeWindow(name)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                text-white
                transition
                hover:bg-white/10
              "
            >
              <LuMinus />
            </button>

            <button
              onClick={() => setMaximized(!maximized)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                text-white
                transition
                hover:bg-white/10
              "
            >
              <LuSquare />
            </button>

            <button
              onClick={onClose}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                text-white
                transition
                hover:bg-red-600
              "
            >
              <LuX />
            </button>
          </div>
        </div>

        {/* BODY */}

       {/* BODY */}

<div
  className="
    flex-1
    min-h-0

    overflow-y-auto
    overflow-x-hidden

    bg-[#0F172A]

    p-8

    text-white
  "
>
  {children}
</div>
      </div>
    </Rnd>
  );
}
