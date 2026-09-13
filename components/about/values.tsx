import { Globe, Handshake, Shield, Smartphone } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Trust first",
    body: "Verification, Money Protection, and clear order flows so money and equipment move with confidence.",
  },
  {
    icon: Handshake,
    title: "Fair for both sides",
    body: "Buyers get protection; vendors get guaranteed payment once delivery is confirmed.",
  },
  {
    icon: Smartphone,
    title: "Built for the field",
    body: "Fast mobile experiences for people sourcing or selling equipment between jobs, not from an office.",
  },
  {
    icon: Globe,
    title: "Growing globally",
    body: "We start where the demand is strongest and expand markets as buyers and vendors grow with us.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Our Values
        </h2>
        <ul className="mt-8 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="border-border p-6 max-lg:border-b sm:max-lg:odd:border-r sm:max-lg:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
