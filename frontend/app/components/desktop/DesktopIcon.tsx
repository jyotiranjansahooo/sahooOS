"use client";

import { motion } from "framer-motion";
import type { DesktopItem } from "./desktopData";

type Props = {
  id: DesktopItem["id"];
  title: string;
  icon: string;
  onOpen: (id: DesktopItem["id"]) => void;
};

export default function DesktopIcon({
  id,
  title,
  icon,
  onOpen,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onOpen(id)}
      className="flex flex-col items-center gap-3 rounded-xl p-4 hover:bg-[#1A1F29]"
    >
      <span className="text-5xl">{icon}</span>

      <span>{title}</span>
    </motion.button>
  );
}