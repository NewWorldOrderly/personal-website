import { site } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-between gap-3 text-center lg:flex-row">
      <p className="text-muted-foreground text-wrap text-xs">
        This site was constructed using{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        ,{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          Tailwind CSS
        </a>
        ,{' '}
        <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
          shadcn/ui
        </a>
        ,{' '}
        <a
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
          rel="noreferrer"
        >
          react-icons
        </a>
        ,{' '}
        <a href="https://vercel.com/home" target="_blank" rel="noreferrer">
          Vercel
        </a>{' '}
        and{' '}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <p className="text-xs">
        © {currentYear}{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          {site.brand}
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}
