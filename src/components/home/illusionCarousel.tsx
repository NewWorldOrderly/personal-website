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
        <div className="h-auto w-full">
          <Image
            src="/illusions/illusion001.jpg"
            alt="Optical illusion"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
      </CardContent>
    </Card>
  );
}
