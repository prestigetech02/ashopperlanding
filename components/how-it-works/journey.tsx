import {
  CircleCheck,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Truck,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download the App",
    body: "Install A-Shopper on iOS or Android and create your buyer account in under a minute.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find Your Equipment",
    body: "Browse machinery, tools, and rentals. Filter by category, specs, and availability to shortlist the right gear.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat With the Vendor",
    body: "Ask questions, negotiate price, or request rental terms directly in-app before you commit.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Pay With Money Protection",
    body: "Checkout securely. Your payment is held safely, the vendor cannot access it until you confirm delivery.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Track Delivery",
    body: "Follow order status from dispatch to arrival so you always know where your equipment is.",
  },
  {
    number: "06",
    icon: CircleCheck,
    title: "Confirm and Release",
    body: "Inspect the equipment, confirm it matches the listing, and release payment to the vendor in one tap.",
  },
];

export function HowItWorksJourney() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Buyer Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Six steps from install to release
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ number, icon: Icon, title, body }) => (
            <li
              key={number}
              className="group rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Step {number}
                </span>
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
