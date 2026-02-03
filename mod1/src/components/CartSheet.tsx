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
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader className="space-y-4 pb-4 border-b">
                    <SheetTitle className="text-2xl font-serif">Your Cart</SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-muted-foreground">
                        <ShoppingBag className="w-16 h-16 opacity-20" />
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto py-4 -mx-6 px-6">
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-semibold text-lg leading-tight">{item.name}</h4>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-muted-foreground hover:text-destructive"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-3 border rounded-full px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <span className="font-bold">₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t pt-6 space-y-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <Button className="w-full h-12 rounded-full text-lg" onClick={() => alert("Checkout not implemented yet")}>
                                Checkout
                            </Button>
                            <Button variant="ghost" className="w-full rounded-full text-stone-500" onClick={() => setIsCartOpen(false)}>
                                Continue Shopping
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
