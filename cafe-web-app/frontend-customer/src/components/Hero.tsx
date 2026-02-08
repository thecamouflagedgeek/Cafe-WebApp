
"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

const SLIDES = [
    { id: 1, name: "Latte Art", color: "bg-[#F3E5AB]", accent: "text-amber-900" },
    { id: 2, name: "Double Shot", color: "bg-[#C4A484]", accent: "text-stone-900" },
    { id: 3, name: "Cold Brew", color: "bg-[#D2691E]", accent: "text-white" },
    { id: 4, name: "Matcha", color: "bg-[#D0F0C0]", accent: "text-green-900" },
    { id: 5, name: "Pour Over", color: "bg-[#8B4513]", accent: "text-white" },
    { id: 6, name: "Affogato", color: "bg-[#FFFDD0]", accent: "text-stone-700" },
    { id: 7, name: "Espresso", color: "bg-[#654321]", accent: "text-white" },
];

const MAX_VISIBILITY = 3;

const Carousel = ({ items }: { items: typeof SLIDES }) => {
    const [active, setActive] = useState(0); // Start at 0
    const count = items.length;

    const next = useCallback(() => setActive(i => i + 1), []);
    const prev = useCallback(() => setActive(i => i - 1), []);

    return (
        <div className='carousel w-full h-full relative perspective-[500px]'>

            {/* Desktop & Mobile Navigation Buttons - Always visible now */}
            <button
                className='absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 text-foreground/50 hover:text-foreground transition-all hover:scale-110'
                onClick={prev}
            >
                <ChevronLeft size={48} />
            </button>

            {items.map((slide, i) => {
                // Circular logic for infinite scrolling effect
                // We calculate the rendering properties based on the 'active' index which is unbounded
                // The actual item is determined by modulo, but here we iterate the static list.
                // Wait, if we iterate static list, we can't do infinite scroll easily without duplication.
                // Better approach for CSS-only 3D carousel with infinite feel:
                // We need to render enough items to fill the view, and cycle them.

                // Let's use the 'active' state to determine the 'virtual' position of each slide.

                // Position relative to active
                // To make it loop, we need to find the shortest distance in a circle.
                // distance = (i - (active % count) + count + count/2) % count - count/2;

                // But since 'active' can be anything (unbounded),
                // let's just use modulo active.

                const normalizedActive = (active % count + count) % count;
                let offset = (normalizedActive - i);
                // Shortest path correction
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;

                // Direction and Abs Offset based on corrected offset
                const absOffset = Math.abs(offset);
                const direction = Math.sign(offset);
                // Note: The original generic snippet used (active - i).
                // If we want it to look "continuous", the cards need to wrap.

                // IMPORTANT: The CSS transform logic expects specific vars.
                // 'display' logic in snippet hides distant items.
                return (
                    <div
                        key={slide.id}
                        className='card-container absolute w-full h-full transition-all duration-300 ease-out flex items-center justify-center'
                        style={{
                            '--active': i === normalizedActive ? 1 : 0,
                            '--offset': offset,
                            '--direction': direction,
                            '--abs-offset': absOffset,
                            'pointerEvents': i === normalizedActive ? 'auto' : 'auto', // Allow clicking neighbors
                            'opacity': absOffset >= MAX_VISIBILITY ? '0' : '1',
                            'display': absOffset > MAX_VISIBILITY ? 'none' : 'flex',
                            'zIndex': 10 - absOffset, // Ensure center is on top
                        } as React.CSSProperties}
                        onClick={() => {
                            // If clicked, we want to move TO this item.
                            // We need to add/subtract the offset from current 'active'.
                            // active is unbounded.
                            // newActive = active - offset.
                            setActive(curr => curr - offset);
                        }}
                    >
                        <div className={cn(
                            "w-[260px] h-[350px] md:w-[380px] md:h-[500px] rounded-[40px] shadow-2xl overflow-hidden relative group transition-transform duration-300 cursor-pointer",
                            slide.color
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            <div className="h-full flex items-center justify-center flex-col">
                                <span className={cn("text-6xl md:text-8xl font-serif italic font-bold opacity-30 select-none", slide.accent)}>
                                    {slide.name}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}

            <button
                className='absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 text-foreground/50 hover:text-foreground transition-all hover:scale-110'
                onClick={next}
            >
                <ChevronRight size={48} />
            </button>
        </div>
    );
};


export default function Hero() {
    return (
        <section className="px-6 py-12 md:pt-24 md:pb-32 flex flex-col items-center justify-center text-center space-y-12 overflow-hidden bg-background">

            {/* Content */}
            <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8 z-20 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[1] tracking-tight text-foreground"
                >
                    Brewed to <br className="hidden md:block" /> perfection
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-muted-foreground text-lg md:text-xl max-w-[600px] leading-relaxed"
                >
                    Sourced locally from sustainable farms and coffee roasters. Experience the difference in every cup.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="#menu" scroll={true}>
                        <Button size="lg" className="rounded-full px-12 h-14 text-lg bg-primary text-primary-foreground font-medium shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Explore menu
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* 3D Carousel */}
            <div className="w-full max-w-6xl h-[400px] md:h-[600px] mt-12 flex items-center justify-center relative">
                <Carousel items={SLIDES} />
            </div>

        </section>
    );
}
