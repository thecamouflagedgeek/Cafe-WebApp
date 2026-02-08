"use client";

import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export function CartSheet() {
    const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l-2 border-stone-900 p-0">
                <SheetHeader className="px-6 py-6 border-b-2 border-stone-900 bg-white/50 backdrop-blur-sm">
                    <SheetTitle className="text-3xl font-serif font-bold text-stone-900">Your Cart</SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-muted-foreground bg-grid-pattern">
                        <div className="p-6 bg-white rounded-full border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <ShoppingBag className="w-12 h-12 text-stone-900" />
                        </div>
                        <p className="font-medium text-lg text-stone-900">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto py-6 px-6 bg-grid-pattern">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="group flex gap-4 bg-white p-3 rounded-xl border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(200,200,200,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                                        <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-stone-900 shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div className="flex justify-between items-start gap-2">
                                                <h4 className="font-bold text-lg leading-tight text-stone-900 line-clamp-2">{item.name}</h4>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-stone-400 hover:text-red-600 transition-colors p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-2 bg-stone-100 rounded-lg border-2 border-stone-900 px-1 py-0.5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-stone-200 active:scale-95 transition-all text-stone-900"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center text-stone-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-stone-200 active:scale-95 transition-all text-stone-900"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-lg text-stone-900">₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t-2 border-stone-900 p-6 bg-white space-y-4">
                            <div className="flex justify-between text-xl font-bold font-serif text-stone-900">
                                <span>Total</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <Button
                                className="w-full h-14 rounded-xl text-lg font-bold bg-primary text-primary-foreground border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[4px] active:shadow-none"
                                onClick={() => alert("Checkout not implemented yet")}
                            >
                                Checkout
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full h-12 rounded-xl text-stone-900 font-bold hover:bg-stone-100 border-2 border-transparent hover:border-stone-900 transition-all"
                                onClick={() => setIsCartOpen(false)}
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
