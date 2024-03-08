"use client";

import dynamic from "next/dynamic";
import { SlLocationPin } from "react-icons/sl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  },
);

export function LocationMap() {
  const myData = [
    {
      lat: 32.25346,
      lng: -110.911789,
      altitude: 0.4,
      color: "orange",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          Current Location
        </CardTitle>
        <CardDescription>
          <a
            href="https://maps.app.goo.gl/qJCRfWYapDHo8Fad8"
            className="flex items-center"
          >
            <SlLocationPin className="mr-1 text-primary" />
            Tucson, Arizona
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="cursor-move w-min">
          <Globe
            globeImageUrl={"earth-dark.jpg"}
            backgroundColor="#00000000"
            pointsData={myData}
            pointAltitude="altitude"
            pointColor="color"
            width={300}
            height={300}
          />
        </div>
      </CardContent>
    </Card>
  );
}
