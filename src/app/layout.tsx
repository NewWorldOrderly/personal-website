import { site } from '@/lib/site';
import { CSPostHogProvider } from '@/providers/posthog-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.profile.title,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.profile.title,
    url: site.url,
    siteName: site.domain,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: site.name,
    description: site.profile.title,
  },
  alternates: { canonical: site.url },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.profile.jobTitle,
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <CSPostHogProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              id="stars-layer-1"
              className="stars-layer"
              aria-hidden="true"
            ></div>
            <div
              id="stars-layer-2"
              className="stars-layer"
              aria-hidden="true"
            ></div>
            <div
              id="stars-layer-3"
              className="stars-layer"
              aria-hidden="true"
            ></div>

            <div
              id="background-image"
              className="background-layer"
              aria-hidden="true"
            ></div>

            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
