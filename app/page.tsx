'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

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
        before:absolute
        before:inset-0
        before:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_100%)]
        after:absolute
        after:inset-0
        after:bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_4px)]
        [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjAzIi8+PC9zdmc+)]
        ${isDark ? 'shadow-black/20' : 'shadow-black/10'}
      `}>
        <div className="relative inline-block bg-white p-3 shadow-md transform rotate-[-2deg]">
          <Image
            src="/mulholland-drive.png"
            alt="Mulholland Drive"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}