import { GiDuck } from "react-icons/gi";

import { Separator } from "@/components/ui/separator";

type QuackProps = {
  message: string;
  timestamp?: string;
};

export function Quack({ message, timestamp }: Readonly<QuackProps>) {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const formatTime = (time: number | Date | undefined) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    }).format(time);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <GiDuck className="mt-1 mr-2" />
        <p>{message}</p>
      </div>
      <div className="text-xs text-muted-foreground">{formatTime(date)}</div>
      <Separator />
    </div>
  );
}
