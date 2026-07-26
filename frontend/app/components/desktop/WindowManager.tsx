"use client";

import Window from "../ui/Window";
import { windowContent, type WindowType } from "../Windows/windowContent";
type Props = {
  activeWindow: WindowType | null;
  onClose: () => void;
};

export default function WindowManager({
  activeWindow,
  onClose,
}: Props) {
  if (!activeWindow) return null;

  const window = windowContent[activeWindow];

  return (
    <Window
      title={window.title}
      isOpen
      onClose={onClose}
    >
      {window.content}
    </Window>
  );
}