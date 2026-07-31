"use client";

type Props = {
  description: string;
};

export default function DescriptionSection({
  description,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
      <h2 className="mb-6 text-3xl font-bold">
        About Project
      </h2>

      <p className="whitespace-pre-line leading-8 text-slate-300">
        {description}
      </p>
    </section>
  );
}