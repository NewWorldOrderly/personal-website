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
        <CardTitle className="tracking-tight text-base font-normal">
          Time Zones
        </CardTitle>
        <CardDescription>What is time?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Separator />
        <TimeZone label="Los Angeles, CA" timeZone="America/Los_Angeles" />
        <Separator />
        <TimeZone
          label="Tucson, AZ"
          timeZone="America/Phoenix"
          primary={true}
        />
        <Separator />

        <TimeZone label="Denver, CO" timeZone="America/Denver" />
        <Separator />
        <TimeZone label="Houston, TX" timeZone="America/Chicago" />
      </CardContent>
    </Card>
  );
}
