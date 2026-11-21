import Link from "next/link";
import { Headphones, CircleQuestionMark, Store } from "lucide-react";

const CHANNELS = [
  {
    icon: Headphones,
    title: "General Support",
    body: "Help with your account, orders, or app experience.",
    action: "Email support",
    href: "mailto:support@a-shopper.com",
  },
  {
    icon: Store,
    title: "Vendor & Partnerships",
    body: "Onboarding, supplier programs, and business inquiries.",
    action: "Become a vendor",
    href: "/vendors",
  },
  {
    icon: CircleQuestionMark,
    title: "FAQs",
    body: "Quick answers about buying, Money Protection, rentals, and selling.",
    action: "Browse FAQs",
    href: "/faq",
  },
];

export function ContactChannels() {
  return (
    <ul className="grid gap-4">
      {CHANNELS.map(({ icon: Icon, title, body, action, href }) => (
        <li key={title}>
          <Link
            href={href}
            className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h2 className="mt-4 text-base font-bold text-foreground">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <p className="mt-4 text-sm font-medium text-primary">{action}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
