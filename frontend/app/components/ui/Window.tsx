"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { X } from "lucide-react";

type WindowProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Window({
  title,
  isOpen,
  onClose,
  children,
}: WindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Window */}
          <motion.div
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[95%]
              max-w-4xl
              h-[80vh]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-xl
              border
              border-[#33FF99]
              bg-[#111827]
              shadow-2xl
            "
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* Title Bar */}
            <header className="flex h-14 items-center justify-between border-b border-[#2F3A4D] bg-[#1A1F29] px-5">
              <h2 className="font-semibold text-[#33FF99]">
                {title}
              </h2>

              <button
                onClick={onClose}
                className="rounded-md p-2 transition hover:bg-red-500 hover:text-white"
              >
                <X size={18} />
              </button>
            </header>

            {/* Content */}
            <div className="h-[calc(80vh-56px)] overflow-y-auto p-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}