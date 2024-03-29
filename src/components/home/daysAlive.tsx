import { FaEarthAmericas } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function DaysAlive() {
  const currentDate = new Date();
  const startDate = new Date("1982-12-12");
  const differenceInMilliseconds = Number(currentDate) - Number(startDate);
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          Total Days on Earth
        </CardTitle>
        <CardDescription>Feels good to be alive</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-2xl font-bold">
          <FaEarthAmericas className="inline mr-2 text-primary" />
          {differenceInDays.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
}
