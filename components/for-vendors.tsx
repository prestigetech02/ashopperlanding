import { Gift, Globe, ShieldCheck, Zap } from "lucide-react";

const POINTS = [
  {
    icon: Zap,
    title: "List in Seconds",
    body: "Snap photos from your phone and go live instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Payment",
    body: "Once the buyer confirms delivery, your payment is released through Money Protection, straight to you.",
  },
  {
    icon: Globe,
    title: "Reach Buyers Worldwide",
    body: "Connect with buyers across our fast-growing global marketplace.",
  },
];

export function ForVendors() {
  return (
    <section className="bg-[#fff8f2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Vendors & Suppliers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              List in Seconds. Get Paid.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sell engineering equipment? Join A-Shopper as a vendor. List heavy machinery,
              power tools, and industrial gear, chat directly with buyers, and get paid, no
              laptop required.
            </p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {POINTS.map(({ icon: Icon, title, body }) => (
                <li key={title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fff0e4] px-4 py-2.5 text-sm font-medium text-primary">
              <Gift className="h-4 w-5 shrink-0" strokeWidth={2.2} />
              Free to join. No subscription fees. Pay only when you sell.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-muted lg:min-h-[420px]">
            <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-muted-foreground lg:min-h-[420px]">
              Vendors image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
