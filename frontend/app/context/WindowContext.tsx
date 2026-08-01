"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { AppId } from "@/app/data/apps";
import type { Project } from "@/app/types/project";

export type WindowName = AppId;

type WindowState = {
  opened: boolean;
  minimized: boolean;
};

type ContextType = {
  windows: Record<WindowName, WindowState>;

  active: WindowName | null;

  selectedProject: Project | null;

  taskbarOrder: WindowName[];

  openWindow: (
    name: WindowName,
    project?: Project
  ) => void;

  closeWindow: (name: WindowName) => void;

  minimizeWindow: (name: WindowName) => void;

  restoreWindow: (name: WindowName) => void;

  focusWindow: (name: WindowName) => void;

  reorderTaskbar: (
    order: WindowName[]
  ) => void;
};

const WindowContext =
  createContext<ContextType | null>(null);

const initialWindows: Record<
  WindowName,
  WindowState
> = {
  profile: {
    opened: false,
    minimized: false,
  },

  projects: {
    opened: false,
    minimized: false,
  },

  terminal: {
    opened: false,
    minimized: false,
  },

  contact: {
    opened: false,
    minimized: false,
  },

  resume: {
    opened: false,
    minimized: false,
  },
};

export function WindowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [windows, setWindows] =
    useState(initialWindows);

  const [active, setActive] =
    useState<WindowName | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [taskbarOrder, setTaskbarOrder] =
    useState<WindowName[]>(() => {
      if (typeof window === "undefined")
        return [];

      try {
        const saved =
          localStorage.getItem(
            "taskbar-order"
          );

        return saved
          ? (JSON.parse(
              saved
            ) as WindowName[])
          : [];
      } catch {
        return [];
      }
    });

  function openWindow(
    name: WindowName,
    project?: Project
  ) {
    setWindows((prev) => ({
      ...prev,

      [name]: {
        opened: true,
        minimized: false,
      },
    }));

    if (project) {
      setSelectedProject(project);
    }

    setActive(name);

    setTaskbarOrder((prev) => {
      if (prev.includes(name)) return prev;

      const updated = [...prev, name];

      localStorage.setItem(
        "taskbar-order",
        JSON.stringify(updated)
      );

      return updated;
    });
  }

  function closeWindow(name: WindowName) {
    setWindows((prev) => ({
      ...prev,

      [name]: {
        opened: false,
        minimized: false,
      },
    }));

    if (active === name) {
      setActive(null);
    }

    const updated = taskbarOrder.filter(
      (app) => app !== name
    );

    setTaskbarOrder(updated);

    localStorage.setItem(
      "taskbar-order",
      JSON.stringify(updated)
    );
  }

  function minimizeWindow(
    name: WindowName
  ) {
    setWindows((prev) => ({
      ...prev,

      [name]: {
        ...prev[name],
        minimized: true,
      },
    }));

    if (active === name) {
      setActive(null);
    }
  }

  function restoreWindow(
    name: WindowName
  ) {
    setWindows((prev) => ({
      ...prev,

      [name]: {
        opened: true,
        minimized: false,
      },
    }));

    setActive(name);
  }

  function focusWindow(name: WindowName) {
    setActive(name);
  }

  function reorderTaskbar(
    order: WindowName[]
  ) {
    setTaskbarOrder(order);

    localStorage.setItem(
      "taskbar-order",
      JSON.stringify(order)
    );
  }

  const value = useMemo(
    () => ({
      windows,

      active,

      selectedProject,

      taskbarOrder,

      openWindow,

      closeWindow,

      minimizeWindow,

      restoreWindow,

      focusWindow,

      reorderTaskbar,
    }),
    [
      windows,
      active,
      selectedProject,
      taskbarOrder,
    ]
  );

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);

  if (!ctx) {
    throw new Error(
      "WindowProvider missing"
    );
  }

  return ctx;
}