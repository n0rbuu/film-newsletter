'use client';

import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useIsClient } from '@/hooks/use-is-client';

export function SlidingHandNote() {
  const { theme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === 'dark';
  const [animationState, setAnimationState] = useState<'hidden' | 'pushing' | 'hand-exits' | 'complete'>('hidden');
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Start animation after 4 seconds
    const timer1 = setTimeout(() => {
      setAnimationState('pushing');
    }, 4000);
    
    // Hand exits - increased delay for slower animation
    const timer2 = setTimeout(() => {
      setAnimationState('hand-exits');
    }, 5000); 
    
    // Animation complete
    const timer3 = setTimeout(() => {
      setAnimationState('complete');
    }, 6000); 
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Dynamically calculate positions
  const getHandPosition = () => {
    if (!containerRef.current || !handRef.current) {
      return '-9999px';
    }
    
    const handWidth = handRef.current.offsetWidth;
    
    switch(animationState) {
      case 'hidden': 
        // Adjust for mobile scaling
        return isMobile 
          ? `-${handWidth * 2 + 100}px` 
          : `-${handWidth + 50}px`; // Off-screen left
      
      case 'pushing': {
        if (!textRef.current) return '0px';
        const textWidth = textRef.current.offsetWidth;
        // Position hand to the left of text center
        return `calc(50% - ${textWidth/2}px - ${handWidth}px)`;
      }
      
      case 'hand-exits': 
      case 'complete': 
        // Adjust for mobile scaling
        return isMobile 
          ? `-${handWidth * 2 + 100}px` 
          : `-${handWidth + 50}px`; // Off-screen left
        
      default: 
        return `-${handWidth + 50}px`;
    }
  };
  
  // Position for the text
  const getTextPosition = () => {
    if (!containerRef.current || !textRef.current) {
      return '-9999px';
    }
    
    const textWidth = textRef.current.offsetWidth;
    
    switch(animationState) {
      case 'hidden': 
        return `-${textWidth + 50}px`; // Off-screen left
        
      case 'pushing': 
      case 'hand-exits':
      case 'complete': 
        return '50%'; // Center
        
      default: 
        return `-${textWidth + 50}px`;
    }
  };
  
  // Don't render anything during server-side rendering
  if (!isClient) return null;
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {/* Wrapper div with scaling for mobile */}
      <div className="absolute inset-0 scale-50 sm:scale-100 origin-center">
        {/* Text that gets pushed */}
        <div 
          ref={textRef}
          className="absolute top-1/2"
          style={{ 
            left: getTextPosition(),
            transform: animationState !== 'hidden' 
              ? 'translate(-50%, -50%)' 
              : 'translate(0, -50%)',
            transition: 'all 500ms cubic-bezier(0.34, 0.2, 0.64, 1)', // Faster than hand, accelerates toward end
            zIndex: 50
          }}
        >
          {/* Handwritten Note Design */}
          <div className={`
            relative
            px-8 py-6
            ${isDark ? 'bg-blue-50' : 'bg-blue-50'}
            whitespace-nowrap
            shadow-md
            rotate-[-1deg]
            
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_9%,rgba(0,0,255,0.1)_10%,rgba(0,0,0,0)_11%,rgba(0,0,0,0)_19%,rgba(0,0,255,0.1)_20%,rgba(0,0,0,0)_21%,rgba(0,0,0,0)_29%,rgba(0,0,255,0.1)_30%,rgba(0,0,0,0)_31%,rgba(0,0,0,0)_39%,rgba(0,0,255,0.1)_40%,rgba(0,0,0,0)_41%,rgba(0,0,0,0)_49%,rgba(0,0,255,0.1)_50%,rgba(0,0,0,0)_51%,rgba(0,0,0,0)_59%,rgba(0,0,255,0.1)_60%,rgba(0,0,0,0)_61%,rgba(0,0,0,0)_69%,rgba(0,0,255,0.1)_70%,rgba(0,0,0,0)_71%,rgba(0,0,0,0)_79%,rgba(0,0,255,0.1)_80%,rgba(0,0,0,0)_81%,rgba(0,0,0,0)_89%,rgba(0,0,255,0.1)_90%,rgba(0,0,0,0)_91%,rgba(0,0,0,0)_100%)]
            before:z-[-1]
            
            after:content-['']
            after:absolute
            after:top-[-5px]
            after:left-0
            after:right-0
            after:h-[5px]
            after:bg-[repeating-linear-gradient(90deg,transparent,transparent_5px,#f8fafc_5px,#f8fafc_10px)]
            after:opacity-70
            
            border-b border-l border-r border-blue-200
          `}>
            <div className="absolute top-[-10px] left-[20px] w-[30px] h-[15px] bg-amber-300/80 rounded-sm shadow-sm transform rotate-[5deg] z-10"></div>
            <div className="absolute top-[-10px] right-[40px] w-[30px] h-[15px] bg-amber-300/80 rounded-sm shadow-sm transform rotate-[-3deg] z-10"></div>
            <span className="text-4xl font-handwriting text-blue-900">
              Here's what I was upto in February
            </span>
          </div>
        </div>
        
        {/* The hand */}
        <div 
          ref={handRef}
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ 
            left: getHandPosition(),
            transition: 'all 500ms cubic-bezier(0.25, 0.1, 0.5, 1)', // Slower, accelerates toward end
            zIndex: 50
          }}
        >
          <img
            src={isDark ? "/the-hand.svg" : "/the-hand-light.svg"}
            alt="Hand pointer"
            style={{ 
              height: '200px',
              width: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
} 