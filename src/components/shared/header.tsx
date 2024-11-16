import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { ModeToggle } from './modeToggle';

export function Header() {
  return (
    <div className="mb-4 flex w-full flex-col sm:flex-row">
      <div className="flex w-full items-center justify-center sm:justify-start sm:pr-8 md:w-auto">
        <div className="rounded-full border-2 border-orange-600 p-1">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://ca.slack-edge.com/TC3FUBR9A-U05G4CYTNE8-495606ea2d2a-512" />
            <AvatarFallback>:)</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div
        className="mt-4 flex w-full items-center justify-center p-2 sm:justify-start lg:mt-0 lg:p-0 "
        style={{ background: `url(/jazzy.png)`, backgroundSize: 'cover' }}
      >
        <h1 className="text-shadow align-middle text-3xl font-medium lg:text-5xl xl:text-8xl">
          BryanDuckworth<span className="text-2xl xl:text-6xl">.com</span>
        </h1>
      </div>
      <div className="mt-6 w-full flex-auto lg:mt-0">
        <div className="flex flex-col items-center lg:items-end">
          <ModeToggle />
          <a href="https://github.com/NewWorldOrderly" className="mt-2">
            <span className="pr-2">GitHub</span>
            <AiFillGithub className="inline" />
          </a>
          <a
            href="https://www.linkedin.com/in/bryanduckworth/"
            className="mt-2"
          >
            <span className="pr-2">LinkedIn</span>
            <AiOutlineLinkedin className="inline" />
          </a>
          <a
            href="mailto:bryanduckworth@gmail.com"
            className="mt-2 lg:hidden xl:block"
          >
            <span className="pr-2">bryanduckworth@gmail.com</span>
            <MdOutlineEmail className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
