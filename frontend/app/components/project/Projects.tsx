"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-6">
      <ProjectCard
        title="Green Basket"
        description="A full-stack marketplace connecting farmers directly with customers using Next.js, Node.js, Express, MongoDB, JWT, and Razorpay."
      />
    </div>
  );
}