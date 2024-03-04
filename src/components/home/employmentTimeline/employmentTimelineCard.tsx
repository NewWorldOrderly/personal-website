import Image from "next/image";
import * as React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tight text-base font-normal">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <Image src={imageUrl} alt={title} width={100} height={100} />
            </a>
          ) : (
            <Image src={imageUrl} alt={title} width={100} height={100} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
