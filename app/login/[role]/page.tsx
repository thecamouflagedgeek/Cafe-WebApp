"use client";

import { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ChefHat, UserCircle, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LoginPage({ params }: { params: Promise<{ role: string }> }) {
    const { role } = use(params);
    const isOwner = role === "owner";

    return (
        <div className="min-h-screen bg-grid-pattern flex flex-col p-6 font-sans">
            <Link href="/select-role" className="mb-8 block w-fit z-10">
                <div className="flex items-center gap-2 text-[#1e3932] font-bold hover:translate-x-[-2px] transition-transform border-2 border-transparent hover:border-[#1e3932]/10 p-2 rounded-lg bg-white/50 backdrop-blur-sm">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </div>
            </Link>

            <div className="flex-1 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 1 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white border-2 border-[#1e3932] shadow-[8px_8px_0px_0px_rgba(30,57,50,1)] rounded-xl overflow-hidden relative">
                        {/* Header Stripe */}
                        <div className={cn(
                            "h-4 border-b-2 border-[#1e3932] w-full pattern-diagonal-lines pattern-bg-white pattern-[#1e3932] pattern-opacity-20 pattern-size-2",
                            isOwner ? "bg-[#6e9628]" : "bg-[#C8A27A]"
                        )} />

                        <div className="p-8">
                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className={cn(
                                        "w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 border-[#1e3932] shadow-[4px_4px_0px_0px_rgba(30,57,50,1)]",
                                        isOwner ? "bg-[#6e9628]" : "bg-[#C8A27A]"
                                    )}
                                >
                                    {isOwner ? <UserCircle size={40} className="text-white" strokeWidth={1.5} /> : <ChefHat size={40} className="text-[#1e3932]" strokeWidth={1.5} />}
                                </div>
                                <h1 className="text-3xl font-black text-[#1e3932] capitalize font-serif tracking-tight">
                                    {role} Login
                                </h1>
                                <p className="text-gray-500 text-sm mt-2 font-mono bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                                    access_level: {isOwner ? 'admin' : 'staff'}
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-bold text-[#1e3932] flex items-center gap-2">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@cafeone.com"
                                        className="bg-gray-50 border-2 border-[#1e3932] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] transition-shadow rounded-lg h-12 font-mono text-[#1e3932]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="font-bold text-[#1e3932]">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border-2 border-[#1e3932] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] transition-shadow rounded-lg h-12 font-mono text-[#1e3932]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className={cn(
                                        "w-full py-6 text-lg font-bold border-2 border-[#1e3932] text-white shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] hover:shadow-[2px_2px_0px_0px_rgba(30,57,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg",
                                        isOwner
                                            ? "bg-[#6e9628] hover:bg-[#5c7e21]"
                                            : "bg-[#C8A27A] hover:bg-[#b08d66] text-[#1e3932]"
                                    )}
                                >
                                    Sign In
                                </Button>
                            </form>

                            <div className="mt-8 text-center">
                                <div className="text-xs font-mono text-gray-400">
                                    Secure Connection • CafeOne System
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
