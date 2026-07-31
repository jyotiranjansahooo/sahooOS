"use client";

import { KeyboardEvent, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

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

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-3 block text-sm font-semibold text-[#374151]">
          Features
        </label>

        <div className="flex items-stretch gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="JWT Authentication, Admin Dashboard..."
            className="
              h-14
              flex-1
              rounded-xl
              border
              border-[#DDE8D8]
              bg-[#F7FBF5]
              px-5
              text-[#1F2937]
              placeholder:text-[#9CA3AF]
              outline-none
              transition-all
              duration-200
              focus:border-[#7BAE73]
              focus:ring-4
              focus:ring-[#7BAE73]/20
            "
          />

          <button
            type="button"
            onClick={addFeature}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-[#7BAE73]
              text-white
              transition
              hover:bg-[#689961]
            "
          >
            <FiPlus size={22} />
          </button>
        </div>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {value.map((feature, index) => (
            <span
              key={index}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#DDE8D8]
                bg-[#EEF6EA]
                px-4
                py-2
                text-sm
                font-medium
                text-[#374151]
              "
            >
              {feature}

              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  text-[#6B7280]
                  transition
                  hover:bg-red-100
                  hover:text-red-600
                "
              >
                <FiX size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}