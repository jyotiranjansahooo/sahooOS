"use client";

import Window from "../ui/Window";

type Props = {
  onClose: () => void;
};

export default function ContactWindow({
  onClose,
}: Props) {
  return (
    <Window
    name="contact"
    title="📧 Contact"
    onClose={onClose}
>
      <div className="space-y-4 text-white">

        <h2 className="text-3xl font-bold">
          Let`s Connect
        </h2>

        <p>Email</p>

        <p>
          jyotiranjansahoo@email.com
        </p>

        <p>GitHub</p>

        <p>LinkedIn</p>

      </div>
    </Window>
  );
}