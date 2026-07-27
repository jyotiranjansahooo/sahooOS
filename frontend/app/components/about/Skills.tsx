"use client";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "JWT",
  "GSAP",
];

export default function Skills() {
  return (
    <div className="rounded-xl border border-[#4CF8A8]/30 bg-black/40 p-6 backdrop-blur">
      <h3 className="mb-4 text-xl font-semibold text-[#4CF8A8]">
        Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#4CF8A8]/40 px-4 py-2 text-sm text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}