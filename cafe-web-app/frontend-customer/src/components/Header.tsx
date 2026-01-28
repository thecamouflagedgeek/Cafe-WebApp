
"use client";

import { ModeToggle } from "./ModeToggle";
import { StaggeredMenu } from "./StaggeredMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
                        dt
                    </div>
                    <span className="hidden md:block font-serif font-medium ml-2 text-lg">Horizon Coffee</span>
                </div>

                {/* Actions Container */}
                <div className="flex items-center gap-4">

                    <ModeToggle />

                    {/* Staggered Menu for both Desktop and Mobile */}
                    <div className="relative h-10 w-24 flex items-center justify-end">
                        <StaggeredMenu
                            items={[
                                { label: 'About Us', link: '#' },
                                { label: 'Our Menu', link: '#menu' }
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
