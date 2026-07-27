"use client";

import { useState } from "react";

export default function useDesktop() {
  const [selected, setSelected] =
    useState("");

  return {
    selected,
    setSelected,
  };
}