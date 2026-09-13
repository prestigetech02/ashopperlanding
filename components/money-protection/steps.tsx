import { CircleCheck, Lock, Package, Truck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Lock,
    title: "You pay with Money Protection",
    body: "Funds locked securely, vendor cannot access them yet.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Vendor dispatches",
    body: "Equipment is shipped or prepared for delivery.",
  },
  {
    number: "03",
    icon: Package,
    title: "You confirm delivery",
    body: "Inspect the equipment and approve in-app.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Payment released",
    body: "Vendor receives payout after your confirmation.",
  },
];

export function MoneyProtectionSteps() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How Money Protection Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four steps. One safe payment path.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
            From lock to release, every stage is visible in the A-Shopper app.
          </p>
        </div>

        <ol className="mt-12 grid gap-0 border-y border-border lg:grid-cols-4">
          {STEPS.map(({ number, icon: Icon, title, body }) => (
            <li
              key={number}
              className="border-border px-6 py-8 max-lg:border-b max-lg:last:border-b-0 lg:border-r lg:last:border-r-0 lg:px-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-4xl font-bold tabular-nums text-primary">{number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
              </div>
              <h3 className="mt-6 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
