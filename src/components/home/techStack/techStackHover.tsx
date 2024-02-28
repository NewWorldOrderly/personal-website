"use client";

import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/si";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

type TechStackHoverProps = {
  icon: keyof typeof Icons;
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
    null
  );

  useEffect(() => {
    async function loadIcon() {
      const { [icon]: ImportedIcon } = await import("react-icons/si");
      setIconComponent(() => ImportedIcon);
    }
    loadIcon();
  }, [icon]);

  return (
    <div className="flex grow">
      <HoverCard>
        <HoverCardTrigger>
          {IconComponent ? (
            <a href={href}>
              <IconComponent className="mt-2" />
            </a>
          ) : (
            <Skeleton className="w-[24px] h-[24px] rounded-full" />
          )}
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4 items-start">
            <div className="text-4xl">
              {IconComponent ? <IconComponent /> : null}
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-sm">{description}</p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
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
