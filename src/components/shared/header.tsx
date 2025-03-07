import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import HyperText from '../ui/hyper-text';
import Marquee from '../ui/marquee';

export function Header() {
  return (
    <div className="">
      <div className="flex w-full flex-col flex-wrap gap-4 lg:flex-row">
        <div className="flex w-full items-center justify-center lg:w-auto lg:justify-start">
          <div className="border-primary rounded-full border-2 p-1">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://ca.slack-edge.com/TC3FUBR9A-U05G4CYTNE8-495606ea2d2a-512" />
              <AvatarFallback>:)</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-auto lg:justify-start">
          <h1 className="text-center align-middle text-2xl font-medium sm:text-3xl lg:text-7xl xl:text-8xl">
            <HyperText
              className="text-muted-foreground"
              text="BryanDuckworth.com"
            />
          </h1>
        </div>
        <div className="mx-auto w-auto lg:flex lg:justify-center lg:space-x-4 2xl:block 2xl:grow 2xl:content-end 2xl:justify-end">
          <div className="flex justify-between lg:space-x-4 2xl:justify-end">
            <a href="https://github.com/NewWorldOrderly" className="">
              <span className="pr-2">GitHub</span>
              <AiFillGithub className="inline" />
            </a>
            <a href="https://www.linkedin.com/in/bryanduckworth/" className="">
              <span className="pr-2">LinkedIn</span>
              <AiOutlineLinkedin className="inline" />
            </a>
          </div>
          <div className="lg:text-right">
            <a
              href="mailto:bryanduckworth@gmail.com"
              className="col-span-2 lg:col-span-1"
            >
              <span className="pr-2">bryanduckworth@gmail.com</span>
              <MdOutlineEmail className="inline" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative my-4 w-full overflow-hidden text-sm lg:text-base">
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="bg-highlight border-accent text-primary-foreground rounded-lg border-2 px-2 py-1">
            <span className="font-bold">Breaking:</span> Recently Accepted an Offer at SKIMS!
          </div>
          <div className="bg-secondary border-primary rounded-lg border-2 px-2 py-1">
            Family Man: Happily Married Father of Two
          </div>
          <div className="bg-secondary border-primary rounded-lg border-2 px-2 py-1">
            Born & Raised: Originally From Houston, TX
          </div>
          <div className="bg-secondary border-primary rounded-lg border-2 px-2 py-1">
            Hobbies: Cooking / Sports / Hiking / Video Games / Road Trips
          </div>
          <div className="bg-secondary border-primary rounded-lg border-2 px-2 py-1">
            Music: Favorite Band is the Gorillaz
          </div>
          <div className="bg-secondary border-primary rounded-lg border-2 px-2 py-1">
            Sports: Rooting For the Los Angeles Rams!
          </div>
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent"></div>
      </div>
    </div>
  );
}
