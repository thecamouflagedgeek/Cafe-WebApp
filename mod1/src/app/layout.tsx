import { CartSheet } from '@/components/CartSheet';
import { CartProvider } from '@/context/CartContext';
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${playfair.variable} ${lato.variable} antialiased font-sans`}
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
