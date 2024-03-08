import { DaysAlive } from "@/components/home/daysAlive";
import { EmploymentTimeline } from "@/components/home/employmentTimeline/employmentTimeline";
import { FavoriteFoods } from "@/components/home/favoriteFoods";
import { GitHubContributions } from "@/components/home/githubContributions";
import { IllusionCarousel } from "@/components/home/illusionCarousel";
import { LocationMap } from "@/components/home/locationMap";
import { Quacks } from "@/components/home/quacks/quacks";
import { TechStack } from "@/components/home/techStack/techStack";
import { WorldClock } from "@/components/home/worldClock/worldClock";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return (
    <main className="flex max-w-screen min-h-screen flex-col items-start justify-start p-8 lg:p-24">
      <Header />
      <div className="mt-4 theme-orange w-full overflow-hidden">
        <div className="grid md:grids-col-2 md:gap-4 lg:grid-cols-12 xl:grid-cols-14 xl:gap-4">
          <div className="space-y-4 lg:col-span-4 xl:col-span-7">
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 xl:grid-rows-1">
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
              <div className="xl:col-span-2 xl:row-span-1">
                <LocationMap />
              </div>
              <div className="xl:col-span-1 xl:row-span-1">
                <WorldClock />
              </div>
              <div className="xl:col-span-1 xl:row-span-1">
                <FavoriteFoods />
              </div>
              <div className="xl:col-span-4">
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
                        className="min-h-[42px] h-[42px] w-full bg-muted"
                        placeholder="Type your message here..."
                      />
                      <Button className="disabled">Send</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-4 xl:col-span-5">
            <div className="xl:col-span-1">
              <IllusionCarousel />
            </div>
            <div className="xl:col-span-1">
              <Quacks />
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-accent" />
        <Footer />
      </div>
    </main>
  );
}
