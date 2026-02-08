
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function About() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[40px] bg-stone-200 overflow-hidden relative">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 bg-stone-300 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-serif text-4xl opacity-50">
                                Our Story
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
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
