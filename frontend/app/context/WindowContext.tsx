"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type WindowName =
  | "profile"
  | "projects"
  | "terminal"
  | "contact"
  | "resume";

type WindowState = {
  opened: boolean;
  minimized: boolean;
};

type ContextType = {
  windows: Record<WindowName, WindowState>;

  active: WindowName | null;

  openWindow: (name: WindowName) => void;

  closeWindow: (name: WindowName) => void;

  minimizeWindow: (name: WindowName) => void;

  restoreWindow: (name: WindowName) => void;

  focusWindow: (name: WindowName) => void;
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

  function openWindow(name: WindowName) {
    setWindows((prev) => ({
      ...prev,
      [name]: {
        opened: true,
        minimized: false,
      },
    }));

    setActive(name);
  }

  function closeWindow(name: WindowName) {
    setWindows((prev) => ({
      ...prev,
      [name]: {
        opened: false,
        minimized: false,
      },
    }));

    if (active === name)
      setActive(null);
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

    if (active === name)
      setActive(null);
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

  const value = useMemo(
    () => ({
      windows,
      active,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      focusWindow,
    }),
    [windows, active]
  );

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);

  if (!ctx)
    throw new Error(
      "WindowProvider missing"
    );

  return ctx;
}