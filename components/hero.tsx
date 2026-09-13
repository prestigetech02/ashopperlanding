import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import { HeroSearch } from "@/components/hero-search";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Money Protection" },
  { icon: BadgeCheck, label: "Verified Vendors" },
  { icon: Truck, label: "Nationwide Delivery" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f4f7fb_0%,_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            The World&apos;s First Global Engineering Equipment{" "}
            <span className="text-primary">Marketplace</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-foreground sm:text-xl">
            Buy, Sell, and Rent Engineering Equipment, Right From Your Phone
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.4} />
                {label}
              </li>
            ))}
          </ul>

          <HeroSearch />
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-muted lg:min-h-[460px]">
          <div className="flex h-full min-h-[320px] items-center justify-center text-sm text-muted-foreground lg:min-h-[460px]">
            Hero image
          </div>
        </div>
      </div>
    </section>
  );
}
