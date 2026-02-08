
"use client";


import { StaggeredMenu } from "./StaggeredMenu";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const { totalItems, setIsCartOpen } = useCart();
    const pathname = usePathname();

    return (
        <header className="sticky top-4 z-50 w-full px-4 md:px-6">
            <div className="mx-auto max-w-7xl h-20 flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-6 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group">
                        <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xl rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-3 transition-transform">
                            dt
                        </div>
                        <span className="hidden md:block font-serif font-bold text-xl tracking-tight">Horizon Coffee</span>
                    </Link>
                </div>

                {/* Actions Container */}
                <div className="flex items-center gap-4">

                    {pathname === '/order' && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative hover:bg-transparent"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <div className="p-2 border-2 border-border rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white hover:translate-y-[1px] hover:shadow-none transition-all">
                                <ShoppingBag className="h-5 w-5" />
                            </div>
                            {totalItems > 0 && (
                                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full p-0 text-xs bg-destructive text-white border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    {totalItems}
                                </Badge>
                            )}
                        </Button>
                    )}



                    {/* Staggered Menu for both Desktop and Mobile */}
                    <div className="flex items-center justify-end">
                        <StaggeredMenu
                            items={[
                                { label: 'Home', link: '/' },
                                { label: 'About Us', link: '/#about' },
                                { label: 'Our Menu', link: '/#menu' },
                                { label: 'Order', link: '/order' }
                            ]}
                            socialItems={[
                                { label: 'Instagram', link: '#' },
                                { label: 'Twitter', link: '#' },
                                { label: 'Facebook', link: '#' }
                            ]}
                            menuButtonColor="currentColor"
                            openMenuButtonColor="currentColor"
                            colors={['#1e3932', '#00704A', '#fdfbf7']} // Primary, Accent, Background
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
