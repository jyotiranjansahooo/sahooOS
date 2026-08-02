"use client";

import { useEffect, useState } from "react";
import { LuWifi, LuWifiOff } from "react-icons/lu";

import NetworkFlyout from "./NetworkFlyout";

export default function NetworkSpeed() {
  const [open, setOpen] = useState(false);

  // null until client mounts
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    function updateStatus() {
      setOnline(navigator.onLine);
    }

    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          hidden
          lg:flex
          items-center
          justify-center
          h-9
          w-9
          rounded-lg
          transition-all
          duration-200
          hover:bg-white/10
        "
      >
        {online === false ? (
          <LuWifiOff size={18} className="text-red-500" />
        ) : (
          <LuWifi size={18} className="text-white" />
        )}
      </button>

      <NetworkFlyout open={open} />
    </>
  );
}