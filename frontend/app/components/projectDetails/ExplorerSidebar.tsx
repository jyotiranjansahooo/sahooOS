"use client";

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

const items = [
  "All",
  "Featured",
  "Full Stack",
  "Frontend",
  "Backend",
];

export default function ExplorerSidebar({
  category,
  setCategory,
}: Props) {
  return (
    <aside className="w-60 border-r border-slate-700 bg-[#111827] p-4">
      <h2 className="mb-5 text-lg font-semibold">
        Quick Access
      </h2>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`w-full rounded-lg px-4 py-2 text-left transition ${
              category === item
                ? "bg-violet-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}