"use client";

import Window from "../ui/Window";
import ExplorerItem from "../project/ExplorerItem";

import { projects } from "@/app/data/projects";

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
      <div className="space-y-2">
        {projects.map((project) => (
          <ExplorerItem
            key={project.id}
            name={project.name}
            onOpen={() => {
              alert(project.name);
            }}
          />
        ))}
      </div>
    </Window>
  );
}