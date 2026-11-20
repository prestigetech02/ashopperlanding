"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/waitlist-modal";

export function MoneyProtectionClosing() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative min-h-[16rem] bg-muted sm:min-h-[18rem] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering equipment ready for secure purchase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>

            <div className="flex flex-col justify-center px-8 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Shop equipment with confidence
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Download A-Shopper and buy or rent engineering equipment with Money Protection on
                  every order.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button type="button" onClick={() => setWaitlistOpen(true)}>
                    Get the App
                  </Button>
                  <Button href="/marketplace" variant="outline">
                    Browse Equipment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </section>
  );
}
