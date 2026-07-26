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
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <div className="rounded-xl border border-[#2F3A4D] bg-[#1A1F29] p-6">
      <h2 className="mb-6 text-2xl font-bold text-[#33FF99]">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[#33FF99] px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}