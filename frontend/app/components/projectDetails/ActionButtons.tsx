"use client";

import Link from "next/link";

import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

type Props = {
  github: string;
  live: string;
};

export default function ActionButtons({
  github,
  live,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link
        href={live}
        target="_blank"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-green-600
          px-6
          py-3
          font-semibold
          transition
          hover:bg-green-700
        "
      >
        <FiExternalLink />

        Live Demo

      </Link>

      <Link
        href={github}
        target="_blank"
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-violet-600
          px-6
          py-3
          font-semibold
          transition
          hover:bg-violet-700
        "
      >
        <FiGithub />

        GitHub

      </Link>

    </div>
  );
}