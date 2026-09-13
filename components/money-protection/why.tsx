import {
  BadgeCheck,
  Eye,
  HandCoins,
  RefreshCcw,
  ShieldCheck,
  Timer,
} from "lucide-react";

const BUYER = [
  {
    icon: ShieldCheck,
    title: "Your money stays safe",
    body: "When you pay, funds are held securely. The vendor cannot access them until you confirm delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Verified vendors only",
    body: "Check ratings, reviews, and verification badges before you spend, trade with more confidence.",
  },
  {
    icon: RefreshCcw,
    title: "Dispute if it doesn't match",
    body: "If equipment doesn't match the listing, open a dispute in-app. Your payment stays protected while it's reviewed.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    body: "Payment, dispatch, delivery, and release are logged in the app so you always know order status.",
  },
];

const VENDOR = [
  {
    icon: HandCoins,
    title: "Guaranteed buyer funds",
    body: "You only dispatch after payment is secured, so you're not shipping against an empty promise.",
  },
  {
    icon: Timer,
    title: "Clear payout timing",
    body: "Once the buyer confirms delivery, payout is released. Track every step from the vendor app.",
  },
];

export function MoneyProtectionWhy() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why Money Protection Matters
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built to protect both sides of every deal
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
              <h3 className="text-lg font-bold text-foreground">For Buyers</h3>
              <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                Protected
              </span>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {BUYER.map(({ icon: Icon, title, body }) => (
                <li key={title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h4 className="mt-3 text-sm font-bold text-foreground">{title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0d2744] bg-[#0d2744] p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-4">
              <h3 className="text-lg font-bold text-white">For Vendors</h3>
              <span className="rounded-full border border-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                Guaranteed
              </span>
            </div>
            <ul className="mt-6 grid gap-6">
              {VENDOR.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
