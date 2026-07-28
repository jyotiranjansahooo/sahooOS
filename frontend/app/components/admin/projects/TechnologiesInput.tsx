"use client";

import { KeyboardEvent, useState } from "react";

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};

export default function TechnologiesInput({
  value,
  onChange,
}: Props) {
  const [input, setInput] = useState("");

  function addTechnology() {
    const tech = input.trim();

    if (!tech) return;

    if (value.includes(tech)) {
      setInput("");
      return;
    }

    onChange([...value, tech]);

    setInput("");
  }

  function removeTechnology(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function handleKeyDown(
    e: KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-white">
        Technologies
      </label>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a technology and press Enter"
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
        {value.map((tech, index) => (
          <button
            key={index}
            type="button"
            onClick={() => removeTechnology(index)}
            className="
              rounded-full
              bg-violet-600
              px-4
              py-2
              text-sm
              text-white
              transition
              hover:bg-red-500
            "
          >
            {tech} ✕
          </button>
        ))}
      </div>
    </div>
  );
}