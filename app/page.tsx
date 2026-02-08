"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coffee, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen bg-grid-pattern relative flex flex-col font-sans overflow-hidden">
      {/* Navbar - Reduced padding */}
      <nav className="relative z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-black font-bold text-2xl tracking-tighter">
          <Coffee className="w-8 h-8" strokeWidth={2.5} />
          <span>CafeOne</span>
        </div>
        <Link href="/select-role">
          <button className="bg-[#00704A] hover:bg-[#005c3c] text-white font-bold px-5 py-2 rounded-lg border-2 border-[#1e3932] shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] hover:shadow-[2px_2px_0px_0px_rgba(30,57,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm md:text-base">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Hero Section - Flex container to distribute space */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center max-w-7xl mx-auto w-full pb-0 md:pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl mx-auto relative z-30 mb-8 md:mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-serif text-[#1e3932] tracking-tight leading-[1.1]">
            Brewing perfection <br className="hidden md:block" /> for your <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-[#D4E9E2] -rotate-1 skew-x-3 opacity-80 h-[0.8em] top-[0.1em] -z-10 rounded-sm"></span>
              business.
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-xl mx-auto font-medium leading-relaxed font-mono">
            Capture orders, organize staff, and elevate your service.
          </p>
        </motion.div>

        {/* Fanned Cards Collage - Food Theme - Centered and pushed up */}
        <div className="relative w-full max-w-5xl h-[250px] md:h-[350px] flex justify-center items-end">
          {/* Card 1: Pastry (Left, Tilted Left) */}
          <motion.div
            initial={{ rotate: -20, y: 100, opacity: 0 }}
            animate={{ rotate: -15, y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute left-[5%] md:left-[5%] bottom-0 z-10"
          >
            <div className="bg-white border-2 border-[#1e3932] p-3 pb-8 rounded-sm shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] w-36 md:w-56 h-44 md:h-64 flex flex-col items-center transform hover:-translate-y-4 transition-transform duration-300 relative">
              <div className="w-full h-full bg-[#fae8d2] border-2 border-[#1e3932] flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs font-bold opacity-30 text-[#1e3932]">IMG: CROISSANT</span>
              </div>


              {/* Sticker 1 - Pill Shape with Die-cut border */}
              <div className="absolute -top-6 -left-8 bg-[#ECA7A7] text-[#332219] border-[3px] border-white outline outline-2 outline-[#332219] px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(51,34,25,0.4)] -rotate-12 z-20 w-40 md:w-auto transform hover:scale-110 transition-transform cursor-help">
                <p className="font-mono text-[10px] md:text-xs font-black text-center leading-tight uppercase tracking-wider">Fresh baked!</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Avocado Toast (Mid-Left) */}
          <motion.div
            initial={{ rotate: -10, y: 100, opacity: 0 }}
            animate={{ rotate: -6, y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute left-[20%] md:left-[22%] bottom-0 z-20 hidden md:block"
          >
            <div className="bg-white border-2 border-[#1e3932] p-3 pb-8 rounded-sm shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] w-40 md:w-60 h-48 md:h-72 flex flex-col items-center transform hover:-translate-y-4 transition-transform duration-300">
              <div className="w-full h-full bg-[#C1D695] border-2 border-[#1e3932] flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs font-bold opacity-30 text-[#1e3932]">IMG: TOAST</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Latte Art (Center) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-30 bottom-4 mx-auto"
          >
            <div className="bg-white border-2 border-[#1e3932] p-3 pb-10 rounded-sm shadow-[8px_8px_0px_0px_rgba(30,57,50,1)] w-48 md:w-72 h-56 md:h-80 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#D4E9E2] border-2 border-[#1e3932] flex items-center justify-center relative overflow-hidden">
                <Coffee className="w-16 h-16 md:w-24 md:h-24 text-[#1e3932] opacity-20" />
                <span className="font-mono text-xs font-bold opacity-50 absolute bottom-2 text-[#1e3932]">LATTE.JPG</span>
              </div>
              <div className="mt-2 font-serif font-bold italic">Morning Brew</div>
            </div>
          </motion.div>

          {/* Card 4: Salad (Mid-Right) */}
          <motion.div
            initial={{ rotate: 10, y: 100, opacity: 0 }}
            animate={{ rotate: 6, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute right-[20%] md:right-[22%] bottom-0 z-20 hidden md:block"
          >
            <div className="bg-white border-2 border-[#1e3932] p-3 pb-8 rounded-sm shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] w-40 md:w-60 h-48 md:h-72 flex flex-col items-center transform hover:-translate-y-4 transition-transform duration-300 relative">
              <div className="w-full h-full bg-[#EFA18A] border-2 border-[#1e3932] flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs font-bold opacity-30 text-[#1e3932]">IMG: SALAD</span>
              </div>

              {/* Sticker 2 - Wavy badge style using heavy rounded corners */}
              <div className="absolute -bottom-6 -right-10 bg-[#00704A] text-white border-[3px] border-white outline outline-2 outline-[#1e3932] px-4 py-3 rounded-[2rem] rounded-tl-none shadow-[4px_4px_0px_0px_rgba(30,57,50,0.4)] rotate-6 z-20 max-w-[140px] transform hover:scale-110 transition-transform cursor-help">
                <p className="font-mono text-[10px] md:text-xs font-black text-center leading-tight uppercase">Daily Special?</p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Cake (Right) */}
          <motion.div
            initial={{ rotate: 20, y: 100, opacity: 0 }}
            animate={{ rotate: 15, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute right-[5%] md:right-[5%] bottom-0 z-10"
          >
            <div className="bg-white border-2 border-[#1e3932] p-3 pb-8 rounded-sm shadow-[4px_4px_0px_0px_rgba(30,57,50,1)] w-36 md:w-56 h-44 md:h-64 flex flex-col items-center transform hover:-translate-y-4 transition-transform duration-300 relative">
              <div className="w-full h-full bg-[#D4E9E2] border-2 border-[#1e3932] flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs font-bold opacity-30 text-[#1e3932]">IMG: CAKE</span>
              </div>

              {/* Sticker 3 - Mobile Visible - Circular/Burst */}
              <div className="absolute top-10 -right-8 bg-[#F2C94C] text-[#332219] border-[3px] border-white outline outline-2 outline-[#332219] w-14 h-14 flex items-center justify-center rounded-full shadow-[3px_3px_0px_0px_rgba(51,34,25,0.4)] rotate-12 z-20 md:hidden transform hover:scale-110 transition-transform">
                <p className="font-mono text-[10px] font-black italic">YUM!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer text - Absolute bottom */}
      <footer className="absolute bottom-4 w-full text-center z-40 px-6">
        <p className="text-xs font-mono text-gray-500 bg-white/80 inline-block px-2 py-1 rounded backdrop-blur-sm border border-black/5">© 2026 CafeOne</p>
      </footer>
    </div>
  );
}
