import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guides — A-Shopper",
  description: "Practical guides for buying, renting, and selling engineering equipment on A-Shopper.",
};

export default function GuidesPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Guides</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          How to buy, rent, and sell with confidence
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Buyer and vendor guides are on the way. Start with How it Works and Money Protection while
          we publish the full library.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/how-it-works">How it works</Button>
          <Button href="/escrow" variant="outline">
            Money Protection
          </Button>
        </div>
      </section>
    </main>
  );
}
