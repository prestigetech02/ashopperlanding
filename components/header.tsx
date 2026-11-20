"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { useSearch } from "@/components/search-provider";
import { WaitlistModal } from "@/components/waitlist-modal";
import { cn } from "@/lib/utils";

type MegaLink = {
  label: string;
  href: string;
  description: string;
};

type MegaMenu = {
  id: "about" | "shop" | "resources";
  label: string;
  links: MegaLink[];
  image: {
    src: string;
    alt: string;
    title: string;
    body: string;
    href: string;
    cta: string;
  };
};

const MEGA_MENUS: MegaMenu[] = [
  {
    id: "about",
    label: "About",
    links: [
      {
        label: "How it works",
        href: "/how-it-works",
        description: "How buyers and vendors connect.",
      },
      {
        label: "Money Protection",
        href: "/escrow",
        description: "Payments held until delivery.",
      },
      {
        label: "For Vendors",
        href: "/vendors",
        description: "List equipment and get paid.",
      },
    ],
    image: {
      src: "/images/mission.jpg",
      alt: "Construction professional reviewing equipment on site",
      title: "Built for engineering trade",
      body: "Trust, protection, and real equipment deals.",
      href: "/about",
      cta: "About A-Shopper",
    },
  },
  {
    id: "shop",
    label: "Shop",
    links: [
      {
        label: "Buy",
        href: "/marketplace?type=sale",
        description: "Own tools and machines long-term.",
      },
      {
        label: "Rent",
        href: "/marketplace?type=rent",
        description: "Get the right machine for the job.",
      },
      {
        label: "Shop all",
        href: "/marketplace",
        description: "Browse the full equipment catalogue.",
      },
    ],
    image: {
      src: "/images/categories/heavy-machinery.jpg",
      alt: "Yellow excavator on a construction site",
      title: "Find equipment faster",
      body: "Machinery and tools from verified vendors.",
      href: "/marketplace",
      cta: "Open marketplace",
    },
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      {
        label: "FAQ",
        href: "/faq",
        description: "Answers on buying, renting, and pay.",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "News and marketplace insights.",
      },
      {
        label: "Guides",
        href: "/guides",
        description: "Practical help for trade on A-Shopper.",
      },
      {
        label: "Our Policies",
        href: "/policies",
        description: "Terms, privacy, and cookies.",
      },
    ],
    image: {
      src: "/images/categories/safety.jpg",
      alt: "Construction workers reviewing documents on site",
      title: "Learn before you trade",
      body: "Guides and support for confident deals.",
      href: "/faq",
      cta: "Visit help center",
    },
  },
];

const navTriggerClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-nav transition-colors hover:text-primary";

export function Header() {
  const [openMenu, setOpenMenu] = useState<MegaMenu["id"] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MegaMenu["id"] | null>(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const { openSearch } = useSearch();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDesktopMenu = (id: MegaMenu["id"]) => {
    clearCloseTimer();
    setOpenMenu(id);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => () => clearCloseTimer(), []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
          {(["about", "shop", "pricing", "resources"] as const).map((item) => {
            if (item === "pricing") {
              return (
                <Link
                  key="pricing"
                  href="/pricing"
                  className={cn(navTriggerClass, "rounded-full px-3.5 py-2")}
                  onMouseEnter={() => setOpenMenu(null)}
                >
                  Pricing
                </Link>
              );
            }

            const menu = MEGA_MENUS.find((entry) => entry.id === item)!;
            const isOpen = openMenu === menu.id;
            const panelAlign =
              menu.id === "resources" ? "right-0" : menu.id === "shop" ? "left-1/2 -translate-x-1/2" : "left-0";

            return (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => openDesktopMenu(menu.id)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={cn(
                    navTriggerClass,
                    "rounded-full px-3.5 py-2",
                    isOpen && "bg-muted text-primary"
                  )}
                  aria-expanded={isOpen}
                  aria-controls={`${menuId}-${menu.id}`}
                  onFocus={() => openDesktopMenu(menu.id)}
                  onClick={() => setOpenMenu(isOpen ? null : menu.id)}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`${menuId}-${menu.id}`}
                    role="menu"
                    className={cn(
                      "absolute top-[calc(100%+0.85rem)] z-50 w-[min(42rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_50px_-24px_rgba(16,32,24,0.45)]",
                      panelAlign
                    )}
                  >
                    <div className="grid grid-cols-[1.35fr_0.9fr]">
                      <div className="p-3">
                        <p className="px-2.5 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {menu.label}
                        </p>
                        <ul className="grid grid-cols-2 gap-0.5">
                          {menu.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                role="menuitem"
                                onClick={closeAll}
                                className="group block h-full rounded-xl px-2.5 py-2.5 transition-colors hover:bg-muted"
                              >
                                <span className="text-sm font-semibold text-nav transition-colors group-hover:text-primary">
                                  {link.label}
                                </span>
                                <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
                                  {link.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={menu.image.href}
                        onClick={closeAll}
                        className="group relative m-3 ml-0 min-h-[13.5rem] overflow-hidden rounded-xl"
                      >
                        <Image
                          src={menu.image.src}
                          alt={menu.image.alt}
                          fill
                          sizes="240px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/88 via-[#102018]/25 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                          <p className="text-sm font-semibold tracking-tight">{menu.image.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-white/80">{menu.image.body}</p>
                          <span className="mt-3 inline-flex text-xs font-semibold">
                            {menu.image.cta}
                            <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button type="button" variant="icon" ariaLabel="Search" onClick={() => openSearch()}>
            <Search className="h-5 w-5" />
          </Button>
          <CurrencySwitcher />
          <Button type="button" onClick={() => setWaitlistOpen(true)}>
            Get the App
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-nav hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open);
            setMobileSection(null);
          }}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {(["about", "shop", "pricing", "resources"] as const).map((item) => {
              if (item === "pricing") {
                return (
                  <Link
                    key="pricing"
                    href="/pricing"
                    onClick={closeAll}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-nav hover:bg-muted"
                  >
                    Pricing
                  </Link>
                );
              }

              const menu = MEGA_MENUS.find((entry) => entry.id === item)!;
              const isOpen = mobileSection === menu.id;

              return (
                <div key={menu.id} className="border-b border-border/70 pb-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-nav"
                    aria-expanded={isOpen}
                    onClick={() => setMobileSection(isOpen ? null : menu.id)}
                  >
                    {menu.label}
                    <ChevronDown className={cn("h-4 w-4", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="pb-2 pl-2">
                      {menu.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeAll}
                          className="block rounded-lg px-3 py-2.5"
                        >
                          <span className="block text-sm font-medium text-nav">{link.label}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                            {link.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Button
              type="button"
              variant="ghost"
              className="justify-start"
              onClick={() => {
                closeAll();
                openSearch();
              }}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
            <div className="px-3 py-2">
              <CurrencySwitcher compact />
            </div>
            <Button
              type="button"
              className="mt-2"
              onClick={() => {
                closeAll();
                setWaitlistOpen(true);
              }}
            >
              Get the App
            </Button>
          </nav>
        </div>
      )}

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </header>
  );
}
