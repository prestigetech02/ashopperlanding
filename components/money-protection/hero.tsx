import { Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MoneyProtectionHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="bg-[#0d2744] px-8 py-12 sm:px-10 lg:px-12 lg:py-16">
            <p className="inline-flex rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Money Protection
            </p>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Your Money Stays Safe Until Equipment Arrives
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Every A-Shopper purchase is protected by built-in Money Protection. You never pay a
              vendor directly, funds are held until you confirm delivery, and vendors ship knowing
              payment is locked in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/marketplace">Shop With Money Protection</Button>
              <Button
                href="/how-it-works"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                See How Buying Works
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-8 bg-primary-soft px-8 py-12 sm:px-10 lg:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-primary/25" />
              <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full border border-primary/20" />
            </div>

            <div className="relative">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary bg-white text-primary">
                <ShieldCheck className="h-8 w-8" strokeWidth={2} />
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Locked until you confirm
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                Funds stay protected from payment to release.
              </p>
            </div>

            <ul className="relative grid gap-3">
              {[
                "Never pay a vendor directly",
                "Payment locked until delivery confirmation",
                "Vendors dispatch only after funds are secured",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground"
                >
                  <Lock className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
