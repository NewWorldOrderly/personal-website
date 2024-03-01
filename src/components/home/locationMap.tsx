"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import dynamic from "next/dynamic";

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export function LocationMap() {
  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.4,
      color: "#00ff33",
    },
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: 0.4,
      color: "#ff0000",
    },
    {
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: 0.4,
      color: "#ffff00",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          Current Location
        </CardTitle>
        <CardDescription>Previous locations in purple</CardDescription>
      </CardHeader>
      <CardContent>
        {" "}
        <div className="cursor-move w-auto">
          <Globe
            globeImageUrl={"earth-dark.jpg"}
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
