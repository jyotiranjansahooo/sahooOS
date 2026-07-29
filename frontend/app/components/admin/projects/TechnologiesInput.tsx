"use client";

import { KeyboardEvent, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

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

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Technologies
        </label>

        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="React, Next.js, MongoDB..."
            className="
              flex-1
              rounded-lg
              border
              border-zinc-700
              bg-zinc-950
              px-4
              py-3
              text-sm
              text-white
              placeholder:text-zinc-500
              outline-none
              transition
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/20
            "
          />

          <button
            type="button"
            onClick={addTechnology}
            className="
              flex
              items-center
              justify-center
              rounded-lg
              bg-violet-600
              px-5
              transition
              hover:bg-violet-500
            "
          >
            <FiPlus size={18} />
          </button>
        </div>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tech, index) => (
            <span
              key={index}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-700
                bg-zinc-800
                px-3
                py-1.5
                text-sm
                text-zinc-200
              "
            >
              {tech}

              <button
                type="button"
                onClick={() => removeTechnology(index)}
                className="
                  rounded-full
                  p-1
                  text-zinc-400
                  transition
                  hover:bg-red-500
                  hover:text-white
                "
              >
                <FiX size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}