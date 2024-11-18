import { Separator } from '@/components/ui/separator';

import { FaPizzaSlice } from 'react-icons/fa6';
import { GiTacos } from 'react-icons/gi';
import { IoBeer } from 'react-icons/io5';
import { MdOutlineRamenDining } from 'react-icons/md';
import { PiHamburger } from 'react-icons/pi';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function FavoriteFoods() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          Favorite Foods
        </CardTitle>
        <CardDescription>Mmmmmm...</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-3">
        <div className="pb-1 text-5xl">
          <FaPizzaSlice />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <PiHamburger />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <GiTacos />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <MdOutlineRamenDining />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <IoBeer />
        </div>
      </CardContent>
    </Card>
  );
}
