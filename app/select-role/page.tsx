"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Utensils, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SelectRole() {
    return (
        <div className="min-h-screen bg-grid-pattern relative flex flex-col p-6 font-sans overflow-x-hidden">
            <Link href="/" className="mb-8 block w-fit z-10 relative">
                <div className="flex items-center gap-2 text-[#1e3932] font-bold hover:translate-x-[-2px] transition-transform border-2 border-transparent hover:border-[#1e3932]/10 p-2 rounded-lg bg-white/50 backdrop-blur-sm">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </div>
            </Link>

            <div className="flex-1 flex flex-col items-center max-w-md md:max-w-6xl mx-auto w-full justify-center pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10 relative z-10"
                >
                    <span className="inline-block px-3 py-1 bg-[#D4E9E2] border-2 border-[#1e3932] font-mono text-xs font-bold mb-4 shadow-[2px_2px_0px_0px_rgba(30,57,50,1)] -rotate-2 text-[#1e3932]">
                        WHO ARE YOU?
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-[#1e3932] mb-3 trakcing-tight">
                        I am a...
                    </h1>
                    <p className="text-gray-600 md:text-xl font-mono">Select your role to continue</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full px-2 md:px-0">
                    <RoleCard
                        href="/login/owner"
                        title="Owner"
                        color="bg-[#6e9628]" // Medium Olive Green
                        description="Manage inventory, staff & finances"
                        icon={<User className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1.5} />}
                        delay={0.1}
                        rotate="-rotate-1"
                    />
                    <RoleCard
                        href="/login/waiter"
                        title="Waiter"
                        color="bg-[#C8A27A]" // Latte Gold
                        description="Take orders, serve tables & view shifts"
                        icon={<Utensils className="w-16 h-16 md:w-24 md:h-24 text-[#1e3932]" strokeWidth={1.5} />}
                        delay={0.2}
                        rotate="rotate-1"
                    />
                </div>
            </div>
        </div>
    );
}

function RoleCard({
    href,
    title,
    color,
    description,
    icon,
    delay,
    rotate,
}: {
    href: string;
    title: string;
    color: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
    rotate: string;
}) {
    return (
        <Link href={href} className="w-full group perspective-1000">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay, duration: 0.4 }}
                className={cn("w-full transition-transform duration-300 md:group-hover:scale-[1.02]", rotate)}
            >
                <div
                    className={cn(
                        "relative overflow-hidden border-2 border-[#1e3932] shadow-[8px_8px_0px_0px_rgba(30,57,50,1)] hover:shadow-[12px_12px_0px_0px_rgba(30,57,50,1)] transition-all h-[300px] md:h-[450px] flex flex-col items-start justify-between p-8 md:p-12 cursor-pointer rounded-2xl",
                        color
                    )}
                >
                    <div className="relative z-10 w-full">
                        <div className="inline-block bg-[#1e3932] text-white px-3 py-1 font-mono text-sm font-bold mb-4 rounded-full">
                            {title.toUpperCase()}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#1e3932] leading-none mb-2">
                            {title}
                        </h2>
                        <p className="font-mono text-[#1e3932]/80 font-medium text-sm md:text-base max-w-[80%]">
                            {description}
                        </p>
                    </div>

                    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 opacity-90 transition-transform duration-500 md:group-hover:scale-110 md:group-hover:-rotate-12 bg-white/20 p-6 md:p-8 rounded-full border-2 border-[#1e3932]/10 backdrop-blur-sm">
                        {icon}
                    </div>

                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />
                </div>
            </motion.div>
        </Link>
    );
}
