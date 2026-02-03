
"use client";

import { ModeToggle } from "./ModeToggle";
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
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                        <div className="text-2xl font-serif font-bold tracking-tighter">
                            dt
                        </div>
                        <span className="hidden md:block font-serif font-medium ml-2 text-lg">Horizon Coffee</span>
                    </Link>
                </div>

                {/* Actions Container */}
                <div className="flex items-center gap-4">

                    {pathname === '/order' && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="h-5 w-5" />
                            {totalItems > 0 && (
                                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                                    {totalItems}
                                </Badge>
                            )}
                        </Button>
                    )}

                    <ModeToggle />

                    {/* Staggered Menu for both Desktop and Mobile */}
                    <div className="relative h-10 w-24 flex items-center justify-end">
                        <StaggeredMenu
                            items={[
                                { label: 'Home', link: '/' },
                                { label: 'About Us', link: '/#about' },
                                { label: 'Our Menu', link: '/#menu' },
                                { label: 'Order Online', link: '/order' }
                            ]}
                            socialItems={[
                                { label: 'Instagram', link: '#' },
                                { label: 'Twitter', link: '#' },
                                { label: 'Facebook', link: '#' }
                            ]}
                            menuButtonColor="currentColor"
                            openMenuButtonColor="currentColor"
                            colors={['#e5e5e5', '#d4d4d4', '#fdfbf7']} // Grays to Cream
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
