import { FaGithub } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function GitHubContributions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          GitHub Activity
        </CardTitle>
        <CardDescription>git commit -m &quot;:)&quot;</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-2xl font-bold">
          <FaGithub className="text-primary mr-2 inline" />
          3,451
        </div>
      </CardContent>
    </Card>
  );
}
