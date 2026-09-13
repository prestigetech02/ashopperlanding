import { Compass, Eye, Target } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    label: "Our Mission",
    body: "A-Shopper is built on fairness and trust, for buyers and vendors alike. Every transaction is designed to be honest, transparent, and seamless, so you can buy, sell, or rent with complete peace of mind.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    body: "To be the world's go-to network for engineering equipment, a marketplace where every buyer can find the right machine or tool from their phone, and every verified vendor can reach customers globally with guaranteed payment.",
  },
  {
    icon: Compass,
    label: "Our Approach",
    body: "Listings, chat, secure checkout, and delivery tracking all live in one app, designed for buyers and vendors who work on sites, not behind desks.",
  },
];

export function AboutPillars() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <ul className="grid gap-4 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, label, body }) => (
            <li
              key={label}
              className="group rounded-2xl border border-border bg-background p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h2 className="mt-4 text-base font-bold text-foreground">{label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
