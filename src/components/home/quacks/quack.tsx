import { GiDuck } from 'react-icons/gi';

import { Separator } from '@/components/ui/separator';

type QuackProps = {
  message: string;
  timestamp?: string;
};

export function Quack({ message, timestamp }: Readonly<QuackProps>) {
  if (!timestamp) return '';

  const date = new Date(timestamp);
  const formatTime = (time: number | Date | undefined) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    }).format(time);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <GiDuck className="mr-2 mt-1" />
        <p>{message}</p>
      </div>
      <div className="text-muted-foreground text-xs">{formatTime(date)}</div>
      <Separator />
    </div>
  );
}
