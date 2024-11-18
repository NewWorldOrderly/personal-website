import { Separator } from '@/components/ui/separator';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { TimeZone } from './timeZone';

export function WorldClock() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          Time Zones
        </CardTitle>
        <CardDescription>What is time?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-xs">
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
        <Separator />
        <TimeZone label="New York, NY" timeZone="America/New_York" />
      </CardContent>
    </Card>
  );
}
