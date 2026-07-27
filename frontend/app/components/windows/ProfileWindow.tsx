"use client";

import Window from "../ui/Window";

type Props = {
  onClose: () => void;
};

export default function ProfileWindow({
  onClose,
}: Props) {
  return (
   <Window
    name="profile"
    title="👤 Profile"
    onClose={onClose}
>
      <h1 className="mb-4 text-4xl font-bold text-white">
        Jyoti Ranjan Sahoo
      </h1>

      <p className="mb-6 text-violet-300">
        Full Stack Developer
      </p>

      <p className="leading-8 text-gray-300">
        Welcome to Sahoo OS.

        <br />
        <br />

        I build modern full-stack web applications
        using Next.js, React, Node.js,
        Express, MongoDB and TypeScript.

        <br />
        <br />

        This portfolio itself behaves like a desktop
        operating system.
      </p>
    </Window>
  );
}