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
        <CardTitle className="tracking-tight text-base font-normal">
          Favorite Foods
        </CardTitle>
        <CardDescription>Mmmmmm...</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-3">
        <div className="text-5xl pb-1">
          <FaPizzaSlice />
        </div>
        <Separator />
        <div className="text-5xl pb-1">
          <PiHamburgerLight />
        </div>
        <Separator />
        <div className="text-5xl pb-1">
          <GiTacos />
        </div>
        <Separator />
        <div className="text-5xl pb-1">
          <MdOutlineRamenDining />
        </div>
      </CardContent>
    </Card>
  );
}
