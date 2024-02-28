import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaRegFilePdf } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export function EmploymentTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          Employment History
        </CardTitle>
        <CardDescription>
          {" "}
          <a href="Bryan Duckworth - Resume.pdf" className="flex items-center">
            <FaRegFilePdf className="inline mr-2" />
            Download resume
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="whitespace-nowrap rounded-md border">
          <div className="flex space-x-4 p-4">
            <div>Arrive Recommerce</div>
            <div>Parachute Home</div>
            <div>Toyota of Australia</div>
            <div>Ellie.com</div>
            <div>NCLA</div>
            <div>DoStuff Media</div>
            <div>Echo & Echoplex</div>
            <div>30 Seconds to Mars</div>
            <div>YouTellConcerts.com</div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
