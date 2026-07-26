"use client";

import { useCallback, useState } from "react";
import Boot from "@/app/components/retro/Boot/Boot";
import Desktop from "@/app/components/desktop/desktop";

export default function HomePage() {
  const [booted, setBooted] = useState(false);

  const handleBoot = useCallback(() => {
    setBooted(true);
  }, []);

  return booted ? (
    <Desktop />
  ) : (
    <Boot onComplete={handleBoot} />
  );
}