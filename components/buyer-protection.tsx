import Image from "next/image";
import { BadgeCheck, FileText, RefreshCcw, ShieldCheck } from "lucide-react";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Your Money is Safe",
    body: "Funds are held securely and only released once you confirm delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Only Verified Vendors",
    body: "Every vendor on A-Shopper is verified. Check ratings, reviews, and badges before you buy.",
  },
  {
    icon: RefreshCcw,
    title: "Refund If It Doesn't Match",
    body: "If the equipment you receive doesn't match the listing, dispute it in-app and request an instant refund.",
  },
  {
    icon: FileText,
    title: "Full Transparency",
    body: "Every step, payment, dispatch, delivery, release, is logged in the app, so you always know where your order is.",
  },
];

export function BuyerProtection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Buyer Protection
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Money Stays Safe Until Equipment Arrives
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              When you choose Money Protection, your payment is held safely until you confirm
              your equipment has arrived. Vendors ship knowing payment is guaranteed, and you
              stay fully in control.
            </p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#f3f4f6] lg:min-h-[280px]">
            <Image
              src="/images/user.png"
              alt="A-Shopper buyer app showing order confirmation and request status"
              fill
              className="object-contain object-center p-4 sm:p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <ul className="mt-10 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, body }) => (
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
