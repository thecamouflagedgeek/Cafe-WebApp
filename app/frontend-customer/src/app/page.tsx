
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const coffeeMenu = [
  { name: "Americano", price: "$3.50", description: "Espresso shots topped with hot water create a light layer of crema." },
  { name: "Cappuccino", price: "$4.20", description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam." },
  { name: "Latte", price: "$4.50", description: "Dark, rich espresso balanced with steamed milk and a light layer of foam." },
  { name: "Espresso", price: "$3.00", description: "Our signature dark roast espresso with rich crema." },
  { name: "Flat White", price: "$4.00", description: "Expertly steamed milk poured over two shots of espresso." },
  { name: "Macchiato", price: "$3.80", description: "Espresso marked with a dollop of foam." },
  { name: "Cortado", price: "$3.90", description: "Espresso cut with a small amount of warm milk." },
];

const specialtyMenu = [
  { name: "Matcha Latte", price: "$4.50", description: "Smooth and creamy matcha sweetened just right and served with steamed milk." },
  { name: "Caramel Frappe", price: "$5.00", description: "Rich caramel flavor blended with coffee and milk, topped with whipped cream." },
  { name: "Chai Late", price: "$4.00", description: "Black tea infused with cinnamon, clove, and other warming spices." },
  { name: "Mocha", price: "$4.80", description: "Espresso with bittersweet mocha sauce and steamed milk." },
  { name: "Pumpkin Spice", price: "$5.20", description: "Seasonal favorite with pumpkin, cinnamon, nutmeg and clove." }
];

const teaMenu = [
  { name: "Earl Grey", price: "$3.00", description: "Flowery and fragrant blend of black tea with bergamot oil." },
  { name: "Hot Chocolate", price: "$4.00", description: "Steamed milk with vanilla- and mocha-flavored syrups. Topped with sweetened whipped cream." },
  { name: "Green Tea", price: "$3.00", description: "Lightly roasted green tea with a fresh, grassy flavor." },
  { name: "Chamomile", price: "$3.00", description: "Calming herbal tea with mild floral notes." }
];

const pastryMenu = [
  { name: "Croissant", price: "$3.50", description: "Buttery, flaky, and golden brown. The classic French pastry." },
  { name: "Muffin", price: "$3.00", description: "Freshly baked blueberry muffin with a crumb topping." },
  { name: "Scone", price: "$3.20", description: "Traditional English scone served with clotted cream." },
  { name: "Cookie", price: "$2.50", description: "Large chocolate chunk cookie." },
  { name: "Bagel", price: "$3.00", description: "Toasted bagel with cream cheese." }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Menu Container */}
      <div id="menu" className="container mx-auto px-6 space-y-12 md:space-y-24 py-12 scroll-mt-24">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Our Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Explore our menu</h2>
        </div>

        <MenuSection title="Coffee" items={coffeeMenu} imagePlaceholder="Latte Art" />

        <MenuSection title="Specialty Drinks" items={specialtyMenu} imagePlaceholder="Iced Coffee" reverse />

        <MenuSection title="Tea & Beverages" items={teaMenu} imagePlaceholder="Hot Choco" />

        <MenuSection title="Fresh Pastries" items={pastryMenu} imagePlaceholder="Croissant" reverse />
      </div>

      <Footer />
    </main>
  );
}
