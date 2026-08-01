"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NetworkSpeed from "./NetworkSpeed";

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import Clock from "./Clock";
import TaskbarItem from "./TaskbarItem";

import {
  useWindows,
  WindowName,
} from "@/app/context/WindowContext";

import {
  LuLaptop,
  LuUser,
  LuFolderOpen,
  LuFolderSearch,
  LuTerminal,
  LuMail,
  LuFileText,
  LuLock,
} from "react-icons/lu";

const icons = {
  profile: LuUser,
  projects: LuFolderOpen,
  projectDetails: LuFolderSearch,
  terminal: LuTerminal,
  contact: LuMail,
  resume: LuFileText,
} satisfies Record<
  string,
  React.ComponentType<{
    size?: number;
    className?: string;
  }>
>;

export default function Taskbar() {
  const {
    windows,
    active,
    restoreWindow,
  } = useWindows();

  const openedApps = (
    Object.keys(windows) as WindowName[]
  ).filter((name) => windows[name].opened);

const [orderedApps, setOrderedApps] = useState<WindowName[]>(openedApps);

if (
  openedApps.length !== orderedApps.length ||
  openedApps.some((app) => !orderedApps.includes(app))
) {
  const stillOpen = orderedApps.filter((app) =>
    openedApps.includes(app)
  );

  const newApps = openedApps.filter(
    (app) => !stillOpen.includes(app)
  );

  if (
    JSON.stringify([...stillOpen, ...newApps]) !==
    JSON.stringify(orderedApps)
  ) {
    setOrderedApps([...stillOpen, ...newApps]);
  }
}

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = orderedApps.indexOf(
      active.id as WindowName
    );

    const newIndex = orderedApps.indexOf(
      over.id as WindowName
    );

    setOrderedApps(
      arrayMove(
        orderedApps,
        oldIndex,
        newIndex
      )
    );
  }

  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        z-[9999]
        flex
        h-14
        w-full
        items-center
        justify-between
        border-t
        border-white/10
        bg-black/40
        px-5
        backdrop-blur-xl
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-5 overflow-x-auto">

        <div className="w-4" />

        <div className="flex shrink-0 items-center gap-2">

          <LuLaptop
            size={22}
            className="text-violet-400"
          />

          <span className="whitespace-nowrap font-semibold text-white">
            SAHOO OS
          </span>

        </div>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={orderedApps}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex items-center gap-2">

              {orderedApps.map((app) => {

                const Icon = icons[app];

                if (!Icon) return null;

                return (
                  <TaskbarItem
                    key={app}
                    id={app}
                    active={active === app}
                    label={app}
                    icon={
                      <Icon
                        size={18}
                        className="text-white"
                      />
                    }
                    onClick={() =>
                      restoreWindow(app)
                    }
                  />
                );
              })}

            </div>
          </SortableContext>
        </DndContext>

      </div>

      {/* RIGHT */}

    <div className="flex items-center gap-4 shrink-0">

  <NetworkSpeed />

  <Clock />

        <Link
          href="/sign-in"
          prefetch={false}
          title="Administrator"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            opacity-30
            transition-all
            duration-300
            hover:bg-white/10
            hover:opacity-100
          "
        >
          <LuLock
            size={18}
            className="text-white"
          />
        </Link>

      </div>

    </footer>
  );
}