import { AiFillGithub } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function GitHubContributions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          Total Contributions
        </CardTitle>
        <CardDescription>git commit -m ":)"</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-2xl font-bold">
          <AiFillGithub className="inline mr-2 text-primary" />
          3,451
        </div>
      </CardContent>
    </Card>
  );
}
