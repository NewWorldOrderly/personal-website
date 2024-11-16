import { Badge } from '@/components/ui/badge';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';

import { TechStackHover } from './techStackHover';

export function TechStack() {
  return (
    <Card className="border-accent border-2">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-base font-normal tracking-tight ">
            Tech Stack
          </CardTitle>
          <Badge className="from-accent to-primary animate-gradient bg-gradient-to-r bg-[length:200%_200%] text-white">
            10+ Years XP
          </Badge>
        </div>

        <CardDescription>Technologies I have experience with</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-nowrap space-x-2 overflow-scroll text-2xl">
          <TechStackHover
            icon="SiTypescript"
            href="https://www.typescriptlang.org/"
            title="Typescript"
            description="A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            experience="Experience since 2021"
          />
          <TechStackHover
            icon="SiJavascript"
            href="https://www.javascript.com/"
            title="JavaScript"
            description="A programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
            experience="Experience since 2015"
          />
          <TechStackHover
            icon="SiReact"
            href="https://reactjs.org/"
            title="React"
            description="A JavaScript library for building user interfaces."
            experience="Experience since 2019"
          />
          <TechStackHover
            icon="SiHtml5"
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            title="HTML5"
            description="The latest evolution of the standard that defines HTML."
            experience="Experience since 2015"
          />
          <TechStackHover
            icon="SiCss3"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            title="CSS3"
            description="The latest evolution of the Cascading Style Sheets language."
            experience="Experience since 2008"
          />
          <TechStackHover
            icon="SiTailwindcss"
            href="https://tailwindcss.com/"
            title="Tailwind CSS"
            description="A utility-first CSS framework for rapidly building custom designs."
            experience="Experience since 2012"
          />
          <TechStackHover
            icon="SiNodedotjs"
            href="https://nodejs.org/"
            title="Node.js"
            description="A JavaScript runtime built on Chrome's V8 JavaScript engine."
            experience="Experience since 2020"
          />
          <TechStackHover
            icon="SiNextdotjs"
            href="https://nextjs.org/"
            title="Next.js"
            description="The React framework for production."
            experience="Experience since 2021"
          />
          <TechStackHover
            icon="SiVercel"
            href="https://vercel.com/"
            title="Vercel"
            description="Develop. Preview. Ship."
            experience="Experience since 2021"
          />
          <TechStackHover
            icon="SiStorybook"
            href="https://storybook.js.org/"
            title="Storybook"
            description="The UI development environment you'll love to use."
            experience="Experience since 2022"
          />
          <TechStackHover
            icon="SiShopify"
            href="https://www.shopify.com/"
            title="Shopify"
            description="A commerce platform that allows anyone to easily sell online, at a retail location, and everywhere in between."
            experience="Experience since 2013"
          />
        </div>
      </CardContent>
    </Card>
  );
}
