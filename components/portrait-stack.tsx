'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PortraitStackProps {
  onClick?: () => void;
}

export function PortraitStack({ onClick }: PortraitStackProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const portraits = [
    { src: "/reichardt.jpg", alt: "Kelly Reichardt" },
    { src: "/jarmusch.jpg.webp", alt: "Jim Jarmusch" },
    { src: "/spike.jpg", alt: "Spike Lee" },
    { src: "/zhao.jpg", alt: "Chloé Zhao" }
  ];
  
  return (
    <div 
      className="relative w-[80px] h-[120px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stack of portrait cards */}
      {portraits.map((portrait, index) => (
        <div 
          key={index}
          className="absolute bg-white p-1 sm:p-2 rounded-sm shadow-md border border-gray-200 transition-transform duration-300"
          style={{
            width: '100%',
            height: '100%',
            transform: isHovered
              ? `rotate(${(index - 1.5) * 8}deg) translate(${index * 5}px, ${index * 5}px)`
              : `rotate(${(index - 1.5) * 3}deg) translate(${index * 2}px, ${index * 5}px)`,
            zIndex: index,
            transformOrigin: '50% 15%',
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(max-width: 768px) 80px, 140px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
} 