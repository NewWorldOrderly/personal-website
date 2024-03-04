import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

import { ModeToggle } from "./modeToggle";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <div className="flex flex-col sm:flex-row w-full mb-4">
      <div className="flex items-center justify-center sm:justify-start sm:pr-8 w-full md:w-auto">
        <div className="border-2 border-orange-600 rounded-full p-1">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://ca.slack-edge.com/TC3FUBR9A-U05G4CYTNE8-495606ea2d2a-512" />
            <AvatarFallback>:)</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div
        className="flex items-center justify-center sm:justify-start w-full mt-4 p-2 lg:p-0 lg:mt-0 "
        style={{ background: `url(/jazzy.png)`, backgroundSize: "cover" }}
      >
        <h1 className="text-3xl lg:text-5xl xl:text-8xl font-medium align-middle text-shadow">
          BryanDuckworth<span className="text-2xl xl:text-6xl">.com</span>
        </h1>
      </div>
      <div className="flex-auto w-full mt-6 lg:mt-0">
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
