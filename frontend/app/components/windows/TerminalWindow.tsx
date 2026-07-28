"use client";

import { useEffect, useRef, useState } from "react";
import Window from "../ui/Window";
import { executeCommand } from "../terminal/executeCommand";
import { useWindows } from "@/app/context/WindowContext";

type Props = {
  onClose: () => void;
};

export default function TerminalWindow({ onClose }: Props) {
 const [history, setHistory] = useState<string[]>([
  "Sahoo OS Terminal v1.0",
  "Copyright (c) 2026 Jyoti Ranjan Sahoo",
  "",
  "Type 'help' to list commands.",
  "",
]);

  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { openWindow } = useWindows();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  function execute() {
    const cmd = input.trim().toLowerCase();
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = executeCommand({
      command: cmd,
      openWindow,
    });

    setHistory((prev) => [...prev, `jyoti@sahoo:~$ ${cmd}`, "", output, ""]);

    setInput("");
  }

  return (
    <Window name="terminal" title="💻 Terminal" onClose={onClose}>
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex h-full cursor-text flex-col"
      >
        <div
          className="
            flex-1
            overflow-y-auto

            pl-16
            pr-10
            pt-10
            pb-8

            font-mono
            text-[18px]
            leading-8

            text-green-400

            whitespace-pre-wrap
          "
        >
          {history.map((line, index) => (
            <div key={index} className="mb-1">
              {line}
            </div>
          ))}

          <div className="mt-6 flex items-center">
            <span className="mr-3 whitespace-nowrap text-green-500">
              jyoti@sahooOS:~$
            </span>
            <input
              ref={inputRef}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
  if (e.key === "Enter") {
    execute();
    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();

    if (commandHistory.length === 0) return;

    const nextIndex =
      historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(historyIndex - 1, 0);

    setHistoryIndex(nextIndex);
    setInput(commandHistory[nextIndex]);
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();

    if (historyIndex === -1) return;

    const nextIndex = historyIndex + 1;

    if (nextIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      setInput("");
      return;
    }

    setHistoryIndex(nextIndex);
    setInput(commandHistory[nextIndex]);
  }
}}
              className="
    flex-1
    bg-transparent
    border-none
    outline-none

    text-green-400

    caret-green-400

    placeholder:text-green-700
  "
            />
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </Window>
  );
}
