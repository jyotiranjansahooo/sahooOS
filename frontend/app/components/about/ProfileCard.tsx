"use client";

export default function ProfileCard() {
  return (
    <div className="rounded-xl border border-[#4CF8A8]/30 bg-black/40 p-6 backdrop-blur">
      <h2 className="text-2xl font-bold text-[#4CF8A8]">
        Jyoti Ranjan Sahoo
      </h2>

      <p className="mt-4 leading-7 text-gray-300">
        Full Stack Developer specializing in Next.js, React, Node.js,
        Express.js, MongoDB, and Tailwind CSS.
      </p>
    </div>
  );
}