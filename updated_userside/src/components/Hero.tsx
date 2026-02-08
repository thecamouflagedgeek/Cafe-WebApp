
"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

// ... imports remain the same

// Update SLIDES to have more "sticker-like" colors/vibes
const SLIDES = [
    { id: 1, name: "Latte Art", color: "bg-[#F3E5AB]", accent: "text-amber-900", rotate: "rotate-2" },
    { id: 2, name: "Double Shot", color: "bg-[#C4A484]", accent: "text-stone-900", rotate: "-rotate-1" },
    { id: 3, name: "Cold Brew", color: "bg-[#D2691E]", accent: "text-white", rotate: "rotate-3" },
    { id: 4, name: "Matcha", color: "bg-[#D0F0C0]", accent: "text-green-900", rotate: "-rotate-2" },
    { id: 5, name: "Pour Over", color: "bg-[#8B4513]", accent: "text-white", rotate: "rotate-1" },
    { id: 6, name: "Affogato", color: "bg-[#FFFDD0]", accent: "text-stone-700", rotate: "-rotate-3" },
    { id: 7, name: "Espresso", color: "bg-[#654321]", accent: "text-white", rotate: "rotate-2" },
];

const MAX_VISIBILITY = 3;

const Carousel = ({ items }: { items: typeof SLIDES }) => {
    const [active, setActive] = useState(0);
    const count = items.length;

    const next = useCallback(() => setActive(i => i + 1), []);
    const prev = useCallback(() => setActive(i => i - 1), []);

    return (
        <div className='carousel w-full h-full relative perspective-[500px]'>
            <button
                className='absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 rounded-full hover:translate-y-[2px] hover:shadow-none transition-all'
                onClick={prev}
            >
                <ChevronLeft size={32} />
            </button>

            {items.map((slide, i) => {
                const normalizedActive = (active % count + count) % count;
                let offset = (normalizedActive - i);
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;

                const absOffset = Math.abs(offset);
                const direction = Math.sign(offset);

                return (
                    <div
                        key={slide.id}
                        className='card-container absolute w-full h-full transition-all duration-300 ease-out flex items-center justify-center'
                        style={{
                            '--active': i === normalizedActive ? 1 : 0,
                            '--offset': offset,
                            '--direction': direction,
                            '--abs-offset': absOffset,
                            'pointerEvents': i === normalizedActive ? 'auto' : 'auto',
                            'opacity': absOffset >= MAX_VISIBILITY ? '0' : '1',
                            'display': absOffset > MAX_VISIBILITY ? 'none' : 'flex',
                            'zIndex': 10 - absOffset,
                        } as React.CSSProperties}
                        onClick={() => setActive(curr => curr - offset)}
                    >
                        <div className={cn(
                            "w-[260px] h-[350px] md:w-[320px] md:h-[420px] bg-white p-4 border-2 border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 cursor-pointer flex flex-col items-center gap-4",
                            slide.rotate,
                            i === normalizedActive ? "scale-100 z-20" : "scale-90 opacity-70 hover:opacity-100 hover:scale-95"
                        )}>
                            {/* Polaroid Image Area */}
                            <div className={cn("w-full aspect-[4/5] overflow-hidden border-2 border-border relative", slide.color)}>
                                <div className="absolute inset-0 bg-black/5" />
                                <div className="h-full flex items-center justify-center">
                                    <span className={cn("text-4xl font-serif font-bold opacity-30 -rotate-12 select-none", slide.accent)}>
                                        {slide.name}
                                    </span>
                                </div>
                            </div>

                            {/* Polaroid Label */}
                            <div className="w-full text-center font-serif font-bold italic text-xl">
                                {slide.name} #{slide.id}
                            </div>
                        </div>
                    </div>
                );
            })}

            <button
                className='absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 rounded-full hover:translate-y-[2px] hover:shadow-none transition-all'
                onClick={next}
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
};


export default function Hero() {
    return (
        <section className="relative px-6 py-12 md:pt-24 md:pb-32 flex flex-col items-center justify-center text-center space-y-12 overflow-hidden min-h-screen">

            {/* Decorative Background Elements */}


            {/* Content */}
            <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8 z-20 relative">

                {/* Badge Sticker */}
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: -6 }}
                    className="bg-accent text-accent-foreground px-4 py-2 text-sm font-bold border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                    EST. 2024 • PREMIUM BREWS
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tight text-foreground relative"
                >
                    Brewed to <br className="hidden md:block" />
                    <span className="italic text-primary relative inline-block">
                        perfection
                        {/* Underline Scribble */}
                        <svg className="absolute w-full h-6 -bottom-2 left-0 text-accent" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-foreground text-lg md:text-xl max-w-[600px] leading-relaxed font-sans font-medium"
                >
                    Sourced locally from sustainable farms and coffee roasters. Experience the difference in every cup.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                >
                    <Link href="/order">
                        <Button size="lg" className="rounded-none h-14 text-lg px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all bg-primary text-primary-foreground border-2 border-border">
                            ORDER
                        </Button>
                    </Link>
                    <Link href="#about" scroll={true}>
                        <Button variant="outline" size="lg" className="rounded-none h-14 text-lg px-10 border-2 border-border shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all bg-white text-foreground">
                            OUR STORY
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* 3D Carousel (Sticker style) */}
            <div className="w-full max-w-6xl h-[450px] md:h-[550px] mt-12 flex items-center justify-center relative z-10">
                <Carousel items={SLIDES} />
            </div>

        </section>
    );
}
