"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    q: "What types of equipment can I buy or rent?",
    a: "A-Shopper covers the full engineering and industrial space: power tools, hand tools, heavy machinery (excavators, loaders, generators), welding equipment, compressors, safety gear, scaffolding, and equipment rentals. If it's engineering or industrial equipment, you'll find it on A-Shopper.",
  },
  {
    q: "Can I negotiate the price with a vendor?",
    a: "Yes. Every listing has an in-app chat button. Message the vendor directly to ask questions, negotiate a custom price, request a bulk discount, or arrange rental terms. Once you agree, you can pay securely with Money Protection right from the chat.",
  },
  {
    q: "How does delivery work, and what if my equipment doesn't arrive?",
    a: "Vendors dispatch equipment and update the order status in-app, so you can track your delivery from dispatch to arrival. If your equipment doesn't arrive or doesn't match the listing, you can dispute the order in-app. Your Money Protection payment stays protected until you confirm delivery.",
  },
  {
    q: "Is there a web version, or is everything on the mobile app?",
    a: "Everything happens in the A-Shopper mobile app — browsing, chatting, paying, and tracking delivery. There is no web dashboard. This keeps the full buying experience in your pocket, whether you're on-site, in the office, or on the road.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="rounded-2xl border border-border bg-background">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground"
      >
        {q}
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
            open && "rotate-45"
          )}
          strokeWidth={2}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              "px-5 pb-4 text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 ease-out",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            {a}
          </p>
        </div>
      </div>
    </li>
  );
}

export function FAQ() {
  return (
    <section id="faqs" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Help Center
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quick answers about buying, renting, Money Protection payments, vendor selling, and
              getting support on A-Shopper.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#download">Get the App</Button>
              <Button href="/contact" variant="outline">
                Contact Support
              </Button>
            </div>
          </div>

          <ul className="grid gap-3">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
