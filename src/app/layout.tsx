import { CSPostHogProvider } from '@/providers/posthog-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BryanDuckworth.com',
  description: 'Perception is an illusion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* TODO: look into hydration error with theme */}
      <CSPostHogProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Star layers */}
            <div id="stars-layer-1" className="stars-layer"></div>
            <div id="stars-layer-2" className="stars-layer"></div>
            <div id="stars-layer-3" className="stars-layer"></div>

            {/* Background image layer */}
            <div id="background-image" className="background-layer"></div>

            {/* Main content */}
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
