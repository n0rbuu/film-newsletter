'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import { Polaroid } from '@/components/polaroid';
import { SlidingHand } from '@/components/sliding-hand';
import { DetailSheet } from '@/components/detail-sheet';
import { ElementContent, contentData } from '@/lib/content';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ElementContent | null>(null);

  const handleElementClick = (contentKey: string) => {
    setSelectedContent(contentData[contentKey]);
    setIsSheetOpen(true);
  };

  return (
    // Page container
    <div className={`min-h-screen p-4 sm:p-12 ${isDark ? 'bg-stone-950' : 'bg-stone-100'}`}>
      {/* Header with Theme Toggle */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-semibold font-sans ${isDark ? 'text-stone-200' : 'text-stone-800'}`}>Between Scenes</h1>
          <p className={`mt-1 font-serif ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>Issue #1</p>
        </div>
        
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </div>

      {/* Main Canvas - Bulletin Board */}
      <div className={`
        w-full 
        h-[calc(100vh-12rem)] 
        ${isDark ? 'bg-amber-800/90' : 'bg-amber-100/90'} 
        rounded-lg 
        shadow-md 
        p-8
        relative
        overflow-hidden
        grid
        grid-cols-4
        grid-rows-3
        gap-4
        before:absolute
        before:inset-0
        before:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_100%)]
        after:absolute
        after:inset-0
        after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_4px)]
        [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjAzIi8+PC9zdmc+)]
        ${isDark ? 'shadow-black/20' : 'shadow-black/10'}
      `}>

        {/* Polaroid card: Mulholland Drive */}
        <div 
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 relative z-20"
          onClick={() => handleElementClick('mulholland-drive')}
        >
          <Polaroid
            src="/mulholland-drive.png"
            alt="Mulholland Drive"
            width={400}
            gridColumn={1}
            rotateDirection="left"
          />
        </div>

        {/* Polaroid card: Between Scenes Website */}
        <div 
          className="col-start-2 col-end-4 row-start-1 flex justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 relative z-20"
          onClick={() => handleElementClick('between-scenes-website')}
        >
          <Polaroid
            src="/between-scenes-website.jpg"
            alt="Between Scenes Website"
            width={520}
            gridColumn={1}
            rotateDirection="left"
          />
        </div>

        {/* Polaroid card: Metrograph Issue 1 */}
        <div 
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-1 relative z-20"
          onClick={() => handleElementClick('metrograph-issue-1')}
        >
          <Polaroid
            src="/metrograph-issue-1.jpg"
            alt="Metrograph Issue 1"
            width={240}
            gridColumn={4}
            rotateDirection="right"
          />
        </div>

        {/* Add the sliding hand animation */}
        <SlidingHand isDark={isDark} />

        {/* iPhone mockup - Cinenerdle */}
        <div 
          className="absolute bottom-0 right-0 transform -rotate-[15deg] translate-x-[20%] translate-y-[20%] z-20 cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-[12deg]"
          onClick={() => handleElementClick('cinenerdle')}
        >
          <Image
            src="/cinenerdle2.png"
            alt="Cinenerdle iPhone App"
            width={320}
            height={0}
            style={{ height: 'auto' }}
            priority
          />
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