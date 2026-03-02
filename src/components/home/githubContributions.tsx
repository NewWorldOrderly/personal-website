import { getContributions } from '@/lib/github';

import { FaGithub } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export async function GitHubContributions() {
  const contributions = await getContributions();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          GitHub Activity
        </CardTitle>
        <CardDescription>
          {contributions > 0
            ? `${new Date().getFullYear()} contributions`
            : 'Connect GitHub token to show activity'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-2xl font-bold">
          <FaGithub className="text-primary mr-2 inline" aria-hidden="true" />
          {contributions > 0 ? contributions.toLocaleString() : '—'}
        </div>
      </CardContent>
    </Card>
  );
}
