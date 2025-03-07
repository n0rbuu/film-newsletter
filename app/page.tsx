'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import { Polaroid } from '@/components/polaroid';
import { SlidingHandNote } from '@/components/sliding-hand-note';
import { DetailSheet } from '@/components/detail-sheet';
import { ElementContent, contentData } from '@/lib/content';
import { Button } from "@/components/ui/button";
import { Pin } from '@/components/pin';
import { useTheme } from 'next-themes';
import { useIsClient } from '@/hooks/use-is-client';
import { PortraitStack } from '@/components/portrait-stack';

export default function Home() {
  const { theme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === 'dark';
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ElementContent | null>(null);
  const [elementsVisible, setElementsVisible] = useState(Array(6).fill(false));

  const handleElementClick = (contentKey: string) => {
    setSelectedContent(contentData[contentKey]);
    setIsSheetOpen(true);
  };

  // Default to light theme during server-side rendering to avoid hydration mismatch
  const bgColor = isClient ? (isDark ? 'bg-stone-950' : 'bg-amber-50') : 'bg-amber-50';
  const textColor = isClient ? (isDark ? 'text-stone-200' : 'text-stone-800') : 'text-stone-800';
  const subtextColor = isClient ? (isDark ? 'text-stone-400' : 'text-stone-600') : 'text-stone-600';
  const canvasBg = isClient ? (isDark ? 'bg-orange-900/90' : 'bg-orange-300/90') : 'bg-orange-300/90';
  const shadowColor = isClient ? (isDark ? 'shadow-black/20' : 'shadow-black/10') : 'shadow-black/10';
  const buttonColor = isClient ? (isDark ? 'bg-orange-800' : 'bg-orange-100') : 'bg-orange-100';

  // Use an effect to stagger the appearance of elements
  useEffect(() => {
    if (!isClient) return;
    
    // Define decreasing intervals: 600, 500, 400, 300, 300, 300
    const intervals = [600, 500, 300, 300, 200, 100];
    
    // Calculate cumulative delays
    const delays = intervals.reduce((acc, interval, i) => {
      if (i === 0) return [0];
      return [...acc, acc[i-1] + intervals[i-1]];
    }, [0]);
    
    // Stagger the appearance of elements with decreasing intervals
    const timers = elementsVisible.map((_, index) => {
      return setTimeout(() => {
        setElementsVisible(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 2000 + delays[index]); // 2000ms initial delay, then decreasing intervals
    });
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isClient, elementsVisible.length]);

  return (
    // Page container
    <div className={`min-h-screen p-4 sm:p-8 ${bgColor}`}>
      {/* Header with Theme Toggle */}
      <div className="flex justify-between items-start mb-8">
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
            className={`absolute top-[5%] left-[3%] w-[30%] max-w-[360px] min-w-[120px] cursor-pointer transition-all duration-1000 hover:scale-105 hover:rotate-1 z-20 ${elementsVisible[0] ? 'opacity-100' : 'opacity-0'}`}
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
            className={`absolute top-[0%] left-[50%] transform -translate-x-1/2 w-[40%] max-w-[400px] min-w-[150px] cursor-pointer transition-all duration-700 hover:scale-105 hover:rotate-1 z-20 ${elementsVisible[1] ? 'opacity-100' : 'opacity-0'}`}
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
            className={`absolute top-[5%] right-[5%] w-[25%] max-w-[280px] min-w-[100px] cursor-pointer transition-all duration-500 hover:scale-105 hover:-rotate-1 z-20 ${elementsVisible[2] ? 'opacity-100' : 'opacity-0'}`}
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
            className={`absolute bottom-[-16%] right-[-3%] w-[25%] max-w-[280px] min-w-[80px] transform -rotate-[15deg] cursor-pointer transition-all duration-500 hover:scale-105 hover:-rotate-[12deg] z-20 ${elementsVisible[3] ? 'opacity-100' : 'opacity-0'}`}
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

          {/* Directors Portrait Stack - Bottom Left */}
          <div 
            className={`absolute bottom-[15%] left-[10%] transform rotate-[5deg] transition-all duration-500 hover:scale-105 hover:rotate-[8deg] z-20 ${elementsVisible[4] ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => handleElementClick('directors-stack')}
          >
            <div className="relative">
              {/* Custom positioned pin for portrait stack only */}
              <div className="absolute -pt-[10] left-[20%] z-30">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#9333ea" />
                  <circle cx="12" cy="12" r="6" fill="#ffffff" fillOpacity="0.3" />
                </svg>
              </div>
              <PortraitStack />
            </div>
          </div>

          {/* Polaroid card: Playtime - Bottom Center */}
          <div 
            className={`absolute bottom-[0%] left-[55%] transform -translate-x-1/2 w-[30%] max-w-[220px] min-w-[120px] cursor-pointer transition-all duration-500 hover:scale-105 hover:-rotate-1 z-20 ${elementsVisible[5] ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => handleElementClick('playtime')}
          >
            <Pin color="#f97316" />
            <Polaroid
              src="/playtime.jpg"
              alt="Playtime"
              width={400}
              rotateDirection="right"
            />
          </div>

          {/* What is this button - Not animated */}
          <div className="absolute bottom-4 left-4 z-30">
            <Button 
              variant="secondary"
              size="default"
              className={buttonColor}
              onClick={() => handleElementClick('about-page')}
            >
              What am I looking at?
            </Button>
          </div>
        </div>
        
        {/* Special container for SlidingHandNote with overflow-visible - Not animated */}
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