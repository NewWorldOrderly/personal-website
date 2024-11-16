import { AiFillGithub } from 'react-icons/ai';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function GitHubContributions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          Total Contributions
        </CardTitle>
        <CardDescription>git commit -m &quot;:)&quot;</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-2xl font-bold">
          <AiFillGithub className="text-primary mr-2 inline" />
          3,451
        </div>
      </CardContent>
    </Card>
  );
}
