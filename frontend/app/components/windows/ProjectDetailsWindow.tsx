"use client";


import HeroSection from "@/app/components/projectDetails/HeroSection";
import ProjectHeader from "@/app/components/projectDetails/Header";
import ActionButtons from "@/app/components/projectDetails/ActionButtons";
import Description from "@/app/components/projectDetails/Description"
import TechStack from "../projectDetails/TechStack";
import FeaturesSection from "../projectDetails/FeaturesSection";
import GallerySection from "../projectDetails/GallerySection";

import Window from "../ui/Window";
import { useWindows } from "@/app/context/WindowContext";

type Props = {
  onClose: () => void;
};

export default function ProjectDetailsWindow({
  onClose,
}: Props) {
  const { selectedProject } = useWindows();

  if (!selectedProject) return null;

return (
  <Window
    name="projectDetails"
    title={selectedProject.title}
    onClose={onClose}
  >
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <HeroSection
          image={selectedProject.thumbnail}
          title={selectedProject.title}
        />

        <div>
          <ProjectHeader project={selectedProject} />

          <ActionButtons
            github={selectedProject.githubUrl}
            live={selectedProject.liveUrl}
          />
        </div>
      </div>

      <Description
        description={selectedProject.description}
      />

      <TechStack
        technologies={selectedProject.technologies}
      />

      <FeaturesSection
        features={selectedProject.features}
      />

      <GallerySection
        images={selectedProject.images}
      />
    </div>
  </Window>
);
}