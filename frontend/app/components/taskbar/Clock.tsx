"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] =
    useState("");

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }

    update();

    const timer =
      setInterval(update, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <div className="text-sm text-white">

      {time}

    </div>
  );
}