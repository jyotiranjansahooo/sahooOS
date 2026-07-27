"use client";

import Window from "../ui/Window";

type Props = {
  onClose: () => void;
};

export default function ProjectsWindow({
  onClose,
}: Props) {
  return (
    <Window
    name="projects"
    title="📁 Projects"
    onClose={onClose}
>
      <div className="space-y-6">

        <div className="rounded-xl bg-white/5 p-5">

          <h2 className="text-2xl font-bold text-white">
            Green Basket
          </h2>

          <p className="mt-3 text-gray-300">
            Full Stack Farmer Marketplace
          </p>

        </div>

        <div className="rounded-xl bg-white/5 p-5">

          <h2 className="text-2xl font-bold text-white">
            Sahoo OS
          </h2>

          <p className="mt-3 text-gray-300">
            Interactive desktop portfolio.
          </p>

        </div>

      </div>
    </Window>
  );
}