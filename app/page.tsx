'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import { Polaroid } from '@/components/polaroid';
import { SlidingHandNote } from '@/components/sliding-hand-note';
import { DetailSheet } from '@/components/detail-sheet';
import { ElementContent, contentData } from '@/lib/content';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { Pin } from '@/components/pin';
import { useTheme } from 'next-themes';
import { useIsClient } from '@/hooks/use-is-client';

export default function Home() {
  const { theme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === 'dark';
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ElementContent | null>(null);

  const handleElementClick = (contentKey: string) => {
    setSelectedContent(contentData[contentKey]);
    setIsSheetOpen(true);
  };

  // Default to dark theme during server-side rendering to avoid hydration mismatch
  const bgColor = isClient ? (isDark ? 'bg-stone-950' : 'bg-amber-50') : 'bg-stone-950';
  const textColor = isClient ? (isDark ? 'text-stone-200' : 'text-stone-800') : 'text-stone-200';
  const subtextColor = isClient ? (isDark ? 'text-stone-400' : 'text-stone-600') : 'text-stone-400';
  const canvasBg = isClient ? (isDark ? 'bg-orange-900/90' : 'bg-orange-300/90') : 'bg-orange-900/90';
  const shadowColor = isClient ? (isDark ? 'shadow-black/20' : 'shadow-black/10') : 'shadow-black/20';

  return (
    // Page container
    <div className={`min-h-screen p-4 sm:p-8 ${bgColor}`}>
      {/* Header with Theme Toggle */}
      <div className="mb-6 sm:mb-8 flex justify-between items-center">
        <div>
          <h1 className={`text-xl sm:text-2xl font-semibold font-sans ${textColor}`}>Between Scenes</h1>
          <p className={`mt-1 font-serif ${subtextColor}`}>Issue #1</p>
        </div>
        
        <ThemeToggle />
      </div>

      {/* Main Canvas - Bulletin Board */}
      <div className={`
        w-full 
        h-[540px]
        sm:h-[600px]
        md:h-[calc(100vh-10rem)]
        ${canvasBg}
        rounded-lg 
        shadow-md 
        p-4 sm:p-8
        relative
        overflow-hidden
        before:absolute
        before:inset-0
        before:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_100%)]
        after:absolute
        after:inset-0
        after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_4px)]
        [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjAzIi8+PC9zdmc+)]
        ${shadowColor}
      `}>
        {/* Responsive Bulletin Board Content */}
        <div className="w-full h-full relative">
          {/* Polaroid card: Mulholland Drive - Top Left */}
          <div
            className="absolute top-[5%] left-[5%] w-[30%] max-w-[360px] min-w-[120px] cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 z-20"
            onClick={() => handleElementClick('mulholland-drive')}
          >
            <Pin color="#e11d48" />
            <Polaroid
              src="/mulholland-drive.jpg"
              alt="Mulholland Drive"
              width={400}
              rotateDirection="left"
            />
          </div>

          {/* Polaroid card: Between Scenes Website - Top Center */}
          <div 
            className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[40%] max-w-[400px] min-w-[150px] cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 z-20"
            onClick={() => handleElementClick('between-scenes-website')}
          >
            <Pin color="#3b82f6" />
            <Polaroid
              src="/between-scenes-website.jpg"
              alt="Between Scenes Website"
              width={520}
              rotateDirection="left"
            />
          </div>

          {/* Polaroid card: Metrograph Issue 1 - Top Right */}
          <div 
            className="absolute top-[5%] right-[5%] w-[25%] max-w-[280px] min-w-[100px] cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-1 z-20"
            onClick={() => handleElementClick('metrograph-issue-1')}
          >
            <Pin color="#eab308" />
            <Polaroid
              src="/metrograph-issue-1.jpg"
              alt="Metrograph Issue 1"
              width={240}
              rotateDirection="right"
            />
          </div>

          {/* iPhone mockup - Cinenerdle - Bottom Right */}
          <div 
            className="absolute bottom-[-8%] right-[-3%] w-[25%] max-w-[280px] min-w-[80px] transform -rotate-[15deg] cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-[12deg] z-20"
            onClick={() => handleElementClick('cinenerdle')}
          >
            <Pin color="#10b981" />
            <div className="w-full h-auto">
              <Image
                src="/cinenerdle2.png"
                alt="Cinenerdle iPhone App"
                width={320}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>

          {/* What is this button */}
          <div className="absolute bottom-4 left-4 z-30">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="secondary"
                  size="default"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">What am I looking at?</span>
                  <span className="sm:hidden">What is this?</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-[280px] sm:w-80 p-4" 
                align="start" 
                alignOffset={0} 
                side="top"
                sideOffset={10}
              >
                <div className="space-y-2">
                  <h3 className="font-medium">Between Scenes Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    This is a monthly newsletter by <a href="https://letterboxd.com/n0rbuu/" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">n0rbuu</a>. I wanted to try something different. Click on the items on the board to discover more!
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Special container for SlidingHandNote with overflow-visible */}
        <div className="absolute inset-0 overflow-x-visible overflow-y-hidden">
          <SlidingHandNote />
        </div>
      </div>

      {/* Detail Sheet */}
      <DetailSheet 
        isOpen={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        content={selectedContent}
      />
    </div>
  );
}