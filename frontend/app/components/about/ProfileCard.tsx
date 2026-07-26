"use client";

export default function ProfileCard() {
  return (
    <div className="rounded-xl border border-[#2F3A4D] bg-[#1A1F29] p-6">
      <div className="flex flex-col items-center">

        <div className="h-36 w-36 rounded-full border-4 border-[#33FF99] bg-gray-700" />

        <h1 className="mt-6 text-3xl font-bold">
          Jyoti Ranjan Sahoo
        </h1>

        <p className="mt-2 text-[#33FF99]">
          Full Stack Developer
        </p>

        <p className="mt-6 text-center text-gray-300">
          Passionate Full Stack Developer specializing in
          Next.js, React, Node.js, Express.js and MongoDB.
        </p>

      </div>
    </div>
  );
}