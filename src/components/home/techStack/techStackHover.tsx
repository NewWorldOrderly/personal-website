'use client';

import React, { useEffect, useState } from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Skeleton } from '@/components/ui/skeleton';

type IconKeys = keyof typeof import('react-icons/si');
type TechStackHoverProps = {
  icon: IconKeys;
  href: string;
  title: string;
  description: string;
  experience: string;
};

export function TechStackHover({
  icon,
  href,
  title,
  description,
  experience,
}: TechStackHoverProps) {
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(
    null,
  );

  useEffect(() => {
    async function loadIcon() {
      const icons = await import('react-icons/si');
      if (icons[icon]) {
        setIconComponent(() => icons[icon]);
      } else {
        console.warn(`Icon "${icon}" not found in react-icons/si`);
      }
    }
    loadIcon();
  }, [icon]);

  return (
    <div className="flex grow">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {IconComponent ? (
              <IconComponent className="mt-2" />
            ) : (
              <Skeleton className="h-[24px] w-[24px] rounded-full" />
            )}
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex items-start justify-between space-x-4">
            <div className="text-4xl">
              {IconComponent ? <IconComponent /> : null}
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-sm">{description}</p>
              <div className="flex items-center pt-2">
                <span className="text-muted-foreground text-xs">
                  {experience}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
