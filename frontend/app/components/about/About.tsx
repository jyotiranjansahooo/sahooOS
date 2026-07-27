"use client";

import ProfileCard from "./ProfileCard";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="space-y-8">
      <ProfileCard />
      <Skills />
    </div>
  );
}