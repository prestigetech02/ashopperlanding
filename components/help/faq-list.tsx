"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

function AccordionItem({
  index,
  q,
  a,
}: {
  index: number;
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-border last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start gap-4 py-5 text-left sm:gap-5"
      >
        <span className="mt-0.5 w-8 shrink-0 text-sm font-bold tabular-nums text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1 text-sm font-medium text-foreground sm:text-base">{q}</span>
        <Plus
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-out",
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
              "pb-5 pl-12 text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 ease-out sm:pl-[3.25rem]",
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

export function HelpFaqList() {
  const [active, setActive] = useState(FAQ_CATEGORIES[0].id);
  const category = FAQ_CATEGORIES.find((item) => item.id === active) ?? FAQ_CATEGORIES[0];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-background p-2">
          {FAQ_CATEGORIES.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-nav hover:bg-muted hover:text-primary"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
            <h2 className="text-base font-bold text-foreground">{category.label}</h2>
            <p className="text-sm text-muted-foreground">
              {category.items.length} question{category.items.length === 1 ? "" : "s"}
            </p>
          </div>
          <ul className="px-5 sm:px-6">
            {category.items.map((item, index) => (
              <AccordionItem key={item.q} index={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
