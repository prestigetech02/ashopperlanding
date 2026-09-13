import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(#1b365d_1px,transparent_1px)] bg-[length:22px_22px] opacity-[0.06]" />
        <div className="absolute -bottom-36 left-[-8%] h-[380px] w-[380px] rounded-full bg-[#1b365d]/10 blur-[100px]" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full border border-primary/20" />
        <div className="absolute -right-8 top-28 h-48 w-48 rounded-full border border-primary/15" />
        <div className="absolute -left-24 bottom-24 h-80 w-80 rounded-full border border-[#1b365d]/10" />
        <div className="absolute bottom-40 left-16 h-3 w-3 rounded-full bg-primary/40" />
        <div className="absolute top-24 left-[22%] h-2 w-2 rounded-full bg-primary/50" />
        <div className="absolute right-[18%] top-40 h-2.5 w-2.5 rounded-full bg-primary/35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Building the World&apos;s First Global Engineering Equipment{" "}
            <span className="text-primary">Marketplace</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A-Shopper is purpose-built for engineering equipment, not a generic marketplace with
            machines as an afterthought. From excavators to power tools, we connect buyers and
            verified vendors of heavy machinery, power tools, and industrial equipment, with chat,
            Money Protection, and delivery tracking built into one mobile app.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/#download">Get the App</Button>
            <Button href="/vendors" variant="outline">
              Become a Vendor
            </Button>
          </div>
        </div>

        <Image
          src="/images/maps.png"
          alt="Global A-Shopper marketplace connections"
          width={1983}
          height={793}
          className="mt-12 h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}
