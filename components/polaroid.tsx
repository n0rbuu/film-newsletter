import Image from 'next/image';

interface PolaroidProps {
  src: string;
  alt: string;
  width: number;
  rotateDirection?: 'left' | 'right';
}

export function Polaroid({ src, alt, width, rotateDirection = 'left' }: PolaroidProps) {
  const rotation = rotateDirection === 'left' ? '-2deg' : '2deg';
  
  return (
    <div 
      className="relative transform inline-block w-full isolation-auto z-10 pointer-events-none"
      style={{ 
        transform: `rotate(${rotation})`
      }}
    >
      <div className="bg-amber-50 p-1 w-full shadow-md before:content-none after:content-none">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={0}
          className="block w-full"
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
} 