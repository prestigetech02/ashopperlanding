import { Button } from "@/components/ui/button";

export function HowItWorksClosing() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="border-border p-8 max-lg:border-b lg:border-r lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Buyers
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to find equipment?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Download A-Shopper and start browsing verified listings with Money
              Protection-backed checkout.
            </p>
            <div className="mt-6">
              <Button href="/#download">Get the App</Button>
            </div>
          </div>

          <div className="bg-surface p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Vendors
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Selling equipment instead?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              See how vendors list inventory, chat with buyers, and get paid after delivery
              confirmation.
            </p>
            <div className="mt-6">
              <Button href="/vendors" variant="outline">
                For Vendors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
