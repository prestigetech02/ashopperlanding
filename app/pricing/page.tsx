import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing — A-Shopper",
  description:
    "Simple pricing for buying, renting, and selling engineering equipment on A-Shopper.",
};

export default function PricingPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Transparent fees for buyers and vendors
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We are finalising clear pricing for listings, rentals, and Money Protection. Download the
          app to start trading, and check back here for the full breakdown.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/#download">Get the App</Button>
          <Button href="/contact" variant="outline">
            Talk to us
          </Button>
        </div>
      </section>
    </main>
  );
}
