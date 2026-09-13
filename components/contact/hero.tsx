export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(#1b365d_1px,transparent_1px)] bg-[length:22px_22px] opacity-[0.06]" />
        <div className="absolute -bottom-36 left-[-8%] h-[380px] w-[380px] rounded-full bg-[#1b365d]/10 blur-[100px]" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full border border-primary/20" />
        <div className="absolute -right-8 top-28 h-48 w-48 rounded-full border border-primary/15" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full border border-[#1b365d]/10" />
        <div className="absolute bottom-16 left-16 h-3 w-3 rounded-full bg-primary/40" />
        <div className="absolute top-20 left-[22%] h-2 w-2 rounded-full bg-primary/50" />
        <div className="absolute right-[18%] top-28 h-2.5 w-2.5 rounded-full bg-primary/35" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Contact Us
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          We&apos;d Love to Hear From You
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Questions about buying, selling, partnerships, or support? Send us a message and our
          team will get back to you.
        </p>
      </div>
    </section>
  );
}
