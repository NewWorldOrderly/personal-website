import { Separator } from "@/components/ui/separator";

import { TimeZone } from "./timeZone";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";

export function WorldClock() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Zones</CardTitle>
        <CardDescription>What is time?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <TimeZone label="Tucson, Arizona" timeZone="America/Phoenix" />
        <Separator />
        <TimeZone
          label="Los Angeles, Califoria"
          timeZone="America/Los_Angeles"
        />
        <Separator />
        <TimeZone label="New York, New York" timeZone="America/New_York" />
        <Separator />
        <TimeZone label="Denver, Colorado" timeZone="America/Denver" />
      </CardContent>
    </Card>
  );
}
