interface PinProps {
  color: string;
  size?: number;
}

export function Pin({ color, size = 24 }: PinProps) {
  return (
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 drop-shadow-md">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={color} />
        <circle cx="12" cy="12" r="6" fill="#ffffff" fillOpacity="0.3" />
      </svg>
    </div>
  );
} 