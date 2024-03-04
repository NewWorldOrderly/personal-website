"use client";

import { useEffect, useState } from "react";
import { SlClock, SlGlobeAlt } from "react-icons/sl";

type TimeZoneProps = {
  label: string;
  timeZone: string;
};

export function TimeZone({ label, timeZone }: Readonly<TimeZoneProps>) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const tucsonTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: timeZone,
      }).format(new Date());

      setTime(tucsonTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <SlGlobeAlt />
        <p>{label}</p>
      </div>
      <div className="flex items-center space-x-4">
        <SlClock />
        <div className="font-bold">{time}</div>
      </div>
    </div>
  );
}
