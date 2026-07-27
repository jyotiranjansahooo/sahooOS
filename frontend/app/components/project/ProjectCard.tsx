"use client";

type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-xl border border-[#4CF8A8]/30 bg-black/40 p-6 backdrop-blur">
      <h3 className="text-2xl font-bold text-[#4CF8A8]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {description}
      </p>
    </div>
  );
}