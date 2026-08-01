"use client";

import Window from "../ui/Window";
import { FiUser, FiMapPin, FiCheckCircle } from "react-icons/fi";
type Props = {
  onClose: () => void;
};

export default function ProfileWindow({ onClose }: Props) {
  return (
    <Window name="profile" title="👤 Profile" onClose={onClose}>
      <div
        className="
    max-w-full
    space-y-16
    px-8
    py-8
    sm:px-10
    lg:px-14
    xl:px-20
    pb-24
  "
      >
        {/* Header */}
        <div className="h-6" />

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
          {/* Avatar */}

          <div
            className="
      flex
      h-28
      w-28
      shrink-0
      items-center
      justify-center
      rounded-3xl
      border
      border-violet-500/30
      bg-gradient-to-br
      from-violet-700/20
      to-slate-900
      shadow-[0_0_30px_rgba(139,92,246,.35)]
      sm:h-32
      sm:w-32
      lg:h-36
      lg:w-36
    "
          >
            <FiUser className="text-5xl text-violet-300 sm:text-6xl" />
          </div>

          {/* Info */}

          <div className="flex-1 text-center lg:text-left">
            <h1
              className="
        text-3xl
        font-bold
        leading-tight
        sm:text-2xl
        md:text-3xl
        lg:text-6xl
      "
            >
              Jyoti Ranjan Sahoo
            </h1>

            <p
              className="
        mt-3
        text-md
        text-violet-300
        sm:text-lg
        lg:text-2xl
      "
            >
              Full Stack Developer
            </p>

            <div
              className="
        mt-6
        flex
        flex-wrap
        justify-center
        gap-3
        lg:justify-start
      "
            >
              <span
                className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          px-4
          py-2
          text-sm
          text-green-400
          sm:text-base
        "
              >
                <FiCheckCircle />
                Available for Work
              </span>

              <span
                className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-700
          bg-slate-800
          px-4
          py-2
          text-sm
          sm:text-base
        "
              >
                <FiMapPin />
                Odisha, India
              </span>
            </div>
          </div>
        </div>
        <div className="h-8" />
        <section className="pb-14">
          <h2 className="relative mb-8 inline-block text-2xl sm-xl font-bold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-violet-500 after:shadow-[0_0_15px_#8b5cf6]">
            About Me
          </h2>
          <div className="h-6" />

          <p className="max-w-full text-lg sm-md leading-9 text-slate-300">
            I build modern full-stack web applications using Next.js, React,
            Node.js, Express, MongoDB and TypeScript. I enjoy creating premium
            UI experiences, scalable backend architectures, REST APIs and
            desktop-inspired web applications like this portfolio.
          </p>
        </section>
        <div className="h-8" />
        <section className="pb-14">
          <h2 className="relative mb-8 inline-block text-xl base-lg font-bold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-violet-500 after:shadow-[0_0_15px_#8b5cf6]">
            Tech Stack
          </h2>
          <div className="h-6" />

          <div className="flex flex-wrap gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "JWT",
              "Cloudinary",
              "Razorpay",
              "Git",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="
          rounded-full
          border
          border-violet-500/40
          bg-violet-500/10
          px-5
          py-2
          text-lg sm-md
        "
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        <div className="h-8" />
        <section className="pb-14">
          <h2 className="relative mb-8 inline-block text-2xl font-bold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-violet-500 after:shadow-[0_0_15px_#8b5cf6]">
            Expertise
          </h2>
          <div className="h-6" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
            {[
              "Full Stack Development",
              "REST API Development",
              "Authentication & Security",
              "MongoDB Database Design",
              "Responsive UI",
              "Cloudinary Integration",
              "Payment Gateway",
              "Deployment",
            ].map((item) => (
              <div
                key={item}
                className="
          rounded-xl
          border
          border-slate-700
          bg-slate-800/40
px-5
py-4
shadow-lg
hover:border-violet-500/40
transition
        "
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </section>
        <div className="h-8" />
        <section className="pb-14">
          <h2 className="relative mb-8 inline-block text-2xl font-bold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-violet-500 after:shadow-[0_0_15px_#8b5cf6]">
            Quick Stats
          </h2>
          <div className="h-6" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-4xl font-bold text-violet-400">12+</h3>
              <p className="mt-2 text-slate-400">Projects</p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-4xl font-bold text-violet-400">15+</h3>
              <p className="mt-2 text-slate-400">Technologies</p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-4xl font-bold text-violet-400">2+</h3>
              <p className="mt-2 text-slate-400">Years Learning</p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-4xl font-bold text-violet-400">100%</h3>
              <p className="mt-2 text-slate-400">Passion</p>
            </div>
          </div>
        </section>
        <div className="h-8" />
        <section className="pb-14">
          <h2 className="relative mb-8 inline-block text-2xl font-bold after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-violet-500 after:shadow-[0_0_15px_#8b5cf6]">
            Connect
          </h2>
          <div className="h-6" />

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/jyotiranjansahooo"
              target="_blank"
              className="rounded-xl bg-violet-600 px-6 py-3 transition hover:bg-violet-700"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jyoti-ranjan-sahoo-80bb6a36a/"
              target="_blank"
              className="rounded-xl bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="/resume"
              className="rounded-xl bg-green-600 px-6 py-3 transition hover:bg-green-700"
            >
              Resume
            </a>
          </div>
        </section>
        <div className="h-12" />
      </div>
    </Window>
  );
}
