import { CSPostHogProvider } from '@/providers/posthog-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Bryan Duckworth', template: '%s | Bryan Duckworth' },
  description: 'Full-stack engineer based in Tucson, AZ.',
  metadataBase: new URL('https://bryanduckworth.com'),
  openGraph: {
    title: 'Bryan Duckworth',
    description: 'Full-stack engineer based in Tucson, AZ.',
    url: 'https://bryanduckworth.com',
    siteName: 'BryanDuckworth.com',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bryan Duckworth',
    description: 'Full-stack engineer based in Tucson, AZ.',
  },
  alternates: { canonical: 'https://bryanduckworth.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bryan Duckworth',
  url: 'https://bryanduckworth.com',
  email: 'bryanduckworth@gmail.com',
  jobTitle: 'Full-Stack Engineer',
  sameAs: [
    'https://github.com/NewWorldOrderly',
    'https://www.linkedin.com/in/bryanduckworth/',
  ],
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
