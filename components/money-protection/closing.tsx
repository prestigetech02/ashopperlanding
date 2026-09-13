import { Button } from "@/components/ui/button";

export function MoneyProtectionClosing() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid lg:grid-cols-[auto_minmax(0,1fr)]">
            <div className="flex items-center justify-center bg-primary px-10 py-12 lg:min-w-[11rem] lg:px-12">
              <p className="text-center text-5xl font-bold text-white lg:text-6xl">MP</p>
            </div>
            <div className="flex flex-col justify-center gap-6 px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Shop equipment with confidence
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Download A-Shopper and buy or rent engineering equipment with Money Protection on
                  every order.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/#download">Get the App</Button>
                <Button href="/marketplace" variant="outline">
                  Browse Equipment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
