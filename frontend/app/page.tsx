"use client";

import { useState } from "react";

import Desktop from "./components/desktop/Desktop";
import BootLoader from "./components/loading/BootLoader";

export default function Home() {
  const [loaded, setLoaded] =
    useState(false);

  return (
    <>
      {!loaded && (
        <BootLoader
          onFinish={() => setLoaded(true)}
        />
      )}

      <div
        className={`transition-all duration-700 ${
          loaded
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <Desktop />
      </div>
    </>
  );
}