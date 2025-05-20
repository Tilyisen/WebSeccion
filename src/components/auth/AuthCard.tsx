import type React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  showImage?: boolean;
}

export function AuthCard({ title, description, children, footerContent, showImage = true }: AuthCardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center text-4xl font-bold text-primary hover:opacity-90 transition-opacity">
          <Lock size={40} className="mr-3" />
          AuthZen
        </Link>
      </div>
      <Card className="w-full max-w-4xl shadow-2xl overflow-hidden md:grid md:grid-cols-2 rounded-xl">
        {showImage && (
          <div className="relative hidden md:flex items-center justify-center bg-primary/10 p-8 border-r">
            <Image 
              src="https://placehold.co/600x800.png" 
              alt="Auth Illustration" 
              width={600} 
              height={800} 
              className="rounded-lg object-cover"
              data-ai-hint="abstract security"
            />
          </div>
        )}
        <div className={`p-6 sm:p-8 ${showImage ? '' : 'md:col-span-2'}`}>
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-semibold tracking-tight">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">{description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {children}
          </CardContent>
          {footerContent && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {footerContent}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
