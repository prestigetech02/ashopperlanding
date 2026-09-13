import { MessageCircle, Search, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Browse verified listings",
    body: "Find heavy machinery, industrial gear, and rentals from vendors worldwide.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Chat with sellers",
    body: "Ask questions, negotiate, and request quotes without leaving the app.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Pay with Money Protection",
    body: "Funds are held securely until you confirm delivery, protecting both sides.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Get equipment delivered",
    body: "Track fulfillment and release payment only when the gear arrives as expected.",
  },
];

export function AboutHow() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          How It Works
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How the Marketplace Works
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, icon: Icon, title, body }, index) => (
            <li key={number} className="relative">
              <div className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {number}
                </span>
                <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-2 hidden h-px flex-1 border-t border-dashed border-primary/40 lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
