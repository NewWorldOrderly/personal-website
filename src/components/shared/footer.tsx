export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex">
      <p className="grow text-muted-foreground">
        This website was built using Next.js, Tailwind CSS, shadcn/ui and
        Vercel.
      </p>
      <p>© {currentYear} Ballers Anonymous. All rights reserved.</p>
    </div>
  );
}
