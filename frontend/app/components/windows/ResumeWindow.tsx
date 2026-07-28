"use client";

import Window from "../ui/Window";

type Props = {
  onClose: () => void;
};

export default function ResumeWindow({ onClose }: Props) {
  return (
    <Window name="resume" title="📄 Resume" onClose={onClose}>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="h-full w-full"
      >
        <div className="flex h-full items-center justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded bg-violet-600 px-5 py-3 text-white"
          >
            Open Resume
          </a>
        </div>
      </object>
    </Window>
  );
}
