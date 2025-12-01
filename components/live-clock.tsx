"use client";

import { useEffect, useMemo, useState } from "react";

function formatTime(formatter: Intl.DateTimeFormat) {
  return formatter.format(new Date());
}

export default function LiveClock() {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Jakarta",
      }),
    [],
  );

  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    setTime(formatTime(formatter));

    const intervalId = setInterval(() => {
      setTime(formatTime(formatter));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [formatter]);

  return <span suppressHydrationWarning>{time} WIB</span>;
}
