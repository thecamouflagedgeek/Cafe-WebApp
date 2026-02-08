
"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const newsItems = [
    {
        date: "June 17, 2024",
        title: "Exploring the distinct coffee origins",
        image: "Coffee Origins"
    },
    {
        date: "June 25, 2024",
        title: "5 types of beans that coffee lovers will love",
        image: "Coffee Beans"
    },
    {
        date: "July 01, 2024",
        title: "How intensely branches on coffee bloom?",
        image: "Coffee Bloom"
    }
];

export default function NewsSection() {
    return (
        <section className="px-6 py-8 space-y-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Latest coffee news</h2>

            <div className="space-y-8">
                {newsItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="w-full aspect-[4/3] rounded-2xl bg-zinc-100 overflow-hidden mb-3 relative">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
                                {item.image} Image
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {item.date}
                            </div>
                            <div className="font-serif text-xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                {item.title}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
