'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md text-center space-y-8">
        {/* 404 Display */}
        <div className="space-y-4">
          <div className="relative h-24 flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                404
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Looks like this page wandered off into the digital void. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link href="/" className="flex-1">
            <Button 
              size="lg"
              className="w-full gap-2 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            size={"lg"}
            onClick={() => window.history.back()}
            className="flex-1 px-6 py-3 rounded-md border border-border hover:bg-muted/50 transition-colors font-medium text-black bg-zinc-300 inline-flex items-center justify-center gap-2 group"
          >
            Go Back
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Try these:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/">
              <button className="px-3 py-1.5 text-sm rounded-md bg-muted/50 hover:bg-muted transition-colors text-foreground font-medium">
                Home
              </button>
            </Link>
            <a href="mailto:support@example.com">
              <button className="px-3 py-1.5 text-sm rounded-md bg-muted/50 hover:bg-muted transition-colors text-foreground font-medium">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
