'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  title: string;
  content: string;
  position: { x: number; y: number };
  details: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "The Art of Film",
    content: "Exploring cinematography in modern cinema",
    position: { x: 300, y: 150 },
    details: "A deep dive into the visual language of contemporary filmmaking and how modern directors are pushing the boundaries of cinematographic expression."
  },
  {
    id: 2,
    title: "Director's Cut",
    content: "Behind the scenes of classic movies",
    position: { x: 600, y: 200 },
    details: "Examining the creative decisions that shaped iconic films, featuring interviews with renowned directors and their unique perspectives."
  },
  {
    id: 3,
    title: "Sound & Vision",
    content: "The role of music in film",
    position: { x: 400, y: 400 },
    details: "Understanding how soundtrack enhances storytelling, from classical scores to modern sound design techniques."
  },
  {
    id: 4,
    title: "Genre Studies",
    content: "Evolution of film genres",
    position: { x: 700, y: 350 },
    details: "Tracking the development and fusion of cinematic genres through the decades, exploring how they reflect societal changes."
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [constraints, setConstraints] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setConstraints({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div 
      className="min-h-screen bg-stone-950 text-stone-200 px-12 pt-12 select-none"
      onDragOver={(e) => e.preventDefault()}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-center flex-grow">Between Scenes Newsletter</h1>
        <span className="text-stone-400">Issue #1</span>
      </div>

      {/* Main Canvas */}
      <div 
        className="relative h-[calc(100vh-12rem)]"
        onDragOver={(e) => e.preventDefault()}
      >
        {cards.map((card) => (
          <Tooltip key={card.id} delayDuration={700}>
            <TooltipTrigger asChild>
              <motion.div
                drag
                dragMomentum={false}
                initial={{ x: card.position.x, y: card.position.y }}
                className="absolute touch-none"
                dragConstraints={{
                  left: -card.position.x,
                  right: constraints.width - card.position.x - 256,
                  top: -card.position.y,
                  bottom: constraints.height - card.position.y - 100
                }}
                dragElastic={0}
              >
                <Card className="w-64 p-4 bg-stone-900 cursor-move hover:bg-stone-800 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{card.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Add Comment</DropdownMenuItem>
                        <DropdownMenuItem>Add Emoji</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p 
                    className="text-sm text-stone-400 cursor-pointer hover:text-stone-300" 
                    onClick={() => {
                      setSelectedCard(card);
                      setIsOpen(true);
                    }}
                  >
                    {card.content}
                  </p>
                </Card>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to view details</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Details Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedCard?.title}</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <p className="text-sm text-stone-400">{selectedCard?.details}</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}