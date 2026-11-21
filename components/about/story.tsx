import Image from "next/image";

export function AboutStory() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why A-Shopper Exists
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buying engineering equipment has often meant phone calls, bank transfers, and trust
            gaps between strangers. Vendors struggled to reach buyers beyond their local network,
            and buyers risked paying before ever seeing the machine.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A-Shopper was built to close that gap: one place where listings, conversation, payment
            protection, and delivery confirmation happen together, on the phones people already use
            on site.
          </p>
        </div>

        <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#f3f4f6] lg:min-h-[360px]">
          <Image
            src="/images/vendor.png"
            alt="A-Shopper app showing vendor chat and product details"
            fill
            className="object-cover object-center !top-3 lg:!top-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
