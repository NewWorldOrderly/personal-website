import { FaRegFilePdf } from 'react-icons/fa';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import { EmploymentTimelineCard } from './employmentTimelineCard';
import { EmploymentTimelineSpacer } from './employmentTimelineSpacer';

export function EmploymentTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">
          Employment History
        </CardTitle>
        <CardDescription>
          <a href="Bryan Duckworth - Resume.pdf" className="flex items-center">
            <FaRegFilePdf className="text-primary mr-2 inline" />
            Download resume
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="bg-secondary whitespace-nowrap rounded-md border">
          <div className="flex space-x-4 p-4">
            <EmploymentTimelineCard
              title="Arrive Recommerce"
              description="Jul 2023 - Present"
              url="https://www.thearriveplatform.com/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="Parachute Home"
              description="Jun 2015 - May 2023"
              url="https://www.parachutehome.com/"
              imageUrl="/employers/parachutehome.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="Toyota of Australia"
              description="May 2014 - Dec 2014"
              url="https://www.toyota.com.au/"
              imageUrl="/employers/toyota.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="Ellie.com"
              description="Feb 2013 - Aug 2013"
              url="https://www.ellie.com/"
              imageUrl="/employers/ellie.webp"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="NCLA"
              description="Jan 2013 - Dec 2016"
              url="https://www.shopncla.com/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="DoStuff Media"
              description="Jun 2012 - Jun 2015"
              url="https://dostuffmedia.com/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="Echo & Echoplex"
              description="Aug 2010 - Feb 2013"
              url="https://www.spacelandpresents.com/venues/echoplex/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="30 Seconds to Mars"
              description="Jul 2009 - Jan 2012"
              url="https://www.thirtysecondstomars.com/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
            <EmploymentTimelineSpacer />
            <EmploymentTimelineCard
              title="YouTellConcerts.com"
              description="April 2008 - Jun 2011"
              url="https://www.youtellconcerts.com/"
              imageUrl="/employers/arriverecommerce.jpeg"
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
