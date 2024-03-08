import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Quack } from "./quack";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";

export function Quacks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center tracking-tight text-2xl font-normal">
          <div className="border-2 border-primary rounded-full p-1 mr-2">
            <Avatar>
              <AvatarImage src="https://ca.slack-edge.com/TC3FUBR9A-U05G4CYTNE8-495606ea2d2a-512" />
              <AvatarFallback>:)</AvatarFallback>
            </Avatar>
          </div>
          Quacks
        </CardTitle>
        <CardDescription>Momentary lapse of reason</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Quack
          message="Currently working to make this a dynamic feed with a database."
          timestamp={"2024-03-07T16:43:38-07:00"}
        />
        <Quack
          message={`"He has the most who is most content with the least." - Diogenes`}
          timestamp={"2024-03-07T16:42:05-07:00"}
        />
        <Quack
          message="Instead of just sharing 'tweets'  what if I create my own quacks?"
          timestamp={"2024-03-07T16:41:52-07:00"}
        />
      </CardContent>
    </Card>
  );
}
