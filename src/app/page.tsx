import { ChillChat } from '@/components/home/chillchat/chillchat';
import { DaysAlive } from '@/components/home/daysAlive';
import { EmploymentTimeline } from '@/components/home/employmentTimeline/employmentTimeline';
import { FavoriteFoods } from '@/components/home/favoriteFoods';
import { GitHubContributions } from '@/components/home/githubContributions';
import { IllusionCarousel } from '@/components/home/illusionCarousel';
import { LocationMap } from '@/components/home/locationMap';
import { NowSection } from '@/components/home/nowSection';
import { Quacks } from '@/components/home/quacks/quacks';
import { TechStack } from '@/components/home/techStack/techStack';
import { WorldClock } from '@/components/home/worldClock/worldClock';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { ModeToggle } from '@/components/shared/modeToggle';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="container relative mx-auto mt-6 overflow-hidden">
      <div className="absolute right-8">
        <ModeToggle />
      </div>
      <Header />
      <div className="mb-32 w-full lg:mb-72 2xl:mb-96">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-7">
            <div className="mb-4 flex flex-col flex-wrap items-stretch gap-4 lg:flex-row">
              <div className="w-full xl:w-2/5 2xl:w-1/2">
                <TechStack />
              </div>
              <div className="grow">
                <DaysAlive />
              </div>
              <div className="grow">
                <GitHubContributions />
              </div>
            </div>
            <div className="mb-4">
              <EmploymentTimeline />
            </div>
            <div className="mb-4 flex flex-wrap gap-4 lg:items-stretch">
              <div className="w-full 2xl:w-1/2">
                <LocationMap />
              </div>
              <div className="flex grow flex-row gap-4">
                <div className="grow">
                  <WorldClock />
                </div>
                <div className="w-2/5">
                  <FavoriteFoods />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <NowSection />
            </div>
            <div>
              <ChillChat />
            </div>
          </div>
          <div className="col-span-5 flex flex-col gap-4">
            <IllusionCarousel />
            <Quacks />
          </div>
        </div>
        <Separator className="bg-accent my-8" />
        <Footer />
      </div>
    </main>
  );
}
