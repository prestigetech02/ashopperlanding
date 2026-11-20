import { BadgeCheck, Banknote, Globe, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    label: "Money Protection",
    body: "Payments held safely until delivery is confirmed.",
  },
  {
    icon: BadgeCheck,
    label: "Verified Vendors",
    body: "Trade with reviewed sellers you can rely on.",
  },
  {
    icon: Globe,
    label: "Global Trade",
    body: "Connect with buyers and vendors across markets.",
  },
  {
    icon: Banknote,
    label: "Local Currency",
    body: "Browse and deal in prices that make sense locally.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-background">
      <ul className="mx-auto grid max-w-7xl divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label, body }, index) => (
          <li
            key={label}
            className={`flex gap-4 px-4 py-7 sm:px-6 lg:px-8 lg:py-8 ${
              index % 2 === 1 ? "sm:border-l sm:border-border" : ""
            } ${index >= 2 ? "sm:border-t sm:border-border lg:border-t-0" : ""} ${
              index > 0 ? "lg:border-l lg:border-border" : ""
            }`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#102018]">{label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
