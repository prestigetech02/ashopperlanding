import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CurrencyProvider } from "@/components/currency-provider";
import { SearchProvider } from "@/components/search-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A-Shopper — Buy & Rent Engineering Equipment From Your Phone",
  description:
    "Browse heavy machinery, power tools, and industrial equipment from verified vendors across Africa. Chat with sellers, pay securely with built-in escrow, and get equipment delivered — all from the A-Shopper app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <CurrencyProvider>
          <SearchProvider>
            <Header />
            {children}
            <Footer />
          </SearchProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
