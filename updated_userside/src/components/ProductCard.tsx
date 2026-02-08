"use client";

import { useCart, Product } from "@/context/CartContext";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart, items, updateQuantity, removeFromCart } = useCart();

    const quantity = items.find(item => item.id === product.id)?.quantity || 0;

    const handleIncrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quantity > 1) {
            updateQuantity(product.id, quantity - 1);
        } else {
            removeFromCart(product.id);
        }
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div className="group relative w-full h-full bg-card p-4 transition-all duration-300 flex flex-col items-start border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 rounded-xl">

            {/* Image Placeholder - 'Polaroid' style */}
            <div className={cn(
                "relative w-full aspect-[4/3] border-2 border-border rounded-lg mb-4 overflow-hidden flex items-center justify-center",
                // Simple deterministic coloring based on product name length or first char to keep it consistent without extra props
                product.name.length % 3 === 0 ? "bg-[#FFFDD0]" : // Cream
                    product.name.length % 3 === 1 ? "bg-[#FFE4E1]" : // Misty Rose
                        "bg-[#E6E6FA]" // Lavender
            )}>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-pattern-dots opacity-5" />

                {/* Sticker Icon */}
                <div className="text-4xl opacity-80 transform rotate-[-10deg]">
                    {product.name.length % 3 === 0 ? "☕️" :
                        product.name.length % 3 === 1 ? "🥐" :
                            "🍵"}
                </div>

                {/* Price Tag Overlay - 'Ticket' style */}
                <div className="absolute bottom-[-2px] right-[-2px] bg-accent text-accent-foreground px-3 py-1 border-2 border-border font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                    ₹{product.price}
                </div>
            </div>

            {/* Content Container */}
            {/* Content Container */}
            <div className="w-full flex flex-col gap-3">

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-foreground leading-tight">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 font-sans">
                    {product.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                    {product.badges?.map((badge, i) => (
                        <span key={i} className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 border border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {badge}
                        </span>
                    ))}
                    <span className="bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 border border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {product.category}
                    </span>
                </div>

                {/* Action Button: Add or Stepper */}
                {quantity === 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className="w-full py-3 bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2 rounded-lg"
                    >
                        ADD TO ORDER
                    </button>
                ) : (
                    <div className="w-full py-2 bg-primary text-primary-foreground flex items-center justify-between px-4 mt-2 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg">
                        <button
                            onClick={handleDecrement}
                            className="w-6 h-6 rounded-sm bg-background text-foreground flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground active:scale-95 transition-colors"
                        >
                            <span className="text-sm font-bold leading-none">−</span>
                        </button>

                        <span className="text-base font-bold select-none min-w-[20px] text-center font-mono">
                            {quantity}
                        </span>

                        <button
                            onClick={handleIncrement}
                            className="w-6 h-6 rounded-sm bg-background text-foreground flex items-center justify-center border border-border hover:bg-accent hover:text-accent-foreground active:scale-95 transition-colors"
                        >
                            <span className="text-sm font-bold leading-none">+</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
