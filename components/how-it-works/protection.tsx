import { Check, FileText, ShieldOff } from "lucide-react";

const POINTS = [
  {
    icon: ShieldOff,
    title: "Vendor cannot access funds before delivery confirmation.",
  },
  {
    icon: FileText,
    title: "Full order status logged from payment to release.",
  },
  {
    icon: Check,
    title: "Dispute path available if the listing doesn't match what you receive.",
  },
];

export function HowItWorksProtection() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Buyer Protection
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Money Stays Safe Until Equipment Arrives
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Money Protection is the core of every A-Shopper purchase. You never pay a vendor
            directly. Funds are held until you confirm the equipment matches the listing, and if
            something is wrong, you can dispute in-app while payment remains protected.
          </p>
        </div>

        <ul className="grid gap-3">
          {POINTS.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="pt-2 text-sm font-medium leading-relaxed text-foreground">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
