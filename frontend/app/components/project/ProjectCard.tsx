import { Project } from "@/app/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-xl border border-[#2F3A4D] bg-[#1A1F29] p-6">
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full rounded-lg object-cover"
      />

      <h2 className="mt-5 text-2xl font-bold text-[#33FF99]">
        {project.title}
      </h2>

      <p className="mt-3 text-gray-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[#33FF99] px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          className="rounded-lg bg-[#33FF99] px-4 py-2 text-black"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          className="rounded-lg border border-[#33FF99] px-4 py-2"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}