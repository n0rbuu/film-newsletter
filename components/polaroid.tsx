import Image from 'next/image';

interface PolaroidProps {
  src: string;
  alt: string;
  width: number;
  gridColumn: number;
  rotateDirection?: 'left' | 'right';
}

export function Polaroid({ src, alt, width, gridColumn, rotateDirection = 'left' }: PolaroidProps) {
  const rotation = rotateDirection === 'left' ? '-2deg' : '2deg';
  
  return (
    <div 
      className="row-start-1 relative transform inline-block w-fit isolation-auto z-10 pointer-events-none"
      style={{ 
        gridColumn: `${gridColumn} / span 1`,
        transform: `rotate(${rotation})`
      }}
    >
      <div className="bg-amber-50 p-1 w-fit shadow-md before:content-none after:content-none">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={0}
          className="block"
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
} 