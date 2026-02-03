"use client";

import { ProductCard } from "@/components/ProductCard";
import { Product, useCart } from "@/context/CartContext";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { StaggeredMenu } from "@/components/StaggeredMenu";
import { ModeToggle } from "@/components/ModeToggle";

const allProducts: Product[] = [
    // --- Seasonal ---
    {
        id: "1",
        name: "Alphonso Mango",
        description: "Loved worldwide for their sweetness our Alphonso mangoes are a delicious delight wherever you are.",
        price: 270,
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop",
        category: "Seasonal",
        badges: ["Best Seller", "9 left"],
    },
    {
        id: "2",
        name: "Winter Berry Special",
        description: "A festive mix of cranberries, hibiscus, and orange peel.",
        price: 300,
        image: "https://images.unsplash.com/photo-1543363363-23df7a7837e1?q=80&w=1000&auto=format&fit=crop",
        category: "Seasonal",
    },

    // --- Coffee ---
    {
        id: "3",
        name: "Cappuccino",
        description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
        price: 180,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop",
        category: "Coffee",
        originalPrice: 200,
        badges: ["Hot"],
    },
    {
        id: "4",
        name: "Iced Latte",
        description: "Cool and refreshing iced latte with a swirl of vanilla syrup and oat milk.",
        price: 220,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=1000&auto=format&fit=crop",
        category: "Coffee",
        badges: ["Vegan Option"],
    },
    {
        id: "5",
        name: "Espresso Doppio",
        description: "Double shot of our signature dark roast espresso.",
        price: 150,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop",
        category: "Coffee",
    },
    {
        id: "6",
        name: "Caramel Macchiato",
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.",
        price: 260,
        image: "https://images.unsplash.com/photo-1485808191679-5f807c83f1f3?q=80&w=1000&auto=format&fit=crop",
        category: "Coffee",
        badges: ["Popular"],
    },

    // --- Bakery ---
    {
        id: "7",
        name: "Blueberry Muffin",
        description: "Freshly baked blueberry muffin with a crumb topping setup for a perfect morning.",
        price: 120,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1000&auto=format&fit=crop",
        category: "Bakery",
        badges: ["Fresh"],
    },
    {
        id: "8",
        name: "Croissant",
        description: "Buttery, flaky, and golden brown. The classic French pastry baked fresh daily.",
        price: 150,
        image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=1000&auto=format&fit=crop",
        category: "Bakery",
        originalPrice: 150,
    },
    {
        id: "9",
        name: "Avocado Toast",
        description: "Toasted sourdough topped with fresh avocado, cherry tomatoes, and microgreens.",
        price: 350,
        image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?q=80&w=1000&auto=format&fit=crop",
        category: "Bakery",
        badges: ["Healthy"],
    },

    // --- Desserts ---
    {
        id: "10",
        name: "Tiramisu",
        description: "Coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
        price: 320,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop",
        category: "Desserts",
        badges: ["Best Seller"],
    },
    {
        id: "11",
        name: "Cheesecake",
        description: "Classic New York style cheesecake with a berry compote.",
        price: 290,
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=1000&auto=format&fit=crop",
        category: "Desserts",
    },
    {
        id: "12",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
        price: 340,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?q=80&w=1000&auto=format&fit=crop",
        category: "Desserts",
        badges: ["Hot"],
    },

    // --- Salads ---
    {
        id: "13",
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
        price: 280,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop",
        category: "Salads",
    },
    {
        id: "14",
        name: "Greek Salad",
        description: "Cucumbers, tomatoes, olive oil, peppers, and feta cheese.",
        price: 300,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
        category: "Salads",
        badges: ["Vegetarian"],
    },
    {
        id: "15",
        name: "Quinoa Salad",
        description: "Healthy quinoa salad with black beans, corn, and avocado lime dressing.",
        price: 320,
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1000&auto=format&fit=crop",
        category: "Salads",
        badges: ["Healthy"],
    },

    // --- Tea ---
    {
        id: "16",
        name: "Matcha Latte",
        description: "Smooth and creamy matcha sweetened just right and served with steamed milk.",
        price: 250,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1000&auto=format&fit=crop",
        category: "Tea",
        badges: ["Antioxidant"],
    },
    {
        id: "17",
        name: "Earl Grey",
        description: "Black tea flavoured with oil of bergamot.",
        price: 180,
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop",
        category: "Tea",
    },
];

const categories = ["All", "Hot Sales", "Popularity", "Salads", "Desserts", "Coffee", "Bakery", "Tea", "Seasonal"];

export default function OrderPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        let filtered = allProducts;

        // Filter by Category
        if (selectedCategory !== "All") {
            if (selectedCategory === "Hot Sales") {
                filtered = filtered.filter(p => p.badges?.includes("Hot") || p.badges?.includes("Best Seller") || (p.originalPrice && p.price < p.originalPrice));
            } else if (selectedCategory === "Popularity") {
                filtered = filtered.filter(p => p.badges?.includes("Popular") || p.badges?.includes("Best Seller"));
            } else {
                filtered = filtered.filter((product) => product.category === selectedCategory);
            }
        }

        // Filter by Search Query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [selectedCategory, searchQuery]);

    return (
        <main className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            {/* Custom Sticky Header for Order Page to match Home Page placement */}
            <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 md:px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        <span className="font-medium">Back to Home</span>
                    </Link>

                    <div className="flex items-center gap-4 pr-28">
                        <ModeToggle />

                        {/* Staggered Menu */}
                        <div className="fixed top-0 right-0 h-screen w-24">
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
                                colors={['hsl(var(--background))', 'hsl(var(--muted))', 'hsl(var(--card))']}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
                <header className="mb-8 md:mb-12 text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                        Order Online
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg hidden md:block">
                        Choose from our selection of premium coffees, fresh pastries, and seasonal delights.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto mt-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for mango, coffee, cake..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 shadow-sm"
                        />
                    </div>
                </header>

                {/* Category Filter Bar */}
                <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:px-0 md:justify-center gap-2 md:gap-3 no-scrollbar snap-x">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap snap-center transition-all duration-300 active:scale-95 shrink-0",
                                selectedCategory === cat
                                    ? "bg-stone-900 text-white shadow-md shadow-stone-900/20"
                                    : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid - Pinterest Masonry Layout */}
                <div className="columns-2 md:columns-3 xl:columns-4 gap-4 mx-auto">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-stone-400">
                        <p className="text-lg">No products found.</p>
                    </div>
                )}

                {/* Floating Cart Button for Mobile/Desktop */}
                <FloatingCartButton />

            </div>
        </main>
    );
}

function FloatingCartButton() {
    const { totalItems, setIsCartOpen, totalPrice } = useCart();

    // Always show cart button to allow access
    // if (totalItems === 0) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <button
                onClick={() => setIsCartOpen(true)}
                className="bg-stone-900 text-white shadow-2xl rounded-full px-6 py-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300 border border-stone-800"
            >
                <div className="bg-white text-stone-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                </div>
                <span className="font-bold text-sm">View Cart</span>
                <span className="font-bold text-sm">₹{totalPrice}</span>
            </button>
        </div>
    );
}
