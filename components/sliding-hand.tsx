'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface SlidingHandProps {
  isDark: boolean;
}

export function SlidingHand({ isDark }: SlidingHandProps) {
  const [animationState, setAnimationState] = useState<'hidden' | 'pushing' | 'hand-exits' | 'complete'>('hidden');
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
        return `-${handWidth + 50}px`; // Off-screen left
      
      case 'pushing': {
        if (!textRef.current) return '0px';
        const textWidth = textRef.current.offsetWidth;
        // Position hand to the left of text center
        return `calc(50% - ${textWidth/2}px - ${handWidth}px)`;
      }
      
      case 'hand-exits': 
      case 'complete': 
        return `-${handWidth + 50}px`; // Off-screen left
        
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
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Text that gets pushed */}
      <div 
        ref={textRef}
        className={`absolute top-1/2 text-4xl font-semibold font-serif whitespace-nowrap ${isDark ? 'text-stone-200' : 'text-stone-800'}`}
        style={{ 
          left: getTextPosition(),
          transform: animationState !== 'hidden' 
            ? 'translate(-50%, -50%)' 
            : 'translate(0, -50%)',
          transition: 'all 500ms cubic-bezier(0.34, 0.2, 0.64, 1)', // Faster than hand, accelerates toward end
          zIndex: 10
        }}
      >
        Here's what I was upto in February
      </div>
      
      {/* The hand */}
      <div 
        ref={handRef}
        className="absolute top-1/2 transform -translate-y-1/2"
        style={{ 
          left: getHandPosition(),
          transition: 'all 500ms cubic-bezier(0.25, 0.1, 0.5, 1)', // Slower, accelerates toward end
          zIndex: 10
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
  );
} 