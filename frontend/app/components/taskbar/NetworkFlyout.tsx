"use client";

import {
  LuWifi,
  LuCircleCheck,
} from "react-icons/lu";

type Props = {
  open: boolean;
};

export default function NetworkFlyout({
  open,
}: Props) {
  if (!open) return null;

  const connection = (
    navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        downlink?: number;
        rtt?: number;
      };
    }
  ).connection;

  return (
    <div
      className="
fixed
bottom-16
right-44

w-80

rounded-2xl

border
border-white/10
text-gray-300
bg-purple-900/80

backdrop-blur-xl

shadow-2xl

p-5

animate-in
fade-in
slide-in-from-bottom-4
duration-300
"
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-violet-600 p-3">

          <LuWifi size={22} />

        </div>

        <div>

          <h2 className="font-semibold">

            Wi-Fi

          </h2>

          <p className="text-xs text-slate-400">

            {navigator.onLine
              ? "Connected"
              : "Offline"}

          </p>

        </div>

      </div>

      <div className="mt-6 space-y-4 text-sm">

        <div className="flex justify-between">

          <span>Status</span>

          <span className="flex items-center gap-2 text-green-400">

           <LuCircleCheck />

            Connected

          </span>

        </div>

        <div className="flex justify-between">

          <span>Type</span>

          <span>
            {connection?.effectiveType ??
              "Wi-Fi"}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Estimated</span>

          <span>
            {connection?.downlink ??
              "--"}{" "}
            Mbps
          </span>

        </div>

        <div className="flex justify-between">

          <span>Latency</span>

          <span>

            {connection?.rtt ??
              "--"}{" "}
            ms

          </span>

        </div>

      </div>
    </div>
  );
}