'use client';

import Image from 'next/image';

interface PortraitStackProps {
  onClick?: () => void;
}

export function PortraitStack({ onClick }: PortraitStackProps) {
  const portraits = [
    
    { src: "/reichardt.jpg.webp", alt: "Kelly Reichardt" },
    { src: "/jarmusch.jpg.webp", alt: "Jim Jarmusch" },
    { src: "/zhao.jpg.webp", alt: "Chloé Zhao" },
    { src: "/spike.jpg.webp", alt: "Spike Lee" }
  ];
  
  return (
    <div 
      className="relative w-[80px] h-[120px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] cursor-pointer"
      onClick={onClick}
    >
      {/* Stack of portrait cards */}
      {portraits.map((portrait, index) => (
        <div 
          key={index}
          className="absolute bg-white p-1 sm:p-2 rounded-sm shadow-md border border-gray-200"
          style={{
            width: '100%',
            height: '100%',
            transform: `rotate(${(index - 1.5) * 16}deg) translate(${index * 24}px, ${-index * 20}px)`,
            zIndex: index,
            transformOrigin: 'bottom center',
          }}
        >
          <div className="w-full h-full overflow-hidden">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={140}
              height={210}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 