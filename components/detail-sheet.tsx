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
      <SheetContent side={isMobile ? "bottom" : "right"} className={`${isMobile ? 'h-[70vh]' : 'max-w-md'} overflow-y-auto pt-24`}>
        <SheetHeader className="mb-8">
          <SheetTitle className="text-2xl font-serif mb-6">{content.title}</SheetTitle>
          <SheetDescription className="text-base space-y-4">
            {Array.isArray(content.description) ? (
              content.description.map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            ) : (
              <p dangerouslySetInnerHTML={{ __html: content.description }} />
            )}
          </SheetDescription>
        </SheetHeader>
        
        {content.cta && (
          <div className="mt-8">
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