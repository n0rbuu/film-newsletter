import { ElementContent } from "@/lib/content";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useIsClient } from "@/hooks/use-is-client";

interface DetailSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  content: ElementContent | null;
}

export function DetailSheet({ isOpen, onOpenChange, content }: DetailSheetProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const isClient = useIsClient();
  const isDark = theme === 'dark';
  
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
  
  // Default to dark theme during server-side rendering to avoid hydration mismatch
  const bgColor = isClient ? (isDark ? 'bg-stone-900' : 'bg-amber-100') : 'bg-stone-900';
  
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        className={`${isMobile ? 'h-[80vh]' : 'max-w-md'} overflow-y-auto pt-24 ${bgColor}`}
      >
        <SheetHeader className="mb-8">
          <SheetTitle className="text-2xl font-serif mb-6">{content.title}</SheetTitle>
          <SheetDescription className={`text-base space-y-4 ${isMobile ? 'text-left' : ''}`}>
            {Array.isArray(content.description) ? (
              content.description.map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className={`${isMobile ? 'text-left' : ''} ${isDark ? 'text-stone-300' : 'text-stone-700'}`}
                />
              ))
            ) : (
              <p 
                dangerouslySetInnerHTML={{ __html: content.description }} 
                className={`${isMobile ? 'text-left' : ''} ${isDark ? 'text-stone-300' : 'text-stone-700'}`}
              />
            )}
          </SheetDescription>
        </SheetHeader>
        
        {content.cta && (
          <div className="mt-10 flex justify-center">
            <Button 
              asChild 
              className="justify-start"
            >
              <a 
                href={content.cta.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.cta.title}
              </a>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
} 