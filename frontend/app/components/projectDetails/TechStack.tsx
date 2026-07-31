"use client";

type Props = {
  technologies: string[];
};

export default function TechStack({
  technologies,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
      <h2 className="mb-6 text-3xl font-bold">
        Technologies
      </h2>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-violet-700/30
              border
              border-violet-600
              px-5
              py-2
              font-medium
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}