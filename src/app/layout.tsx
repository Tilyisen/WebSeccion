import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'DarkAISchool - Plataforma de Aprendizaje con IA',
  description: 'Sistema de registro e inicio de sesión para DarkAISchool',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', GeistSans.variable, GeistMono.variable)}>
      <body className={cn('antialiased')} suppressHydrationWarning={true}> {/* The font-family is applied via globals.css using the CSS variables */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
