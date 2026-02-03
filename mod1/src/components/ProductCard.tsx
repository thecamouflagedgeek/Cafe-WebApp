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
        <div className="group relative w-full bg-white rounded-[32px] p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start border border-stone-100 break-inside-avoid mb-6">

            {/* Image Placeholder - Empty as requested */}
            <div className="relative w-full aspect-[4/3] bg-stone-100 rounded-[24px] mb-4 overflow-hidden">
                {/* Optional: Add a subtle icon or text if needed, but user said 'leave it empty' */}

                {/* Price Tag Overlay - 'Cutesy' pill style */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-stone-100">
                    <span className="font-bold text-stone-900 text-sm">₹{product.price}</span>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-2 w-full flex flex-col gap-2">

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-900 leading-tight">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
                    {product.badges?.map((badge, i) => (
                        <span key={i} className="bg-stone-100 text-stone-600 text-[10px] font-medium px-2.5 py-1 rounded-full border border-stone-200">
                            {badge}
                        </span>
                    ))}
                    <span className="bg-stone-50 text-stone-400 text-[10px] font-medium px-2.5 py-1 rounded-full border border-stone-100">
                        {product.category}
                    </span>
                </div>

                {/* Action Button: Add or Stepper */}
                {quantity === 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className="w-full py-3.5 rounded-[20px] bg-stone-900 text-white text-sm font-bold hover:bg-stone-800 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10 mt-1"
                    >
                        Add to Order
                    </button>
                ) : (
                    <div className="w-full py-2 rounded-[20px] bg-stone-900 text-white flex items-center justify-between px-4 mt-1 shadow-lg shadow-stone-900/10 mb-[-6px]">
                        <button
                            onClick={handleDecrement}
                            className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center hover:bg-stone-600 active:scale-95 transition-colors"
                        >
                            <span className="text-lg font-medium leading-none mb-1">−</span>
                        </button>

                        <span className="text-base font-bold select-none min-w-[20px] text-center">
                            {quantity}
                        </span>

                        <button
                            onClick={handleIncrement}
                            className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center hover:bg-stone-100 active:scale-95 transition-colors"
                        >
                            <span className="text-lg font-medium leading-none mb-1">+</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
