
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2px] bg-[#f0f0f0] overflow-hidden relative border-4 border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                            {/* Pattern Background */}
                            <div className="absolute inset-0 bg-pattern-dots opacity-10" />

                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-[-1deg] shadow-sm z-10" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <div className="w-20 h-20 rounded-full border-2 border-dashed border-stone-400 flex items-center justify-center mb-4">
                                    <span className="text-4xl">☕️</span>
                                </div>
                                <span className="text-xl font-serif font-bold text-foreground relative z-10">
                                    Our Story
                                </span>
                                <span className="text-xs text-muted-foreground mt-2 max-w-[200px] text-center font-sans">
                                    Crafting moments, one cup at a time.
                                </span>
                            </div>

                            {/* Hand-drawn scribble doodle */}
                            <svg className="absolute bottom-4 right-4 w-16 h-16 text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 90 Q 30 10 50 90 T 90 10" />
                            </svg>
                        </div>

                        {/* Decorative Elements around the frame */}
                        <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-dashed border-primary/30 rounded-[4px] rotate-[3deg]" />
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Since 1998</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">
                                More than just <br /> a coffee shop
                            </h2>
                        </div>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                It started with a simple mission: to source the finest beans from sustainable farms and roast them to perfection.
                                We believe that coffee is more than just a drink—it’s a ritual, a moment of pause, and a connection to the world around us.
                            </p>
                            <p>
                                Every cup you hold is the result of years of refinement, passion, and respect for the craft.
                                From our baristas to our roasters, we are dedicated to bringing you the perfect brew, every single time.
                            </p>
                        </div>

                        <Button variant="outline" className="rounded-full px-8 h-12 border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                            Read our full story
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
