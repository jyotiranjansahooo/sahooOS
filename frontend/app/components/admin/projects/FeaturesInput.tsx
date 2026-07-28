"use client";

import { KeyboardEvent, useState } from "react";

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

export default function FeaturesInput({
  value,
  onChange,
}: Props) {
  const [input, setInput] = useState("");

  function addFeature() {
    const feature = input.trim();

    if (!feature) return;

    if (value.includes(feature)) {
      setInput("");
      return;
    }

    onChange([...value, feature]);

    setInput("");
  }

  function removeFeature(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function handleKeyDown(
    e: KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-white">
        Features
      </label>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a feature and press Enter"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          px-4
          py-3
          text-white
          outline-none
          focus:border-violet-500
        "
      />

      <div className="flex flex-wrap gap-2">
        {value.map((feature, index) => (
          <button
            key={index}
            type="button"
            onClick={() => removeFeature(index)}
            className="
              rounded-full
              bg-emerald-600
              px-4
              py-2
              text-sm
              text-white
              transition
              hover:bg-red-500
            "
          >
            {feature} ✕
          </button>
        ))}
      </div>
    </div>
  );
}