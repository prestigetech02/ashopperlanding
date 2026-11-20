import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VendorsHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="vendors-diagonal-lines pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl lg:w-[58%]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div className="relative max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-[#102018] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.1]">
            Sell engineering equipment with confidence
          </h1>
          <p className="mt-3 text-lg font-semibold text-[#1c2430] sm:text-xl">
            List from your phone. Get paid after delivery.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A-Shopper helps you connect with buyers, manage your sales, and receive payment
            securely through Money Protection. Free to join. No subscription fees. Pay only when
            you make a sale.
          </p>

          <div className="mt-8">
            <Button href="/#download" className="rounded-full px-6">
              Become a vendor
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-muted sm:rounded-[1.75rem]">
              <Image
                src="/images/vendors/hero.jpg"
                alt="Vendor demonstrating engineering equipment to a buyer"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 280px"
                className="object-cover object-[center_25%]"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-muted sm:mt-12 sm:rounded-[1.75rem]">
              <Image
                src="/images/vendors/hero-2.jpg"
                alt="Buyer and vendor reviewing heavy equipment details"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 280px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 w-[min(15.5rem,calc(100%-2rem))] -translate-x-1/2 sm:bottom-6">
            <div className="overflow-hidden rounded-[1.35rem] border border-border bg-background">
              <div className="border-b border-border px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Vendor payout
                </p>
                <p className="mt-1 text-sm font-semibold text-[#102018]">Payment secured</p>
              </div>
              <div className="space-y-3 px-4 py-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">Buyer paid</span>
                  <span className="font-semibold text-[#102018]">Held safely</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold text-[#102018]">Confirmed</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">Your payout</span>
                  <span className="font-semibold text-primary">Released</span>
                </div>
                <div className="rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white">
                  Funds on the way
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
