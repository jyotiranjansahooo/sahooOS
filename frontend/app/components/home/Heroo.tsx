"use client";

import Background from "./Background";
import Clouds from "./Clouds";
import Ground from "./Ground";
import Character from "./Character";
import Logo from "./Logo";
import Menu from "./Menu";
import HUD from "./HUD";

export default function Heroo() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#090B1A]">

      {/* Sky + Moon + City */}
      <Background />

      {/* Animated Clouds */}
      <Clouds />

      {/* Hero */}
      <section
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          max-w-[1400px]
          items-center
          justify-between
          px-6

          sm:px-10

          lg:px-20
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            w-full
            max-w-xl
            flex-col
            items-start
            gap-8
          "
        >
          <HUD />

          <Logo />

          <Menu />
        </div>

        {/* RIGHT */}
        <div
          className="
            absolute
            bottom-28
            right-4

            sm:right-8

            lg:relative
            lg:bottom-0
            lg:right-0
          "
        >
          <Character />
        </div>
      </section>

      {/* Ground */}
      <Ground />
    </main>
  );
}