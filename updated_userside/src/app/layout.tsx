import { CartSheet } from '@/components/CartSheet';
import { CartProvider } from '@/context/CartContext';
import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Coffee",
  description: "Brewed to perfection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmMono.variable} ${publicSans.variable} antialiased font-sans bg-grid-pattern`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {children}
            <CartSheet />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
