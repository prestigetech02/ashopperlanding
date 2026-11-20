import { Button } from "@/components/ui/button";

export function HelpHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Help Center
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Answers about buying, renting, Money Protection payments, vendor selling, and getting
              support on A-Shopper.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/#download">Get the App</Button>
            <Button href="/contact" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
