export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col lg:flex-row gap-3 text-center justify-between">
      <p className="text-muted-foreground text-xs text-wrap">
        This site was constructed using{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          Next.js
        </a>
        ,{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          Tailwind CSS
        </a>
        ,{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          shadcn/ui
        </a>{' '}
        and{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          Vercel
        </a>
        .
      </p>
      <p className="text-xs">
        © {currentYear}{' '}
        <a href="https://ballersanonymo.us" target="_blank">
          Ballers Anonymous
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}
