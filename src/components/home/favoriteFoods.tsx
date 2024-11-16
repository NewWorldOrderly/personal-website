import { FaPizzaSlice } from "react-icons/fa6";
import { GiTacos } from "react-icons/gi";
import { MdOutlineRamenDining } from "react-icons/md";
import { PiHamburgerLight } from "react-icons/pi";

import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export function FavoriteFoods() {
  return (
    <Card>
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
          <PiHamburgerLight />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <GiTacos />
        </div>
        <Separator />
        <div className="pb-1 text-5xl">
          <MdOutlineRamenDining />
        </div>
      </CardContent>
    </Card>
  );
}
