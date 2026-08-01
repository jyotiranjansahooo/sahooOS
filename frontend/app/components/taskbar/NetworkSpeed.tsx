"use client";

import { useState } from "react";

import {
  LuWifi,
  LuWifiOff,
} from "react-icons/lu";

import NetworkFlyout from "./NetworkFlyout";

export default function NetworkSpeed() {
  const [open, setOpen] =
    useState(false);

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
        {navigator.onLine ? (
          <LuWifi
            size={18}
            className="text-white"
          />
        ) : (
          <LuWifiOff
            size={18}
            className="text-red-500"
          />
        )}
      </button>

      <NetworkFlyout open={open} />
    </>
  );
}