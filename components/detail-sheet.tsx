import { ElementContent } from "@/lib/content";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

interface DetailSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  content: ElementContent | null;
}

export function DetailSheet({ isOpen, onOpenChange, content }: DetailSheetProps) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  if (!content) {
    return null;
  }
  
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side={isMobile ? "bottom" : "right"} className={`${isMobile ? 'h-[70vh]' : 'max-w-md'} overflow-y-auto`}>
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-serif">{content.title}</SheetTitle>
          <SheetDescription className="text-base mt-4">
            {content.description}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
} 