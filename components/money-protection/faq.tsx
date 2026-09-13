"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    q: "When does the vendor get my money?",
    a: "Only after you confirm delivery in the app. Until then, your payment stays protected and the vendor cannot withdraw it.",
  },
  {
    q: "What if the equipment doesn't match the listing?",
    a: "You can open a dispute directly in the app. Your payment stays protected while our team reviews it, and a refund is processed if the dispute is upheld.",
  },
  {
    q: "Do I ever pay the vendor directly?",
    a: "No. All payments go through A-Shopper's Money Protection system. You should never be asked to pay a vendor outside the app.",
  },
  {
    q: "Can vendors see that payment is secured before shipping?",
    a: "Yes. Vendors are notified once your payment is secured, so they can dispatch your order with confidence, without ever accessing your funds directly.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-border last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-foreground sm:text-base"
      >
        {q}
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-out",
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
              "pb-5 text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 ease-out",
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

export function MoneyProtectionFaq() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Money Protection FAQs
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Common questions, clear answers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything you need to know about locked funds, delivery confirmation, disputes, and
              vendor payouts.
            </p>
          </div>

          <ul className="rounded-2xl border border-border bg-white px-5 sm:px-6">
            {QUESTIONS.map((item) => (
              <AccordionItem key={item.q} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
