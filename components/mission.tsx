import Image from "next/image";

export function Mission() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/mission.jpg"
            alt="Construction professional on site with heavy equipment"
            width={780}
            height={520}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:leading-tight">
            A-Shopper is built on fairness and trust, for buyers and vendors alike.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every transaction is designed to be honest, transparent, and seamless, so you can
            buy, sell, or rent with complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
