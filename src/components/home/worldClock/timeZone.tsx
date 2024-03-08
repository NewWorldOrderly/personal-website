"use client";

import { useEffect, useState } from "react";
import { SlClock, SlGlobeAlt } from "react-icons/sl";

type TimeZoneProps = {
  label: string;
  timeZone: string;
  primary?: boolean;
};

export function TimeZone({
  label,
  timeZone,
  primary = false,
}: Readonly<TimeZoneProps>) {
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
      <div className="flex items-center space-x-3">
        <div className="grow">
          <SlGlobeAlt />
        </div>
        <p
          className={
            primary ? "grow text-right text-accent" : "grow text-right"
          }
        >
          {label}
        </p>
      </div>
      <div className="flex grow items-center space-x-3">
        <div className="grow">
          <SlClock />
        </div>
        <div
          className={
            primary
              ? "grow font-bold text-lg text-right text-primary"
              : "grow font-bold text-lg text-right"
          }
        >
          {time}
        </div>
      </div>
    </div>
  );
}
