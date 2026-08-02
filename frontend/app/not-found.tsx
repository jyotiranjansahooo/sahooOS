"use client";

import Link from "next/link";
import { LuHouse, LuTerminal } from "react-icons/lu";

export default function NotFound() {
  return (
    <main
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden

      bg-[#090B14]
      text-white
      "
    >
      {/* Scanlines */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,.03)_50%)] bg-[length:100%_4px]" />

      {/* Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[140px]" />

      <div
        className="
        relative
        z-10

        w-[92%]
        max-w-3xl

        rounded-2xl

        border
        border-violet-500/30

        bg-black/60

        p-10

        backdrop-blur-xl
        "
      >
       <div className="h-4"></div>
        <div className="mb-8 flex items-center gap-3">
          <LuTerminal size={28} className="text-violet-400" />

          <h1 className="text-2xl font-bold tracking-widest text-violet-300">
            SAHOO OS
          </h1>
        </div>
<div className="h-4"></div>
        <p className="text-red-400 font-semibold tracking-wider">
          SYSTEM ERROR
        </p>

        <h2 className="mt-6 text-9xl text-center font-black tracking-tight">
          404
        </h2>
<div className="h-4"></div>
        <p className="mt-8 text-lg text-slate-300">
          The requested file or directory could not be found.
        </p>
<div className="h-4"></div>
        <div
          className="
          mt-10

          rounded-lg

          border
          border-slate-700

          bg-[#101827]

          p-5

          font-mono
          "
        >
          <p>&gt; cd /</p>

          <p>&gt; ls</p>

          <p className="text-red-400">
            Error: file not found
          </p>

          <p className="mt-3 text-violet-400">
            &gt; return home
          </p>
        </div>
        <div className="h-4"></div>

        <Link
          href="/"
          className="
          mt-10
          inline-flex
          items-center
          gap-3

          rounded-xl

          bg-violet-600

          px-6
          py-3

          font-semibold

          transition

          hover:bg-violet-700
          "
        >
          <LuHouse />

          Return Home
        </Link>
      </div>
    </main>
  );
}