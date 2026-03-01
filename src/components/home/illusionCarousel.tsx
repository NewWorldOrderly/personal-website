import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function IllusionCarousel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perception is an illusion</CardTitle>
        <CardDescription>Optical illusions found online</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 w-full">
          <Image
            src="/illusions/illusion001.jpg"
            alt="Optical illusion"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
}
