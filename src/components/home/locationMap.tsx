'use client';

import { SlLocationPin } from 'react-icons/sl';

import dynamic from 'next/dynamic';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export function LocationMap() {
  const myData = [
    {
      lat: 32.25346,
      lng: -110.911789,
      altitude: 0.4,
      color: 'orange',
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          Current Location
        </CardTitle>
        <CardDescription>
          <a
            href="https://maps.app.goo.gl/qJCRfWYapDHo8Fad8"
            className="flex items-center"
          >
            <SlLocationPin className="text-primary mr-1" />
            Tucson, Arizona
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-min cursor-move">
          <Globe
            globeImageUrl={'earth-dark.jpg'}
            backgroundColor="#00000000"
            pointsData={myData}
            pointAltitude="altitude"
            pointColor="color"
            width={350}
            height={350}
            animateIn={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}
