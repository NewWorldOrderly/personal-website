import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';

type EmploymentTimelineCardProps = {
  title: string;
  description: string;
  url?: string;
  imageUrl: string;
};

export function EmploymentTimelineCard({
  title,
  description,
  url,
  imageUrl,
}: Readonly<EmploymentTimelineCardProps>) {
  return (
    <Card className="border-primary ml-4">
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <Image
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="border"
              />
            </a>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              width={100}
              height={100}
              className="border"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
