"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

const VENDOR_FAQS = (FAQ_CATEGORIES.find((category) => category.id === "vendors")?.items ?? []).slice(
  0,
  5
);

export function VendorsFaq() {
  const [active, setActive] = useState(0);
  const current = VENDOR_FAQS[active];

  if (!current) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions sellers ask before joining
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          <ul className="border-y border-border">
            {VENDOR_FAQS.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.q} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full items-start gap-4 py-5 text-left transition-colors sm:gap-5",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 w-8 shrink-0 text-sm font-bold tabular-nums",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 text-sm sm:text-base",
                        isActive ? "font-semibold" : "font-medium"
                      )}
                    >
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-out",
                        isActive && "rotate-45"
                      )}
                      strokeWidth={2}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Answer
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {current.q}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {current.a}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
