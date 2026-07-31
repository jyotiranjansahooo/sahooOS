"use client";

import { FiCheckCircle } from "react-icons/fi";

type Props = {
  features: string[];
};

export default function FeaturesSection({
  features,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
      <h2 className="mb-6 text-3xl font-bold">
        Features
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <FiCheckCircle className="text-green-400" />

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}