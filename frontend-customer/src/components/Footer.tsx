
"use client";

import { MapPin, Phone, Instagram, Facebook, Twitter, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="w-full bg-muted/30 pt-20 pb-10 mt-20 relative overflow-hidden text-foreground border-t border-border">

            <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 relative z-10">

                {/* Brand Column */}
                <div className="md:col-span-4 space-y-6 flex flex-col items-start text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                            <span className="font-serif font-bold text-lg">dt</span>
                        </div>
                        <span className="text-2xl font-serif font-bold">Horizon Coffee</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Locally sourced. <br /> Expertly roasted. <br /> Brewed to perfection.
                    </p>
                    <div className="flex gap-2 pt-2">
                        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-background"><Instagram className="w-4 h-4" /></Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-background"><Twitter className="w-4 h-4" /></Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-background"><Facebook className="w-4 h-4" /></Button>
                    </div>
                </div>

                {/* Links Column */}
                <div className="md:col-span-2 space-y-4">
                    <h4 className="font-serif font-semibold text-lg">Company</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Wholesales</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Info Column */}
                <div className="md:col-span-3 space-y-6">
                    <div className="space-y-3">
                        <h4 className="font-serif font-semibold text-lg">Opening Hours</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> Mon - Fri: 08:00 - 22:00</div>
                            <div className="ml-5">Sat - Sun: 09:00 - 23:00</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-serif font-semibold text-lg">Contact</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> 4517 Washington Ave.<br /><span className="ml-5">Manchester, KY 39495</span></div>
                            <div className="flex items-center gap-2 mt-2"><Mail className="w-3 h-3" /> hello@horizoncoffee.com</div>
                        </div>
                    </div>
                </div>

                {/* Map Column */}
                <div className="md:col-span-3">
                    <div className="w-full h-full min-h-[200px] rounded-2xl bg-stone-200 dark:bg-stone-800 relative overflow-hidden flex items-center justify-center border border-border/50">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                        <span className="font-medium text-muted-foreground z-10">Map View</span>
                        <Button size="sm" variant="secondary" className="absolute bottom-3 right-3 shadow-md text-xs">
                            Get Directions
                        </Button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                <p>© 2024 Horizon Coffee. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                    <a href="#" className="hover:text-primary">Cookies Config</a>
                </div>
            </div>
        </footer>
    );
}
