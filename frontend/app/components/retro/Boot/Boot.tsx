"use client";

import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { bootMessages } from "./bootData";

type Props = {
  onComplete: () => void;
};

export default function Boot({ onComplete }: Props) {
  const handleContinue = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleContinue();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleContinue]);

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black text-[#33FF99]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl rounded-lg border border-[#33FF99] bg-[#111827] p-10 font-mono shadow-2xl"
      >
        {bootMessages.map((line, index) => (
          <p key={index} className="leading-8">
            {line}
          </p>
        ))}

        <motion.button
          onClick={handleContinue}
          className="mt-10 rounded border border-[#33FF99] px-6 py-3 transition hover:bg-[#33FF99] hover:text-black"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          ▶ PRESS ENTER
        </motion.button>
      </motion.div>
    </main>
  );
}