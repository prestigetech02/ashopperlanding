const FLOW = [
  {
    number: "01",
    title: "You pay with Money Protection",
    body: "Funds locked securely.",
  },
  {
    number: "02",
    title: "Vendor dispatches",
    body: "Equipment shipped to you.",
  },
  {
    number: "03",
    title: "You confirm delivery",
    body: "Inspect & approve.",
  },
  {
    number: "04",
    title: "Payment released",
    body: "Vendor gets paid.",
  },
];

export function HowItWorksFlow() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Money Protection Flow
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How payment moves from lock to release
          </h2>
        </div>

        <ol className="mt-10 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map(({ number, title, body }, index) => (
            <li
              key={number}
              className="relative border-border p-6 max-lg:border-b sm:max-lg:odd:border-r sm:max-lg:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8"
            >
              <span className="text-3xl font-bold text-primary/20">{number}</span>
              <h3 className="mt-3 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {index < FLOW.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-1/2 bg-primary/30 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
