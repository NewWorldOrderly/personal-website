import { DaysAlive } from "@/components/home/daysAlive";
import { EmploymentTimeline } from "@/components/home/employmentTimeline/employmentTimeline";
import { GitHubContributions } from "@/components/home/githubContributions";
import { IllusionCarousel } from "@/components/home/illusionCarousel";
import { LocationMap } from "@/components/home/locationMap";
import { TechStack } from "@/components/home/techStack/techStack";
import { WorldClock } from "@/components/home/worldClock/worldClock";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return (
    <main className="flex max-w-screen min-h-screen flex-col items-start justify-start p-8 lg:p-24">
      <Header />
      <div className="mt-4 theme-orange w-full overflow-hidden">
        <div className="grid md:grids-col-2 md:gap-4 lg:grid-cols-12 xl:grid-cols-14 xl:gap-4">
          <div className="space-y-4 lg:col-span-4 xl:col-span-7">
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-4">
              <div className="xl:col-span-2">
                <TechStack />
              </div>
              <div className="xl:col-span-1">
                <DaysAlive />
              </div>
              <div className="xl:col-span-1">
                <GitHubContributions />
              </div>
              <div className="xl:col-span-4">
                <EmploymentTimeline />
              </div>
              <div className="xl:col-span-2">
                <LocationMap />
              </div>
              <div className="xl:col-span-2">
                <WorldClock />
              </div>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-4 xl:col-span-5">
            <IllusionCarousel />
          </div>
        </div>
        <div className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>ChillChat.Online</CardTitle>
              <CardDescription>
                The most bodacious LLM on this side of the web
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Textarea
                  className="min-h-[42px] h-[42px] w-full"
                  placeholder="Type your message here..."
                />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
