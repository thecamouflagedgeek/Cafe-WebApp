
"use client";

import { motion } from "framer-motion";

interface MenuItem {
    name: string;
    description?: string;
    price: string;
}

interface MenuCategoryProps {
    title: string;
    items: MenuItem[];
    imagePlaceholder?: string;
    reverse?: boolean;
}

export default function MenuSection({ title, items, imagePlaceholder, reverse }: MenuCategoryProps) {
    return (
        <section className="py-12 w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

                {/* Menu Items Column - Order 2 on mobile if reverse, otherwise default order (which is 1? No default is source order).
            User wants image FIRST on mobile (top), then text.
            If we want Image First on Mobile:
            - Image needs order-first on mobile (default) or flex-col-reverse? No Grid.
            - Grid: First child is first.
            - Current: Text div is first in source. Image div is second.
            - Mobile: Text is on top.
            - Fix: Swap source order or use order classes.
            
            Let's use order classes. 
            Mobile: Image Order 1, Text Order 2.
            Desktop: Depends on reverse prop.
        */}

                {/* Text Column */}
                <div className={`space-y-8 order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
                    >
                        {title}
                    </motion.h2>

                    <div className="space-y-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex justify-between items-baseline group border-b border-border/40 pb-4 last:border-0"
                            >
                                <div className="space-y-1 pr-6">
                                    <div className="text-lg font-medium group-hover:text-primary transition-colors cursor-pointer">
                                        {item.name}
                                    </div>
                                    {item.description && (
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-[300px]">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                                <div className="font-serif font-semibold text-lg shrink-0">
                                    {item.price}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Column - Always Order 1 on mobile */}
                {imagePlaceholder && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`relative w-full aspect-square md:aspect-[4/5] rounded-[2px] overflow-hidden bg-[#fafafa] border-2 border-border flex items-center justify-center p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all order-1 ${reverse ? 'md:order-1 rotate-1' : 'md:order-2 -rotate-1'}`}
                    >

                        <div className="absolute inset-0 bg-pattern-grid opacity-10" />

                        {/* Tape Effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-red-200/80 rotate-[2deg] shadow-sm z-10" />

                        <div className="w-full h-full bg-gradient-to-br from-background via-transparent to-muted/50 rounded-[24px] flex items-center justify-center relative">
                            <div className="text-6xl md:text-8xl opacity-20 rotate-[-15deg] select-none filter blur-[1px]">
                                {imagePlaceholder === "Latte Art" ? "☕️" :
                                    imagePlaceholder === "Iced Coffee" ? "🥤" :
                                        imagePlaceholder === "Hot Choco" ? "🍫" :
                                            imagePlaceholder === "Croissant" ? "🥐" : "✨"}
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif italic text-3xl md:text-4xl text-foreground/80 rotate-[-5deg] bg-background/50 px-4 py-2 backdrop-blur-sm border border-border shadow-sm">
                                    {imagePlaceholder}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section >
    );
}
