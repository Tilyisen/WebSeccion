import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'AuthZen - Secure Authentication',
  description: 'User registration and login system by AuthZen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body className={cn('antialiased')} suppressHydrationWarning={true}> {/* The font-family is applied via globals.css using the CSS variables */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
