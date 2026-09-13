"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { useSearch } from "@/components/search-provider";
import { cn } from "@/lib/utils";

const SHOP_LINKS = [
  { label: "Browse Equipment", href: "/marketplace" },
  { label: "Buy", href: "/marketplace?type=sale" },
  { label: "Rent", href: "/marketplace?type=rent" },
];

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Money Protection", href: "/escrow" },
  { label: "For Vendors", href: "/vendors" },
  { label: "About", href: "/about" },
  { label: "Help", href: "/faq" },
];

const navItemClass =
  "text-sm font-medium text-nav transition-colors hover:text-primary";

export function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const { openSearch } = useSearch();

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(event.target as Node)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setShopOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setShopOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          <div className="relative" ref={shopRef}>
            <button
              type="button"
              className={cn(navItemClass, "inline-flex items-center gap-1")}
              aria-expanded={shopOpen}
              aria-haspopup="menu"
              onClick={() => setShopOpen((open) => !open)}
            >
              Shop
              <ChevronDown className={cn("h-3.5 w-3.5", shopOpen && "rotate-180")} />
            </button>
            {shopOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-3 min-w-[12rem] rounded-xl border border-border bg-background py-1.5 shadow-lg"
              >
                {SHOP_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setShopOpen(false)}
                    className="block px-4 py-2 text-sm text-nav hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={navItemClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button
            type="button"
            variant="icon"
            ariaLabel="Search"
            onClick={() => openSearch()}
          >
            <Search className="h-5 w-5" />
          </Button>
          <CurrencySwitcher />
          <Button href="/#download">Get the App</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-nav hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Shop
            </p>
            {SHOP_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-nav hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-nav hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Button
              type="button"
              variant="ghost"
              className="justify-start"
              onClick={() => {
                closeMobile();
                openSearch();
              }}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
            <div className="px-3 py-2">
              <CurrencySwitcher compact />
            </div>
            <Button href="/#download" className="mt-2" onClick={closeMobile}>
              Get the App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
